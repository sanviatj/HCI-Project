var hamburger = document.querySelector(".hamb");
var navlist = document.querySelector(".nav-list");
var links = document.querySelector(".nav-list li");

hamburger.addEventListener("click", function() {
    this.classList.toggle("click"); 
    navlist.classList.toggle("open"); 
    alert("Tombol diklik");
});

document.getElementById("contactForm").addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const comment = document.getElementById('comment').value;
    alert(`Terima kasih, ${name}! Komentar Anda telah diterima.`);
    this.reset();
});
