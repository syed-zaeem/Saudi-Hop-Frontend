import React, { useEffect, useState } from "react";
import { getAllFaqs, deleteFaqs, createFaqs } from "../api/faqs";
import { MdOutlineDelete } from "react-icons/md";
import CategoryCombobox from "../components/CategoryComboBox";

const ManageFaqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState(""); // Track selected category
  const [categories, setCategories] = useState([]);
  const [formData, setFormData] = useState({ question: "", answer: "" });
  // Fetch FAQs
  useEffect(() => {
    const fetchFaqs = async () => {
      try {
        const data = await getAllFaqs();
        setFaqs(data);
        setCategories([...new Set(data.map((faq) => faq.category))]);
      } catch (error) {
        console.error("Error fetching FAQs:", error);
      }
    };

    fetchFaqs();
  }, []);

  // Handle Delete FAQ
  const removeFaqs = async (id) => {
    try {
      const response = await deleteFaqs(id);
      if (response.success) {
        setFaqs((prevFaqs) => prevFaqs.filter((faq) => faq._id !== id));
      } else {
        console.error("Failed to delete FAQ:", response.error);
      }
    } catch (error) {
      console.error("Error deleting FAQ:", error);
    }
  };

  // Filtered FAQs based on search query & selected category
  const filteredFaqs = faqs.filter(
    (faq) =>
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (selectedCategory ? faq.category === selectedCategory : true)
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newFaq = { ...formData, category: selectedCategory };

    try {
      const response = await createFaqs(newFaq); // ✅ Await the API call

      if (response && response.id) {
        setFaqs((prev) => [...prev, response]); // ✅ Add to state correctly
      }
    } catch (error) {
      console.error("Error creating FAQ:", error);
    }
  };

  return (
    <div className="main-content p-4">
      <h1 className="text-lg my-2 text-blue-600">
        Dashboard / <span className="text-gray-900">Manage FAQs</span>
      </h1>

      <div className="container flex gap-2 flex-col shadow-md p-4 border border-gray-200">
        {/* FAQ Form */}
        {/* Category Dropdown */}
        <CategoryCombobox
          categories={categories}
          setCategories={setCategories}
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <div>
          <input
            type="text"
            value={formData.question}
            onChange={(e) =>
              setFormData((prev) => ({
                ...prev, // Spread previous state
                question: e.target.value, // Update 'question' field
              }))
            }
            required
            className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
            placeholder="Enter the Question"
          />
        </div>

        {/* Answer Textarea */}
        <textarea
          required
          value={formData.answer}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev, // Spread previous state
              answer: e.target.value, // Update 'question' field
            }))
          }
          className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 mt-2"
          placeholder="Answer"
        />
        <button
          type="submit"
          onClick={(e) => {
            handleSubmit(e);
          }}
          className="w-full bg-blue-700 text-white py-2.5 px-5 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
          Create New Faq
        </button>
      </div>

      {/* Search Input */}
      <div className="flex flex-col gap-1 mt-10  shadow-xl p-4 border border-gray-200">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          required
          className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5"
          placeholder="Search by the Question"
        />

        {/* FAQ Table */}
        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-4">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Question
                </th>
                <th scope="col" className="px-6 py-3">
                  Answer
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredFaqs.length > 0 ? (
                filteredFaqs.map((faq) => (
                  <tr key={faq._id} className="border-b border-gray-200">
                    <td className="px-6 py-4 font-medium text-gray-900">
                      {faq.question}
                    </td>
                    <td className="px-6 py-4">{faq.answer}</td>
                    <td className="px-6 py-4">{faq.category}</td>
                    <td className="px-6 py-4">
                      <MdOutlineDelete
                        size={20}
                        className="cursor-pointer text-red-500 hover:text-red-700"
                        onClick={() => removeFaqs(faq._id)}
                      />
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="4"
                    className="px-6 py-4 text-center text-gray-500">
                    No FAQs found
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

export default ManageFaqs;
