import React from 'react'

interface InputProps {
    placeholder: string
    type: string
    setInputValue: React.Dispatch<React.SetStateAction<string>>
}

const Input = ({placeholder, type, setInputValue} : InputProps) => {


  return (
    <input 
    className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
    type={type} 
    id={placeholder}
    placeholder={placeholder}
    required
    onChange={(e) => setInputValue(e.target.value)} 
    />


  )
}

export default Input