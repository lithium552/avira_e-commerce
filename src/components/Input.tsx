import React from 'react'

interface InputProps {
    placeholder: string
    type: string
}

const Input = ({placeholder, type} : InputProps) => {
  return (
    <input className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full' type={type} name="" id="" placeholder={placeholder} required />
  )
}

export default Input