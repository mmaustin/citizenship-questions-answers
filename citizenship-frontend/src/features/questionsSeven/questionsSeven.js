import { nanoid } from "@reduxjs/toolkit";

export const questionsSix = [{id: nanoid(), question: 'who is the "father of our country"?', answer: [{ans: 'george washington'}]}, {id: nanoid(), question: 'who was the first president?',
answer: [{ans: 'george washington'}]}, {id: nanoid(), question: 'what territory did the u.s. by from france in 1803?', answer: [{ans: 'the louisiana territory'}, {ans: 'louisiana'}]}, 
{id: nanoid(), question: 'name one war fought by the united states in the 1800s', answer: [{ans: 'war of 1812'},
{ans: 'mexican-american war'}, {ans: 'civil war'}, {ans: 'spanish-american war'}]}, {id: nanoid(), question: 'name the u.s. war between the north and the south',
answer: [{ans: 'the civil war'}, {ans: 'the war between the states'}]}, {id: nanoid(), question: 'name one problem that led to the civil war', answer: [{ans: 'slavery'}, {ans: 'economic reasons'}, {ans: 'states\' rights'}]}, 
{id: nanoid(), question: 'what happened at the constitutional convention?',
answer: [{ans: 'the constitution was written'}, {ans: 'the founding fathers wrote the constitution'}]}, {id: nanoid(), question: 'when was the constitution written?', answer: [{ans: '1787'}]}, 
{id: nanoid(), question: 'the federalists papers support the passage of the u.s. constitution. name one of the writers',
answer: [{ans: 'james madison'}, {ans: 'alexander hamilton'}, {ans: 'john jay'}, {ans: 'publius'}]}, {id: nanoid(), question: 'what is one thing benjamin franklin is famous for?',
answer: [{ans: 'u.s diplomat'}, {ans: 'oldest member of the constitutional convention'}, {ans: 'first postmaster general of the united states'}, 
{ans: 'writer of "poor richard\'s almanac"'}, {ans: 'started the first free libraries'}]}]

//skipped question 64

export const quizAnswersSix = ['james madison', 'oldest member of the constitutional convention', 'because the british army stayed in their houses (boarding, quartering)', 'thomas jefferson', 'economic opportunity', 'africans',
'escape persecution', 'native americans', 'the founding fathers wrote the constitution', 'john jay', 'first postmaster general of the united states', 'because of high taxes (taxation without representation)', 'july 4, 1776',
'political liberty', 'writer of "poor richard\'s almanac"', 'publius', 'practice their religion', 'people from africa', 'religious freedom', 'started the first free libraries', 'freedom', 'american indians', 'because they didn\'t have self-government',
'the constitution was written', '1787', 'alexander hamilton', 'u.s diplomat']

export const questionAnswerDisplaySix = [{id: nanoid(), question: 'what is one reason colonist came to america?', answer: [{ans: 'freedom'}, {ans: 'political liberty'}, {ans: 'religious freedom'}, {ans: 'economic opportunity'},
{ans: 'practice their religion'}, {ans: 'escape persecution'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'who lived in america before europeans arrived', answer: [{ans: 'american indians'}, {ans: 'native americans'}], displayAnswer: 'Pending', value: ''},
{id: nanoid(), question: 'what group of people was taken to america and sold as slaves?', answer: [{ans: 'africans'}, {ans: 'people from africa'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'why did the colonists fight the british?', answer: [{ans: 'because of high taxes (taxation without representation)'},
{ans: 'because the british army stayed in their houses (boarding, quartering)'}, {ans: 'because they didn\'t have self-government'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'who wrote the declaration of independence?',
answer: [{ans: 'thomas jefferson'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'when was the declaration of independence adopted', answer: [{ans: 'july 4, 1776'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'what happened at the constitutional convention?',
answer: [{ans: 'the constitution was written'}, {ans: 'the founding fathers wrote the constitution'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'when was the constitution written?', answer: [{ans: '1787'}], displayAnswer: 'Pending', value: ''}, 
{id: nanoid(), question: 'the federalists papers support the passage of the u.s. constitution. name one of the writers',
answer: [{ans: 'james madison'}, {ans: 'alexander hamilton'}, {ans: 'john jay'}, {ans: 'publius'}], displayAnswer: 'Pending', value: ''}, {id: nanoid(), question: 'what is one thing benjamin franklin is famous for?',
answer: [{ans: 'u.s diplomat'}, {ans: 'oldest member of the constitutional convention'}, {ans: 'first postmaster general of the united states'}, 
{ans: 'writer of "poor richard\'s almanac"'}, {ans: 'started the first free libraries'}], displayAnswer: 'Pending', value: ''}]