import React from 'react'
import ItemCard from '../components/ItemCard'

const slashedData = [
  {
    title: 'ZARA',
    desc: 'Green High Neck Knit Sweater',
    oldPrice: 2999,
    newPrice: 2299,
    img: './src/assets/slashed/image13.png',
    isFavorite: true,
    rating: 4.9
  },
  {
    title: 'ONLY',
    desc: 'Plush Jogging Trousers',
    oldPrice: 2299,
    newPrice: 1790,
    img: './src/assets/slashed/image14.png',
    isFavorite: true,
    rating: 4.3
  },
  {
    title: 'HnM',
    desc: 'Black sweater with long sleeves',
    oldPrice: 3299,
    newPrice: 2999,
    img: './src/assets/slashed/image15.png',
    isFavorite: false,
    rating: 5.0
  },
  {
    title: 'Plush',
    desc: 'High Rise Jeans- Ankle Length',
    oldPrice: 2299,
    newPrice: 1790,
    img: './src/assets/slashed/image16.png',
    isFavorite: false,
    rating: 4.4
  },
]




// bg-[url("./src/assets/shop/image12.png")] bg-auto
// bg-[url("./src/assets/shop/image2.png")] bg-auto 
// bg-[url("./src/assets/shop/image4.png")] bg-auto 
// bg-[url("./src/assets/shop/image10.png")] bg-auto
// bg-[url("./src/assets/shop/image5.png")] bg-auto 
// bg-[url("./src/assets/shop/image8.png")] bg-auto 



const Categories = () => {
  return (
    <main className='mt-8'>
      <section className='px-4 max-w-6xl mx-auto'>
        <div className='grid grid-cols-[1.3fr_1fr_1fr_1fr] grid-rows-[auto_auto_auto] gap-x-8 gap-y-6'>
          <h1 className='text-2xl font-semibold mb-4 text-textColorPrimary row-start-1 row-end-2'>SHOP BY CATEGORIES</h1>
          <div className=' row-start-2 row-end-4 flex items-end relative  h-full'>
            <img className='object-cover self-stretch' src="./src/assets/shop/image12.png" alt="" />
            <a href="#" className='block mb-6 ml-4 absolute'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>MEN</p>
              </div>
            </a>
          </div>
          <div className=' row-start-2 row-end-4 flex items-end relative  h-full'>
            <img className='object-cover self-stretch' src="./src/assets/shop/image2.png" alt="" />
            <a href="#" className='block mb-6 ml-4 absolute'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>WOMEN</p>
              </div>
            </a>
          </div>
          <div className=' row-start-2 row-end-3 flex items-end relative'>
            <img className='object-cover self-stretch' src="./src/assets/shop/image4.png" alt="" />
            <a href="#" className='block mb-6 ml-4 absolute'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>ACCESSORIES</p>
              </div>
            </a>
          </div>
          <div className='  row-start-2 row-end-3 flex items-end relative'>
            <img className='object-cover self-stretch' src="./src/assets/shop/image10.png" alt="" />
            <a href="#" className='block mb-6 ml-4 absolute'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>KIDS</p>
              </div>
            </a>
          </div>
          <div className=' row-start-3 row-end-4 relative'>
            <img className='object-cover self-stretch' src="./src/assets/shop/image5.png" alt="" />
            <a href="#" className='block mt-6 ml-4 absolute top-0'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>FOOTWEAR</p>
              </div>
            </a>
          </div>
          <div className=' row-start-3  row-end-4 relative'>
            <img className='object-cover self-stretch' src="./src/assets/shop/image8.png" alt="" />
            <a href="#" className='block mt-6 ml-4 absolute top-0'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>BEAUTY</p>
              </div>
            </a>
          </div>
        </div>
      </section>
      <section className='px-4 flex flex-col mx-auto items-center flex-wrap max-w-6xl mt-16 mb-20'>
        <h1 className='text-2xl font-semibold mb-4 text-textColorPrimary place-self-start'>PRODUCTS AT SLASHED PRICES</h1>
        <ItemCard data={slashedData} />
      </section>
    </main>
  )
}

export default Categories