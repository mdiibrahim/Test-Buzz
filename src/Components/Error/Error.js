import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div className='text-center bottom-50'>
            <h2>Ooopsss! You are in wrong place.</h2>
            <Link to='/home'><button  className='btn btn-outline-info'>Return Home</button></Link>
            
        </div>
    );
};

export default Error;