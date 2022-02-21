import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
            <section className='nav-section'>
                <h2 className='nav-heading'>Citizenship Test Prep: Questions, Answers, Quizzes</h2>
                <div className='nav-link-container'>
                    <div className='quiz-pair'>
                        <Link className='nav-link-text' to='/'>Quiz One Q & A's</Link>
                        <Link className='nav-link-text' to='/questions/quiz-one'>Quiz One</Link>
                    </div>
                    <div className='qiz-pair'>
                        <Link className='nav-link-text' to='/questions/questions-two'>Quiz Two Q & A's</Link>
                        <Link className='nav-link-text' to='/questions/quiz-two'>Quiz Two</Link>
                    </div>
                </div>
            </section>
        </nav>
    )

}

export default Navbar