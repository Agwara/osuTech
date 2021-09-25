import React from "react"

const printIcon = ({color}) => {
  return (
    <svg width="20" height="20" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M15.3 4.44444H2.7C1.206 4.44444 0 5.63556 0 7.11111V12.4444H3.6V16H14.4V12.4444H18V7.11111C18 5.63556 16.794 4.44444 15.3 4.44444ZM12.6 14.2222H5.4V9.77778H12.6V14.2222ZM15.3 8C14.805 8 14.4 7.6 14.4 7.11111C14.4 6.62222 14.805 6.22222 15.3 6.22222C15.795 6.22222 16.2 6.62222 16.2 7.11111C16.2 7.6 15.795 8 15.3 8ZM14.4 0H3.6V3.55556H14.4V0Z" fill={color}/>
    </svg>
  )
}

export default printIcon