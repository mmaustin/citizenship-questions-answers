import React from 'react'
import { useSelector } from 'react-redux'

export const SingleQuestionPage = ({match}) => {
    const {questionId} = match.params
    const question = useSelector(state => 
        state.questions.find(question => question.id === questionId)
    )

    const answers = question.answer.map((answer, idx) => (
        <div key={idx}>
            <p>{answer.ans}</p>
        </div>
    ))

    if (!question){
        return(
            <>
                <p>The question was not found.</p>
            </>
        )
    }

    return(
        <section>

        </section>
    )
}