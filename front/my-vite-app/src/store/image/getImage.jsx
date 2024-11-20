
import {createSlice, createAsynkThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { addItemAsync } from "../get/getSlice"
 const url = "http://localhost:8080/api/image/"

 export const getImage = createAsynkThunk("items/getaImageAsync", async (items, id) => {
 const response = await axios.get(url + id, items)
 return response.data
 })

 const initialState = {
    items : [],
    status : "idle",
    error: null,
 }


 export const getImageSlice = createSlice({
    name: "getImageSlice",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(addItemAsync.pending, (state) => {
            state.status = "loanding";
        })
        .addCase(addItemAsync.fulfilled, (state, action) => {
            state.status = 'faililled'
            state.error = action.error.massage;
        })
        .addCase(addItemAsync.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
 })




 export const {} = getImageSlice.actions;
export default getImageSlice.reducer 
