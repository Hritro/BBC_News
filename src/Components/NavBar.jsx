import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router";
import HeadLines from "./HeadLines";

const NavBar = () => {
    const[categories,setCategories] = useState([])
    const {id} = useParams()
    
    useEffect(() =>{
        fetch(`https://news-api-fs.vercel.app/api/categories`)
        .then(res => res.json())
        .then(data => {
            setCategories(data.categories)
        })
    }, [])
    
    // const cate = categories.find(item => item.id == id).title
    // console.log(cate)


    return (
        <div className=''>
            <div className="bg-red-600">
                <div className='py-5 max-w-5xl mx-auto'>
                    <img className="invert" src='/image.png'></img>
                </div>
            </div>
            
            <div className="max-w-5xl mx-auto">
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
                { (categories.length> 0 && id) && <h1 className="text-3xl font-bold pt-3 py-2">{categories.find(item => item.id == id)?.title}</h1>}
            </div>
        </div>
    );
};

export default NavBar;