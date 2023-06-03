import { useDispatch } from 'react-redux'
import { addToCart } from '../features/cart'
import { updateProducts, selectFavoriteProducts } from '../features/products/productsSlice'
import { useSelector } from 'react-redux'
import { currentUser } from '../features/user'
import { AppDispatch } from '../app/store'

export interface Data {
  _id: string
  title: string
  desc: string
  oldPrice: number | null
  newPrice: number
  img: string
  isFavorite: boolean
  rating: number
}

interface propsItemCard {
  data: Data[]
}

const ItemCard = ({ data }: propsItemCard) => {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector(currentUser)
  const favoriteProducts = useSelector(selectFavoriteProducts)

  const favoriteHandle = (item: Data, isFavorite: boolean) => {
    dispatch(updateProducts({favorites: [item._id], email: user, isFavorite: isFavorite}))
  }
  return (
    <>
      {data.length && data.map(item => (
        <div className='relative flex-none' key={item._id}>
          <img src={item.img} alt="product image" className='w-60 h-auto mb-4' />
          <div className='w-14 h-6 flex justify-around text-xs font-semibold rounded items-center absolute top-80 left-4 bg-white'>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16 6.12414H9.89333L8 0L6.10667 6.12414H0L4.93333 9.90345L3.06667 16L8 12.2207L12.9333 16L11.04 9.87586L16 6.12414Z" fill="#FFCE31" />
            </svg>
            <span>{item.rating.toFixed(1)}</span>
          </div>
          {user && Array.isArray(favoriteProducts) && favoriteProducts?.includes(item._id) || item.isFavorite ? (
            <svg onClick={() => favoriteHandle(item, true)} className='absolute top-80 right-4 hover:cursor-pointer' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 21.35L10.55 20.03C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3C9.24 3 10.91 3.81 12 5.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5C22 12.27 18.6 15.36 13.45 20.03L12 21.35Z" fill="#DB6B97" />
            </svg>
          ) :
            (<svg onClick={() => favoriteHandle(item, false)} className='absolute top-[324px] right-4 hover:cursor-pointer' width="21" height="19" viewBox="0 0 21 19" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.4333 15.55L10.3333 15.65L10.2233 15.55C5.47331 11.24 2.33331 8.39 2.33331 5.5C2.33331 3.5 3.83331 2 5.83331 2C7.37331 2 8.87331 3 9.40331 4.36H11.2633C11.7933 3 13.2933 2 14.8333 2C16.8333 2 18.3333 3.5 18.3333 5.5C18.3333 8.39 15.1933 11.24 10.4333 15.55ZM14.8333 0C13.0933 0 11.4233 0.81 10.3333 2.08C9.24331 0.81 7.57331 0 5.83331 0C2.75331 0 0.333313 2.41 0.333313 5.5C0.333313 9.27 3.73331 12.36 8.88331 17.03L10.3333 18.35L11.7833 17.03C16.9333 12.36 20.3333 9.27 20.3333 5.5C20.3333 2.41 17.9133 0 14.8333 0Z" fill="#DB6B97" />
            </svg>)}
          <div>
            <h2 className='mb-1 font-semibold '>{item.title}</h2>
            <p className='mb-4 text-textColorTertiary text-sm'>{item.desc.slice(0, 30)}</p>
          </div>
          {item.oldPrice && <span className='line-through mr-2 text-textColorTertiary font-semibold text-sm inline-block mb-4'>Rs. {item.oldPrice}</span>}
          <span className='text-textColorAcc font-semibold text-sm inline-block mb-4'>Rs. {item.newPrice}</span>
          <button onClick={() => dispatch(addToCart(item))} className='block w-full bg-textColorPrimary h-10 text-white rounded-md'>Add to cart</button>
        </div>
      ))}
    </>
  )
}

export default ItemCard