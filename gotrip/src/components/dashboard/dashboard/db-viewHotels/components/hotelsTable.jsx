// import React from 'react'
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const HotelsTable = () => {

    const navigate = useNavigate();

  const handleEdit = (row) => {
    console.log("Edit row:", row.id);
    // Add your edit logic here
  };

  const handleDelete = (row) => {
    console.log("Delete row:", row.director);
    // Add your delete logic here
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Area",
      selector: (row) => row.area,
      sortable: true,
    },
    {
      name: "Discount",
      selector: (row) => row.discount,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Rating",
      selector: (row) => row.rating,
      sortable: true,
    },
    {
      name: "Description",
      selector: (row) => row.description,
      sortable: true,
    },
    {
      name: "Edit",
      cell: (row) => (
        <div>
          <button className="tableEditButton" onClick={() => handleEdit(row)}>Edit</button>
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
          <button className="tableDeleteButton" onClick={() => handleDelete(row)}>Delete</button>
        </div>
      ),
      ignoreRowClick: true, // Prevents row click from triggering
      allowOverflow: true, // Ensures the cell does not overflow
      button: true, // Marks this column as button-like
    },
  ];

  const data = [
    {
      id: 1,
      name: "Beetlejuice",
      area: "good",
      discount: 10,
      price: 100,
      rating: 3,
      description: "This is description for 1."
    },
    {
      id: 2,
      name: "Beetlejuice",
      area: "good",
      discount: 10,
      price: 100,
      rating: 3,
      description: "This is description for 2."
    },
    {
      id: 3,
      name: "Beetlejuice",
      area: "good",
      discount: 10,
      price: 100,
      rating: 3,
      description: "This is description for 3."
    },
  ];

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
          <h1 className="text-2xl font-semibold text-gray-800" style={{textAlign: 'center', fontFamily: "'Arial', sans-serif"}}>View All Hotels</h1>
        </div>
      </div>

      <DataTable
        title="Hotels List"
        columns={columns}
        data={data}
        defaultSortFieldId={1}
        pagination
        customStyles={customStyles} // Apply custom styles
      />

      <div>
       <button className="addBlogButton" onClick={()=>{navigate("/dashboard/db-addHotels")}}>Add a New Hotel</button> 
      </div>
    </div>
  )
}

export default HotelsTable;
