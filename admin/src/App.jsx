// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard"; // Your dashboard component
import ProtectedRoute from "./components/ProtectedRoute";
import ManageBlogs from "./pages/ManageBlogs";
import CreateBlog from "./pages/CreateBlog";
import ManageFaqs from "./pages/ManageFaqs";
import ManageHotels from "./pages/ManageHotels";
import CreateHotel from "./pages/CreateHotel";
import ManagePackage from "./pages/ManagePackages";
import CreatePackage from "./pages/CreatePackage";
import EditPackage from "./pages/EditPackage";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard />
            </ProtectedRoute>
          }
        />
        {/* Blogs */}
        <Route
          path="/manage-blogs"
          element={
            <ProtectedRoute>
              <Dashboard>
                <ManageBlogs />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/create/blog"
          element={
            <ProtectedRoute>
              <Dashboard>
                <CreateBlog />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        {/* FAQs */}
        <Route
          path="/manage-Faqs"
          element={
            <ProtectedRoute>
              <Dashboard>
                <ManageFaqs />
              </Dashboard>
            </ProtectedRoute>
          }
        />

        {/* Hotels */}
        <Route
          path="/manage-hotels"
          element={
            <ProtectedRoute>
              <Dashboard>
                <ManageHotels />
              </Dashboard>
            </ProtectedRoute>
          }
        />

        {/* Hotels */}
        <Route
          path="/create/hotel"
          element={
            <ProtectedRoute>
              <Dashboard>
                <CreateHotel />
              </Dashboard>
            </ProtectedRoute>
          }
        />

        <Route
          path="/edit/hotel/:id"
          element={
            <ProtectedRoute>
              <Dashboard>
                <CreateHotel isEditableMode={true} />
              </Dashboard>
            </ProtectedRoute>
          }
        />

        {/* Package */}
        <Route
          path="/manage-package"
          element={
            <ProtectedRoute>
              <Dashboard>
                <ManagePackage />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/create/package"
          element={
            <ProtectedRoute>
              <Dashboard>
                <CreatePackage />
              </Dashboard>
            </ProtectedRoute>
          }
        />
        <Route
          path="/edit/package/:id"
          element={
            <ProtectedRoute>
              <Dashboard>
                <EditPackage />
              </Dashboard>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
