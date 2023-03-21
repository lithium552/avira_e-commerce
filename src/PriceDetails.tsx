import { womenData } from './WomenProducts'
import { Data } from './ItemCard'

interface PriceDetailsProps {
    buttonText: string
}

const PriceDetails = ({buttonText}: PriceDetailsProps) => {
    womenData.length = 2

    const calculateOrder = (data: Data[]) => {
        const res = {
            totalMRP: 0,
            discount: 0,
            totalAmount: 0
        }
        for (const item of data) {
            res.totalMRP += item.oldPrice ? item.oldPrice : item.newPrice
            res.discount += item.oldPrice ? item.oldPrice - item.newPrice : 0
            res.totalAmount += item.newPrice
        }
        return res
    }

    const order = calculateOrder(womenData)
    return (
        <>
            <div>
                <h2 className='font-semibold'>PRICE DETAILS ({womenData.length} ITEMS)</h2>
                <div className='flex justify-between mt-8'>
                    <p className='text-textColorTertiary text-sm'>Total MRP</p>
                    <p className='text-textColorPrimary'>Rs. {order.totalMRP}</p>
                </div>
                <div className='flex justify-between mt-6'>
                    <p className='text-textColorTertiary text-sm'>Discount on MRP</p>
                    <p className='text-[#2DC071]'>Rs. -{order.discount}</p>
                </div>
                <div className='flex justify-between mt-6'>
                    <p className='text-textColorTertiary text-sm'>Coupon Discount</p>
                    <p className='text-textColorPrimary'>Rs. 0</p>
                </div>
                <div className='flex justify-between mt-6'>
                    <p className='text-textColorTertiary text-sm'>Delivery Charge</p>
                    <p className='text-[#2DC071]'>Free</p>
                </div>
                <hr className='mt-6' />
                <div className='flex justify-between mt-6'>
                    <p className='font-semibold text-textColorTertiary'>Total Amount</p>
                    <p>Rs. {order.totalAmount}</p>
                </div>
            </div>
            <button className='bg-textColorPrimary text-white w-full flex items-center gap-4 justify-center py-3 rounded-lg mt-8'>
                <span>{buttonText}</span>
                <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.75 1.25L19.5 5M19.5 5L15.75 8.75M19.5 5H1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
            </button>
        </>
    )
}

export default PriceDetails