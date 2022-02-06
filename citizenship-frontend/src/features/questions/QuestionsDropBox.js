import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeQuestion } from './quizQuestionsSlice'
import { quizAnswers } from './questions'

export const QuestionsDropBox = () => {
    const questions = useSelector(state => state.quizQuestions)
    const [question, setQuestion] = useState('');
    const [selectAnswer, setSelectAnswer] = useState('')
    const [correctAnswer, setCorrectAnswer] = useState(2)
    const [incorrectAnswer, setIncorrectAnswer] = useState(5)

    const dispatch = useDispatch()
    

    const listQuestions = questions.map(q => (
        q.question
    ))
        console.log(listQuestions)

    const getRandomQuestion = () => {
        setQuestion(listQuestions[Math.floor(Math.random() * listQuestions.length)]);
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

    const answerTabulation = () => {
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

        answerTabulation()

        removeSelectedQuestion()
        console.log(selectAnswer)

    }



    return(
        <div>
            <>
                <div>
                    <p>Correct Responses: {correctAnswer}</p>
                    <p>Incorrect Responses: {incorrectAnswer}</p>
                </div>
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