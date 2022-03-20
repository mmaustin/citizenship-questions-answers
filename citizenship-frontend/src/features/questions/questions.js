import { nanoid } from '@reduxjs/toolkit'

export const questions = [{id: nanoid(), question: 'what is the supreme law of the land?', answer: [{ans: 'the constitution'}]},
{id: nanoid(), question: 'what does the constitution do?', answer: [{ans: 'sets up the government'}, {ans: 'defines the government'},
{ans: 'protects basic rights of americans'}]}, {id: nanoid(), question: 'the idea of self-government is in the first three words of the constitution. what are these words?',
answer: [{ans: 'we the people'}]}, {id: nanoid(), question: 'what is an amendment?', answer: [{ans: 'a change to the constitution'},
{ans: 'an addition to the constitution'}]}, {id: nanoid(), question: 'what do we call the first ten amendments to the constitution?',
answer: [{ans: 'the bill of rights'}]}, {id: nanoid(), question: 'what is one right or freedom from the first amendment?', answer: [{ans: 'speech'},
{ans: 'religion'}, {ans: 'assembly'}, {ans: 'press'}, {ans: 'petition the government'}]}, {id: nanoid(), question: 'how many amendments does the constitution have?',
answer: [{ans: 'twenty-seven(27)'}]}, {id: nanoid(), question: 'what did the declaration of independence do?', answer: [{ans: 'announced independence from great britain'},
{ans: 'declared independence from great britain'}, {ans: 'said that the united states is free from great britain'}]}, {id: nanoid(), question: 'what are two rights in the declaration of independence?',
answer: [{ans: 'life'}, {ans: 'liberty'}, {ans: 'pursuit of happiness'}]}, {id: nanoid(), question: 'what is freedom of religion?',
answer: [{ans: 'you can practice any religion or not practice a religion'}]}]

export const quizAnswers = ['a change to the constitution', 'announced independence from great britain', 'liberty', 'press', 'protects basic rights of americans',
'pursuit of happiness', 'religion', 'the bill of rights', 'twenty-seven(27)', 'speech', 'you can practice any religion or not practice a religion',
'an addition to the constitution', 'petition the government', 'defines the government', 'declared independence from great britain', 'life', 'we the people',
'sets up the government', 'assembly', 'said that the united states is free from great britain', 'the constitution']

export const questionAnswerDisplay = [{id: nanoid(), question: 'what is the supreme law of the land?', answer: [{ans: 'the constitution'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'what does the constitution do?', answer: [{ans: 'sets up the government'}, {ans: 'defines the government'},
{ans: 'protects basic rights of americans'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'the idea of self-government is in the first three words of the constitution. what are these words?',
answer: [{ans: 'we the people'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what is an amendment?', answer: [{ans: 'a change to the constitution'},
{ans: 'an addition to the constitution'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what do we call the first ten amendments to the constitution?',
answer: [{ans: 'the bill of rights'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what is one right or freedom from the first amendment?', answer: [{ans: 'speech'},
{ans: 'religion'}, {ans: 'assembly'}, {ans: 'press'}, {ans: 'petition the government'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'how many amendments does the constitution have?',
answer: [{ans: 'twenty-seven(27)'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what did the declaration of independence do?', answer: [{ans: 'announced independence from great britain'},
{ans: 'declared independence from great britain'}, {ans: 'said that the united states is free from great britain'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what are two rights in the declaration of independence?',
answer: [{ans: 'life'}, {ans: 'liberty'}, {ans: 'pursuit of happiness'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what is freedom of religion?',
answer: [{ans: 'you can practice any religion or not practice a religion'}], displayAnswer: 'Pending', value: ''}]