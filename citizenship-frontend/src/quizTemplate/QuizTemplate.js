import { useState } from "react";
import { useDispatch } from "react-redux";

const QuizTemplate = ({removeQuestion, quizAnswers, addAnswer, questions, display}) => {

    const [question, setQuestion] = useState('');
    const [correctAnswer, setCorrectAnswer] = useState(0)
    const [incorrectAnswer, setIncorrectAnswer] = useState(0)

    //State array for the boolean value of a checkbox: false = unchecked, true = checked, default is false
    const [checkedState, setCheckedState] = useState(
        new Array(quizAnswers.length).fill(false)
    )

    const dispatch = useDispatch()

    //State quiz questions derived from quizQuestionsSlice(Number) that will eventually be altered with the
    //removeQuestion action.
    const listQuestions = questions.map(q => (
        q.question
    ))
    //Select a question at random when clicking the associated button   
    const getRandomQuestion = () => {
        if (listQuestions.length !== 0){
            setQuestion(listQuestions[Math.floor(Math.random() * listQuestions.length)]);
        }
    }
    //Removes an answered question via the removeQuestion action from quizQuestionSlice(Number)  
    const removeSelectedQuestion = () => {
        dispatch(removeQuestion(question))
    }
    //Checks or unchecks the checkbox beside an answer by altering checkState   
    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
        index === position ? !item : item
        );
            
        setCheckedState(updatedCheckedState);
    }
    
    //Creates an array with the index number of a true checked box placed in the position of the checked box
    const indices = checkedState.map((status, index)=>{
        if(status === true){
            return index;
        } else {
            return status
        }
    })
    //Places the above indices in a separate array
    let arrayOfIndices = indices.filter(idx => typeof idx === 'number')
    
    //Pushes the answer(s) of a question into an array named answersHolder
    const getQuestionAnswers = () => {
        let answerHolder = []
        for(let index of arrayOfIndices){
            answerHolder.push(quizAnswers[index])
        }
        return answerHolder
    }
    let answersHolder = getQuestionAnswers()
    
    //Checkboxes and answers
    const checkboxAnswers = quizAnswers.map((answer, index) => {
        return(
            <p key={index} className='inputs'>
                <input type='checkbox' name={answer} value={answer} checked={checkedState[index]} onChange={()=> handleChange(index)}/>
                <label htmlFor='answer' className="capitalize">{answer}</label>
            </p>
        )
    })
    
    //Dispatches the answered question and the answers in an array to the displaySlice slice, to be worked by the addAnswer action
    const displayAddAnswer = () => {
        dispatch(addAnswer({question, answersHolder}))
    }
    
    //Tabulates the amount of correct and incorrect answers
    const tabulation = () => {
        const ques = questions.find(q => q.question === question)
        const checkAnswersArray = ques.answer.map(a => a.ans)
        if(answersHolder.length > 1){
            const multiAnswers = answersHolder.map(answer => {
                return checkAnswersArray.includes(answer)
            })
            if(multiAnswers.includes(false)){
                setIncorrectAnswer(incorrectAnswer + 1)
            } else {
                setCorrectAnswer(correctAnswer + 1)
            }
        } else {
            if (checkAnswersArray.includes(answersHolder[0])){
                setCorrectAnswer(correctAnswer + 1)
            } else {
                setIncorrectAnswer(incorrectAnswer + 1)
            }
        }
    }
    
    //Clears all checked checkboxes on submittion of an answer
    const clearAnswerField = () => {
        const resetCheckedState = checkedState.map((item) =>
        item === true ? !item : item
        );
        
        setCheckedState(resetCheckedState);
    }
    
    //On submission of an answers: 1) prevents default 2) tabulates right/wrong answer 3) removes the answered question from
    //quiz questions slice(number) state 4) alters displayAnswer and value properties of items in questionsAnswers state array
    //in displaySlice(number) 5) clears all checked boxes
    const handleSubmit = e => {
        e.preventDefault()
        
        tabulation()
        
        removeSelectedQuestion()
        displayAddAnswer()
        clearAnswerField()
    }
    
    //State from displaySlice(Number) to be displayed at the end of the quiz, after being altered with the
    //addAnswer action from the aforemention slice.
    const displayArray = display.map((q, idx) => (
        q.value === 'Correct'
        ? <div key={idx} className='ternary-container'>
            <p className='display-right-answer capitalize' key={idx}>{q.question} <span className='right'>Your Answer:</span> {q.displayAnswer} &nbsp;<span className='right'>{q.value}</span></p>
        </div>
        : <div key={idx} className='ternary-container'>
            <p className='display-wrong-answer capitalize' key={idx}>{q.question} <span className='wrong'>Your Answer:</span> {q.displayAnswer} &nbsp;<span className='wrong'>{q.value}</span></p>
            <div className='wrong-answers-container'>
                {q.answer.map((a, idx) => (
                    <p key={idx} className='quiz-answers-display'>• {a.ans}</p>
                ))}
            </div>
        </div>
    ))

    const questionsAnswered = correctAnswer + incorrectAnswer

    const allowSubmit = Boolean(answersHolder.length >= 1)

    return(
        <div className='quiz-container'>
            <div className='sub-container-one'>
                <h3 className='pass-requirement'>You must correctly answer 6 out of 10 questions to pass this quiz.</h3>
                <p className='questions-answered'>Questions Answered: {questionsAnswered}</p>
                <p className='selected-question'>{question.toUpperCase()}</p>
                <button className='question-selector' onClick={getRandomQuestion}>Click to Select a Question </button><span className='instructions-one'>(Step 1)</span>
            </div>
            <div className='sub-container-two'>
                <form onSubmit={e => handleSubmit(e)}>
                    <h2>
                        Select Your Answers From The Options Below: <span className='instructions-two'>(Step 2)</span>
                    </h2>
                    <div>
                        {checkboxAnswers}
                    </div>
                    <input className='submit-answer' type="submit" value="Submit" disabled={!allowSubmit}/><span className='instructions-three'>&nbsp;&nbsp;(Step 3 & Repeat)</span>
                </form>
            </div>
            {/* Displays the results of the quiz after all questions have been answered */}
            {listQuestions.length === 0 &&
            <>
                <div className='sub-container-three'>
                    <h2 className='results-header'>RESULTS:</h2>
                    <p className='answer-count'>Correct Answers: {correctAnswer}</p>
                    <p className='answer-count'>Incorrect Answers: {incorrectAnswer}</p>
                    {correctAnswer >= 6 
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
export default QuizTemplate