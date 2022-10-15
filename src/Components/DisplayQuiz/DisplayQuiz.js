import React from 'react';
import './DisplayQuiz.css'
const DisplayQuiz = ({ no, q }) => {

    const { correctAnswer, options, question } = q;
    return (
        <div className='each-quiz container text-bg-light p-5 rounded-2 shadow mb-5'>
            <h2 className='bg-info bg-opacity-10 border border-info p-2 rounded-1 mb-3'>Quiz No: {no + 1}</h2>
            <p>{question}</p>
            <div>
                {
                    options.map((option, idx) => {
                        return (

                            <div key={idx + 10} defaultChecked>
                                <label class="opt">
                                    {option}
                                    <input type="radio" checked='checked' defaultChecked={true} name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>
                        )

                    }
                    )}
            </div>
        </div>
    );
};

export default DisplayQuiz;