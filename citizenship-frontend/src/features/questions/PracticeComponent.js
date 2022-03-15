import React, {useState} from 'react'
import { quizAnswers } from './questions'

export const PracticeComponent = () => {
    const [checkedState, setCheckedState] = useState(
        new Array(quizAnswers.length).fill(false)
    )
    const [getAnswer, setGetAnswer] = useState([])


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
        getAnswer.concat(g)
        console.log(getAnswer)
    

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