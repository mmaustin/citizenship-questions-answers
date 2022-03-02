import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplayThree } from "./questionsThree";

const initialState = questionAnswerDisplayThree
  
  const displaySliceThree = createSlice({
    name: 'displayQuestionsThree',
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
  
  export const {addAnswer} = displaySliceThree.actions

  export default displaySliceThree.reducer