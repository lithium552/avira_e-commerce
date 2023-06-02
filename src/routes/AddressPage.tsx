import React from 'react'
import Title from '../components/Title'
import PriceDetails from '../components/PriceDetails'
import EditFormAddress from '../components/EditFormAddress'
import { clearCart } from '../features/cart'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { fetchAddressData, editAddressData, addNewAddressData, deleteAddressData } from '../features/cart'
import { selectAllAddresses } from '../features/cart'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import AddressInfo from '../components/AddressInfo'
import { AppDispatch, RootState } from '../app/store'

export interface AddressData {
    _id: string,
    name: string,
    surname: string,
    street: string,
    city: string,
    index: string,
    phone: string,
    isOffice: boolean,
    isHome: boolean,
}

const intialStateForInputValues = {
    _id: '',
    name: '',
    surname: '',
    street: '',
    city: '',
    index: '',
    phone: '',
    isOffice: false,
    isHome: false,
}

export const radioInputStyles = 'appearance-none bg-white w-4 h-4 rounded-full border border-neutralsRule checked:border-textColorAcc checked:border-4'

const AddressPage = () => {
    const status = useSelector((state: RootState) => state.cart.addresses.status)
    const allAddressData = useSelector(selectAllAddresses)
    const [addressData, setAddressData] = React.useState<AddressData[]>([])
    const [radioInputValue, setRadioInputValue] = React.useState<string>('')
    const [isOpenEditForm, setIsOpenEditForm] = React.useState(false)
    const [isOpenAddNewForm, setIsOpenAddNewForm] = React.useState(false)
    const [editInputValues, setEditInputValues] = React.useState(intialStateForInputValues)
    const dispatch = useDispatch<AppDispatch>()
    const navigate = useNavigate()

    const onSubmitAddress = async () => {
        const address = addressData.find(item => item._id === radioInputValue)
        const products = JSON.parse(localStorage.getItem('cartItems') || '[]')
        const paymentMethod = JSON.parse(localStorage.getItem('paymentMethod') || '[]')
        localStorage.setItem('address', JSON.stringify(address))
        try {
            const fetch = await axios.post('https://avira-api-388212.lm.r.appspot.com/orders',{address: address, items: products, paymentMethod: paymentMethod}, {withCredentials: true})
        } catch (error) {
            console.log(error)
        }
        localStorage.removeItem('cartItems')
        dispatch(clearCart(null))
        navigate('/order')
    }

    const onSelectHandle = (e: { target: { value: string } }) => {
        if (e.target.value === 'office') setEditInputValues(prev => ({ ...prev, isOffice: true, isHome: false }))
        if (e.target.value === 'home') setEditInputValues(prev => ({ ...prev, isHome: true, isOffice: false }))
        if (e.target.value === '') setEditInputValues(prev => ({ ...prev, isHome: false, isOffice: false }))
    }

    const onSubmitEditAddressFormHandle = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        dispatch(editAddressData(editInputValues))
        setIsOpenEditForm(false)
    }

    const onSubmitAddNewAddressFormHandle = (e: { preventDefault: () => void }) => {
        e.preventDefault()
        dispatch(addNewAddressData({ ...editInputValues }))
        setIsOpenAddNewForm(false)
    }

    const onDeleteAddressHandle = (id: string) => {
        dispatch(deleteAddressData(id))
    }

    useEffect(() => {
        console.log('useeffect', addressData)
        dispatch(fetchAddressData())
        if (allAddressData) setAddressData(allAddressData)
    }, [allAddressData])

    const addNewAddressButtonHandle = () => {
        setIsOpenAddNewForm(true)
        setEditInputValues({ ...intialStateForInputValues })
    }

    return (
        <main className='p-12 flex gap-4 justify-center'>
            <svg className='mt-4' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.875 15.3L0.275 8.70001C0.175 8.60001 0.104 8.49167 0.0619998 8.37501C0.0206665 8.25834 0 8.13334 0 8.00001C0 7.86667 0.0206665 7.74167 0.0619998 7.62501C0.104 7.50834 0.175 7.40001 0.275 7.30001L6.875 0.700006C7.05833 0.516673 7.28733 0.420673 7.562 0.412006C7.83733 0.404006 8.075 0.500006 8.275 0.700006C8.475 0.883339 8.57933 1.11234 8.588 1.38701C8.596 1.66234 8.5 1.90001 8.3 2.10001L3.4 7.00001H14.575C14.8583 7.00001 15.096 7.09567 15.288 7.28701C15.4793 7.47901 15.575 7.71667 15.575 8.00001C15.575 8.28334 15.4793 8.52067 15.288 8.71201C15.096 8.90401 14.8583 9.00001 14.575 9.00001H3.4L8.3 13.9C8.48333 14.0833 8.57933 14.3167 8.588 14.6C8.596 14.8833 8.5 15.1167 8.3 15.3C8.11667 15.5 7.88333 15.6 7.6 15.6C7.31667 15.6 7.075 15.5 6.875 15.3Z" fill="#2D2D2D" />
            </svg>
            <section className='max-w-[33rem]'>
                <section className='flex mb-10 gap-4'>
                    <Title length={null} title='SELECT DELIVERY ADDRESS' />
                    <button onClick={addNewAddressButtonHandle} className='px-6 py-3 border border-textColorAcc rounded-lg text-textColorAcc'>ADD NEW ADDRESS</button>
                </section>
                {isOpenAddNewForm && <EditFormAddress
                    setIsOpenEditForm={setIsOpenAddNewForm}
                    setEditInputValues={setEditInputValues}
                    editInputValues={editInputValues}
                    onSubmitFormHandle={onSubmitAddNewAddressFormHandle}
                    onSelectHandle={onSelectHandle}
                />}
                <section className='flex flex-col gap-6 '>
                    {status === 'loading' && <div>Loading...</div>}
                    {status === 'succeeded' && addressData?.length &&
                        addressData.map((address: AddressData) => (
                            <div key={address._id} >
                                <div className='border border-neutralsRule rounded-lg flex py-6 pr-6'>
                                    <input className={'mx-6 ' + radioInputStyles}
                                        onChange={() => setRadioInputValue(address._id)}
                                        value={address._id}
                                        type="radio"
                                        id={address.street}
                                        checked={address._id === radioInputValue} />
                                    <label htmlFor={address.street} className='text-sm'>
                                        <AddressInfo address={address}/>
                                    </label>

                                    {address._id === radioInputValue && (<div className='flex gap-4 ml-auto'>
                                        <svg onClick={() => setIsOpenEditForm(true)} className='hover: cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" fill="#737373" />
                                        </svg>
                                        <svg onClick={() => onDeleteAddressHandle(address._id)} className='hover: cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="#737373" />
                                        </svg>
                                    </div>)}
                                </div>
                                {isOpenEditForm && address._id === radioInputValue &&
                                    (<EditFormAddress
                                        setIsOpenEditForm={setIsOpenEditForm}
                                        setEditInputValues={setEditInputValues}
                                        editInputValues={editInputValues}
                                        onSubmitFormHandle={onSubmitEditAddressFormHandle}
                                        onSelectHandle={onSelectHandle}
                                        {...address}
                                    />)}
                            </div>
                        ))}
                </section>
            </section>
            <div className='border-l border-neutralsRule h-[640px] mx-12'>
            </div>
            <div className='w-[33rem]'>
                <PriceDetails disabled={radioInputValue ? false : true} buttonText='Continue' onClick={onSubmitAddress} />
            </div>
        </main>
    )
}

export default AddressPage