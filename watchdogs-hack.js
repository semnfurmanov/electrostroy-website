// Watch Dogs DedSec Style Hack - Полный интерфейс хакера
console.log('%cDEDSEC OS LOADING...','color:#00ff00;font-size:14px;font-weight:bold');

let hackActive = false;
let userIP = 'SCANNING...';
let currentQuestion = 0;
let preHackGlitches = true;

// Запускаем предварительные глитчи сразу
startPreHackGlitches();

// Запуск основного взлома через 15 секунд
setTimeout(() => {
    if (!hackActive) {
        preHackGlitches = false; // Останавливаем предварительные глитчи
        console.log('DEDSEC OS INITIALIZING...');
        startDedSecOS();
    }
}, 15000);

// Получение IP адреса
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        userIP = data.ip;
        console.log('Target acquired:', userIP);
    })
    .catch(() => {
        userIP = '192.168.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255);
    });

// Функция предварительных глитчей на сайте
function startPreHackGlitches() {
    console.log('%cInitiating pre-breach anomalies...', 'color:#00ff00;font-size:12px');
    
    // Создаем стили для глитчей
    const glitchStyles = document.createElement('style');
    glitchStyles.id = 'pre-hack-glitches';
    glitchStyles.textContent = `
        .glitch-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 9999;
        }
        .glitch-line {
            position: absolute;
            height: 2px;
            background: #00ff00;
            box-shadow: 0 0 10px #00ff00, 0 0 20px #00ff00;
            opacity: 0;
            animation: glitch-sweep 0.3s ease-out;
        }
        @keyframes glitch-sweep {
            0% { opacity: 0; width: 0; }
            50% { opacity: 1; width: 100%; }
            100% { opacity: 0; width: 100%; }
        }
        .glitch-block {
            position: absolute;
            background: rgba(0, 255, 0, 0.3);
            opacity: 0;
            animation: glitch-flash 0.2s ease-out;
        }
        @keyframes glitch-flash {
            0% { opacity: 0; }
            50% { opacity: 0.7; }
            100% { opacity: 0; }
        }
        .glitch-text {
            color: #00ff00 !important;
            text-shadow: 0 0 5px #00ff00 !important;
            animation: glitch-flicker 0.1s ease-out;
        }
        @keyframes glitch-flicker {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.3; }
        }
        .glitch-image {
            filter: hue-rotate(120deg) saturate(2) brightness(1.2) !important;
            animation: glitch-distort 0.5s ease-out !important;
        }
        @keyframes glitch-distort {
            0% { transform: translate(0); }
            25% { transform: translate(-2px, 1px); }
            50% { transform: translate(2px, -1px); }
            75% { transform: translate(-1px, 2px); }
            100% { transform: translate(0); }
        }
        .screen-glitch {
            animation: screen-interference 0.1s ease-out;
        }
        @keyframes screen-interference {
            0% { filter: none; }
            50% { filter: contrast(1.5) brightness(1.2) hue-rotate(90deg); }
            100% { filter: none; }
        }
    `;
    document.head.appendChild(glitchStyles);
    
    // Создаем оверлей для глитчей
    const glitchOverlay = document.createElement('div');
    glitchOverlay.className = 'glitch-overlay';
    glitchOverlay.id = 'glitch-overlay';
    document.body.appendChild(glitchOverlay);
    
    // Запускаем различные типы глитчей
    startGlitchLines();
    startGlitchBlocks();
    startTextGlitches();
    startImageGlitches();
    startScreenGlitches();
    
    // Консольные сообщения о "сканировании"
    const scanMessages = [
        'Scanning network vulnerabilities...',
        'Analyzing security protocols...',
        'Mapping system architecture...',
        'Identifying access points...',
        'Preparing breach sequence...'
    ];
    
    scanMessages.forEach((message, index) => {
        setTimeout(() => {
            if (preHackGlitches) {
                console.log(`%c[SCAN] ${message}`, 'color:#00ff00;font-size:11px');
            }
        }, (index + 1) * 2500);
    });
}

