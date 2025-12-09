import React from "react";
import BookingForm from "../components/BookingForm";

export default function BookingPage() {
  return (
    <div
      className="container"
      style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
    >
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <h1
          style={{
            fontSize: "2.5rem",
            marginBottom: "1rem",
            color: "var(--text)",
          }}
        >
          Reserve a Table
        </h1>
        <p
          style={{
            fontSize: "1.125rem",
            color: "var(--muted)",
            marginBottom: "2rem",
          }}
        >
          Book your table at Little Lemon. We look forward to serving you!
        </p>
        <div className="card">
          <BookingForm />
        </div>
      </div>
    </div>
  );
}
