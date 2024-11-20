import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"

const url = "http://localhost:8080/api/user"

export const addItemAsync = createAsyncThunk('items/addItemAsync', async (newItem) => {
  const response = await axios.get(url, newItem);
  return response.data
})

const initialState = {
    items : [],
    status : "idle",
    error : null,
}



export const counterSlice =  createSlice({
    name: "counterSlice",
    initialState,
    reducers: {
        
    },
     extraReducers: (builder) => {
    builder
      .addCase(addItemAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(addItemAsync.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = [...action.payload]
      })
      .addCase(addItemAsync.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
    }

})


export const {} = counterSlice.actions;
export default counterSlice.reducer;



