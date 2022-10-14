import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Intro from '../Intro/Intro';
import Quizes from '../Quizes/Quizes';
import './Home.css';
const Home = () => {
    const datas = useLoaderData();
    const { data } = datas;
    return (
        <div className='container'>
            <Intro></Intro>
            <Quizes quizes={data}></Quizes>
        </div>
    );
};

export default Home;