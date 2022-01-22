import React from 'react'
import { useSelector } from 'react-redux'

export const QuestionsList = () => {
    const questions = useSelector(state => state.questions)
    const questionsAnswers = questions.map(question => (
        <article key={question.id}>
            <p>{question.question}</p>
            <p>{question.answer}</p>
        </article>
    ))

    return(
        <section>
            <h3>Questions and Answers</h3>
            {questionsAnswers}
        </section>
    )

}