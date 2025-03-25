import Social2 from "../../common/social/Social2";
import blogsData from "../../../data/blogs";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const DetailsContent = ({ blog }) => {
  return (
    <>
      <h3 className="text-20 fw-500">{blog?.title}</h3>
      {blog.paragraphs.map((paragraph) => (
        <div
          key={paragraph.id}
          className="text-15 mt-20"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(paragraph.content),
          }}
        />
      ))}

      <div className="row y-gap-20 justify-between pt-30">
        <div className="col-auto">
          <div className="d-flex items-center">
            <div className="fw-500 mr-10">Share</div>
            <div className="d-flex items-center">
              <Social2 />
            </div>
          </div>
        </div>
        {/* End social share */}

        <div className="col-auto">
          <div className="row x-gap-10 y-gap-10">
            {blog.tags.map((tag) => (
              <div key={tag} className="col-auto">
                <Link
                  to={`/blog-details/${tag}`}
                  className="button -blue-1 py-5 px-20 bg-blue-1-05 rounded-100 text-15 fw-500 text-blue-1 text-capitalize"
                >
                  {tag}
                </Link>
              </div>
            ))}
          </div>
        </div>
        {/* End tags */}
      </div>
    </>
  );
};

export default DetailsContent;
