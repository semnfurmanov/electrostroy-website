// Система активации через 15 секунд
let _0xa=!1;
console.log('%c[DEBUG] Система загружена, запуск через 15 секунд...','color:#00ff41;font-size:14px');
setTimeout(()=>{
    console.log('%c[DEBUG] Попытка активации...','color:#00ff41;font-size:14px');
    if(!_0xa){
        console.log('%c[DEBUG] Активация разрешена, запуск...','color:#00ff41;font-size:14px');
        _0xb();
    } else {
        console.log('%c[DEBUG] Уже активировано','color:#8b00ff;font-size:14px');
    }
},15e3);

// Генератор случайных глитч-символов
function _0xc(){return'█▓▒░▀▄▌▐│┤╡╢╖╕╣║╗╝╜╛┐└┴┬├─┼╞╟╚╔╩╦╠═╬╧╨╤╥╙╘╒╓╫╪┘┌!@#$%^&*()_+-=[]{}|;:,.<>?/~`01'[Math.floor(Math.random()*82)]}

// Функция глитч-эффекта для текста
function _0xe(_0xf,_0x10=.3){return _0xf.split('').map(_0x11=>Math.random()<_0x10?_0xc():_0x11).join('')}

// Главная функция активации
function _0xb(){
console.log('%c[DEBUG] Функция _0xb() запущена','color:#00ff41;font-size:14px');
_0xa=!0;

// Запуск фоновой музыки (с обработкой ошибки)
const _0x50=new Audio('hack.m4a');
_0x50.loop=!0;
_0x50.volume=.3;
// Попытка запустить звук
const playAudio=()=>{
_0x50.play().catch(()=>{
// Если не получилось - запустим при первом клике
document.addEventListener('click',()=>{_0x50.play().catch(()=>{})},{once:true})
})
};
playAudio();

// Получение IP адреса
let _0x17='TRACKING...';
const _0x18=_0x19=>{_0x17=_0x19;const _0x1a=document.getElementById('user-ip');if(_0x1a){let _0x1b=0;const _0x1c=setInterval(()=>{_0x1a.textContent=_0xe(_0x19,.8);_0x1b++;_0x1b>5&&(clearInterval(_0x1c),_0x1a.textContent=_0x19)},100)}};
fetch('https://api.ipify.org?format=json').then(_0x1d=>_0x1d.json()).then(_0x1e=>{_0x18(_0x1e.ip)}).catch(()=>{fetch('https://api.my-ip.io/ip.json').then(_0x1d=>_0x1d.json()).then(_0x1e=>{_0x18(_0x1e.ip)}).catch(()=>{fetch('https://ipapi.co/json/').then(_0x1d=>_0x1d.json()).then(_0x1e=>{_0x18(_0x1e.ip)}).catch(()=>{_0x18('192.168.'+Math.floor(255*Math.random())+'.'+Math.floor(255*Math.random()))})})});

// Создание оверлея
console.log('%c[DEBUG] Создание оверлея...','color:#00ff41;font-size:14px');
const _0x20=document.createElement('div');
_0x20.id='easter-egg-overlay';
_0x20.style.cssText='position:fixed;top:0;left:0;width:100%;height:100%;background:#000;z-index:999999;overflow-y:auto;overflow-x:hidden;padding:40px 20px';
console.log('%c[DEBUG] Оверлей создан','color:#00ff41;font-size:14px');

// HTML контент с падающим кодом вместо черепа
_0x20.innerHTML='<div style="text-align:center;font-family:Courier New,monospace;padding:20px;max-width:1400px;margin:0 auto;min-height:100vh;color:#00ff41">' +
'<style>' +
'.matrix-bg{position:fixed;top:0;left:0;width:100%;height:100%;z-index:1;pointer-events:none}' +
'.matrix-column{position:absolute;top:-100px;font-family:monospace;font-size:14px;color:#00ff41;text-shadow:0 0 5px #00ff41;animation:matrix-fall linear infinite}' +
'@keyframes matrix-fall{0%{transform:translateY(-100px);opacity:1}100%{transform:translateY(100vh);opacity:0}}' +
'.scanlines{position:fixed;top:0;left:0;width:100%;height:100%;background:repeating-linear-gradient(0deg,rgba(0,255,65,.06) 0,rgba(0,255,65,.06) 1px,transparent 1px,transparent 3px);pointer-events:none;z-index:2;animation:scanline-move 6s linear infinite}' +
'@keyframes scanline-move{0%{transform:translateY(0)}100%{transform:translateY(12px)}}' +
'@keyframes title-glitch{0%,90%,100%{transform:translate(0)}92%{transform:translate(-8px,3px)}94%{transform:translate(8px,-3px)}}' +
'</style>' +
'<div class="matrix-bg" id="matrix-bg"></div>' +
'<div class="scanlines"></div>' +
'<div style="position:relative;z-index:10">' +
'<h1 style="font-size:90px;margin:30px 0;color:#00ff41;letter-spacing:28px;font-weight:900;text-transform:uppercase;animation:title-glitch .3s infinite;text-shadow:3px 0 0 #8b00ff,-3px 0 0 #00ff41">BLACKHAT</h1>' +
'<p style="font-size:20px;letter-spacing:12px;color:#8b00ff;margin-top:30px;font-weight:bold;animation:blink 1.5s infinite">ВЫ ПОПАЛИСЬ! СИСТЕМА ЗАХВАЧЕНА</p>' +
'<div style="margin:60px auto;color:#00ff41;border:5px solid #8b00ff;padding:40px;max-width:800px;background:rgba(0,0,0,.95);box-shadow:0 0 40px rgba(139,0,255,.7)">' +
'<p style="color:#00ff41;font-size:18px">ВАШ IP: <span id="user-ip" style="color:#fff;text-shadow:0 0 8px #fff">TRACKING...</span></p>' +
'<p style="color:#8b00ff;font-size:18px;margin-top:20px">СТАТУС: ПОЛНЫЙ КОНТРОЛЬ</p>' +
'<p style="color:#ff0000;font-size:16px;margin-top:20px">ВНИМАНИЕ: МЫ ВИДИМ ВСЁ ЧТО ВЫ ДЕЛАЕТЕ</p>' +
'</div>' +
'<p style="font-size:26px;color:#00ff41;margin:50px 0;font-weight:bold">КРАЖА ВАШИХ ДАННЫХ: <span id="progress-text" style="color:#fff;font-size:42px;font-weight:900">0</span>%</p>' +
'<div style="width:100%;max-width:900px;height:80px;border:5px solid #00ff41;margin:0 auto;background:#000"><div id="progress-bar" style="width:0%;height:100%;background:linear-gradient(90deg,#00ff41 0%,#8b00ff 50%,#00ff41 100%);transition:width 0.3s"></div></div>' +
'<div class="error-messages" style="font-size:14px;color:#8b00ff;margin-top:40px;min-height:120px"></div>' +
'<div id="quiz" style="display:none;margin-top:100px;padding:60px;border:6px solid #00ff41;opacity:0;transition:opacity 1.5s;background:rgba(0,0,0,.95)">' +
'<p style="color:#00ff41;font-size:28px;margin-bottom:50px;font-weight:bold" id="question-text">ХОТИТЕ ВЕРНУТЬ ДОСТУП? ОТВЕТЬТЕ НА ВОПРОС</p>' +
'<p style="color:#00ff41;font-size:18px;margin-bottom:25px;font-weight:bold">ОТКРОЙТЕ КОНСОЛЬ БРАУЗЕРА (НАЖМИТЕ F12)</p>' +
'<p style="color:#8b00ff;font-size:15px;margin-bottom:20px">ВВЕДИТЕ КОМАНДУ ДЛЯ РАЗБЛОКИРОВКИ:</p>' +
'<pre style="background:#000;border:3px solid #00ff41;padding:25px;color:#00ff41;margin-top:25px;font-size:17px">answer("ваш ответ")</pre>' +
'<p id="error" style="color:#8b00ff;font-size:22px;margin-top:50px;display:none;padding:30px;border:5px solid #8b00ff;font-weight:bold">НЕВЕРНО! НАЧИНАЕМ УДАЛЕНИЕ ФАЙЛОВ...</p>' +
'<p id="success" style="color:#00ff41;font-size:22px;margin-top:50px;display:none;padding:30px;border:5px solid #00ff41;font-weight:bold">ПРАВИЛЬНО! ПЕРЕХОД К СЛЕДУЮЩЕМУ УРОВНЮ ЗАЩИТЫ...</p>' +
'</div>' +
'</div>' +
'</div>';
document.body.appendChild(_0x20);
console.log('%c[DEBUG] Оверлей добавлен в DOM','color:#00ff41;font-size:14px');

// Создание падающего кода как в Матрице
function createMatrixRain(){
console.log('%c[DEBUG] Создание Matrix rain...','color:#00ff41;font-size:14px');
const matrixBg=document.getElementById('matrix-bg');
if(!matrixBg){
console.log('%c[ERROR] matrix-bg не найден!','color:#ff0000;font-size:14px');
return;
}
const chars='01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
const columns=Math.floor(window.innerWidth/20);
console.log('%c[DEBUG] Создаем '+columns+' колонок','color:#00ff41;font-size:14px');
for(let i=0;i<columns;i++){
const column=document.createElement('div');
column.className='matrix-column';
column.style.left=i*20+'px';
column.style.animationDuration=(Math.random()*3+2)+'s';
column.style.animationDelay=Math.random()*2+'s';
let text='';
for(let j=0;j<30;j++){
text+=chars[Math.floor(Math.random()*chars.length)]+'<br>';
}
column.innerHTML=text;
matrixBg.appendChild(column);
}
console.log('%c[DEBUG] Matrix rain создан','color:#00ff41;font-size:14px');
}
setTimeout(createMatrixRain,100);
// Массив ошибок системы - злые сообщения
const _0x21=['[CRITICAL] ВАШ КОМПЬЮТЕР ВЗЛОМАН','[WARNING] УДАЛЕНИЕ СИСТЕМНЫХ ФАЙЛОВ...','[ERROR] ДОСТУП К КАМЕРЕ ПОЛУЧЕН','[ALERT] ИЗВЛЕЧЕНИЕ ПАРОЛЕЙ ИЗ БРАУЗЕРА','[CRITICAL] ШИФРОВАНИЕ ЖЁСТКОГО ДИСКА: 15%','[WARNING] ОТПРАВКА ДАННЫХ НА СЕРВЕР...','[ERROR] ВСЕ ВАШИ ФАЙЛЫ ТЕПЕРЬ НАШ','[ALERT] BACKDOOR УСТАНОВЛЕН НАВСЕГДА'];
const _0x22=_0x20.querySelector('.error-messages');
let _0x23=0;

// Показ ошибок с глитч-эффектом
const _0x24=setInterval(()=>{
if(_0x23<_0x21.length){
const _0x25=document.createElement('div');
_0x25.textContent='> '+_0x21[_0x23];
_0x25.style.cssText='margin:8px 0;font-weight:bold';
_0x22.appendChild(_0x25);
_0x23++;
}
},600);

// Прогресс бар загрузки
let _0x26=0;
const _0x27=setInterval(()=>{
_0x26+=Math.floor(12*Math.random())+6;
if(_0x26>=100){
_0x26=100;
clearInterval(_0x27);
clearInterval(_0x24);
setTimeout(()=>{
const _0x28=document.getElementById('quiz');
_0x28.style.display='block';
setTimeout(()=>{_0x28.style.opacity='1'},100)
},1500)
}
const _0x29=document.getElementById('progress-text');
const _0x2a=document.getElementById('progress-bar');
if(_0x29)_0x29.textContent=_0x26;
if(_0x2a)_0x2a.style.width=_0x26+'%'
},350);

// Вопросы викторины - злые формулировки
const _0x2f=[
{question:'ВОПРОС 1: ПОЛНОЕ ИМЯ ВАШЕГО АДМИНИСТРАТОРА',answer:'фурманов семён михайлович'},
{question:'ВОПРОС 2: КАК КОМПЬЮТЕР ХРАНИТ ВАШИ СЕКРЕТЫ?',answer:'в двоичном коде',alternativeAnswers:['0 и 1','двоичный код','binary','01','нули и единицы','в двоичной системе']},
{question:'ВОПРОС 3: СКОЛЬКО БАЙТ МЫ УЖЕ УКРАЛИ? (В 1 КБ)',answer:'1024',alternativeAnswers:['1024 байта','1024 байт']}
];
let _0x30=0;

// Функция ответа через консоль
window.answer=function(_0x31){
if(!_0xa||_0x30>=_0x2f.length){
console.log('%c[BLACKHAT] Система уже разблокирована','color:#808080;font-size:14px');
return
}
const _0x32=String(_0x31).toLowerCase().trim();
const _0x33=_0x2f[_0x30];
const _0x34=document.getElementById('error');
const _0x35=document.getElementById('success');
const _0x36=_0x32===_0x33.answer||(_0x33.alternativeAnswers&&_0x33.alternativeAnswers.some(_0x37=>_0x32===_0x37.toLowerCase()));

if(_0x36){
console.log('%c✓ ПРАВИЛЬНО! ДОСТУП РАЗРЕШЁН!','color:#00ff41;font-size:18px;font-weight:bold');
if(_0x35){
_0x35.style.display='block';
setTimeout(()=>{_0x35.style.display='none'},2500)
}
_0x30++;

if(_0x30<_0x2f.length){
setTimeout(()=>{
const _0x3a=document.getElementById('question-text');
if(_0x3a)_0x3a.innerHTML=_0x2f[_0x30].question;
console.log('%c[BLACKHAT] Вопрос '+(_0x30+1)+' из '+_0x2f.length,'color:#8b00ff;font-size:14px;font-weight:bold');
console.log('%c'+_0x2f[_0x30].question,'color:#00ff41;font-size:16px;font-weight:bold')
},2500)
}else{
console.log('%c✓ СИСТЕМА РАЗБЛОКИРОВАНА','color:#00ff41;font-size:18px;font-weight:bold');
console.log('%cЭТО БЫЛА ПРОВЕРКА БЕЗОПАСНОСТИ','color:#00ff41;font-size:18px;font-weight:bold');
console.log('%cБУДЬТЕ ОСТОРОЖНЫ В ИНТЕРНЕТЕ!','color:#00ff41;font-size:18px;font-weight:bold');
const _0x3b=document.getElementById('easter-egg-overlay');
if(_0x3b){
setTimeout(()=>{
_0x3b.style.transition='opacity 2s';
_0x3b.style.opacity='0';
setTimeout(()=>{
_0x3b.remove();
_0xa=!1;
delete window.answer;
_0x50.pause()
},2000)
},1500)
}
}

}else{
console.log('%c❌ НЕВЕРНО! НАЧИНАЕМ УДАЛЕНИЕ ВАШИХ ФАЙЛОВ...','color:#8b00ff;font-size:18px;font-weight:bold');
if(_0x34){
_0x34.style.display='block';
setTimeout(()=>{_0x34.style.display='none'},3000)
}
}
};

// Вывод в консоль при старте - злые сообщения
setTimeout(()=>{
console.log('%c💀 BLACKHAT SYSTEM 💀','color:#00ff41;font-size:16px;font-weight:bold');
console.log('%cВАШ КОМПЬЮТЕР ПОД НАШИМ КОНТРОЛЕМ','color:#8b00ff;font-size:16px;font-weight:bold');
console.log('%cМЫ ВИДИМ ВСЁ: ФАЙЛЫ, ПАРОЛИ, ФОТО','color:#8b00ff;font-size:16px;font-weight:bold');
console.log('%c⚠ ХОТИТЕ ВЕРНУТЬ КОНТРОЛЬ? ОТВЕТЬТЕ НА ВОПРОСЫ!','color:#8b00ff;font-size:15px;font-weight:bold');
console.log('%c[BLACKHAT] Вопрос 1 из '+_0x2f.length,'color:#8b00ff;font-size:14px;font-weight:bold');
console.log('%c'+_0x2f[0].question,'color:#00ff41;font-size:16px;font-weight:bold');
console.log('%cИспользуйте команду для ответа:','color:#8b00ff;font-size:14px');
console.log('%canswer("ваш ответ")','color:#00ff41;font-size:16px;font-weight:bold;background:#000;padding:5px')
},2500)
}

console.log('%c💀 BLACKHAT LOADED - DEBUG VERSION','color:#8b00ff;font-size:16px;font-weight:bold');
console.log('%c[DEBUG] Скрипт загружен, ожидание 15 секунд...','color:#00ff41;font-size:14px');