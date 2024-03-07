import { configureStore } from "@reduxjs/toolkit";

import CartSlice from "./CartSlice";

const AppStore=configureStore({
    
    reducer:{
        Cart:CartSlice
    },

});

export default AppStore;