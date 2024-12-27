// script shop search

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

// Product data
let products = {
    data: [
      {
        productName: "Casio fx-83gtx",
        category: "Calculator",
        price: "450",
        image: "img/products/f1.jpg",
        rating: 4.5,
      },
      {
        productName: "Text book",
        category: "Books",
        price: "150",
        image: "img/products/f1.jpg",
        rating: 3,
      },
      {
        productName: "Lab Coat",
        category: "Lab Coats",
        price: "500",
        image: "img/products/f1.jpg",
        rating: 5,
      },
      {
        productName: "Casio",
        category: "Calculator",
        price: "450",
        image: "img/products/f1.jpg",
        rating: 3,
      },
      {
        productName: "Pen",
        category: "Other Accessories",
        price: "450",
        image: "img/products/f1.jpg",
        rating: 3,
      },
      {
        productName: "Pencil",
        category: "Other Accessories",
        price: "450",
        image: "img/products/f1.jpg",
        rating: 3,
      },
    ],
  };
  
  // Function to display products
  function displayProducts(filteredProducts = products.data) {
    const productsContainer = document.getElementById("products");
    productsContainer.innerHTML = ""; // Clear previous results
  
    filteredProducts.forEach((product) => {
      let card = document.createElement("div");
      card.classList.add("card");
  
      let imgContainer = document.createElement("div");
      imgContainer.classList.add("image-container");
  
      let image = document.createElement("img");
      image.setAttribute("src", product.image);
      imgContainer.appendChild(image);
  
      card.appendChild(imgContainer);
  
      let category = document.createElement("p");
      category.classList.add("category");
      category.innerText = product.category.toLowerCase();
      card.appendChild(category);
  
      let name = document.createElement("h3");
      name.innerText = product.productName;
      card.appendChild(name);
  
      let rating = document.createElement("div");
      rating.classList.add("rating");
      for (let i = 0; i < 5; i++) {
        let star = document.createElement("span");
        star.innerHTML = i < Math.floor(product.rating) ? "★" : "☆";
        star.classList.add("star");
        rating.appendChild(star);
      }
      card.appendChild(rating);
  
      let price = document.createElement("p");
      price.classList.add("price");
      price.innerText = `₹${product.price}`;
      card.appendChild(price);
  
      let cartButton = document.createElement("button");
      cartButton.classList.add("cart-button");
      cartButton.innerHTML = `<i class="fas fa-shopping-cart"></i>`;
      card.appendChild(cartButton);
  
      productsContainer.appendChild(card);
    });
  }
  
  // Display all products initially
  displayProducts();
  
  // Function to filter products based on search and category
  function filterProducts(category = "all") {
    const query = document.getElementById("search-input").value.toLowerCase();
  
    const filteredProducts = products.data.filter((product) => {
      const matchesCategory =
        category === "all" || product.category.toLowerCase() === category.toLowerCase();
      const matchesQuery = product.productName.toLowerCase().includes(query);
      return matchesCategory && matchesQuery;
    });
  
    displayProducts(filteredProducts);
  }
  
  // Search functionality
  document.getElementById("search").addEventListener("click", () => {
    filterProducts();
  });
  
  // Category filter
  function filterProduct(category) {
    filterProducts(category);
  
    // Highlight the active category button
    const categoryButtons = document.querySelectorAll(".button-value");
    categoryButtons.forEach((button) => button.classList.remove("actived"));
    const activeButton = [...categoryButtons].find(
      (btn) => btn.textContent.toLowerCase() === category.toLowerCase()
    );
    if (activeButton) activeButton.classList.add("actived");
  }
  
  // Optional: Update displayed products when typing in search
  document.getElementById("search-input").addEventListener("input", () => {
    filterProducts();
  });
  