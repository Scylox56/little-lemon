import React from "react";

export default function AccessibleButton({ children, ...props }) {
  return <button {...props}>{children}</button>;
}
