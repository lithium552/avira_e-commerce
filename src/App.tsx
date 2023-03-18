import './index.css'
import Header from './Header'


const slashedData = [
  {
    title: 'ZARA',
    desc: 'Green High Neck Knit Sweater',
    oldPrice: 'Rs. 2999',
    newPrice: 'Rs. 2299',
    img: './src/assets/slashed/image13.png',
    isFavorite: true,
    rating: 4.9
  },
  {
    title: 'ONLY',
    desc: 'Plush Jogging Trousers',
    oldPrice: 'Rs. 2299',
    newPrice: 'Rs. 1790',
    img: './src/assets/slashed/image14.png',
    isFavorite: true,
    rating: 4.3
  },
  {
    title: 'HnM',
    desc: 'Black sweater with long sleeves',
    oldPrice: 'Rs. 3299',
    newPrice: 'Rs. 2999',
    img: './src/assets/slashed/image15.png',
    isFavorite: false,
    rating: 5.0
  },
  {
    title: 'Plush',
    desc: 'High Rise Jeans- Ankle Length',
    oldPrice: 'Rs. 2299',
    newPrice: 'Rs. 1790',
    img: './src/assets/slashed/image16.png',
    isFavorite: false,
    rating: 4.4
  },
]


function App() {

  return (
    <>
      <Header />
      <div className='p-16'>
        <div className='grid grid-cols-[378px_305px_264px_264px] grid-rows-[auto_264px_264px] gap-x-8 gap-y-6 justify-center'>
          <h1 className='text-2xl font-semibold mb-4 text-textColorPrimary row-start-1 row-end-2'>SHOP BY CATEGORIES</h1>
          <div className='bg-[url("./src/assets/shop/image12.png")] bg-auto row-start-2 row-end-4 flex items-end'>
            <a href="#" className='block mb-6 ml-4'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>MEN</p>
              </div>
            </a>
          </div>
          <div className='bg-[url("./src/assets/shop/image2.png")] bg-auto row-start-2 row-end-4 flex items-end'>
          <a href="#" className='block mb-6 ml-4'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>WOMEN</p>
              </div>
            </a>
          </div>
          <div className='bg-[url("./src/assets/shop/image4.png")] bg-auto row-start-2 row-end-3 flex items-end'>
          <a href="#" className='block mb-6 ml-4'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>ACCESSORIES</p>
              </div>
            </a>
          </div>
          <div className='bg-[url("./src/assets/shop/image10.png")] bg-auto row-start-2 row-end-3 flex items-end'>
          <a href="#" className='block mb-6 ml-4'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>KIDS</p>
              </div>
            </a>
          </div>
          <div className='bg-[url("./src/assets/shop/image5.png")] bg-auto row-start-3 row-end-4'>
          <a href="#" className='block mt-6 ml-4'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>FOOTWEAR</p>
              </div>
            </a>
          </div>
          <div className='bg-[url("./src/assets/shop/image8.png")] bg-auto row-start-3  row-end-4'>
          <a href="#" className='block mt-6 ml-4'>
              <div className='w-40 h-14 bg-white text-textColorPrimary flex items-center justify-center font-semibold'>
                <p>BEAUTY</p>
              </div>
            </a>
          </div>
        </div>
      </div>
      <div className='flex flex-col mx-auto items-center w-max mb-20'>
      <h1 className='text-2xl font-semibold mb-4 text-textColorPrimary place-self-start'>PRODUCTS AT SLASHED PRICES</h1>
      <div className='flex gap-28'>
      {slashedData.map(item => (
        <div >
          <img src={item.img} alt="image" className='w-60 h-auto mb-4' />
          <h2 className='mb-1 font-semibold '>{item.title}</h2>
          <p className='mb-4 text-textColorTertiary text-sm'>{item.desc}</p>
          <span className='line-through mr-2 text-textColorTertiary font-semibold text-sm inline-block mb-4'>{item.oldPrice}</span>
          <span className='text-textColorTertiary text-sm inline-block mb-4'>{item.newPrice}</span>
          <button className='block w-full bg-textColorPrimary h-10 text-white rounded-md'>Add to cart</button>
        </div>
      ))}
      </div>
      </div>
    </>
  )
}

export default App
