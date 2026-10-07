// EDIT THIS DATE to the day your relationship began (YYYY-MM-DD).
// The counter updates automatically from this date.
const RELATIONSHIP_START_DATE = "YYYY-MM-DD";

// EDIT THESE MOMENTS to add your own dates and memories.
// The HTML currently has three sweet starter milestones you can rewrite.

function updateDaysTogether() {
  const counter = document.querySelector("#days-together");
  const note = document.querySelector("#counter-note");
  if (!/^\d{4}-\d{2}-\d{2}$/.test(RELATIONSHIP_START_DATE)) {
    counter.textContent = "365";
    note.textContent = "edit your start date in script.js";
    return;
  }
  const start = new Date(`${RELATIONSHIP_START_DATE}T00:00:00`);
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const days = Math.max(1, Math.floor((today - start) / 86_400_000) + 1);
  counter.textContent = Number.isFinite(days) ? days.toLocaleString() : "∞";
  note.textContent = days === 365 ? "one whole year — and counting" : "and counting, always";
}

updateDaysTogether();

const surpriseButton = document.querySelector("#surprise-button");
const surpriseMessage = document.querySelector("#surprise-message");
surpriseButton.addEventListener("click", () => {
  const opening = surpriseMessage.hidden;
  surpriseMessage.hidden = !opening;
  surpriseButton.innerHTML = opening
    ? 'A little more love <span>♥</span>'
    : 'Open your surprise <span>♡</span>';
  if (opening) surpriseMessage.scrollIntoView({ behavior: "smooth", block: "nearest" });
});
