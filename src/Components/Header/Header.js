import './Header.css';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Header = () => {
    const routes = [
        {
            id: 1, name: 'Home', path: '/'
        },
        {
            id: 2, name: 'Blog', path: '/blog'
        },
        {
            id: 3, name: 'Anlysis', path: '/analysis'
        },
        {
            id: 4, name: 'About', path: '/about'
        }
    ]
    
    
    return (
        <nav>
            <nav className='d-flex justify-content-center shadow p-3 mb-5 bg-body rounded'>
                {
                    routes.map(route => {
                        return (
                            
                            <Link
                                key={route.id}
                                to={route.path}
                                className='text-decoration-none mx-auto'
                                
                            >
                            {route.name}</Link>
                        )
                    })
                }
            </nav>

        </nav>
    );
};

export default Header;