import { createSlice, nanoid, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import { AddressData } from "../routes/AddressPage";
import { Data } from "../components/ItemCard";
import { RootState } from "../app/store";

export const fetchAddressData = createAsyncThunk('addresses/fetchAddressData', async () => {
    const res = await axios.get('https://avira-api-388212.lm.r.appspot.com/address', {withCredentials: true})
    return res.data
})

export const editAddressData = createAsyncThunk('addresses/editAddressData', async (data: AddressData) => {
    const res = await axios.post(`https://avira-api-388212.lm.r.appspot.com/address/${data._id}`, {...data}, {withCredentials: true})
    return res.data
})

export const addNewAddressData = createAsyncThunk('addresses/addNewAddressData', async (data: Partial<AddressData>) => {
    delete data._id
    const res = await axios.post('https://avira-api-388212.lm.r.appspot.com/address/', {...data}, {withCredentials: true})
    return res.data
})

export const deleteAddressData = createAsyncThunk('addresses/deleteAddressData', async (id: string) => {
    const res = await axios.delete(`https://avira-api-388212.lm.r.appspot.com/address/${id}`, {withCredentials: true})
    return res.data
})

interface CartState {
    cart: Data[] ,
    addresses: {
        status: string,
        addresses: AddressData[] 
        error: Object | null
    }
}

const initialState: CartState = {
    cart: JSON.parse(localStorage.getItem('cartItems') || '[]'),
    addresses: {
        status: 'idle',
        addresses: [],
        error: null
    }
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Data>) => {
                state.cart.push(action.payload)
                localStorage.setItem('cartItems', JSON.stringify([...state.cart]))
            },
        deleteFromCart: (state, action) => {
            const fiteredItems = state.cart.filter((item: Data) => item._id !== action.payload._id)
            localStorage.setItem('cartItems', JSON.stringify([...fiteredItems]))
            state.cart = [...fiteredItems]
        },
        clearCart: (state, action) => {
            state.cart = []
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
                const res = state.addresses.addresses.filter(item => item._id !== action.payload._id)
                console.log(res, state.addresses.addresses)
                state.addresses.addresses = res.concat([action.payload])
            })
            .addCase(addNewAddressData.fulfilled, (state, action) => {
                state.addresses.addresses.push(action.payload)
            })
            .addCase(deleteAddressData.fulfilled, (state, action) => {
                console.log(action.payload)
                const res = state.addresses.addresses.filter(item => action.payload !== item._id)
                state.addresses.addresses = res
            })
    }
})

export default cartSlice.reducer

export const { addToCart, deleteFromCart, clearCart } = cartSlice.actions
export const selectAllAddresses = (state: RootState) => state.cart.addresses.addresses
export const selectCartItems = (state: RootState) =>  state.cart.cart