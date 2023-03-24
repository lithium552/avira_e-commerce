import { useState } from 'react'
import AuthReg from './AuthReg'

const SingInPage = () => {
    const [isSwitcherOn, setIsSwitcherOn] = useState(true)

    return (
        <AuthReg heading='Nice to see you again!' subHeading='' isReg={false} buttonText='Sign in' />
    )
}

export default SingInPage