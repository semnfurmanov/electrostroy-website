// Массив слайдов - первый с видео, остальные с картинками
let currentSlide = 0;
const slides = [
    {
        type: 'video',
        video: 'https://github.com/semnfurmanov/electrostroy-website/releases/download/v1.0.0/default.hero',
        duration: 10000, // 10 секунд
        title: 'Электростройсервис',
        text: 'Надежный партнер в области электроснабжения. Полный цикл работ от проектирования до монтажа'
    },
    {
        type: 'image',
        bg: 'url(img/slide1.jpeg)',
        duration: 5000, // 5 секунд
        title: 'Собственное производство',
        text: 'Производство и сборка электрощитового оборудования с гарантией до 10 лет'
    },
    {
        type: 'image',
        bg: 'url(img/slide2.jpeg)',
        duration: 5000,
        title: 'Электромонтажные работы',
        text: 'Выполнение электромонтажных работ квалифицированными специалистами'
    },
    {
        type: 'image',
        bg: 'url(img/slide3.jpeg)',
        duration: 5000,
        title: 'Проектирование',
        text: 'Выполнение работ по проектированию электрооборудования и электросетей'
    }
];

let autoSlideInterval;

// Инициализация слайдера при загрузке страницы
function initSlider() {
    const heroVideo = document.querySelector('.hero-video');
    const heroSection = document.querySelector('.hero');
    const title = document.getElementById('hero-title');
    
    // Проверяем что мы на главной странице где есть слайдер
    if (!heroSection || !title) {
        return;
    }
    
    if (heroVideo) {
        heroVideo.muted = true;
        heroVideo.volume = 0;
        
        // Когда видео заканчивается - переключаем на следующий слайд
        heroVideo.addEventListener('ended', () => {
            changeSlide(1);
        });
    }
    
    // Показываем первый слайд
    showSlide(0);
    startAutoSlide();
}

// Показать конкретный слайд
function showSlide(index) {
    const heroVideo = document.querySelector('.hero-video');
    const heroSection = document.querySelector('.hero');
    const title = document.getElementById('hero-title');
    const text = document.getElementById('hero-text');
    
    currentSlide = index;
    const slide = slides[currentSlide];
    
    // Обновляем текст
    title.textContent = slide.title;
    text.textContent = slide.text;
    
    if (slide.type === 'video') {
        // Показываем видео
        heroVideo.style.display = 'block';
        heroSection.style.backgroundImage = 'none';
        heroVideo.src = slide.video;
        heroVideo.play();
    } else {
        // Показываем картинку
        heroVideo.style.display = 'none';
        heroSection.style.backgroundImage = slide.bg;
    }
    
    updateIndicators();
}

// Переключение слайдов (direction: -1 = назад, 1 = вперед)
function changeSlide(direction) {
    const title = document.getElementById('hero-title');
    const text = document.getElementById('hero-text');
    
    // Останавливаем автопрокрутку при ручном переключении
    stopAutoSlide();
    
    // Анимация исчезновения текста
    title.classList.add('fade-out');
    text.classList.add('fade-out');
    
    setTimeout(() => {
        // Меняем индекс слайда с зацикливанием
        let newSlide = currentSlide + direction;
        if (newSlide < 0) newSlide = slides.length - 1;
        if (newSlide >= slides.length) newSlide = 0;
        
        showSlide(newSlide);
        
        // Анимация появления текста
        title.classList.remove('fade-out');
        text.classList.remove('fade-out');
        title.classList.add('fade-in');
        text.classList.add('fade-in');
        
        setTimeout(() => {
            title.classList.remove('fade-in');
            text.classList.remove('fade-in');
        }, 500);
    }, 300);
    
    // Возобновляем автопрокрутку
    startAutoSlide();
}

// Прямой переход к конкретному слайду по клику на индикатор
function goToSlide(index) {
    const direction = index > currentSlide ? 1 : -1;
    const steps = Math.abs(index - currentSlide);
    
    stopAutoSlide();
    showSlide(index);
    startAutoSlide();
}

// Обновление активного индикатора
function updateIndicators() {
    const indicators = document.querySelectorAll('.indicator');
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            indicator.classList.add('active');
        } else {
            indicator.classList.remove('active');
        }
    });
}

