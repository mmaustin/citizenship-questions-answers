import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplaySix } from "./questionsSix";

const initialState = questionAnswerDisplaySix
  
  const displaySliceSix = createSlice({
    name: 'displayQuestionsSix',
    initialState,
    reducers: {
        addAnswer(state, action){
            const {question, selectAnswer} = action.payload
            const foundQuestion = state.find(q => q.question === question)
            const foundQuestionAnswers = foundQuestion.answer.map(q => q.ans)
            if (foundQuestionAnswers.includes(selectAnswer)){
                foundQuestion.displayAnswer = selectAnswer;
                foundQuestion.value = 'Correct';
            } else {
                foundQuestion.displayAnswer = selectAnswer;
                foundQuestion.value = 'Incorrect';
            }
        }
    }
  })
  
  export const {addAnswer} = displaySliceSix.actions

  export default displaySliceSix.reducer