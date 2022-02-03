import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../features/questions/questionsSlice'
import quizQuestionsReducer from '../features/questions/quizQuestionsSlice'

export default configureStore({
  reducer: {
    questions: questionsReducer,
    quizQuestions: quizQuestionsReducer
  },
});
