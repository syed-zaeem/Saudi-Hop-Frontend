import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';

const ManageBlogs = () => {
    const [searchQuery, SetSearchQuery] = useState("");

    return (
        <div>
            <Navbar />
            <div className='main-content  p-4'>
                <h1 className='text-lg my-2 text-blue-600'>Dashboard / <span className='text-gray-900'>Manage Blogs</span> </h1>
                <div className='flex flex-row gap-1'>
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => SetSearchQuery(e.target.value)}
                        required
                        className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-2.5"
                        placeholder="Search"
                    />
                    <Link
                        to={"/create/blog"}
                        className="text-white w-[200px] h-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                    >
                        + Create new Blog
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default ManageBlogs
