import React from 'react';
import SingleNews from './SingleNews';

const NewsGallary = ({news}) => {
    
    return (
        <div className='grid grid-cols-5 gap-5 mt-5'>
            {
                news.map(nw => <SingleNews key={nw.id} news={nw}></SingleNews>)
            }
        </div>
    );
};

export default NewsGallary;