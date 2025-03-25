import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
// import { getAllFaqs, deleteFaq } from "@/features/faqSlice";

const FaqsTable = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { faqs, loading, error } = useSelector((state) => state.faqs);

  useEffect(() => {
    // dispatch(getAllFaqs());
  }, []);

  const handleEdit = (row) => {
    console.log("Edit row:", row._id);
    console.log(faqs);
    navigate(`/dashboard/db-editFaqs/${row._id}`);
    // Add your edit logic here
  };

  const handleDelete = (row) => {
    console.log("Delete row:", row._id);
    // dispatch(deleteFaq(row._id));
    // dispatch(getAllFaqs);
    // Add your delete logic here
  };

  const columns = [
    {
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Question",
      selector: (row) => row.question,
      sortable: true,
    },
    {
      name: "Answer",
      selector: (row) => row.answer,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <div>
          <button className="tableEditButton" onClick={() => handleEdit(row)}>
            Edit
          </button>
        </div>
      ),
      ignoreRowClick: true, // Prevents row click from triggering
      allowOverflow: true, // Ensures the cell does not overflow
      button: true, // Marks this column as button-like
    },
    {
      name: "Delete",
      cell: (row) => (
        <div>
          <button
            className="tableDeleteButton"
            onClick={() => handleDelete(row)}
          >
            Delete
          </button>
        </div>
      ),
      ignoreRowClick: true, // Prevents row click from triggering
      allowOverflow: true, // Ensures the cell does not overflow
      button: true, // Marks this column as button-like
    },
  ];

  // const data = [
  //   {
  //     id: 1,
  //     category: "Beetlejuice",
  //     question: "good",
  //     answer: "answer is 1",
  //   },
  //   {
  //     id: 2,
  //     category: "lemon juice",
  //     question: "bad",
  //     answer: "answer is 4",
  //   },
  //   {
  //     id: 3,
  //     category: "Ghostbusters",
  //     question: "not bad not good",
  //     answer: "answer is 3",
  //   },
  // ];

  // Define custom styles for headers and rows

  const customStyles = {
    header: {
      style: {
        fontSize: "20px", // Font size for header
        fontWeight: "bold", // Make header bold
        fontFamily: "'Arial', sans-serif", // Custom font family for header
        color: "#333", // Header font color
      },
    },
    rows: {
      style: {
        fontSize: "16px", // Font size for rows
        fontFamily: "'Arial', sans-serif", // Custom font family for rows
        color: "#555", // Data font color
      },
    },
    headCells: {
      style: {
        fontSize: "18px", // Font size for header cells
        fontWeight: "600", // Header cell font weight
        fontFamily: "'Arial', sans-serif", // Custom font for header cells
        color: "#222", // Header cell font color
      },
    },
    cells: {
      style: {
        fontSize: "14px", // Font size for data cells
        fontFamily: "'Arial', sans-serif",
        color: "#444", // Data cell font color
      },
    },
  };

  return (
    <div>
      <div className="pb-40 lg:pb-32 md:pb-32">
        <div className="col-12">
          <h1
            className="text-2xl font-semibold text-gray-800"
            style={{ textAlign: "center", fontFamily: "'Arial', sans-serif" }}
          >
            View All FAQs
          </h1>
        </div>
      </div>

      <DataTable
        title="FAQs List"
        columns={columns}
        data={faqs}
        defaultSortFieldId={1}
        pagination
        customStyles={customStyles} // Apply custom styles
      />

      <div>
        <button
          className="addBlogButton"
          onClick={() => {
            navigate("/dashboard/db-addFaqs");
          }}
        >
          Add a New FAQ
        </button>
      </div>
    </div>
  );
};

export default FaqsTable;
