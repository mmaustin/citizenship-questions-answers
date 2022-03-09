import { createSlice } from "@reduxjs/toolkit";
import { questionsSeven } from "./questionsSeven";

const initialState = questionsSeven
  
  const quizQuestionsSliceSeven = createSlice({
    name: 'quizQuestionsSeven',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.findIndex(q => q.question === action.payload)
        state.splice(remove, 1)
      }
    }
  })
  
  export const {removeQuestion} = quizQuestionsSliceSeven.actions

  export default quizQuestionsSliceSeven.reducer