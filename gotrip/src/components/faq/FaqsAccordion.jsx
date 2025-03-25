import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { useSelector } from "react-redux";

export function FaqsAccordion({ category }) {
  const [open, setOpen] = React.useState(null);
  const { faqs, loading, error } = useSelector((state) => state.faqs);

  const handleOpen = (id) => setOpen(open === id ? null : id);

  // Ensure faqs is an array and filter based on category
  const filteredFaqs = Array.isArray(faqs) ? faqs.filter(item => item.category === category) : [];

  if (loading) {
    return <p>Loading FAQs...</p>;
  }

  if (error) {
    return <p className="text-red-500">Error: {error}</p>;
  }

  if (filteredFaqs.length === 0) {
    return <p className="text-gray-500">No FAQs available for this category.</p>;
  }

  return (
    <>
      {filteredFaqs.map((item) => (
        <Accordion
          key={item._id} // Using _id from JSON
          open={open === item._id}
          className="mb-2 rounded-md border border-blue-gray-100 p-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(item._id)}
            className={`border-b-0 transition-colors ${
              open === item._id ? "text-blue-600" : ""
            }`}
          >
            <div className="flex justify-between items-center w-full md:text-md">
              {item.question}
              {open === item._id ? <FaMinus /> : <FaPlus />}
            </div>
          </AccordionHeader>

          <AccordionBody className="pt-0 text-base font-normal">
            {item.answer}
          </AccordionBody>
        </Accordion>
      ))}
    </>
  );
}

export default FaqsAccordion;
