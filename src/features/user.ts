import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const userRegister = createAsyncThunk('user/userRegister', async ({email, password}) => {
    try {
    const res = await axios.post('http://localhost:3000/user/register', {email: email, password: password})
    console.log(res.data)
    return res.data
    } catch(error) {
        console.log(error.response.data.message)
        throw new Error(error.response.data.message)
    }
})

export const userLogin = createAsyncThunk('user/userLogin', async ({email, password}) => {
    try {
    const res = await axios.post('http://localhost:3000/user/login', {email: email, password: password}, {withCredentials: true})
    console.log(res)
    return res.data
    } catch (error) {
        console.log(error.response.data.message)
        throw new Error(error.response.data.message)
    }
})
export const userLogout = createAsyncThunk('user/userLogin', async () => {
    try {
    const res = await axios.post('http://localhost:3000/user/logout', {email: JSON.parse(localStorage.getItem('user'))}, {withCredentials: true})
    console.log(res)
    return res.data
    } catch (error) {
        console.log(error.response.data.message)
        throw new Error(error.response.data.message)
    }
})

const initialState = {
    status: 'idle',
    errorMessage: '',
    currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : ''
  }

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        cleanUp: (state, action) => {
            state = initialState
        }
    },
    extraReducers(builer) {
        builer
            .addCase(userRegister.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.status = 'succeeded'
            })
            .addCase(userRegister.rejected, (state, action) => {
                console.log(action.error)
                state.status = 'error'
                state.errorMessage = action.error.message
            })
            .addCase(userLogin.pending, (state, action) => {
                state.status = 'loading'
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                console.log(action.payload)
                localStorage.setItem('user', JSON.stringify(action.payload.email))
                state.status = 'succeeded'
                
            })
            .addCase(userLogin.rejected, (state, action) => {
                state.status = 'error'
                state.errorMessage = action.error.message
            })
    }
})

export default userSlice.reducer
export const { cleanUp } = userSlice.actions
export const currentUser = state => state.user.currentUser

