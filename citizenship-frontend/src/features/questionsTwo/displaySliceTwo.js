import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplayTwo } from "./questionsTwo";

/*const initialState = questionAnswerDisplayTwo
  
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

  export default displaySliceTwo.reducer*/

  const initialState = questionAnswerDisplayTwo
  
  const displaySliceTwo = createSlice({
    name: 'displayQuestionsTwo',
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
  
  export const {addAnswer} = displaySliceTwo.actions

  export default displaySliceTwo.reducer
