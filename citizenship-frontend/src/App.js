import React from 'react'
import { QuestionsList } from './features/questions/QuestionsList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './app/Navbar'
/*import { SingleQuestionPage } from './features/questions/SingleQuestionPage'*/
import { QuizOne } from './features/questions/QuizOne'
import { QuestionsListTwo } from './features/questionsTwo/QuestionsListTwo'

const App = () => {

    return(
        <Router>
            <Navbar/>
                <Routes>
                    <Route exact path='/' element={<QuestionsList/>}/>
                    {/*<Route exact path='/questions/:questionId' element={<SingleQuestionPage/>} />*/}
                    <Route exact path='/questions/quizone' element={<QuizOne/>}/>
                    <Route exact path='/questions/questions-two' element={<QuestionsListTwo/>}/>
                    <Route path="*" element={<p>There's nothing here!</p> }/>
                </Routes>
        </Router>
    )
}

export default App