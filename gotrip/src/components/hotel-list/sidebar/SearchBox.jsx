import { useState } from "react";
import { setName } from "@/features/hotelSlice";
import { useSelector, useDispatch } from "react-redux";

const SearchBox = () => {

  const [filteredName, setFilteredName] = useState("")
  const dispatch = useDispatch()

  const onChange = (e) => {
    setFilteredName(e.target.value)
    // console.log(e.target.value)
  }

  const handleSearch = (event) => {
    event.preventDefault();
    console.log("The filtered name is:" + filteredName)
    dispatch(setName(filteredName))
    // Your search logic here
  };

  return (
    <form onSubmit={handleSearch}>
      <div className="single-field relative d-flex items-center py-10">
        <input
          className="pl-50 border-light text-dark-1 h-50 rounded-8"
          type="text"
          placeholder="e.g. The Montcalm"
          // required
          onChange={onChange}
          // value={filteredName}
        />
        <button type="submit" className="absolute d-flex items-center h-full">
          <i className="icon-search text-20 px-15 text-dark-1" />
        </button>
      </div>
    </form>
  );
};

export default SearchBox;
