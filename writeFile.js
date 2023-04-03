import fs from 'fs'
import reduxx from '@reduxjs/toolkit'
const { nanoid } = reduxx

const womenData = [
    {
        id: nanoid(),
        title: 'VERO MODA',
        desc: 'Blue Soft Knit Sweater',
        oldPrice: null,
        newPrice: 2299,
        img: './src/assets/women/image13.png',
        isFavorite: true,
        rating: 4.9
    },
    {
        id: nanoid(),
        title: 'Forever 21',
        desc: 'Plush body-hug sweater',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image14.png',
        isFavorite: true,
        rating: 4.3
    },
    {
        id: nanoid(),
        title: 'HnM',
        desc: 'Wide-leg TRF Jeans',
        oldPrice: 3299,
        newPrice: 2999,
        img: './src/assets/women/image15.png',
        isFavorite: false,
        rating: 3.2
    },
    {
        id: nanoid(),
        title: 'ONLY',
        desc: 'Floral Print Corsetry-Inspired Top',
        oldPrice: null,
        newPrice: 1790,
        img: './src/assets/women/image16.png',
        isFavorite: false,
        rating: 3.9
    },
    {
        id: nanoid(),
        title: 'ZARA',
        desc: 'Knit Scarf with diamond shapes',
        oldPrice: null,
        newPrice: 2299,
        img: './src/assets/women/image17.png',
        isFavorite: false,
        rating: 4.0
    },
    {
        id: nanoid(),
        title: 'ONLY',
        desc: 'Pink Blazer Dress',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image18.png',
        isFavorite: false,
        rating: 4.3
    },
    {
        id: nanoid(),
        title: 'VERO MODA',
        desc: 'Velvet Halter Jumpsuit',
        oldPrice: 3299,
        newPrice: 2999,
        img: './src/assets/women/image19.png',
        isFavorite: false,
        rating: 4.1
    },
    {
        id: nanoid(),
        title: 'Plush',
        desc: 'High Rise Jeans- Ankle Length',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image20.png',
        isFavorite: false,
        rating: 4.2
    },
    {
        id: nanoid(),
        title: 'Dressberry',
        desc: '3 pack of no-show socks',
        oldPrice: 2999,
        newPrice: 2299,
        img: './src/assets/women/image21.png',
        isFavorite: false,
        rating: 4.5
    },
    {
        id: nanoid(),
        title: 'ONLY',
        desc: 'Polo Collar Jumpsuit',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image22.png',
        isFavorite: false,
        rating: 3.3
    },
    {
        id: nanoid(),
        title: 'ZARA',
        desc: 'Blue mini dress',
        oldPrice: 3299,
        newPrice: 2999,
        img: './src/assets/women/image23.png',
        isFavorite: false,
        rating: 5.0
    },
    {
        id: nanoid(),
        title: 'Forever 21',
        desc: 'Wide Metal Choker',
        oldPrice: 2299,
        newPrice: 1790,
        img: './src/assets/women/image24.png',
        isFavorite: false,
        rating: 4.4
    },
]

const data = [
 'Aroma beauty, Lorem ipsum dolor sit consectetur adipiscing Puma X-Ray Speed Lite',
 'Aroma beauty, Lorem ipsum dolor sit  adipiscing Puma Club Retro Prep',
 'Aroma beauty, Lorem ipsum  consectetur adipiscing Puma Slipstream Cord',
 'Aroma beauty, Lorem ipsum dolor sit consectetur adipiscing Ralph Lauren Masters Crt',
 'Aroma beauty, Lorem ipsum dolor sit  Puma Transport',
 'Aroma beauty,  sit consectetur adipiscing Lacoste T-CLIP',
 'Aroma beauty, Lorem ipsum dtetur adipiscing Lacoste COURT CAGE',
 'Aroma beauty, Lorem ipsum dolor sit consectetur adipiscing Hoka One One Speedgoat 5 GTX',
 'Aroma beauty, Lorem  sit consectetur adipiscing Lacoste L004',
 'Aroma beauty, Lorem  sit consectetur adipiscing Lacoste JOGGEUR 2.0',
 'Aroma beauty, Lorem ipsum dolor sit cor adipiscing Lacoste L001',
 'Aroma beauty, Lorem ipsum doit consectetur adipiscing ROND PRO',
]

let res = []

for (let i = 0; i < data.length; i++) {
    const dividedStrings = data[i].split(',')
    res.push({
        id: nanoid(),
        title: dividedStrings[0].trim() + `${i + 1}`,
        desc: dividedStrings[1].trim(),
        oldPrice: womenData[i].oldPrice,
        newPrice: womenData[i].newPrice,
        img: `./src/assets/beauty/B${i + 1}.webp`,
        isFavorite: false,
        rating: womenData[i].rating
    })
}

console.log(res)
fs.writeFile('./db1.json',
 JSON.stringify(res), 'utf-8', function (err) {
    if (err) throw err;
    console.log('complete');
})