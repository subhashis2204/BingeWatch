const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navbar = document.querySelector('.navbar')
const sticky = navbar.offsetTop


document.querySelectorAll('.carousel').forEach(carousel => {
    console.log(carousel)
    const items = carousel.querySelectorAll('.carousel__item')
    const buttonsHtml = Array.from(items, () => {
        return `<span class = "carousel__btn"></span>`;
    });
    carousel.insertAdjacentHTML("beforeend", `
    <div class = "carousel__nav">
        ${buttonsHtml.join("")}
    </div>
    `)

    const buttons = carousel.querySelectorAll(".carousel__btn");
    console.log(buttons)
    buttons.forEach((button, k) => {
        button.addEventListener("click", () => {

            // unselect all items
            items.forEach(item => item.classList.remove('carousel__item--selected'))
            buttons.forEach(button => button.classList.remove('carousel__btn--selected'))

            items[k].classList.add('carousel__item--selected')
            button.classList.add('carousel__btn--selected')
        })
    })

    items[0].classList.add('carousel__item--selected')
    buttons[0].classList.add('carousel__btn--selected')
})

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

function stickyNavbar() {
    if (window.pageYOffset > sticky) {
        navbar.classList.add("sticky")
    } else {
        navbar.classList.remove("sticky");
    }
}

hamburger.addEventListener("click", mobileMenu);
window.addEventListener('scroll', stickyNavbar)


// make the slider automatic

let currentSlide = 0

const nextSlide = function() {
    const slides = document.querySelectorAll('.carousel__item')
    const buttons = document.querySelectorAll('.carousel__btn')
    slides.forEach(slide => {
        slide.classList.remove('carousel__item--selected')
    })
    buttons.forEach(button => {
        button.classList.remove('carousel__btn--selected')
    })
    currentSlide = (currentSlide + 1) % slides.length
    console.log(currentSlide)
    slides[currentSlide].classList.add('carousel__item--selected')
    buttons[currentSlide].classList.add('carousel__btn--selected')
}

setInterval(nextSlide, 5000)