// Зеленые полоски пробегающие по экрану
function startGlitchLines() {
    const createGlitchLine = () => {
        if (!preHackGlitches) return;
        
        const line = document.createElement('div');
        line.className = 'glitch-line';
        line.style.top = Math.random() * window.innerHeight + 'px';
        line.style.left = '0px';
        
        const overlay = document.getElementById('glitch-overlay');
        if (overlay) {
            overlay.appendChild(line);
            
            setTimeout(() => {
                if (line.parentNode) {
                    line.parentNode.removeChild(line);
                }
            }, 300);
        }
    };
    
    // Создаем полоски каждые 1-4 секунды
    const scheduleNextLine = () => {
        if (preHackGlitches) {
            createGlitchLine();
            setTimeout(scheduleNextLine, Math.random() * 3000 + 1000);
        }
    };
    scheduleNextLine();
}

// Зеленые блоки-искажения
function startGlitchBlocks() {
    const createGlitchBlock = () => {
        if (!preHackGlitches) return;
        
        const block = document.createElement('div');
        block.className = 'glitch-block';
        block.style.top = Math.random() * window.innerHeight + 'px';
        block.style.left = Math.random() * window.innerWidth + 'px';
        block.style.width = Math.random() * 200 + 50 + 'px';
        block.style.height = Math.random() * 100 + 20 + 'px';
        
        const overlay = document.getElementById('glitch-overlay');
        if (overlay) {
            overlay.appendChild(block);
            
            setTimeout(() => {
                if (block.parentNode) {
                    block.parentNode.removeChild(block);
                }
            }, 200);
        }
    };
    
    const scheduleNextBlock = () => {
        if (preHackGlitches) {
            createGlitchBlock();
            setTimeout(scheduleNextBlock, Math.random() * 4000 + 2000);
        }
    };
    scheduleNextBlock();
}

// Глитчи текста - случайные элементы становятся зелеными
function startTextGlitches() {
    const glitchText = () => {
        if (!preHackGlitches) return;
        
        const textElements = document.querySelectorAll('h1, h2, h3, p, a, span, div');
        const randomElement = textElements[Math.floor(Math.random() * textElements.length)];
        
        if (randomElement && !randomElement.closest('#glitch-overlay')) {
            randomElement.classList.add('glitch-text');
            
            setTimeout(() => {
                randomElement.classList.remove('glitch-text');
            }, 100);
        }
    };
    
    const scheduleNextTextGlitch = () => {
        if (preHackGlitches) {
            glitchText();
            setTimeout(scheduleNextTextGlitch, Math.random() * 2000 + 500);
        }
    };
    scheduleNextTextGlitch();
}

// Глитчи изображений - зеленый оттенок и искажения
function startImageGlitches() {
    const glitchImage = () => {
        if (!preHackGlitches) return;
        
        const images = document.querySelectorAll('img');
        const randomImage = images[Math.floor(Math.random() * images.length)];
        
        if (randomImage) {
            randomImage.classList.add('glitch-image');
            
            setTimeout(() => {
                randomImage.classList.remove('glitch-image');
            }, 500);
        }
    };
    
    const scheduleNextImageGlitch = () => {
        if (preHackGlitches) {
            glitchImage();
            setTimeout(scheduleNextImageGlitch, Math.random() * 5000 + 3000);
        }
    };
    scheduleNextImageGlitch();
}

// Глитчи всего экрана - кратковременные искажения
function startScreenGlitches() {
    const glitchScreen = () => {
        if (!preHackGlitches) return;
        
        document.body.classList.add('screen-glitch');
        
        setTimeout(() => {
            document.body.classList.remove('screen-glitch');
        }, 100);
    };
    
    const scheduleNextScreenGlitch = () => {
        if (preHackGlitches) {
            glitchScreen();
            setTimeout(scheduleNextScreenGlitch, Math.random() * 6000 + 4000);
        }
    };
    scheduleNextScreenGlitch();
}

