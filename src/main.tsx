import React from 'react'
import ReactDOM from 'react-dom/client'
import Root from './routes/Root'
import {
  createBrowserRouter,
  redirect,
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
    element: <Root />,
    errorElement: <div>Error</div>,
    children: [
      {
        path: '/avira_e-commerce',
        element: <HomePage />,
        loader: () => redirect('/avira_e-commerce/categories')
      },
      {
        path: '/avira_e-commerce/orders',
        element: <Order />
      },
      {
        path: '/avira_e-commerce/categories',
        element: <Categories />,
      },
      {
        path: '/avira_e-commerce/categories/men',
        element: <Products />,
      },
      {
        path: '/avira_e-commerce/categories/women',
        element: <Products />,
      },
      {
        path: '/avira_e-commerce/categories/sneakers',
        element: <Products />,
      },
      {
        path: '/avira_e-commerce/categories/accessories',
        element: <Products />,
      },
      {
        path: '/avira_e-commerce/categories/children',
        element: <Products />,
      },
      {
        path: '/avira_e-commerce/categories/beauty',
        element: <Products />,
      },
      {
        path: '/avira_e-commerce/about-us',
        element: <AboutUs />
      },
      {
        path: '/avira_e-commerce/contact',
        element: <ContactPage />
      },
      {
        path: '/avira_e-commerce/cart',
        element: <Cart />
      },
      {
        path: '/avira_e-commerce/address',
        element: <AddressPage />
      },
      {
        path: '/avira_e-commerce/payment',
        element: <PaymentPage />
      },
      {
        path: '/avira_e-commerce/order',
        element: <OrderPlaced />
      },
      {
        path: '/avira_e-commerce/favorite',
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
