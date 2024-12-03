import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { addItemAsync } from "./getSlice";

const url = "http://localhost:8080/api/change/";

export const changeItems = createAsyncThunk(
  "items/changeItemsAsync",
  async (change, { rejectWithValue }) => {
    console.log(change);
    const { id, name, surname, email, phone, password, img } = change;
    const formData = new FormData();
    formData.append("file", img);
    formData.append(
      "person",
      new Blob([JSON.stringify({ name, surname, email, phone, password })], {
        type: "application/json",
      })
    );
    try {
      const response = await axios.put(`${url}${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      return response.data;
    } catch (error) {
      console.error("Error updating item:", error);
      return rejectWithValue(error.response.data);
    }
  }
);

const initialState = {
  items: [],
  status: "idle",
  error: null,
};

const changeSlice = createSlice({
  name: "change",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(changeItems.pending, (state) => {
        state.status = "londing";
      })
      .addCase(changeItems.fulfilled, (state) => {
        state.status = "succeeded";
      })
      .addCase(changeItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

// export const {} = changeSlice.actions;
export default changeSlice.reducer;
