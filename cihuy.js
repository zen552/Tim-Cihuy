document.getElementById('learn-more').addEventListener('click', () => {
  alert('Terima kasih telah tertarik! Informasi lebih lanjut akan segera hadir.');
});

// Mendapatkan elemen modal, tombol close, dan tombol pencarianku
const searchModal = document.getElementById('search-modal');
const closeSearchModal = document.getElementById('close-search-modal');
const searchIcon = document.getElementById('search-icon');

// Menampilkan modal search saat klik ikon search
searchIcon.addEventListener('click', function(event) {
event.preventDefault();
searchModal.style.display = 'flex';  // Menampilkan modal pencarian
});

// Menutup modal pencarian saat klik tombol close
closeSearchModal.addEventListener('click', function() {
searchModal.style.display = 'none';  // Menyembunyikan modal pencarian
});

// Menutup modal pencarian jika klik di luar area modal
window.addEventListener('click', function(event) {
if (event.target === searchModal) {
  searchModal.style.display = 'none';  // Menyembunyikan modal pencarian
}
});