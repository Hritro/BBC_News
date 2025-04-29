import React from 'react';
import { Link } from 'react-router';

const SingleNews = ({news}) => {
    // console.log(news.id)
    return (
        <div>
            <div className='flex flex-col'><img className='object-cover aspect-16/9' src={news.image.srcset[6].url}></img></div>
            <p className='mt-2 hover:underline cursor-pointer max-w-[450px]'><Link to={`/news/${news.id}`}>{news.title}</Link></p>
        </div>
    );
};

export default SingleNews;