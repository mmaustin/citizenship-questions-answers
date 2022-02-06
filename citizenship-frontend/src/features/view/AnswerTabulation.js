import React from 'react'

const AnswerTabulation = ({correctAnswer, incorrectAnswer}) => {
    return(
        <div>
            <p>Correct Responses: {correctAnswer}</p>
            <p>Incorrect Responses: {incorrectAnswer}</p>
        </div>
    )
}

export default AnswerTabulation