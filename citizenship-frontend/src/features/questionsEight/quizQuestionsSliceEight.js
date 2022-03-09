import { createSlice } from "@reduxjs/toolkit";
import { questionsEight } from "./questionsEight";

const initialState = questionsEight
  
  const quizQuestionsSliceEight = createSlice({
    name: 'quizQuestionsEight',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.findIndex(q => q.question === action.payload)
        state.splice(remove, 1)
      }
    }
  })
  
  export const {removeQuestion} = quizQuestionsSliceEight.actions

  export default quizQuestionsSliceEight.reducer