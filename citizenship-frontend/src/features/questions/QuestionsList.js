import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

export const QuestionsList = () => {
    const questions = useSelector(state => state.questions)
    
    const questionsAnswers = questions.map((question, idx) => (
        <article className="question-excerpt" key={question.id}>
            <p className='question-number'>Question {idx + 1}</p>
            <p className='question'>{question.question}</p>
            {question.answer.map((a, index) => (
                <div key={index}>
                    <p className='answers'>{a.ans}</p>
                </div>

            ))}
            
            <Link to={`/questions/${question.id}`}>
            View Question
            </Link>  
        </article>
    ))

    return(
        <section className='question-answer-panel'>
            {questionsAnswers}
        </section>
    )

}