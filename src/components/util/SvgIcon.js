import React from 'react'

const SvgIcon = ({ iconName, size, color }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height="100%"
      color={color}
      fill="currentcolor"
      viewBox="0 0 128 128"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
    >
        <g>
            <path d={iconName} fill="currentcolor" />
            <path d="M0 0h128v128H0z" fill="none" />
        </g>
    </svg>
  )
}

SvgIcon.defaultProps = {
  size: 64,
  color: 'inherit',
}

export default SvgIcon