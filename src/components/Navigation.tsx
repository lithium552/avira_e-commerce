import { Link } from "react-router-dom"
import { useLocation } from 'react-router-dom'

const navData = [
    {
        address: '/avira_e-commerce/categories',
        text: 'Home'
    },
    {
        address: '/avira_e-commerce/orders',
        text: 'Orders'
    },
    {
        address: '/avira_e-commerce/about-us',
        text: 'About'
    },
    {
        address: '/avira_e-commerce/contact',
        text: 'Contact'
    },
]

const Navigation = () => {
    const { pathname } = useLocation()
    return (
        <ul className='flex gap-10 '>
            {navData.map(item => (
                <li key={item.address} className={`${item.address.includes(pathname) && 'text-textColorAcc'} hover:text-textColorAcc hover:underline underline-offset-8`}><Link to={item.address}>{item.text}</Link></li>
            ))}
        </ul>
    )
}

export default Navigation