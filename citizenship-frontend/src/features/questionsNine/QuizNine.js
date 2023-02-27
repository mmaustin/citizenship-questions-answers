import { useSelector } from 'react-redux';
import { removeQuestion } from './quizQuestionsSliceNine';
import { quizAnswersNine } from './questionsNine';
import { addAnswer } from './displaySliceNine';
import QuizTemplate from '../../quizTemplate/QuizTemplate';

export const QuizNine = () => {
    const questions = useSelector(state => state.quizQuestionsNine)
    const display = useSelector(state => state.displayQuestionsNine)

    return(
        <QuizTemplate
            removeQuestion={removeQuestion}
            quizAnswers={quizAnswersNine}
            addAnswer={addAnswer}
            questions={questions}
            display={display}
        />
    )

}