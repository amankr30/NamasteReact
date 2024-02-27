import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./CartSlice"

const AppStore=configureStore({
    
    reducer:{
        Cart:CartReducer
    },

});

export default AppStore;