import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === "/about") {
    return <h1>Navbar</h1>;
  }

  return (
    <div
      style={{
        height: "50px",
        width: "100%",
        backgroundColor: "#ccc234",
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        alignItems: "center",
      }}
    >
      {/* <Link to="/">Home</Link>
      <Link to="/about">About Us</Link> */}

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About Us</NavLink>

      <button onClick={() => navigate(-1)}>back</button>

      {/* <button onClick={() => navigate("/")}>Home</button>
      <button onClick={() => navigate("/about")}>About Us</button> */}
    </div>
  );
};

export default Navbar;
