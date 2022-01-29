import React, {useState} from 'react'
import { useSelector } from 'react-redux'

export const QuestionsDropBox = () => {
    const questions = useSelector(state => state.questions)

    return(
        <form>
            <select>
                
            </select>
        </form>
    )

}