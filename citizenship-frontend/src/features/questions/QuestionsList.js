import React from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'

export const QuestionsList = () => {
    const questions = useSelector(state => state.questions)
    const questionsAnswers = questions.map(question => (
        <article className="question-excerpt" key={question.id}>
            <p>{question.question}</p>
            {question.answer.map(a => (
                <div key={nanoid()}>
                    <p>{a.ans}</p>
                </div>
            ))}
        </article>
    
    ))

    return(
        <section>
            {questionsAnswers}
        </section>
    )

}