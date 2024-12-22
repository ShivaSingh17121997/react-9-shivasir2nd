import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div
      style={{
        backgroundColor: "#ffdd53", // Yellow background
        height: "100vh",
        width: "15%", // Slightly wider
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        boxShadow: "2px 0 5px rgba(0, 0, 0, 0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: "none", // Remove underline
            color: "#34495e", // Dark text
            fontSize: "18px",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "5px",
            display: "block",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#34495e";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#34495e";
          }}
        >
          Project
        </Link>
      </div>
      <div
        style={{
          marginBottom: "20px",
          width: "100%",
        }}
      >
        <Link
          to="/views"
          style={{
            textDecoration: "none", // Remove underline
            color: "#34495e", // Dark text
            fontSize: "18px",
            fontWeight: "bold",
            padding: "10px 15px",
            borderRadius: "5px",
            display: "block",
            transition: "background-color 0.3s, color 0.3s",
          }}
          onMouseOver={(e) => {
            e.target.style.backgroundColor = "#34495e";
            e.target.style.color = "#fff";
          }}
          onMouseOut={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#34495e";
          }}
        >
          Views
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
