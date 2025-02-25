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

// Order delivery status

function confirmDelivery(radio) {
  const orderCard = radio.closest(".order-card");
  const receivedStatus = orderCard.querySelector(".received-status");
  const confirmSection = orderCard.querySelector(".order-confirm");
  const statusDelivered = orderCard.querySelector(".status-delivered");

  if (confirm("Are you sure you have received the item?")) {
      const currentDate = new Date().toLocaleDateString("en-US", {
          year: "numeric",
          month: "short",
          day: "2-digit"
      });

      statusDelivered.textContent = `● Delivered on ${currentDate}`; // Set current date
      receivedStatus.classList.remove("hidden"); // Show delivery confirmation
      confirmSection.classList.add("hidden"); // Hide selection options
  } else {
      radio.checked = false; // Uncheck if the user cancels
  }
}

function confirmNotReceived(radio) {
  const orderCard = radio.closest(".order-card");
  const notReceivedStatus = orderCard.querySelector(".not-received-status");
  const confirmSection = orderCard.querySelector(".order-confirm");

  if (confirm("Are you sure you have not received the item?")) {
      notReceivedStatus.classList.remove("hidden"); // Show not received message
      confirmSection.classList.add("hidden"); // Hide selection options
  } else {
      radio.checked = false; // Uncheck if the user cancels
  }
}


