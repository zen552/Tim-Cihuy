// Update currency to Rupiah in JavaScript
function formatToRupiah(value) {
    return `Rp ${value.toLocaleString('id-ID')}`;
}

function upadateCaseNumber(product, price, isIncreasing) {
    const caseInput = document.getElementById(`${product}-number`);
    let caseNumber = parseInt(caseInput.value);
    caseNumber = isIncreasing ? caseNumber + 1 : Math.max(caseNumber - 1, 0);
    caseInput.value = caseNumber;

    // Update case total
    const caseTotal = document.getElementById(`${product}-total`);
    caseTotal.innerText = formatToRupiah(caseNumber * price);

    calculateTotal();
}

function calculateTotal() {
    const phoneTotal = getInputvalue('phone') * 2529000;
    const caseTotal = getInputvalue('case') * 59 * 15250; // Konversi ke Rp
    const ipadTotal = getInputvalue('ipad') * 500000;
    const watchTotal = getInputvalue('watch') * 279 * 15250; // Konversi ke Rp
    const macbookTotal = getInputvalue('macbook') * 999 * 15250; // Konversi ke Rp
    const subTotal = phoneTotal + caseTotal + ipadTotal + watchTotal + macbookTotal;
    const tax = Math.round(subTotal / 10);
    const totalPrice = subTotal + tax;

    // Update HTML
    document.getElementById('sub-total').innerText = formatToRupiah(subTotal);
    document.getElementById('tax-amount').innerText = formatToRupiah(tax);
    document.getElementById('total-price').innerText = formatToRupiah(totalPrice);
}



document.getElementById('case-plus').addEventListener('click',function(){
        // const caseInput = document.getElementById('case-number');
        // const caseNumber = caseInput.value;
        // caseInput.value = parseInt(caseNumber) + 1;
   upadateCaseNumber('case', 59 ,true);
});

document.getElementById('case-minus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//    if(caseInput.value > 1){
//         caseInput.value = parseInt(caseNumber) - 1;
//    }
upadateCaseNumber('case', 59, false);
});

// phone prcie update using add event linstner 
document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',1219, true);
});


document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',1219 , false);
});

// Event listeners for iPad
document.getElementById('ipad-plus').addEventListener('click', function () {
    upadateCaseNumber('ipad', 599, true);
});

document.getElementById('ipad-minus').addEventListener('click', function () {
    upadateCaseNumber('ipad', 599, false);
});

// Event listeners for Apple Watch
document.getElementById('watch-plus').addEventListener('click', function () {
    upadateCaseNumber('watch', 279, true);
});

document.getElementById('watch-minus').addEventListener('click', function () {
    upadateCaseNumber('watch', 279, false);
});

// Event listeners for MacBook
document.getElementById('macbook-plus').addEventListener('click', function () {
    upadateCaseNumber('macbook', 999, true);
});

document.getElementById('macbook-minus').addEventListener('click', function () {
    upadateCaseNumber('macbook', 999, false);
});

document.getElementById('check-out').addEventListener('click', function () {
    // Reset semua input jumlah ke 0
    document.querySelectorAll('input[type="number"]').forEach(input => {
        input.value = 0;
    });

    // Reset subtotal, tax, dan total
    document.getElementById('sub-total').innerText = 0;
    document.getElementById('tax-amount').innerText = 0;
    document.getElementById('total-price').innerText = 0;

    // Tampilkan alert
    alert('Selamat, produk sudah terbeli!');

    // Optional: Reload halaman jika ingin mereset sepenuhnya
    // location.reload();
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
