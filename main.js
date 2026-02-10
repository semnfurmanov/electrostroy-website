// ============================================
// СЛАЙДЕР HERO СЕКЦИИ (главный баннер)
// ============================================
// Этот файл содержит весь JavaScript код для работы сайта
// Все комментарии написаны для понимания учениками

// Массив слайдов - первый с видео, остальные с картинками
// Каждый слайд - это объект с настройками
let currentSlide = 0; // Текущий активный слайд (начинаем с 0)

const slides = [
    {
        type: 'video', // Тип слайда - видео
        video: 'ЭлектроСтройСервис.mp4', // Путь к видео файлу
        duration: 10000, // Длительность показа в миллисекундах (10 секунд)
        title: 'Электростройсервис',
        text: 'Надежный партнер в области электроснабжения. Полный цикл работ от проектирования до монтажа'
    },
    {
        type: 'image', // Тип слайда - картинка
        bg: 'url(img/slide1.jpeg)', // CSS свойство background-image
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

let autoSlideInterval; // Переменная для хранения таймера автопрокрутки

// ============================================
// ИНИЦИАЛИЗАЦИЯ СЛАЙДЕРА
// ============================================
// Эта функция запускается при загрузке страницы
function initSlider() {
    // Находим нужные элементы на странице через селекторы
    const heroVideo = document.querySelector('.hero-video'); // Видео элемент
    const heroSection = document.querySelector('.hero'); // Секция hero
    const title = document.getElementById('hero-title'); // Заголовок
    
    // Проверяем что мы на главной странице где есть слайдер
    // Если элементов нет - выходим из функции (return)
    if (!heroSection || !title) {
        return;
    }
    
    // Настраиваем видео, если оно есть на странице
    if (heroVideo) {
        heroVideo.muted = true; // Отключаем звук (обязательно для autoplay)
        heroVideo.volume = 0; // Громкость на 0
        
        // Добавляем обработчик события "ended" (видео закончилось)
        // Когда видео заканчивается - переключаем на следующий слайд
        heroVideo.addEventListener('ended', () => {
            changeSlide(1); // 1 = следующий слайд
        });
    }
    
    // Показываем первый слайд (индекс 0)
    showSlide(0);
    // Запускаем автоматическую прокрутку слайдов
    startAutoSlide();
}

// ============================================
// ПОКАЗ КОНКРЕТНОГО СЛАЙДА
// ============================================
// Функция отображает слайд по его индексу (номеру в массиве)
function showSlide(index) {
    // Находим элементы на странице
    const heroVideo = document.querySelector('.hero-video');
    const heroSection = document.querySelector('.hero');
    const title = document.getElementById('hero-title');
    const text = document.getElementById('hero-text');
    
    // Обновляем текущий индекс слайда
    currentSlide = index;
    // Получаем данные слайда из массива по индексу
    const slide = slides[currentSlide];
    
    // Обновляем текст заголовка и описания
    title.textContent = slide.title;
    text.textContent = slide.text;
    
    // Проверяем тип слайда и показываем соответствующий контент
    if (slide.type === 'video' && heroVideo) {
        // Если это видео - показываем видео элемент
        heroVideo.style.display = 'block'; // Делаем видео видимым
        heroSection.style.backgroundImage = 'none'; // Убираем фоновую картинку
        heroVideo.src = slide.video; // Устанавливаем источник видео
        heroVideo.play(); // Запускаем воспроизведение
    } else {
        // Если это картинка - показываем фоновое изображение
        if (heroVideo) {
            heroVideo.style.display = 'none'; // Скрываем видео
        }
        heroSection.style.backgroundImage = slide.bg; // Устанавливаем фон
    }
    
    // Обновляем индикаторы (точки внизу слайдера)
    updateIndicators();
}

// ============================================
// ПЕРЕКЛЮЧЕНИЕ СЛАЙДОВ
// ============================================
// direction: -1 = назад (предыдущий), 1 = вперед (следующий)
function changeSlide(direction) {
    const title = document.getElementById('hero-title');
    const text = document.getElementById('hero-text');
    
    // Останавливаем автопрокрутку при ручном переключении
    // Чтобы пользователь мог спокойно смотреть слайды
    stopAutoSlide();
    
    // Добавляем CSS класс для анимации исчезновения текста
    title.classList.add('fade-out');
    text.classList.add('fade-out');
    
    // Ждем 300мс пока текст исчезнет, затем меняем слайд
    setTimeout(() => {
        // Вычисляем индекс нового слайда
        let newSlide = currentSlide + direction;
        
        // Зацикливание: если вышли за границы массива - переходим на другой конец
        if (newSlide < 0) newSlide = slides.length - 1; // Если меньше 0 - идем в конец
        if (newSlide >= slides.length) newSlide = 0; // Если больше длины - идем в начало
        
        // Показываем новый слайд
        showSlide(newSlide);
        
        // Анимация появления текста
        title.classList.remove('fade-out');
        text.classList.remove('fade-out');
        title.classList.add('fade-in');
        text.classList.add('fade-in');
        
        // Убираем класс анимации через 500мс
        setTimeout(() => {
            title.classList.remove('fade-in');
            text.classList.remove('fade-in');
        }, 500);
    }, 300);
    
    // Возобновляем автопрокрутку после переключения
    startAutoSlide();
}

// ============================================
// ПРЯМОЙ ПЕРЕХОД К СЛАЙДУ
// ============================================
// Используется при клике на индикатор (точку)
function goToSlide(index) {
    stopAutoSlide(); // Останавливаем автопрокрутку
    showSlide(index); // Показываем выбранный слайд
    startAutoSlide(); // Возобновляем автопрокрутку
}

// ============================================
// ОБНОВЛЕНИЕ ИНДИКАТОРОВ
// ============================================
// Подсвечиваем активный индикатор (точку)
function updateIndicators() {
    // Находим все индикаторы на странице
    const indicators = document.querySelectorAll('.indicator');
    
    // Проходим по каждому индикатору
    indicators.forEach((indicator, index) => {
        if (index === currentSlide) {
            // Если это текущий слайд - добавляем класс active
            indicator.classList.add('active');
        } else {
            // Иначе - убираем класс active
            indicator.classList.remove('active');
        }
    });
}

// ============================================
// АВТОМАТИЧЕСКАЯ СМЕНА СЛАЙДОВ
// ============================================
function startAutoSlide() {
    // Сначала останавливаем предыдущий таймер (если был)
    stopAutoSlide();
    
    // Получаем данные текущего слайда
    const currentSlideData = slides[currentSlide];
    
    // Для видео не ставим таймер - оно само переключится по событию 'ended'
    // Для картинок ставим таймер на duration миллисекунд
    if (currentSlideData.type === 'image') {
        // setInterval - запускает функцию каждые N миллисекунд
        autoSlideInterval = setInterval(() => {
            changeSlide(1); // Переключаем на следующий слайд
        }, currentSlideData.duration);
    }
}

// ============================================
// ОСТАНОВКА АВТОПРОКРУТКИ
// ============================================
function stopAutoSlide() {
    // Если таймер существует - останавливаем его
    if (autoSlideInterval) {
        clearInterval(autoSlideInterval); // Очищаем интервал
    }
}

// ============================================
// СКРЫТИЕ/ПОКАЗ ШАПКИ ПРИ СКРОЛЛЕ
// ============================================
let lastScroll = 0; // Запоминаем последнюю позицию скролла
const header = document.querySelector('header'); // Находим шапку

// Добавляем обработчик события scroll (прокрутка страницы)
window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset; // Текущая позиция скролла

    // Затемняем шапку при скролле вниз (больше 50px)
    if (currentScroll > 50) {
        header.classList.add('scrolled'); // Добавляем класс для стилей
    } else {
        header.classList.remove('scrolled'); // Убираем класс
    }

    // Скрываем шапку при скролле вниз, показываем при скролле вверх
    if (currentScroll > lastScroll && currentScroll > 100) {
        // Скроллим вниз и прошли больше 100px - скрываем шапку
        header.style.transform = 'translateY(-100%)'; // Сдвигаем вверх за экран
    } else {
        // Скроллим вверх - показываем шапку
        header.style.transform = 'translateY(0)'; // Возвращаем на место
    }

    lastScroll = currentScroll; // Запоминаем текущую позицию
});

