import React from 'react'
import { QuestionsList } from './features/questions/QuestionsList'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'

const App = () => {

    return(
        <Router>
            <Switch>
                <Route exact path='/'>
                    <QuestionsList/>
                </Route>
            </Switch>
        </Router>
    )
}

export default App