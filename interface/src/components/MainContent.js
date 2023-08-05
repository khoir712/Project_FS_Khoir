import React from "react";
import { Routes, Route } from "react-router-dom";

// Import Pages
import { Home, Employee, Absence, Type } from "../pages";

const MainContent = () => {
  return (
    <div className="w-100 vh-100 main-content">
      <div className="w-100 main-content-header">
        <h3>Aplikasi Absensi Online</h3>
      </div>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="employees" element={<Employee></Employee>}></Route>
        <Route path="absences" element={<Absence></Absence>}></Route>
        <Route path="types" element={<Type></Type>}></Route>
      </Routes>
    </div>
  );
};

export default MainContent;
