import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem",
        backgroundColor: "#142A51",
      }}
    >
      <div
        className="logo"
        style={{
          fontSize: "1.5rem",
          fontWeight: "bold",
          color: "white",
          marginLeft: "1rem",
        }}
      >
        {/* Logo image or text */}
        <img
          src={require("../images/6.png")}
          alt="Logo"
          style={{ width: "50px", height: "50px" }}
        />
      </div>
      <ul style={{ display: "flex", listStyle: "none" }}>
        <li style={{ marginLeft: "1rem" }}>
          <Link to="/" style={{ color: "white", textDecoration: "none" }}>
            Registration Form
          </Link>
        </li>
        <li style={{ marginLeft: "1rem" }}>
          <Link
            to="/employeelist"
            style={{ color: "white", textDecoration: "none" }}
          >
            Employee List
          </Link>
        </li>
        <li style={{ marginLeft: "1rem" }}>
          <Link
            to="/searchemployee"
            style={{ color: "white", textDecoration: "none" }}
          >
            Search Employee
          </Link>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
