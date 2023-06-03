import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { RootState } from "../app/store";

export const userRegister = createAsyncThunk('user/userRegister', async ({ email, password }: {email: string, password: string}) => {
    try {
        const res = await axios.post('https://avira-api-388212.lm.r.appspot.com/user/register', { email: email, password: password })
        return res.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const userLogin = createAsyncThunk('user/userLogin', async ({ email, password }: {email: string, password: string}) => {
    try {
        const res = await axios.post('https://avira-api-388212.lm.r.appspot.com/user/login', { email: email, password: password }, { withCredentials: true })
        return res.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

export const userLogout = createAsyncThunk('user/userLogout', async () => {
    try {
        const res = await axios.post('https://avira-api-388212.lm.r.appspot.com/user/logout', { email: JSON.parse(localStorage.getItem('user') || '') }, { withCredentials: true })
        return res.data
    } catch (error) {
        throw new Error(error.response.data.message)
    }
})

const initialState = {
    registerStatus: 'idle',
    loginStatus: 'idle',
    errorMessage: '',
    currentUser: localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user') || '') : ''
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        cleanUp: (state, action) => {
            localStorage.removeItem('user')
            localStorage.removeItem('cartItems')
            state = initialState
        }
    },
    extraReducers(builer) {
        builer
            .addCase(userRegister.pending, (state, action) => {
                state.registerStatus = 'loading'
            })
            .addCase(userRegister.fulfilled, (state, action) => {
                state.registerStatus = 'succeeded'
            })
            .addCase(userRegister.rejected, (state, action) => {
                state.registerStatus = 'error'
                state.errorMessage = action.error.message || ''
            })
            .addCase(userLogin.pending, (state, action) => {
                state.loginStatus = 'loading'
            })
            .addCase(userLogin.fulfilled, (state, action) => {
                localStorage.setItem('user', JSON.stringify(action.payload.email))
                state.currentUser = JSON.parse(localStorage.getItem('user') || '[]')
                state.loginStatus = 'succeeded'

            })
            .addCase(userLogin.rejected, (state, action) => {
                state.loginStatus = 'error'
                state.errorMessage = action.error.message || ''
            })
            .addCase(userLogout.pending, (state, action) => {
                state.loginStatus = 'loading'
            })
            .addCase(userLogout.fulfilled, (state, action) => {
                localStorage.removeItem('user')
                state.registerStatus = 'idle',
                state.loginStatus = 'idle',
                state.errorMessage = '',
                state.currentUser = ''

            })
            .addCase(userLogout.rejected, (state, action) => {
                state.loginStatus = 'error'
                state.errorMessage = action.error.message || ''
            })
    }
})

export default userSlice.reducer
export const { cleanUp } = userSlice.actions
export const currentUser = (state: RootState) => state.user.currentUser

