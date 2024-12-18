import { configureStore } from "@reduxjs/toolkit";
import findPlaceSlice from "../features/hero/findPlaceSlice";
import faqReducer from "../features/faqSlice"; 

export const store = configureStore({
  reducer: {
    hero: findPlaceSlice,
    faqs: faqReducer
  },
});
