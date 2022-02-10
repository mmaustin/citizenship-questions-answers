import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
            <section>
                <h2>Citizenship: Questions, Answers, Quizzes</h2>
                <div>
                    <div>
                        <div><Link to='/'>Quiz One Q & A's</Link></div>
                        <div><Link to='/questions/quizone'>Quiz One</Link></div>
                    </div>
                </div>
            </section>
        </nav>
    )

}

export default Navbar