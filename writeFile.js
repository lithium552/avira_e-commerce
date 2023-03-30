import fs from 'fs'
import reduxx from '@reduxjs/toolkit'
const { nanoid } = reduxx

const womenData = [
    {   id: nanoid(),
        title: 'VERO MODA',
        desc: 'Blue Soft Knit Sweater',
        oldPrice: null,
        newPrice: 2299,
        img: './src/assets/women/image13.png',
        isFavorite: true,
        rating: 4.9
    },
    {   id: nanoid(),
        title: 'Forever 21',
        desc: 'Plush body-hug sweater',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image14.png',
        isFavorite: true,
        rating: 4.3
    },
    {   id: nanoid(),
        title: 'HnM',
        desc: 'Wide-leg TRF Jeans',
        oldPrice: 3299,
        newPrice: 2999,
        img: './src/assets/women/image15.png',
        isFavorite: false,
        rating: 3.2
    },
    {   id: nanoid(),
        title: 'ONLY',
        desc: 'Floral Print Corsetry-Inspired Top',
        oldPrice: null,
        newPrice: 1790,
        img: './src/assets/women/image16.png',
        isFavorite: false,
        rating: 3.9
    },
    {   id: nanoid(),
        title: 'ZARA',
        desc: 'Knit Scarf with diamond shapes',
        oldPrice: null,
        newPrice: 2299,
        img: './src/assets/women/image17.png',
        isFavorite: false,
        rating: 4.0
    },
    {   id: nanoid(),
        title: 'ONLY',
        desc: 'Pink Blazer Dress',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image18.png',
        isFavorite: false,
        rating: 4.3
    },
    {   id: nanoid(),
        title: 'VERO MODA',
        desc: 'Velvet Halter Jumpsuit',
        oldPrice: 3299,
        newPrice: 2999,
        img: './src/assets/women/image19.png',
        isFavorite: false,
        rating: 4.1
    },
    {   id: nanoid(),
        title: 'Plush',
        desc: 'High Rise Jeans- Ankle Length',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image20.png',
        isFavorite: false,
        rating: 4.2
    },
    {   id: nanoid(),
        title: 'Dressberry',
        desc: '3 pack of no-show socks',
        oldPrice: 2999,
        newPrice: 2299,
        img: './src/assets/women/image21.png',
        isFavorite: false,
        rating: 4.5
    },
    {   id: nanoid(),
        title: 'ONLY',
        desc: 'Polo Collar Jumpsuit',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image22.png',
        isFavorite: false,
        rating: 3.3
    },
    {   id: nanoid(),
        title: 'ZARA',
        desc: 'Blue mini dress',
        oldPrice: 3299,
        newPrice: 2999,
        img: './src/assets/women/image23.png',
        isFavorite: false,
        rating: 5.0
    },
    {   id: nanoid(),
        title: 'Forever 21',
        desc: 'Wide Metal Choker',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image24.png',
        isFavorite: false,
        rating: 4.4
    },
]

fs.writeFile('./db.json', JSON.stringify(womenData), 'utf-8',  function(err) {
    if (err) throw err;
    console.log('complete');
    })