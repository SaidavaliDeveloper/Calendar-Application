const monthYear = document.getElementById("month-year");
const datesContainer = document.getElementById("dates");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");

const today = new Date();
let currentMonth = today.getMonth();
let currentYear = today.getFullYear();

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

function renderCalendar(month, year) {
  // Display the month and year
  monthYear.textContent = `${months[month]} ${year}`;
  datesContainer.innerHTML = "";

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  // Add empty slots for days before the start of the month
  for (let i = 0; i < firstDay; i++) {
    const emptySpan = document.createElement("span");
    datesContainer.appendChild(emptySpan);
  }

  // Add days of the month
  for (let day = 1; day <= daysInMonth; day++) {
    const daySpan = document.createElement("span");
    const isToday =
      day === today.getDate() &&
      month === today.getMonth() &&
      year === today.getFullYear();

    daySpan.textContent = day;
    if (isToday) {
      daySpan.classList.add("today");
    }
    datesContainer.appendChild(daySpan);
  }
}

// Event listeners for navigation buttons
prevButton.addEventListener("click", () => {
  currentMonth--;
  if (currentMonth < 0) {
    currentMonth = 11;
    currentYear--;
  }
  renderCalendar(currentMonth, currentYear);
});

nextButton.addEventListener("click", () => {
  currentMonth++;
  if (currentMonth > 11) {
    currentMonth = 0;
    currentYear++;
  }
  renderCalendar(currentMonth, currentYear);
});

// Initialize calendar
renderCalendar(currentMonth, currentYear);