// ============================================
// МОДАЛЬНОЕ ОКНО ОБРАТНОГО ЗВОНКА
// ============================================
// Открытие модального окна
function openCallbackModal() {
    const modal = document.getElementById('callbackModal');
    modal.classList.add('active'); // Добавляем класс для показа
    document.body.style.overflow = 'hidden'; // Блокируем скролл страницы
}

// Закрытие модального окна
function closeCallbackModal() {
    const modal = document.getElementById('callbackModal');
    modal.classList.remove('active'); // Убираем класс
    document.body.style.overflow = ''; // Возвращаем скролл
}

// Закрытие модалки по клику вне её (на затемненный фон)
window.addEventListener('click', (e) => {
    const modal = document.getElementById('callbackModal');
    // Если кликнули именно на модалку (не на её содержимое) - закрываем
    if (e.target === modal) {
        closeCallbackModal();
    }
});

// ============================================
// ОТПРАВКА ФОРМ
// ============================================
// Отправка формы обратного звонка
function submitCallback(event) {
    event.preventDefault(); // Отменяем стандартную отправку формы (перезагрузку страницы)
    
    // Получаем данные из формы
    const formData = new FormData(event.target);
    const data = {
        name: formData.get('name'), // Имя
        phone: formData.get('phone') // Телефон
    };
    
    // Здесь должна быть отправка на сервер (AJAX запрос)
    // Пока просто выводим в консоль для проверки
    console.log('Заявка на обратный звонок:', data);
    
    // Показываем сообщение пользователю
    alert('Спасибо! Мы свяжемся с вами в ближайшее время.');
    
    // Закрываем модалку и очищаем форму
    closeCallbackModal();
    event.target.reset(); // Очищаем поля формы
}

