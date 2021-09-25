import React from "react"

const resultIcon = ({color}) => {
  return (
    <svg width="20" height="20" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M1.7 3.4H0V15.3C0 16.235 0.765 17 1.7 17H13.6V15.3H1.7V3.4ZM15.3 0H5.1C4.165 0 3.4 0.765 3.4 1.7V11.9C3.4 12.835 4.165 13.6 5.1 13.6H15.3C16.235 13.6 17 12.835 17 11.9V1.7C17 0.765 16.235 0 15.3 0ZM14.45 7.65H5.95V5.95H14.45V7.65ZM11.05 11.05H5.95V9.35H11.05V11.05ZM14.45 4.25H5.95V2.55H14.45V4.25Z" fill={color}/>
    </svg>
  )
}

export default resultIcon