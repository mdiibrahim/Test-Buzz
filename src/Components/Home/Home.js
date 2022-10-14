import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Intro from '../Intro/Intro';
import './Home.css';
const Home = () => {
    const datas = useLoaderData();
    const { data } = datas;
    return (
        <div className='container'>
            <Intro></Intro>
        </div>
    );
};

export default Home;