import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tabs: [
    { id: 1, name: "Economy", path: "three-star-packages" },
    { id: 2, name: "Premium", path: "four-star-packages" },
    { id: 3, name: "Luxury", path: "five-star-packages" },
    { id: 4, name: "Ultra Luxury", path: "ultra-luxury-packages" },
    { id: 5, name: "Group Bookings", path: "/" },
    { id: 6, name: "Umrah +", path: "/umrah+-packages" },
  ],
  currentTab: "",
};

export const findPlaceSlice = createSlice({
  name: "find-place",
  initialState,
  reducers: {
    addCurrentTab: (state, { payload }) => {
      state.currentTab = payload;
    },
  },
});

export const { addCurrentTab } = findPlaceSlice.actions;
export default findPlaceSlice.reducer;
