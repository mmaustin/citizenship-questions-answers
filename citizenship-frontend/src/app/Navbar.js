import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
            <section id='nav-section'>
                <h2 id='nav-heading'>Citizenship Test Prep: Questions, Answers, Quizzes</h2>
                <div id='nav-link-container'>
                    <Link className='nav-link-text' to='/'>Quiz One Q & A's</Link>
                    <Link className='nav-link-text' to='/questions/quizone'>Quiz One</Link>
                </div>
            </section>
        </nav>
    )

}

export default Navbar