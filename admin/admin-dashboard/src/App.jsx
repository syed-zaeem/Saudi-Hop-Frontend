// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard'; // Your dashboard component
import ProtectedRoute from './components/ProtectedRoute';
import ManageBlogs from './pages/ManageBlogs';
import CreateBlog from './pages/CreateBlog';

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
              <ManageBlogs />
            </ProtectedRoute>
          }
        />
        <Route
          path="/create/blog"
          element={
            <ProtectedRoute>
              <CreateBlog />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;