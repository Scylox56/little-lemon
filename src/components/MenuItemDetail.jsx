import React from "react";

export default function MenuItemDetail({ item, onClose }) {
  if (!item) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: "rgba(0, 0, 0, 0.7)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 1000,
        padding: "2rem",
      }}
      onClick={onClose}
    >
      <div
        className="card"
        style={{
          maxWidth: "700px",
          width: "100%",
          maxHeight: "90vh",
          overflow: "auto",
          position: "relative",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            background: "var(--card)",
            border: "2px solid var(--border)",
            borderRadius: "50%",
            width: "40px",
            height: "40px",
            fontSize: "1.5rem",
            cursor: "pointer",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 10,
          }}
        >
          ×
        </button>

        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "calc(100% + 3rem)",
            height: "300px",
            objectFit: "cover",
            margin: "-1.5rem -1.5rem 1.5rem",
            borderRadius: "16px 16px 0 0",
          }}
        />

        <div style={{ padding: "0 0.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "start",
              marginBottom: "1rem",
            }}
          >
            <div>
              <h2
                style={{
                  margin: "0 0 0.5rem",
                  fontSize: "2rem",
                  color: "var(--text)",
                }}
              >
                {item.name}
              </h2>
              <span
                style={{
                  background: "var(--bg-cream)",
                  padding: "0.375rem 0.75rem",
                  borderRadius: "6px",
                  fontSize: "0.9rem",
                  color: "var(--muted)",
                  fontWeight: 500,
                }}
              >
                {item.category}
              </span>
            </div>
            <div
              style={{
                fontSize: "2rem",
                fontWeight: 700,
                color: "var(--accent-dark)",
              }}
            >
              ${item.price.toFixed(2)}
            </div>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "0.5rem",
                color: "var(--text)",
              }}
            >
              Description
            </h3>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: "1.8",
                fontSize: "1.05rem",
              }}
            >
              {item.desc}
            </p>
          </div>

          <div style={{ marginBottom: "1.5rem" }}>
            <h3
              style={{
                fontSize: "1.25rem",
                marginBottom: "0.75rem",
                color: "var(--text)",
              }}
            >
              Ingredients
            </h3>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
              {item.desc.split(",").map((ingredient, i) => (
                <span
                  key={i}
                  style={{
                    background: "var(--bg-cream)",
                    padding: "0.5rem 1rem",
                    borderRadius: "20px",
                    fontSize: "0.9rem",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                  }}
                >
                  {ingredient.trim()}
                </span>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              gap: "0.75rem",
              paddingTop: "1rem",
              borderTop: "1px solid var(--border)",
            }}
          >
            <button
              style={{ flex: 1, padding: "1rem", fontSize: "1.05rem" }}
              onClick={onClose}
            >
              Add to Order
            </button>
            <button
              type="button"
              style={{ padding: "1rem 1.5rem", fontSize: "1.05rem" }}
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
