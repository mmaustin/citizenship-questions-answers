import { nanoid } from "@reduxjs/toolkit";

export const questionsFive = [{id: nanoid(), question: 'there are four amendments to the constitution about who can vote. describe one of them.', answer: [{ans: 'citizens eighteen (18) and over can vote'}, 
{ans: 'you don\'t have to pay a poll tax to vote'}, {ans: 'any citizen can vote (men and women can vote)'}, {ans: 'a male citizen of any race can vote'}]},
{id: nanoid(), question: 'what is one responsibility that is only for united states citizens?', answer: [{ans: 'serve on a jury'}, {ans: 'vote in a federal election'}]},
{id: nanoid(), question: 'name one right only for united states citizens', answer: [{ans: 'vote in a federal election'}, {ans: 'run for federal office'}]}, 
{id: nanoid(), question: 'what is the name of the president of the united states now?', answer: [{ans: 'joe biden'}]}, {id: nanoid(), question: 'what is the name of the vice president of the united states now?',
answer: [{ans: 'kamala harris'}]}, {id: nanoid(), question: 'how many justices are on the supreme court?', answer: [{ans: 'nine (9)'}]}, 
{id: nanoid(), question: 'who is the chief justice of the united states now?',
answer: [{ans: 'john roberts'}]}, {id: nanoid(), question: 'under our constitution, some powers belong to the federal government. what is one power of the federal government?', answer: [{ans: 'to print money'},
{ans: 'to declare war'}, {ans: 'to create an army'}, {ans: 'to make treaties'}]}, {id: nanoid(), question: 'under our constitution, some powers belong to the states. what is one power of the states?',
answer: [{ans: 'provide schooling and education'}, {ans: 'provide protection (police)'}, {ans: 'provide safety (fire departments)'}, {ans: 'give a driver\'s license'}, {ans: 'approve zoing and land use'}]},
{id: nanoid(), question: 'what are the two major political parties in the united states?', answer: [{ans: 'democratic and republican'}]}]

//skipped questions 46, 47

export const quizAnswersFive = ['provide schooling and education', 'kamala harris', 'decides if a law goes against the constitution', 'give a driver\'s license', 'to make treaties', 'john roberts', 
'to print money', 'the supreme court', 'reviews laws', 'advises the president', 'provide safety (fire departments)', 'democratic and republican',
'joe biden', 'to create an army', 'explains laws', 'approve zoing and land use','resolves disputes (disagreements)', 'provide protection (police)', 'to declare war', 'nine (9)']

export const questionAnswerDisplayFive = [{id: nanoid(), question: 'there are four amendments to the constitution about who can vote. describe one of them.', answer: [{ans: 'advises the president'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'what is one responsibility that is only for united states citizens?', answer: [{ans: 'reviews laws'}, {ans: 'explains laws'}, {ans: 'resolves disputes (disagreements)'}, {ans: 'decides if a law goes against the constitution'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'name one right only for united states citizens', answer: [{ans: 'the supreme court'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'what is the name of the president of the united states now?', answer: [{ans: 'joe biden'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what is the name of the vice president of the united states now?',
answer: [{ans: 'kamala harris'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'how many justices are on the supreme court?', answer: [{ans: 'nine (9)'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'who is the chief justice of the united states now?',
answer: [{ans: 'john roberts'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'under our constitution, some powers belong to the federal government. what is one power of the federal government?', answer: [{ans: 'to print money'},
{ans: 'to declare war'}, {ans: 'to create an army'}, {ans: 'to make treaties'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'under our constitution, some powers belong to the states. what is one power of the states?',
answer: [{ans: 'provide schooling and education'}, {ans: 'provide protection (police)'}, {ans: 'provide safety (fire departments)'}, {ans: 'give a driver\'s license'}, {ans: 'approve zoing and land use'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'what are the two major political parties in the united states?', answer: [{ans: 'democratic and republican'}], displayAnswer: 'Pending', value: ''}]