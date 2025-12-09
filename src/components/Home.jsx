import React from "react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  return (
    <section
      id="home"
      className="container hero"
      aria-labelledby="home-heading"
    >
      <div>
        <h2 id="home-heading">Welcome to Little Lemon</h2>
        <p>
          Fresh, seasonal, and made with love. Come taste our signature dishes
          or book a table below.
        </p>
        <div className="card" style={{ marginTop: 16 }}>
          <h3 style={{ color: "var(--text)" }}>Today's special</h3>
          <p style={{ color: "var(--muted)" }}>
            Chef's choice: Lemon Herb Chicken with roasted vegetables.
          </p>
        </div>
      </div>

      <aside className="card" aria-labelledby="booking-cta">
        <h3 id="booking-cta" style={{ color: "var(--text)" }}>
          Ready to Dine?
        </h3>
        <p style={{ color: "var(--muted)", marginBottom: "1.5rem" }}>
          Reserve your table and experience our delicious menu.
        </p>
        <button
          onClick={() => navigate("/booking")}
          style={{ width: "100%", padding: "1rem", fontSize: "1.05rem" }}
        >
          Book a Table
        </button>
      </aside>
    </section>
  );
}
