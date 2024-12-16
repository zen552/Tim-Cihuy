// Update currency to Rupiah in JavaScript
function formatToRupiah(value) {
    return ` ${value.toLocaleString('id-ID')}`;
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

function getInputvalue(product){
    const productInput = document.getElementById(product + '-number');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}


function calculateTotal() {
    const phoneTotal = getInputvalue('phone') * 2529000;
    const headsetTotal = getInputvalue('headset') * 500000; 
    const foneTotal = getInputvalue('ambafone') * 14000000;
    const laptopTotal = getInputvalue('ambatop') * 5000000; 
    const watchTotal = getInputvalue('watch') * 600000; 
    const tabTotal = getInputvalue('ambatab') * 3000000; 
    const subTotal = phoneTotal + headsetTotal + foneTotal + laptopTotal + watchTotal + tabTotal;
    const tax = Math.round(subTotal / 10);
    const totalPrice = subTotal + tax;

    // Update HTML
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-price').innerText = totalPrice;
}



document.getElementById('headset-plus').addEventListener('click',function(){
        // const caseInput = document.getElementById('case-number');
        // const caseNumber = caseInput.value;
        // caseInput.value = parseInt(caseNumber) + 1;
   upadateCaseNumber('headset', 500000 ,true);
});

document.getElementById('headset-minus').addEventListener('click',function(){
    // const caseInput = document.getElementById('case-number');
//     const caseNumber = caseInput.value;
//    if(caseInput.value > 1){
//         caseInput.value = parseInt(caseNumber) - 1;
//    }
    upadateCaseNumber('headset', 500000, false);
});

// phone price update using add event linstner 
document.getElementById('phone-plus').addEventListener('click',function(){
    upadateCaseNumber('phone',2529000, true);
});


document.getElementById('phone-minus').addEventListener('click',function(){
    upadateCaseNumber('phone',2529000, false);
});

// Event listeners for iPad
document.getElementById('ambafone-plus').addEventListener('click', function () {
    upadateCaseNumber('ambafone', 14000000, true);
});

document.getElementById('ambafone-minus').addEventListener('click', function () {
    upadateCaseNumber('ambafone', 14000000, false);
});

// Event listeners for Apple Watch
document.getElementById('ambatop-plus').addEventListener('click', function () {
    upadateCaseNumber('ambatop', 5000000, true);
});

document.getElementById('ambatop-minus').addEventListener('click', function () {
    upadateCaseNumber('ambatop', 5000000, false);
});

// Event listeners for MacBook
document.getElementById('watch-plus').addEventListener('click', function () {
    upadateCaseNumber('watch', 600000, true);
});

document.getElementById('watch-minus').addEventListener('click', function () {
    upadateCaseNumber('watch', 600000, false);
});

// Event listeners for MacBook
document.getElementById('ambatab-plus').addEventListener('click', function () {
    upadateCaseNumber('ambatab', 3000000, true);
});

document.getElementById('ambatab-minus').addEventListener('click', function () {
    upadateCaseNumber('ambatab', 3000000, false);
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
