import React from 'react'
import { useSelector } from 'react-redux'

export const QuestionsDropBox = () => {
    const questions = useSelector(state => state.questions)
    const listQuestions = questions.map((q, idx) => (
        <div key={idx}>
            <option value={q.question}>{q.question}</option>
        </div>
    ))

    return(
        <form>
            <select>
                {listQuestions}
            </select>
        </form>
    )

}