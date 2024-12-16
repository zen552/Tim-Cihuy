function upadateCaseNumber(product, price, isIncreasing){
    const caseInput = document.getElementById(product + '-number');
    let caseNumber = caseInput.value;
            if(isIncreasing){
                caseNumber = parseInt(caseNumber) + 1;
            }
            
    else if(caseNumber > 0){
           caseNumber = parseInt(caseNumber) - 1;
         }
        
        caseInput.value = caseNumber;
    // update case total 
    const caseTotal = document.getElementById(product + '-total');
    caseTotal.innerText = caseNumber * price;
    calculateTotal();
    }


    function getInputvalue(product){
        const productInput = document.getElementById(product + '-number');
        const productNumber = parseInt(productInput.value);
        return productNumber;
    }
    function calculateTotal(){
        const phoneTotal = getInputvalue('phone') * 1219;
        const caseTotal = getInputvalue('case') * 59;
        const ipadTotal = getInputvalue('ipad') * 599;
        const watchTotal = getInputvalue('watch') * 279;
        const macbookTotal = getInputvalue('macbook') * 999;
        const subTotal = phoneTotal + caseTotal + ipadTotal + watchTotal + macbookTotal;
        const tax = subTotal / 10;
        const totalPrice = subTotal + tax;

        // update on the html 
        document.getElementById('sub-total').innerText = subTotal;
        document.getElementById('tax-amount').innerText = tax;
        document.getElementById('total-price').innerText = totalPrice;

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
