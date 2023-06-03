import { useSelector } from 'react-redux'
import { selectAllSlashedProducts } from '../features/products/allProductsSlice'
import ItemCard from '../components/ItemCard'
import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'


const Categories = () => {
  const [sliderPosition, setSliderPosition] = useState(0)
  const slashedData = useSelector(selectAllSlashedProducts)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setSliderPosition(prev => {
  //       if(prev < 0) {
  //         return ((slashedData.length - 4) * 19)
  //       }
  //       if(prev >= ((slashedData.length - 4) * 19)) return 0
  //       return prev + 19
  //     })
  //   }, 3000)
  //   return () => clearInterval(interval)
  // }, [slashedData.length])
  return (
    <main className='mt-8 relative'>
      <section className=' max-w-6xl mx-auto'>
        <div className='grid grid-cols-[1.3fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto] gap-x-8 gap-y-6'>
          <h1 className='text-2xl font-semibold mb-4 text-textColorPrimary row-start-1 row-end-2'>SHOP BY CATEGORIES</h1>
          <div className=' row-start-2 row-end-4 flex items-end relative  h-full'>
            <img className='object-cover self-stretch' src="https://storage.googleapis.com/avira-api-388212.appspot.com/src/shop/image12.png" alt="" />
            <Link to="./men" className='block mb-6 ml-4 absolute'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>MEN</p>
              </div>
            </Link>
          </div>
          <div className=' row-start-2 row-end-4 flex items-end relative  h-full'>
            <img className='object-cover self-stretch' src="https://storage.googleapis.com/avira-api-388212.appspot.com/src/shop/image2.png" alt="" />
            <Link to="./women" className='block mb-6 ml-4 absolute'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>WOMEN</p>
              </div>
            </Link>
          </div>
          <div className=' row-start-2 row-end-3 flex items-end relative'>
            <img className='object-cover self-stretch' src="https://storage.googleapis.com/avira-api-388212.appspot.com/src/shop/image4.png" alt="" />
            <Link to="./accessories" className='block mb-6 ml-4 absolute'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>ACCESSORIES</p>
              </div>
            </Link>
          </div>
          <div className='  row-start-2 row-end-3 flex items-end relative'>
            <img className='object-cover self-stretch' src="https://storage.googleapis.com/avira-api-388212.appspot.com/src/shop/image10.png" alt="" />
            <Link to="./children" className='block mb-6 ml-4 absolute'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>KIDS</p>
              </div>
            </Link>
          </div>
          <div className=' row-start-3 row-end-4 relative'>
            <img className='object-cover self-stretch' src="https://storage.googleapis.com/avira-api-388212.appspot.com/src/shop/image5.png" alt="" />
            <Link to="./sneakers" className='block mt-6 ml-4 absolute top-0'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>FOOTWEAR</p>
              </div>
            </Link>
          </div>
          <div className=' row-start-3  row-end-4 relative'>
            <img className='object-cover self-stretch' src="https://storage.googleapis.com/avira-api-388212.appspot.com/src/shop/image8.png" alt="" />
            <Link to="./beauty" className='block mt-6 ml-4 absolute top-0'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>BEAUTY</p>
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className='flex flex-col mx-auto items-center max-w-6xl mt-16 mb-20 overflow-hidden'>
        <button onClick={() => setSliderPosition(prev => prev - 19)} className=' w-12 h-12 grid place-content-center rounded-full absolute left-64 bottom-64 border border-textColorPrimary z-50 bg-white hover:bg-textColorAcc'>
          <svg className='' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.875 15.3L0.275 8.70001C0.175 8.60001 0.104 8.49167 0.0619998 8.37501C0.0206665 8.25834 0 8.13334 0 8.00001C0 7.86667 0.0206665 7.74167 0.0619998 7.62501C0.104 7.50834 0.175 7.40001 0.275 7.30001L6.875 0.700006C7.05833 0.516673 7.28733 0.420673 7.562 0.412006C7.83733 0.404006 8.075 0.500006 8.275 0.700006C8.475 0.883339 8.57933 1.11234 8.588 1.38701C8.596 1.66234 8.5 1.90001 8.3 2.10001L3.4 7.00001H14.575C14.8583 7.00001 15.096 7.09567 15.288 7.28701C15.4793 7.47901 15.575 7.71667 15.575 8.00001C15.575 8.28334 15.4793 8.52067 15.288 8.71201C15.096 8.90401 14.8583 9.00001 14.575 9.00001H3.4L8.3 13.9C8.48333 14.0833 8.57933 14.3167 8.588 14.6C8.596 14.8833 8.5 15.1167 8.3 15.3C8.11667 15.5 7.88333 15.6 7.6 15.6C7.31667 15.6 7.075 15.5 6.875 15.3Z" fill="#2D2D2D" />
          </svg>
        </button>
        <button onClick={() => setSliderPosition(prev => prev + 19)} className='w-12 h-12 grid place-content-center rounded-full absolute right-64 bottom-64 border border-textColorPrimary z-50 bg-white hover:bg-textColorAcc'>
          <svg className='rotate-180' width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6.875 15.3L0.275 8.70001C0.175 8.60001 0.104 8.49167 0.0619998 8.37501C0.0206665 8.25834 0 8.13334 0 8.00001C0 7.86667 0.0206665 7.74167 0.0619998 7.62501C0.104 7.50834 0.175 7.40001 0.275 7.30001L6.875 0.700006C7.05833 0.516673 7.28733 0.420673 7.562 0.412006C7.83733 0.404006 8.075 0.500006 8.275 0.700006C8.475 0.883339 8.57933 1.11234 8.588 1.38701C8.596 1.66234 8.5 1.90001 8.3 2.10001L3.4 7.00001H14.575C14.8583 7.00001 15.096 7.09567 15.288 7.28701C15.4793 7.47901 15.575 7.71667 15.575 8.00001C15.575 8.28334 15.4793 8.52067 15.288 8.71201C15.096 8.90401 14.8583 9.00001 14.575 9.00001H3.4L8.3 13.9C8.48333 14.0833 8.57933 14.3167 8.588 14.6C8.596 14.8833 8.5 15.1167 8.3 15.3C8.11667 15.5 7.88333 15.6 7.6 15.6C7.31667 15.6 7.075 15.5 6.875 15.3Z" fill="#2D2D2D" />
          </svg>
        </button>
        <h1 className='text-2xl font-semibold mb-10 text-textColorPrimary place-self-start'>PRODUCTS AT SLASHED PRICES</h1>
        <div className={`relative w-full transition-all`} style={{right: `${sliderPosition.toString()}rem`}}>
        <div className='flex gap-16 w-full'>
        <ItemCard data={slashedData} />
        </div>
        </div>
      </section>
    </main>
  )
}

export default Categories