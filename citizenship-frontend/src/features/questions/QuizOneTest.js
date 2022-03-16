import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeQuestion } from './quizQuestionsSlice'
import { quizAnswers } from './questions'
import { addAnswer } from './displaySlice'

/*
Major remaining issues with checkbox
1) how to fill the selectAnswer array with only the answers checked at submission--and not answers
   previously checked and then unchecked
2) clearing the checkbox fields on submission
*/

export const QuizOneTest = () => {
    const questions = useSelector(state => state.quizQuestions)
    const display = useSelector(state => state.displayQuestions)
    //const [isChecked, setIsChecked] = useState(false)
    const [question, setQuestion] = useState('');
    //const [selectAnswer, setSelectAnswer] = useState([])
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [incorrectAnswer, setIncorrectAnswer] = useState(0)

    const [checkedState, setCheckedState] = useState(
        new Array(quizAnswers.length).fill(false)
    )

    const dispatch = useDispatch()

    const displayArray = display.map((q, idx) => (
        q.value === 'Correct'
        ? <div className='ternary-container'>
            <p className='display-right-answer' key={idx}>{q.question.charAt(0).toUpperCase() + q.question.slice(1)} <span className='right'>Your Answer:</span> {q.displayAnswer.charAt(0).toUpperCase() + q.displayAnswer.slice(1)} &nbsp;<span className='right'>{q.value}</span></p>
            {/*<div className='correct-answers-container'>
                {q.answer.map((a, idx) => (
                    <p className='correct-answers' key={idx}>{a.ans}</p>
                ))}
            </div>*/}
        </div>
        : <div className='ternary-container'>
            <p className='display-wrong-answer' key={idx}>{q.question.charAt(0).toUpperCase() + q.question.slice(1)} <span className='wrong'>Your Answer:</span> {q.displayAnswer.charAt(0).toUpperCase() + q.displayAnswer.slice(1)} &nbsp;<span className='wrong'>{q.value}</span></p>
            <div className='wrong-answers-container'>
                {q.answer.map((a, idx) => (
                    <p key={idx} className='quiz-answers-display'>• {a.ans}</p>
                ))}
            </div>
        </div>
    ))
    

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

    /*const answers = quizAnswers.map((answer, idx) => (
            <option key={idx} value={answer}>{answer}</option>
    ))*/

    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    }

    const indices = checkedState.map((c,i)=>{
        if(c === true){
            return i;
          } else {
            return c
          }
    })

    let w = indices.filter(i=> typeof i === 'number')
        const f = () => {
            let s = []
           for(let num of w){
                s.push(quizAnswers[num])
            }
                return s
        }
        let g = f()

    /*const answers = quizAnswers.map((answer, idx) => (
        <>
            <input type="checkbox" key={idx} value={answer} onChange={handleChange}/>
            <label key={idx + 1} htmlFor={idx}>{answer}</label>
        </>
    ))*/

    const checkboxAnswers = quizAnswers.map((answer, index) => {
        return(
            <p key={index}>
                <input type='checkbox' name={answer} value={answer} checked={checkedState[index]} onChange={()=> handleChange(index)}/>
                <label htmlFor='answer'>{answer}</label>
            </p>
        )
    })

    const displayAddAnswer = () => {
        dispatch(addAnswer({question, g}))
    }

    /*
    const check = () => {
        const a = arrayTwo.find(letter =>{return !array.includes(letter)})
        return a ? 'yes' : 'no'
    }
    */

    const tabulation = () => {
        const ques = questions.find(q => q.question === question)
        //const a = selectAnswer.find(an => {return !ques.answer.includes(an)})
        //a ? setIncorrectAnswer(incorrectAnswer + 1) : setCorrectAnswer(correctAnswer + 1);
        //debugger
        const q = ques.answer.map(a => a.ans)
        if(g.length > 1){
            const multiAnswers = g.map(answer => {
                return q.includes(answer)
            })
            if(multiAnswers.includes(false)){
                setIncorrectAnswer(incorrectAnswer + 1)
            } else {
                setCorrectAnswer(correctAnswer + 1)
            }
        } else {
            if (q.includes(g[0])){
                setCorrectAnswer(correctAnswer + 1)
            } else {
                setIncorrectAnswer(incorrectAnswer + 1)
            }
        }
        /*if(q.includes(selectAnswer[0])){
            setCorrectAnswer(correctAnswer + 1)
        } else {
            setIncorrectAnswer(incorrectAnswer + 1)
        }*/
    }

    /*const clearAnswerField = () => {
        setSelectAnswer([])
    }*/

    const handleSubmit = e => {
        e.preventDefault()

        tabulation()

        removeSelectedQuestion()
        displayAddAnswer()
        //clearAnswerField()
    }

    const questionsAnswered = correctAnswer + incorrectAnswer

    //const allowSubmit = Boolean(selectAnswer)   disabled={!allowSubmit}

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
                        {/*<select className='answer-selector' value={selectAnswer} onChange={handleChange}>*/}
                            {/*<option value=""></option>*/}
                            {checkboxAnswers}
                        {/*</select>*/}
                    </label>&nbsp;&nbsp;&nbsp;
                    <input className='submit-answer' type="submit" value="Submit"/>
                </form>
            </div>    
            {listQuestions.length === 0 &&
            <>
                <div className='sub-container-three'>
                    <h2 className='results-header'>RESULTS:</h2>
                    <p className='answer-count'>Correct Answers: {correctAnswer}</p>
                    <p className='answer-count'>Incorrect Answers: {incorrectAnswer}</p>
                    {correctAnswer >= 7 
                        ? <h3 className='result-statement'>Congratulations! You Passed!!</h3>
                        : <h3 className='result-statement'>Don't fret! Keep studying and practicing!</h3>
                    }
                </div>
                <div className='sub-container-four'>
                    {displayArray}
                </div>
            </>
            }
        </div>
    )

}