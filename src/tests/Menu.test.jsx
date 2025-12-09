import { test, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Menu from "../components/Menu";

test("renders menu and categories", () => {
  render(<Menu />);
  expect(screen.getByText(/menu/i)).toBeInTheDocument();
  expect(screen.getByLabelText(/filter menu by category/i)).toBeInTheDocument();
});
