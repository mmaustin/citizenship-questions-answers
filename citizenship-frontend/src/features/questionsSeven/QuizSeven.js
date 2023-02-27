import { useSelector} from 'react-redux';
import { removeQuestion } from './quizQuestionsSliceSeven';
import { quizAnswersSeven } from './questionsSeven';
import { addAnswer } from './displaySliceSeven';
import QuizTemplate from '../../quizTemplate/QuizTemplate';

export const QuizSeven = () => {
    const questions = useSelector(state => state.quizQuestionsSeven)
    const display = useSelector(state => state.displayQuestionsSeven)

    return(
        <QuizTemplate
            removeQuestion={removeQuestion}
            quizAnswers={quizAnswersSeven}
            addAnswer={addAnswer}
            questions={questions}
            display={display}
        />
    )

}