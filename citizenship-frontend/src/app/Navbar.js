import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    /*return(
        <nav>
            <section className='nav-section'>
                <h2 className='nav-heading'>Citizenship Test Prep: Questions, Answers, Quizzes</h2>
                <div className='nav-link-container'>
                <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/'>Home Page</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions-one'>Quiz One Q&A</Link>
                        <Link className='nav-link-text' to='/quiz-one'>Quiz One</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions-two'>Quiz Two Q&A</Link>
                        <Link className='nav-link-text' to='/quiz-two'>Quiz Two</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions-three'>Quiz Three Q&A</Link>
                        <Link className='nav-link-text' to='/quiz-three'>Quiz Three</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions-four'>Quiz Four Q&A</Link>
                        <Link className='nav-link-text' to='/quiz-four'>Quiz Four</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions-five'>Quiz Five Q&A</Link>
                        <Link className='nav-link-text' to='/quiz-five'>Quiz Five</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions-six'>Quiz Six Q&A</Link>
                        <Link className='nav-link-text' to='/quiz-six'>Quiz Six</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions-seven'>Quiz Seven Q&A</Link>
                        <Link className='nav-link-text' to='/quiz-seven'>Quiz Seven</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions-eight'>Quiz Eight Q&A</Link>
                        <Link className='nav-link-text' to='/quiz-eight'>Quiz Eight</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/questions-nine'>Quiz Nine Q&A</Link>
                        <Link className='nav-link-text' to='/quiz-nine'>Quiz Nine</Link>
                    </div>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/remaining-questions'>More Questions</Link>
                    </div>
                </div>
            </section>
        </nav>
    )*/

    return(
        <nav>
            <div class="dropdown">
                <button class="dropbtn">Dropdown</button>
                <div class="dropdown-content">
                    <Link className='nav-link-text' to='/'>Home Page</Link>
                    <Link className='nav-link-text' to='/questions-one'>Quiz One Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-one'>Quiz One</Link>
                    <Link className='nav-link-text' to='/questions-two'>Quiz Two Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-two'>Quiz Two</Link>
                    <Link className='nav-link-text' to='/questions-three'>Quiz Three Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-three'>Quiz Three</Link>
                    <Link className='nav-link-text' to='/questions-four'>Quiz Four Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-four'>Quiz Four</Link>
                    <Link className='nav-link-text' to='/questions-five'>Quiz Five Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-five'>Quiz Five</Link>
                    <Link className='nav-link-text' to='/questions-six'>Quiz Six Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-six'>Quiz Six</Link>
                    <Link className='nav-link-text' to='/questions-seven'>Quiz Seven Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-seven'>Quiz Seven</Link>
                    <Link className='nav-link-text' to='/questions-eight'>Quiz Eight Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-eight'>Quiz Eight</Link>
                    <Link className='nav-link-text' to='/questions-nine'>Quiz Nine Q&A</Link>
                    <Link className='nav-link-text' to='/quiz-nine'>Quiz Nine</Link>
                    <Link className='nav-link-text' to='/remaining-questions'>More Questions</Link>
                </div>
            </div>    
        </nav>
    )

}

export default Navbar