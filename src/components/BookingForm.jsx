import React, { useState, useEffect } from "react";
import { fetchAvailableTimes, sendBooking } from "../api/mockApi";
import dayjs from "dayjs";

export default function BookingForm() {
  const [name, setName] = useState("");
  const [date, setDate] = useState(dayjs().format("YYYY-MM-DD"));
  const [time, setTime] = useState("");
  const [party, setParty] = useState(2);
  const [notes, setNotes] = useState("");
  const [times, setTimes] = useState([]);
  const [status, setStatus] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    async function loadTimes() {
      if (mounted) setLoading(true);

      const t = await fetchAvailableTimes(date);

      if (mounted) {
        setTimes(t);
        setTime(t[0] || "");
        setLoading(false);
      }
    }

    loadTimes();

    return () => {
      mounted = false;
    };
  }, [date]);

  const validate = () => {
    const errors = [];

    if (!name.trim()) errors.push("Name required");
    if (!date) errors.push("Date required");
    if (!time) errors.push("Time required");
    if (!party || party < 1 || party > 20)
      errors.push("Party size must be between 1 and 20");

    if (dayjs(date).isBefore(dayjs(), "day"))
      errors.push("Date cannot be in the past");

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus(null);

    const errors = validate();
    if (errors.length > 0) {
      setStatus({ type: "error", messages: errors });
      return;
    }

    setLoading(true);
    const response = await sendBooking({
      name,
      date,
      time,
      party,
      notes,
    });
    setLoading(false);

    if (response.success) {
      setStatus({
        type: "success",
        messages: [`Booking confirmed (id: ${response.id})`],
      });
      setNotes("");
    } else {
      setStatus({
        type: "error",
        messages: [response.message || "Failed to book"],
      });
    }
  };

  return (
    <form className="booking-form" onSubmit={handleSubmit} aria-live="polite">
      <label htmlFor="name-input">Name</label>
      <input
        id="name-input"
        value={name}
        onChange={(e) => setName(e.target.value)}
        aria-required="true"
      />

      <div className="form-row">
        <div style={{ flex: 1 }}>
          <label htmlFor="date-input">Date</label>
          <input
            id="date-input"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            aria-required="true"
          />
        </div>

        <div style={{ flex: 1 }}>
          <label htmlFor="time-select">Time</label>
          {loading ? (
            <div>Loading times…</div>
          ) : (
            <select
              id="time-select"
              value={time}
              onChange={(e) => setTime(e.target.value)}
              aria-required="true"
            >
              {times.length > 0 ? (
                times.map((t) => (
                  <option key={t} value={t}>
                    {t}
                  </option>
                ))
              ) : (
                <option value="">No availability</option>
              )}
            </select>
          )}
        </div>
      </div>

      <div className="form-row" style={{ marginTop: 8 }}>
        <div style={{ flex: 1 }}>
          <label htmlFor="party-input">Party size</label>
          <input
            id="party-input"
            type="number"
            min="1"
            max="20"
            value={party}
            onChange={(e) => setParty(Number(e.target.value))}
            aria-required="true"
          />
        </div>

        <div style={{ flex: 1 }}>
          <label htmlFor="notes">Notes (optional)</label>
          <input
            id="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
      </div>

      <div style={{ marginTop: 12, display: "flex", gap: 8 }}>
        <button type="submit" aria-label="Submit booking" disabled={loading}>
          {loading ? "Booking…" : "Book Table"}
        </button>

        <button
          type="button"
          aria-label="Clear form"
          onClick={() => {
            setName("");
            setParty(2);
            setNotes("");
            setStatus(null);
          }}
        >
          Clear
        </button>
      </div>

      {status && (
        <div
          role={status.type === "error" ? "alert" : "status"}
          style={{ marginTop: 12 }}
        >
          {status.messages.map((msg, i) => (
            <div key={i}>{msg}</div>
          ))}
        </div>
      )}
    </form>
  );
}
