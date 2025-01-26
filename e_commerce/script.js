// Script for navigation bar
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

if (bar) {
  bar.addEventListener('click', () => {
    nav.classList.add('active');
  });
}

if(close) {
  close.addEventListener('click', () => {
    nav.classList.remove('active');
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.querySelector(".search-bar input");
  const searchButton = document.querySelector(".search-btn");
  const orderCards = document.querySelectorAll(".order-card");

  const filterOrders = () => {
      const searchValue = searchInput.value.toLowerCase(); // Get the input value in lowercase

      // Loop through all order cards
      orderCards.forEach(card => {
          const productName = card.querySelector(".order-details h3").textContent.toLowerCase(); // Get product name

          // Check if product name includes the search value
          if (productName.includes(searchValue)) {
              card.style.display = "flex"; // Show matching orders
          } else {
              card.style.display = "none"; // Hide non-matching orders
          }
      });
  };

  // Add event listeners
  searchButton.addEventListener("click", filterOrders); // Filter on button click
  searchInput.addEventListener("keyup", filterOrders); // Filter as you type
});
