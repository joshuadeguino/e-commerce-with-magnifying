// Get input element and search button
const searchInput = document.getElementById("srcch");
const searchButton = document.getElementById("search");

// Get product list and each product item
const productList = document.getElementById("products");
const productItems = productList.querySelectorAll("li");

// Add event listener to search button
searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  searchProducts();
});

// Add event listener to filter select element
const filterSelect = document.getElementById("select");
filterSelect.addEventListener("change", function() {
  filterProducts();
});

// Search function
function searchProducts() {
  const searchTerm = searchInput.value.toLowerCase();
  for (let i = 0; i < productItems.length; i++) {
    const productName = productItems[i].querySelector("#productname").textContent.toLowerCase();
    if (productName.indexOf(searchTerm) > -1) {
      productItems[i].style.display = "";
    } else {
      productItems[i].style.display = "none";
    }
  }
}

// Filter function
function filterProducts() {
  const filterValue = filterSelect.value;
  for (let i = 0; i < productItems.length; i++) {
    productItems[i].dataset.category = productItems[i].querySelector("#producttype").textContent;
    productItems[i].dataset.price = parseFloat(productItems[i].querySelector("#price").textContent.replace("$", ""));
  }
  switch (filterValue) {
    case "LowToHigh":
      productItems.forEach((item) => item.style.display = "");
      productItems.sort((a, b) => a.dataset.price - b.dataset.price);
      productList.innerHTML = "";
      productItems.forEach((item) => productList.appendChild(item));
      break;
    case "HighToLow":
      productItems.forEach((item) => item.style.display = "");
      productItems.sort((a, b) => b.dataset.price - a.dataset.price);
      productList.innerHTML = "";
      productItems.forEach((item) => productList.appendChild(item));
      break;
    default:
      productItems.forEach((item) => item.style.display = "");
      break;
  }
}
