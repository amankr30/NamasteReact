import { createSlice } from "@reduxjs/toolkit";



const CartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        // items:getCartItems(),
    },
    reducers:{
        addItem:(state,action)=>{
            //mutating the state here{modifying the state }
            state.items.push(action.payload);
        },
        removeItem:(state,action)=>{
            state.items.pop();
        },
        clearCart:(state,action)=>{
            state.items.length=0;
        },
    }
})

export const{addItem,removeItem,clearCart}=CartSlice.actions;

export default CartSlice.reducer;