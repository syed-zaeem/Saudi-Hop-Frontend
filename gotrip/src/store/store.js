import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import faqReducer from "../features/faqSlice"; 
import blogReducer from "../features/blogSlice"
import hotelReducer from "../features/hotelSlice"
import packageReducer from "../features/packageSlice"

export const store = configureStore({
  reducer: {
    hero: findPlaceSlice,
    faqs: faqReducer,
    blogs: blogReducer,
    hotels: hotelReducer,
    packages: packageReducer,
  },
});
