import fs from 'fs'
import reduxx from '@reduxjs/toolkit'
const { nanoid } = reduxx

const addressData = [
    {
        id: 1,
        name: 'Salem',
        surname: 'Mirza',
        street: 'Kochi - Kanyakumari Hwy, Palayam',
        city: 'Thiruvananthapuram, Kerala',
        index: '695001',
        phone: '0471 247 0240',
        isOffice: false,
        isHome: true,
    },
    {
        id: 2,
        name: 'Kirti',
        surname: 'Bajaj',
        street: '3rd A Cross Rd, Sena Vihar, Kalyan Nagar',
        city: 'Bangalore, Karnataka',
        index: '560043',
        phone: '080 2543 5193',
        isOffice: true,
        isHome: false,
    },
    {
        id: 3,
        name: 'Prabhat',
        surname: 'Sengupta',
        street: 'Bakerganj Shurigali, Near Rupak Cinema',
        city: 'Patna Metropolitan Area, Bihar',
        index: '800004',
        phone: '080 2543 5193',
        isOffice: false,
        isHome: false,
    },
]

let res = []

for (let i = 0; i < addressData.length; i++) {
    res.push({
        ...addressData[i],
        id: nanoid(),
    })
}

fs.writeFile('./db1.json',
 JSON.stringify(res), 'utf-8', function (err) {
    if (err) throw err;
    console.log('complete');
})