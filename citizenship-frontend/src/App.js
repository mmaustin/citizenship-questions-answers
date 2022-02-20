import React from 'react'
import { QuestionsList } from './features/questions/QuestionsList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './app/Navbar'
import { QuizOne } from './features/questions/QuizOne'
import { QuestionsListTwo } from './features/questionsTwo/QuestionsListTwo'
import { QuizTwo } from './features/questionsTwo/QuizTwo'

const App = () => {

    return(
        <Router>
            <Navbar/>
                <Routes>
                    <Route exact path='/' element={<QuestionsList/>}/>
                    {/*<Route exact path='/questions/:questionId' element={<SingleQuestionPage/>} />*/}
                    <Route exact path='/questions/quiz-one' element={<QuizOne/>}/>
                    <Route exact path='/questions/questions-two' element={<QuestionsListTwo/>}/>
                    <Route exact path='/questions/quiz-two' element={<QuizTwo/>}/>
                    <Route path="*" element={<p>There's Nothing At This Address!</p> }/>
                </Routes>
        </Router>
    )
}

export default App