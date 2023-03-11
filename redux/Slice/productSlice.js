import { createSlice } from '@reduxjs/toolkit'
import {createAsyncThunk} from '@reduxjs/toolkit'


const initialState = {
    productName : 'first name',
    productDescription : 'asdasd'
}


const productSlice = createSlice({
       name:"Products", initialState,
       reducers:{
        changeName:(state,payload)=>{
            state.productName = payload.payload
        }
       },
       extraReducers:{

       }
})




export const {changeName} = productSlice.actions;
export default productSlice.reducer