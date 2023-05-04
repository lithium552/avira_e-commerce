import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    products: [],
    favorites: [],
    status: 'idle',
    error: null
}

export const fetchProducts = createAsyncThunk('products/fetchProducts', async (products: string) => {
    const res = await axios.get(`http://localhost:3000/products/${products}`)
    return res.data
})

export const fetchFavoriteProducts = createAsyncThunk('products/fetchFavoriteProducts', async (user) => {
    const res = await axios.get('http://localhost:3000/products/getFavorites', {withCredentials: true})
    console.log(res.data)
    return res.data
})

export const updateProducts = createAsyncThunk('products/updateProducts', async ({favorites, email, isFavorite}) => {
    const res = await axios.post('http://localhost:3000/products/favorite', { favorites: favorites, email: (email ? email : ''), isFavorite }, { withCredentials: true })
    console.log(favorites, email, res.data)
    return res.data
})

const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const res = state.products.find((item: Data) => item._id === action.payload._id)
            res.isFavorite = !res.isFavorite
            const prev = JSON.parse(localStorage.getItem('products'))
            if (prev) {
                const newItem = prev.find(item => item._id === res._id)
                if (newItem) {
                    newItem.isFavorite = res.isFavorite
                    localStorage.setItem('products', JSON.stringify(prev))
                } else {
                    prev.push(res)
                    localStorage.setItem('products', JSON.stringify(prev))
                }
            } else localStorage.setItem('products', JSON.stringify([res]))
        },
    },
    extraReducers(builer) {
        builer
            .addCase(fetchProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, action) => {
                const prev = JSON.parse(localStorage.getItem('products'))
                console.log(prev)
                if (prev) {
                    const filteredData = action.payload.map(item => {
                        const prevItem = prev.find(prevItem => prevItem._id === item._id)
                        if (prevItem) return prevItem
                        else return item
                    })
                    localStorage.setItem('products', JSON.stringify(prev))
                    state.products = filteredData
                } else {
                    state.products = action.payload
                }
                state.status = 'succeeded'
                console.log(state.products)
            })
            .addCase(fetchProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(updateProducts.fulfilled, (state, action) => {
                console.log(action.payload)
                state.favorites = action.payload.items
                localStorage.removeItem('products')
            })
            .addCase(fetchFavoriteProducts.fulfilled, (state, action) => {
                console.log(action.payload)
                state.favorites = action.payload
            })
    }
})

export default productsSlice.reducer
export const { addToFavorite } = productsSlice.actions
export const selectProducts = state => state.products.products
export const selectFavoriteProducts = state => state.products.favorites
