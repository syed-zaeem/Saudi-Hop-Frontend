import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
// import blogs from "../../data/blogs";
// import { blogs } from "../data/blogs";
import ReactPaginate from "react-paginate";
import DOMPurify from "dompurify";
import { useSelector } from "react-redux";
import UploadFiles from "@/features/fileSlice";

const Blog2 = () => {
  const [blogImages, setBlogImages] = useState({});
  const itemsPerPage = 3; // Number of blogs per page

  const [currentPage, setCurrentPage] = useState(0);

  const { blogs, loading, error } = useSelector((state) => state.blogs);

  // Calculate the blogs to display based on the current page
  const offset = currentPage * itemsPerPage;
  const currentBlogs = blogs.slice(offset, offset + itemsPerPage);
  const pageCount = Math.ceil(currentBlogs.length / itemsPerPage);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      fetchBlogImages(blogs);
    }
  }, [blogs]);

  const fetchBlogImages = async (blogs) => {
    const responseImages = await UploadFiles.getBlogImages(blogs);
    setBlogImages(responseImages);
  };

  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };

  const formatDate = (isoString) => {
    const date = new Date(isoString);
    return new Intl.DateTimeFormat("en-US", {
      day: "numeric",
      month: "long",
      year: "numeric",
    }).format(date);
  };

  return (
    <>
      {currentBlogs.map((item) => (
        <Link
          to={`/blog-details/${item._id}`}
          className="blogCard -type-1 col-12"
          key={item._id}
        >
          <div className="row y-gap-15 md:justify-center md:text-center text-left md:mb-30 ">
            <div className="col-md-5 col-lg-4 md:h-52 lg:h-48">
              <div className="blogCard__image rounded-4 w-full h-full">
                <img
                  className="img-fluid w-full h-full"
                  // src={item.image}
                  src={blogImages[item._id]}
                  alt={item.title}
                />
              </div>
            </div>
            <div className="col-md-7 col-lg-8">
              <div className="text-15 text-light-1">
                {formatDate(item.createdAt)}
              </div>
              <h3 className="text-22 text-dark-1 mt-10 md:mt-5">
                {item.title}
              </h3>
              <div
                className="text-15 lh-16 text-light-1 mt-10 md:mt-5"
                // dangerouslySetInnerHTML={{ __html: item.paragraphs[0].content }}
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    item.paragraphs[0].content.slice(
                      0,
                      item.paragraphs[0].content.indexOf(".") + 1
                    )
                  ),
                }}
              />
            </div>
          </div>
        </Link>
      ))}

      <div className="layout-pt-md layout-pb-lg">
        <ReactPaginate
          previousLabel={"Previous"}
          nextLabel={"Next"}
          breakLabel={"..."}
          pageCount={Math.ceil(blogs.length / itemsPerPage)}
          marginPagesDisplayed={2}
          pageRangeDisplayed={3}
          onPageChange={handlePageChange}
          containerClassName={
            "flex justify-center items-center rounded-lg overflow-hidden"
          }
          activeClassName={
            "bg-blue-600 text-white border border-blue-600 px-4 py-2"
          }
          pageClassName={
            "px-20 py-2 border border-blue-300 text-blue-600 hover:bg-blue-100 transition cursor-pointer"
          }
          previousClassName={`text-lg fw-500 px-20 py-2 border border-gray-300 ${
            currentPage === 0
              ? "text-gray-300 cursor-not-allowed"
              : "text-blue-600 hover:bg-blue-100 transition cursor-pointer"
          }`}
          nextClassName={`text-lg fw-500 px-20 py-2 border border-gray-300 ${
            currentPage === Math.ceil(blogs.length / itemsPerPage)
              ? "text-gray-300 cursor-not-allowed"
              : "text-blue-600 hover:bg-blue-100 transition cursor-pointer"
          }`}
          breakClassName={"px-20 py-2 border border-gray-300 text-gray-400"}
          disabledClassName={
            "px-20 py-2 border border-gray-300 text-gray-300 cursor-not-allowed"
          }
        />
      </div>
      {/* <Pagination /> */}
    </>
  );
};

export default Blog2;
