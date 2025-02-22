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

const PriceSlider = () => {
  const [price, setPrice] = useState([0, 500]); // Use array for range

  const handleOnChange = (value) => {
    setPrice(value);
  };

  return (
    <div className="js-price-rangeSlider">
      <div className="text-14 fw-500"></div>

      <div className="d-flex justify-between mb-20">
        <div className="text-15 text-dark-1">
          <span className="js-lower mx-1">${price[0]}</span> -
          <span className="js-upper mx-1">${price[1]}</span>
        </div>
      </div>

      <div className="px-5">
        <Slider
          range
          min={0}
          max={2000}
          value={price}
          onChange={handleOnChange}
        />
      </div>
    </div>
  );
};

export default PriceSlider;
