import { nanoid } from "@reduxjs/toolkit";

export const questionsFive = [{id: nanoid(), question: 'there are four amendments to the constitution about who can vote. describe one of them.', answer: [{ans: 'citizens eighteen (18) and over can vote'}, 
{ans: 'you don\'t have to pay a poll tax to vote'}, {ans: 'any citizen can vote (men and women can vote)'}, {ans: 'a male citizen of any race can vote'}]},
{id: nanoid(), question: 'what is one responsibility that is only for united states citizens?', answer: [{ans: 'serve on a jury'}, {ans: 'vote in a federal election'}]},
{id: nanoid(), question: 'name one right only for united states citizens', answer: [{ans: 'vote in a federal election'}, {ans: 'run for federal office'}]}, 
{id: nanoid(), question: 'what are two rights of everyone living in the united states', answer: [{ans: 'freedom of expression'}, {ans: 'freedom of speech'}, {ans: 'freedom of assembly'},
{ans: 'freedom to petition the government'}, {ans: 'freedom of religion'}, {ans: 'the right to bear arms'}]}, {id: nanoid(), question: 'what do we show loyalty to when we say the pledge of allegiance',
answer: [{ans: 'the united states'}, {ans: 'the flag'}]}, {id: nanoid(), question: 'what is one promise you make when you become a united states citizen?', answer: [{ans: 'give up loyalty to other countries'},
{ans: 'defend the constitution and laws of the united states'}, {ans: 'obey the laws of the united states'}, {ans: 'serve in the u.s. military if needed'}, {ans: 'serve (do important work for) the nation if needed'}, 
{ans: 'be loyal to the united states'}]}, {id: nanoid(), question: 'how old do citizens have to be to vote for president?',
answer: [{ans: 'eighteen (18) and older'}]}, {id: nanoid(), question: 'what are two ways that americans can participate in their democracy?', answer: [{ans: 'vote'}, {ans: 'join a political party'}, {ans: 'help with a campaign'},
{ans: 'join a civic group'}, {ans: 'join a community group'}, {ans: 'give an elected offical your opinion on an issue'}, {ans: 'call senators and representatives'}, {ans: 'public support or oppose an issue or policy'}, {ans: 'run for office'}, {ans: 'write to a newspaper'}]}, 
{id: nanoid(), question: 'when is the last day you can send in federal income tax forms?',
answer: [{ans: 'april 15'}]},
{id: nanoid(), question: 'when must all men register for the selective service?', answer: [{ans: 'at age eighteen (18)'}, {ans: 'between eighteen (18) and twenty-six (26)'}]}]

//skipped questions 46, 47 displayAnswer: 'Pending', value: ''

export const quizAnswersFive = ['provide schooling and education', 'kamala harris', 'decides if a law goes against the constitution', 'give a driver\'s license', 'to make treaties', 'john roberts', 
'to print money', 'the supreme court', 'reviews laws', 'advises the president', 'provide safety (fire departments)', 'democratic and republican',
'joe biden', 'to create an army', 'explains laws', 'approve zoing and land use','resolves disputes (disagreements)', 'provide protection (police)', 'to declare war', 'nine (9)']

export const questionAnswerDisplayFive = [{id: nanoid(), question: 'there are four amendments to the constitution about who can vote. describe one of them.', answer: [{ans: 'citizens eighteen (18) and over can vote'}, 
{ans: 'you don\'t have to pay a poll tax to vote'}, {ans: 'any citizen can vote (men and women can vote)'}, {ans: 'a male citizen of any race can vote'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'what is one responsibility that is only for united states citizens?', answer: [{ans: 'serve on a jury'}, {ans: 'vote in a federal election'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'name one right only for united states citizens', answer: [{ans: 'vote in a federal election'}, {ans: 'run for federal office'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'what are two rights of everyone living in the united states', answer: [{ans: 'freedom of expression'}, {ans: 'freedom of speech'}, {ans: 'freedom of assembly'},
{ans: 'freedom to petition the government'}, {ans: 'freedom of religion'}, {ans: 'the right to bear arms'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what do we show loyalty to when we say the pledge of allegiance',
answer: [{ans: 'the united states'}, {ans: 'the flag'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what is one promise you make when you become a united states citizen?', answer: [{ans: 'give up loyalty to other countries'},
{ans: 'defend the constitution and laws of the united states'}, {ans: 'obey the laws of the united states'}, {ans: 'serve in the u.s. military if needed'}, {ans: 'serve (do important work for) the nation if needed'}, 
{ans: 'be loyal to the united states'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'how old do citizens have to be to vote for president?',
answer: [{ans: 'eighteen (18) and older'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what are two ways that americans can participate in their democracy?', answer: [{ans: 'vote'}, {ans: 'join a political party'}, {ans: 'help with a campaign'},
{ans: 'join a civic group'}, {ans: 'join a community group'}, {ans: 'give an elected offical your opinion on an issue'}, {ans: 'call senators and representatives'}, {ans: 'public support or oppose an issue or policy'}, {ans: 'run for office'}, {ans: 'write to a newspaper'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'when is the last day you can send in federal income tax forms?',
answer: [{ans: 'april 15'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'when must all men register for the selective service?', answer: [{ans: 'at age eighteen (18)'}, {ans: 'between eighteen (18) and twenty-six (26)'}], displayAnswer: 'Pending', value: ''}]