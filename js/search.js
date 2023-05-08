const searchInput = document.getElementById('srcch');
const products = document.getElementById('products');

searchInput.addEventListener('keyup', function(event) {
  const query = event.target.value.toLowerCase();
  const items = products.querySelectorAll('li');

  items.forEach(function(item) {
    const name = item.querySelector('.detail strong').textContent.toLowerCase();
    const category = item.dataset.category.toLowerCase();

    if (name.indexOf(query) !== -1 && category === query) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});
