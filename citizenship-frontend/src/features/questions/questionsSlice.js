import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";

const initialState = questions
  
  const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
      removeQuestion(state, action){
        state.push(action.payload)
      }
    }
  })

  export const {removeQuestion} = questionsSlice.actions

  export default questionsSlice.reducer