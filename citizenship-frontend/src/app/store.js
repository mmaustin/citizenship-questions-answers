import { configureStore } from '@reduxjs/toolkit';
import quizQuestionsReducer from '../features/questions/quizQuestionsSlice'
import displaySliceReducer from '../features/questions/displaySlice';
import quizQuestionsReducerTwo from '../features/questionsTwo/quizQuestionsSliceTwo';
import displaySliceReducerTwo from '../features/questionsTwo/displaySliceTwo';
import quizQuestionsReducerThree from '../features/questionsThree/quizQuestionsSliceThree';
import displaySliceReducerThree from '../features/questionsThree/displaySliceThree';
import quizQuestionsReducerFour from '../features/questionsFour/quizQuestionsSliceFour';
import displaySliceReducerFour from '../features/questionsFour/displaySliceFour';
import quizQuestionReducerFive from '../features/questionsFive/quizQuestionSliceFive';

export default configureStore({
  reducer: {
    quizQuestions: quizQuestionsReducer,
    displayQuestions: displaySliceReducer,
    quizQuestionsTwo: quizQuestionsReducerTwo,
    displayQuestionsTwo: displaySliceReducerTwo,
    quizQuestionsThree: quizQuestionsReducerThree,
    displayQuestionsThree: displaySliceReducerThree,
    quizQuestionsFour: quizQuestionsReducerFour,
    displayQuestionsFour: displaySliceReducerFour,
    quizQuestionsFive: quizQuestionReducerFive,
  },
});