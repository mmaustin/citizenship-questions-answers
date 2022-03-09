import { createSlice } from "@reduxjs/toolkit";
import { questionsFive } from "./questionsFive";

const initialState = questionsFive
  
  const quizQuestionsSliceFive = createSlice({
    name: 'quizQuestionsFive',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.findIndex(q => q.question === action.payload)
        state.splice(remove, 1)
      }
    }
  })
  
  export const {removeQuestion} = quizQuestionsSliceFive.actions

  export default quizQuestionsSliceFive.reducer