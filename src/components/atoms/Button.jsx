import React from 'react'

const Button = ({children, type, size, padding, textColor, bgColor}) => {
  return (
    <button type={`${type}`} className={`${padding} w-${size} bg-${bgColor} text-${textColor} rounded-lg`}>{children}</button>
  )
}

export default Button