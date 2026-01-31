'use client';

export function getWeekStartDate(today = new Date()) {
    const date = new Date(today);
    const day = date.getDay(); // 0 (Sun) → 6 (Sat)

    // Convert Sunday (0) to 7
    const diff = date.getDate() - (day === 0 ? 6 : day - 1);

    return new Date(date.setDate(diff));
}

export function toLocalDate(dateStr) {
  const [y, m, d] = dateStr.split('-');
  return new Date(y, m - 1, d);
}

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0"); // Months are 0-based
const dd = String(today.getDate()).padStart(2, "0");

export const maxDate = `${yyyy}-${mm}-${dd}`;