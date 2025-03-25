import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

const initialState = {
  hotels: [],
  filteredHotels: [],
  location: "",
  name: "",
  priceRange: [0, Infinity], // Price filter
  rating: 0,
};

export const getAllHotels = createAsyncThunk(
  "hotels/getAllHotels",
  async () => {
    const res = await fetch("http://209.97.137.58/hotels/");

    const response = await res.json();
    console.log("This is the response of redux hotels: ", response);

    return response;
  }
);

export const hotelSlice = createSlice({
  name: "hotels",
  initialState: initialState,
  reducers: {
    setLocation: (state, action) => {
      state.location = action.payload;
      console.log("Successfully setting the location" + action.payload);
      hotelSlice.caseReducers.applyFilters(state);
    },
    setName: (state, action) => {
      state.name = action.payload;
      console.log("The filtered name payload is:" + action.payload);
      hotelSlice.caseReducers.applyFilters(state);
    },
    setPriceRange: (state, action) => {
      state.priceRange = action.payload;
      hotelSlice.caseReducers.applyFilters(state);
    },
    setRating: (state, action) => {
      state.rating = action.payload;
      hotelSlice.caseReducers.applyFilters(state);
    },
    resetLocation: (state) => {
      state.location = "";
      // state.filteredHotels = state.hotels
      hotelSlice.caseReducers.applyFilters(state);
    },
    resetRating: (state) => {
      state.rating = 0
      hotelSlice.caseReducers.applyFilters(state);
    },
    resetFilters: (state) => {
      state.location = "";
      state.name = "";
      state.priceRange = { min: 0, max: Infinity };
      state.rating = 0;
      state.filteredHotels = state.hotels;
    },
    applyFilters: (state) => {
      let filtered = state.hotels;

      if (state.name !== "") {
        filtered = filtered.filter((hotel) =>
          hotel.title.toLowerCase().includes(state.name.toLowerCase())
        );
      }

      if (state.location !== "") {
        filtered = filtered.filter((hotel) =>
          hotel.location.toLowerCase().includes(state.location.toLowerCase())
        );
      }

      if (state.priceRange) {
        if (state.priceRange[0] !== 0 || state.priceRange[1] !== Infinity) {
          console.log(
            "The price is:" + state.priceRange[0] + " " + state.priceRange[1]
          );
          filtered = filtered.filter(
            (hotel) =>
              hotel.price >= state.priceRange[0] &&
              hotel.price <= state.priceRange[1]
          );
        }
      }

      if (state.rating !== 0) {
        filtered = filtered.filter((hotel) => hotel.rating === state.rating);
      }

      state.filteredHotels = filtered;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(createAction(getAllHotels.pending), (state) => {
        state.loading = true;
      })
      .addCase(createAction(getAllHotels.fulfilled), (state, action) => {
        state.loading = false;
        console.log(
          "The payload after fulfilling getting the hotels is:",
          action.payload
        );
        state.hotels = action.payload;
        state.filteredHotels = action.payload;
      })
      .addCase(createAction(getAllHotels.rejected), (state, action) => {
        state.loading = true;
        state.error = action.error.message;
      });
  },
});

export const {
  setLocation,
  setName,
  setPriceRange,
  setRating,
  resetFilters,
  applyFilters,
  resetLocation,
  resetRating,
} = hotelSlice.actions;

export default hotelSlice.reducer;
