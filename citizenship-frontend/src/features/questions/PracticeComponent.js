import React, {useState} from 'react'
import { quizAnswers } from './questions'

export const PracticeComponent = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(quizAnswers.length).fill(false)
    )

    const handleChange = (position) => {
        const updatedCheckedState = checkedState.map((item, index) =>
          index === position ? !item : item
        );
    
        setCheckedState(updatedCheckedState);
    }

    const indices = checkedState.map((c,i)=>{
        if(c === true){
            return i;
          } else {
            return c
          }
    })

    let w = indices.filter(i=> typeof i === 'number')
        const f = () => {
            let s = []
           for(let num of w){
                s.push(quizAnswers[num])
            }
                return s
        }
        let g = f()
        /*
        1) setting state should only take place inside of a function
        2) i don't need to set the return value of this function to state, just use the value as the array that will be dispatched
        */
        console.log(g)
    

    const checkboxAnswers = quizAnswers.map((answer, index) => {
        return(
            <p key={index}>
                <input type='checkbox' name={answer} value={answer} checked={checkedState[index]} onChange={()=> handleChange(index)}/>
                <label htmlFor='answer'>{answer}</label>
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