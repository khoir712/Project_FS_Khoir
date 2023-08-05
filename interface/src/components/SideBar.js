import React from "react";
import { Link } from "react-router-dom";

import {
  AiFillHome,
  AiOutlineSolution,
  AiOutlineSnippets,
  AiOutlineSwap,
} from "react-icons/ai";

const SideBar = () => {
  return (
    <div className="w-100 vh-100 sidebar d-flex flex-column">
      <div className="text-center">
        <img
          className="img-fluid"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlxK14fu83IVPCvPFTMdmVr5D30c-_jfa1qWKw56PiBobx7UMp_33eX_YzkCFPXRDtItU&usqp=CAU"
          alt="Logo"
        />
      </div>
      <div className="p-3 menu-bar">
        <ul className="nav flex-column">
          <li className="nav-item">
            <Link className="" to="/">
              <AiFillHome className="me-2 " />
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/users">
              <AiOutlineSolution className="me-2" />
              Employees
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/items">
              <AiOutlineSnippets className="me-2" />
              Absences
            </Link>
          </li>
          <li className="nav-item">
            <Link className="" to="/items">
              <AiOutlineSwap className="me-2" />
              Types
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
