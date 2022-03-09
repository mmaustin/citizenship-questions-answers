import { nanoid } from "@reduxjs/toolkit";

export const questionsEight = [{id: nanoid(), question: 'who is the "father of our country"?', answer: [{ans: 'george washington'}]}, {id: nanoid(), question: 'who was the first president?',
answer: [{ans: 'george washington'}]}, {id: nanoid(), question: 'what territory did the u.s. buy from france in 1803?', answer: [{ans: 'the louisiana territory'}, {ans: 'louisiana'}]}, 
{id: nanoid(), question: 'name one war fought by the united states in the 1800s', answer: [{ans: 'war of 1812'},
{ans: 'mexican-american war'}, {ans: 'the civil war'}, {ans: 'spanish-american war'}]}, {id: nanoid(), question: 'name the u.s. war between the north and the south',
answer: [{ans: 'the civil war'}, {ans: 'the war between the states'}]}, {id: nanoid(), question: 'name one problem that led to the civil war', answer: [{ans: 'slavery'}, {ans: 'economic reasons'}, {ans: 'states\' rights'}]}, 
{id: nanoid(), question: 'what was one important thing that abraham lincoln did?',
answer: [{ans: 'freed the slaves (emancipation proclamation)'}, {ans: 'saved or preserved the union'}, {ans: 'led the united states during the civil war'}]},
{id: nanoid(), question: 'what did the emancipation proclamation do?', answer: [{ans: 'freed the slaves'}, {ans: 'freed slaves in the confederacy'}, {ans: 'freed slaves in the confederate states'}, {ans: 'freed slaves in most southern states'}]}, 
{id: nanoid(), question: 'what did susan b. anthony do?',
answer: [{ans: 'fought for women\'s rights'}, {ans: 'fought for civil rights'}]}, {id: nanoid(), question: 'name one war fought by the united states in the 1900s.',
answer: [{ans: 'world war I'}, {ans: 'world war II'}, {ans: 'the korean war'}, 
{ans: 'the vietnam war'}, {ans: 'persian gulf war'}]}]

//skipped question 64

export const quizAnswersEight = ['persian gulf war', 'freed slaves in most southern states', 'world war I', 'fought for women\'s rights', 'slavery',
'mexican-american war', 'freed slaves in the confederacy', 'the korean war', 'the louisiana territory', 'the civil war', 'economic reasons', 'saved or preserved the union',
'george washington', 'led the united states during the civil war', 'the vietnam war', 'states\' rights', 'spanish-american war', 'world war II',
'freed the slaves (emancipation proclamation)', 'louisiana', 'fought for civil rights', 'freed slaves in the confederate states', 'war of 1812', 'the war between the states', 'freed the slaves']

export const questionAnswerDisplayEight = [{id: nanoid(), question: 'who is the "father of our country"?', answer: [{ans: 'george washington'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'who was the first president?',
answer: [{ans: 'george washington'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what territory did the u.s. buy from france in 1803?', answer: [{ans: 'the louisiana territory'}, {ans: 'louisiana'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'name one war fought by the united states in the 1800s', answer: [{ans: 'war of 1812'},
{ans: 'mexican-american war'}, {ans: 'the civil war'}, {ans: 'spanish-american war'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'name the u.s. war between the north and the south',
answer: [{ans: 'the civil war'}, {ans: 'the war between the states'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'name one problem that led to the civil war', answer: [{ans: 'slavery'}, {ans: 'economic reasons'}, {ans: 'states\' rights'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'what was one important thing that abraham lincoln did?',
answer: [{ans: 'freed the slaves (emancipation proclamation)'}, {ans: 'saved or preserved the union'}, {ans: 'led the united states during the civil war'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'what did the emancipation proclamation do?', answer: [{ans: 'freed the slaves'}, {ans: 'freed slaves in the confederacy'}, {ans: 'freed slaves in the confederate states'}, {ans: 'freed slaves in most southern states'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'what did susan b. anthony do?',
answer: [{ans: 'fought for women\'s rights'}, {ans: 'fought for civil rights'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'name one war fought by the united states in the 1900s.',
answer: [{ans: 'world war I'}, {ans: 'world war II'}, {ans: 'the korean war'}, 
{ans: 'the vietnam war'}, {ans: 'persian gulf war'}], displayAnswer: 'Pending', value: ''}]

