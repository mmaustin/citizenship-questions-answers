import { nanoid } from '@reduxjs/toolkit'

export const questions = [{id: nanoid(), question: 'what is the economic system in the united states?', answer: [{ans: 'capitalist economy'}, {ans: 'market economy'}]},
{id: nanoid(), question: 'what is the \'rule of law\'?', answer: [{ans: 'everyone must follow the law.'}, {ans: 'leaders must obey the law.'},
{ans: 'government must obey the law.'}, {ans: 'no one is above the law'}]}, {id: nanoid(), question: 'name one branch or part of the government?',
answer: [{ans: 'congress'}, {ans: 'legislative'}, {ans: 'president'}, {ans: 'executive'}, {ans: 'the courts'}, {ans: 'judicial'}]}, 
{id: nanoid(), question: 'what is an amendment?', answer: [{ans: 'a change to the constitution'},
{ans: 'an addition to the constitution'}]}, {id: nanoid(), question: 'what do we call the first ten amendments to the constitution?',
answer: [{ans: 'the bill of rights'}]}, {id: nanoid(), question: 'what is one right or freedom from the first amendment?', answer: [{ans: 'speech'},
{ans: 'religion'}, {ans: 'assembly'}, {ans: 'press'}, {ans: 'petition the government'}]}, {id: nanoid(), question: 'how many amendments does the constitution have?',
answer: [{ans: 'twenty-seven(27)'}]}, {id: nanoid(), question: 'what did the declaration of independence do?', answer: [{ans: 'announced independence from great britain'},
{ans: 'declared independence from great britain'}, {ans: 'said that the united states is free from great britain'}]}, {id: nanoid(), question: 'what are two rights in the declaration of independence?',
answer: [{ans: 'life'}, {ans: 'liberty'}, {ans: 'pursuit of happiness'}]}, {id: nanoid(), question: 'what is freedom of religion?',
answer: [{ans: 'you can practice any religion or not practice a religion'}]}
]