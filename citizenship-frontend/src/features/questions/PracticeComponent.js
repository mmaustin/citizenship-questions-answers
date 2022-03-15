import React, {useState} from 'react'
import { quizAnswers } from './questions'

export const PracticeComponent = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(quizAnswers.length).fill(false)
    )



    return(
        <>
            <p>Let's Practice Some Checkboxes!!!</p>
        </>
    )
}