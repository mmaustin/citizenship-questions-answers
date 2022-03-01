import { configureStore } from '@reduxjs/toolkit';
import quizQuestionsReducer from '../features/questions/quizQuestionsSlice'
import displaySliceReducer from '../features/questions/displaySlice';
import quizQuestionsReducerTwo from '../features/questionsTwo/quizQuestionsSliceTwo';
import displaySliceReducerTwo from '../features/questionsTwo/displaySliceTwo';

export default configureStore({
  reducer: {
    quizQuestions: quizQuestionsReducer,
    displayQuestions: displaySliceReducer,
    quizQuestionsTwo: quizQuestionsReducerTwo,
    displayQuestionsTwo: displaySliceReducerTwo
  },
});