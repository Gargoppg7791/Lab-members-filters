function search() {
  let filter = document.getElementById('find').value.toUpperCase();
  let item = document.querySelectorAll('.product');
  let l = document.getElementsByTagName('h3');
  for (var i = 0; i < l.length; i++) {
      let a = item[i].getElementsByTagName('h3')[0];
      let value = a.innerHTML || a.innerText || a.textContent;
      if (value.toUpperCase().indexOf(filter) > -1) {
          item[i].style.display = "";
      } else {
          item[i].style.display = "none";
      }
  }
}

function filterProduct(categories) {
let products = document.querySelectorAll('.product');
if (categories.includes('all')) {
  products.forEach(product => {
      product.style.display = '';
  });
} else {
  products.forEach(product => {
      let productName = product.querySelector('h3').innerText.trim();
      if (categories.includes(productName)) {
          product.style.display = '';
      } else {
          product.style.display = 'none';
      }
  });
}
}