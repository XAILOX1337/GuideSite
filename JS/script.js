
const firstSlide = document.querySelector('#first-slide');
const secondSlide = document.querySelector('#second-slide');
const thirdSlide = document.querySelector('#third-slide');
const fourthSlide = document.querySelector('#fourth-slide');
const fivethSlide = document.querySelector('#fiveth-slide');

const h2Slide = document.querySelector('#h2-slide');
const buttonOpacity = document.querySelector('.button');

window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition > 300) { // Задайте порог прокрутки
        firstSlide.classList.add('active');
    } else {
        firstSlide.classList.remove('active');
    }

    if (scrollPosition > 600) { // Задайте порог прокрутки для второго слайда
        secondSlide.classList.add('active');
    } else {
        secondSlide.classList.remove('active');
    }
    
    if (scrollPosition > 800) { // Задайте порог прокрутки
      thirdSlide.classList.add('active');
  } else {
      thirdSlide.classList.remove('active');
  }

  if (scrollPosition > 1200) { // Задайте порог прокрутки
    fourthSlide.classList.add('active');
} else {
    fourthSlide.classList.remove('active');
}
  if (scrollPosition > 1500) { // Задайте порог прокрутки
    fivethSlide.classList.add('active');
} else {
    fivethSlide.classList.remove('active');
}

    if (scrollPosition > 1800) { // Задайте порог прокрутки для заголовка
        h2Slide.classList.add('active');
    } else {
        h2Slide.classList.remove('active');
    }
    if (scrollPosition > 1900) { // Задайте порог прокрутки для заголовка
        buttonOpacity.classList.add('active');
    } else {
        buttonOpacity.classList.remove('active');
    }
});

/* это можно доделать (чек избранное)
let lastScrollTop = 0;
const header = document.querySelector("header");
const toTop = document.querySelector(".to-top");
const heroSection = document.querySelector(".hero");

window.addEventListener("scroll", () => {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const heroSectionOffsetTop = heroSection.offsetTop;

  if (scrollTop > heroSectionOffsetTop) {
    toTop.classList.add("active");
  } else {
    toTop.classList.remove("active");
  }

  if (scrollTop > lastScrollTop) {
    header.classList.add("hidden");
  } else {
    header.classList.remove("hidden");
  }

  lastScrollTop = scrollTop;
});
*/