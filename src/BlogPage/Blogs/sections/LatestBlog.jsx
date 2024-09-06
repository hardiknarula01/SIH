import React from 'react'

const LatestBlog = ({data}) =>{
    const { description, date } = data;
    return (

          <div className="p-5 bg-white border-b border-gray-200">
            <p>Hii</p>
            <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
              {description}
            </p>
            <p>{data.authorID.name}, {date}</p>
          </div>
    )
}
export default LatestBlog;