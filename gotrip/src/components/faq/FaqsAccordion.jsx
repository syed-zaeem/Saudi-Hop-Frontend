import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqItems = [
  {
    id: 1,
    question: "What is Material Tailwind?",
    answer:
      "Material Tailwind is a free and open-source library that combines Material Design with Tailwind CSS.",
  },
  {
    id: 2,
    question: "How to use Material Tailwind?",
    answer:
      "You can install Material Tailwind via npm or yarn and use the pre-built components for faster development.",
  },
  {
    id: 3,
    question: "What can I do with Material Tailwind?",
    answer:
      "You can create modern, responsive, and beautiful UIs quickly using Material Tailwind's components and utilities.",
  },
];

export function FaqsAccordion() {
  const [open, setOpen] = React.useState(null);

  const handleOpen = (id) => setOpen(open === id ? null : id);

  return (
    <>
      {faqItems.map((item) => (
        <Accordion
          key={item.id}
          open={open === item.id}
          className="mb-2 rounded-md border border-blue-gray-100 p-4"
        >
          <AccordionHeader
            onClick={() => handleOpen(item.id)}
            className={`border-b-0 transition-colors ${
              open === item.id ? "text-blue-600" : ""
            }`}
          >
            <div className="flex justify-between items-center w-full md:text-md">
              {item.question}
              {open === item.id ? <FaMinus /> : <FaPlus />}
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
