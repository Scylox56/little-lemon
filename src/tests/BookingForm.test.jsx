import { describe, it, expect, vi, beforeEach } from "vitest";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import BookingForm from "../components/BookingForm";
import * as api from "../api/mockApi";

beforeEach(() => {
  vi.restoreAllMocks();

  vi.spyOn(api, "fetchAvailableTimes").mockResolvedValue(["18:00", "19:00"]);
  vi.spyOn(api, "sendBooking").mockResolvedValue({
    success: true,
    id: "abc123",
  });
});

describe("BookingForm", () => {
  it("renders booking form and submits successfully", async () => {
    render(<BookingForm />);

    const name = screen.getByLabelText(/name/i);
    fireEvent.change(name, { target: { value: "Alice" } });

    await waitFor(() => {
      expect(screen.getByLabelText(/time/i)).toBeInTheDocument();
    });

    const time = screen.getByLabelText(/time/i);
    fireEvent.change(time, { target: { value: "19:00" } });

    const party = screen.getByLabelText(/party size/i);
    fireEvent.change(party, { target: { value: "3" } });

    const submit = screen.getByRole("button", { name: /book table/i });
    fireEvent.click(submit);

    await waitFor(() =>
      expect(screen.getByText(/booking confirmed/i)).toBeInTheDocument()
    );
  });
});
