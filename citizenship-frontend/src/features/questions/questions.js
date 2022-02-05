import { nanoid } from '@reduxjs/toolkit'

export const questions = [{id: nanoid(), question: 'what is the supreme law of the land?', answer: [{ans: 'the constitution'}]},
{id: nanoid(), question: 'what does the constitution do?', answer: [{ans: 'sets up the government'}, {ans: 'defines the government'},
{ans: 'protects basic rights of americans'}]}, {id: nanoid(), question: 'the idea of self-government is in the first three words of the constitution. What are these words?',
answer: [{ans: 'we the people'}]}, {id: nanoid(), question: 'what is an amendment?', answer: [{ans: 'a change to the constitution'},
{ans: 'an addition to the constitution'}]}, {id: nanoid(), question: 'what do we call the first amendments to the constitution',
answer: [{ans: 'the bill of rights'}]}, {id: nanoid(), question: 'what is one right or freedom from the first amendment', answer: [{ans: 'speech'},
{ans: 'religion'}, {ans: 'assembly'}, {ans: 'press'}, {ans: 'petition the government'}]}, {id: nanoid(), question: 'how many amendments does the constitution have?',
answer: [{ans: 'twenty-seven(27)'}]}, {id: nanoid(), question: 'what did the declaration of independence do?', answer: [{ans: 'announced independence from great britain'},
{ans: 'declared independence from great britain'}, {ans: 'said that the united states is free from great britain'}]}, {id: nanoid(), question: 'what are two rights in the declaration of independence',
answer: [{ans: 'life'}, {ans: 'liberty'}, {ans: 'pursuit of happiness'}]}, {id: nanoid(), question: 'what is freedom of religion',
answer: [{ans: 'you can practice any religion or not practice a religion'}]}
]

export const  quizAnswers = ['the constitution', 'sets up the government', 'defines the government', 'protects basic rights of americans',
'we the people', 'a change to the constitution', 'an addition to the constitution', 'the bill of rights', 'speech', 'religion', 'assembly',
'press', 'petition the government', 'twenty-seven(27)', 'announced independence from great britain', 'declared independence from great britain',
'said that the united states is free from great britain', 'life', 'liberty', 'pursuit of happiness', 'you can practice any religion or not practice a religion']