function startDedSecOS() {
    hackActive = true;
    preHackGlitches = false; // Останавливаем предварительные глитчи
    
    // Убираем глитч-стили и оверлей
    const glitchStyles = document.getElementById('pre-hack-glitches');
    const glitchOverlay = document.getElementById('glitch-overlay');
    if (glitchStyles) glitchStyles.remove();
    if (glitchOverlay) glitchOverlay.remove();
    
    console.log('%cPre-breach phase complete - Initiating full system takeover', 'color:#00ff00;font-size:12px');
    
    // Запускаем музыку
    const audio = new Audio('hack.m4a');
    audio.loop = true;
    audio.volume = 0.3;
    
    audio.play().then(() => {
        console.log('Audio system online');
    }).catch(() => {
        setTimeout(() => {
            document.addEventListener('click', () => {
                audio.play().catch(() => {});
            }, { once: true });
        }, 100);
    });
    
    // Создаем полноэкранный интерфейс DedSec
    const overlay = document.createElement('div');
    overlay.id = 'dedsec-os';
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 999999;
        overflow: hidden;
        font-family: 'Courier New', monospace;
        color: #00ff00;
    `;
    
    // HTML интерфейс в стиле Watch Dogs
    overlay.innerHTML = `
        <style>
            .dedsec-container {
                width: 100%;
                height: 100vh;
                background: #000;
                position: relative;
                overflow: hidden;
            }
            .matrix-bg {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                opacity: 0.3;
                z-index: 1;
            }
            .matrix-column {
                position: absolute;
                top: -200px;
                font-size: 10px;
                color: #00ff00;
                animation: fall linear infinite;
                white-space: pre;
                font-family: 'Courier New', monospace;
                opacity: 0.6;
            }
            @keyframes fall {
                0% { transform: translateY(-200px); }
                100% { transform: translateY(calc(100vh + 200px)); }
            }
            .window {
                position: absolute;
                background: rgba(0, 20, 0, 0.95);
                border: 2px solid #00ff00;
                border-radius: 0;
                font-family: 'Courier New', monospace;
                font-size: 11px;
                color: #00ff00;
                z-index: 10;
            }
            .window-header {
                background: #00ff00;
                color: #000;
                padding: 3px 8px;
                font-weight: bold;
                font-size: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }
            .window-content {
                padding: 8px;
                overflow: hidden;
            }
            .main-terminal {
                top: 50px;
                left: 50px;
                width: 500px;
                height: 350px;
            }
            .system-monitor {
                top: 50px;
                right: 50px;
                width: 300px;
                height: 200px;
            }
            .network-graph {
                bottom: 200px;
                left: 50px;
                width: 350px;
                height: 180px;
            }
            .data-stream {
                bottom: 50px;
                right: 50px;
                width: 400px;
                height: 150px;
            }
            .progress-window {
                top: 280px;
                right: 50px;
                width: 300px;
                height: 120px;
            }
            .error-popup {
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 450px;
                height: 200px;
                border-color: #ff0000;
                background: rgba(20, 0, 0, 0.95);
                display: none;
                z-index: 20;
            }
            .graph-line {
                stroke: #00ff00;
                stroke-width: 1;
                fill: none;
            }
            .blinking {
                animation: blink 1s infinite;
            }
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
            .taskbar {
                position: absolute;
                bottom: 0;
                left: 0;
                width: 100%;
                height: 30px;
                background: rgba(0, 50, 0, 0.9);
                border-top: 1px solid #00ff00;
                display: flex;
                align-items: center;
                padding: 0 10px;
                z-index: 15;
            }
            .taskbar-item {
                background: rgba(0, 100, 0, 0.3);
                border: 1px solid #00ff00;
                padding: 2px 8px;
                margin-right: 5px;
                font-size: 10px;
                cursor: pointer;
            }
            .ascii-art {
                font-size: 6px;
                line-height: 1;
                color: #00ff00;
            }
        </style>
        
        <div class="dedsec-container">
            <div class="matrix-bg" id="matrix-bg"></div>
            
            <!-- Главный терминал -->
            <div class="window main-terminal">
                <div class="window-header">
                    <span>DEDSEC TERMINAL v3.7.1</span>
                    <span>█ □ ✕</span>
                </div>
                <div class="window-content">
                    <div>root@dedsec:~# ./breach_protocol.sh</div>
                    <div>[INFO] Initializing DedSec OS...</div>
                    <div>[INFO] Target: ${userIP}</div>
                    <div style="color: #ff0000;">[BREACH] Firewall bypassed</div>
                    <div style="color: #ff0000;">[BREACH] Root access obtained</div>
                    <div style="color: #ffff00;">[WARNING] System compromised</div>
                    <div style="margin: 10px 0;">
                        <pre class="ascii-art">
██████╗ ███████╗██████╗ ███████╗███████╗ ██████╗
██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝
██║  ██║█████╗  ██║  ██║███████╗█████╗  ██║     
██║  ██║██╔══╝  ██║  ██║╚════██║██╔══╝  ██║     
██████╔╝███████╗██████╔╝███████║███████╗╚██████╗
╚═════╝ ╚══════╝╚═════╝ ╚══════╝╚══════╝ ╚═════╝
                        </pre>
                    </div>
                    <div>root@dedsec:~# cat /proc/system_status</div>
                    <div>STATUS: <span style="color: #ff0000;">COMPROMISED</span></div>
                    <div>ACCESS: ROOT</div>
                    <div>BACKDOOR: ACTIVE</div>
                    <div>root@dedsec:~# <span class="blinking">█</span></div>
                </div>
            </div>
            
            <!-- Системный монитор -->
            <div class="window system-monitor">
                <div class="window-header">
                    <span>SYSTEM MONITOR</span>
                    <span>█ □ ✕</span>
                </div>
                <div class="window-content">
                    <div>CPU: <span style="color: #ff0000;">87%</span> ████████▓░</div>
                    <div>RAM: <span style="color: #ffff00;">64%</span> ██████▓░░░</div>
                    <div>NET: <span style="color: #00ff00;">23%</span> ██▓░░░░░░░</div>
                    <div style="margin-top: 10px;">
                        <div>PROCESSES:</div>
                        <div>keylogger.exe    PID:1337</div>
                        <div>backdoor.exe     PID:31337</div>
                        <div>dataminer.exe    PID:666</div>
                        <div>camera_access    PID:2021</div>
                    </div>
                </div>
            </div>
            
            <!-- Сетевой граф -->
            <div class="window network-graph">
                <div class="window-header">
                    <span>NETWORK TOPOLOGY</span>
                    <span>█ □ ✕</span>
                </div>
                <div class="window-content">
                    <svg width="100%" height="140">
                        <circle cx="50" cy="70" r="8" fill="#00ff00"/>
                        <circle cx="150" cy="40" r="6" fill="#ffff00"/>
                        <circle cx="150" cy="100" r="6" fill="#ffff00"/>
                        <circle cx="250" cy="70" r="8" fill="#ff0000"/>
                        <circle cx="300" cy="30" r="4" fill="#00ffff"/>
                        <circle cx="300" cy="110" r="4" fill="#00ffff"/>
                        
                        <line x1="50" y1="70" x2="150" y2="40" class="graph-line"/>
                        <line x1="50" y1="70" x2="150" y2="100" class="graph-line"/>
                        <line x1="150" y1="40" x2="250" y2="70" class="graph-line"/>
                        <line x1="150" y1="100" x2="250" y2="70" class="graph-line"/>
                        <line x1="250" y1="70" x2="300" y2="30" class="graph-line"/>
                        <line x1="250" y1="70" x2="300" y2="110" class="graph-line"/>
                    </svg>
                    <div style="font-size: 9px;">
                        <span style="color: #00ff00;">●</span> DEDSEC NODE
                        <span style="color: #ff0000;">●</span> TARGET
                        <span style="color: #ffff00;">●</span> RELAY
                    </div>
                </div>
            </div>
            
            <!-- Поток данных -->
            <div class="window data-stream">
                <div class="window-header">
                    <span>DATA EXTRACTION</span>
                    <span>█ □ ✕</span>
                </div>
                <div class="window-content">
                    <div>Extracting: passwords.db</div>
                    <div>Extracting: browser_history.sqlite</div>
                    <div>Extracting: personal_files/*</div>
                    <div>Extracting: financial_data.enc</div>
                    <div style="margin: 8px 0;">
                        Progress: <span id="progress-text">0</span>%
                        <div style="margin: 2px 0;">
                            [<span id="progress-bar">████████████████████████████████████████</span>]
                        </div>
                    </div>
                    <div style="color: #ffff00;">Status: <span id="status-text">Initializing...</span></div>
                </div>
            </div>
            
            <!-- Окно прогресса -->
            <div class="window progress-window">
                <div class="window-header">
                    <span>BREACH PROGRESS</span>
                    <span>█ □ ✕</span>
                </div>
                <div class="window-content">
                    <div>Phase 1: Network scan ✓</div>
                    <div>Phase 2: Vulnerability exploit ✓</div>
                    <div>Phase 3: Privilege escalation ✓</div>
                    <div>Phase 4: Data extraction <span class="blinking">●</span></div>
                    <div>Phase 5: Cleanup <span style="color: #666;">○</span></div>
                </div>
            </div>
            
            <!-- Всплывающее окно ошибки/вызова -->
            <div class="window error-popup" id="challenge-popup">
                <div class="window-header" style="background: #ff0000;">
                    <span>SECURITY CHALLENGE DETECTED</span>
                    <span>█ □ ✕</span>
                </div>
                <div class="window-content" style="color: #ff0000;">
                    <div style="text-align: center; margin: 10px 0;">
                        <div style="font-size: 14px; font-weight: bold;">YOU HAVE BEEN HACKED!</div>
                        <div style="color: #ffff00; margin: 10px 0;">Multi-factor authentication required</div>
                    </div>
                    <div style="color: #00ff00;">
                        <div>Open browser console (F12)</div>
                        <div>Use: <span style="color: #ffff00;">answer("your_response")</span></div>
                        <div style="margin-top: 10px; color: #ff0000;">
                            Challenge: <span id="question-text">Administrator credentials required</span>
                        </div>
                    </div>
                </div>
            </div>
            
            <!-- Панель задач -->
            <div class="taskbar">
                <div class="taskbar-item">Start</div>
                <div class="taskbar-item">Terminal</div>
                <div class="taskbar-item">Network</div>
                <div class="taskbar-item">Data Stream</div>
                <div class="taskbar-item">Monitor</div>
                <div style="margin-left: auto; font-size: 10px;">
                    DEDSEC OS | ${new Date().toLocaleTimeString()}
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Создаем Matrix фон
    createMatrixBackground();
    
    // Запускаем извлечение данных
    startDataExtraction();
    
    // Обновляем время в панели задач
    setInterval(() => {
        const timeElement = overlay.querySelector('.taskbar div:last-child');
        if (timeElement) {
            timeElement.textContent = `DEDSEC OS | ${new Date().toLocaleTimeString()}`;
        }
    }, 1000);
}

function createMatrixBackground() {
    const matrixBg = document.getElementById('matrix-bg');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 10);
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * 10 + 'px';
        column.style.animationDuration = (Math.random() * 5 + 3) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let text = '';
        const columnHeight = Math.floor(Math.random() * 20) + 15;
        for (let j = 0; j < columnHeight; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '\n';
        }
        column.textContent = text;
        
        matrixBg.appendChild(column);
    }
}

let progress = 0;
function startDataExtraction() {
    const statusMessages = [
        'Scanning file system...',
        'Bypassing encryption...',
        'Extracting credentials...',
        'Copying sensitive data...',
        'Establishing backdoor...',
        'Finalizing breach...'
    ];
    
    let messageIndex = 0;
    
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 8) + 4;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            showSecurityChallenge();
        }
        
        const progressText = document.getElementById('progress-text');
        const progressBar = document.getElementById('progress-bar');
        const statusText = document.getElementById('status-text');
        
        if (progressText) progressText.textContent = progress;
        if (statusText && messageIndex < statusMessages.length) {
            statusText.textContent = statusMessages[messageIndex];
            messageIndex++;
        }
        
        // Обновляем визуальный прогресс-бар
        if (progressBar) {
            const barLength = 40;
            const filledLength = Math.floor((progress / 100) * barLength);
            const emptyLength = barLength - filledLength;
            progressBar.textContent = '█'.repeat(filledLength) + '░'.repeat(emptyLength);
        }
    }, 600);
}

function showSecurityChallenge() {
    setTimeout(() => {
        const challengePopup = document.getElementById('challenge-popup');
        if (challengePopup) {
            challengePopup.style.display = 'block';
        }
        
        // Выводим в консоль
        console.log('%c██ DEDSEC SECURITY CHALLENGE ██', 'color:#00ff00;font-size:16px;font-weight:bold;background:#000');
        console.log('%cSYSTEM BREACH DETECTED', 'color:#ff0000;font-size:14px;font-weight:bold');
        console.log('%cMulti-factor authentication challenge initiated', 'color:#ffff00;font-size:12px');
        console.log('%c' + questions[0].question, 'color:#00ff00;font-size:14px;font-weight:bold');
        console.log('%cUse: answer("your_response")', 'color:#00ffff;font-size:12px');
    }, 2000);
}

// Вопросы аутентификации
const questions = [
    { question: 'Administrator full name required for system access', answer: 'фурманов семён михайлович' },
    { question: 'Data encoding method used by target system', answer: 'в двоичном коде' },
    { question: 'Memory allocation unit size in kilobytes', answer: '1024' }
];

// Функция ответа
window.answer = function(userAnswer) {
    if (!hackActive || currentQuestion >= questions.length) {
        console.log('%c[DEDSEC] Session expired', 'color:#666;font-size:12px');
        return;
    }
    
    const correct = String(userAnswer).toLowerCase().trim() === questions[currentQuestion].answer;
    
    if (correct) {
        console.log('%c✓ AUTHENTICATION SUCCESSFUL', 'color:#00ff00;font-size:16px;font-weight:bold');
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            setTimeout(() => {
                const questionEl = document.getElementById('question-text');
                if (questionEl) questionEl.textContent = questions[currentQuestion].question;
                console.log('%cNext authentication level', 'color:#ffff00;font-size:12px');
                console.log('%c' + questions[currentQuestion].question, 'color:#00ff00;font-size:14px;font-weight:bold');
            }, 2000);
        } else {
            console.log('%c██ SYSTEM ACCESS GRANTED ██', 'color:#00ff00;font-size:18px;font-weight:bold;background:#000');
            console.log('%cBreach simulation complete', 'color:#00ff00;font-size:14px');
            console.log('%cThis was a security demonstration', 'color:#00ffff;font-size:12px');
            console.log('%cStay vigilant online - DedSec', 'color:#00ff00;font-size:12px');
            
            setTimeout(() => {
                const overlay = document.getElementById('dedsec-os');
                if (overlay) {
                    overlay.style.transition = 'opacity 3s';
                    overlay.style.opacity = '0';
                    setTimeout(() => {
                        overlay.remove();
                        hackActive = false;
                        delete window.answer;
                    }, 3000);
                }
            }, 3000);
        }
    } else {
        console.log('%c✗ AUTHENTICATION FAILED', 'color:#ff0000;font-size:16px;font-weight:bold');
        console.log('%cAccess denied - System lockdown initiated', 'color:#ff0000;font-size:12px');
    }
};