import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";



export const getCategories = createAsyncThunk('cateogries/getCategories',async(_,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;

    try {
        let {data} = await axios.get('https://api.escuelajs.co/api/v1/categories')
        return data
        
    } catch (error) {
        return rejectWithValue(error.message);  
    }
})

export const getCategory = createAsyncThunk('category/getCategory', async(id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        let {data} = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}`)
        return data
    } catch (error) {
        return rejectWithValue(error.message); 
    }
    
})


export const getProductsOfCategory = createAsyncThunk('products/getProductsOfCategory',async(id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        let {data} = await axios.get(`https://api.escuelajs.co/api/v1/categories/${id}/products`)
        return data;
    } catch (error) {
        return rejectWithValue(error.message);
    }
})


const categoriesSlice = createSlice({
    name:'categories',
    initialState:{categories:[],error:null,isLoading:false,products:[]},
    reducers:{},
  
    extraReducers:(builder)=>{
        builder.addCase(getCategories.pending,(state,action)=>{
            state.isLoading = true
            state.error = null;
        })
        builder.addCase(getCategories.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.categories =action.payload;
            state.error = null
        })

        builder.addCase(getCategories.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload; 
        })
        //get category
        builder.addCase(getCategory.pending,(state,action)=>{
            state.isLoading = true
            state.error = null;
        })
        builder.addCase(getCategory.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.categories =action.payload;
            state.error = null
        })

        builder.addCase(getCategory.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload; 
        })

        //products of category
        builder.addCase(getProductsOfCategory.pending,(state,action)=>{
            state.isLoading = true
            state.error = null;
        })
        builder.addCase(getProductsOfCategory.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.products =action.payload;
            state.error = null
        })

        builder.addCase(getProductsOfCategory.rejected,(state,action)=>{
            state.isLoading = false;
            state.error = action.payload; 
        })

    }

})

export default categoriesSlice.reducer;
