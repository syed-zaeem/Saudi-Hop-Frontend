import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk, createAction } from "@reduxjs/toolkit";

const initialState = {
  faqs: [],
};

// export const addNewFaq = createAsyncThunk("faqs/addFaq", async (data) => {
//   const res = await fetch("http://localhost:5000/faqs/", {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(data),
//   });

//   const response = await res.json();
//   console.log("This is response after adding the new Faq: ", response);
//   return response;
// });

// export const getAllFaqs = createAsyncThunk("faqs/getAllFaqs", async () => {
//     const res = await fetch("http://localhost:5000/faqs/");

//     const response = await res.json();

//     return response;
// })

// export const updateFaq = createAsyncThunk("faqs/updateFaq", async (data) => {
//     let res = await fetch(`http://localhost:5000/faqs/${data.id}`, {
//         method: "PUT", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//           "Content-Type": "application/json",
//         }, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//         body: JSON.stringify(data.updatedFaq), // body data type must match "Content-Type" header
//       });
//       const response = await res.json();

//       return response;
// })

// export const deleteFaq = createAsyncThunk("faqs/deleteFaq", async (id) => {
//     let res = await fetch(`http://localhost:5000/faqs/${id}`, {
//         method: "DELETE", // *GET, POST, PUT, DELETE, etc.
//         headers: {
//           "Content-Type": "application/json",
//         }, // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
//       });
//       const response = await res.json();

//       return id;
// })

// export const getFaqById = createAsyncThunk("faqs/getFaqById", async (id)=>{
//     let res = await fetch(`http://localhost:5000/faqs/${id}`)

//     // console.log("In slice: " , id)
//     const response = await res.json()

//     // console.log("In the slice: " , response)

//     return response
// })

export const getAllFaqs = createAsyncThunk("faqs/getAllFaqs", async () => {
  const res = await fetch("http://localhost:5000/faqs/");

  const response = await res.json();
  console.log("This is the response of redux faqs: ", response.json);

  return response;
});

export const faqSlice = createSlice({
  name: "faqs",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createAction(getAllFaqs.pending), (state) => {
        state.loading = true;
      })
      .addCase(createAction(getAllFaqs.fulfilled), (state, action) => {
        state.loading = false;
        console.log("The fulfilled payload of getting all faqs is: " , action.payload)
        state.faqs = action.payload
      })
      .addCase(createAction(getAllFaqs.rejected), (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
    //   .addCase(createAction(getFaqById.pending), (state)=>{
    //     state.loading = true;
    //   })
    //   .addCase(createAction(getFaqById.fulfilled), (state, action) => {
    //     state.loading = false;
    //     // console.log("I am here for your help: " , action.payload)
    //     state.faqForUpdate = action.payload;
    //   })
    //   .addCase(createAction(getFaqById.rejected), (state, action) => {
    //     state.loading = false;
    //     state.error = action.error.message;
    //   })
  },
});

export const {} = faqSlice.actions;

export default faqSlice.reducer;
