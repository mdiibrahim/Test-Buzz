import React from 'react';
import { useLoaderData } from 'react-router-dom';
import DisplayQuiz from '../DisplayQuiz/DisplayQuiz';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { data } = quiz;
    const { questions } = data;
    return (
        <div>
            <h1 className='text-center display-4 mt-4'>{data.name}'s Quiz</h1>
            
                {
                    questions.map((question, idx) => <DisplayQuiz key={question.id} q={question} no={idx}></DisplayQuiz>)
                }
            


        </div>
    );
};

export default QuizDetails;