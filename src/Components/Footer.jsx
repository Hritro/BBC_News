import React from 'react';

const Footer = () => {
    return (
        <div className=''>
             <div className='bg-red-700 p-5 px-60 mt-5'>
                <img src='./image.png'></img>
            </div>
            <div className='bg-[#222222]'>
                <div className='px-60 cursor-pointer'>
                    <div className='text-white text-xl border-b border-gray-300 py-5 hover:underline'>বিবিসির ওপর কেন আপনি আস্থা রাখতে পারেন</div>
                    <div className='text-white flex justify-start items-center gap-10 mt-5'>
                        <div className='hover:underline'>ব্যবহারের শর্তাবলী</div>
                        <div className='hover:underline'>প্রিভেসি নীতি</div>
                        <div className='hover:underline'>বিবিসির সাথে যোগাযোগ করুন</div>
                        <div className='hover:underline font-semibold'>Do not share or sell my info</div>
                    </div>
                    <div className='text-white flex justify-start items-center gap-13 mt-5 border-b border-gray-300 py-5'>
                        <div className='hover:underline'>বিবিসি সম্পর্কে</div>
                        <div className='hover:underline'>কুকিজ</div>
                        <div className='hover:underline'>অন্যান্য ভাষায় বিবিসির সংবাদ</div>
                    </div>
                    <div className='text-white py-3'>© 2025 বিবিসি। বাইরের কোন সাইটের তথ্যের জন্য বিবিসি দায়বদ্ধ নয়।<span className='hover:underline font-semibold'> বাইরের লিংক সম্পর্কে বিবিসির দৃষ্টিভঙ্গি সম্বন্ধে পড়ুন।</span></div>
                </div>
            </div>
        </div>
    );
};

export default Footer;