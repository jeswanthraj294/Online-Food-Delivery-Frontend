import { createSlice } from "@reduxjs/toolkit";
import { clear } from "console";

const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items: [],
        totalAmount: 0
    },
    reducers:{
        addItem:(state,action)=>{
            return {
                ...state,
                items: [...state.items, action.payload],
                totalAmount: state.totalAmount + action.payload.price
            }
        },
        removeItem:(state,action)=>{
            const updatedItems=state.items.filter((item)=>(item.id!==action.payload.id))
            return {
                ...state,
                items: updatedItems,
                totalAmount: state.totalAmount - action.payload.price
            }
        },
        clearCart:(state)=>{
            return {
                ...state,
                items: [],
                totalAmount: 0
            }
        }
    }
})
export const { addItem, removeItem, clearCart } = cartSlice.actions;
export default cartSlice.reducer;