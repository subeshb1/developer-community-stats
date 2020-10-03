import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { css } from '@emotion/core'
import theme from './theme/github'
const RE = /{([\d,-]+)}/
const wrapperStyles = css`
  margin-bottom: 1.5em;
  overflow: auto;
  border-radius: 4px;
`

const preStyles = css`
  float: left;
  padding: 10px;
  margin-bottom: 0em;
  min-width: 100%;
  overflow: initial;
`

function calculateLinesToHighlight(meta) {
  if (RE.test(meta)) {
    const lineNumbers = RE.exec(meta)[1]
      .split(',')
      .map(v => v.split('-').map(y => parseInt(y, 10)))
    return index => {
      const lineNumber = index + 1
      const inRange = lineNumbers.some(([start, end]) =>
        end ? lineNumber >= start && lineNumber <= end : lineNumber === start
      )
      return inRange
    }
  } else {
    return () => false
  }
}
export const Code = ({ codeString, language, metastring, ...props }) => {
  const shouldHighlightLine = calculateLinesToHighlight(metastring)
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <div css={wrapperStyles}>
          <pre className={className} style={style} css={preStyles}>
            {tokens.map((line, i) => (
              <div
                css={css`
                  line-height: 1.5rem;
                  letter-spacing: 0.6px;
                `}
                key={i}
                {...getLineProps({
                  line,
                  key: i,
                  className: shouldHighlightLine(i) ? 'highlight-line' : '',
                })}
              >
                <span
                  css={css`
                    display: inline-block;
                    width: 2em;
                    user-select: none;
                    font-size: 16px;
                    opacity: 0.5;
                    &:after {
                      content: '.';
                    }
                  `}
                >
                  {i + 1}
                </span>
                {line.map((token, key) => (
                  <span
                    css={css`
                      font-family: consolas, 'Inconsolata', monospace;
                      font-size: 16px;
                    `}
                    key={key}
                    {...getTokenProps({ token, key })}
                  />
                ))}
              </div>
            ))}
          </pre>
        </div>
      )}
    </Highlight>
  )
}
