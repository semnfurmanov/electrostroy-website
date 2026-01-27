let currentSlide = 0;
const slides = [
    {
        bg: 'url(img/slide1.jpeg)',
        title: 'Собственное производство',
        text: 'Производство и сборка электрощитового оборудования с гарантией до 10 лет'
    },
    {
        bg: 'url(img/slide2.jpeg)',
        title: 'Электромонтажные работы',
        text: 'Выполнение электромонтажных работ квалифицированными специалистами'
    },
    {
        bg: 'url(img/slide3.jpeg)',
        title: 'Проектирование',
        text: 'Выполнение работ по проектированию электрооборудования и электросетей'
    }
];

let autoSlideInterval;

// Initialization slider function
function initSlider() {
    const heroSection = document.querySelector('.hero');
    heroSection.style.backgroundImage = slides[0].bg;
    startAutoSlide();
}

function changeSlide(direction) {
    const heroSection = document.querySelector('.hero');
    const title = document.getElementById('hero-title');
    const text = document.getElementById('hero-text');
    
    // Stop auto slide when manually changing
    stopAutoSlide();
    
    title.classList.add('fade-out');
    text.classList.add('fade-out');
    
    setTimeout(() => {
        currentSlide += direction;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        if (currentSlide >= slides.length) currentSlide = 0;
        
        title.textContent = slides[currentSlide].title;
        text.textContent = slides[currentSlide].text;
        heroSection.style.backgroundImage = slides[currentSlide].bg;
        
        title.classList.remove('fade-out');
        text.classList.remove('fade-out');
        title.classList.add('fade-in');
        text.classList.add('fade-in');
        
        setTimeout(() => {
            title.classList.remove('fade-in');
            text.classList.remove('fade-in');
        }, 500);
    }, 300);
    
    // Re-activate auto slide
    startAutoSlide();
}

// Function for automatic slide switching
function startAutoSlide() {
    stopAutoSlide(); // Clear previous interval if exists
    autoSlideInterval = setInterval(() => {
        changeSlide(1);
    }, 5000); // 5 seconds
}

// Function for stopping automatic slide switching
function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

let lastScroll = 0;
const header = document.querySelector('header'); 

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Call initialization when page loads
window.addEventListener('DOMContentLoaded', initSlider);