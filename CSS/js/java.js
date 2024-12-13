
const searchForm = document.querySelector('.search-form');
const searchButton = document.querySelector('.search-form button');


searchButton.addEventListener('click', function(event) {
    event.preventDefault(); // 

    const searchTerm = searchForm.querySelector('input[type="text"]').value;

 
    console.log('Đã tìm kiếm: ', searchTerm);
});

$("#carouselExampleIndicators").carousel();


$(".item1").click(function(){
    $("#carouselExampleIndicators").carousel(0);
});
$(".item2").click(function(){
    $("#carouselExampleIndicators").carousel(1);
});
$(".item3").click(function(){
    $("#carouselExampleIndicators").carousel(2);
});
$(".item4").click(function(){
    $("#carouselExampleIndicators").carousel(3);
});


$(".carousel-control-prev").click(function(){
    $("#carouselExampleIndicators").carousel("prev");
});
$(".carousel-control-next").click(function(){
    $("#carouselExampleIndicators").carousel("next");
});
document.addEventListener("DOMContentLoaded", function() {
   
    setInterval(function() {
        $('.carousel').carousel('next'); 
    },6000);
});
document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        const name = document.getElementById("customerName");
        const email = document.getElementById("customerEmail");
        const message = document.getElementById("message");

        if (!name.value.match(/^[^\d]+$/)) {
            alert("Tên không được chứa số.");
            name.focus();
            event.preventDefault();
            return false;
        }

        if (message.value.length < 20) {
            alert("Nội dung phải có ít nhất 20 ký tự.");
            message.focus();
            event.preventDefault();
            return false;
        }

        if (email.value === "") {
            alert("Email là bắt buộc.");
            email.focus();
            event.preventDefault();
            return false;
        }

        return true;
    });
});





