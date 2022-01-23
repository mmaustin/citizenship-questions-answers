import React from 'react'
import { useSelector } from 'react-redux'

export const QuestionsList = () => {
    const questions = useSelector(state => state.questions)
    const questionsAnswers = questions.map(question => (
        <article key={question.id}>
            <p>{question.question.substring(0, 100)}</p>
            {question.answer.map(a => (
                <>
                    <p>{a.ans}</p>
                </>
            ))}
        </article>
    
    ))

    return(
        <section>
            <h3>Questions and Answers</h3>
            {questionsAnswers}
        </section>
    )

}