const nav = document.getElementById('nav');
const navSticky = document.querySelector('.nav-sticky');
const navStickyWide = document.querySelector('.nav-sticky-wide');
const navSearch = document.querySelector('.nav-search-glass');
const navBars = document.querySelector('.fa-bars');
const navClose = document.querySelector('.fa-times');
const gallery = document.querySelectorAll('.home-gallery .img-box');

const getOffset = (el) => {
    const rect = el.getBoundingClientRect();
    return rect.bottom + window.scrollY;
}

function swapGalleryImg() {
    setTimeout(() => {
        if (window.innerWidth < 850) {
            let currentImg;

            gallery.forEach((image, idx) => {
                if (image.classList.contains('show-img')) {
                    image.classList.remove('show-img');
                    currentImg = idx;
                };
            });

            if (currentImg >= gallery.length - 1) {
                currentImg = 0;
            } else {
                currentImg += 1;
            };
            
            gallery[currentImg].classList.add('show-img');

        };

        swapGalleryImg();
    }, 5000);
}

function configNavFixed() {
    if (nav.getBoundingClientRect().top < -navSticky.offsetHeight / 2) {
        nav.classList.add('nav-fixed');
    } else if (scrollY <= getOffset(navSticky) - nav.offsetHeight / 2) {
        nav.classList.remove('nav-fixed');
    }
}

function addListeners() {
    window.addEventListener('resize', () => {
        if (window.innerWidth >= 850) {
            nav.classList.remove('show');
            configNavFixed();
        };
    });
    
    window.addEventListener('scroll', () => {
        if (window.innerWidth >= 850) {
            configNavFixed();
        };
    });

    navSearch.addEventListener('click', () => {
        navStickyWide.classList.add('search-show');
    });

    navBars.addEventListener('click', () => {
        nav.classList.add('show');
    })

    navClose.addEventListener('click', () => {
        nav.classList.remove('show');
    })
}

function initScript() {
    addListeners();
    swapGalleryImg();
}

initScript();