// Отправка основной формы на странице
function submitForm(event) {
    event.preventDefault(); // Отменяем стандартную отправку
    
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

// ============================================
// ПОКАЗ ВСЕХ КЛИЕНТОВ
// ============================================
function showAllClients() {
    // Находим все скрытые элементы клиентов
    const hiddenClients = document.querySelectorAll('.client-item.hidden');
    
    // Проходим по каждому и убираем класс hidden
    hiddenClients.forEach(client => {
        client.classList.remove('hidden');
    });
    
    // Скрываем кнопку "Показать все" после показа
    event.target.style.display = 'none';
}

// ============================================
// СЕРТИФИКАТЫ
// ============================================
function showAllCertificates() {
    // Здесь можно открыть отдельную страницу или модалку со всеми сертификатами
    alert('Открытие полного списка сертификатов');
}

function openCertificate(certName) {
    // Здесь можно открыть lightbox с увеличенным изображением сертификата
    alert('Открытие сертификата: ' + certName);
}

// ============================================
// АНИМАЦИЯ ЭЛЕМЕНТОВ ПРИ СКРОЛЛЕ
// ============================================
// Элементы с классом animate-on-scroll появляются при прокрутке
function animateOnScroll() {
    // Находим все элементы для анимации
    const elements = document.querySelectorAll('.animate-on-scroll');
    
    // Создаем наблюдатель (Observer) - следит когда элемент появляется на экране
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Если элемент виден на экране
            if (entry.isIntersecting) {
                // Добавляем класс animated для запуска CSS анимации
                entry.target.classList.add('animated');
            }
        });
    }, {
        threshold: 0.1, // Элемент считается видимым когда виден хотя бы на 10%
        rootMargin: '0px 0px -50px 0px' // Начинаем анимацию чуть раньше (за 50px до появления)
    });
    
    // Подключаем наблюдатель к каждому элементу
    elements.forEach(element => {
        observer.observe(element);
    });
}

// ============================================
// ПЛАВНЫЙ СКРОЛЛ ДЛЯ ЯКОРНЫХ ССЫЛОК
// ============================================
// Когда кликаем на ссылку с # - плавно прокручиваем к элементу
document.addEventListener('DOMContentLoaded', () => {
    // Находим все ссылки которые начинаются с #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            
            // Пропускаем пустые якоря
            if (href === '#' || href === '') return;
            
            e.preventDefault(); // Отменяем стандартное поведение
            
            // Получаем ID элемента (убираем # из начала)
            const targetId = href.substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                // Плавно прокручиваем к элементу
                targetElement.scrollIntoView({
                    behavior: 'smooth', // Плавная прокрутка
                    block: 'start' // Прокручиваем к началу элемента
                });
                
                // Обновляем URL в адресной строке без перезагрузки
                history.pushState(null, null, href);
            }
        });
    });
});

// ============================================
// ФИЛЬТРАЦИЯ ТОВАРОВ В КАТАЛОГЕ
// ============================================
document.addEventListener('DOMContentLoaded', () => {
    // Находим кнопки фильтров и карточки товаров
    const filterButtons = document.querySelectorAll('.filter-btn');
    const productCards = document.querySelectorAll('.product-card');
    
    // Добавляем обработчик на каждую кнопку фильтра
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Получаем категорию из атрибута data-category
            const category = button.getAttribute('data-category');
            
            // Обновляем активную кнопку (подсветка)
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Фильтруем товары по категории
            productCards.forEach(card => {
                // Если категория "all" или совпадает с категорией товара - показываем
                if (category === 'all' || card.getAttribute('data-category') === category) {
                    card.style.display = 'flex';
                    // Небольшая задержка для плавной анимации появления
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'scale(1)';
                    }, 10);
                } else {
                    // Иначе - скрываем с анимацией
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
        // Обработчик события input (каждый раз когда вводим текст)
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase(); // Получаем текст поиска в нижнем регистре
            
            // Проходим по каждой карточке товара
            productCards.forEach(card => {
                // Получаем название и описание товара
                const title = card.querySelector('h3').textContent.toLowerCase();
                const description = card.querySelector('.product-description').textContent.toLowerCase();
                
                // Если текст поиска найден в названии или описании - показываем
                if (title.includes(searchTerm) || description.includes(searchTerm)) {
                    card.style.display = 'flex';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});

// ============================================
// ЗАПУСК ПРИ ЗАГРУЗКЕ СТРАНИЦЫ
// ============================================
// DOMContentLoaded - событие когда HTML полностью загружен
window.addEventListener('DOMContentLoaded', () => {
    initSlider(); // Инициализируем слайдер
    animateOnScroll(); // Запускаем анимации при скролле
});
