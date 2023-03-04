import React from 'react'
import { questionsTen } from './questionsTen'

export const RemainingQuestionsList = () => {
    
    const questionsAnswers = questionsTen.map((question, idx) => (
        <article className="question-excerpt" key={question.id}>
            <p className='question-number'>Question {idx + 1}</p>
            <p className='question'>{question.question}</p>
            {question.answer.map((a, index) => (
                <div className='answers-div' key={index}>
                    <p className='answers capitalize'>{index +1}) {a.ans}</p>
                </div>

            ))}
        </article>
    ))

    return(
        <>
            <p>
                Please visit the following link for answers to the starred questions below: <a rel="noopener noreferrer" target="_blank" href='https://www.uscis.gov/citizenship/testupdates' >USCIS</a>
            </p>
            <section className='question-answer-panel'>
                {questionsAnswers}
            </section>
        </>
    )

}