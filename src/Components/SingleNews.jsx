import React from 'react';

const SingleNews = ({news}) => {
    return (
        <div>
            <div><img className='object-cover aspect-16/9' src={news.image.srcset[6].url}></img></div>
            <p className='mt-2 hover:underline cursor-pointer'>{news.title}</p>
        </div>
    );
};

export default SingleNews;