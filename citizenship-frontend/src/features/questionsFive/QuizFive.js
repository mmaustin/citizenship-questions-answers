import { useSelector} from 'react-redux';
import { removeQuestion } from './quizQuestionsSliceFive';
import { quizAnswersFive } from './questionsFive';
import { addAnswer } from './displaySliceFive';
import QuizTemplate from '../../quizTemplate/QuizTemplate';

export const QuizFive= () => {
    const questions = useSelector(state => state.quizQuestionsFive)
    const display = useSelector(state => state.displayQuestionsFive)

    return(
        <QuizTemplate
            removeQuestion={removeQuestion}
            quizAnswers={quizAnswersFive}
            addAnswer={addAnswer}
            questions={questions}
            display={display}
        />
    )

}