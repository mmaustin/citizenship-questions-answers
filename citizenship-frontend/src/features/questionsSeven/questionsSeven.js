import { nanoid } from "@reduxjs/toolkit";

export const questionsSix = [{id: nanoid(), question: 'who is the "father of our country"?', answer: [{ans: 'george washington'}]}, {id: nanoid(), question: 'who was the first president?',
answer: [{ans: 'george washington'}]}, {id: nanoid(), question: 'what territory did the u.s. by from france in 1803?', answer: [{ans: 'the louisiana territory'}, {ans: 'louisiana'}]}, 
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

export const quizAnswersSix = ['persian gulf war', 'freed slaves in most southern states', 'world war I', 'fought for women\'s rights', 'slavery',
'mexican-american war', 'freed slaves in the confederacy', 'the korean war', 'the louisiana territory', 'civil war', 'economic reasons', 'saved or preserved the union',
'george washington', 'led the united states during the civil war', 'the vietnam war', 'states\' rights', 'spanish-american war', 'world war II',
'freed the slaves (emancipation proclamation)', 'louisiana', 'fought for civil rights', 'freed slaves in the confederate states', 'war of 1812', 'the war between the states', 'freed the slaves']

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