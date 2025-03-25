import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
// import { updateFaq } from "@/features/faqSlice";

const FaqsEditForm = () => {
  const { id } = useParams();
  const [faq, setFaq] = useState({
    category: "",
    question: "",
    answer: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getFaqById = async (id) => {
    try {
      let res = await fetch(`http://localhost:5000/faqs/${id}`);

      // console.log("In slice: " , id)
      const response = await res.json();

      console.log("Now in function ", response);

      setFaq({
        category: response.category,
        question: response.question,
        answer: response.answer,
      });
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    // dispatch(getFaqById(id));
    getFaqById(id);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("The updated faq is: " , faq)
    dispatch(
      // updateFaq({id: id, updatedFaq: faq})
    );
    navigate("/dashboard/db-Faqs");
  };

  const onChange = (e) => {
    setFaq({ ...faq, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-3xl font-semibold text-gray-800">Edit FAQ</h1>
          <div className="text-lg text-gray-600 mb-6">
            Make the changes in following form to edit the details of FAQ.
          </div>
        </div>
      </div>

      <div className="faq-form">
        <h2 className="form-heading">FAQ Form</h2>
        <form className="faq-form-content" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="category" className="form-label">
              Category
            </label>
            <select
              id="category"
              name="category"
              className="categoryDropdown form-input"
              onChange={onChange}
              value={faq.category}
            >
              <option value="Tourist Visa">Tourist Visa</option>
              <option value="Entry Requirements">Entry Requirements</option>
              <option value="General Information">General Information</option>
              <option value="GCC Residents">GCC Residents</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="question" className="form-label">
              Question
            </label>
            <input
              type="text"
              id="question"
              name="question"
              className="form-input"
              placeholder="Enter the question"
              onChange={onChange}
              value={faq.question}
            />
          </div>

          <div className="form-group">
            <label htmlFor="answer" className="form-label">
              Answer
            </label>
            <textarea
              id="answer"
              name="answer"
              className="form-textarea"
              placeholder="Enter the answer"
              onChange={onChange}
              rows="6"
              value={faq.answer}
            ></textarea>
          </div>

          <div className="form-group text-right">
            <button type="submit" className="form-button">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FaqsEditForm;
