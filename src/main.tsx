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
import Products from './routes/Products'
import SingUpPage from './routes/SingUpPage'
import SingInPage from './routes/SingInPage'
import { store } from './app/store'
import { Provider } from 'react-redux'
import FavoriteItems from './routes/FavoriteItems'
import Order from './routes/Order'

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
        path: '/orders',
        element: <Order />
      },
      {
        path: '/categories',
        element: <Categories />,
      },
      {
        path: '/categories/men',
        element: <Products />,
      },
      {
        path: '/categories/women',
        element: <Products />,
      },
      {
        path: '/categories/sneakers',
        element: <Products />,
      },
      {
        path: '/categories/accessories',
        element: <Products />,
      },
      {
        path: '/categories/children',
        element: <Products />,
      },
      {
        path: '/categories/beauty',
        element: <Products />,
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
        path: '/favorite',
        element: <FavoriteItems />
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
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>,
)
