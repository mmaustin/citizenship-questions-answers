import { createSlice } from "@reduxjs/toolkit";
import { questionsNine } from "./questionsNine";

const initialState = questionsNine
  
  const quizQuestionsSliceNine = createSlice({
    name: 'quizQuestionsNine',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.findIndex(q => q.question === action.payload)
        state.splice(remove, 1)
      }
    }
  })
  
  export const {removeQuestion} = quizQuestionsSliceNine.actions

  export default quizQuestionsSliceNine.reducer