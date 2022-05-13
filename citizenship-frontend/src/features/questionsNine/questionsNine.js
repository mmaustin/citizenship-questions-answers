import { nanoid } from "@reduxjs/toolkit";

export const questionsNine = [{id: nanoid(), question: 'what ocean is on the east coast of the united states?', answer: [{ans: 'atlantic ocean'}]}, {id: nanoid(), question: 'name one u.s. territory?',
answer: [{ans: 'puerto rico'}, {ans: 'u.s. virgin islands'}, {ans: 'american somao'}, {ans: 'northern mariana islands'}, {ans: 'guam'}]}, {id: nanoid(), question: 'name one state that borders mexico?', answer: [{ans: 'california'},
{ans: 'arizona'}, {ans: 'new mexico'}, {ans: 'texas'}]}, 
{id: nanoid(), question: 'what is the capital of the united states?', answer: [{ans: 'washington d.c.'}]}, {id: nanoid(), question: 'where is the statue of liberty?',
answer: [{ans: 'new york (harbor)'}, {ans: 'liberty island'}]}, {id: nanoid(), question: 'why does the flag have thirteen stripes?', answer: [{ans: 'because there were 13 original colonies'}, {ans: 'because the stripes represent the original colonies'}]}, 
{id: nanoid(), question: 'why does the flag have 50 stars?',
answer: [{ans: 'because there is one star for each state'}, {ans: 'because each star represents a state'}, {ans: 'because there are 50 states'}]},
{id: nanoid(), question: 'what is the name of the national anthem?', answer: [{ans: 'the star spangled banner'}]}]


export const quizAnswersNine = ['because there were 13 original colonies', 'u.s. virgin islands', 'liberty island', 'california', 'because there are 50 states',
'puerto rico', 'arizona', 'guam', 'washington d.c.', 'because each star represents a state',
'texas', 'northern mariana islands', 'atlantic ocean', 'because the stripes represent the original colonies',
'new mexico', 'the star spangled banner', 'american somao', 'new york (harbor)', 'because there is one star for each state']


export const questionAnswerDisplayNine = [{id: nanoid(), question: 'what ocean is on the east coast of the united states?', answer: [{ans: 'atlantic ocean'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'name one u.s. territory?',
answer: [{ans: 'puerto rico'}, {ans: 'u.s. virgin islands'}, {ans: 'american somao'}, {ans: 'northern mariana islands'}, {ans: 'guam'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'name one state that borders mexico?', answer: [{ans: 'california'},
{ans: 'arizona'}, {ans: 'new mexico'}, {ans: 'texas'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'what is the capital of the united states?', answer: [{ans: 'washington d.c.'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'where is the statue of liberty?',
answer: [{ans: 'new york (harbor)'}, {ans: 'liberty island'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'why does the flag have thirteen stripes?', answer: [{ans: 'because there were 13 original colonies'}, {ans: 'because the stripes represent the original colonies'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'why does the flag have 50 stars?',
answer: [{ans: 'because there is one star for each state'}, {ans: 'because each star represents a state'}, {ans: 'because there are 50 states'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'what is the name of the national anthem?', answer: [{ans: 'the star spangled banner'}], displayAnswer: 'Pending', value: ''}]