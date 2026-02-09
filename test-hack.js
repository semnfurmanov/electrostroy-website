// BLACKHAT система взлома - рабочая версия
console.log('%cBLACKHAT LOADED','color:#8b00ff;font-size:14px;font-weight:bold');

let hackActive = false;
let userIP = 'TRACKING...';

// Запуск через 15 секунд
setTimeout(() => {
    if (!hackActive) {
        console.log('🚀 АКТИВАЦИЯ ВЗЛОМА!');
        startHack();
    }
}, 15000);

// Получение IP адреса
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        userIP = data.ip;
        console.log('IP получен:', userIP);
    })
    .catch(() => {
        userIP = '192.168.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255);
    });

function startHack() {
    hackActive = true;
    
    // Запускаем музыку сразу как только начинается взлом
    console.log('Запуск фоновой музыки...');
    const audio = new Audio('hack.m4a');
    audio.loop = true;
    audio.volume = 0.3;
    
    // Пытаемся запустить музыку сразу
    audio.play().then(() => {
        console.log('Музыка запущена успешно');
    }).catch(() => {
        console.log('Автозапуск заблокирован, музыка запустится при клике');
        // Если браузер блокирует автозапуск - запустим при первом клике на экран взлома
        setTimeout(() => {
            document.addEventListener('click', () => {
                audio.play().then(() => {
                    console.log('Музыка запущена после клика');
                }).catch(() => {});
            }, { once: true });
        }, 100);
    });
    
    // Создаем оверлей
    const overlay = document.createElement('div');
    overlay.id = 'hack-overlay';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 999999;
        overflow-y: auto;
        overflow-x: hidden;
        font-family: 'Courier New', monospace;
        color: #00ff00;
    `;
    
    // HTML контент
    overlay.innerHTML = `
        <style>
            .matrix-rain {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                overflow: hidden;
                z-index: 1;
                background: #000;
                pointer-events: none;
            }
            .diagonal-windows {
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                z-index: 2;
                pointer-events: none;
                opacity: 0.1;
            }
            .window-clone {
                position: absolute;
                border: 1px solid #ff0000;
                background: rgba(255,0,0,0.05);
                animation: diagonal-drift 20s linear infinite;
            }
            @keyframes diagonal-drift {
                0% { 
                    transform: translate(-100px, -100px) scale(0.8);
                    opacity: 0.1;
                }
                50% { 
                    opacity: 0.3;
                }
                100% { 
                    transform: translate(100vw, 100vh) scale(1.2);
                    opacity: 0;
                }
            }
            .matrix-column {
                position: absolute;
                top: -200px;
                font-size: 18px;
                color: #00ff41;
                text-shadow: 0 0 8px #00ff41, 0 0 12px #00ff41;
                animation: fall linear infinite;
                white-space: pre;
                font-family: 'Courier New', monospace;
                font-weight: bold;
                line-height: 1.2;
            }
            .matrix-column.bright {
                color: #ffffff;
                text-shadow: 0 0 15px #00ff41, 0 0 25px #00ff41, 0 0 35px #00ff41;
            }
            @keyframes fall {
                0% { 
                    transform: translateY(-200px); 
                    opacity: 1; 
                }
                90% { 
                    opacity: 1; 
                }
                100% { 
                    transform: translateY(calc(100vh + 200px)); 
                    opacity: 0; 
                }
            }
            .hack-content {
                position: relative;
                z-index: 10;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                min-height: 100vh;
                text-align: center;
                padding: 40px 20px;
            }
            .glitch {
                animation: glitch 0.3s infinite;
            }
            @keyframes glitch-subtle {
                0%, 95%, 100% { transform: translate(0); }
                96% { transform: translate(-1px, 1px); }
                98% { transform: translate(1px, -1px); }
            }
            @keyframes fade-glitch {
                0%, 90%, 100% { opacity: 1; }
                92% { opacity: 0.8; }
                94% { opacity: 0.9; }
                96% { opacity: 0.7; }
                98% { opacity: 1; }
            }
            @keyframes blink-red {
                0%, 70%, 100% { color: #ff0000; }
                71%, 85% { color: #8b00ff; }
            }
            @keyframes pulse-border {
                0%, 100% { border-color: #ff0000; box-shadow: 0 0 5px #ff0000; }
                50% { border-color: #8b00ff; box-shadow: 0 0 15px #8b00ff; }
            }
        </style>
        
        <div class="matrix-rain" id="matrix-rain"></div>
        <div class="diagonal-windows" id="diagonal-windows"></div>
        
        <div class="hack-content">
            <pre style="font-size: 12px; color: #ff0000; margin-bottom: 30px; line-height: 1; font-family: monospace; animation: glitch-subtle 2s infinite, fade-glitch 3s infinite;">
                    _______________
                  /               \\
                 /                 \\
                |    XXXXX   XXXXX  |
                |    XXXXX   XXXXX  |
                |         <         |
                |                   |
                \\        ---        /
                 \\                 /
                  \\_______________/
                   \\             /
                    \\___________/
            </pre>
            <h1 style="font-size: 72px; color: #ff0000; margin-bottom: 20px; letter-spacing: 20px; font-weight: 900; animation: glitch-subtle 3s infinite, blink-red 2s infinite;">BLACKHAT</h1>
            <p style="font-size: 28px; color: #ff0000; margin-bottom: 30px; font-weight: bold; animation: blink-red 3s infinite;">ВНИМАНИЕ! ВЫ ВЗЛОМАНЫ!</p>
            <p style="font-size: 20px; color: #8b00ff; margin-bottom: 20px; animation: fade-glitch 4s infinite;">ВАШИ ДАННЫЕ КРАДУТСЯ ПРЯМО СЕЙЧАС</p>
            
            <div style="border: 3px solid #ff0000; padding: 30px; margin: 30px 0; background: rgba(139,0,0,0.2); max-width: 700px; animation: pulse-border 3s infinite;">
                <p style="color: #00ff41; font-size: 18px;">ВАШ IP АДРЕС: <span style="color: #fff; font-weight: bold; text-shadow: 0 0 10px #ff0000;">${userIP}</span></p>
                <p style="color: #ff0000; font-size: 18px; margin-top: 15px; font-weight: bold;">СТАТУС: СИСТЕМА СКОМПРОМЕТИРОВАНА</p>
                <p style="color: #ff0000; font-size: 16px; margin-top: 15px; animation: blink-red 2s infinite;">МЫ КОНТРОЛИРУЕМ ВАШ КОМПЬЮТЕР</p>
                <p style="color: #ff0000; font-size: 16px; margin-top: 10px;">ДОСТУП К КАМЕРЕ: АКТИВЕН</p>
                <p style="color: #ff0000; font-size: 16px; margin-top: 10px;">ДОСТУП К МИКРОФОНУ: АКТИВЕН</p>
                <p style="color: #ff0000; font-size: 16px; margin-top: 10px;">ИЗВЛЕЧЕНИЕ ПАРОЛЕЙ: В ПРОЦЕССЕ</p>
            </div>
            
            <div style="margin: 40px 0;">
                <p style="font-size: 24px; color: #ff0000; margin-bottom: 20px; font-weight: bold; animation: glitch-subtle 2s infinite;">УНИЧТОЖЕНИЕ ФАЙЛОВ: <span id="progress-text" style="color: #fff; font-size: 36px; font-weight: 900; text-shadow: 0 0 15px #ff0000;">0</span>%</p>
                <div style="width: 500px; height: 35px; border: 3px solid #ff0000; background: #000; animation: pulse-border 2s infinite;">
                    <div id="progress-bar" style="width: 0%; height: 100%; background: linear-gradient(90deg, #ff0000, #8b00ff, #ff0000); transition: width 0.5s;"></div>
                </div>
                <p style="color: #ff0000; font-size: 14px; margin-top: 10px; animation: blink-red 2s infinite;">НЕОБРАТИМЫЙ ПРОЦЕСС</p>
            </div>
            
            <div style="background: rgba(255,0,0,0.1); padding: 20px; margin: 30px 0; border: 2px solid #ff0000; animation: pulse-border 4s infinite;">
                <p style="color: #ff0000; font-size: 16px; font-weight: bold;">КРИТИЧЕСКОЕ ПРЕДУПРЕЖДЕНИЕ</p>
                <p style="color: #8b00ff; font-size: 14px; margin-top: 10px;">ВСЕ ВАШИ ЛИЧНЫЕ ФАЙЛЫ БУДУТ УДАЛЕНЫ</p>
                <p style="color: #8b00ff; font-size: 14px;">БАНКОВСКИЕ ДАННЫЕ ПЕРЕДАНЫ НА НАШИ СЕРВЕРЫ</p>
                <p style="color: #8b00ff; font-size: 14px;">ИСТОРИЯ БРАУЗЕРА СКОПИРОВАНА</p>
            </div>
            
            <div id="quiz-section" style="display: none; margin-top: 50px; padding: 40px; border: 3px solid #ff0000; background: rgba(0,0,0,0.95); max-width: 700px; animation: pulse-border 3s infinite;">
                <p style="color: #ff0000; font-size: 24px; margin-bottom: 30px; font-weight: bold; animation: blink-red 2s infinite;">ПОСЛЕДНИЙ ШАНС НА СПАСЕНИЕ</p>
                <p style="color: #00ff41; font-size: 18px; margin-bottom: 20px;">ОТВЕТЬТЕ ПРАВИЛЬНО ИЛИ ПОТЕРЯЕТЕ ВСЁ</p>
                <p style="color: #8b00ff; font-size: 16px; margin-bottom: 20px;">ОТКРОЙТЕ КОНСОЛЬ БРАУЗЕРА (F12)</p>
                <p style="color: #ff0000; font-size: 14px; margin-bottom: 15px; animation: fade-glitch 3s infinite;">У ВАС ЕСТЬ ТОЛЬКО 3 ПОПЫТКИ</p>
                <pre style="background: #000; border: 2px solid #ff0000; padding: 15px; color: #00ff41; font-size: 16px; animation: pulse-border 2s infinite;">answer("ваш ответ")</pre>
                <p id="question" style="color: #00ff41; font-size: 18px; margin-top: 25px; font-weight: bold; animation: glitch-subtle 4s infinite;">ВОПРОС 1: ПОЛНОЕ ИМЯ ВАШЕГО АДМИНИСТРАТОРА</p>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Создаем Matrix rain
    createMatrixEffect();
    
    // Создаем дублирование окон по диагонали
    createDiagonalWindows();
    
    // Запускаем тонкие глитч-эффекты
    startSubtleGlitches();
    
    // Запускаем прогресс бар
    startProgress();
}

function createMatrixEffect() {
    const matrixRain = document.getElementById('matrix-rain');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 15); // Больше колонок
    
    console.log('Создаем Matrix rain с', columns, 'колонками');
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        
        // Случайно делаем некоторые колонки ярче (как в фильме)
        if (Math.random() < 0.1) {
            column.classList.add('bright');
        }
        
        column.style.left = i * 15 + 'px';
        
        // Разная скорость падения для реалистичности
        const speed = Math.random() * 4 + 3; // от 3 до 7 секунд
        column.style.animationDuration = speed + 's';
        column.style.animationDelay = Math.random() * 3 + 's';
        
        // Создаем длинную колонку символов
        let text = '';
        const columnHeight = Math.floor(Math.random() * 20) + 25; // от 25 до 45 символов
        for (let j = 0; j < columnHeight; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '\n';
        }
        column.textContent = text;
        
        matrixRain.appendChild(column);
    }
    
    // Постоянно создаем новые колонки для непрерывного эффекта
    setInterval(() => {
        if (hackActive) {
            // Удаляем старые колонки
            const oldColumns = matrixRain.querySelectorAll('.matrix-column');
            if (oldColumns.length > columns * 2) {
                oldColumns[0].remove();
            }
            
            // Добавляем новую колонку
            const newColumn = document.createElement('div');
            newColumn.className = 'matrix-column';
            
            if (Math.random() < 0.1) {
                newColumn.classList.add('bright');
            }
            
            const randomX = Math.floor(Math.random() * columns) * 15;
            newColumn.style.left = randomX + 'px';
            
            const speed = Math.random() * 4 + 3;
            newColumn.style.animationDuration = speed + 's';
            newColumn.style.animationDelay = '0s';
            
            let text = '';
            const columnHeight = Math.floor(Math.random() * 20) + 25;
            for (let j = 0; j < columnHeight; j++) {
                text += chars[Math.floor(Math.random() * chars.length)] + '\n';
            }
            newColumn.textContent = text;
            
            matrixRain.appendChild(newColumn);
        }
    }, 200); // Новая колонка каждые 200мс
}

// Создание дублирующихся окон по диагонали
function createDiagonalWindows() {
    const windowsContainer = document.getElementById('diagonal-windows');
    
    console.log('Создаем дублирующиеся окна по диагонали');
    
    // Создаем несколько окон с разными размерами и задержками
    for (let i = 0; i < 8; i++) {
        const windowClone = document.createElement('div');
        windowClone.className = 'window-clone';
        
        // Случайные размеры окон
        const width = 200 + Math.random() * 300;
        const height = 150 + Math.random() * 200;
        
        windowClone.style.width = width + 'px';
        windowClone.style.height = height + 'px';
        
        // Случайная позиция старта
        windowClone.style.left = -width + 'px';
        windowClone.style.top = -height + 'px';
        
        // Случайная задержка анимации
        windowClone.style.animationDelay = (i * 3) + 's';
        
        // Добавляем содержимое окна
        windowClone.innerHTML = `
            <div style="background: rgba(0,0,0,0.8); height: 20px; border-bottom: 1px solid #ff0000; padding: 2px 5px; font-size: 10px; color: #ff0000;">
                BLACKHAT TAKEOVER
            </div>
            <div style="padding: 10px; font-size: 12px; color: #8b00ff; font-family: monospace;">
                SYSTEM COMPROMISED<br>
                ACCESS GRANTED<br>
                DATA EXTRACTION: ${Math.floor(Math.random() * 100)}%
            </div>
        `;
        
        windowsContainer.appendChild(windowClone);
    }
}

// Тонкие глитч-эффекты
function startSubtleGlitches() {
    const overlay = document.getElementById('hack-overlay');
    
    // Редкие тонкие глитчи экрана
    setInterval(() => {
        if (hackActive && Math.random() < 0.1) { // 10% шанс глитча
            overlay.style.filter = `contrast(${1.1 + Math.random() * 0.2}) brightness(${0.95 + Math.random() * 0.1})`;
            
            setTimeout(() => {
                overlay.style.filter = 'none';
            }, 100);
        }
    }, 2000); // Каждые 2 секунды
    
    // Очень редкие красные вспышки
    setInterval(() => {
        if (hackActive && Math.random() < 0.05) { // 5% шанс вспышки
            overlay.style.backgroundColor = 'rgba(51,0,0,0.1)';
            setTimeout(() => {
                overlay.style.backgroundColor = '#000';
            }, 150);
        }
    }, 5000); // Каждые 5 секунд
}

let progress = 0;
function startProgress() {
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 15) + 5;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            showQuiz();
        }
        
        const progressText = document.getElementById('progress-text');
        const progressBar = document.getElementById('progress-bar');
        if (progressText) progressText.textContent = progress;
        if (progressBar) progressBar.style.width = progress + '%';
    }, 400);
}

