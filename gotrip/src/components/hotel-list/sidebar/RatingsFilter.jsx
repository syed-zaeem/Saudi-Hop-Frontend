import { useState } from "react";
import { useDispatch } from "react-redux";
import { setRating, resetRating } from "@/features/hotelSlice";

const RatingsFilter = () => {
  const ratings = [1, 2, 3, 4, 5];
  const [activeRating, setActiveRating] = useState(null);

  const dispatch = useDispatch()

  const handleRatingClick = (rating) => {
    // alert(rating)
    setActiveRating(rating === activeRating ? null : rating);
    dispatch(setRating(rating))
  };

  const handleResetRating = () => {
    setActiveRating(null)
    dispatch(resetRating())
  }

  return (
    <>
      {ratings.map((rating) => (
        <div className="col-auto" key={rating}>
          <button
            className={`button -blue-1 bg-blue-1-05 text-blue-1 py-5 px-20 rounded-100 ${
              rating === activeRating ? "active" : ""
            }`}
            onClick={() => handleRatingClick(rating)}
          >
            {rating}
          </button>
        </div>
      ))}
       <div className="button-item h-full mt-20">
        <button onClick={handleResetRating} className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white">
          <i className="icon-search text-20 mr-10" />
          Reset Rating
        </button>
      </div>
    </>
  );
};

export default RatingsFilter;
