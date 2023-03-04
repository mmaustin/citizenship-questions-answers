import React from 'react'

export const HomePage = () => {
    return(
        <div id='home-container'>
            <div id='home-welcome'>
                <h2 id='welcome'>Welcome! Your Pathway To Citizenship Begins Here!</h2>
                <h3 id='welcome-start'>Let's Get Started!</h3>
            </div>
            <div id='home-instructions'>
                <ul id='unordered-list'>
                    <li className='list-items'>HOVER OVER THE GREEN MENU BUTTON.</li>
                    <li className='list-items'>SELECT A Q&A FROM THE DROPDOWN.</li>
                    <li className='list-items'>STUDY THE QUESTIONS AND ANSWERS.</li>
                    <li className='list-items'>TAKE THE ACCOMPANYING QUIZ.</li>
                    <li className='list-items'>STUDY THE "REMAINING QUESTIONS!"</li>
                    <li className='list-items'>REPEAT AS NECESSARY.</li>
                </ul>
            </div>
            <h3 style={{color: 'red'}} >Please Read Below</h3>
            <p>This site is meant to be an aid for those who wish to avoid the clutter of the official U.S.
                Citizenship and Immigration Services(USCIS) site.  It is highly recommended, however, that you visit
                the official site, before taking the civics portion of the citizenship test.  There may be 
                important updates to questions that I have yet to incorporate: <a rel="noopener noreferrer" target="_blank" href='https://www.uscis.gov/citizenship' >USCIS</a>
            </p>
        </div>
    )
}