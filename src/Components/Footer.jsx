import React from 'react';

const Footer = () => {
    return (
        <div className=''>
             <div className='bg-red-700 p-5 px-60 mt-5'>
                <img src='./image.png'></img>
            </div>
            <div className='bg-[#222222]'>
                <div className='px-60'>
                    <div className='text-white text-xl border-b border-gray-300 py-5'>বিবিসির ওপর কেন আপনি আস্থা রাখতে পারেন</div>
                    <div className='text-white flex justify-start items-center gap-10 mt-5'>
                        <div>ব্যবহারের শর্তাবলী</div>
                        <div>প্রিভেসি নীতি</div>
                        <div>বিবিসির সাথে যোগাযোগ করুন</div>
                        <div>Do not share or sell my info</div>
                    </div>
                    <div className='text-white flex justify-start items-center gap-13 mt-5 border-b border-gray-300 py-5'>
                        <div>বিবিসি সম্পর্কে</div>
                        <div>কুকিজ</div>
                        <div>অন্যান্য ভাষায় বিবিসির সংবাদ</div>
                    </div>
                    <div className='text-white py-3'>© 2025 বিবিসি। বাইরের কোন সাইটের তথ্যের জন্য বিবিসি দায়বদ্ধ নয়। বাইরের লিংক সম্পর্কে বিবিসির দৃষ্টিভঙ্গি সম্বন্ধে পড়ুন।</div>
                </div>
            </div>
        </div>
    );
};

export default Footer;