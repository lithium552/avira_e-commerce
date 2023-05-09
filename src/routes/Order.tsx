import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Order = () => {
    const [orderData, setOrderData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get('http://localhost:3000/orders', {withCredentials: true})
            setOrderData(res.data)
            console.log(res.data)
        }
        fetchData()
    },[])
    console.log(orderData)
  return (
    <div>{orderData.length && orderData.map(order => (
        <div>{JSON.stringify(order)}</div>
    ))}</div>
  )
}

export default Order