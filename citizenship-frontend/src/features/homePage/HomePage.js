import React from 'react'

export const HomePage = () => {
    return(
        <div id='home-container'>
            <div id='home-welcome'>
                <h3 id='welcome'>Welcome! Your Pathway To Citizenship Begins Here!</h3>
                <h4 id='welcome-start'>Let's Get Started!
                </h4>
            </div>
            <div id='home-instructions'>
                <h3 id='home-banner'>Instructions and other useful information:</h3>
                <ol id='unordered-list'>
                    <li class='list-items'>Hover over the green Menu button.</li>
                    <li class='list-items'>Select a Q&A, and study the questions and answers.</li>
                    <li class='list-items'>Study the questions and answers.</li>
                    <li class='list-items'>Select the accompanying quiz.</li>
                    <li class='list-items'>Repeat as necessary.</li>
                    <li class='list-items'>Don't forget to study the "Remaining Questions!"</li>
                </ol>

            </div>
        </div>
    )
}