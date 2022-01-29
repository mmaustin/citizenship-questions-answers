import React, {useState} from 'react'
import { useSelector } from 'react-redux'

export const QuestionsDropBox = () => {
    const questions = useSelector(state => state.questions)
    const listQuestions = questions.map((q, idx) => (
        <div key={idx}>
            
        </div>
    ))

    return(
        <form>
            <select>

            </select>
        </form>
    )

}