import { createSlice } from "@reduxjs/toolkit";
import { questionsTwo } from "./questionsTwo";

const initialState = questionsTwo
  
  const quizQuestionsSliceTwo = createSlice({
    name: 'quizQuestionsTwo',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.findIndex(q => q.question === action.payload)
        state.splice(remove, 1)
      }
    }
  })
  
  export const {removeQuestion} = quizQuestionsSliceTwo.actions

  export default quizQuestionsSliceTwo.reducer