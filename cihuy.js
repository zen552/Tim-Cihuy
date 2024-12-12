document.getElementById('learn-more').addEventListener('click', () => {
    alert('Terima kasih telah tertarik! Informasi lebih lanjut akan segera hadir.');
  });
  
  // Mendapatkan elemen modal dan tombol close
const modal = document.getElementById('profile-modal');
const closeModal = document.getElementById('close-modal');
const profileIcon = document.getElementById('profile-icon');

// Menampilkan modal saat klik ikon profil
profileIcon.addEventListener('click', function(event) {
  event.preventDefault();
  modal.style.display = 'flex';
});

// Menutup modal saat klik tombol close
closeModal.addEventListener('click', function() {
  modal.style.display = 'none';
});

// Menutup modal jika klik di luar konten modal
window.addEventListener('click', function(event) {
  if (event.target === modal) {
    modal.style.display = 'none';
  }
});

// Mendapatkan elemen modal, tombol close, dan tombol pencarian
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
