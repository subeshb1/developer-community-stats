import React, { useState, useRef, useEffect } from 'react'

import { useClickAway } from 'react-use'
import { usePopper } from 'react-popper'
import { If } from '../utils'
const OPEN = 0
const CLOSE = 1
const OUT_CLOSE = 2
const Popover = React.forwardRef(
  (
    {
      debug,
      show,
      children,
      text,
      closeOnClick = false,
      className = '',
      placement = 'bottom',
      elementAs = 'div',
      render,
      strategy = 'absolute',
      offset = [0, 10],
      ...otherProps
    },
    forwardedRef
  ) => {
    const referenceElement = useRef(null)
    const [popperElement, setPopperElement] = useState(null)
    const { styles, attributes } = usePopper(
      referenceElement && referenceElement.current,
      popperElement,
      {
        placement: placement,
        strategy: strategy,
        modifiers: [
          {
            name: 'offset',
            options: {
              offset: offset,
            },
          },
        ],
      }
    )
    const [popoverState, setPopoverState] = useState(CLOSE)
    const toggle = () =>
      show == null &&
      setPopoverState(
        popoverState === OUT_CLOSE
          ? CLOSE
          : popoverState === CLOSE
          ? OPEN
          : CLOSE
      )
    useClickAway(
      { current: popperElement },
      ({ target }) =>
        show == null &&
        popoverState === OPEN &&
        setPopoverState(
          referenceElement &&
            referenceElement.current &&
            (referenceElement.current === target ||
              referenceElement.current.contains(target))
            ? OUT_CLOSE
            : CLOSE
        )
    )
    const As = elementAs
    useEffect(() => {
      if (forwardedRef && referenceElement && referenceElement.current) {
        forwardedRef.current = referenceElement.current
      }
    }, [referenceElement])
    return (
      <>
        <As
          className={className}
          ref={referenceElement}
          onClick={toggle}
          {...otherProps}
        >
          {render}
        </As>

        <If condition={show != null ? show : popoverState === OPEN}>
          <div
            ref={setPopperElement}
            style={{
              ...styles.popper,
            }}
            {...attributes.popper}
          >
            {children}
          </div>
        </If>
      </>
    )
  }
)
export default Popover
