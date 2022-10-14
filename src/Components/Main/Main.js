import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import './Main.css';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <h2>This is main</h2>
        </div>
    );
};

export default Main;