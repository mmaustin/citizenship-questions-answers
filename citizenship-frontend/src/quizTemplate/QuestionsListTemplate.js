const QuestionsListTemplate = ({questions}) => {

    const questionsAnswers = questions.map((question, idx) => (
        <article className="question-excerpt" key={question.id}>
            <p className='question-number'>Question {idx + 1}</p>
            <p className='question'>{question.question}</p>
            {question.answer.map((a, index) => (
                <div className='answers-div' key={index}>
                    <p className='answers capitalize'><span className="number-green">{index +1})</span> {a.ans}</p>
                </div>

            ))}
        </article>
    ))

    return(
        <section className='question-answer-panel'>
            {questionsAnswers}
        </section>
    )

}
export default QuestionsListTemplate