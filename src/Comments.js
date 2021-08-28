import React from 'react'

import comments from './component/blogsComment'


const Comments = ({ info }) => {

    const blog = comments.filter(comment => comment.blog_key === info);
   
    return (
        <section class="text-gray-600 body-font">
            <div id="comments-sec" class="container mt-20 px-5 py-2 mx-auto">
                <div className="line2"></div>
                <h4 className="text-3xl text-indigo-500 text-indigo-500 tracking-widest font-xl title-font mb-3" >Reviews</h4>
                <div class="flex flex-wrap -m-4">
                    {
                        blog.map(comment => (
                            <div class="lg:w-1/2 lg:mb-0 mt-3 mb-6 p-4">
                                <div class="h-full">
                                    <div className="flex">
                                        <img alt="testimonial" class="w-20 h-20 mb-8 object-cover block rounded-full inline-block border-2 border-gray-200 bg-gray-100" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFWBnyvJtrWYVL5q2Nwl1UkCOxOPxFGoORjg&usqp=CAU" />
                                        <div className="mx-4 mx-5 my-4 ">
                                            <h2 class="text-gray-900 font-medium title-font tracking-wider text-sm">{comment.name}</h2>
                                            <p class="text-gray-500">Writer</p>
                                        </div>
                                    </div>
                                    <p class="leading-relaxed">{comment.detail}</p>
                                    <span class="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
                                </div>
                            </div>

                        ))
                    }
                </div>

            </div>
        </section>
    )
}

export default Comments

