import React from 'react'
import { useSelector } from 'react-redux'
import { nanoid } from '@reduxjs/toolkit'
import { Link } from 'react-router-dom'

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
            <Link to={`/questions/${question.id}`}>
            View Question
            </Link>    
        </article>
    ))

    return(
        <section>
            {questionsAnswers}
        </section>
    )

}