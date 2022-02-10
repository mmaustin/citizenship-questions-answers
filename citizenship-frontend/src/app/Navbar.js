import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
            <section id='nav-section'>
                <h2 id='nav-heading'>Citizenship Test: Questions, Answers, Quizzes</h2>
                <div id='nav-link-container'>
                    <div><Link to='/'>Quiz One Q & A's</Link></div>
                    <div><Link to='/questions/quizone'>Quiz One</Link></div>
                </div>
            </section>
        </nav>
    )

}

export default Navbar