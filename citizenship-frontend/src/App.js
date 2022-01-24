import React from 'react'
import { QuestionsList } from './features/questions/QuestionsList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './app/Navbar'

const App = () => {

    return(
        <Router>
            <Navbar/>
                <Routes>
                    <Route exact path='/' element={<QuestionsList/>}/>
                </Routes>
        </Router>
    )
}

export default App