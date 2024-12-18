// import React from 'react'
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";

const PackagesTable = () => {

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
      name: "Category",
      selector: (row) => row.category,
      sortable: true,
    },
    {
      name: "Title",
      selector: (row) => row.title,
      sortable: true,
    },
    {
      name: "Price",
      selector: (row) => row.price,
      sortable: true,
    },
    {
      name: "Days",
      selector: (row) => row.days,
      sortable: true,
    },
    {
      name: "Hotel",
      selector: (row) => row.hotel,
      sortable: true,
    },
    {
      name: "City",
      selector: (row) => row.city,
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
      category: "Beetlejuice",
      title: "good",
      price: 100,
      days: 10,
      hotel: "Hotel",
      city: "Lahore 1"
    },
    {
      id: 2,
      category: "Beetlejuice",
      title: "good",
      price: 100,
      days: 10,
      hotel: "Hotel",
      city: "Lahore 2"
    },
    {
      id: 3,
      category: "Beetlejuice",
      title: "good",
      price: 100,
      days: 10,
      hotel: "Hotel",
      city: "Lahore 3"
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
          <h1 className="text-2xl font-semibold text-gray-800" style={{textAlign: 'center', fontFamily: "'Arial', sans-serif"}}>View All Packages</h1>
        </div>
      </div>

      <DataTable
        title="Packages List"
        columns={columns}
        data={data}
        defaultSortFieldId={1}
        pagination
        customStyles={customStyles} // Apply custom styles
      />

      <div>
       <button className="addBlogButton" onClick={()=>{navigate("/dashboard/db-addPackages")}}>Add a New Package</button> 
      </div>
    </div>
  )
}

export default PackagesTable
