import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'

export const SingleQuestionPage = () => {
    //console.log({match})
    //const {questionId} = useParams()
    //console.log(questionId)
    let params = useParams()
    const query = useSelector(state => 
        state.questions.find(question => question.id === params.questionId)
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