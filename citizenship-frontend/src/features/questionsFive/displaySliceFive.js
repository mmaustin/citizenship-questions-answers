import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplayFive } from "./questionsFive";

  const initialState = questionAnswerDisplayFive
  
  const displaySliceFive = createSlice({
    name: 'displayQuestionsFive',
    initialState,
    reducers: {
        addAnswer(state, action){
            const {question, answersHolder} = action.payload
            const foundQuestion = state.find(q => q.question === question)
            const foundQuestionAnswers = foundQuestion.answer.map(q => q.ans)
            if(answersHolder.length > 1){
                const multiAnswers = answersHolder.map(answer => {
                    return foundQuestionAnswers.includes(answer)
                })
                if(multiAnswers.includes(false)){
                    foundQuestion.displayAnswer = answersHolder.join(' / ');
                    foundQuestion.value = 'Incorrect';
                } else {
                    foundQuestion.displayAnswer = answersHolder.join(' / ');
                    foundQuestion.value = 'Correct';
                }
            } else {
                if (foundQuestionAnswers.includes(answersHolder[0])){
                    foundQuestion.displayAnswer = answersHolder[0];
                    foundQuestion.value = 'Correct';
                } else {
                    foundQuestion.displayAnswer = answersHolder[0];
                    foundQuestion.value = 'Incorrect';
                }
            }
        }
    }
  })
  
  export const {addAnswer} = displaySliceFive.actions

  export default displaySliceFive.reducer