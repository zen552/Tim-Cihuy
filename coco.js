// Product Carousel
const productCards = document.querySelector(".product-cards");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");

let currentIndex = 0;

prevBtn.addEventListener("click", () => {
    const cardWidth = document.querySelector(".card").offsetWidth + 20; // Including gap
    currentIndex = Math.max(currentIndex - 1, 0);
    productCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

nextBtn.addEventListener("click", () => {
    const cardWidth = document.querySelector(".card").offsetWidth + 20;
    const maxIndex = productCards.children.length - Math.floor(window.innerWidth / cardWidth);
    currentIndex = Math.min(currentIndex + 1, maxIndex);
    productCards.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
});

//contact form
const btn = document.getElementById("button");

document.getElementById("email-form").addEventListener
("submit", function(event) {
    event.preventDefault();

    btn.value = "Sending ...";

    const serviceID = "service_i2bxvcb";
    const templateID = "template_al3bopf";

    emailjs.sendForm(serviceID, templateID, this)
        .then(() => {
            btn.value = "Send Email";
            alert("Email Berhasil Terkirim!");
        }, (err) => {
            btn.value = "Send Email";
            alert(JSON.stringify(err));
        });
});