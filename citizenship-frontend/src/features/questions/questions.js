import { nanoid } from '@reduxjs/toolkit'

export const questions = [{id: nanoid(), question: 'what is the supreme law of the land?', answer: [{ans: 'the constitution'}]},
{id: nanoid(), question: 'what does the constitution do?', answer: [{ans: 'sets up the government'}, {ans: 'defines the government'},
{ans: 'protects basic rights of americans'}]}, {id: nanoid(), question: 'the idea of self-government is in the first three words of the constitution. What are these words?',
answer: [{ans: 'we the people'}]}, {id: nanoid(), question: 'what is an amendment?', answer: [{ans: 'a change to the constitution'},
{ans: 'an addition to the constitution'}]}, {id: nanoid(), question: 'what do we call the first amendments to the constitution',
answer: [{ans: 'the bill of rights'}]}, {id: nanoid(), question: 'what is one right or freedom from the first amendment', answer: [{ans: 'speech'},
{ans: 'religion'}, {ans: 'assembly'}, {ans: 'press'}, {ans: 'petition the government'}]}, {id: nanoid(), question: 'how many amendments does the constitution have?',
answer: [{ans: 'twenty-seven(27)'}]}
]
