import React, {useState} from 'react'
import { useSelector } from 'react-redux'
//import { removeQuestion } from './questionsSlice'

export const QuestionsDropBox = () => {
    const questions = useSelector(state => state.questions)
    const [question, setQuestion] = useState('');
    

    const listQuestions = questions.map(q => (
        q.question
    ))
        console.log(listQuestions)

    const getRandomQuestion = () => {
        setQuestion(listQuestions[Math.floor(Math.random() * listQuestions.length)]);
    }

    /*
    const removeRandomQuestion = () => {
        dispatch(removeQuestion(question))
    }
    removeRandomQuestion()
    */

    /*const listQuestions = questions.map((q, idx) => (
            <option key={idx} value={q.question}>{q.question}</option>
    ))*/

    return(
        <>
            <p>{question}</p>
            <button onClick={getRandomQuestion}>Click to Select a Question</button>
        </>
        /*<form>
            <select>
                {listQuestions}
            </select>
        </form>*/
    )

}

//What has to happen:
//1) I want to display one random question and have that set to state
    //once a question is displayed, it has to be eliminated from the array
//2) I want all of the possible answers displayed in a dropbox
//3) If the clicked answer matches the question in state, correct counter goes up by one
    //if wrong, correct counter stays the same and the incorrect counter goes up by one
//4) Seven answers must be correct in order to pass the test.