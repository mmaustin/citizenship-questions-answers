import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";

const initialState = questions
  
  const questionsSlice = createSlice({
    name: 'questions',
    initialState,
    reducers: {/*
      removeQuestion(state, action){
        state.map((q, i) => {
          if(q.question === action.payload){
            state.splice(i,1)
          }
        })
      }
    */}
  })

  //export const {removeQuestion} = questionsSlice.actions

  export default questionsSlice.reducer