import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeQuestion } from './quizQuestionsSlice'
import { quizAnswers } from './questions'

export const QuizOne = () => {
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
        if (listQuestions.length !== 0){
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

    const questionsAnswered = correctAnswer + incorrectAnswer

    return(
        <div>
            <div>
                <p>You must correctly answer 7 out of 10 questions to pass this quiz.</p>
                <p>Number of questions answered: {questionsAnswered}</p>
                <p>{question}</p>
                <button onClick={getRandomQuestion}>Click to Select a Question</button>
            </div>
            <div>
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
            {listQuestions.length === 0 &&
            <div>
                <p>Correct Answers: {correctAnswer}</p>
                <p>Incorrect Answers: {incorrectAnswer}</p>
                {correctAnswer >= 7 
                    ? <p>Congratulations!! You Passed!</p>
                    : <p>Don't Fret! Keep studying and practicing.</p>
                }
            </div>
            }
        </div>
    )

}
