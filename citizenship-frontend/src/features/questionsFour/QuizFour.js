import { useSelector} from 'react-redux';
import { removeQuestion } from './quizQuestionsSliceFour';
import { quizAnswersFour } from './questionsFour';
import { addAnswer } from './displaySliceFour';
import QuizTemplate from '../../quizTemplate/QuizTemplate';


export const QuizFour = () => {
    const questions = useSelector(state => state.quizQuestionsFour)
    const display = useSelector(state => state.displayQuestionsFour)

    return(
        <QuizTemplate
            removeQuestion={removeQuestion}
            quizAnswers={quizAnswersFour}
            addAnswer={addAnswer}
            questions={questions}
            display={display}
        />
    )

}