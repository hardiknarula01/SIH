import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const BlogCard =({ data }) =>{
    const { image, description,name, date,_id } = data;
    const navigate = useNavigate()
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700" 
        onClick={()=>{
            navigate(`/blogs/${_id}`)
        }}
        >
        <Link href="#">
            <img className="rounded-t-lg" src={image} alt={image} />
        </Link>
        <div className="p-5">
            <a href="#">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white"> {name}</h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
            <p>{data.authorID.name}, {date}</p>
        </div>
    </div>

    )
}
export default BlogCard;