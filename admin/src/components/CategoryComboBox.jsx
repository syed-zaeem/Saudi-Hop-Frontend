import React, { useState } from "react";
import {
  Combobox,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { MdAdd } from "react-icons/md";

const CategoryCombobox = ({
  categories,
  setCategories,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [query, setQuery] = useState("");

  // Filter categories based on search query
  const filteredCategories =
    query === ""
      ? categories
      : categories.filter((category) =>
          category.toLowerCase().includes(query.toLowerCase())
        );

  // Check if the typed query is a new category
  const isNewCategory = query.length > 0 && !categories.includes(query);

  // Handle adding a new category
  const handleAddCategory = () => {
    if (isNewCategory) {
      setCategories([...categories, query]); // Add category to list
      setSelectedCategory(query); // Select new category
      setQuery(""); // Clear input
    }
  };

  return (
    <Combobox value={selectedCategory} onChange={setSelectedCategory}>
      <div className="relative w-full mt-2">
        {/* Search / Input Field */}
        <ComboboxInput
          onChange={(event) => setQuery(event.target.value)}
          className="w-full border border-gray-300 rounded-md p-2 text-sm text-gray-900 outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Search or select a category"
        />

        {/* Dropdown Options */}
        <ComboboxOptions className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-60 overflow-auto rounded-md border border-gray-300 text-sm">
          {/* Show "Add New Category" option if the typed query doesn't exist */}
          {isNewCategory && (
            <div
              className="p-2 flex items-center gap-2 cursor-pointer hover:bg-blue-500 hover:text-white"
              onClick={handleAddCategory}>
              <MdAdd size={18} className="text-blue-500 hover:text-white" />
              <span>Add "{query}"</span>
            </div>
          )}

          {/* Show existing categories */}
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category, index) => (
              <ComboboxOption
                key={index}
                value={category}
                className={({ active }) =>
                  `cursor-pointer select-none p-2 ${
                    active ? "bg-blue-500 text-white" : "text-gray-900"
                  }`
                }>
                {category}
              </ComboboxOption>
            ))
          ) : (
            <div className="p-2 text-gray-500 text-center">
              No categories found
            </div>
          )}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
};

export default CategoryCombobox;
