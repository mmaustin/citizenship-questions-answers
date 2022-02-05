import { createSlice } from "@reduxjs/toolkit";
import { questions } from "./questions";

const initialState = questions
  
  const quizQuestionsSlice = createSlice({
    name: 'quizQuestions',
    initialState,
    reducers: {
      removeQuestion(state, action){
        const remove = state.find(q => q.question === action.payload)
        state.shift(remove)
       /* state.map((q, i) => {
          if(q.question === action.payload){
            state.splice(i,1)
          }
        })
      */}
    }
  })

  export const {removeQuestion} = quizQuestionsSlice.actions

  export default quizQuestionsSlice.reducer