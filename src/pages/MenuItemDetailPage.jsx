import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { menuData } from "../data/menuData";

export default function MenuItemDetailPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const item = menuData.find((i) => i.id === id);

  if (!item) {
    return (
      <div
        className="container"
        style={{ paddingTop: "3rem", textAlign: "center" }}
      >
        <h1>Item not found</h1>
        <button onClick={() => navigate("/")}>Go Home</button>
      </div>
    );
  }

  return (
    <div
      className="container"
      style={{ paddingTop: "3rem", paddingBottom: "4rem" }}
    >
      <button
        onClick={() => navigate("/")}
        style={{ marginBottom: "2rem" }}
        type="button"
      >
        ← Back to Menu
      </button>

      <div className="card" style={{ maxWidth: "800px", margin: "0 auto" }}>
        <img
          src={item.img}
          alt={item.name}
          style={{
            width: "calc(100% + 3rem)",
            height: "350px",
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
              marginBottom: "1.5rem",
              flexWrap: "wrap",
              gap: "1rem",
            }}
          >
            <div>
              <h1
                style={{
                  margin: "0 0 0.75rem",
                  fontSize: "2.5rem",
                  color: "var(--text)",
                }}
              >
                {item.name}
              </h1>
              <span
                style={{
                  background: "var(--bg-cream)",
                  padding: "0.5rem 1rem",
                  borderRadius: "8px",
                  fontSize: "0.95rem",
                  color: "var(--muted)",
                  fontWeight: 600,
                  display: "inline-block",
                }}
              >
                {item.category}
              </span>
            </div>
            <div
              style={{
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "var(--accent-dark)",
                textShadow: "0 2px 4px rgba(0,0,0,0.1)",
              }}
            >
              ${item.price.toFixed(2)}
            </div>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "0.75rem",
                color: "var(--text)",
              }}
            >
              Description
            </h2>
            <p
              style={{
                color: "var(--muted)",
                lineHeight: "1.8",
                fontSize: "1.125rem",
                margin: 0,
              }}
            >
              {item.desc}
            </p>
          </div>

          <div style={{ marginBottom: "2rem" }}>
            <h2
              style={{
                fontSize: "1.5rem",
                marginBottom: "1rem",
                color: "var(--text)",
              }}
            >
              Ingredients
            </h2>
            <div style={{ display: "flex", flexWrap: "wrap", gap: "0.75rem" }}>
              {item.desc.split(",").map((ingredient, i) => (
                <span
                  key={i}
                  style={{
                    background: "var(--bg-cream)",
                    padding: "0.625rem 1.25rem",
                    borderRadius: "24px",
                    fontSize: "0.95rem",
                    color: "var(--text)",
                    border: "1px solid var(--border)",
                    fontWeight: 500,
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
              gap: "1rem",
              paddingTop: "1.5rem",
              borderTop: "2px solid var(--border)",
            }}
          >
            <button
              style={{ flex: 1, padding: "1rem", fontSize: "1.05rem" }}
              onClick={() => navigate("/booking")}
            >
              Order Now
            </button>
            <button
              type="button"
              style={{ padding: "1rem 1.5rem", fontSize: "1.05rem" }}
              onClick={() => navigate("/")}
            >
              Back to Menu
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
