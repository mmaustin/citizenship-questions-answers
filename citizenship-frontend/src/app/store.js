import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../features/questions/questionsSlice'
import quizQuestionsReducer from '../features/questions/quizQuestionsSlice'
import questionsTwoReducer from '../features/questionsTwo/questionsSliceTwo';

export default configureStore({
  reducer: {
    questions: questionsReducer,
    quizQuestions: quizQuestionsReducer,
    questionsTwo: questionsTwoReducer
  },
});
