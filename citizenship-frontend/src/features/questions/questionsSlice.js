import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";

const initialState = questions
  
  const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {
      removeQuestion(state, action){
        //const currentQuestion = state.find(q => q.question === action.payload)
        //state.shift(currentQuestion)
        state.map((q, i) => {
          if(q.question === action.payload){
            state.splice(i,1)
          }
        })
      }
    }
  })

  export const {removeQuestion} = questionsSlice.actions

  export default questionsSlice.reducer