import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
            <section className='nav-section'>
                <h2 className='nav-heading'>Citizenship Test Prep: Questions, Answers, Quizzes</h2>
                <div className='nav-link-container'>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/'>Quiz One Q&A</Link>
                        <Link className='nav-link-text' to='/questions/quiz-one'>Quiz One</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions/questions-two'>Quiz Two Q&A</Link>
                        <Link className='nav-link-text' to='/questions/quiz-two'>Quiz Two</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions/questions-three'>Quiz Three Q&A</Link>
                        <Link className='nav-link-text' to='/questions/quiz-three'>Quiz Three</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions/questions-four'>Quiz Four Q&A</Link>
                        <Link className='nav-link-text' to='/questions/quiz-four'>Quiz Four</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions/questions-five'>Quiz Five Q&A</Link>
                        <Link className='nav-link-text' to='/questions/quiz-five'>Quiz Five</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions/questions-six'>Quiz Six Q&A</Link>
                        <Link className='nav-link-text' to='/questions/quiz-six'>Quiz Six</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions/questions-seven'>Quiz Seven Q&A</Link>
                        <Link className='nav-link-text' to='/questions/quiz-seven'>Quiz Seven</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions/questions-eight'>Quiz Eight Q&A</Link>
                        <Link className='nav-link-text' to='/questions/quiz-eight'>Quiz Eight</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions/questions-nine'>Quiz Nine Q&A</Link>
                        <Link className='nav-link-text' to='/questions/quiz-nine'>Quiz Nine</Link>
                    </div>
                </div>
            </section>
        </nav>
    )

}

export default Navbar