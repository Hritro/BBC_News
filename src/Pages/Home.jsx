import React from 'react';
import { useLoaderData } from 'react-router';

import HomeNewsGallary from '../Components/HomeNewsGallary';

const Home = () => {
    const data = useLoaderData()
    return (
        <div>
            <HomeNewsGallary news={data.articles}></HomeNewsGallary> 
        </div>
        
    );
};

export default Home;