import React from 'react'
import Button from './Button'
import { useEffect, useState } from 'react'
import { AddressData } from '../routes/AddressPage'



const EditFormAddress = ({ ...rest }) => {

    useEffect(() => {
        const res = {
            _id: rest._id,
            name: rest.name,
            surname: rest.surname,
            street: rest.street,
            city: rest.city,
            index: rest.index,
            phone: rest.phone,
            isOffice: rest.isOffice,
            isHome: rest.isHome,
        }
        console.log(Object.values(res))
        if (Object.values(res).every(val => {
            if(typeof val === 'boolean') return true
            return val
        })) {
            rest.setEditInputValues({...res})
        }
        else rest.setEditInputValues((prev: AddressData) => prev)
    },[])
    
    const selectValue = (rest.isHome && 'home') || (rest.isOffice && 'office') || !(!rest.isOffice && !rest.isHome) || '' 

    console.log('run' ,rest, selectValue)
    return (
        <form key={rest.key} onSubmit={rest.onSubmitFormHandle} className='border border-neutralsRule rounded-lg py-6 px-6 my-4'>
            <svg onClick={() => {
                rest.setIsOpenEditForm(false)
            }} className='ml-auto hover:cursor-pointer' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_293_113)">
                    <path d="M11.5993 11.6002L0.399292 0.400177M0.399292 11.6002L11.5993 0.400177L0.399292 11.6002Z" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                    <clipPath id="clip0_293_113">
                        <rect width="12" height="12" fill="white" />
                    </clipPath>
                </defs>
            </svg>
            <div className='flex gap-4'>
                <div className='flex flex-col'>
                    <label className='text-sm mb-2' htmlFor="name">Name:</label>
                    <input
                        className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                        type="text"
                        value={rest.editInputValues.name}
                        onChange={(e) => rest.setEditInputValues((prev: AddressData) => ({ ...prev, name: e.target.value }))}
                        placeholder='your name'
                        id='name'
                        required
                        />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm mb-2' htmlFor="surname">Surname:</label>
                    <input
                        className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                        type="text"
                        value={rest.editInputValues.surname}
                        onChange={(e) => rest.setEditInputValues((prev: AddressData) => ({ ...prev, surname: e.target.value }))}
                        placeholder='your surname'
                        id='surname'
                        required
                        />
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-sm mb-2' htmlFor="street">Street:</label>
                <input
                    className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                    type="text"
                    value={rest.editInputValues.street}
                    onChange={(e) => rest.setEditInputValues((prev: AddressData) => ({ ...prev, street: e.target.value }))}
                    placeholder='your street'
                    id='street'
                    required
                    />
            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-sm mb-2' htmlFor="city">City:</label>
                <input
                    className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                    type="text"
                    value={rest.editInputValues.city}
                    onChange={(e) => rest.setEditInputValues((prev: AddressData) => ({ ...prev, city: e.target.value }))}
                    placeholder='your city'
                    id='city'
                    required
                    />
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col mt-4'>
                    <label className='text-sm mb-2' htmlFor="index">Index:</label>
                    <input
                        className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                        type="text"
                        value={rest.editInputValues.index}
                        onChange={(e) => rest.setEditInputValues((prev: AddressData) => ({ ...prev, index: e.target.value }))}
                        placeholder='your index'
                        id='index'
                        required
                        />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-sm mb-2' htmlFor="phone">Phone:</label>
                    <input
                        className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                        type="text"
                        value={rest.editInputValues.phone}
                        onChange={(e) => rest.setEditInputValues((prev: AddressData) => ({ ...prev, phone: e.target.value }))}
                        placeholder='your phone'
                        id='phone'
                        required
                        />
                </div>
            </div>
            <select
                onChange={rest.onSelectHandle}
                defaultValue={selectValue || ''}
                className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 mt-4' name="" id=""
            >
                <option value='home'>Home</option>
                <option value='office'>Office</option>
                <option value=''>None</option>
            </select>
            <Button isArrow={false} buttonText='Submit' />
        </form>
    )
}

export default EditFormAddress