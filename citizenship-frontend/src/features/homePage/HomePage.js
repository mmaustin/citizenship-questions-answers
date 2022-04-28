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
                <h3>Instructions and other useful information:</h3>
                <p>This app contains an updated list of the hundred questions and answers that comprise
                    the citizenship test. All questions and answers are taken from the U.S. citizenship
                    and Immigration Services (USCIS) website. There are nine Q&A/Quiz pairs, plus a stand
                    alone page of questions for which there is not a quiz. Hover over the green menu button
                    in the upper left-hand corner to access the Q&A pages and quizzes. Study the questions
                    and answers. Then, click on the associated quiz. It is that simple! (It's suggested that
                    you attempt Quiz One first, in order to view the chronology of the quiz.)
                </p>

            </div>
        </div>
    )
}