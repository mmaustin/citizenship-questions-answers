import React from 'react'
import { QuestionsList } from './features/questions/QuestionsList'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'

const App = () => {

    return(
        <React.Fragment>
            <QuestionsList/>
        </React.Fragment>
    )
}

export default App