import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import HeadLines from "./HeadLines";

const NavBar = () => {
    const[categories,setCategories] = useState([])
    
    useEffect(() =>{
        fetch(`https://news-api-fs.vercel.app/api/categories`)
        .then(res => res.json())
        .then(data => {
            setCategories(data.categories)
        })
    }, [])
    console.log(categories)
    return (
        <div className=''>
            <div className='bg-red-700 p-5'>
                <img src='./image.png'></img>
            </div>
            
            <HeadLines></HeadLines>
            <div className="flex gap-5 p-3 border-b border-b-gray-300">
                <div>
                    <NavLink to='/'>মূলপাতা</NavLink>
                </div>

                {
                    categories.slice(1).map(category =><div key={category.id}>
                        <NavLink to={`/page/${category.id}`}>{category.title}</NavLink>
                    </div>)
                }
            </div>
        </div>
    );
};

export default NavBar;