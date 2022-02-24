import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplay } from "./questions";

const initialState = questionAnswerDisplay
  
  const displaySlice = createSlice({
    name: 'displayQuestions',
    initialState,
    reducers: {}
  })
  
  //export const {removeQuestion} = quizQuestionsSlice.actions

  export default displaySlice.reducer