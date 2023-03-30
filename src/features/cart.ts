import { createSlice, nanoid } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: JSON.parse(localStorage.getItem('cartItems') || '[]')
    },
    reducers: {
        addToCart: {
            reducer: (state, action) => {
                console.log(action.payload)
                state.cart.push(action.payload)
                localStorage.setItem('cartItems', JSON.stringify([...state.cart]))
            },
            prepare: (item) => {
                const id = nanoid()
                return { payload: { ...item, id } }
            }
        },
        deleteFromCart: (state, action) => {
            const fiteredItems = state.cart.filter(item => item.id !== action.payload)
            localStorage.setItem('cartItems', JSON.stringify([...fiteredItems]))
            state.cart = [...fiteredItems]
        }
    }
})

export default cartSlice.reducer

export const { addToCart, deleteFromCart } = cartSlice.actions