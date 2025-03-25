import React, { useState } from "react";
import { useDispatch } from "react-redux";
// import { addNewFaq } from "@/features/faqSlice";
import { useNavigate } from "react-router-dom";

const FaqsForm = () => {
  const [newFaq, setNewFaq] = useState({
    category: "",
    question: "",
    answer: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const onChange = (e) => {
    setNewFaq({...newFaq, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(newFaq)
    // dispatch(addNewFaq(newFaq))
    navigate("/dashboard/db-faqs")
  }

  return (
    <div>
      <div className="row y-gap-20 justify-between items-end pb-60 lg:pb-40 md:pb-32">
        <div className="col-12">
          <h1 className="text-3xl font-semibold text-gray-800">Add New FAQ</h1>
          <div className="text-lg text-gray-600 mb-6">
            Use the form below to add a new frequently asked question to the
            database.
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
              value={newFaq.category}
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
              value={newFaq.question}
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
              rows="6"
              onChange={onChange}
              value={newFaq.answer}
            ></textarea>
          </div>

          <div className="form-group text-right">
            <button type="submit" className="form-button">
              Add FAQ
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FaqsForm;
