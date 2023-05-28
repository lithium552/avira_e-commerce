import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Title from '../components/Title'
import AddressInfo from '../components/AddressInfo'
import ItemCard from '../components/ItemCard'
import ItemsList from '../components/ItemsList'
import { currentUser } from '../features/user'
import { useSelector } from 'react-redux'

const Order = () => {
  const [orderData, setOrderData] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get('http://localhost:3000/orders', { withCredentials: true })
      setOrderData(res.data)
      console.log(res.data)
    }
    fetchData()
  }, [])
  const user = useSelector(currentUser)
  return (
    <div className='m-12 w-fit flex items-start gap-8'>
      {!user ? (<div>You must login in first...</div>) :
      (<>
      <Title length={null} title='Orders:' />
      <ul>
      {orderData.length && orderData.map(order => (
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
        ))}
      </ul>
      </>)}
    </div>
  )
}

export default Order