import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getProducts = createAsyncThunk('products/getProducts',async(num,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;

    try {
        let {data} = await axios.get(`https://api.escuelajs.co/api/v1/categories/${num}/products`);
        return data
        
    } catch (error) {
        return rejectWithValue(error.message);  
    }

})




 const productsSlice = createSlice({
    name:'products',
    initialState:{products:[],error:null,isLoading:false,listProduct:[],items:[]},
    reducers:{
        increasePage:(state, action)=>{
            state.num+=1
            console.log(state.num+=1);
        },
        decreasePage:(state, action)=>{
            state.num-=1
        },

        filterByPrice:(state,action)=>{
            let newList = [...state.listProduct]
            state.products = newList.filter((item)=>item.price > action.payload)
            console.log(state.products);
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(getProducts.pending,(state,action)=>{
            state.isLoading = true
            state.error = null;
        })
        builder.addCase(getProducts.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.products =action.payload;
            state.listProduct = action.payload;
            state.items = action.payload;
            state.error = null;

        })
        builder.addCase(getProducts.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload; 
        })
    }

 })


 export default productsSlice.reducer;
 export const {increasePage,decreasePage,filterByPrice} = productsSlice.actions;