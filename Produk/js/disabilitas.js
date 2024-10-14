let isSidebarOpen = false;

function toggleSidebar() {
  const sidebar = document.getElementById("sidebar");
  const pageMarker = document.getElementById("pageMarker");

  if (isSidebarOpen) {
    sidebar.style.left = "-250px"; // Menyembunyikan sidebar
    pageMarker.style.left = "10px"; // Mengembalikan penanda halaman
  } else {
    sidebar.style.left = "0"; // Menampilkan sidebar
    pageMarker.style.left = "260px"; // Menggeser penanda halaman
  }

  isSidebarOpen = !isSidebarOpen;
}

/* Fungsi untuk fitur Aksesibilitas */

function increaseTextSize() {
  document.body.classList.remove("smaller-text");
  document.body.classList.add("larger-text");
}

function decreaseTextSize() {
  document.body.classList.remove("larger-text");
  document.body.classList.add("smaller-text");
}

function toggleGrayscale() {
  document.body.classList.toggle("grayscale");
}

function toggleHighContrast() {
  document.body.classList.toggle("high-contrast");
  document.querySelectorAll("a").forEach((link) => {
    link.classList.toggle("high-contrast");
  });
}

function toggleNegativeContrast() {
  document.body.classList.toggle("negative-contrast");
}

function toggleUnderlineLinks() {
  document.querySelectorAll("a").forEach((link) => {
    link.classList.toggle("underline");
  });
}

function togglereset() {
  // Menghapus kelas yang berkaitan dengan aksesibilitas dari body
  document.body.classList.remove("grayscale");
  document.body.classList.remove("negative-contrast");
  document.body.classList.remove("high-contrast");

  // Mengatur kembali ukuran teks ke ukuran awal
  document.body.style.fontSize = "initial"; // Atau ukuran default yang Anda inginkan

  // Reset garis bawah tautan
  const links = document.querySelectorAll("a");
  links.forEach((link) => {
    link.style.textDecoration = "none"; // Menghapus garis bawah
  });
}
