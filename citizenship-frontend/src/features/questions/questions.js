import { nanoid } from '@reduxjs/toolkit'

export const questions = [{id: nanoid(), question: 'what is the supreme law of the land?', answer: [{ans: 'the constitution'}]},
{id: nanoid(), question: 'what does the constitution do?', answer: [{ans: 'sets up the government'}, {ans: 'defines the government'},
{ans: 'protects basic rights of americans'}]}, {id: nanoid(), question: 'the idea of self-government is in the first three words of the constitution. What are these words?',
answer: [{ans: 'we the people'}]}
]
