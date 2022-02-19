import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";

const initialState = questions
  
  const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {}
  })
  const crossbow = 0;
  export default questionsSlice.reducer