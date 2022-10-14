import React from 'react';
import './Intro.css'


function Intro() {
    return (
        <div className='bg-dark rounded-2'>
            <section className='my-5 d-flex align-items-center'>
                <div className='me-4'>
                    <img className='img-fluid rounded-3' src="header-background 2.jpg" alt="" />
                </div>
                <div className=' text-success'>
                    <h3>Hey, Test Buzz!!!</h3>
                    <p>"Knowledge becomes power only when we put it into some use". So, let's honour our knowledge by answering some simple GK questions.........</p>
                </div>
            </section>
        </div>

    );
}

export default Intro;