import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplayFive } from "./questionsFive";

const initialState = questionAnswerDisplayFive
  
  const displaySliceFive = createSlice({
    name: 'displayQuestionsFour',
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
  
  export const {addAnswer} = displaySliceFive.actions

  export default displaySliceFive.reducer