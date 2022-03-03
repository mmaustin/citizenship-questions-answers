import React from 'react'
import { questionsThree } from './questionsThree'

export const QuestionsListThree = () => {
    
    const questionsAnswers = questionsThree.map((question, idx) => (
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
        <section className='question-answer-panel'>
            {questionsAnswers}
        </section>
    )

}