import React from 'react'
import { PriceDetailsProps } from './PriceDetails'

interface ButtonProps {
    buttonText: string
    isArrow: boolean
}

const Button = ({buttonText, isArrow} : ButtonProps) => {
  return (
    <button className='bg-textColorPrimary text-white w-full flex items-center gap-4 justify-center py-3 rounded-lg mt-8'>
    <span>{buttonText}</span>
    {isArrow && (
    <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15.75 1.25L19.5 5M19.5 5L15.75 8.75M19.5 5H1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>)}
</button>
  )
}

export default Button