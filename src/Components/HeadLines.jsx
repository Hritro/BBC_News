import React, { useEffect, useState } from 'react';
import Marquee from 'react-fast-marquee';

const HeadLines = () => {
    const[headline,setHeadline] = useState([])

    useEffect(() => {
        fetch(`https://news-api-fs.vercel.app/api/popular`)
        .then(res => res.json())
        .then(data => {
            setHeadline(data.articles)
        })
    },[])
    return (
        <div className='flex items-center'>
            <div className='bg-red-700 font-bold text-white px-3 py-1'>সর্বাধিক পঠিত</div>
            <div className='flex-1 py-1 bg-gray-300'>
                <Marquee>
                    <div>
                        {headline.map(head => <span key={head.id}>{head.title} ** </span>)}
                    </div>
                </Marquee>
            </div>
        </div>
    );
};

export default HeadLines;