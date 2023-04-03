import '../index.css'
import Header from '../components/Header'
import { Outlet } from 'react-router-dom'
import Categories from './Categories'
import WomenProducts from './Products'
import AboutUs from './AboutUs'
import ContactPage from './ContactPage'
import Cart from './Cart'
import AddressPage from './AddressPage'
import PaymentPage from './PaymentPage'
import OrderPlaced from './OrderPlaced'
import SingUpPage from './SingUpPage'
import SingInPage from './SingInPage'



function Root() {

  return (
    <>
      <Header />
      <Outlet />
    </>
  )
}

export default Root
