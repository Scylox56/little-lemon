import dayjs from "dayjs";

const availableTimes = () => {
  // provide pseudo-random available times for the next 7 days
  const times = {};
  for (let d = 0; d < 7; d++) {
    const date = dayjs().add(d, "day").format("YYYY-MM-DD");
    times[date] = ["18:00", "18:30", "19:00", "19:30", "20:00", "20:30"];
  }
  return times;
};

export const fetchAvailableTimes = async (date) => {
  // emulate network
  await new Promise((r) => setTimeout(r, 150));
  const times = availableTimes()[date] || [];
  return times;
};

export const sendBooking = async (payload) => {
  // emulate network and simple validation
  await new Promise((r) => setTimeout(r, 200));
  if (!payload.name || !payload.date || !payload.time || !payload.party) {
    return { success: false, message: "Missing required fields" };
  }
  // pretend booking succeeded
  return { success: true, id: Math.random().toString(36).slice(2, 9) };
};
