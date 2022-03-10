import { nanoid } from "@reduxjs/toolkit";

export const questionsNine = [{id: nanoid(), question: 'what ocean is on the east coast of the united states?', answer: [{ans: 'atlantic ocean'}]}, {id: nanoid(), question: 'name one u.s. territory?',
answer: [{ans: 'puerto rico'}, {ans: 'u.s. virgin islands'}, {ans: 'american somao'}, {ans: 'northern mariana islands'}, {ans: 'guam'}]}, {id: nanoid(), question: 'name one state that borders mexico', answer: [{ans: 'california'},
{ans: 'arizona'}, {ans: 'new mexico'}, {ans: 'texas'}]}, 
{id: nanoid(), question: 'what is the capital of the united states?', answer: [{ans: 'washington d.c.'}]}, {id: nanoid(), question: 'where is the statue of liberty?',
answer: [{ans: 'new york (harbor)'}, {ans: 'liberty island'}]}, {id: nanoid(), question: 'why does the flag have thirteen stripes?', answer: [{ans: 'because there were 13 original colonies'}, {ans: 'because the stripes represent the original colonies'}]}, 
{id: nanoid(), question: 'why does the flag have 50 stars?',
answer: [{ans: 'because there is one star for each state'}, {ans: 'because each star represents a state'}, {ans: 'because there are 50 states'}]},
{id: nanoid(), question: 'what is the name of the national anthem?', answer: [{ans: 'the star spangled banner'}]}]

//skipped questions 92, 100

export const quizAnswersNine = ['mississippi river', 'woodrow wilson', 'civil rights movement',
'world war II', 'communism', 'worked for equality for all americans',
'franklin roosevelt', 'terrorists attacked the united states', 'pacific ocean',
'japan, germany, and italy', 'fought for civil rights', 'missouri river']


export const questionAnswerDisplayNine = [{id: nanoid(), question: 'who was president during world war I?', answer: [{ans: 'woodrow wilson'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'who was president during the great drepression and world war II?',
answer: [{ans: 'franklin roosevelt'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'who did the united states fight in world war II?', answer: [{ans: 'japan, germany, and italy'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'before he was president, eisenhower was a general. what war was he in?', answer: [{ans: 'world war II'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'during the cold war, what was the main concern of the united states?',
answer: [{ans: 'communism'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what movement tried to end racial discrimination', answer: [{ans: 'civil rights movement'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'what did martin luther king, jr. do?',
answer: [{ans: 'fought for civil rights'}, {ans: 'worked for equality for all americans'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'what major event happened on september 11, 2001, in the united states?', answer: [{ans: 'terrorists attacked the united states'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'name one of the two longest rivers in the united states',
answer: [{ans: 'missouri river'}, {ans: 'mississippi river'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what ocean is on the west coast of the united states?',
answer: [{ans: 'pacific ocean'}], displayAnswer: 'Pending', value: ''}]