import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../components/Title'
import AddressInfo from '../components/AddressInfo'
import ItemCard from '../components/ItemCard'
import ItemsList from '../components/ItemsList'
import { currentUser } from '../features/user'
import { useSelector } from 'react-redux'
import { AddressData } from './AddressPage'
import { Data } from '../components/ItemCard'

interface OrderData {
  address: AddressData
  items: Data[]
  paymentMethod: string
  userId: string
}

const Order = () => {
  const [orderData, setOrderData] = useState<OrderData[]>([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('https://avira-api-388212.lm.r.appspot.com/orders', { withCredentials: true })
      setOrderData(res.data)
    }
    fetchData()
  }, [])
  const user = useSelector(currentUser)
  console.log(orderData)
  return (
    <div className='m-12 w-fit flex items-start gap-8'>
      {!user ? (<div>You must login in first...</div>) :
      (<>
      <Title length={null} title='Orders:' />
      <ul>
      {orderData.length ? orderData.map(order => (
        <li className='flex border rounded-lg gap-12 p-8 mb-4'>
          <div className='flex gap-12 flex-col'>
          <div>
          <h2 className='mb-4 font-semibold text-xl text'>Address:</h2>
          <AddressInfo address={order.address}/>
          </div>
          <div>
          <h2 className='mb-4 font-semibold text-xl text'>Payment method:</h2>
          <p>{order.paymentMethod}</p>
          </div>
          </div>
          <div className='ml-auto'>
          <h2 className='font-semibold text-xl text'>Products:</h2>
          <div className='flex gap-4 justify-center'>
            <ItemsList emptyText='' itemsData={order.items} />
          </div>
          </div>
        </li>
        )) : <p className='mt-1'>You dont have any orders yet...</p>}
      </ul>
      </>)}
    </div>
  )
}

export default Order