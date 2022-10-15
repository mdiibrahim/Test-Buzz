import React from 'react';
import { useLoaderData } from 'react-router-dom';

const QuizDetails = () => {
    const quiz = useLoaderData();
    const { data } = quiz;
    const { questions } = data;
   
    return (
        <div>
            {
                questions.map(question => {

                })
            }
        </div>
    );
};

export default QuizDetails;