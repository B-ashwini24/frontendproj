import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../slice/UserInfoSlice'

export const Store = configureStore({
    reducer: {
        userInfo: UserSlice
    },
})