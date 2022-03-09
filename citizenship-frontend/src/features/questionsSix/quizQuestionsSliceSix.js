import { createSlice } from "@reduxjs/toolkit";
import { questionsSix } from "./questionsSix";

const initialState = questionsSix
  
  const quizQuestionsSliceSix = createSlice({
    name: 'quizQuestionsSix',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.findIndex(q => q.question === action.payload)
        state.splice(remove, 1)
      }
    }
  })
  
  export const {removeQuestion} = quizQuestionsSliceSix.actions

  export default quizQuestionsSliceSix.reducer