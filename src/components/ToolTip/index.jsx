import React, { useState, useRef, useEffect } from 'react'
import { usePopper } from 'react-popper'
const ToolTip = React.forwardRef(
  (
    {
      children,
      text,
      closeOnClick = false,
      className = '',
      placement = 'bottom',
      elementAs = 'div',
      offset = 5,
      strategy = 'absolute',
      ...otherProps
    },
    forwardedRef
  ) => {
    const referenceElement = useRef(null)
    const [popperElement, setPopperElement] = useState(null)
    const [arrowElement, setArrowElement] = useState(null)
    const { styles, attributes } = usePopper(
      referenceElement && referenceElement.current,
      popperElement,
      {
        strategy: strategy,
        modifiers: [
          { name: 'arrow', options: { element: arrowElement } },
          {
            name: 'offset',
            options: {
              offset: [0, 5],
            },
          },
        ],
        placement: placement,
      }
    )
    useEffect(() => {
      if (forwardedRef && referenceElement && referenceElement.current) {
        forwardedRef.current = referenceElement.current
      }
    }, [referenceElement])
    const [isOpen, setOpen] = useState(false)
    const open = () => !isOpen && setOpen(true)
    const close = () => setOpen(false)
    const As = elementAs

    return (
      <>
        <As
          className={className}
          ref={referenceElement}
          onMouseOver={open}
          onFocus={open}
          onMouseDown={() => closeOnClick && close()}
          onMouseLeave={close}
          {...otherProps}
        >
          {children}
        </As>
        {isOpen && (
          <div
            ref={setPopperElement}
            style={{
              ...styles.popper,
              borderRadius: 4,
              padding: '0px 8px',
              fontSize: 14,
            }}
            {...attributes.popper}
            className="popper-tool-tip"
          >
            {text}
            <div
              ref={setArrowElement}
              style={styles.arrow}
              className="popper-tool-tip__arrow"
            />
          </div>
        )}
      </>
    )
  }
)
export default ToolTip
