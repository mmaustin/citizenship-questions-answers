import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {

    return(
        <nav>
            <section>
                <h2>Citizenship Test Practice App</h2>
                <div>
                    <div>
                        <Link to='/'>Q's and A's</Link>
                    </div>
                </div>
            </section>
        </nav>
    )

}

export default Navbar