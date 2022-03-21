import { configureStore } from '@reduxjs/toolkit';
import quizQuestionsReducer from '../features/questions/quizQuestionsSlice'
import displaySliceReducer from '../features/questions/displaySlice';
//import displaySliceTest from '../features/questions/displaySliceTest';
import quizQuestionsReducerTwo from '../features/questionsTwo/quizQuestionsSliceTwo';
import displaySliceReducerTwo from '../features/questionsTwo/displaySliceTwo';
import quizQuestionsReducerThree from '../features/questionsThree/quizQuestionsSliceThree';
import displaySliceReducerThree from '../features/questionsThree/displaySliceThree';
import quizQuestionsReducerFour from '../features/questionsFour/quizQuestionsSliceFour';
import displaySliceReducerFour from '../features/questionsFour/displaySliceFour';
import quizQuestionsReducerFive from '../features/questionsFive/quizQuestionsSliceFive';
import displaySliceFive from '../features/questionsFive/displaySliceFive';
import quizQuestionsReducerSix from '../features/questionsSix/quizQuestionsSliceSix';
import displaySliceSix from '../features/questionsSix/displaySliceSix';
import quizQuestionsReducerSeven from '../features/questionsSeven/quizQuestionsSliceSeven';
import displaySliceSeven from '../features/questionsSeven/displaySliceSeven';
import quizQuestionsReducerEight from '../features/questionsEight/quizQuestionsSliceEight';
import displaySliceEight from '../features/questionsEight/displaySliceEight';
import quizQuestionsReducerNine from '../features/questionsNine/quizQuestionsSliceNine';
import displaySliceNine from '../features/questionsNine/displaySliceNine';


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
    quizQuestionsFive: quizQuestionsReducerFive,
    displayQuestionsFive: displaySliceFive,
    quizQuestionsSix: quizQuestionsReducerSix,
    displayQuestionsSix: displaySliceSix,
    quizQuestionsSeven: quizQuestionsReducerSeven,
    displayQuestionsSeven: displaySliceSeven,
    quizQuestionsEight: quizQuestionsReducerEight,
    displayQuestionsEight: displaySliceEight,
    quizQuestionsNine: quizQuestionsReducerNine,
    displayQuestionsNine: displaySliceNine,
  },
});