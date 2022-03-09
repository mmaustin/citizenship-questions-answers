import React from 'react'
import { QuestionsList } from './features/questions/QuestionsList'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './app/Navbar'
import { QuizOne } from './features/questions/QuizOne'
import { QuestionsListTwo } from './features/questionsTwo/QuestionsListTwo'
import { QuizTwo } from './features/questionsTwo/QuizTwo'
import { QuestionsListThree } from './features/questionsThree/QuestionsListThree'
import { QuizThree } from './features/questionsThree/QuizThree'
import { QuestionsListFour } from './features/questionsFour/QuestionsListFour'
import { QuizFour } from './features/questionsFour/QuizFour'
import { QuestionsListFive } from './features/questionsFive/QuestionsListFive'
import { QuizFive } from './features/questionsFive/QuizFive'
import { QuestionsListSix } from './features/questionsSix/QuestionsListSix'
import { QuizSix } from './features/questionsSix/QuizSix'
import { QuestionsListSeven } from './features/questionsSeven/QuestionsListSeven'
import { QuizSeven } from './features/questionsSeven/QuizSeven'
import { QuestionsListEight } from './features/questionsEight/QuestionsListEight'
import { QuizEight } from './features/questionsEight/QuizEight'

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
                    <Route exact path='/questions/questions-three' element={<QuestionsListThree/>}/>
                    <Route exact path='/questions/quiz-three' element={<QuizThree/>}/>
                    <Route exact path='/questions/questions-four' element={<QuestionsListFour/>}/>
                    <Route exact path='/questions/quiz-four' element={<QuizFour/>}/>
                    <Route exact path='/questions/questions-five' element={<QuestionsListFive/>}/>
                    <Route exact path='/questions/quiz-five' element={<QuizFive/>}/>
                    <Route exact path='/questions/questions-six' element={<QuestionsListSix/>}/>
                    <Route exact path='/questions/quiz-six' element={<QuizSix/>}/>
                    <Route exact path='/questions/questions-seven' element={<QuestionsListSeven/>}/>
                    <Route exact path='/questions/quiz-seven' element={<QuizSeven/>}/>
                    <Route exact path='/questions/questions-eight' element={<QuestionsListEight/>}/>
                    <Route exact path='/questions/quiz-seven' element={<QuizEight/>}/>
                    <Route path="*" element={<p>There's Nothing At This Address!</p> }/>
                </Routes>
        </Router>
    )
}

export default App