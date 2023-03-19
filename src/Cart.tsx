import React from 'react'
import Title from './Title'
import { womenData } from './WomenProducts'
import { Data } from './ItemCard'

const Cart = () => {
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
        <main className='flex max-w-1440 items-center justify-between mx-auto p-14'>
            <section className='w-[33rem]'>
                <Title length={womenData.length} title='ORDER SUMMARY' />
                <section className='mt-10 max-w-xl'>
                    {womenData.map(item => (
                        <div key={item.img} className='border border-neutralsRule flex p-6 rounded-lg mb-6'>
                            <img className='max-h-48' src={item.img} alt="Product image" />
                            <div className='ml-12'>
                                <h2 className='font-semibold'>{item.title}</h2>
                                <p className='text-textColorTertiary text-sm'>{item.desc}</p>
                                <div className='mt-4 flex gap-6 text-sm font-semibold'>
                                    <div className='py-1 px-2 bg-textFieldBg'>
                                        <p>Size: S</p>
                                    </div>
                                    <div className='py-1 px-2 bg-textFieldBg'>
                                        <p>Qty: 1</p>
                                    </div>
                                </div>
                                <div className='flex gap-2 mt-4'>
                                    {item.oldPrice && <p className='line-through text-sm font-semibold text-textColorTertiary'>Rs. {item.oldPrice}</p>}
                                    <p className=' text-textColorAcc text-sm font-semibold'>Rs. {item.newPrice}</p>
                                </div>
                                <div className='flex items-center gap-2 mt-8 text-xs'>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <g clipPath="url(#clip0_293_108)">
                                            <g clipPath="url(#clip1_293_108)">
                                                <path fillRule="evenodd" clipRule="evenodd" d="M15.2873 2.32898C15.3387 2.38059 15.3794 2.4419 15.4072 2.50939C15.435 2.57688 15.4494 2.64924 15.4494 2.72232C15.4494 2.79539 15.435 2.86775 15.4072 2.93524C15.3794 3.00274 15.3387 3.06404 15.2873 3.11565L7.56314 10.8934C7.51189 10.9452 7.451 10.9862 7.38398 11.0142C7.31695 11.0422 7.24509 11.0566 7.17252 11.0566C7.09995 11.0566 7.02809 11.0422 6.96106 11.0142C6.89403 10.9862 6.83315 10.9452 6.7819 10.8934L3.47155 7.56009C3.42026 7.50844 3.37957 7.44712 3.3518 7.37963C3.32404 7.31214 3.30975 7.23981 3.30975 7.16676C3.30975 7.09371 3.32404 7.02138 3.3518 6.95389C3.37957 6.8864 3.42026 6.82508 3.47155 6.77343C3.52285 6.72177 3.58375 6.6808 3.65077 6.65285C3.71779 6.62489 3.78963 6.6105 3.86217 6.6105C3.93472 6.6105 4.00655 6.62489 4.07358 6.65285C4.1406 6.6808 4.2015 6.72177 4.2528 6.77343L7.17252 9.71454L14.506 2.32898C14.5573 2.27725 14.6182 2.2362 14.6852 2.20819C14.7522 2.18018 14.8241 2.16577 14.8967 2.16577C14.9692 2.16577 15.0411 2.18018 15.1081 2.20819C15.1751 2.2362 15.236 2.27725 15.2873 2.32898Z" fill="#2DC071" />
                                                <path fillRule="evenodd" clipRule="evenodd" d="M7.17242 2.16673C5.97209 2.16673 4.79872 2.52514 3.80069 3.19664C2.80265 3.86814 2.02478 4.82256 1.56543 5.93922C1.10609 7.05588 0.985899 8.28462 1.22007 9.47006C1.45424 10.6555 2.03226 11.7444 2.88102 12.5991C3.72978 13.4537 4.81116 14.0357 5.98843 14.2715C7.16569 14.5073 8.38596 14.3863 9.49492 13.9238C10.6039 13.4612 11.5517 12.678 12.2186 11.673C12.8854 10.668 13.2414 9.48651 13.2414 8.27784C13.2414 8.1305 13.2995 7.98919 13.403 7.88501C13.5065 7.78082 13.6468 7.72229 13.7931 7.72229C13.9394 7.72229 14.0798 7.78082 14.1832 7.88501C14.2867 7.98919 14.3448 8.1305 14.3448 8.27784C14.3446 9.86766 13.8235 11.413 12.8622 12.6742C11.9009 13.9353 10.5532 14.8419 9.02811 15.2532C7.50302 15.6646 5.88575 15.5577 4.42713 14.9492C2.9685 14.3406 1.75004 13.2645 0.960701 11.8876C0.171362 10.5108 -0.144741 8.91009 0.0614162 7.33388C0.267573 5.75767 0.98447 4.29401 2.10092 3.16987C3.21738 2.04573 4.671 1.32395 6.23635 1.11647C7.8017 0.908978 9.3913 1.22738 10.7586 2.02229C10.8246 2.05702 10.8828 2.10482 10.93 2.16282C10.9771 2.22081 11.012 2.28781 11.0328 2.35977C11.0535 2.43173 11.0596 2.50717 11.0506 2.58155C11.0416 2.65593 11.0178 2.72771 10.9806 2.79258C10.9433 2.85745 10.8934 2.91407 10.8339 2.95902C10.7744 3.00397 10.7064 3.03634 10.6342 3.05416C10.5619 3.07199 10.4868 3.07491 10.4133 3.06275C10.3399 3.05059 10.2697 3.0236 10.2069 2.9834C9.28467 2.44639 8.23775 2.16463 7.17242 2.16673Z" fill="#2DC071" />
                                            </g>
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_293_108">
                                                <rect width="16" height="15" fill="white" transform="translate(0 0.5)" />
                                            </clipPath>
                                            <clipPath id="clip1_293_108">
                                                <rect width="15.4494" height="14.4445" fill="white" transform="translate(0 1.05468)" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <p className='text-textColorTertiary'>Delivery by <span className='text-textColorPrimary'>9th Jan, 2023</span></p>
                                </div>
                            </div>
                            <svg className='ml-auto' width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <g clipPath="url(#clip0_293_113)">
                                    <path d="M11.5993 11.6002L0.399292 0.400177M0.399292 11.6002L11.5993 0.400177L0.399292 11.6002Z" stroke="#737373" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_293_113">
                                        <rect width="12" height="12" fill="white" />
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    ))}
                </section>
            </section>
            <div className='border-l border-neutralsRule h-[640px] mr-9 w-8'>
            </div>
            <section className='max-w-xl'>
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
                <form className='mt-10 flex flex-col relative'>
                    <label htmlFor='coupon' className='font-semibold'>Have a Coupon?</label>
                    <input className='mt-4 w-full border py-3 px-4 rounded-lg border-neutralsRule focus-visible:outline-textColorAcc' type="text" id='coupon' placeholder='Enter Coupon Code' />
                    <button className='absolute right-3 bottom-3 text-textColorAcc font-semibold '>APPLY</button>
                </form>
                <div>
                    <h2 className='mt-10 font-semibold'>PRICE DETAILS({womenData.length} ITEMS)</h2>
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
                    <span>Place Order</span>
                    <svg width="21" height="10" viewBox="0 0 21 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.75 1.25L19.5 5M19.5 5L15.75 8.75M19.5 5H1.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </section>
        </main>
    )
}

export default Cart