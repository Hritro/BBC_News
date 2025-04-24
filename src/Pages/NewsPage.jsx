import React from 'react';
import { useLoaderData } from 'react-router';
import NewsGallary from '../Components/NewsGallary';

const NewsPage = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div>
            <NewsGallary news={data.articles}></NewsGallary>
        </div>
    );
};

export default NewsPage;