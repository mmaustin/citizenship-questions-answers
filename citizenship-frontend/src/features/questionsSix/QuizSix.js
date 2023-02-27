import { useSelector} from 'react-redux';
import { removeQuestion } from './quizQuestionsSliceSix';
import { quizAnswersSix } from './questionsSix';
import { addAnswer } from './displaySliceSix';
import QuizTemplate from '../../quizTemplate/QuizTemplate';

export const QuizSix = () => {
    const questions = useSelector(state => state.quizQuestionsSix)
    const display = useSelector(state => state.displayQuestionsSix)

    return(
        <QuizTemplate
            removeQuestion={removeQuestion}
            quizAnswers={quizAnswersSix}
            addAnswer={addAnswer}
            questions={questions}
            display={display}
        />
    )

}