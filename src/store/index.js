import { configureStore } from "@reduxjs/toolkit";
import cart from "./CartSlice";
import categories from "./CatgoriesSlice";
import products from "./ProductsSlice";

export default configureStore({
    reducer:{
        products, 
        categories,
        cart
    }
})