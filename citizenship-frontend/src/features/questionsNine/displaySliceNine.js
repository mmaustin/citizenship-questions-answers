import { createSlice } from "@reduxjs/toolkit";
import { questionAnswerDisplayNine } from "./questionsNine";

const initialState = questionAnswerDisplayNine
  
  const displaySliceNine = createSlice({
    name: 'displayQuestionsNine',
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
  
  export const {addAnswer} = displaySliceNine.actions

  export default displaySliceNine.reducer