import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplayTwo } from "./questionsTwo";

const initialState = questionAnswerDisplayTwo
  
  const displaySliceTwo = createSlice({
    name: 'displayQuestionsTwo',
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
  
  export const {addAnswer} = displaySliceTwo.actions

  export default displaySliceTwo.reducer