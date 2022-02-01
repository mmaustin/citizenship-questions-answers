import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";

const initialState = questions
  
  const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
      removeQuestion(state, action){
        state.questions.find((q, i)  => {
          if(q.question === action.payload){
            state.questions.slice(i, 1)
            debugger
          }
        })
      }
    }
  })

  export const {removeQuestion} = questionsSlice.actions

  export default questionsSlice.reducer