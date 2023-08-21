import { useSelector} from 'react-redux';
import { removeQuestion } from './quizQuestionsSlice';
import { quizAnswers } from './questions';
import { addAnswer } from './displaySlice';
import QuizTemplate from '../../quizTemplate/QuizTemplate';

export const QuizOne = () => {
    const questions = useSelector(state => state.quizQuestions)
    const display = useSelector(state => state.displayQuestions)
    
    return(
        <QuizTemplate
            removeQuestion={removeQuestion}
            quizAnswers={quizAnswers}
            addAnswer={addAnswer}
            questions={questions}
            display={display}
        />
    )
}