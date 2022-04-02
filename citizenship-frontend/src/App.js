import React from 'react'
import { HomePage } from './features/homePage/HomePage'
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
import { QuestionsListNine } from './features/questionsNine/QuestionsListNine'
import { QuizNine } from './features/questionsNine/QuizNine'
import { RemainingQuestionsList } from './features/remainingQuestions/RemainingQuestionsList'

const App = () => {

    return(
        <Router>
            <Navbar/>
                <Routes>
                    <Route exact path='/' element={<HomePage/>}/>
                    <Route  path='/questions-one' element={<QuestionsList/>}/>
                    <Route  path='/quiz-one' element={<QuizOne/>}/>
                    <Route  path='/questions-two' element={<QuestionsListTwo/>}/>
                    <Route  path='/quiz-two' element={<QuizTwo/>}/>
                    <Route  path='/questions-three' element={<QuestionsListThree/>}/>
                    <Route  path='/quiz-three' element={<QuizThree/>}/>
                    <Route  path='/questions-four' element={<QuestionsListFour/>}/>
                    <Route  path='/quiz-four' element={<QuizFour/>}/>
                    <Route  path='/questions-five' element={<QuestionsListFive/>}/>
                    <Route  path='/quiz-five' element={<QuizFive/>}/>
                    <Route  path='/questions-six' element={<QuestionsListSix/>}/>
                    <Route  path='/quiz-six' element={<QuizSix/>}/>
                    <Route  path='/questions-seven' element={<QuestionsListSeven/>}/>
                    <Route  path='/quiz-seven' element={<QuizSeven/>}/>
                    <Route  path='/questions-eight' element={<QuestionsListEight/>}/>
                    <Route  path='/quiz-eight' element={<QuizEight/>}/>
                    <Route  path='/questions-nine' element={<QuestionsListNine/>}/>
                    <Route  path='/quiz-nine' element={<QuizNine/>}/>
                    <Route  path='/remaining-questions' element={<RemainingQuestionsList/>}/>
                    <Route path="*" element={<p>There's Nothing At This Address!</p> }/>
                </Routes>
        </Router>
    )
}

export default App