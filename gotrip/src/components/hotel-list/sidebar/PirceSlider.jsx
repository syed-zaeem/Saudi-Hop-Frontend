// import { useState } from "react";
// // import InputRange from "react-input-range";
// import Slider from "rc-slider";

// const PirceSlider = () => {
//   const [price, setPrice] = useState({
//     value: { min: 0, max: 500 },
//   });

//   const handleOnChange = (value) => {
//     setPrice({ value });
//   };

//   return (
//     <div className="js-price-rangeSlider">
//       <div className="text-14 fw-500"></div>

//       <div className="d-flex justify-between mb-20">
//         <div className="text-15 text-dark-1">
//           <span className="js-lower mx-1">${price.value.min}</span>-
//           <span className="js-upper mx-1">${price.value.max}</span>
//         </div>
//       </div>

//       <div className="px-5">
//         <Slider
//           formatLabel={(value) => ``}
//           minValue={0}
//           maxValue={2000}
//           value={price.value}
//           onChange={(value) => handleOnChange(value)}
//         />
//       </div>
//     </div>
//   );
// };

// export default PirceSlider;

import { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import { setPriceRange } from "@/features/hotelSlice";
import { useDispatch } from "react-redux";

const PriceSlider = () => {
  const [price, setPrice] = useState([1, 5000]); // Use array for range
  const dispatch = useDispatch();

  const handleOnChange = (value) => {
    // alert("The value range is: " + value[0] + value[1]);
    setPrice(value);
  };

  const handleSearchPriceRange = () => {
    console.log("The value range is: " + price[0] + price[1]);
    dispatch(setPriceRange(price))
  }

  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">£{price[0]}</span> -
          <span className="js-upper mx-1">£{price[1]}</span>
        </div>
      </div>

      <div className="px-5">
        <Slider
          range
          min={1}
          max={5000}
          value={price}
          onChange={handleOnChange}
        />
      </div>
      <div className="button-item h-full mt-20">
        <button onClick={handleSearchPriceRange} className="button -dark-1 py-15 px-40 h-full col-12 rounded-0 bg-blue-1 text-white">
          <i className="icon-search text-20 mr-10" />
          Search
        </button>
      </div>
    </div>
  );
};

export default PriceSlider;
