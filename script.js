function getNextDate(month, day) {
  const now = new Date();
  let year = now.getFullYear();
  const target = new Date(year, month - 1, day);

  if (now > target) {
    year++;
  }
  return new Date(year, month - 1, day, 0, 0, 0);
}

function updateCountdown(elementId, targetDate) {
  function update() {
    const now = new Date().getTime();
    const distance = targetDate.getTime() - now;

    if (distance <= 0) {
      // Automatically move to next year
      targetDate.setFullYear(targetDate.getFullYear() + 1);
    }

    const d = Math.floor(distance / (1000 * 60 * 60 * 24));
    const h = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const m = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const s = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById(elementId).textContent = `${d}d ${h}h ${m}m ${s}s`;
  }

  update();
  setInterval(update, 1000);
}

// Event Dates
const anniversary = getNextDate(2, 8);
const husbandBirthday = getNextDate(3, 17);
const wifeBirthday = getNextDate(5, 17);

// Start countdowns
updateCountdown("anniversary-timer", anniversary);
updateCountdown("husband-timer", husbandBirthday);
updateCountdown("wife-timer", wifeBirthday);
