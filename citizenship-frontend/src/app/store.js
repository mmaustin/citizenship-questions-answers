import { configureStore } from '@reduxjs/toolkit';
import quizQuestionsReducer from '../features/questions/quizQuestionsSlice'
import quizQuestionsTwoReduceer from '../features/questionsTwo/quizQuestionsSliceTwo';

export default configureStore({
  reducer: {
    quizQuestions: quizQuestionsReducer,
    quizQuestionsTwo: quizQuestionsTwoReduceer
  },
});
