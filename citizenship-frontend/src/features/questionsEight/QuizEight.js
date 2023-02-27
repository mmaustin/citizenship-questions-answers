import { useSelector } from 'react-redux';
import { removeQuestion } from './quizQuestionsSliceEight';
import { quizAnswersEight } from './questionsEight';
import { addAnswer } from './displaySliceEight';
import QuizTemplate from '../../quizTemplate/QuizTemplate';

export const QuizEight = () => {
    const questions = useSelector(state => state.quizQuestionsEight)
    const display = useSelector(state => state.displayQuestionsEight)

    return(
        <QuizTemplate
            removeQuestion={removeQuestion}
            quizAnswers={quizAnswersEight}
            addAnswer={addAnswer}
            questions={questions}
            display={display}
        />
    )

}