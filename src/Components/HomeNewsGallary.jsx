import React from 'react';
import SingleNews from './SingleNews';
import NewsGallary from './NewsGallary';

const HomeNewsGallary = ({news}) => {
    return (
        <div className='mt-5'>
            <div className='grid grid-cols-5 gap-3'>
                <div className='col-span-3'>
                    <SingleNews news={news[0]}></SingleNews><p className='max-w-[450px]'>{news[0].description}</p>
                </div>
                <div className='col-span-2 grid grid-cols-2 gap-3'>
                    {
                        news.slice(1,5).map(nw => <SingleNews key={nw.id} news={nw}></SingleNews>)
                    }
                </div>
            </div>

            <NewsGallary news={news.slice(5)}></NewsGallary>
        </div>
    );
};

export default HomeNewsGallary;