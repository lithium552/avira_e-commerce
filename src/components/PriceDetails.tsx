import { Data } from './ItemCard'
import Button from './Button'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'

export interface PriceDetailsProps {
    buttonText: string
    disabled: boolean
    onClick?: () => void
}

const PriceDetails = ({buttonText, disabled, onClick}: PriceDetailsProps) => {
    const cartData = useSelector((state: RootState) => state.cart.cart) 

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

    const order = calculateOrder(cartData)
    return (
        <> 
         {cartData.length ? (
            <>
            <div>
                <h2 className='font-semibold'>PRICE DETAILS ({cartData.length} ITEMS)</h2>
                <div className='flex justify-between mt-8'>
                    <p className='text-textColorTertiary text-sm'>Total MRP</p>
                    <p className='text-textColorPrimary'>Rs. {order.totalMRP}</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <p className='text-textColorTertiary text-sm'>Discount on MRP</p>
                    <p className='text-[#2DC071]'>Rs. -{order.discount}</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <p className='text-textColorTertiary text-sm'>Coupon Discount</p>
                    <p className='text-textColorPrimary'>Rs. 0</p>
                </div>
                <div className='flex justify-between mt-4'>
                    <p className='text-textColorTertiary text-sm'>Delivery Charge</p>
                    <p className='text-[#2DC071]'>Free</p>
                </div>
                <hr className='mt-6' />
                <div className='flex justify-between mt-4'>
                    <p className='font-semibold text-textColorTertiary'>Total Amount</p>
                    <p>Rs. {order.totalAmount}</p>
                </div>
            </div>
            <Button buttonText={buttonText} disabled={disabled} isArrow={true} onClick={onClick} />
            </>
            ) : null}
            </>
    )
}

export default PriceDetails