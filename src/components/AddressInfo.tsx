import React from 'react'
import { AddressData } from '../routes/AddressPage'
interface AddressInfoProps {
    address: AddressData
}

const AddressInfo = ({address} : AddressInfoProps) => {
    return (
        <>
            <div className='flex gap-4 items-center mb-1'>
                <p className='font-semibold'>{address.name + ' ' + address.surname}</p>
                {address.isHome &&
                    <div className='w-11 h-5 rounded border border-[#2DC071] grid place-content-center'>
                        <p className='text-xs text-[#2DC071] '>Home</p>
                    </div>}
                {address.isOffice &&
                    <div className='w-11 h-5 rounded border border-[#EFAF00] grid place-content-center'>
                        <p className='text-xs text-[#EFAF00] '>Office</p>
                    </div>}
            </div>
            <p className='mb-1'>{address.street}</p>
            <p className='mb-1'>{address.city}</p>
            <p className='mb-1'>{address.index}</p>
            <p>Mobile: <strong>{address.phone}</strong></p>
        </>
    )
}

export default AddressInfo