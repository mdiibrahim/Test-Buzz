import './Header.css';
import React from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    return (
        <nav className='bg-primary p-4 text-center d-flex justify-content-evenly'>
            <Link className='text-white text-decoration-none' to='/'>Home</Link>
            <Link className='text-white text-decoration-none' to='/blog'>Blog</Link>
            <Link className='text-white text-decoration-none' to='/analysis'>Analysis</Link>
            <Link className='text-white text-decoration-none' to='/about'>About</Link>
        </nav>
    );
};

export default Header;