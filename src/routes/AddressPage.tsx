import React from 'react'
import Title from '../components/Title'
import PriceDetails from '../components/PriceDetails'


const addressData = [
    {
        id: 1,
        name: 'Salem',
        surname: 'Mirza',
        street: 'Kochi - Kanyakumari Hwy, Palayam',
        city: 'Thiruvananthapuram, Kerala',
        index: 695001,
        phone: '0471 247 0240',
        isOffice: false,
        isHome: true,
    },
    {
        id: 2,
        name: 'Kirti',
        surname: 'Bajaj',
        street: '3rd A Cross Rd, Sena Vihar, Kalyan Nagar',
        city: 'Bangalore, Karnataka',
        index: 560043,
        phone: '080 2543 5193',
        isOffice: true,
        isHome: false,
    },
    {
        id: 3,
        name: 'Prabhat',
        surname: 'Sengupta',
        street: 'Bakerganj Shurigali, Near Rupak Cinema',
        city: 'Patna Metropolitan Area, Bihar',
        index: 800004,
        phone: '080 2543 5193',
        isOffice: false,
        isHome: false,
    },
]

export const radioInputStyles = 'appearance-none bg-white w-4 h-4 rounded-full border border-neutralsRule checked:border-textColorAcc checked:border-4'

const AddressPage = () => {
    const [inputValue, setInputValue] = React.useState(addressData[0].id)

    return (
        <main className='p-12 flex gap-4 justify-center'>
            <svg className='mt-4' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.875 15.3L0.275 8.70001C0.175 8.60001 0.104 8.49167 0.0619998 8.37501C0.0206665 8.25834 0 8.13334 0 8.00001C0 7.86667 0.0206665 7.74167 0.0619998 7.62501C0.104 7.50834 0.175 7.40001 0.275 7.30001L6.875 0.700006C7.05833 0.516673 7.28733 0.420673 7.562 0.412006C7.83733 0.404006 8.075 0.500006 8.275 0.700006C8.475 0.883339 8.57933 1.11234 8.588 1.38701C8.596 1.66234 8.5 1.90001 8.3 2.10001L3.4 7.00001H14.575C14.8583 7.00001 15.096 7.09567 15.288 7.28701C15.4793 7.47901 15.575 7.71667 15.575 8.00001C15.575 8.28334 15.4793 8.52067 15.288 8.71201C15.096 8.90401 14.8583 9.00001 14.575 9.00001H3.4L8.3 13.9C8.48333 14.0833 8.57933 14.3167 8.588 14.6C8.596 14.8833 8.5 15.1167 8.3 15.3C8.11667 15.5 7.88333 15.6 7.6 15.6C7.31667 15.6 7.075 15.5 6.875 15.3Z" fill="#2D2D2D" />
            </svg>
            <section className='max-w-[33rem]'>
                <section className='flex mb-10 gap-4'>
                    <Title length={null} title='SELECT DELIVERY ADDRESS' />
                    <button className='px-6 py-3 border border-textColorAcc rounded-lg text-textColorAcc'>ADD NEW ADDRESS</button>
                </section>
                <section className='flex flex-col gap-6 '>
                    {addressData.map(address => (
                        <div key={address.id} className='border border-neutralsRule rounded-lg flex py-6 pr-6'>
                            <input className={'mx-6 ' + radioInputStyles}
                                onChange={() => setInputValue(address.id)}
                                value={address.id}
                                type="radio"
                                id={address.street}
                                checked={address.id === inputValue} />
                            <label htmlFor={address.street} className='text-sm'>
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
                            </label>
                            {address.id === inputValue && (<div className='flex gap-4 ml-auto'>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.3 8.925L15.05 4.725L16.45 3.325C16.8333 2.94167 17.3043 2.75 17.863 2.75C18.421 2.75 18.8917 2.94167 19.275 3.325L20.675 4.725C21.0583 5.10833 21.2583 5.571 21.275 6.113C21.2917 6.65433 21.1083 7.11667 20.725 7.5L19.3 8.925ZM17.85 10.4L7.25 21H3V16.75L13.6 6.15L17.85 10.4Z" fill="#737373" />
                                </svg>
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM19 4H15.5L14.5 3H9.5L8.5 4H5V6H19V4Z" fill="#737373" />
                                </svg>
                            </div>)}
                        </div>
                    ))}
                </section>
            </section>
            <div className='border-l border-neutralsRule h-[640px] mx-12'>
            </div>
            <div className='w-[33rem]'>
                <PriceDetails buttonText='Continue' />
            </div>
        </main>
    )
}

export default AddressPage