import { createSlice } from "@reduxjs/toolkit";
import { questionsFour } from "./questionsFour";

const initialState = questionsFour
  
  const quizQuestionsSliceFour = createSlice({
    name: 'quizQuestionsFour',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.findIndex(q => q.question === action.payload)
        state.splice(remove, 1)
      }
    }
  })
  
  export const {removeQuestion} = quizQuestionsSliceFour.actions

  export default quizQuestionsSliceFour.reducer