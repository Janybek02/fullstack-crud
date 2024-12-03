import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8080/api/";

export const getItemAsync = createAsyncThunk(
  "items/addItemAsync",
  async (newItem) => {
    const response = await axios.get(url + "user", newItem);
    return response.data;
  }
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

export const getSlice = createSlice({
  name: "counterSlice",
  initialState,
  reducers: {
    deleteItemsReducer: (state, action) => {
       state.items = state.items.filter((item) => item.id !== action.payload);
      },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItemAsync.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getItemAsync.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.items = [...action.payload];
      })
      .addCase(getItemAsync.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export const { deleteItemsReducer } = getSlice.actions;
export default getSlice.reducer;
