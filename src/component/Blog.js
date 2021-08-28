import React from 'react'
import { useState } from 'react'
import blogs from './blogsContent'
import './blog.css'
import { useParams } from 'react-router-dom'
import Category from './Category'
import Comments from '../Comments'
import call_comment from './Add_comment'



const Blog = () => {
    let i = 1;
    const { name } = useParams();
    const blog = blogs.find(blog => blog.slug === name);
    let cate = blog.category;

    let blog_id = blog.id;

    const other = blogs.filter(other => other.category === cate && other.slug !== blog.slug);


    return (

        <section class="text-gray-600 body-font overflow-hidden mb-10">
            <div class="container px-5 py-24 mx-auto">

                <div class="-my-8 divide-y-2 divide-gray-100">


                    <div className="blogs">
                        <h3 class="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest my-5">{blog.category}</h3>
                        <h1 className="text-3xl text-indigo-500 tracking-widest font-xl title-font mt-0 mb-4"> {blog.title}</h1>

                        <p>{blog.summary}</p>
                        {

                            blog.detail.map(detail => (

                                <div className="blog">
                                    <h2 className="text-xl text-indigo-500 tracking-widest font-xl title-font  my-4">{i++}. {detail.heading}</h2>

                                    <p>{detail.detail}</p>
                                </div>
                            )
                            )
                        }

                    </div>

                  

                </div>

                
            </div>

            <Category blog={other} cat="Other" />

            <Comments info ={blog_id}/>


            <section class="text-gray-600 body-font">
                
                <div class="container px-5 py-24 mx-auto border-t-2 pt-14">
                    <div className="comment flex flex-col">
                        <h4 className="text-3xl text-indigo-500 tracking-widest font-xl title-font my-4" >Write Comment Here</h4>
                        <input type="text" placeholder="Name" className=" w-1/2 my-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
                        <textarea  name="comment" id="" cols="30" rows="10" placeholder="Write a comment" className="w-1/2 my-3 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-500 focus:bg-white focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out" ></textarea>
                        <button onClick={() => alert('Review is submitted')} class="w-1/6    text-white bg-indigo-500 border-0 py-2 px-3 focus:outline-none hover:bg-indigo-600 rounded text-lg my-3 ">Send</button>

                    </div>
                </div>
            </section>
           
        </section >

    )
}

export default Blog
