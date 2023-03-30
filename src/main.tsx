import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom"
import HomePage from './routes/HomePage'
import Categories from './routes/Categories'
import AboutUs from './routes/AboutUs'
import ContactPage from './routes/ContactPage'
import Cart from './routes/Cart'
import AddressPage from './routes/AddressPage'
import PaymentPage from './routes/PaymentPage'
import OrderPlaced from './routes/OrderPlaced'
import WomenProducts from './routes/WomenProducts'
import SingUpPage from './routes/SingUpPage'
import SingInPage from './routes/SingInPage'
import strore from './app/strore'
import { Provider } from 'react-redux'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/',
        element: <HomePage />
      },
      {
        path: '/categories',
        element: <Categories />
      },
      {
        path: '/about-us',
        element: <AboutUs />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/cart',
        element: <Cart />
      },
      {
        path: '/address',
        element: <AddressPage />
      },
      {
        path: '/payment',
        element: <PaymentPage />
      },
      {
        path: '/order',
        element: <OrderPlaced />
      },
      {
        path: '/products',
        element: <WomenProducts />
      },
    ]
  },
  {
    path: '/sing-up',
    element: <SingUpPage />
  },
  {
    path: '/sing-in',
    element: <SingInPage />
  },
])

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={strore}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
