import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

const initialState = {
  packages: [],
};

export const getAllPackages = createAsyncThunk(
  "packages/getAllPackages",
  async () => {
    // const res = await fetch("http://209.97.137.58:5000/packages/");
    const res = await fetch("http://localhost:5000/packages/")

    const response = await res.json();
    console.log("This is the response of redux packages: ", response);

    return response;
  }
);

export const packageSlice = createSlice({
  name: "packages",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAction(getAllPackages.pending), (state) => {
        state.loading = true;
      })
      .addCase(createAction(getAllPackages.fulfilled), (state, action) => {
        state.loading = false;
        console.log(
          "The payload after fulfilling getting the packages is:",
          action.payload
        );
        state.packages = action.payload
      })
      .addCase(createAction(getAllPackages.rejected), (state, action) => {
        state.loading = true;
        state.error = action.error.message
      });
  },
});

export const {} = packageSlice.actions;

export default packageSlice.reducer;
