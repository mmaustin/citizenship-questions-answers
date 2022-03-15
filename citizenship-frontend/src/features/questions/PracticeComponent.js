import React, {useState} from 'react'
import { quizAnswers } from './questions'

export const PracticeComponent = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(quizAnswers.length).fill(false)
    )

    const handleOnChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    }
    
    const checkboxAnswers = quizAnswers.map((answer, index) => {
        return(
            <p key={index}>
                <input type='checkbox' name={answer} value={answer} checked={checkedState[index]} onChange={()=> handleOnChange(index)}/>
            </p>
        )
    })

    return(
        <>
            <p>Let's Practice Some Checkboxes!!!</p>
            {checkboxAnswers}
        </>
    )
}