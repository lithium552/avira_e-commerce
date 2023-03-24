import React, { useState } from 'react'
import AuthReg from './AuthReg'

const SingUpPage = () => {
    const [isSwitcherOn, setIsSwitcherOn] = useState(true)

    return (
        <AuthReg heading='Create an Account' subHeading='Hello there, Let’s start your journey with us.' isReg={true} buttonText='Sign up' />
    )
}

export default SingUpPage