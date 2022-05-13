import React from 'react'

export const HomePage = () => {
    return(
        <div id='home-container'>
            <div id='home-welcome'>
                <h2 id='welcome'>Welcome! Your Pathway To Citizenship Begins Here!</h2>
                <h3 id='welcome-start'>Let's Get Started!</h3>
            </div>
            <div id='home-instructions'>
                <h3 id='home-banner'>Instructions and other useful information:</h3>
                <ul id='unordered-list'>
                    <li className='list-items'>HOVER OVER THE GREEN MENU BUTTON.</li>
                    <li className='list-items'>SELECT A Q&A.</li>
                    <li className='list-items'>STUDY THE QUESTIONS AND ANSWERS.</li>
                    <li className='list-items'>TAKE THE ACCOMPANYING QUIZ.</li>
                    <li className='list-items'>STUDY THE "REMAINING QUESTIONS!"</li>
                    <li className='list-items'>REPEAT AS NECESSARY.</li>
                </ul>

            </div>
        </div>
    )
}