// Автоматическая смена слайдов
function startAutoSlide() {
    stopAutoSlide();
    
    const currentSlideData = slides[currentSlide];
    
    // Для видео не ставим таймер - оно само переключится по событию 'ended'
    if (currentSlideData.type === 'image') {
        autoSlideInterval = setInterval(() => {
            changeSlide(1);
        }, currentSlideData.duration);
    }
}

// Остановка автопрокрутки
function stopAutoSlide() {
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval);
    }
}

// Скрытие/показ шапки при скролле + затемнение фона
let lastScroll = 0;
const header = document.querySelector('header'); 

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    // Затемняем шапку при скролле
    if (currentScroll > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }

    // Скрываем шапку при скролле вниз
    if (currentScroll > lastScroll && currentScroll > 100) {
        header.style.transform = 'translateY(-100%)';
    } else {
        header.style.transform = 'translateY(0)';
    }

    lastScroll = currentScroll;
});

// Модальное окно обратного звонка
function openCallbackModal() {
    const modal = document.getElementById('callbackModal');
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // блокируем скролл страницы
}

function closeCallbackModal() {
    const modal = document.getElementById('callbackModal');
    modal.classList.remove('active');
    document.body.style.overflow = ''; // возвращаем скролл
}

// Закрытие модалки по клику вне её
window.addEventListener('click', (e) => {
    const modal = document.getElementById('callbackModal');
    if (e.target === modal) {
        closeCallbackModal();
    }
});

// Отправка формы обратного звонка
function submitCallback(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone')
    };
    
    // Здесь должна быть отправка на сервер
    console.log('Заявка на обратный звонок:', data);
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    closeCallbackModal();
    event.target.reset();
}

// Отправка основной формы
function submitForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'),
        phone: formData.get('phone')
    };
    
    // Здесь должна быть отправка на сервер
    console.log('Заявка с формы:', data);
    alert('Спасибо! Ваша заявка принята.');
    event.target.reset();
}

// Показать все логотипы клиентов
function showAllClients() {
    const hiddenClients = document.querySelectorAll('.client-item.hidden');
    hiddenClients.forEach(client => {
        client.classList.remove('hidden');
    });
    event.target.style.display = 'none'; // скрываем кнопку после показа всех
}

// Показать все сертификаты
function showAllCertificates() {
    // Здесь можно открыть отдельную страницу или модалку со всеми сертификатами
    alert('Открытие полного списка сертификатов');
}

// Открытие сертификата в полном размере
function openCertificate(certName) {
    // Здесь можно открыть lightbox с увеличенным изображением
    alert('Открытие сертификата: ' + certName);
}

// Запуск при загрузке страницы
window.addEventListener('DOMContentLoaded', () => {
    initSlider();
    animateOnScroll();
});


// Анимация элементов при скролле
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1, // элемент появляется когда виден хотя бы на 10%
        rootMargin: '0px 0px -50px 0px' // начинаем анимацию чуть раньше
    });
    
    elements.forEach(element => {
        observer.observe(element);
    });
}

// Запускаем анимации при загрузке
window.addEventListener('DOMContentLoaded', () => {
    initSlider();
    animateOnScroll();
});


// Плавный скролл для всех якорных ссылок
document.addEventListener('DOMContentLoaded', () => {
    // Находим все ссылки с якорями
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Пропускаем пустые якоря
            if (href === '#' || href === '') return;
            
            e.preventDefault();
            
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Плавная прокрутка к элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Обновляем URL без перезагрузки
                history.pushState(null, null, href);
            }
        });
    });
});


// Фильтрация товаров в каталоге
document.addEventListener('DOMContentLoaded', () => {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            
            // Обновляем активную кнопку
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Фильтруем товары
            productCards.forEach(card => {
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    card.style.opacity = '0';
                    card.style.transform = 'scale(0.9)';
                    setTimeout(() => {
                        card.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Поиск по каталогу
    const searchInput = document.querySelector('.search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            
            productCards.forEach(card => {
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.product-description').textContent.toLowerCase();
                
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});


