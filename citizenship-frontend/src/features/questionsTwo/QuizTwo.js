import { useSelector} from 'react-redux';
import { removeQuestion } from './quizQuestionsSliceTwo';
import { quizAnswersTwo } from './questionsTwo';
import { addAnswer } from './displaySliceTwo';
import QuizTemplate from '../../quizTemplate/QuizTemplate';

export const QuizTwo = () => {
    const questions = useSelector(state => state.quizQuestionsTwo)
    const display = useSelector(state => state.displayQuestionsTwo)

    return(
        <QuizTemplate
            removeQuestion={removeQuestion}
            quizAnswers={quizAnswersTwo}
            addAnswer={addAnswer}
            questions={questions}
            display={display}
        />
    )    
}