let cart = [];
let totalPrice = 0;

function addToCart(productName, price, imageUrl) {
  const quantityInput = event.target.parentElement.parentElement.querySelector(
    `input[name="quantity"]`
  );
  const quantity = parseInt(quantityInput.value) || 1;

  const existingProduct = cart.find((item) => item.name === productName);

  if (existingProduct) {
    totalPrice += price * quantity;
    existingProduct.quantity += quantity;
  } else {
    cart.push({
      name: productName,
      price: price,
      quantity: quantity,
      imageUrl: imageUrl,
    });
    totalPrice += price * quantity;
  }

  updateCartSidebar();
  updateCartCount(); // Memperbarui  notifikasi di keranjnag
}

// Fungsi untuk memperbarui tampilan keranjang
function updateCartSidebar() {
  const cartItemsContainer = document.getElementById("cart-items");
  cartItemsContainer.innerHTML = ""; // Hapus item sebelumnya

  // Populate item keranjang
  cart.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.className =
      "list-group-item d-flex justify-content-between align-items-center";

    // Gambar produk
    const productImage = `<img src="${item.imageUrl}"  style="width: 50px; height: 50px; object-fit: cover; margin-right: 10px;">`;

    // Detail item (nama dan jumlah)
    const itemDetails = `<div>${productImage} ${item.name} x ${item.quantity}</div>`;

    // Total harga untuk item
    const itemPrice = item.price * item.quantity;
    const itemPriceDisplay = `<span>${itemPrice.toLocaleString("id-ID", {
      style: "currency",
      currency: "IDR",
    })}</span>`;

    listItem.innerHTML = `${itemDetails} ${itemPriceDisplay}`;
    cartItemsContainer.appendChild(listItem);
  });

  // Update total harga
  document.getElementById("total-price").textContent =
    totalPrice.toLocaleString("id-ID", { style: "currency", currency: "IDR" });
}

// Fungsi untuk memperbarui badge notifikasi jumlah produk
function updateCartCount() {
  const cartCount = document.getElementById("cart-count");
  const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
  cartCount.textContent = totalQuantity;
  cartCount.style.display = totalQuantity > 0 ? "block" : "none"; // Tampilkan atau sembunyikan badge
}

function checkout() {
  alert("Proceeding to checkout...");
  window.location.href = "/Checkout/chackout.html";
}
