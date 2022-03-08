import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplaySeven } from "./questionsSeven";

const initialState = questionAnswerDisplaySeven
  
  const displaySliceSeven = createSlice({
    name: 'displayQuestionsSeven',
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
  
  export const {addAnswer} = displaySliceSeven.actions

  export default displaySliceSeven.reducer