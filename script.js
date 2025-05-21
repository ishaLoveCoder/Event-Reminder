function getNextDate(month, day) {
  const now = new Date();
  let year = now.getFullYear();
  const target = new Date(year, month - 1, day);

  if (now > target) {
    year++;
  }
  return new Date(year, month - 1, day, 0, 0, 0);
}

function updateCountdown(elementId, targetDate, eventName) {
  function update() {
    const now = new Date();
    let distance = targetDate.getTime() - now.getTime();

    // Show wish message if today is the event
    if (
      now.getDate() === targetDate.getDate() &&
      now.getMonth() === targetDate.getMonth()
    ) {
      showWish(eventName);
    }

    // If event passed, update to next year
    if (distance <= 0) {
      targetDate.setFullYear(targetDate.getFullYear() + 1);
      distance = targetDate.getTime() - now.getTime();
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

function showWish(type) {
  const wishBox = document.getElementById("wish-message");
  let msg = "";
  switch (type) {
    case "anniversary":
      msg = "Happy Anniversary!";
      break;
    case "husband":
      msg = "Happy Birthday, Husband!";
      break;
    case "wife":
      msg = "Happy Birthday, Wife!";
      break;
  }
  wishBox.textContent = msg;
  wishBox.classList.remove("hidden");
}

// Dates
const anniversary = getNextDate(2, 8);
const husband = getNextDate(3, 17);
const wife = getNextDate(5, 17);

// Start countdowns
updateCountdown("anniversary-timer", anniversary, "anniversary");
updateCountdown("husband-timer", husband, "husband");
updateCountdown("wife-timer", wife, "wife");
