import React from 'react'
import { Link } from 'react-router-dom';

const Category = ({ cat, blog }) => {
    // const {slug} = useParams();




    return (

        <section  class="text-gray-600 body-font overflow-hidden mb-10">
            <div  class="container px-5 py-24 mx-auto">
            <h1 className="text-3xl text-indigo-500 tracking-widest font-xl title-font my-10">{cat} Blogs</h1>
                <div class="-my-8 divide-y-2 divide-gray-100">
                    {

                        blog.map(filter_blog => (
                            <div class="py-8 flex flex-wrap md:flex-nowrap">
                                <div class="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                                    <span class="font-semibold title-font text-gray-700">{filter_blog.category}</span>
                                    <span class="mt-1 text-gray-500 text-sm">12 Jun 2019</span>
                                </div>
                                <div class="md:flex-grow">
                                    <h2 class="text-2xl font-medium text-gray-900 title-font mb-2">{filter_blog.title}</h2>
                                    <p class="leading-relaxed">{filter_blog.summary}</p>
                                    <Link  class="text-indigo-500 inline-flex items-center mt-4" to={`/blog/${filter_blog.slug}`}>Read more
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </Link>
                                    
                                </div>
                            </div>
                        )

                        )
                    }

                </div>
            </div>
        </section>


    )

}

export default Category
