import { useSelector} from 'react-redux';
import { removeQuestion } from './quizQuestionsSliceThree';
import { quizAnswersThree } from './questionsThree';
import { addAnswer } from './displaySliceThree';
import QuizTemplate from '../../quizTemplate/QuizTemplate';

export const QuizThree = () => {
    const questions = useSelector(state => state.quizQuestionsThree)
    const display = useSelector(state => state.displayQuestionsThree)

    return(
        <QuizTemplate
            removeQuestion={removeQuestion}
            quizAnswers={quizAnswersThree}
            addAnswer={addAnswer}
            questions={questions}
            display={display}
        />
    )

}