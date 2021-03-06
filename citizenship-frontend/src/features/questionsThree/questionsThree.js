import { nanoid } from "@reduxjs/toolkit"

export const questionsThree = [{id: nanoid(), question: 'we elect a u.s. representative for how many years?', answer: [{ans: 'two (2)'}]},
{id: nanoid(), question: 'who does a u.s. senator represent?', answer: [{ans: 'all people of the state'}]}, {id: nanoid(), question: 'why do some states have more representatives than other states?',
answer: [{ans: 'because of the state\'s population'}, {ans: 'because they have more people'}, {ans: 'because some states have more people'}]}, 
{id: nanoid(), question: 'we elect a president for how many years?', answer: [{ans: 'four (4)'}]}, {id: nanoid(), question: 'in what month do we vote for president?',
answer: [{ans: 'november'}]}, {id: nanoid(), question: 'if the president can no longer serve, who becomes president?', answer: [{ans: 'the vice president'}]}, 
{id: nanoid(), question: 'if both the president and the vice president can no longer serve, who becomes president?',
answer: [{ans: 'the speaker of the house'}]}, {id: nanoid(), question: 'who is the commander in chief of the military?', answer: [{ans: 'the president'}]}, 
{id: nanoid(), question: 'who signs bills to become laws?',
answer: [{ans: 'the president'}]}, {id: nanoid(), question: 'who vetoes bills?',
answer: [{ans: 'the president'}]}]


export const quizAnswersThree = ['because of the state\'s population', 'four (4)', 'the vice president', 'all people of the state', 'two (2)',
'the speaker of the house', 'because some states have more people', 'november', 'the president', 'because they have more people']

export const questionAnswerDisplayThree = [{id: nanoid(), question: 'we elect a u.s. representative for how many years?', answer: [{ans: 'two (2)'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'who does a u.s. senator represent?', answer: [{ans: 'all people of the state'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'why do some states have more representatives than other states?',
answer: [{ans: 'because of the state\'s population'}, {ans: 'because they have more people'}, {ans: 'because some states have more people'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'we elect a president for how many years?', answer: [{ans: 'four (4)'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'in what month do we vote for president?',
answer: [{ans: 'november'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'if the president can no longer serve, who becomes president?', answer: [{ans: 'the vice president'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'if both the president and the vice president can no longer serve, who becomes president?',
answer: [{ans: 'the speaker of the house'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'who is the commander in chief of the military?', answer: [{ans: 'the president'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'who signs bills to become laws?',
answer: [{ans: 'the president'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'who vetoes bills?',
answer: [{ans: 'the president'}], displayAnswer: 'Pending', value: ''}]