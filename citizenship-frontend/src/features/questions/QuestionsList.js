import QuestionsListTemplate from '../../quizTemplate/QuestionsListTemplate';
import { questions } from './questions';

export const QuestionsList = () => {

    return(
        <QuestionsListTemplate questions={questions}/>
    )
    
}