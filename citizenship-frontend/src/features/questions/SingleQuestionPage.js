import React from 'react'
import { useSelector } from 'react-redux'

export const SingleQuestionPage = ({match}) => {
    //console.log({match})
    const {questionId} = match.params
    const query = useSelector(state => 
        state.questions.find(question => question.id === questionId)
    )

    const answers = query.answer.map((answer, idx) => (
        <div key={idx}>
            <p>{answer.ans}</p>
        </div>
    ))

    if (!query){
        return(
            <>
                <p>The question was not found.</p>
            </>
        )
    }

    return(
        <section>
            <h3>{query.question}</h3>
            {answers}
        </section>
    )
}