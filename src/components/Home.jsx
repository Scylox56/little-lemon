import React from "react";
import BookingForm from "./BookingForm";

export default function Home() {
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
          <h3>Today's special</h3>
          <p>Chef's choice: Lemon Herb Chicken with roasted vegetables.</p>
        </div>
      </div>

      <aside className="card" aria-labelledby="booking-title">
        <h3 id="booking-title">Reserve a Table</h3>
        <BookingForm />
      </aside>
    </section>
  );
}
