import React from "react";

export default function MenuItem({ item, onClick }) {
  return (
    <article className="card menu-item" aria-labelledby={`item-${item.id}`}>
      <img
        src={item.img}
        alt={`Photo of ${item.name}`}
        onClick={() => onClick && onClick(item)}
      />
      <div className="menu-item-content">
        <h4 id={`item-${item.id}`}>{item.name}</h4>
        <p>{item.desc}</p>
        <div
          style={{
            marginTop: "0.75rem",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <strong style={{ fontSize: "1.25rem", color: "var(--accent-dark)" }}>
            ${item.price.toFixed(2)}
          </strong>
          <button
            onClick={() => onClick && onClick(item)}
            style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
          >
            View Details
          </button>
        </div>
      </div>
    </article>
  );
}
