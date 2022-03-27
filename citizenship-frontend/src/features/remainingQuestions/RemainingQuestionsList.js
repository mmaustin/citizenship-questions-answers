import React from 'react'
import {Link} from 'react-router-dom'
import { questionsTen } from './questionsTen'

export const RemainingQuestionsList = () => {
    
    const questionsAnswers = questionsTen.map((question, idx) => (
        <article className="question-excerpt" key={question.id}>
            <p className='question-number'>Question {idx + 1}</p>
            <p className='question'>{question.question}</p>
            {question.answer.map((a, index) => (
                <div className='answers-div' key={index}>
                    <p className='answers'>{index +1}) {a.ans}</p>
                </div>

            ))}
        </article>
    ))

    return(
        <>
            <p></p>
            <section className='question-answer-panel'>
                {questionsAnswers}
            </section>
        </>
    )

}