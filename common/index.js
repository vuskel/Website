AOS.init();

// Scroll to top button
const btnScrollToTop = document.querySelector("#btnScrollToTop");

btnScrollToTop.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

// Common header and footer
$(function(){
    $("#header").load("/common/header.html");
    $("#footer").load("/common/footer.html");
});
