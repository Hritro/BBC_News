import React from 'react';

const Skeleton = () => {
    return (
        <div className='grid grid-cols-4 gap-3 mt-5'>
            { Array(25).fill(0).map((_ , index) => <div key={index} className="flex w-52 flex-col gap-4">
                    <div className="skeleton h-32 w-full"></div>
                    <div className="skeleton h-4 w-28"></div>
                    <div className="skeleton h-4 w-full"></div>
                    <div className="skeleton h-4 w-full"></div>
                </div>
            )}
        </div>
    );
};

export default Skeleton;