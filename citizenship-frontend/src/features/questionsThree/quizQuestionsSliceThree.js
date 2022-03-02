import { createSlice } from "@reduxjs/toolkit";
import { questionsThree } from "./questionsThree";

const initialState = questionsThree
  
  const quizQuestionsSliceThree = createSlice({
    name: 'quizQuestionsThree',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.findIndex(q => q.question === action.payload)
        state.splice(remove, 1)
      }
    }
  })
  
  export const {removeQuestion} = quizQuestionsSliceThree.actions

  export default quizQuestionsSliceThree.reducer