function showQuiz() {
    setTimeout(() => {
        const quizSection = document.getElementById('quiz-section');
        if (quizSection) {
            quizSection.style.display = 'block';
        }
        
        // Выводим в консоль
        console.log('%cBLACKHAT СИСТЕМА АКТИВИРОВАНА', 'color:#ff0000;font-size:20px;font-weight:bold');
        console.log('%cВАШ КОМПЬЮТЕР ПОЛНОСТЬЮ СКОМПРОМЕТИРОВАН', 'color:#ff0000;font-size:16px;font-weight:bold');
        console.log('%cВСЕ ВАШИ ДАННЫЕ КРАДУТСЯ ПРЯМО СЕЙЧАС', 'color:#8b00ff;font-size:16px;font-weight:bold');
        console.log('%cПОСЛЕДНИЙ ШАНС НА СПАСЕНИЕ', 'color:#ff0000;font-size:18px;font-weight:bold');
        console.log('%c' + questions[0].question, 'color:#00ff41;font-size:16px;font-weight:bold');
        console.log('%cУ ВАС ТОЛЬКО 3 ПОПЫТКИ', 'color:#ff0000;font-size:14px;font-weight:bold');
        console.log('%cИспользуйте команду: answer("ваш ответ")', 'color:#00ff41;font-size:16px;font-weight:bold');
    }, 2000);
}

