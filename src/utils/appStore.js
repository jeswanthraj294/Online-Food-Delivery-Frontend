import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
const appStore=configureStore({
    reducer:{
        // Add your reducers here
        cart:cartReducer,
    },
});




export default appStore;