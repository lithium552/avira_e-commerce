import PriceDetails from '../components/PriceDetails'
import Title from '../components/Title'
import { useDispatch, useSelector } from 'react-redux'
import { deleteFromCart } from '../features/cart'
import ItemsList from '../components/ItemsList'
import { Data } from '../components/ItemCard'
import { useNavigate } from 'react-router-dom'
import { currentUser } from '../features/user'
import { AppDispatch } from '../app/store'
import { selectCartItems } from '../features/cart'



const Cart = () => {
    const dispatch = useDispatch<AppDispatch>()
    const stateCartData = useSelector(selectCartItems)
    const cartData = stateCartData.length ? stateCartData : JSON.parse(localStorage.getItem('cartItems') || '[]')
    const deleteItemFromCart = (item: Data) => dispatch(deleteFromCart(item))
    const navigate = useNavigate()
    const onSubmitHandle = () => {
        navigate('/payment')
    }
    const user = useSelector(currentUser)
    console.log('hello', user, Boolean(user),stateCartData)
    return (
        <main className='flex max-w-1440 h-[600px] items-center justify-between mx-auto px-8 mt-8'>
            {!user ?
                (<div className='m-auto'>You must be login first...</div>) :
                (<>
                    <section className='flex gap-7 h-full'>
                        <svg className='mt-2' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6.875 15.3L0.275 8.70001C0.175 8.60001 0.104 8.49167 0.0619998 8.37501C0.0206665 8.25834 0 8.13334 0 8.00001C0 7.86667 0.0206665 7.74167 0.0619998 7.62501C0.104 7.50834 0.175 7.40001 0.275 7.30001L6.875 0.700006C7.05833 0.516673 7.28733 0.420673 7.562 0.412006C7.83733 0.404006 8.075 0.500006 8.275 0.700006C8.475 0.883339 8.57933 1.11234 8.588 1.38701C8.596 1.66234 8.5 1.90001 8.3 2.10001L3.4 7.00001H14.575C14.8583 7.00001 15.096 7.09567 15.288 7.28701C15.4793 7.47901 15.575 7.71667 15.575 8.00001C15.575 8.28334 15.4793 8.52067 15.288 8.71201C15.096 8.90401 14.8583 9.00001 14.575 9.00001H3.4L8.3 13.9C8.48333 14.0833 8.57933 14.3167 8.588 14.6C8.596 14.8833 8.5 15.1167 8.3 15.3C8.11667 15.5 7.88333 15.6 7.6 15.6C7.31667 15.6 7.075 15.5 6.875 15.3Z" fill="#2D2D2D" />
                        </svg>
                        <div>
                            <Title length={cartData.length} title='ORDER SUMMARY' />
                            <ItemsList deleteItem={deleteItemFromCart} emptyText='Cart is empty...' itemsData={cartData} />
                        </div>
                    </section>
                    <div className='border-l border-neutralsRule h-full w-8'>
                    </div>
                    <section className='max-w-xl h-full mt-4'>
                        <div className='flex items-center gap-8 py-4 px-6 w-[33rem] justify-around bg-textFieldBg'>
                            <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_293_173)">
                                    <path d="M36.0296 3.84267H7.82407C6.02301 3.84267 4.56296 5.33731 4.56296 7.18105V36.055C4.56296 37.8987 6.02301 39.3934 7.82407 39.3934H36.0296C37.8307 39.3934 39.2907 37.8987 39.2907 36.055V7.18105C39.2907 5.33731 37.8307 3.84267 36.0296 3.84267Z" fill="#C5DCDD" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M32.1444 0.680573H3.93889C2.13783 0.680573 0.67778 2.17522 0.67778 4.01896V32.8929C0.67778 34.7366 2.13783 36.2313 3.93889 36.2313H32.1444C33.9455 36.2313 35.4056 34.7366 35.4056 32.8929V4.01896C35.4056 2.17522 33.9455 0.680573 32.1444 0.680573Z" fill="#F4F1ED" stroke="#070707" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M23.5074 10.1896H5.12222V24.7261H23.5074V10.1896Z" fill="#F4F1ED" stroke="#070707" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M31.2926 24.728H23.5074V13.8237H27.4L31.2926 19.5962V24.728Z" fill="#F4F1ED" stroke="#070707" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M24.9167 15.8427H26.9037L28.8908 18.7886H24.9167V15.8427Z" fill="#F4F1ED" stroke="#070707" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M10.5463 26.9137C11.6488 26.9137 12.5426 25.9988 12.5426 24.8701C12.5426 23.7415 11.6488 22.8265 10.5463 22.8265C9.44378 22.8265 8.55 23.7415 8.55 24.8701C8.55 25.9988 9.44378 26.9137 10.5463 26.9137Z" fill="#EFAF00" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M27.3741 26.9137C28.4766 26.9137 29.3704 25.9988 29.3704 24.8701C29.3704 23.7415 28.4766 22.8265 27.3741 22.8265C26.2715 22.8265 25.3778 23.7415 25.3778 24.8701C25.3778 25.9988 26.2715 26.9137 27.3741 26.9137Z" fill="#EFAF00" stroke="black" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.8167 13.8237H13.9537" stroke="#070707" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M17.7018 16.3071H11.8389" stroke="#070707" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M19.8167 18.7886H13.9537" stroke="#070707" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_293_173">
                                        <rect width="40" height="40" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <p>Yay! <strong>No Delivery Charge</strong> on this order.</p>
                        </div>
                        <form className='mt-4 mb-4 flex flex-col relative'>
                            <label htmlFor='coupon' className='font-semibold'>Have a Coupon?</label>
                            <input className='mt-4 w-full border py-3 px-4 rounded-lg border-neutralsRule focus-visible:outline-textColorAcc' type="text" id='coupon' placeholder='Enter Coupon Code' />
                            <button className='absolute right-3 bottom-3 text-textColorAcc font-semibold '>APPLY</button>
                        </form>
                        <PriceDetails onClick={onSubmitHandle} disabled={false} buttonText='Place Order' />
                    </section>
                </>)}
        </main>
    )
}

export default Cart