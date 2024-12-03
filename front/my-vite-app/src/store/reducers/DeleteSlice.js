
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"
 const url = "http://localhost:8080/api/delete/"

 export const deleteItem = createAsyncThunk("items/deleteAsync", async (id) => {
 const response = await axios.delete(url + id, )
 return response.data
 })

 const initialState = {
    items : [],
    status : "idle",
    error: null,
 }


 export const deleteSlice = createSlice({
    name: "deleteSlice",
    initialState,
    reducers:{

    },
    extraReducers: (builder) => {
        builder
        .addCase(deleteItem.pending, (state) => {
            state.status = "loanding";
        })
        .addCase(deleteItem.fulfilled, (state, action) => {   
            state.status = 'fullfiled'
            state.error = action.error;
        })
        .addCase(deleteItem.rejected, (state, action) => {
            state.status = "failed";
            state.error = action.error.message;
        });
    }
 })





export default deleteSlice.reducer 
