import React from 'react'
import { useSelector } from 'react-redux'

export const SingleQuestionPage = ({match}) => {
    const {questionId} = match.params
    const question = useSelector(state => 
        state.questions.find(question => question.id === questionId)
    )

    
}