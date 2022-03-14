import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplay } from "./questions";

const initialState = questionAnswerDisplay
  
  const displaySlice = createSlice({
    name: 'displayQuestions',
    initialState,
    reducers: {
        addAnswer(state, action){
            const {question, selectAnswer} = action.payload
            const foundQuestion = state.find(q => q.question === question)
            const foundQuestionAnswers = foundQuestion.answer.map(q => q.ans)
            if (foundQuestionAnswers.includes(selectAnswer[0])){
                foundQuestion.displayAnswer = selectAnswer[0];
                foundQuestion.value = 'Correct';
            } else {
                foundQuestion.displayAnswer = selectAnswer[0];
                foundQuestion.value = 'Incorrect';
            }
        }
    }
  })
  
  export const {addAnswer} = displaySlice.actions

  export default displaySlice.reducer