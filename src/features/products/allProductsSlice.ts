import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'
import { Data } from '../../components/ItemCard'

const initialState = {
    allProducts: [],
    status: 'idle',
    error: null
}

export const fetchAllProducts = createAsyncThunk('allProducts/fetchAllProducts', async () => {
    const fetch = await axios.get('http://localhost:3000/db')
    const entries = Object.entries(fetch.data)
    const res = entries.reduce((prev, cuur) => cuur[1].map(item => ({ ...item, ['category']: cuur[0] })).concat(prev), [])
    // const res = Object.values(fetch.data).reduce((prev, curr) => prev.concat(...curr) , [])
    return res
})

export const deleteFromFavorite = createAsyncThunk('allProducts/deleteFromFavorite', async (item) => {
    const newItem = {...item, isFavorite: false}
    delete newItem.category
    const fetch = await axios.put(`http://localhost:3000/${item.category}/${item.id}`, newItem)
    return item
})


const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState,
    reducers: {
        addToFavorite: (state, action) => {
            const res = state.allProducts.find((item: Data) => item.id === action.payload.id)
            res.isFavorite = true
        },
        // deleteFromFavorite: (state, action) => {
        //     const res = state.allProducts.find((item: Data) => item.id === action.payload.id)
        //     res.isFavorite = false
        // } 
    },
    extraReducers(builer) {
        builer
            .addCase(fetchAllProducts.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(fetchAllProducts.fulfilled, (state, action) => {
                state.status = 'succeeded'
                if (!state.allProducts.length) state.allProducts = state.allProducts.concat(action.payload)
            })
            .addCase(fetchAllProducts.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.error.message
            })
            .addCase(deleteFromFavorite.fulfilled, (state, action) => {
                const res = state.allProducts.find(item => item.id === action.payload.id)
                res.isFavorite = false
            })
    }
})

export default allProductsSlice.reducer
export const { addToFavorite } = allProductsSlice.actions
export const selectAllFavoriteProducts = state => state.allProducts.allProducts.filter(item => item.isFavorite === true)
export const selectAllProducts = state => state.allProducts.allProducts
export const selectAllSlashedProducts = state => state.allProducts.allProducts.filter(prod => prod.oldPrice !== null)
