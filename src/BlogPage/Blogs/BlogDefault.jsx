import React, { useEffect, useState } from 'react'
import FeaturedPost from './sections/FeaturedPost';
import Layout from '../../Global/Layout/Layout';
import LatestBlog from './sections/LatestBlog';
import BlogSection from './sections/BlogSection';
import axios from 'axios'

const BlogDefault = ()=>{
    const sampleCardData = {
        image: "https://dummyimage.com/700x400/0000ff/fff",
        title: "Noteworthy technology acquisitions 2021",
        description: "Here are the biggest enterprise technology acquisitions of 2021 so far, in reverse chronological order.",
        author: "John Doe",
        date: "July 8, 2024"
      };
    
      const samplePostsData = [
        { description: "Post 1 description", author: "Author 1", date: "Date 1" },
        { description: "Post 2 description", author: "Author 2", date: "Date 2" },
        { description: "Post 3 description", author: "Author 3", date: "Date 3" },
        { description: "Post 4 description", author: "Author 4", date: "Date 4" },
        { description: "Post 5 description", author: "Author 5", date: "Date 5" },
      ];

      const [dataByCount,setDataByCount] = useState([]);

      const fetchData = async () => {
        console.log("blogs");
        try {
          const {data} = await axios.get('http://localhost:9000/blog/topBlogsByView')
          console.log(data);
          setDataByCount(data);
        } catch (error) {
          console.log('error fetching: ',error.message)
        }
      }

      useEffect(()=>{
        fetchData();
      },[])



    return (
        // <div className="pt-32 ">
        // <FeaturedPost data={sampleCardData}/>
        // <LatestBlog data={samplePostsData}/>

        // </div>
        <Layout>
            <div className="flex flex-col h-auto p-5 pt-32">
      <div className="flex w-full h-1/2">
        <div className="w-1/2 p-2">
          <FeaturedPost data={sampleCardData} />
        </div>
        <div className="w-1/2 p-2 h-full overflow-y-auto">
          {dataByCount.map((post, index) => (
            <LatestBlog key={index} data={post} />
          ))}
        </div>
      </div>
      <BlogSection />
    </div>
        </Layout>
    )
}
export default BlogDefault;