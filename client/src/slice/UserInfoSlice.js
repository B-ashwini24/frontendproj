import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    userInfo : JSON.parse(localStorage.getItem('token')) || null || [{isAdmin:false}]
}


export const UserSlice = createSlice({
    name:'userInfo',
    initialState,
    reducers:{
        storingUserInfo:(state,action)=>{
            state.userInfo = action.payload
            localStorage.setItem('token', JSON.stringify(action.payload))
        }
    }
})

export const {storingUserInfo} = UserSlice.actions

export default UserSlice.reducer
