import { createSlice } from "@reduxjs/toolkit";
import { questionsTwo } from "./questionsTwo";

const initialState = questionsTwo
  
  const questionsSliceTwo = createSlice({
    name: 'questionsTwo',
    initialState,
    reducers: {}
  })

  export default questionsSliceTwo.reducer