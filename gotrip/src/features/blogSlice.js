import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

const initialState = {
  blogs: [],
};

export const uploadImage = createAsyncThunk("files/uploadImage", async (file) => {
    console.log("In the files slice: " , file)
    const res = await fetch("http://localhost:5000/files/upload", {
        method: "POST",
        headers: {
        //   "Content-Type": "application/json",
        "Content-Type": "multipart/form-data"
        },
        file: JSON.stringify(file),
        // file: file
      });
    
      const response = await res.json();
      console.log("This is response after uploading the file: ", response);
      return response;
})
  

export const blogSlice = createSlice({
  name: "blogs",
  initialState: initialState,
  reducers: [],
  extraReducers: (builder) => {
    builder
      .addCase(createAction(uploadImage.pending), (state) => {
        state.loading = true;
      })
      .addCase(createAction(uploadImage.fulfilled), (state) => {
        state.loading = false;
      })
      .addCase(createAction(uploadImage.rejected), (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});
