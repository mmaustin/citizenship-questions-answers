import React from 'react'
import { QuestionsList } from './features/questions/QuestionsList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

const App = () => {

    return(
        <Router>
            <Routes>
                <Route exact path='/' element={<QuestionsList/>}/>
            </Routes>
        </Router>
    )
}

export default App