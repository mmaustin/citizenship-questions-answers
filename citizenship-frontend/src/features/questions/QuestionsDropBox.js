import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeQuestion } from './quizQuestionsSlice'
import { quizAnswers } from './questions'

export const QuestionsDropBox = () => {
    const questions = useSelector(state => state.quizQuestions)
    const [question, setQuestion] = useState('');
    const [selectAnswer, setSelectAnswer] = useState('')
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

    const handleSubmit = e => {
        e.preventDefault()
        const ques = questions.find(q => q.question === question)

        const q = ques.answer.map(a => a.ans)

        if(q.includes(selectAnswer)){
            console.log('true')
        } else {
            console.log('false')
        }
        removeSelectedQuestion()
        console.log(selectAnswer)

    }



    return(
        <div>
            <>
                <div>
                    <p>Handle Right Answer</p>
                    <p>Handle Wrong Answer</p>
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