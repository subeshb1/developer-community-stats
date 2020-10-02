import React from 'react'
import { FaChevronDown, FaCubes } from 'react-icons/fa'
import { MdApps } from 'react-icons/md'
export const NavDropDownLink = React.forwardRef(
  ({ onChevronClick = () => {}, to, linkName, className, ...props }, ref) => {
    return (
      <button
        className={`lg-navbar__item ${className}`}
        {...props}
        ref={ref}
        tabIndex={0}
      >
        {linkName}
        <FaChevronDown
          size={'0.8em'}
          onClick={onChevronClick}
          className="lg-navbar__svg"
        />
      </button>
    )
  }
)

export const navDropDownFactory = (to, linkName) =>
  React.forwardRef((props, ref) => {
    return <NavDropDownLink to={to} linkName={linkName} {...props} ref={ref} />
  })

export const MobileNavDropDownLink = React.forwardRef(
  (
    {
      onChevronClick = () => {},
      to,
      linkName,
      className,
      iconsAs: IconAs = MdApps,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={`lg-navbar__item ${className}`}
        {...props}
        ref={ref}
        tabIndex={0}
      >
        {linkName}
        <IconAs onClick={onChevronClick} className="lg-navbar__svg" />
      </button>
    )
  }
)

export const mobileNavDropDownFactory = (to, linkName, iconsAs) =>
  React.forwardRef((props, ref) => {
    return (
      <MobileNavDropDownLink
        to={to}
        linkName={linkName}
        {...props}
        ref={ref}
        iconsAs={iconsAs}
      />
    )
  })
