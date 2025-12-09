import React from "react";

export default function Header() {
  return (
    <header>
      <div className="container brand">
        <div>
          <h1 aria-label="Little Lemon restaurant">🍋 Little Lemon</h1>
          <p className="muted">Friendly neighborhood restaurant</p>
        </div>
        <nav aria-label="Main navigation" style={{ marginLeft: "auto" }}>
          <a href="#home">Home</a>
          <a href="#menu">Menu</a>
          <a href="#booking">Book</a>
        </nav>
      </div>
    </header>
  );
}
