import { useEffect } from "react";
import { useState } from "react";
import Blog from "../blog/Blog";

const Blogs = ({handleBookMark, handleMakeAdRead}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('fakeData.json')
        .then(res=> res.json())
        .then(data=> setBlogs(data))
    },[])
    
    return (
        <div className="md:w-2/3">
            <h2>Blogs : {blogs.length}</h2>
            {
                blogs.map(blog => <Blog 
                    key={blog.id} 
                    blog={blog} 
                    handleBookMark={handleBookMark}
                    handleMakeAdRead={handleMakeAdRead}
                    ></Blog>)
            }
        </div>
    );
};

export default Blogs;