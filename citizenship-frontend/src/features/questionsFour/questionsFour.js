import { nanoid } from "@reduxjs/toolkit";

export const questionsFour = [{id: nanoid(), question: 'what does the president\'s cabinet do?', answer: [{ans: 'advises the president'}]},
{id: nanoid(), question: 'what does the judicial branch do?', answer: [{ans: 'reviews laws'}, {ans: 'explains laws'}, {ans: 'resolves disputes (disagreements)'}, {ans: 'decides if a law goes against the constitution'}]},
{id: nanoid(), question: 'what is the highest court in the united states?', answer: [{ans: 'the supreme court'}]}, 
{id: nanoid(), question: 'what is the name of the president of the united states now?', answer: [{ans: 'joe biden'}]}, {id: nanoid(), question: 'what is the name of the vice president of the united states now?',
answer: [{ans: 'kamala harris'}]}, {id: nanoid(), question: 'how many justices are on the supreme court?', answer: [{ans: 'nine (9)'}]}, 
{id: nanoid(), question: 'who is the chief justice of the united states now?',
answer: [{ans: 'john roberts'}]}, {id: nanoid(), question: 'under our constitution, some powers belong to the federal government. what is one power of the federal government?', answer: [{ans: 'to print money'},
{ans: 'to declare war'}, {ans: 'to create an army'}, {ans: 'to make treaties'}]}, {id: nanoid(), question: 'under our constitution, some powers belong to the states. what is one power of the states?',
answer: [{ans: 'provide schooling and education'}, {ans: 'provide protection (police)'}, {ans: 'provide safety (fire departments)'}, {ans: 'give a driver\'s license'}, {ans: 'approve zoing and land use'}]},
{id: nanoid(), question: 'what are the two major political parties in the united states?', answer: [{ans: 'democratic and republican'}]}]

//skipped questions 36, 43, 44
//added questions 28, 29

export const quizAnswersFour = ['provide schooling and education', 'kamala harris', 'decides if a law goes against the constitution', 'give a driver\'s license', 'to make treaties', 'john roberts', 
'to print money', 'the supreme court', 'reviews laws', 'advises the president', 'provide safety (fire departments)', 'democratic and republican',
'joe biden', 'to create an army', 'explains laws', 'approve zoing and land use','resolves disputes (disagreements)', 'provide protection (police)', 'to declare war', 'nine (9)']