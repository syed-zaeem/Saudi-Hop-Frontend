import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { Link } from "react-router-dom";
import { getAllBlogs, removeBlog } from "../api/blog";
import { MdOutlineDelete } from "react-icons/md";

const ManageBlogs = () => {
  const [searchQuery, SetSearchQuery] = useState("");
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogList = async () => {
      // debugger;
      const blogList = await getAllBlogs();
      setBlogs(blogList);
    };
    fetchBlogList();
  }, []);

  const handleRemoveBlog = async (_id) => {
    await removeBlog(_id);
    setBlogs((prevBlogs) => prevBlogs.filter((blog) => blog._id !== _id));
  };

  return (
    <div>
      {/* <Navbar /> */}
      <div className="main-content  p-4">
        <h1 className="text-lg my-2 text-blue-600">
          Dashboard / <span className="text-gray-900">Manage Blogs</span>{" "}
        </h1>
        <div className="flex flex-row gap-1">
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
            className="text-white w-[200px] h-full bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            + Create new Blog
          </Link>
        </div>

        {/* Blog Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  Tags
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {blogs.length > 0 ? (
                blogs.map((blog) => (
                  <tr key={blog._id} className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {blog.title}
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex flex-wrap gap-1">
                        {blog.tags &&
                          blog.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-sm">
                              {tag}
                            </span>
                          ))}
                      </div>
                    </td>
                    <td className="px-6 py-4">{blog.createdAt}</td>
                    <td className="px-6 py-4">
                      <MdOutlineDelete
                        size={20}
                        onClick={() => handleRemoveBlog(blog._id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="5"
                    className="px-6 py-4 text-center text-gray-500">
                    No blogs found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageBlogs;
