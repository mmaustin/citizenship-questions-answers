import { nanoid } from '@reduxjs/toolkit'

export const questions = [{id: nanoid(), question: 'what is the economic system in the united states?', answer: [{ans: 'capitalist economy'}, {ans: 'market economy'}]},
{id: nanoid(), question: 'what is the \'rule of law\'?', answer: [{ans: 'everyone must follow the law.'}, {ans: 'leaders must obey the law.'},
{ans: 'government must obey the law.'}, {ans: 'no one is above the law'}]}, {id: nanoid(), question: 'name one branch or part of the government?',
answer: [{ans: 'congress'}, {ans: 'legislative'}, {ans: 'president'}, {ans: 'executive'}, {ans: 'the courts'}, {ans: 'judicial'}]}, 
{id: nanoid(), question: 'what stops one branch of government from becoming too powerful?', answer: [{ans: 'checks and balances'},
{ans: 'separation of powers'}]}, {id: nanoid(), question: 'who is in charge of the executive branch?',
answer: [{ans: 'the president'}]}, {id: nanoid(), question: 'who makes federal laws?', answer: [{ans: 'congress'},
{ans: 'senate and house (of representatives)'}, {ans: '(u.s. or national) legislature'}]}, {id: nanoid(), question: 'what are the two parts of the u.s. congress?',
answer: [{ans: 'the senate and the house of (representatives)'}]}, {id: nanoid(), question: 'how many u.s. senators are there?', answer: [{ans: 'one hundred (100)'}]}, 
{id: nanoid(), question: 'we elect a u.s. senator for how many years?',
answer: [{ans: 'six (6)'}]}, {id: nanoid(), question: 'the house of representatives has how many voting members?',
answer: [{ans: 'four hundred thirty-five (435)'}]}
]
//skipped question 20 from official list

export const quizAnswersTwo = ['capitalist economy', 'market economy', 'everyone must follow the law.', 'leaders must obey the law.', 'government must obey the law.',
'no one is above the law', 'congress', 'legislative', 'president', 'executive', 'the courts', 'judicial', 'checks and balances', 'separation of powers',
'congress', 'senate and house (of representatives)', '(u.s. or national) legislature', 'the senate and the house of (representatives)', 'one hundred (100)',
'six (6)', 'four hundred thirty-five (435)']