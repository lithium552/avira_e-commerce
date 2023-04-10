import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAddressData = createAsyncThunk('addresses/fetchAddressData', async () => {
    const res = await axios.get('http://localhost:3000/addresses')
    return res.data
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
    }
})

export default cartSlice.reducer

export const { addToCart, deleteFromCart } = cartSlice.actions
export const selectAllAddresses = state => state.cart.addresses.addresses