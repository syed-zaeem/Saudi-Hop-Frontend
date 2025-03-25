import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Categories = () => {
  const { blogs } = useSelector((state) => state.blogs);

  const allTags = [];
  blogs.map((blog) => {
    blog.tags.map((tag) => allTags.push(tag));
  });

  console.log("All Tags:", allTags);

  const uniqueTags = [...new Set(allTags.map((tag) => tag))];

  console.log("Unique Tags:", uniqueTags);

  const finalTags = {};

  uniqueTags.map((uniqueTag) => (finalTags[uniqueTag] = 0));

  uniqueTags.map((uniqueTag) => {
    blogs.map((blog) => {
      if (blog.tags.includes(uniqueTag)) {
        finalTags[uniqueTag] = finalTags[uniqueTag] + 1;
      }
    });
  });

  console.log("Final Tags:", finalTags);

  // const catContent = [
  //   { id: 1, name: "Hotel", number: "92" },
  //   { id: 2, name: "Car", number: "55" },
  //   { id: 3, name: "Holiday Rental", number: "75" },
  //   { id: 4, name: "Travel Guides", number: "62" },
  //   { id: 5, name: "Flights", number: "34" },
  // ];
  
  return (
    <>
      {Object.keys(finalTags).map((tag) => (
        <Link
          to="/blog-list-v1"
          className="d-flex items-center justify-between text-dark-1"
          key={tag}
        >
          <span className="text-15 text-dark-1">{tag}</span>
          <span className="text-14 text-light-1">{finalTags[tag]}</span>
        </Link>
      ))}
    </>
  );
};

export default Categories;
