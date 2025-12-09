import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { menuData } from "../data/menuData";
import MenuItem from "./MenuItem";

export default function Menu() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("All");
  const cats = ["All", ...Array.from(new Set(menuData.map((i) => i.category)))];
  const items =
    filter === "All" ? menuData : menuData.filter((i) => i.category === filter);

  return (
    <section id="menu" className="container" aria-labelledby="menu-heading">
      <h2 id="menu-heading">Menu</h2>
      <div className="card" style={{ marginTop: 12 }}>
        <label htmlFor="category-select" style={{ color: "var(--text)" }}>
          Filter by
        </label>
        <select
          id="category-select"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          aria-label="Filter menu by category"
          style={{ marginTop: "0.5rem", maxWidth: "250px" }}
        >
          {cats.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <div className="menu-grid" style={{ marginTop: 12 }}>
          {items.map((item) => (
            <MenuItem
              key={item.id}
              item={item}
              onClick={(item) => navigate(`/menu/${item.id}`)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
