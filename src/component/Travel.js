import React from 'react'
import Category from './Category' 
import blogs from './blogsContent';
const Travel = () => {

    const blog = blogs.filter(blog => blog.category === "Travel");
    return (
        <div>
           <Category cat="Travel" blog={blog}/>
        </div>
    )
}

export default Travel
