import React from 'react'
import Category from './Category'
import blogs from './blogsContent';

const Technology = () => {

    const blog = blogs.filter(blog => blog.category === "Technology");
    return (
        <div>
             <Category cat="Technology" blog={blog}/>
        </div>
    )
}

export default Technology
