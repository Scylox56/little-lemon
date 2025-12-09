import React from "react";

export default function MenuItem({ item }) {
  return (
    <article className="card menu-item" aria-labelledby={`item-${item.id}`}>
      <img src={item.img} alt={`Photo of ${item.name}`} />
      <div>
        <h4 id={`item-${item.id}`}>
          {item.name} — ${item.price.toFixed(2)}
        </h4>
        <p>{item.desc}</p>
      </div>
    </article>
  );
}
