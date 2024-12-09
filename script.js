const cards = document.querySelectorAll(".card");
let currentIndex = 1; // Start with the middle card as the main card

// Function to update the position of cards
function updateCards() {
  cards.forEach((card, index) => {
    const position = (index - currentIndex + cards.length) % cards.length;

    if (position === 0) {
      card.style.transform = "translateY(-240px) scale(0.7)";
      card.style.zIndex = 1;
    } else if (position === 1) {
      card.style.transform = "translateY(0) scale(1)";
      card.style.zIndex = 2;
    } else if (position === 2) {
      card.style.transform = "translateY(240px) scale(0.7)";
      card.style.zIndex = 1;
    }
  });
}

// Add event listeners for dragging
cards.forEach((card, index) => {
  let startY = 0;
  let isDragging = false;

  card.addEventListener("mousedown", (e) => {
    isDragging = true;
    startY = e.clientY;
  });

  card.addEventListener("mousemove", (e) => {
    if (!isDragging) return;

    const diff = e.clientY - startY;
    if (diff > 50) {
      currentIndex = (currentIndex + 1) % cards.length; // Move down
      isDragging = false;
      updateCards();
    } else if (diff < -50) {
      currentIndex = (currentIndex - 1 + cards.length) % cards.length; // Move up
      isDragging = false;
      updateCards();
    }
  });

  card.addEventListener("mouseup", () => {
    isDragging = false;
  });

  card.addEventListener("mouseleave", () => {
    isDragging = false;
  });
});

// Initialize positions
updateCards();
