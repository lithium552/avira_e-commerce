import React from 'react'
import Button from './Button'



const EditFormAddress = ({...rest}) => {
    return (
        <form key={rest.key} className='border border-neutralsRule rounded-lg py-6 px-6 mt-4'>
            <div className='flex gap-4'>
                <div className='flex flex-col'>
                    <label className='text-sm mb-2' htmlFor="name">Name:</label>
                    <input
                        className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                        type="text"
                        value={rest.editInputValues.name || rest.name }
                        onChange={(e) => rest.setEditInputValues(prev => ({ ...prev, name: e.target.value }))}
                        placeholder='your name'
                        id='name' />
                </div>
                <div className='flex flex-col'>
                    <label className='text-sm mb-2' htmlFor="surname">Surname:</label>
                    <input
                        className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                        type="text"
                        value={rest.editInputValues.surname || rest.surname}
                        onChange={(e) => rest.setEditInputValues(prev => ({ ...prev, surname: e.target.value }))}
                        placeholder='your surname'
                        id='surname' />
                </div>
            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-sm mb-2' htmlFor="street">Street:</label>
                <input
                    className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                    type="text"
                    value={rest.editInputValues.street || rest.street}
                    onChange={(e) => rest.setEditInputValues(prev => ({ ...prev, street: e.target.value }))}
                    placeholder='your street'
                    id='street' />
            </div>
            <div className='flex flex-col mt-4'>
                <label className='text-sm mb-2' htmlFor="city">City:</label>
                <input
                    className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                    type="text"
                    value={rest.editInputValues.city || rest.city}
                    onChange={(e) => rest.setEditInputValues(prev => ({ ...prev, city: e.target.value }))}
                    placeholder='your city'
                    id='city' />
            </div>
            <div className='flex gap-4'>
                <div className='flex flex-col mt-4'>
                    <label className='text-sm mb-2' htmlFor="index">Index:</label>
                    <input
                        className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                        type="text"
                        value={rest.editInputValues.index || rest.index}
                        onChange={(e) => rest.setEditInputValues(prev => ({ ...prev, index: e.target.value }))}
                        placeholder='your index'
                        id='index' />
                </div>
                <div className='flex flex-col mt-4'>
                    <label className='text-sm mb-2' htmlFor="phone">Phone:</label>
                    <input
                        className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 w-full'
                        type="text"
                        value={rest.editInputValues.phone || rest.phone}
                        onChange={(e) => rest.setEditInputValues(prev => ({ ...prev, phone: e.target.value }))}
                        placeholder='your phone'
                        id='phone' />
                </div>
            </div>
            <select onChange={rest.onSelectHandle} className='border rounded-lg focus-visible:outline-textColorAcc px-4 py-3 mt-4' name="" id="">
                <option selected={rest.isHome} value='home'>Home</option>
                <option selected={rest.isOffice} value='office'>Office</option>
                <option selected={!rest.isOffice && !rest.isHome} value=''>None</option>
            </select>
            <Button isArrow={false} buttonText='Submit' />
        </form>
    )
}

export default EditFormAddress