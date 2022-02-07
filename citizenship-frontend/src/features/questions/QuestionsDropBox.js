import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeQuestion } from './quizQuestionsSlice'
import { quizAnswers } from './questions'
import AnswerTabulation from '../view/AnswerTabulation'

export const QuestionsDropBox = () => {
    const questions = useSelector(state => state.quizQuestions)
    const [question, setQuestion] = useState('');
    const [selectAnswer, setSelectAnswer] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [incorrectAnswer, setIncorrectAnswer] = useState(0)

    const dispatch = useDispatch()
    

    const listQuestions = questions.map(q => (
        q.question
    ))
        console.log(listQuestions)

    const getRandomQuestion = () => {
        if (listQuestions.length === 0){
            return <p>your game is over</p>
        } else {
        setQuestion(listQuestions[Math.floor(Math.random() * listQuestions.length)]);
        }
    }

    const removeSelectedQuestion = () => {
        dispatch(removeQuestion(question))
    }

    const answers = quizAnswers.map((answer, idx) => (
            <option key={idx} value={answer}>{answer}</option>
    ))

    const handleChange = (e) => {
        setSelectAnswer(e.target.value)
        console.log(e.target.value)
    }

    const tabulation = () => {
        const ques = questions.find(q => q.question === question)
        const q = ques.answer.map(a => a.ans)
        if(q.includes(selectAnswer)){
            setCorrectAnswer(correctAnswer + 1)
        } else {
            setIncorrectAnswer(incorrectAnswer + 1)
        }
    }

    const handleSubmit = e => {
        e.preventDefault()

        tabulation()

        removeSelectedQuestion()
        console.log(selectAnswer)

    }

    /*const testFunction = () => {
        if (listQuestions.lenght === 0){
        return 'please work!'
        }
    }*/

    return(
        <div>
            <>
                <AnswerTabulation correctAnswer={correctAnswer} incorrectAnswer={incorrectAnswer}/>
                <p>{question}</p>
                <button onClick={getRandomQuestion}>Click to Select a Question</button>
            </>
            <form onSubmit={e => handleSubmit(e)}>
                <label>
                    Select Your Answer
                    <select value={selectAnswer} onChange={e => handleChange(e)}>
                        {answers}
                    </select>
                </label>
                <input type="submit" value="Submit" />
            </form>
            <p>
                {/*{}*/}
            </p>
        </div>
    )

}

//What has to happen:
//1) I want to display one random question and have that set to state
    //once a question is displayed, it has to be eliminated from the array
//2) I want all of the possible answers displayed in a dropbox
//3) If the clicked answer matches the question in state, correct counter goes up by one
    //if wrong, correct counter stays the same and the incorrect counter goes up by one
//4) Seven answers must be correct in order to pass the test.