// DedSec Terminal Hack - Настоящий стиль консоли взломщика
console.log('%cDEDSEC TERMINAL LOADED','color:#00ff00;font-size:14px;font-weight:bold');

let hackActive = false;
let userIP = 'SCANNING...';
let currentQuestion = 0;

// Запуск через 15 секунд
setTimeout(() => {
    if (!hackActive) {
        console.log('INITIATING SYSTEM BREACH...');
        startTerminalHack();
    }
}, 15000);

// Получение IP адреса
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        userIP = data.ip;
        console.log('Target IP acquired:', userIP);
    })
    .catch(() => {
        userIP = '192.168.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255);
    });

function startTerminalHack() {
    hackActive = true;
    
    // Запускаем музыку
    console.log('Initializing audio subsystem...');
    const audio = new Audio('hack.m4a');
    audio.loop = true;
    audio.volume = 0.3;
    
    audio.play().then(() => {
        console.log('Audio subsystem online');
    }).catch(() => {
        console.log('Audio autoplay blocked, will start on user interaction');
        setTimeout(() => {
            document.addEventListener('click', () => {
                audio.play().then(() => {
                    console.log('Audio subsystem activated');
                }).catch(() => {});
            }, { once: true });
        }, 100);
    });
    
    // Создаем терминальный интерфейс
    const overlay = document.createElement('div');
    overlay.id = 'terminal-overlay';
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
    
    // HTML контент в стиле настоящего терминала
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
            .matrix-column {
                position: absolute;
                top: -200px;
                font-size: 12px;
                color: #00ff00;
                text-shadow: 0 0 3px #00ff00;
                animation: fall linear infinite;
                white-space: pre;
                font-family: 'Courier New', monospace;
                opacity: 0.4;
            }
            @keyframes fall {
                0% { transform: translateY(-200px); opacity: 0.4; }
                100% { transform: translateY(calc(100vh + 200px)); opacity: 0; }
            }
            .terminal-content {
                position: relative;
                z-index: 10;
                padding: 20px;
                font-family: 'Courier New', monospace;
                color: #00ff00;
                background: rgba(0,0,0,0.95);
                min-height: 100vh;
                font-size: 14px;
                line-height: 1.4;
            }
            .terminal-line {
                margin: 3px 0;
            }
            .terminal-prompt {
                color: #00ff00;
                font-weight: bold;
            }
            .terminal-error {
                color: #ff0000;
                font-weight: bold;
            }
            .terminal-warning {
                color: #ffff00;
                font-weight: bold;
            }
            .terminal-info {
                color: #00ffff;
            }
            .cursor {
                animation: blink 1s infinite;
                background: #00ff00;
                color: #000;
            }
            @keyframes blink {
                0%, 50% { opacity: 1; }
                51%, 100% { opacity: 0; }
            }
            .ascii-logo {
                color: #00ff00;
                font-size: 8px;
                line-height: 1;
                text-shadow: 0 0 5px #00ff00;
                font-weight: bold;
            }
            .progress-bar {
                color: #00ff00;
                font-family: monospace;
            }
        </style>
        
        <div class="matrix-rain" id="matrix-rain"></div>
        
        <div class="terminal-content">
            <div class="terminal-line">
                <span class="terminal-prompt">root@dedsec-terminal:~#</span> <span>./initiate_breach.sh</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-info">[INFO]</span> <span>DedSec Terminal v2.1.7 initialized</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-info">[INFO]</span> <span>Scanning network topology...</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-info">[INFO]</span> <span>Target acquired: ${userIP}</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-warning">[WARNING]</span> <span>Bypassing security protocols...</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-error">[BREACH]</span> <span>Administrative access granted</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-error">[BREACH]</span> <span>System integrity compromised</span>
            </div>
            
            <pre class="ascii-logo" style="margin: 20px 0;">
    ██████╗ ███████╗██████╗ ███████╗███████╗ ██████╗
    ██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝
    ██║  ██║█████╗  ██║  ██║███████╗█████╗  ██║     
    ██║  ██║██╔══╝  ██║  ██║╚════██║██╔══╝  ██║     
    ██████╔╝███████╗██████╔╝███████║███████╗╚██████╗
    ╚═════╝ ╚══════╝╚═════╝ ╚══════╝╚══════╝ ╚═════╝
            </pre>
            
            <div class="terminal-line">
                <span class="terminal-prompt">root@dedsec-terminal:~#</span> <span>cat /proc/system_status</span>
            </div>
            <div class="terminal-line">
                <span>HOSTNAME: ${window.location.hostname}</span>
            </div>
            <div class="terminal-line">
                <span>STATUS: COMPROMISED</span>
            </div>
            <div class="terminal-line">
                <span>ACCESS_LEVEL: ROOT</span>
            </div>
            <div class="terminal-line">
                <span>CAMERA_ACCESS: ENABLED</span>
            </div>
            <div class="terminal-line">
                <span>MICROPHONE_ACCESS: ENABLED</span>
            </div>
            <div class="terminal-line">
                <span>KEYLOGGER_STATUS: ACTIVE</span>
            </div>
            <div class="terminal-line">
                <span>NETWORK_MONITOR: RUNNING</span>
            </div>
            <div class="terminal-line">
                <span>BACKDOOR_PORT: 31337</span>
            </div>
            
            <div class="terminal-line" style="margin-top: 20px;">
                <span class="terminal-prompt">root@dedsec-terminal:~#</span> <span>./extract_data.py --target=${userIP}</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-info">[PROCESS]</span> <span>Initializing data extraction...</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-info">[PROCESS]</span> <span>Scanning file system...</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-info">[PROCESS]</span> <span>Extracting credentials...</span>
            </div>
            <div class="terminal-line">
                <span class="terminal-info">[PROCESS]</span> <span>Progress: <span id="progress-text">0</span>%</span>
            </div>
            <div class="terminal-line progress-bar">
                <span>[</span><span id="progress-visual">████████████████████████████████████████</span><span>] <span id="progress-percent">0</span>%</span>
            </div>
            
            <div id="quiz-section" style="display: none; margin-top: 30px;">
                <div class="terminal-line">
                    <span class="terminal-error">[CRITICAL]</span> <span>Security challenge detected</span>
                </div>
                <div class="terminal-line">
                    <span class="terminal-error">[CRITICAL]</span> <span>Multi-factor authentication required</span>
                </div>
                <div class="terminal-line">
                    <span class="terminal-warning">[INPUT]</span> <span>Manual override needed</span>
                </div>
                <div class="terminal-line">
                    <span class="terminal-prompt">root@dedsec-terminal:~#</span> <span>echo "Open browser console (F12)"</span>
                </div>
                <div class="terminal-line">
                    <span>Open browser console (F12)</span>
                </div>
                <div class="terminal-line">
                    <span class="terminal-prompt">root@dedsec-terminal:~#</span> <span>echo "Use: answer('your_response')"</span>
                </div>
                <div class="terminal-line">
                    <span>Use: <span style="color: #ffff00;">answer("your_response")</span></span>
                </div>
                <div class="terminal-line" style="margin-top: 15px;">
                    <span class="terminal-error">[CHALLENGE]</span> <span id="question">Administrator credentials required</span>
                </div>
                <div class="terminal-line">
                    <span class="terminal-prompt">root@dedsec-terminal:~#</span> <span class="cursor">_</span>
                </div>
            </div>
        </div>
    `;
    
    document.body.appendChild(overlay);
    
    // Создаем Matrix rain
    createMatrixRain();
    
    // Запускаем прогресс
    startDataExtraction();
}

function createMatrixRain() {
    const matrixRain = document.getElementById('matrix-rain');
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    const columns = Math.floor(window.innerWidth / 12);
    
    console.log('Matrix background initialized with', columns, 'columns');
    
    for (let i = 0; i < columns; i++) {
        const column = document.createElement('div');
        column.className = 'matrix-column';
        column.style.left = i * 12 + 'px';
        column.style.animationDuration = (Math.random() * 4 + 3) + 's';
        column.style.animationDelay = Math.random() * 2 + 's';
        
        let text = '';
        const columnHeight = Math.floor(Math.random() * 15) + 20;
        for (let j = 0; j < columnHeight; j++) {
            text += chars[Math.floor(Math.random() * chars.length)] + '\n';
        }
        column.textContent = text;
        
        matrixRain.appendChild(column);
    }
}

let progress = 0;
function startDataExtraction() {
    const interval = setInterval(() => {
        progress += Math.floor(Math.random() * 12) + 3;
        if (progress >= 100) {
            progress = 100;
            clearInterval(interval);
            showSecurityChallenge();
        }
        
        const progressText = document.getElementById('progress-text');
        const progressPercent = document.getElementById('progress-percent');
        const progressVisual = document.getElementById('progress-visual');
        
        if (progressText) progressText.textContent = progress;
        if (progressPercent) progressPercent.textContent = progress;
        
        // Обновляем визуальный прогресс-бар
        if (progressVisual) {
            const barLength = 40;
            const filledLength = Math.floor((progress / 100) * barLength);
            const emptyLength = barLength - filledLength;
            progressVisual.textContent = '█'.repeat(filledLength) + '░'.repeat(emptyLength);
        }
    }, 500);
}

function showSecurityChallenge() {
    setTimeout(() => {
        const quizSection = document.getElementById('quiz-section');
        if (quizSection) {
            quizSection.style.display = 'block';
        }
        
        // Выводим в консоль
        console.log('%cDEDSEC SECURITY CHALLENGE ACTIVATED', 'color:#00ff00;font-size:16px;font-weight:bold');
        console.log('%cSYSTEM BREACH DETECTED - AUTHENTICATION REQUIRED', 'color:#ff0000;font-size:14px;font-weight:bold');
        console.log('%cMulti-factor authentication challenge initiated', 'color:#ffff00;font-size:14px');
        console.log('%c' + questions[0].question, 'color:#00ff00;font-size:14px;font-weight:bold');
        console.log('%cUse command: answer("your_response")', 'color:#00ffff;font-size:14px');
    }, 2000);
}

// Вопросы для аутентификации
const questions = [
    { question: 'Administrator full name required for system access', answer: 'фурманов семён михайлович' },
    { question: 'Data encoding method used by target system', answer: 'в двоичном коде' },
    { question: 'Memory allocation unit size in kilobytes', answer: '1024' }
];

// Функция ответа через консоль
window.answer = function(userAnswer) {
    if (!hackActive || currentQuestion >= questions.length) {
        console.log('%c[DEDSEC] Authentication session expired', 'color:#808080;font-size:12px');
        return;
    }
    
    const correct = String(userAnswer).toLowerCase().trim() === questions[currentQuestion].answer;
    
    if (correct) {
        console.log('%cAUTHENTICATION SUCCESSFUL', 'color:#00ff00;font-size:16px;font-weight:bold');
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            setTimeout(() => {
                const questionEl = document.getElementById('question');
                if (questionEl) questionEl.textContent = questions[currentQuestion].question;
                console.log('%cNext authentication level required', 'color:#ffff00;font-size:14px');
                console.log('%c' + questions[currentQuestion].question, 'color:#00ff00;font-size:14px;font-weight:bold');
            }, 2000);
        } else {
            console.log('%cSYSTEM ACCESS GRANTED', 'color:#00ff00;font-size:18px;font-weight:bold');
            console.log('%cBREACH SIMULATION COMPLETE', 'color:#00ff00;font-size:16px;font-weight:bold');
            console.log('%cThis was a security awareness demonstration', 'color:#00ffff;font-size:14px');
            console.log('%cStay vigilant online - DedSec', 'color:#00ff00;font-size:14px');
            
            setTimeout(() => {
                const overlay = document.getElementById('terminal-overlay');
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
        console.log('%cAUTHENTICATION FAILED', 'color:#ff0000;font-size:16px;font-weight:bold');
        console.log('%cAccess denied - Initiating system lockdown', 'color:#ff0000;font-size:14px');
    }
};