import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import ItemCard from '../components/ItemCard'
import Title from '../components/Title'
import { fetchProducts, selectProducts, fetchFavoriteProducts } from '../features/products/productsSlice'
import { useLocation } from 'react-router-dom'
import { currentUser } from '../features/user'
import { RootState, AppDispatch } from '../app/store'



const Products = () => {
    const { pathname } = useLocation()
    const dispatch = useDispatch<AppDispatch>()
    const status = useSelector((state: RootState) => state.products.status)
    const state = useSelector((state: RootState) => state)
    const productType = pathname.split('/').at(-1) 
    const user = useSelector(currentUser)
    useEffect(() => {
            if(productType) dispatch(fetchProducts(productType))
            if(user) dispatch(fetchFavoriteProducts())
    }, [productType])
    const data = useSelector(selectProducts)
    let content 
    if (status === 'loading') {
        content = <div>Loading...</div>
    } else if (status === 'succeeded') {
        content = <ItemCard data={data}/>
    } else if (status === 'failed') {
        content = <div>{state.products.error}</div>
    }
    return (
        <main className='mx-auto max-w-6xl'>
            <section className='mt-14 flex items-center justify-between'>
                <Title length={data.length} title={productType?.toLocaleUpperCase() || ''} />
                <div className='flex items-center gap-2'>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.32137 19.375H7.5V9.91516L0.9375 2.10266V0.625H18.75V2.09422L12.5 9.90672V16.1964L9.32137 19.375ZM8.75 18.125H8.80363L11.25 15.6786V9.46828L17.3246 1.875H2.37891L8.75 9.45984V18.125Z" fill="#DB6B97" />
                    </svg>
                    <p className='text-textColorAcc'>Filters</p>
                </div>
            </section>
            <section className='mt-14 max-w-6xl mb-20 flex'>
            <div className='grid grid-cols-4 gap-x-16 gap-y-12'>
                {content}
            </div>
            </section>
        </main>
    )
}

export default Products