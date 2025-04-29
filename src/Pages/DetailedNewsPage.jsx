import React from 'react';
import { useLoaderData } from 'react-router';

const DetailedNewsPage = () => {
    const data = useLoaderData()
    if(!data.success){
         return <div className='flex flex-col gap-5 justify-center items-center text-3xl font-bold mt-5 mb-5'>
            <img src='/image.png'></img>
             No News Found!
            </div>
    }
    const news = data.article
    return (
        <div>
            <h1 className='text-4xl font-bold'>{news.title}</h1>
            <div>
                <img className='h-auto w-full object-cover mt-5' src={news.images[0].url}></img>
            </div>
            <p className='mt-3 font-bold '>{news.timestamp}</p>
            {
                news.content.map((nw,index) => <p key={index} className='mt-2'>{nw}</p>)
            }
        </div>
    );
};

export default DetailedNewsPage;