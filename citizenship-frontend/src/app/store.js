import { configureStore } from '@reduxjs/toolkit';
import quizQuestionsReducer from '../features/questions/quizQuestionsSlice'
import questionsTwoReducer from '../features/questionsTwo/questionsSliceTwo';
import quizQuestionsTwoReduceer from '../features/questionsTwo/quizQuestionsSliceTwo';

export default configureStore({
  reducer: {
    quizQuestions: quizQuestionsReducer,
    questionsTwo: questionsTwoReducer,
    quizQuestionsTwo: quizQuestionsTwoReduceer
  },
});
