import { configureStore } from '@reduxjs/toolkit';
import questionsReducer from '../features/questions/questionsSlice'

export default configureStore({
  reducer: {
    questions: questionsReducer
  },
});
