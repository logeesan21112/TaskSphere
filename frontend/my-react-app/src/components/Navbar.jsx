/*
import React from 'react'
import { Link } from 'react-router-dom'
import { Toaster } from 'react-hot-toast';

const Navbar = ({ onExportPDF }) => {
  return (
    <>
      <Toaster />
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <button className="navbar-brand" style={{ background: 'none', border: 'none', color: 'white' }} disabled>
            Task Manager
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn btn-outline-success mx-1" aria-current="page" to="/">All Task</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-danger mx-1" aria-current="page" to="/add">Add Task</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-info mx-1" onClick={onExportPDF}>Export as PDF</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar
*/

import React from 'react';
import { Link } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

const Navbar = () => {
  // Function to handle the print dialog (Export as PDF)
  const handleExportPDF = () => {
    window.print(); // This opens the print dialog
  };

  return (
    <>
      <Toaster />
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
          <button className="navbar-brand" style={{ background: 'none', border: 'none', color: 'white' }} disabled>
            Task Manager
          </button>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="btn btn-outline-success mx-1" aria-current="page" to="/">All Task</Link>
              </li>
              <li className="nav-item">
                <Link className="btn btn-outline-danger mx-1" aria-current="page" to="/add">Add Task</Link>
              </li>
              <li className="nav-item">
                <button className="btn btn-outline-info mx-1" onClick={handleExportPDF}>Export as PDF</button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

