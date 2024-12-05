const calendarContainer = document.getElementById('calendar');

// Array of gift names
const giftNames = [
  "Toy Train", "Candy Cane", "Chocolate Box", "Stuffed Bear", "Christmas Lights",
  "Holiday Mug", "Snow Globe", "Warm Socks", "Gift Card", "Board Game",
  "Christmas Sweater", "Scented Candle", "Gingerbread Cookies", "Christmas Ornament",
  "Santa Hat", "Reindeer Plush", "Holiday Cookbook", "Festive Scarf", "Movie Tickets",
  "Hot Cocoa Mix", "Photo Frame", "Christmas Stocking", "Puzzle Set", "Handmade Soap",
  "Mini Christmas Tree"
];

// Function to shuffle gift names
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

// Shuffle the gifts to make them random
const shuffledGifts = shuffleArray(giftNames);

// Function to generate the calendar
function generateCalendar() {
  const today = new Date();
  const currentYear = today.getFullYear();
  const startDate = new Date(currentYear, 11, 1); // December 1st
  const endDate = new Date(currentYear, 11, 25); // December 25th

  for (let day = 1; day <= 25; day++) {
    const box = document.createElement('li');
    box.classList.add('calendar-box');

    const number = document.createElement('p');
    number.innerHTML = day;

    const icon = document.createElement('i');
    icon.classList.add('fas', 'fa-gift');
    icon.style.display = 'none'; // Initially hide the gift icon

    const description = document.createElement('p');
    description.innerHTML = "Click to open!";
    description.classList.add('description');

    box.appendChild(number);
    box.appendChild(icon);
    box.appendChild(description);

    // Add click event listener to reveal gift
    box.addEventListener('click', () => {
      openBox(box, icon, description, day);
    });

    calendarContainer.appendChild(box);
  }
}

// Function to open the box and reveal the gift
function openBox(box, icon, description, day) {
  // Prevent reopening an already opened box
  if (box.classList.contains('opened')) return;

  // Mark the box as opened
  box.classList.add('opened');

  // Reveal the gift icon
  icon.style.display = 'block';

  // Show the corresponding gift name
  const giftName = shuffledGifts[day - 1];
  description.innerHTML = `🎁 ${giftName}`;
}

// Run the calendar generation function
generateCalendar();
