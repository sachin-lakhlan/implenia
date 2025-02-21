const navbarbtn = () => {
            document.getElementById("nav-name").classList.toggle("show-navbar")
            document.getElementById("rotats").classList.toggle("rotate40")
            document.getElementById("transparent").classList.toggle("bg-transparent")
            document.getElementById("rotats2").classList.toggle("rotate-45")
            document.body.classList.toggle("overflow-hidden")
        }
        $('.slider-card').slick({
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: ".left-arrow",
    nextArrow: ".right-arrow",
});