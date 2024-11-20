import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:8080/api/new";

export const getItems = createAsyncThunk("items/getItems", async (items) => {
  const { name, surname, email, phone, password, image } = items;
  // const newImage =  image ? null : null
  const formData = new FormData(); // Capitalized FormData
  formData.append("file", image);
  formData.append(
    "person",
    new Blob(
      [
        JSON.stringify({
          name: name,
          surname: surname,
          email: email,
          phone: phone,
          password: password,
        }),
      ],
      { type: "application/json" }
    )
  ); // Correctly handling JSON part
  const response = await axios.post(url, formData, {
    headers: { "Content-Type": "multipart/form-data" }, // Correct Content-Type
  });
  console.log(response.data);
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    users: [],
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.users.push(action.payload);
      })
      .addCase(getItems.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message;
      });
  },
});

export default postSlice.reducer;
