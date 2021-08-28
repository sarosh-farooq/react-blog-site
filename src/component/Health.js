import React from 'react'
import Category from './Category'

import blogs from './blogsContent';

const Health = () => {

    const blog = blogs.filter(blog => blog.category === "Health");


    return (
        <div>
           <Category cat="Health" blog={blog}/>
        </div>
    )
}

export default Health
