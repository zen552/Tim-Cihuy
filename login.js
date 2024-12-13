// Menangani pengalihan setelah login
document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Menghindari pengiriman form default
  
    // Mengabaikan validasi email dan password, langsung mengarahkan ke halaman utama
    window.location.href = 'cihuy.html'; // Pengalihan ke halaman utama tanpa validasi
  });
  
  // Menangani modal pencarian
  const searchModal = document.getElementById('search-modal');
  const closeSearchModal = document.getElementById('close-search-modal');
  const searchIcon = document.getElementById('search-icon');
  
  // Menampilkan modal pencarian saat klik ikon search
  searchIcon.addEventListener('click', function(event) {
    event.preventDefault();
    searchModal.style.display = 'flex';
  });
  
  // Menutup modal pencarian saat klik tombol close
  closeSearchModal.addEventListener('click', function() {
    searchModal.style.display = 'none';
  });
  
  // Menutup modal pencarian jika klik di luar area modal
  window.addEventListener('click', function(event) {
    if (event.target === searchModal) {
      searchModal.style.display = 'none';
    }
  });
  