// Вопросы
const questions = [
    { question: 'ВОПРОС 1: ПОЛНОЕ ИМЯ ВАШЕГО АДМИНИСТРАТОРА', answer: 'фурманов семён михайлович' },
    { question: 'ВОПРОС 2: КАК КОМПЬЮТЕР ХРАНИТ ВАШИ СЕКРЕТЫ?', answer: 'в двоичном коде' },
    { question: 'ВОПРОС 3: СКОЛЬКО БАЙТ МЫ УЖЕ УКРАЛИ? (В 1 КБ)', answer: '1024' }
];

let currentQuestion = 0;

// Функция ответа
window.answer = function(userAnswer) {
    if (!hackActive || currentQuestion >= questions.length) {
        console.log('%c[BLACKHAT] Система уже разблокирована', 'color:#808080;font-size:14px');
        return;
    }
    
    const correct = String(userAnswer).toLowerCase().trim() === questions[currentQuestion].answer;
    
    if (correct) {
        console.log('%cПРАВИЛЬНО! ВРЕМЕННАЯ ОТСРОЧКА ПОЛУЧЕНА!', 'color:#00ff41;font-size:18px;font-weight:bold');
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            setTimeout(() => {
                const questionEl = document.getElementById('question');
                if (questionEl) questionEl.textContent = questions[currentQuestion].question;
                console.log('%cСЛЕДУЮЩИЙ УРОВЕНЬ ЗАЩИТЫ', 'color:#ff0000;font-size:16px;font-weight:bold');
                console.log('%c' + questions[currentQuestion].question, 'color:#00ff41;font-size:16px;font-weight:bold');
            }, 2000);
        } else {
            console.log('%cСИСТЕМА РАЗБЛОКИРОВАНА! ВЫ СПАСЕНЫ!', 'color:#00ff41;font-size:20px;font-weight:bold');
            console.log('%cЭТО БЫЛА ПРОВЕРКА БЕЗОПАСНОСТИ', 'color:#00ff41;font-size:18px;font-weight:bold');
            console.log('%cБУДЬТЕ ОСТОРОЖНЫ В ИНТЕРНЕТЕ!', 'color:#00ff41;font-size:18px;font-weight:bold');
            
            setTimeout(() => {
                const overlay = document.getElementById('hack-overlay');
                if (overlay) {
                    overlay.style.transition = 'opacity 2s';
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        hackActive = false;
                        delete window.answer;
                    }, 2000);
                }
            }, 2000);
        }
    } else {
        console.log('%cНЕВЕРНО! НАЧИНАЕМ НЕОБРАТИМОЕ УДАЛЕНИЕ ФАЙЛОВ...', 'color:#ff0000;font-size:18px;font-weight:bold');
        console.log('%cВАШ ЖЁСТКИЙ ДИСК БУДЕТ ОТФОРМАТИРОВАН', 'color:#ff0000;font-size:16px;font-weight:bold');
    }
};