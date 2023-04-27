import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAddressData = createAsyncThunk('addresses/fetchAddressData', async () => {
    const res = await axios.get('http://localhost:3000/addresses')
    return res.data
})

export const editAddressData = createAsyncThunk('addresses/editAddressData', async (data) => {
    const res = await axios.put(`http://localhost:3000/addresses/${data.id}`, {...data})
    return res.data
})

export const addNewAddressData = createAsyncThunk('addresses/addNewAddressData', async (data) => {
    const res = await axios.post('http://localhost:3000/addresses/', {...data})
    return res.data
})
export const deleteAddressData = createAsyncThunk('addresses/deleteAddressData', async (id) => {
    await axios.delete(`http://localhost:3000/addresses/${id}`)
    return id
})

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cartItems') || '[]'),
        addresses: {
            status: 'idle',
            addresses: [],
            error: null
        }
    },
    reducers: {
        addToCart: {
            reducer: (state, action) => {
                state.cart.push(action.payload)
                localStorage.setItem('cartItems', JSON.stringify([...state.cart]))
            },
            prepare: (item) => {
                const id = nanoid()
                return { payload: { ...item, id } }
            }
        },
        deleteFromCart: (state, action) => {
            const fiteredItems = state.cart.filter(item => item.id !== action.payload.id)
            localStorage.setItem('cartItems', JSON.stringify([...fiteredItems]))
            state.cart = [...fiteredItems]
        }
    },
    extraReducers(builer) {
        builer
            .addCase(fetchAddressData.pending, (state, action) => {
                state.addresses.status = 'loading'
            })
            .addCase(fetchAddressData.fulfilled, (state, action) => {
                state.addresses.status = 'succeeded'
                if (!state.addresses.addresses.length) state.addresses.addresses = [...action.payload]
            })
            .addCase(fetchAddressData.rejected, (state, action) => {
                state.addresses.status = 'error'
            })
            .addCase(editAddressData.fulfilled, (state, action) => {
                state.addresses.addresses = action.payload
            })
            .addCase(addNewAddressData.fulfilled, (state, action) => {
                state.addresses.addresses.push(action.payload)
            })
            .addCase(deleteAddressData.fulfilled, (state, action) => {
                console.log(action.payload)
                const res = state.addresses.addresses.filter(item => action.payload !== item.id)
                console.log(res)
                state.addresses.addresses = res
                console.log(state.addresses.addresses)
            })
    }
})

export default cartSlice.reducer

export const { addToCart, deleteFromCart } = cartSlice.actions
export const selectAllAddresses = state => state.cart.addresses.addresses