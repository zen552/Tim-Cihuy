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
