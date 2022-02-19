import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";

const initialState = questions
  
  const quizQuestionsSlice = createSlice({
    name: 'quizQuestions',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.findIndex(q => q.question === action.payload)
        state.splice(remove, 1)
      }
    }
  })
  const crossbow = 0;
  export const {removeQuestion} = quizQuestionsSlice.actions

  export default quizQuestionsSlice.reducer