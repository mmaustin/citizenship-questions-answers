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

    const clearAnswerField = () => {
        setSelectAnswer('')
    }

    const handleSubmit = e => {
        e.preventDefault()

        tabulation()

        removeSelectedQuestion()
        clearAnswerField()
    }

    const questionsAnswered = correctAnswer + incorrectAnswer

    return(
        <div className='quiz-container'>
            <div className='sub-container-one'>
                <h3 className='pass-requirement'>You must correctly answer 7 out of 10 questions to pass this quiz.</h3>
                <p className='questions-answered'>Questions Answered: {questionsAnswered}</p>
                <p className='selected-question'>{question.toUpperCase()}</p>
                <button className='question-selector' onClick={getRandomQuestion}>Click to Select a Question</button>
            </div>
            <div className='sub-container-two'>
                <form onSubmit={e => handleSubmit(e)}>
                    <label>
                        Select Your Answer:&nbsp;&nbsp;&nbsp;
                        <select className='answer-selector' value={selectAnswer} onChange={e => handleChange(e)}>
                            <option value=""></option>
                            {answers}
                        </select>
                    </label>&nbsp;&nbsp;&nbsp;
                    <input className='submit-answer' type="submit" value="Submit" />
                </form>
            </div>    
            {listQuestions.length === 0 &&
            <div className='sub-container-three'>
                <p className='answer-count'>Correct Answers: {correctAnswer}</p>
                <p className='answer-count'>Incorrect Answers: {incorrectAnswer}</p>
                {correctAnswer >= 7 
                    ? <p className='result-statement'>Congratulations!! You Passed!</p>
                    : <p className='result-statement'>Don't Fret! Keep studying and practicing.</p>
                }
            </div>
            }
        </div>
    )

}
