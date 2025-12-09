import React from "react";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <small>
          © {new Date().getFullYear()} Little Lemon. All rights reserved.
        </small>
      </div>
    </footer>
  );
}
