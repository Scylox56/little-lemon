import React from "react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../context/ThemeContext";

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header>
      <div className="container brand">
        <NavLink to="/" style={{ textDecoration: "none" }}>
          <div className="brand-logo">
            <img src="/assets/logo.png" alt="Little Lemon Logo" />
            <div>
              <h1 aria-label="Little Lemon restaurant">Little Lemon</h1>
              <p className="muted">Friendly neighborhood restaurant</p>
            </div>
          </div>
        </NavLink>
        <nav
          aria-label="Main navigation"
          style={{
            marginLeft: "auto",
            display: "flex",
            alignItems: "center",
            gap: "1rem",
          }}
        >
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/menu">Menu</NavLink>
          <NavLink to="/booking">Book</NavLink>
          <button
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={`Switch to ${
              theme === "light" ? "dark" : "light"
            } mode`}
          >
            {theme === "light" ? "🌙" : "☀️"}
          </button>
        </nav>
      </div>
    </header>
  );
}
