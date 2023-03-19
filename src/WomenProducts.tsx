import React from 'react'
import ItemCard from './ItemCard'
import Title from './Title'

export const womenData = [
    {
        title: 'VERO MODA',
        desc: 'Blue Soft Knit Sweater',
        oldPrice: null,
        newPrice: 2299,
        img: './src/assets/women/image13.png',
        isFavorite: true,
        rating: 4.9
    },
    {
        title: 'Forever 21',
        desc: 'Plush body-hug sweater',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image14.png',
        isFavorite: true,
        rating: 4.3
    },
    {
        title: 'HnM',
        desc: 'Wide-leg TRF Jeans',
        oldPrice: 3299,
        newPrice: 2999,
        img: './src/assets/women/image15.png',
        isFavorite: false,
        rating: 3.2
    },
    {
        title: 'ONLY',
        desc: 'Floral Print Corsetry-Inspired Top',
        oldPrice: null,
        newPrice: 1790,
        img: './src/assets/women/image16.png',
        isFavorite: false,
        rating: 3.9
    },
    {
        title: 'ZARA',
        desc: 'Knit Scarf with diamond shapes',
        oldPrice: null,
        newPrice: 2299,
        img: './src/assets/women/image17.png',
        isFavorite: false,
        rating: 4.0
    },
    {
        title: 'ONLY',
        desc: 'Pink Blazer Dress',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image18.png',
        isFavorite: false,
        rating: 4.3
    },
    {
        title: 'VERO MODA',
        desc: 'Velvet Halter Jumpsuit',
        oldPrice: 3299,
        newPrice: 2999,
        img: './src/assets/women/image19.png',
        isFavorite: false,
        rating: 4.1
    },
    {
        title: 'Plush',
        desc: 'High Rise Jeans- Ankle Length',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image20.png',
        isFavorite: false,
        rating: 4.2
    },
    {
        title: 'Dressberry',
        desc: '3 pack of no-show socks',
        oldPrice: 2999,
        newPrice: 2299,
        img: './src/assets/women/image21.png',
        isFavorite: false,
        rating: 4.5
    },
    {
        title: 'ONLY',
        desc: 'Polo Collar Jumpsuit',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image22.png',
        isFavorite: false,
        rating: 3.3
    },
    {
        title: 'ZARA',
        desc: 'Blue mini dress',
        oldPrice: 3299,
        newPrice: 2999,
        img: './src/assets/women/image23.png',
        isFavorite: false,
        rating: 5.0
    },
    {
        title: 'Forever 21',
        desc: 'Wide Metal Choker',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image24.png',
        isFavorite: false,
        rating: 4.4
    },
]

const WomenProducts = () => {
    return (
        <main className='mx-auto max-w-1440'>
            <section className='mt-14 flex items-center justify-between'>
                <Title length={womenData.length} title='WOMEN' />
                <div className='flex items-center gap-2'>
                    <svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.32137 19.375H7.5V9.91516L0.9375 2.10266V0.625H18.75V2.09422L12.5 9.90672V16.1964L9.32137 19.375ZM8.75 18.125H8.80363L11.25 15.6786V9.46828L17.3246 1.875H2.37891L8.75 9.45984V18.125Z" fill="#DB6B97" />
                    </svg>
                    <p className='text-textColorAcc'>Filters</p>
                </div>
            </section>
            <section className='mt-14 w-max mb-20 max-w-1440'>
                <ItemCard data={womenData}/>
            </section>
        </main>
    )
}

export default WomenProducts