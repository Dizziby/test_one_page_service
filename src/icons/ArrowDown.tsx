import React from 'react'

const ArrowDown = ({
  width = 16,
  height = 16,
}: {
  width?: number
  height?: number
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M13 6L8 11L3 6"
        stroke={'currentColor'}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export default ArrowDown
