// Глобальные функции для управления окнами - ОПРЕДЕЛЯЕМ В САМОМ НАЧАЛЕ!
window.closeWindow = function(event) {
    event.stopPropagation();
    const windowElement = event.target.closest('.hack-window');
    
    // Показываем ошибку закрытия
    showWindowError(event, 'ОШИБКА: ДОСТУП ЗАПРЕЩЕН!', 'Невозможно закрыть системное окно');
    
    // Окно "трясется" в знак протеста
    windowElement.style.animation = 'window-error-shake 0.5s ease-in-out';
    setTimeout(() => {
        if (windowElement) {
            windowElement.style.animation = '';
        }
    }, 500);
    
    // Консольное сообщение
    console.log('%c[СИСТЕМА] Попытка закрытия окна заблокирована', 'color:#ff0000;font-size:12px;font-weight:bold');
    console.log('%cОкно находится под контролем злоумышленника', 'color:#ff0000;font-size:11px');
};

window.minimizeWindow = function(event) {
    event.stopPropagation();
    const windowElement = event.target.closest('.hack-window');
    
    // Показываем ошибку минимизации
    showWindowError(event, 'ОШИБКА: ОПЕРАЦИЯ НЕДОСТУПНА!', 'Минимизация заблокирована системой');
    
    // Окно "дергается"
    windowElement.style.transform += ' scale(0.95)';
    setTimeout(() => {
        windowElement.style.transform = windowElement.style.transform.replace(' scale(0.95)', '');
    }, 200);
    
    console.log('%c[СИСТЕМА] Минимизация заблокирована', 'color:#ff0000;font-size:12px');
};

window.maximizeWindow = function(event) {
    event.stopPropagation();
    const windowElement = event.target.closest('.hack-window');
    
    // Показываем ошибку максимизации
    showWindowError(event, 'ОШИБКА: ФУНКЦИЯ ОТКЛЮЧЕНА!', 'Изменение размера запрещено');
    
    // Окно "пульсирует"
    windowElement.style.transform += ' scale(1.05)';
    setTimeout(() => {
        windowElement.style.transform = windowElement.style.transform.replace(' scale(1.05)', '');
    }, 200);
    
    console.log('%c[СИСТЕМА] Изменение размера заблокировано', 'color:#ff0000;font-size:12px');
};

function showWindowError(event, title, message) {
    const error = document.createElement('div');
    error.className = 'window-error';
    error.style.cssText = `
        position: fixed;
        top: ${event.clientY - 60}px;
        left: ${event.clientX - 120}px;
        width: 240px;
        background: #ff0000;
        color: #fff;
        border: 2px solid #fff;
        padding: 10px;
        font-family: 'Courier New', monospace;
        font-size: 11px;
        z-index: 999999;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.8);
        animation: error-popup 0.3s ease-out;
    `;
    
    error.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 5px; font-size: 12px;">${title}</div>
        <div>${message}</div>
    `;
    
    document.body.appendChild(error);
    
    // Убираем через 2 секунды
    setTimeout(() => {
        error.style.transition = 'opacity 0.3s';
        error.style.opacity = '0';
        setTimeout(() => {
            if (error.parentNode) error.remove();
        }, 300);
    }, 2000);
}

// Коллекция ASCII арта черепов для фоновых приколов - МАКСИМАЛЬНО РАСШИРЕННАЯ
const skullArt = [
    `                  _________-----_____
       _____------           __      ----_
___----             ___------              \\
   ----________        ----                 \\
               -----__    |             _____)
                    __-                /     \\
        _______-----    ___--          \\    /)\\
  ------_______      ---____            \\__/  /
               -----__    \\ --    _          /\\
                      --__--__     \\_____/   \\_/\\
                              ----|   /          |
                                  |  |___________|
                                  |  | ((_(_)| )_)
                                  |  \\_((_(_)|/(_)
                                  \\             (
                                   \\_____________)`,

    `         .ed"""" """$$$$be.
     -"           ^""**$$$e.
   ."                   '$$$c
  /                      "4$$b
 d  3                      $$$$
 $  *                   .$$$$$$
.$  ^c           $$$$$e$$$$$$$$.
d$L  4.         4$$$$$$$$$$$$$$b
$$$$b ^ceeeee.  4$$ECL.F*$$$$$$$
$$$$P d$$$$F $ $$$$$$$$$- $$$$$$
3$$$F "$$$$b   $"$$$$$$$  $$$$*"
 $$P"  "$$b   .$ $$$$$...e$$
  *c    ..    $$ 3$$$$$$$$$$eF
    %ce""    $$$  $$$$$$$$$$*
     *$e.    *** d$$$$$"L$$
      $$$      4J$$$$$% $$$
     $"'$=e....$*$$**$cz$$"
     $  *=%4.$ L L$ P3$$$F
     $   "%*ebJLzb$e$$$$$b
      %..      4$$$$$$$$$$
       $$$e   z$$$$$$$$$$
        "*$c  "$$$$$$$P"
          """*$$$$$$$"`,

    `           ______
        .-"      "-.
       /            \\
      |              |
      |,  .-.  .-.  ,|
      | )(__/  \\__)( |
      |/     /\\     \\|
      (_     ^^     _)
       \\__|IIIIII|__/
        | \\IIIIII/ |
        \\          /
         '--------'`,

    `                       uuuuuuuuuuuuuuuuuuuuu.
                   .u$$$$$$$$$$$$$$$$$$$$$$$$$$W.
                 u$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$Wu.
               $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i
              $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
         '    $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$
           .i$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i
           $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$W
          .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$W
         .$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$i
         #$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$.
         W$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$`,

    `      NO!                          MNO!
     MNO!!         [NBK]          MNNOO!
   MMNO!                           MNNOO!!
 MNOONNOO!   MMMMMMMMMMPPPOII!   MNNO!!!!
 !O! NNO! MMMMMMMMMMMMMPPPOOOII!! NO!
       ! MMMMMMMMMMMMMPPPPOOOOIII! !
        MMMMMMMMMMMMPPPPPOOOOOOII!!
        MMMMMOOOOOOPPPPPPPPOOOOMII!
        MMMMM..    OPPMMP    .,OMI!
        MMMM::   o.,OPMP,.o   ::I!!
          NNM:::.,,OOPM!P,.::::!!
         MMNNNNNOOOOPMO!!IIPPO!!O!
         MMMMMNNNNOO:!!:!!IPPPPOO!
          MMMMMNNOOMMNNIIIPPPOO!!
             MMMONNMMNNNIIIOO!
           MN MOMMMNNNIIIIIO! OO
          MNO! IiiiiiiiiiiiI OOOO
     NNN.MNO!   O!!!!!!!!!O   OONO NO!
    MNNNNNO!    OOOOOOOOOOO    MMNNON!
      MNNNNO!    PPPPPPPPP    MMNON!
         OO!                   ON!`,

    `                 uuuuuuu
             uu$$$$$$$$$$$uu
          uu$$$$$$$$$$$$$$$$$uu
         u$$$$$$$$$$$$$$$$$$$$$u
        u$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$$$$$$$$$$$$$$$$$$$$u
       u$$$$$$"   "$$$"   "$$$$$$u
       "$$$$"      u$u       $$$$"
        $$$u       u$u       u$$$
        $$$u      u$$$u      u$$$
         "$$$$uu$$$   $$$uu$$$$"
          "$$$$$$$"   "$$$$$$$"
            u$$$$$$$u$$$$$$$u
             u$"$"$"$"$"$"$u
  uuu        $$u$ $ $ $ $u$$       uuu
 u$$$$        $$$$$u$u$u$$$       u$$$$
  $$$$$uu      "$$$$$$$$$"     uu$$$$$$
u$$$$$$$$$$$uu    """""    uuuu$$$$$$$$$$
$$$$"""$$$$$$$$$$uuu   uu$$$$$$$$$"""$$$"
 """      ""$$$$$$$$$$$uu ""$"""
           uuuu ""$$$$$$$$$$uuu
  u$$$uuu$$$$$$$$$uu ""$$$$$$$$$$$uuu$$$
  $$$$$$$$$$""""           ""$$$$$$$$$$$"
   "$$$$$"                      ""$$$$""
     $$$"                         $$$$"`,

    `         _______________
        /               \\
       /                 \\
      /                   \\
      |   XXXX     XXXX   |
      |   XXXX     XXXX   |
      |   XXX       XXX   |
      |         X         |
      \\__      XXX     __/
        |\\     XXX     /|
        | |           | |
        | I I I I I I I |
        |  I I I I I I  |
         \\_           _/
          \\_         _/
            \\_______/`,

    `  _____
 /     \\
| () () |
 \\  ^  /
  |||||
  |||||`,

    `       {}           {}
         \\  _---_  /
          \\/     \\/
           |() ()|
            \\ + /
         / HHH  \\
          /  \\_/   \\
        {}          {}`,

    `   _                   _
 _( )                 ( )_
(_, |      __ __      | ,_)
   \\'\    /  ^  \\    /'/
    '\\',/\\      \\,/'/'
      '\\| []   [] |/'
        (_  /^\\  _)
          \\  ~  /
          /HHHHH\\
        /'/{^^^}\\'\
    _,/'/'  ^^^  '\\'\,_
   (_, |           | ,_)
     (_)           (_)`,

    `       ~~~~~~~~~
     /           \\
    /             \\
   | )           ( |
    \\  /C\\   /C\\  /
    /  ~~~   ~~~  \\
    \\___  .^,  ___/
     \`| _______ |\`
  _   | HHHHHHH |   _
 ( )  \\         /  ( )
(_) \\  ~~~~^~~~~ ,/ (_)
  ~\\ "\\         /  /~
     \\  \\     /  /
       \\  \\v/  /
        >     <
       /  /^\\  \\
     /  /     \\  \\
 _~/ "/         \\  \\~_
( ) /             \\ ( )
 (_)               (_)`,

    `  __         __
 / /         \\ \\
/ / -\\-----/- \\ \\
| \\/  \\   /  \\/ |
| /    \\ /    \\ |
\\/ __   /   __ \\/
/ /  \\     /  \\ \\
| |   \\   /   | |
| | . | _ | . | |
| \\___// \\\\___/ |
 \\     \\_/     /
  \\___     ___/
   \\ \\     / /
    \\ vvvvv /
    | (   ) |
    | ^^^^^ |
    \\_______/`,

    `         .AMMMMMMMMMMA.
       .AV. :::.:.:.::MA.
      A' :..        : .\`A
     A'..              . \`A.
    A' :.    :::::::::  : :\`A
    M  .    :::.:.:.:::  . .M
    M  :   ::.:.....::.:   .M
    V : :.::.:........:.:  :V
   A  A:    ..:...:...:.   A A
  .V  MA:.....:M.::.::. .:AM.M
 A'  .VMMMMMMMMM:.:AMMMMMMMV: A
:M .  .\`VMMMMMMV.:A \`VMMMMV .:M:
 V.:.  ..\`VMMMV.:AM..\`VMV' .: V
  V.  .:. .....:AMMA. . .:. .V
   VMM...: ...:.MMMM.: .: MMV
       \`VM: . ..M.:M..:::M'
         \`M::. .:.... .::M
          M:.  :. .... ..M
          V:  M:. M. :M .V
          \`V.:M.. M. :M.V'`,

    `                     ______
                  .-"      "-.
                 /            \\
                |              |
                |,  .-.  .-.  ,|
                | )(__/  \\__)( |
                |/     /\\     \\|
                (_     ^^     _)
                 \\__|IIIIII|__/
                  | \\IIIIII/ |
                  \\          /
                   '--------'`,

    `         e$$$$e.
       e$$$$$$$$$$e
      $$$$$$$$$$$$$$
     d$$$$$$$$$$$$$$b
     $$$$$$$$$$$$$$$$
    4$$$$$$$$$$$$$$$$F
    4$$$$$$$$$$$$$$$$F
     $$$" "$$$$" "$$$
     $$F   4$$F   4$$
     '$F   4$$F   4$"
      $$   $$$$   $P
      4$$$$$"^$$$$$%
       $$$$F  4$$$$
        "$$$ee$$$"
        . *$$$$F4
         $     .$
         "$$$$$$"
          ^$$$$`,

    `                 ___-----------___
           __--~~                 ~~--__
       _-~~                             ~~-_
    _-~                                     ~-_
   /                                           \\
  |                                             |
 |                                               |
 |                                               |
|                                                 |
|                                                 |
|                                                 |
 |                                               |
 |  |    _-------_               _-------_    |  |
 |  |  /~         ~\\           /~         ~\\  |  |
  ||  |             |         |             |  ||
  || |               |       |               | ||
  || |              |         |              | ||
  |   \\_           /           \\           _/   |
 |      ~~--_____-~    /~V~\\    ~-_____--~~      |
 |                    |     |                    |
|                    |       |                    |
|                    |  /^\\  |                    |
 |                    ~~   ~~                    |
  \\_         _                       _         _/
    ~--____-~ ~\\                   /~ ~-____--~
         \\     /\\                 /\\     /
          \\    | ( ,           , ) |    /
           |   | (~(__(  |  )__)~) |   |
            |   \\/ (  (~~|~~)  ) \\/   |
             |   |  [ [  |  ] ]  /   |
              |                     |
               \\                   /
                ~-_             _-~
                   ~--___-___--~`,

    `     @@@@@                                        @@@@@
@@@@@@@                                      @@@@@@@
@@@@@@@           @@@@@@@@@@@@@@@            @@@@@@@
 @@@@@@@@       @@@@@@@@@@@@@@@@@@@        @@@@@@@@
     @@@@@     @@@@@@@@@@@@@@@@@@@@@     @@@@@
       @@@@@  @@@@@@@@@@@@@@@@@@@@@@@  @@@@@
         @@  @@@@@@@@@@@@@@@@@@@@@@@@@  @@
            @@@@@@@    @@@@@@    @@@@@@
            @@@@@@      @@@@      @@@@@
            @@@@@@      @@@@      @@@@@
             @@@@@@    @@@@@@    @@@@@
              @@@@@@@@@@@  @@@@@@@@@@
               @@@@@@@@@@  @@@@@@@@@
           @@   @@@@@@@@@@@@@@@@@   @@
           @@@@  @@@@ @ @ @ @ @@@@  @@@@
          @@@@@   @@@ @ @ @ @ @@@   @@@@@
        @@@@@      @@@@@@@@@@@@@      @@@@@
      @@@@          @@@@@@@@@@@          @@@@
   @@@@@              @@@@@@@              @@@@@
  @@@@@@@                                 @@@@@@@
   @@@@@                                   @@@@@`,

    `                     .ed"""" """$$$$be.
                   -"           ^""**$$$e.
                 ."                   '$$$c
                /                      "4$$b
               d  3                      $$$$
               $  *                   .$$$$$$
              .$  ^c           $$$$$e$$$$$$$$.
              d$L  4.         4$$$$$$$$$$$$$$b
              $$$$b ^ceeeee.  4$$ECL.F*$$$$$$$
  e$""=.      $$$$P d$$$$F $ $$$$$$$$$- $$$$$$
 z$$b. ^c     3$$$F "$$$$b   $"$$$$$$$  $$$$*"      .=""$c
4$$$$L        $$P"  "$$b   .$ $$$$$...e$$        .=  e$$$.
^*$$$$$c  %..   *c    ..    $$ 3$$$$$$$$$$eF     zP  d$$$$$
  "**$$$ec   "   %ce""    $$$  $$$$$$$$$$*    .r" =$$$$P""
        "*$b.  "c  *$e.    *** d$$$$$"L$$    .d"  e$$***"
          ^*$$c ^$c $$$      4J$$$$$% $$$ .e*".eeP"
             "$$$$$$"'$=e....$*$$**$cz$$" "..d$*"
               "*$$$  *=%4.$ L L$ P3$$$F $$$P"
                  "$   "%*ebJLzb$e$$$$$b $P"
                    %..      4$$$$$$$$$$ "
                     $$$e   z$$$$$$$$$$%
                      "*$c  "$$$$$$$P"
                       ."""*$$$$$$$$bc
                    .-"    .$***$$$"""*e.
                 .-"    .e$"     "*$c  ^*b.
          .=*""""    .e$*"          "*bc  "*$e..
        .$"        .z*"               ^*$e.   "*****e.
        $$ee$c   .d"                     "*$.        3.
        ^*$E")$..$"                         *   .ee==d%
           $.d$$$*                           *  J$$$e*
            """""                              "$$$"`,

    `            .-.
           (0.0)
         '=.|m|.='
         .='${"``"}${"``"}=.`,

    `  _        _
_| |      | |_
|_ \\      / _|
  \\ \\____/ /
   \\/_  _\\/
    \\*  */
     |/\\|
     /__\\
    /\\__/\\
  _/ /  \\ \\_
 |_ /    \\ _|
  |_|    |_|`,

    `       @@@@@@@@@@@@@@@@@@
     @@@@@@@@@@@@@@@@@@@@@@@
   @@@@@@@@@@@@@@@@@@@@@@@@@@@
  @@@@@@@@@@@@@@@@@@@@@@@@@@@@@
 @@@@@@@@@@@@@@@/      \\@@@/   @
@@@@@@@@@@@@@@@@\\      @@  @___@
@@@@@@@@@@@@@ @@@@@@@@@@  | \\@@@@@
@@@@@@@@@@@@@ @@@@@@@@@\\__@_/@@@@@
 @@@@@@@@@@@@@@@/,/,/./'/_|.\\'\,\\
   @@@@@@@@@@@@@|  | | | | | | | |
                 \\_|_|_|_|_|_|_|_|`,

    // Новые черепа из коллекции ascii.co.uk
    `                             __xxxxxxxxxxxxxxxx___.
                        _gxXXXXXXXXXXXXXXXXXXXXXXXX!x_
                   __x!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!x_
                ,gXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx_
              ,gXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!_
            _!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!.
          gXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXs
        ,!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!.
       g!XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!
      iXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX!
     ,XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx
     !XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXx`,

    `                          ...----....
                    ..-:"''         ''"-..
                 .-'                      '-.
               .'              .     .       '.
             .'   .          .    .      .    .''.
           .'  .    .       .   .   .     .   . ..:.
         .' .   . .  .       .   .   ..  .   . ....::.
        ..   .   .      .  .    .     .  ..  . ....:IA.
       .:  .   .    .    .  .  .    .. .  .. .. ....:IA.
      .: .   .   ..   .    .     . . .. . ... ....:.:VHA.
      '..  .  .. .   .       .  . .. . .. . .....:.::IHHB.
     .:. .  . .  . .   .  .  . . . ...:.:... .......:HIHMM.
    .:.... .   . ."::"'.. .   .  . .:.:.:II;,. .. ..:IHIMMA
    ':.:..  ..::IHHHHHI::. . .  ...:.::::.,,,. . ....VIMMHM
   .:::I. .AHHHHHHHHHHAI::. .:...,:IIHHHHHHMMMHHL:. . VMMMM
  .:.:V.:IVHHHHHHHMHMHHH::..:" .:HIHHHHHHHHHHHHHMHHA. .VMMM.
  :..V.:IVHHHHHMMHHHHHHHB... . .:VPHHMHHHMMHHHHHHHHHAI.:VMMI
  ::V..:VIHHHHHHMMMHHHHHH. .   .I":IIMHHMMHHHHHHHHHHHAPI:WMM
  ::". .:.HHHHHHHHMMHHHHHI.  . .:..I:MHMMHHHHHHHHHMHV:':H:WM
  :: . :.::IIHHHHHHMMHHHHV  .ABA.:.:IMHMHMMMHMHHHHV:'. .IHWW
  '.  ..:..:.:IHHHHHMMHV" .AVMHMA.:.'VHMMMMHHHHHV:' .  :IHWV
   :.  .:...:".:.:TPP"   .AVMMHMMA.:. "VMMHHHP.:... .. :IVAI
  .:.   '... .:"'   .   ..HMMMHMMMA::. ."VHHI:::....  .:IHW'
  ...  .  . ..:IIPPIH: ..HMMMI.MMMV:I:.  .:ILLH:.. ...:I:IM
: .   .'"' .:.V". .. .  :HMMM:IMMMI::I. ..:HHIIPPHI::'.P:HM.
:.  .  .  .. ..:.. .    :AMMM IMMMM..:...:IV":T::I::.".:IHIMA
'V:.. .. . .. .  .  .   'VMMV..VMMV :....:V:.:..:....::IHHHMH
  "IHH:.II:.. .:. .  . . . " :HB"" . . ..PI:.::.:::..:IHHMMV"
   :IP""HHII:.  .  .    . . .'V:. . . ..:IH:.:.::IHIHHMMMMM"
   :V:. VIMA:I..  .     .  . .. . .  .:.I:I:..:IHHHHMMHHMMM
   :"VI:.VWMA::. .:      .   .. .:. ..:.I::.:IVHHHMMMHMMMMI
   :."VIIHHMMA:.  .   .   .:  .:.. . .:.II:I:AMMMMMMHMMMMMI
   :..VIHIHMMMI...::.,:.,:!"I:!"I!"I!"V:AI:VAMMMMMMHMMMMMM'
   ':.:HIHIMHHA:"!!"I.:AXXXVVXXXXXXXA:."HPHIMMMMHHMHMMMMMV
     V:H:I:MA:W'I :AXXXIXII:IIIISSSSSSXXA.I.VMMMHMHMMMMMM
       'I::IVA ASSSSXSSSSBBSBMBSSSSSSBBMMMBS.VVMMHIMM'"'
        I:: VPAIMSSSSSSSSSBSSSMMBSSSBBMMMMXXI:MMHIMMI
       .I::. "H:XIIXBBMMMMMMMMMMMMMMMMMBXIXXMMPHIIMM'
       :::I.  ':XSSXXIIIIXSSBMBSSXXXIIIXXSMMAMI:.IMM
       :::I:.  .VSSSSSISISISSSBII:ISSSSBMMB:MI:..:MM
       ::.I:.  ':"SSSSSSSISISSXIIXSSSSBMMB:AHI:..MMM.
       ::.I:. . ..:"BBSSSSSSSSSSSSBBBMMMB:AHHI::.HMMI
       :..::.  . ..::":BBBBBSSBBBMMMB:MMMMHHII::IHHMI
       ':.I:... ....:IHHHHHMMMMMMMMMMMMMMMHHIIIIHMMV"
         "V:. ..:...:.IHHHMMMMMMMMMMMMMMMMHHHMHHMHP'
          ':. .:::.:.::III::IHHHHMMMMMHMHMMHHHHM"
            "::....::.:::..:..::IIIIIHHHHMMMHHMV"
              "::.::.. .. .  ...:::IIHHMMMMHMV"
                "V::... . .I::IHHMMV"'
                  '"VHVHHHAHHHHMMV:"'`,

    `     .... NO! ...                  ... MNO! ...
   ..... MNO!! ...................... MNNOO! ...
 ..... MMNO! ......................... MNNOO!! .
..... MNOONNOO!   MMMMMMMMMMPPPOII!   MNNO!!!! .
 ... !O! NNO! MMMMMMMMMMMMMPPPOOOII!! NO! ....
    ...... ! MMMMMMMMMMMMMPPPPOOOOIII! ! ...
   ........ MMMMMMMMMMMMPPPPPOOOOOOII!! .....
   ........ MMMMMOOOOOOPPPPPPPPOOOOMII! ...
    ....... MMMMM..    OPPMMP    .,OMI! ....
     ...... MMMM::   o.,OPMP,.o   ::I!! ...
         .... NNM:::.,,OOPM!P,.::::!! ....
          .. MMNNNNNOOOOPMO!!IIPPO!!O! .....
         ... MMMMMNNNNOO:!!:!!IPPPPOO! ....
           .. MMMMMNNOOMMNNIIIPPPOO!! ......
          ...... MMMONNMMNNNIIIOO!..........
       ....... MN MOMMMNNNIIIIIO! OO ..........
    ......... MNO! IiiiiiiiiiiiI OOOO ...........
  ...... NNN.MNO! . O!!!!!!!!!O . OONO NO! ........
   .... MNNNNNO! ...OOOOOOOOOOO .  MMNNON!........
   ...... MNNNNO! .. PPPPPPPPP .. MMNON!........
      ...... OO! ................. ON! .......
         ................................`,

    `                      :::!~!!!!!:.
                  .xUHWH!! !!?M88WHX:.
                .X*#M@$!!  !X!M$$$$$$WWx:.
               :!!!!!!?H! :!$!$$$$$$$$$$8X:
              !!~  ~:~!! :~!$!#$$$$$$$$$$8X:
             :!~::!H!<   ~.U$X!?R$$$$$$$$MM!
             ~!~!!!!~~ .:XW$$$U!!?$$$$$$RMM!
               !:~~~ .:!M"T#$$$$WX??#MRRMMM!
               ~?WuxiW*\`   \`"#$$$$8!!!!??!!!
             :X- M$$$$       \`"T#$T~!8$WUXU~
            :%\`  ~#$$$m:        ~!~ ?$$$$$$
          :!\`.-   ~T$$$$8xx.  .xWW- ~""##*"
.....   -~~:<\` !    ~?T#$$@@W@*?$$      /\`
W$@@M!!! .!~~ !!     .:XUW$W!~ \`"~:    :
#"~~\`.:x%\`!!  !H:   !WM$$$$Ti.: .!WUn+!\`
:::~:!!\`:X~ .: ?H.!u "$$$B$$$!W:U!T$$M~
.~~   :X@!.-~   ?@WTWo("*$$$W$TH$! \`
Wi.~!X$?!-~    : ?$$$B$Wu("**$RM!
$R@i.~~ !     :   ~$$$$$B$$en:\`\`
?MXT@Wx.~    :     ~"##*$$$$M~`,

    `       *                                                   *
      *                                                     *
    **                                                       **
*   **                                                       **   *
**   **          *                               *          **   **
***    *         **                             **         *    ***
 ****            *********************************            ****
   *******      ***           *******           ***      *******
      ************             *****             ************
         **********    **** * **   ** *******   **********
               ********** ** **     ** ****************
         *************** ** **  ***  **  *****************
          ******   *********************  ******   ******
                    **********************  ***
                    ************************ **
                     **** ** ** **** ** ** **
                      ***  *  *  **  *  *  ***
                       **                  **
                         *                *`,

    `          .                                                      .
        .n                   .                 .                  n.
  .   .dP                  dP                   9b                 9b.    .
 4    qXb         .       dX                     Xb       .        dXp     t
dX.    9Xb      .dXb    __                         __    dXb.     dXP     .Xb
9XXb._       _.dXXXXb dXXXXbo.                 .odXXXXb dXXXXb._       _.dXXP
 9XXXXXXXXXXXXXXXXXXXVXXXXXXXXOo.           .oOXXXXXXXXVXXXXXXXXXXXXXXXXXXXP
  \`9XXXXXXXXXXXXXXXXXXXXX'~   ~\`OOO8b   d8OOO'~   ~\`XXXXXXXXXXXXXXXXXXXXXP'
    \`9XXXXXXXXXXXP' \`9XX'   DIE    \`98v8P'  HUMAN   \`XXP' \`9XXXXXXXXXXXP'
        ~~~~~~~       9X.          .db|db.          .XP       ~~~~~~~
                        )b.  .dbo.dP'\`v'\`9b.odb.  .dX(
                      ,dXXXXXXXXXXXb     dXXXXXXXXXXXb.
                     dXXXXXXXXXXXP'   .   \`9XXXXXXXXXXXb
                    dXXXXXXXXXXXXb   d|b   dXXXXXXXXXXXXb
                    9XXb'   \`XXXXXb.dX|Xb.dXXXXX'   \`dXXP
                     \`'      9XXXXXX(   )XXXXXXP      \`'
                              XXXX X.\`v'.X XXXX
                              XP^X'\`b   d'\`X^XX
                              X. 9  \`   '  P )X
                              \`b  \`       '  d'
                               \`             '`,

    `    _______________
   /               \\
  /                 \\
//                   \\/\\
\\|   XXXX     XXXX   | /
 |   XXXX     XXXX   |/
 |   XXX       XXX   |
 |                   |
 \\__      XXX      __/
   |\\     XXX     /|
   | |           | |
   | I I I I I I I |
   |  I I I I I I  |
   \\_             _/
     \\_         _/
       \\_______/`,

    `     ..............
   ::::::::::::::::::
  :::::::::::::::
 ::::\`::::::: :::     :
 :::: ::::: :::::    :
 :\`   :::::;     :..~~
 :   ::  :::.     :::.
 :...\`:, :::::...:::
::::::.  :::::::::'
 ::::::::|::::::::  !
 :;;;;;;;;;;;;;;;;']}
 ;--.--.--.--.--.-
  \\/ \\/ \\/ \\/ \\/ \\/
     :::       ::::
      :::      ::
     :\\:      ::
   /\\::    /\\:::
 ^.:^:.^^^::\`::
 ::::::::.::::
  .::::::::::`,

    `                         j                       k
                        .K                       Z.
                        jM.                     .Mk
                        WMk                     jMW
                        YMM.       ,,,,,,      .MMY
                        'MML;:''''''''      '''':;JMM'
                        /'JMMMk.           .jMMMk'\\
                        / 'GMMMI'         'IMMMO' \\
                       /    ~~~'           '~~~    \\
                       /                           \\
                       |                           |
                       |      ;,           ,;      |
                       |      Tk           jT      |
                       |     \`Mk   . .   jM'     |
                       |      YK.   Y   .ZY      |
                        \\     \`Kk   |   jZ'     /
                         \\       \`'  |  \`'       /
                          \\          |          /
                           \\         |         /
                           \\         |         /
                            \\        |        /
                             \\       |       /
                             \\       |       /
                              \\      |      /
                               \\     |     /
                               \\  |  |  |  /
                                \\ {| | |} /
                                 \\ \` | ' /
                                  \\  |  /
                                  \\  |  /
                                   \\   /
                                    \\ /
                                     ~`,

    `                        ____________
                      .~      ,   . ~.
                     /                \\
                    /      /~\\/~\\   ,  \\
                   |   .   \\    /   '   |
                   |         \\/         |
          XX       |  /~~\\        /~~\\  |       XX
        XX  X      | |  o  \\    /  o  | |      X  XX
      XX     X     |  \\____/    \\____/  |     X     XX
 XXXXX     XX      \\         /\\        ,/      XX     XXXXX
X        XX%;;@      \\      /  \\     ,/      @%%;XX        X
X       X  @%%;;@     |           '  |     @%%;;@  X       X
X      X     @%%;;@   |. \` ; ; ; ;  ,|   @%%;;@     X      X
 X    X        @%%;;@                  @%%;;@        X    X
  X   X          @%%;;@              @%%;;@          X   X
   X  X            @%%;;@          @%%;;@            X  X
    XX X             @%%;;@      @%%;;@             X XX
      XXX              @%%;;@  @%%;;@              XXX
                         @%%;;%%;;@
                           @%%;;@
                         @%%;;@..@@
                          @@@  @@@`
];

// Сообщения для создания атмосферы ужаса - РАСШИРЕННЫЕ
const horrorMessages = [
    "ВАС ОТСЛЕЖИВАЮТ...",
    "СИСТЕМА ЗАРАЖЕНА",
    "ДАННЫЕ УКРАДЕНЫ", 
    "ДОСТУП ПОЛУЧЕН",
    "КОНТРОЛЬ ПОТЕРЯН",
    "BACKDOOR ACTIVE",
    "KEYLOGGER RUNNING",
    "CAMERA ACCESSED",
    "MIC RECORDING",
    "FILES ENCRYPTED",
    "RANSOM DEMANDED",
    "NO ESCAPE",
    "GAME OVER",
    "BREACH DETECTED",
    "FIREWALL DOWN",
    "ADMIN COMPROMISED",
    "ROOT ACCESS",
    "SHELL INJECTED",
    "PAYLOAD DEPLOYED",
    "EXFILTRATING...",
    "PERSISTENCE GAINED",
    "LATERAL MOVEMENT",
    "PRIVILEGE ESCALATION",
    "ZERO DAY EXPLOIT",
    "MALWARE INSTALLED",
    "BOTNET JOINED",
    "CRYPTO MINING",
    "DDOS PREPARING",
    "IDENTITY STOLEN",
    "ACCOUNTS HIJACKED",
    "PASSWORDS CRACKED",
    "2FA BYPASSED",
    "VPN COMPROMISED",
    "DNS POISONED",
    "MITM ATTACK",
    "PACKET SNIFFING",
    "TRAFFIC ANALYZED",
    "METADATA LEAKED",
    "LOCATION TRACKED",
    "CONTACTS HARVESTED",
    "EMAILS INTERCEPTED",
    "MESSAGES READ",
    "CALLS MONITORED",
    "WEBCAM HIJACKED",
    "MICROPHONE TAPPED",
    "SCREEN RECORDED",
    "KEYSTROKES LOGGED",
    "CLIPBOARD STOLEN",
    "BROWSER HIJACKED",
    "COOKIES EXTRACTED",
    "SESSIONS CLONED",
    "TOKENS STOLEN",
    "CERTIFICATES FORGED",
    "SIGNATURES FAKED",
    "HASHES CRACKED",
    "SALTS BYPASSED",
    "ENCRYPTION BROKEN",
    "STEGANOGRAPHY USED",
    "COVERT CHANNELS",
    "TIMING ATTACKS",
    "SIDE CHANNELS",
    "FAULT INJECTION",
    "POWER ANALYSIS",
    "ELECTROMAGNETIC",
    "ACOUSTIC ANALYSIS",
    "COLD BOOT ATTACK",
    "EVIL MAID ATTACK",
    "RUBBER DUCKY",
    "USB KILLER",
    "HARDWARE TROJAN",
    "FIRMWARE ROOTKIT",
    "UEFI BOOTKIT",
    "HYPERVISOR ESCAPE",
    "CONTAINER BREAKOUT",
    "SANDBOX EVASION",
    "AV BYPASS",
    "EDR BLIND SPOT",
    "SIEM EVASION",
    "LOG TAMPERING",
    "EVIDENCE DESTROYED",
    "TRACES WIPED",
    "ATTRIBUTION LOST",
    "GHOST IN MACHINE",
    "DIGITAL PHANTOM",
    "CYBER SPECTER",
    "VIRTUAL DEMON",
    "BINARY NIGHTMARE",
    "CODE APOCALYPSE",
    "SYSTEM POSSESSED",
    "MACHINE HAUNTED",
    "SILICON SOUL",
    "ELECTRIC DEATH",
    "DIGITAL DECAY",
    "CYBER CORRUPTION",
    "VIRAL INFECTION",
    "WORM SPREADING",
    "TROJAN HORSE",
    "LOGIC BOMB",
    "TIME BOMB",
    "KILL SWITCH",
    "DEAD MAN SWITCH",
    "SCORCHED EARTH",
    "NUCLEAR OPTION",
    "MUTUALLY ASSURED",
    "TOTAL DESTRUCTION",
    "POINT OF NO RETURN",
    "GAME OVER MAN",
    "RESISTANCE FUTILE",
    "SUBMIT TO CHAOS",
    "EMBRACE THE VOID",
    "WELCOME TO HELL"
];
console.log('%cDEDSEC BREACH PROTOCOL INITIATED','color:#00ff00;font-size:14px;font-weight:bold');

let hackActive = false;
let userIP = 'SCANNING...';
let currentQuestion = 0;
let windowsPhase = false;
let userInfo = {};

// Переменные для блокировки навигации
let navigationBlocked = false;
let originalBack, originalForward, originalGo;
let beforeUnloadHandler;

// Собираем максимум информации о пользователе для запугивания
function gatherUserInfo() {
    userInfo = {
        ip: 'SCANNING...',
        userAgent: navigator.userAgent,
        platform: navigator.platform,
        language: navigator.language,
        screenWidth: screen.width,
        screenHeight: screen.height,
        colorDepth: screen.colorDepth,
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        cookiesEnabled: navigator.cookieEnabled,
        onlineStatus: navigator.onLine,
        browserName: getBrowserName(),
        osName: getOSName(),
        deviceType: getDeviceType(),
        batteryLevel: 'DETECTING...',
        location: 'Россия, Ставрополь'
    };
    
    // Пытаемся получить информацию о батарее (если доступно)
    if ('getBattery' in navigator) {
        navigator.getBattery().then(battery => {
            userInfo.batteryLevel = Math.round(battery.level * 100) + '%';
        });
    }
    
    console.log('%cGathering target intelligence...', 'color:#ff0000;font-size:12px');
}

function getBrowserName() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Chrome')) return 'Google Chrome';
    if (userAgent.includes('Firefox')) return 'Mozilla Firefox';
    if (userAgent.includes('Safari')) return 'Safari';
    if (userAgent.includes('Edge')) return 'Microsoft Edge';
    if (userAgent.includes('Opera')) return 'Opera';
    return 'Unknown Browser';
}

function getOSName() {
    const platform = navigator.platform;
    const userAgent = navigator.userAgent;
    
    if (platform.includes('Mac') || userAgent.includes('Mac')) return 'macOS';
    if (platform.includes('Win')) return 'Windows';
    if (platform.includes('Linux')) return 'Linux';
    if (userAgent.includes('Android')) return 'Android';
    if (userAgent.includes('iPhone') || userAgent.includes('iPad')) return 'iOS';
    return 'Unknown OS';
}

function getDeviceType() {
    const userAgent = navigator.userAgent;
    if (userAgent.includes('Mobile')) return 'Mobile Device';
    if (userAgent.includes('Tablet')) return 'Tablet';
    return 'Desktop Computer';
}

// Инициализируем сбор данных
gatherUserInfo();

// Получение IP адреса с дополнительной геолокацией

// Получение IP адреса с дополнительной геолокацией
fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
        userInfo.ip = data.ip;
        console.log('%cTarget IP acquired:', 'color:#ff0000;font-size:12px', data.ip);
        
        // Пытаемся получить геолокацию по IP
        return fetch(`https://ipapi.co/${data.ip}/json/`);
    })
    .then(response => response.json())
    .then(geoData => {
        // Принудительно устанавливаем Ставрополь
        userInfo.location = 'Россия, Ставрополь';
        userInfo.isp = geoData.org || 'Ростелеком';
        console.log('%cTarget location identified:', 'color:#ff0000;font-size:12px', userInfo.location);
    })
    .catch(() => {
        userInfo.ip = '192.168.' + Math.floor(Math.random() * 255) + '.' + Math.floor(Math.random() * 255);
        userInfo.location = 'Россия, Ставрополь';
    });

// Запуск кинематографической последовательности только при действиях пользователя
// Отслеживаем подозрительные действия
let suspiciousActions = 0;
let hackTriggers = {
    rightClick: false,
    f12Pressed: false,
    ctrlShiftI: false,
    multipleClicks: 0,
    rapidScrolling: false
};

// Отслеживание правой кнопки мыши
document.addEventListener('contextmenu', function(e) {
    hackTriggers.rightClick = true;
    suspiciousActions++;
    console.log('%c[СИСТЕМА] Обнаружена попытка вызова контекстного меню', 'color:#ffff00;font-size:12px');
    checkForHackTrigger();
});

// Отслеживание F12 и DevTools
document.addEventListener('keydown', function(e) {
    if (e.key === 'F12') {
        hackTriggers.f12Pressed = true;
        suspiciousActions++;
        console.log('%c[СИСТЕМА] Обнаружена попытка открытия DevTools (F12)', 'color:#ffff00;font-size:12px');
        checkForHackTrigger();
    }
    
    if (e.ctrlKey && e.shiftKey && e.key === 'I') {
        hackTriggers.ctrlShiftI = true;
        suspiciousActions++;
        console.log('%c[СИСТЕМА] Обнаружена попытка открытия DevTools (Ctrl+Shift+I)', 'color:#ffff00;font-size:12px');
        checkForHackTrigger();
    }
});

// Отслеживание множественных кликов
let clickCount = 0;
let clickTimer;
document.addEventListener('click', function(e) {
    clickCount++;
    clearTimeout(clickTimer);
    
    clickTimer = setTimeout(() => {
        if (clickCount >= 10) { // 10 кликов за короткое время
            hackTriggers.multipleClicks = clickCount;
            suspiciousActions++;
            console.log('%c[СИСТЕМА] Обнаружена подозрительная активность - множественные клики', 'color:#ffff00;font-size:12px');
            checkForHackTrigger();
        }
        clickCount = 0;
    }, 3000);
});

// Отслеживание быстрого скроллинга
let scrollCount = 0;
let scrollTimer;
window.addEventListener('scroll', function() {
    scrollCount++;
    clearTimeout(scrollTimer);
    
    scrollTimer = setTimeout(() => {
        if (scrollCount >= 20) { // Быстрый скроллинг
            hackTriggers.rapidScrolling = true;
            suspiciousActions++;
            console.log('%c[СИСТЕМА] Обнаружена подозрительная активность - быстрый скроллинг', 'color:#ffff00;font-size:12px');
            checkForHackTrigger();
        }
        scrollCount = 0;
    }, 2000);
});

// Проверка условий для запуска взлома
function checkForHackTrigger() {
    console.log('%c[СИСТЕМА] Подозрительных действий:', 'color:#ffff00;font-size:12px', suspiciousActions);
    
    // Показываем предупреждения при накоплении подозрительности
    if (suspiciousActions === 1) {
        showSuspiciousWarning('Обнаружена подозрительная активность');
    } else if (suspiciousActions === 2) {
        showSuspiciousWarning('ВНИМАНИЕ: Множественные подозрительные действия');
    } else if (suspiciousActions >= 3) {
        showSuspiciousWarning('КРИТИЧНО: Система под угрозой');
    }
    
    // Условия для запуска взлома:
    // 1. Минимум 2 подозрительных действия
    // 2. Или попытка открыть DevTools
    // 3. Или множественные клики + правая кнопка
    
    const shouldTrigger = 
        suspiciousActions >= 2 || 
        hackTriggers.f12Pressed || 
        hackTriggers.ctrlShiftI ||
        (hackTriggers.multipleClicks >= 10 && hackTriggers.rightClick);
    
    if (shouldTrigger && !hackActive && !windowsPhase) {
        console.log('%c⚠ ПОДОЗРИТЕЛЬНАЯ АКТИВНОСТЬ ОБНАРУЖЕНА!', 'color:#ff0000;font-size:16px;font-weight:bold');
        console.log('%cИНИЦИИРУЕТСЯ ЗАЩИТНАЯ РЕАКЦИЯ СИСТЕМЫ...', 'color:#ff0000;font-size:14px;font-weight:bold');
        
        // Показываем финальное предупреждение
        showFinalWarning();
        
        // Небольшая задержка для драматизма
        setTimeout(() => {
            console.log('INITIATING SECURITY BREACH RESPONSE...');
            startCinematicHack();
        }, 3000);
    }
}

function showSuspiciousWarning(message) {
    const warning = document.createElement('div');
    warning.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: linear-gradient(45deg, #ff6b00, #ff0000);
        color: #fff;
        padding: 12px 18px;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        font-weight: bold;
        z-index: 100000;
        border: 2px solid #fff;
        border-radius: 4px;
        box-shadow: 0 0 20px rgba(255, 0, 0, 0.6);
        animation: warning-slide-in 0.5s ease-out forwards;
    `;
    
    warning.innerHTML = `
        <div style="display: flex; align-items: center; gap: 8px;">
            <span style="font-size: 16px;">⚠</span>
            <div>
                <div style="font-size: 11px; margin-bottom: 2px;">СИСТЕМА БЕЗОПАСНОСТИ</div>
                <div>${message}</div>
            </div>
        </div>
    `;
    
    document.body.appendChild(warning);
    
    // Убираем через 4 секунды
    setTimeout(() => {
        if (warning.parentNode) {
            warning.style.animation = 'warning-slide-out 0.5s ease-out forwards';
            setTimeout(() => warning.remove(), 500);
        }
    }, 4000);
}

function showFinalWarning() {
    const finalWarning = document.createElement('div');
    finalWarning.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        background: #000;
        border: 3px solid #ff0000;
        color: #ff0000;
        font-family: 'Courier New', monospace;
        font-size: 14px;
        z-index: 200000;
        box-shadow: 0 0 50px rgba(255, 0, 0, 1);
        animation: final-warning-appear 0.8s ease-out forwards;
    `;
    
    finalWarning.innerHTML = `
        <div style="background: #ff0000; color: #000; padding: 12px; text-align: center; font-weight: bold; font-size: 16px;">
            🚨 КРИТИЧЕСКОЕ ПРЕДУПРЕЖДЕНИЕ 🚨
        </div>
        <div style="padding: 20px; text-align: center;">
            <div style="font-weight: bold; margin-bottom: 15px; font-size: 16px;">
                ОБНАРУЖЕНА ПОДОЗРИТЕЛЬНАЯ АКТИВНОСТЬ
            </div>
            <div style="margin-bottom: 10px; color: #ffff00;">
                Система зафиксировала попытки несанкционированного доступа
            </div>
            <div style="margin-bottom: 15px; font-size: 12px;">
                Инициируется протокол защиты...
            </div>
            <div style="font-size: 18px; font-weight: bold; animation: blink 1s infinite;">
                ПОДГОТОВКА К БЛОКИРОВКЕ
            </div>
        </div>
    `;
    
    document.body.appendChild(finalWarning);
    
    // Убираем через 3 секунды (как раз перед запуском взлома)
    setTimeout(() => {
        if (finalWarning.parentNode) {
            finalWarning.style.animation = 'final-warning-disappear 0.5s ease-out forwards';
            setTimeout(() => finalWarning.remove(), 500);
        }
    }, 2500);
}

// Дополнительные триггеры взлома
// Отслеживание попыток выделения текста (как будто ищут что-то подозрительное)
let selectionCount = 0;
document.addEventListener('selectstart', function() {
    selectionCount++;
    if (selectionCount >= 5) {
        suspiciousActions++;
        console.log('%c[СИСТЕМА] Обнаружены множественные попытки выделения текста', 'color:#ffff00;font-size:12px');
        checkForHackTrigger();
        selectionCount = 0;
    }
});

// Отслеживание попыток копирования
document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'c') {
        suspiciousActions++;
        console.log('%c[СИСТЕМА] Обнаружена попытка копирования (Ctrl+C)', 'color:#ffff00;font-size:12px');
        checkForHackTrigger();
    }
    
    if (e.ctrlKey && e.key === 'a') {
        suspiciousActions++;
        console.log('%c[СИСТЕМА] Обнаружена попытка выделения всего (Ctrl+A)', 'color:#ffff00;font-size:12px');
        checkForHackTrigger();
    }
});

// Отслеживание фокуса/расфокуса окна (переключение вкладок)
let tabSwitchCount = 0;
window.addEventListener('blur', function() {
    tabSwitchCount++;
    if (tabSwitchCount >= 3) {
        suspiciousActions++;
        console.log('%c[СИСТЕМА] Обнаружены множественные переключения вкладок', 'color:#ffff00;font-size:12px');
        checkForHackTrigger();
    }
});

// Отслеживание изменения размера окна
let resizeCount = 0;
window.addEventListener('resize', function() {
    resizeCount++;
    if (resizeCount >= 3) {
        suspiciousActions++;
        console.log('%c[СИСТЕМА] Обнаружены множественные изменения размера окна', 'color:#ffff00;font-size:12px');
        checkForHackTrigger();
        resizeCount = 0;
    }
});

// Специальная "ловушка" - скрытая кнопка
function createHiddenTrap() {
    const trap = document.createElement('div');
    trap.style.cssText = `
        position: fixed;
        top: -10px;
        left: -10px;
        width: 1px;
        height: 1px;
        opacity: 0;
        pointer-events: auto;
        z-index: 1;
    `;
    
    trap.addEventListener('click', function() {
        console.log('%c[СИСТЕМА] ЛОВУШКА АКТИВИРОВАНА!', 'color:#ff0000;font-size:16px;font-weight:bold');
        console.log('%cОбнаружена попытка взаимодействия с скрытыми элементами', 'color:#ff0000;font-size:14px');
        suspiciousActions += 3; // Сразу много подозрительности
        checkForHackTrigger();
    });
    
    document.body.appendChild(trap);
}

// Создаем ловушку через 5 секунд
setTimeout(createHiddenTrap, 5000);

// Функция показа предупреждения при попытке увести курсор к кнопке закрытия
function showExitAttemptWarning() {
    const warning = document.createElement('div');
    warning.style.cssText = `
        position: fixed;
        top: 20px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(45deg, #ff0000, #cc0000);
        color: #fff;
        padding: 20px 30px;
        font-family: 'Courier New', monospace;
        font-size: 16px;
        font-weight: bold;
        z-index: 9999998;
        border: 3px solid #fff;
        box-shadow: 0 0 50px rgba(255, 0, 0, 1);
        animation: warning-pulse 0.5s infinite;
        text-align: center;
    `;
    
    warning.innerHTML = `
        <div style="font-size: 24px; margin-bottom: 10px;">⚠️ СТОЙ!</div>
        <div>НЕ ПЫТАЙТЕСЬ ЗАКРЫТЬ ВКЛАДКУ!</div>
        <div style="font-size: 14px; margin-top: 8px; color: #ffff00;">
            Попытка выхода зафиксирована
        </div>
    `;
    
    // Добавляем анимацию пульсации
    const pulseStyle = document.createElement('style');
    pulseStyle.textContent = `
        @keyframes warning-pulse {
            0%, 100% { transform: translateX(-50%) scale(1); }
            50% { transform: translateX(-50%) scale(1.05); }
        }
    `;
    document.head.appendChild(pulseStyle);
    
    document.body.appendChild(warning);
    
    // Убираем через 4 секунды
    setTimeout(() => {
        if (warning.parentNode) {
            warning.style.transition = 'opacity 0.5s';
            warning.style.opacity = '0';
            setTimeout(() => {
                if (warning.parentNode) warning.remove();
            }, 500);
        }
    }, 4000);
}

// Функция критического предупреждения при множественных попытках выхода
function showCriticalExitWarning() {
    const warning = document.createElement('div');
    warning.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(255, 0, 0, 0.95);
        color: #fff;
        font-family: 'Courier New', monospace;
        z-index: 9999999;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        animation: critical-flash 0.3s infinite;
    `;
    
    warning.innerHTML = `
        <div style="font-size: 80px; margin-bottom: 30px;">🚫</div>
        <div style="font-size: 48px; font-weight: bold; margin-bottom: 20px;">
            КРИТИЧЕСКОЕ ПРЕДУПРЕЖДЕНИЕ
        </div>
        <div style="font-size: 32px; margin-bottom: 30px;">
            МНОЖЕСТВЕННЫЕ ПОПЫТКИ ВЫХОДА ОБНАРУЖЕНЫ
        </div>
        <div style="font-size: 24px; color: #ffff00; margin-bottom: 20px;">
            СИСТЕМА ПОЛНОСТЬЮ ЗАБЛОКИРОВАНА
        </div>
        <div style="font-size: 18px; max-width: 600px; text-align: center; line-height: 1.5;">
            Все попытки закрыть вкладку записываются<br>
            IP: ${userInfo.ip}<br>
            Местоположение: ${userInfo.location}<br>
            Время: ${new Date().toLocaleString()}
        </div>
    `;
    
    // Добавляем анимацию мигания
    const flashStyle = document.createElement('style');
    flashStyle.textContent = `
        @keyframes critical-flash {
            0%, 100% { background: rgba(255, 0, 0, 0.95); }
            50% { background: rgba(200, 0, 0, 0.95); }
        }
    `;
    document.head.appendChild(flashStyle);
    
    document.body.appendChild(warning);
    
    // Убираем через 5 секунд
    setTimeout(() => {
        if (warning.parentNode) {
            warning.style.transition = 'opacity 1s';
            warning.style.opacity = '0';
            setTimeout(() => {
                if (warning.parentNode) warning.remove();
            }, 1000);
        }
    }, 5000);
    
    console.log('%c🚫 КРИТИЧЕСКАЯ БЛОКИРОВКА АКТИВИРОВАНА!', 'color:#ff0000;font-size:24px;font-weight:bold');
    console.log('%cВСЕ ПОПЫТКИ ВЫХОДА ЗАПИСЫВАЮТСЯ И ОТСЛЕЖИВАЮТСЯ', 'color:#ff0000;font-size:16px;font-weight:bold');
}

// Функция показа предупреждения при попытке выхода
function showExitBlockedWarning() {
    const warning = document.createElement('div');
    warning.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        background: #000;
        border: 5px solid #ff0000;
        color: #ff0000;
        font-family: 'Courier New', monospace;
        font-size: 18px;
        z-index: 9999999;
        padding: 30px;
        text-align: center;
        box-shadow: 0 0 100px rgba(255, 0, 0, 1);
        animation: exit-warning-shake 0.5s infinite;
    `;
    
    warning.innerHTML = `
        <div style="font-size: 48px; margin-bottom: 20px;">⚠️</div>
        <div style="font-weight: bold; font-size: 24px; margin-bottom: 15px; color: #fff;">
            У ВАС НЕ ПОЛУЧИТСЯ!
        </div>
        <div style="margin-bottom: 15px; font-size: 16px;">
            СИСТЕМА ПОД ПОЛНЫМ КОНТРОЛЕМ
        </div>
        <div style="margin-bottom: 15px; color: #ffff00;">
            ВЫХОД ЗАБЛОКИРОВАН
        </div>
        <div style="font-size: 14px; color: #ff6666;">
            Попытка закрытия зафиксирована<br>
            IP: ${userInfo.ip}<br>
            Время: ${new Date().toLocaleTimeString()}
        </div>
    `;
    
    // Добавляем анимацию тряски
    const shakeStyle = document.createElement('style');
    shakeStyle.textContent = `
        @keyframes exit-warning-shake {
            0%, 100% { transform: translate(-50%, -50%) rotate(0deg); }
            25% { transform: translate(-50%, -50%) rotate(-2deg); }
            75% { transform: translate(-50%, -50%) rotate(2deg); }
        }
    `;
    document.head.appendChild(shakeStyle);
    
    document.body.appendChild(warning);
    
    // Убираем через 3 секунды
    setTimeout(() => {
        if (warning.parentNode) {
            warning.style.animation = 'none';
            warning.style.transition = 'opacity 0.5s';
            warning.style.opacity = '0';
            setTimeout(() => {
                if (warning.parentNode) {
                    warning.remove();
                }
            }, 500);
        }
    }, 3000);
    
    // Консольное сообщение
    console.log('%c⚠️ ПОПЫТКА ВЫХОДА ЗАБЛОКИРОВАНА!', 'color:#ff0000;font-size:20px;font-weight:bold');
    console.log('%cУ ВАС НЕ ПОЛУЧИТСЯ! СИСТЕМА ПОД КОНТРОЛЕМ!', 'color:#ff0000;font-size:16px;font-weight:bold');
}

function startCinematicHack() {
    hackActive = true;
    windowsPhase = true;
    
    // Блокируем правую кнопку мыши и F12 для реалистичности
    document.addEventListener('contextmenu', e => e.preventDefault());
    document.addEventListener('keydown', e => {
        if (e.key === 'F12' || (e.ctrlKey && e.shiftKey && e.key === 'I')) {
            e.preventDefault();
        }
    });
    
    // Блокируем навигацию браузера (жесты назад/вперед на macOS)
    navigationBlocked = true;
    
    // Отслеживаем попытки выхода курсора за пределы страницы (к кнопке закрытия)
    let mouseLeaveCount = 0;
    
    // Используем mouseout для более надежного отслеживания
    document.documentElement.addEventListener('mouseout', function(e) {
        // Проверяем, что курсор действительно покинул документ
        if (!e.relatedTarget && !e.toElement) {
            mouseLeaveCount++;
            
            // Если курсор ушел вверх (к кнопке закрытия вкладки)
            if (e.clientY <= 10) {
                console.log('%c⚠️ ОБНАРУЖЕНА ПОПЫТКА ЗАКРЫТЬ ВКЛАДКУ!', 'color:#00ff00;font-size:16px;font-weight:bold');
                console.log('%cКурсор направлен к кнопке закрытия - БЛОКИРОВКА АКТИВИРОВАНА', 'color:#00ff00;font-size:14px');
                
                // Показываем агрессивное предупреждение
                showExitAttemptWarning();
                
                // Если попыток много - усиливаем блокировку
                if (mouseLeaveCount >= 3) {
                    showCriticalExitWarning();
                }
            }
        }
    });
    
    document.addEventListener('mouseleave', function(e) {
        mouseLeaveCount++;
        
        // Если курсор ушел вверх (к кнопке закрытия вкладки)
        if (e.clientY <= 10) {
            console.log('%c⚠️ ОБНАРУЖЕНА ПОПЫТКА ЗАКРЫТЬ ВКЛАДКУ!', 'color:#00ff00;font-size:16px;font-weight:bold');
            console.log('%cКурсор направлен к кнопке закрытия - БЛОКИРОВКА АКТИВИРОВАНА', 'color:#00ff00;font-size:14px');
            
            // Показываем агрессивное предупреждение
            showExitAttemptWarning();
            
            // Если попыток много - усиливаем блокировку
            if (mouseLeaveCount >= 3) {
                showCriticalExitWarning();
            }
        }
    });
    
    // Отслеживаем возврат курсора на страницу
    document.addEventListener('mouseenter', function() {
        if (mouseLeaveCount > 0) {
            console.log('%c[СИСТЕМА] Курсор вернулся на страницу', 'color:#ffff00;font-size:12px');
        }
    });
    
    // Сохраняем оригинальные функции навигации
    originalBack = history.back;
    originalForward = history.forward;
    originalGo = history.go;
    
    history.back = function() {
        if (navigationBlocked) {
            console.log('%cНАВИГАЦИЯ ЗАБЛОКИРОВАНА - СИСТЕМА ПОД КОНТРОЛЕМ', 'color:#ff0000;font-size:14px;font-weight:bold');
            return false;
        }
        return originalBack.apply(this, arguments);
    };
    
    history.forward = function() {
        if (navigationBlocked) {
            console.log('%cНАВИГАЦИЯ ЗАБЛОКИРОВАНА - СИСТЕМА ПОД КОНТРОЛЕМ', 'color:#ff0000;font-size:14px;font-weight:bold');
            return false;
        }
        return originalForward.apply(this, arguments);
    };
    
    history.go = function() {
        if (navigationBlocked) {
            console.log('%cНАВИГАЦИЯ ЗАБЛОКИРОВАНА - СИСТЕМА ПОД КОНТРОЛЕМ', 'color:#ff0000;font-size:14px;font-weight:bold');
            return false;
        }
        return originalGo.apply(this, arguments);
    };
    
    // Блокируем событие popstate (жесты браузера) - УЛУЧШЕННАЯ ВЕРСИЯ ДЛЯ macOS
    let popstateBlocked = false;
    
    // Добавляем несколько состояний в историю для более надежной блокировки
    for (let i = 0; i < 5; i++) {
        history.pushState({hackActive: true, blocked: true}, null, window.location.href);
    }
    
    window.addEventListener('popstate', function(e) {
        if (navigationBlocked) {
            e.preventDefault();
            e.stopPropagation();
            e.stopImmediatePropagation();
            
            // Немедленно возвращаем пользователя на текущую страницу
            history.pushState({hackActive: true, blocked: true}, null, window.location.href);
            
            // Добавляем дополнительные состояния для защиты
            setTimeout(() => {
                for (let i = 0; i < 3; i++) {
                    history.pushState({hackActive: true, blocked: true}, null, window.location.href);
                }
            }, 10);
            
            console.log('%cПОПЫТКА ПОБЕГА ОБНАРУЖЕНА - ВОЗВРАТ ЗАБЛОКИРОВАН', 'color:#ff0000;font-size:16px;font-weight:bold');
            
            // Показываем предупреждение пользователю
            if (!popstateBlocked) {
                popstateBlocked = true;
                const warningDiv = document.createElement('div');
                warningDiv.style.cssText = `
                    position: fixed;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    background: #000;
                    border: 3px solid #ff0000;
                    color: #ff0000;
                    padding: 20px;
                    font-family: 'Courier New', monospace;
                    font-size: 16px;
                    font-weight: bold;
                    z-index: 999999;
                    text-align: center;
                    box-shadow: 0 0 50px rgba(255, 0, 0, 0.8);
                `;
                warningDiv.innerHTML = `
                    ⚠ НАВИГАЦИЯ ЗАБЛОКИРОВАНА ⚠<br>
                    СИСТЕМА ПОД КОНТРОЛЕМ<br>
                    ВЫХОД НЕВОЗМОЖЕН
                `;
                document.body.appendChild(warningDiv);
                
                setTimeout(() => {
                    if (warningDiv.parentNode) {
                        warningDiv.remove();
                    }
                    popstateBlocked = false;
                }, 3000);
            }
            
            return false;
        }
    }, true);
    

    
    // Блокируем touchstart для предотвращения жестов на macOS
    document.addEventListener('touchstart', function(e) {
        if (navigationBlocked && e.touches.length >= 2) {
            e.preventDefault();
            e.stopPropagation();
            console.log('%cЖЕСТЫ ЗАБЛОКИРОВАНЫ', 'color:#ff0000;font-size:12px;font-weight:bold');
            return false;
        }
    }, {passive: false, capture: true});
    
    // Блокируем touchmove для предотвращения свайпов
    document.addEventListener('touchmove', function(e) {
        if (navigationBlocked && e.touches.length >= 2) {
            e.preventDefault();
            e.stopPropagation();
            return false;
        }
    }, {passive: false, capture: true});
    
    // Блокируем закрытие вкладки/окна - АГРЕССИВНАЯ ВЕРСИЯ
    beforeUnloadHandler = function(e) {
        if (navigationBlocked) {
            e.preventDefault();
            e.returnValue = '⚠️ У ВАС НЕ ПОЛУЧИТСЯ! СИСТЕМА ПОД КОНТРОЛЕМ! ⚠️';
            
            // Показываем визуальное предупреждение
            showExitBlockedWarning();
            
            return '⚠️ У ВАС НЕ ПОЛУЧИТСЯ! СИСТЕМА ПОД КОНТРОЛЕМ! ⚠️';
        }
    };
    window.addEventListener('beforeunload', beforeUnloadHandler);
    
    // Блокируем клавиши навигации - УЛУЧШЕННАЯ ВЕРСИЯ
    document.addEventListener('keydown', function(e) {
        if (navigationBlocked) {
            // Блокируем Alt+Left (назад), Alt+Right (вперед)
            if ((e.altKey && e.key === 'ArrowLeft') || (e.altKey && e.key === 'ArrowRight')) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log('%cКЛАВИШИ НАВИГАЦИИ ЗАБЛОКИРОВАНЫ', 'color:#ff0000;font-size:12px;font-weight:bold');
                return false;
            }
            // Блокируем Cmd+Left (назад на macOS), Cmd+Right (вперед на macOS)
            if ((e.metaKey && e.key === 'ArrowLeft') || (e.metaKey && e.key === 'ArrowRight')) {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log('%cКЛАВИШИ НАВИГАЦИИ macOS ЗАБЛОКИРОВАНЫ', 'color:#ff0000;font-size:12px;font-weight:bold');
                return false;
            }
            // Блокируем Backspace (может вызвать возврат)
            if (e.key === 'Backspace' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log('%cВОЗВРАТ ЗАБЛОКИРОВАН', 'color:#ff0000;font-size:12px;font-weight:bold');
                return false;
            }
            // Блокируем Cmd+R (обновление на macOS)
            if (e.metaKey && e.key === 'r') {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log('%cОБНОВЛЕНИЕ СТРАНИЦЫ ЗАБЛОКИРОВАНО', 'color:#ff0000;font-size:12px;font-weight:bold');
                return false;
            }
            // Блокируем F5 (обновление)
            if (e.key === 'F5') {
                e.preventDefault();
                e.stopPropagation();
                e.stopImmediatePropagation();
                console.log('%cОБНОВЛЕНИЕ СТРАНИЦЫ ЗАБЛОКИРОВАНО', 'color:#ff0000;font-size:12px;font-weight:bold');
                return false;
            }
        }
    }, true);
    
    // Обработчики курсора будут добавлены внутри startCinematicHack()
    
    // Запускаем музыку
    const audio = new Audio('hack.m4a');
    audio.loop = true; // Зацикливаем звук
    audio.volume = 0.5; // Увеличиваем громкость
    
    // Дополнительная защита - если loop не сработает, перезапускаем вручную
    audio.addEventListener('ended', function() {
        console.log('%c[AUDIO] Трек закончился, перезапуск...', 'color:#00ff00;font-size:12px');
        this.currentTime = 0;
        this.play().catch(e => console.log('Audio replay error:', e));
    });
    
    audio.play().then(() => {
        console.log('%c[AUDIO] Звуковая система активирована', 'color:#00ff00;font-size:12px;font-weight:bold');
    }).catch(() => {
        console.log('%c[AUDIO] Ожидание взаимодействия пользователя...', 'color:#ffff00;font-size:12px');
        setTimeout(() => {
            document.addEventListener('click', () => {
                audio.play().catch(() => {});
            }, { once: true });
        }, 100);
    });
    
    // Создаем контейнер для всей последовательности
    const hackContainer = document.createElement('div');
    hackContainer.id = 'hack-container';
    hackContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: #000;
        z-index: 999999;
        overflow: hidden;
        font-family: 'Courier New', monospace;
        cursor: default;
    `;
    
    // Оставляем курсор видимым для реалистичности
    document.body.style.cursor = 'default';
    document.body.style.overflow = 'hidden';
    
    document.body.appendChild(hackContainer);
    
    // Добавляем стили
    addHackStyles();
    
    // Создаем фоновые приколы с черепами
    createBackgroundHorror(hackContainer);
    
    // Добавляем глитч эффект
    createGlitchOverlay(hackContainer);
    
    // Запускаем постоянные глитч терминалы
    startGlitchTerminals(hackContainer);
    
    // Показываем системное предупреждение
    showSystemAlert();
    
    // Показываем карточку профиля жертвы
    console.log('%c[DEBUG] Запуск карточки профиля через 2 секунды...', 'color:#ffff00;font-size:12px');
    setTimeout(() => {
        console.log('%c[DEBUG] Вызов showVictimProfileCard()', 'color:#ffff00;font-size:12px');
        showVictimProfileCard();
    }, 2000);
    
    // Запускаем РЕАЛИСТИЧНУЮ последовательность
    startRealisticAttack(hackContainer);
}

function showVictimProfileCard() {
    console.log('%c[DEBUG] showVictimProfileCard() вызвана!', 'color:#00ff00;font-size:14px;font-weight:bold');
    console.log('%c[DEBUG] userInfo:', 'color:#00ff00;font-size:12px', userInfo);
    
    // Проверяем, что userInfo существует и заполнен
    if (!userInfo || !userInfo.ip) {
        console.log('%c[DEBUG] userInfo не готов, используем запасные значения', 'color:#ffff00;font-size:12px');
        userInfo = {
            ip: '192.168.1.1',
            location: 'Unknown Location',
            osName: 'Unknown OS',
            deviceType: 'Unknown Device',
            browserName: 'Unknown Browser'
        };
    }
    
    const card = document.createElement('div');
    card.id = 'victim-profile-card';
    card.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 600px;
        background: #000;
        border: 3px solid #00ff00;
        font-family: 'Courier New', monospace;
        color: #00ff00;
        z-index: 200000;
        box-shadow: 0 0 50px rgba(0, 255, 0, 0.8);
        animation: profile-card-appear 0.5s ease-out;
        pointer-events: auto;
    `;
    
    console.log('%c[DEBUG] Карточка создана, добавляем контент...', 'color:#00ff00;font-size:12px');
    
    card.innerHTML = `
        <div style="background: #00ff00; color: #000; padding: 10px; text-align: center; font-weight: bold; font-size: 14px;">
            ◢ PHANTOM DARKNET ◣ SIGNAL LOW ▓▓▓░
        </div>
        <div style="padding: 20px;">
            <div style="font-size: 16px; font-weight: bold; margin-bottom: 15px;">
                TARGET IDENTIFIED
            </div>
            <div style="display: flex; gap: 20px; margin-bottom: 20px;">
                <div style="width: 200px; height: 250px; background: linear-gradient(135deg, #003300 0%, #00ff00 100%); display: flex; align-items: center; justify-content: center; border: 2px solid #00ff00;">
                    <div style="font-size: 60px; opacity: 0.3;">👤</div>
                </div>
                <div style="flex: 1;">
                    <div style="margin-bottom: 10px;">
                        <div style="color: #666; font-size: 11px;">REPLICANT: HUMAN</div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <div style="color: #666; font-size: 11px;">SEC CODE</div>
                        <div style="font-size: 14px;">${userInfo.ip.replace(/\./g, '-')}</div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <div style="color: #666; font-size: 11px;">LOCATION</div>
                        <div style="font-size: 12px;">${userInfo.location}</div>
                    </div>
                    <div style="margin-bottom: 10px;">
                        <div style="color: #666; font-size: 11px;">DEVICE</div>
                        <div style="font-size: 12px;">${userInfo.osName}</div>
                        <div style="font-size: 11px;">${userInfo.deviceType}</div>
                    </div>
                    <div>
                        <div style="color: #666; font-size: 11px;">GATEWAY</div>
                        <div style="font-size: 11px;">${userInfo.browserName}</div>
                    </div>
                </div>
            </div>
            <div style="border-top: 1px solid #00ff00; padding-top: 15px; font-size: 11px; line-height: 1.6;">
                AUTHORIZATION GRANTED TO THE ABOVE USER TO DETAIN, IDENTIFY, AND/OR RETIRE ANY INDIVIDUAL OR ENTITY SUSPECTED OF PRIOR VIOLATION OF THE PHANTOM PROHIBITION ACT OR OTHERWISE IN BREACH OF ALLOWED OPERATIONAL PARAMETERS.
            </div>
        </div>
        <div style="background: #000; border-top: 2px solid #00ff00; padding: 8px; text-align: center; font-size: 10px; color: #666;">
            ◢◣ PROPERTY OF PHANTOM DARKNET / DETECTION UNIT ◢◣
        </div>
    `;
    
    // Добавляем анимацию
    const style = document.createElement('style');
    style.textContent = `
        @keyframes profile-card-appear {
            0% { opacity: 0; transform: translate(-50%, -50%) scale(0.8); }
            100% { opacity: 1; transform: translate(-50%, -50%) scale(1); }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(card);
    console.log('%c[DEBUG] Карточка добавлена в DOM!', 'color:#00ff00;font-size:14px;font-weight:bold');
    console.log('%c[DEBUG] z-index карточки: 200000', 'color:#00ff00;font-size:12px');
    console.log('%c[DEBUG] Карточка в DOM:', 'color:#00ff00;font-size:12px', document.getElementById('victim-profile-card'));
    console.log('%c[DEBUG] Позиция карточки:', 'color:#00ff00;font-size:12px', card.getBoundingClientRect());
    
    // Убираем через 8 секунд
    setTimeout(() => {
        console.log('%c[DEBUG] Скрываем карточку...', 'color:#ffff00;font-size:12px');
        card.style.transition = 'opacity 1s, transform 1s';
        card.style.opacity = '0';
        card.style.transform = 'translate(-50%, -50%) scale(0.9)';
        setTimeout(() => {
            if (card.parentNode) card.remove();
            console.log('%c[DEBUG] Карточка удалена', 'color:#ffff00;font-size:12px');
        }, 1000);
    }, 8000);
}

function addHackStyles() {
    const styles = document.createElement('style');
    styles.textContent = `
        .hack-window {
            position: absolute;
            background: rgba(0, 0, 0, 0.98);
            border: 1px solid #00ff00;
            font-family: 'Courier New', monospace;
            font-size: 11px;
            color: #00ff00;
            opacity: 0;
            transform: scale(0.9);
            animation: window-appear 0.2s ease-out forwards;
            cursor: move;
            box-shadow: 0 0 20px rgba(0, 255, 0, 0.3);
            z-index: 1000;
        }
        .hack-window:hover {
            box-shadow: 0 0 30px rgba(0, 255, 0, 0.5);
        }
        .hack-window.dragging {
            z-index: 10000;
            box-shadow: 0 0 40px rgba(0, 255, 0, 0.8);
        }
        @keyframes window-appear {
            0% { opacity: 0; transform: scale(0.9); }
            100% { opacity: 1; transform: scale(1); }
        }
        .window-header {
            background: #00ff00;
            color: #000;
            padding: 4px 8px;
            font-weight: bold;
            font-size: 10px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: move;
            user-select: none;
        }
        .window-controls {
            display: flex;
            gap: 4px;
        }
        .window-minimize, .window-maximize, .window-close {
            width: 16px;
            height: 16px;
            background: #ff0000;
            color: #fff;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            font-size: 12px;
            font-weight: bold;
            border: 1px solid #fff;
        }
        .window-minimize:hover, .window-maximize:hover, .window-close:hover {
            background: #cc0000;
            box-shadow: 0 0 5px rgba(255, 0, 0, 0.8);
        }
        .window-content {
            padding: 8px;
            overflow: hidden;
            user-select: text;
        }
        .terminal-window {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 600px;
            height: 400px;
            background: rgba(0, 0, 0, 0.98);
            border: 1px solid #00ff00;
            opacity: 0;
            z-index: 200;
            box-shadow: 0 0 50px rgba(0, 255, 0, 0.5);
        }
        .terminal-content {
            padding: 20px;
            height: calc(100% - 40px);
            overflow-y: auto;
        }
        .blinking {
            animation: blink 1s infinite;
        }
        @keyframes blink {
            0%, 50% { opacity: 1; }
            51%, 100% { opacity: 0; }
        }
        .system-alert {
            position: fixed;
            top: 20px;
            right: 20px;
            background: #000;
            border: 2px solid #ff0000;
            color: #ff0000;
            padding: 15px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            z-index: 100000;
            animation: alert-blink 0.5s infinite;
            box-shadow: 0 0 30px rgba(255, 0, 0, 0.8);
        }
        @keyframes alert-blink {
            0%, 50% { background: #000; }
            51%, 100% { background: #330000; }
        }
        .glitch-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 50000;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(0, 255, 0, 0.03) 2px,
                rgba(0, 255, 0, 0.03) 4px
            );
            animation: glitch-lines 0.1s infinite;
        }
        @keyframes glitch-lines {
            0% { transform: translateY(0px); }
            100% { transform: translateY(4px); }
        }
        @keyframes window-shake {
            0%, 100% { transform: translateX(0px); }
            10% { transform: translateX(-5px); }
            20% { transform: translateX(5px); }
            30% { transform: translateX(-3px); }
            40% { transform: translateX(3px); }
            50% { transform: translateX(-2px); }
            60% { transform: translateX(2px); }
            70% { transform: translateX(-1px); }
            80% { transform: translateX(1px); }
            90% { transform: translateX(-0.5px); }
        }
        @keyframes warning-popup {
            0% { 
                opacity: 0; 
                transform: scale(0.5) translateY(20px); 
            }
            20% { 
                opacity: 1; 
                transform: scale(1.2) translateY(-10px); 
            }
            40% { 
                opacity: 1; 
                transform: scale(1) translateY(0px); 
            }
            100% { 
                opacity: 0; 
                transform: scale(0.8) translateY(-30px); 
            }
        }
        @keyframes glitch-terminal-appear {
            0% { 
                opacity: 0; 
                transform: scale(0.8) rotate(-2deg); 
                filter: blur(2px);
            }
            50% { 
                opacity: 0.8; 
                transform: scale(1.1) rotate(1deg); 
                filter: blur(1px);
            }
            100% { 
                opacity: 1; 
                transform: scale(1) rotate(0deg); 
                filter: blur(0px);
            }
        }
        @keyframes glitch-terminal-disappear {
            0% { 
                opacity: 1; 
                transform: scale(1) rotate(0deg); 
            }
            50% { 
                opacity: 0.5; 
                transform: scale(0.9) rotate(-1deg); 
                filter: blur(1px);
            }
            100% { 
                opacity: 0; 
                transform: scale(0.7) rotate(2deg); 
                filter: blur(3px);
            }
        }
        @keyframes glitch-terminal-panic {
            0% { 
                opacity: 1; 
                transform: scale(1); 
            }
            25% { 
                opacity: 0.8; 
                transform: scale(1.1) rotate(-5deg); 
                filter: hue-rotate(180deg);
            }
            50% { 
                opacity: 0.6; 
                transform: scale(0.9) rotate(5deg); 
                filter: hue-rotate(90deg);
            }
            75% { 
                opacity: 0.3; 
                transform: scale(1.05) rotate(-3deg); 
                filter: hue-rotate(270deg);
            }
            100% { 
                opacity: 0; 
                transform: scale(0.5) rotate(0deg); 
                filter: blur(5px);
            }
        }
        @keyframes error-flash {
            0% { 
                opacity: 0; 
                transform: scale(0.5); 
            }
            30% { 
                opacity: 1; 
                transform: scale(1.2); 
            }
            100% { 
                opacity: 0; 
                transform: scale(0.8) translateY(-20px); 
            }
        }
        @keyframes window-error-shake {
            0%, 100% { transform: translateX(0px); }
            10% { transform: translateX(-8px); }
            20% { transform: translateX(8px); }
            30% { transform: translateX(-6px); }
            40% { transform: translateX(6px); }
            50% { transform: translateX(-4px); }
            60% { transform: translateX(4px); }
            70% { transform: translateX(-2px); }
            80% { transform: translateX(2px); }
            90% { transform: translateX(-1px); }
        }
        @keyframes error-window-appear {
            0% { 
                opacity: 0; 
                transform: scale(0.7) translateY(20px); 
            }
            50% { 
                opacity: 1; 
                transform: scale(1.1) translateY(-5px); 
            }
            100% { 
                opacity: 1; 
                transform: scale(1) translateY(0px); 
            }
        }
        @keyframes error-window-disappear {
            0% { 
                opacity: 1; 
                transform: scale(1); 
            }
            100% { 
                opacity: 0; 
                transform: scale(0.8) translateY(-30px); 
            }
        }
        @keyframes critical-error-appear {
            0% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.5); 
            }
            50% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1.1); 
            }
            100% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1); 
            }
        }
        @keyframes critical-error-disappear {
            0% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1); 
            }
            100% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.7); 
            }
        }
        @keyframes terminal-resistance {
            0%, 100% { 
                transform: scale(1) rotate(0deg); 
                filter: hue-rotate(0deg);
            }
            25% { 
                transform: scale(1.05) rotate(-2deg); 
                filter: hue-rotate(90deg);
            }
            50% { 
                transform: scale(0.95) rotate(2deg); 
                filter: hue-rotate(180deg);
            }
            75% { 
                transform: scale(1.02) rotate(-1deg); 
                filter: hue-rotate(270deg);
            }
        }
        @keyframes terminal-minimize-resist {
            0%, 100% { 
                transform: scale(1); 
            }
            25% { 
                transform: scale(0.98); 
            }
            50% { 
                transform: scale(1.02); 
            }
            75% { 
                transform: scale(0.99); 
            }
        }
        @keyframes warning-flash {
            0% { 
                opacity: 0; 
                transform: translateX(20px); 
            }
            20% { 
                opacity: 1; 
                transform: translateX(0px); 
            }
            80% { 
                opacity: 1; 
                transform: translateX(0px); 
            }
            100% { 
                opacity: 0; 
                transform: translateX(-20px); 
            }
        }
        @keyframes warning-slide-in {
            0% { 
                opacity: 0; 
                transform: translateX(100px); 
            }
            100% { 
                opacity: 1; 
                transform: translateX(0px); 
            }
        }
        @keyframes warning-slide-out {
            0% { 
                opacity: 1; 
                transform: translateX(0px); 
            }
            100% { 
                opacity: 0; 
                transform: translateX(100px); 
            }
        }
        @keyframes final-warning-appear {
            0% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.7); 
            }
            50% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1.1); 
            }
            100% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1); 
            }
        }
        @keyframes final-warning-disappear {
            0% { 
                opacity: 1; 
                transform: translate(-50%, -50%) scale(1); 
            }
            100% { 
                opacity: 0; 
                transform: translate(-50%, -50%) scale(0.8); 
            }
        }
    `;
    document.head.appendChild(styles);
}

function createBackgroundHorror(container) {
    // Создаем слой для фоновых приколов
    const horrorLayer = document.createElement('div');
    horrorLayer.className = 'horror-background';
    horrorLayer.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 10;
        overflow: hidden;
    `;
    container.appendChild(horrorLayer);
    
    // Функция для создания случайного черепа - ОПТИМИЗИРОВАННАЯ
    function spawnRandomSkull() {
        const skull = document.createElement('pre');
        skull.className = 'floating-skull';
        // Используем только простые черепа для производительности
        const simpleSkullIndex = Math.floor(Math.random() * 5); // первые 5 черепов проще
        skull.textContent = skullArt[simpleSkullIndex];
        
        const size = Math.random() * 0.3 + 0.4; // от 0.4 до 0.7 (меньший диапазон)
        const x = Math.random() * (window.innerWidth - 200);
        const y = Math.random() * (window.innerHeight - 200);
        const rotation = Math.random() * 180; // меньше поворотов
        const duration = Math.random() * 15 + 15; // от 15 до 30 секунд (дольше живут)
        
        skull.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            font-family: 'Courier New', monospace;
            font-size: ${6 + size * 3}px;
            color: #00ff00;
            opacity: ${Math.random() * 0.2 + 0.1};
            transform: rotate(${rotation}deg) scale(${size});
            animation: skull-drift-simple ${duration}s linear infinite;
            white-space: pre;
            line-height: 1;
            z-index: ${Math.floor(Math.random() * 10) + 1};
            filter: blur(${Math.random() * 1}px);
        `;
        
        horrorLayer.appendChild(skull);
        
        // Удаляем череп через время анимации
        setTimeout(() => {
            if (skull.parentNode) {
                skull.remove();
            }
        }, duration * 1000);
    }
    
    // Функция для создания страшных сообщений - ОПТИМИЗИРОВАННАЯ
    function spawnHorrorMessage() {
        const message = document.createElement('div');
        message.className = 'horror-message';
        message.textContent = horrorMessages[Math.floor(Math.random() * horrorMessages.length)];
        
        const x = Math.random() * (window.innerWidth - 300);
        const y = Math.random() * (window.innerHeight - 50);
        const duration = Math.random() * 4 + 4; // от 4 до 8 секунд
        
        message.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            font-family: 'Courier New', monospace;
            font-size: ${10 + Math.random() * 6}px;
            color: #ff0000;
            opacity: ${Math.random() * 0.6 + 0.3};
            font-weight: bold;
            text-shadow: 0 0 8px #ff0000;
            animation: message-glitch-simple ${duration}s ease-in-out infinite;
            z-index: 40;
        `;
        
        horrorLayer.appendChild(message);
        
        setTimeout(() => {
            if (message.parentNode) {
                message.remove();
            }
        }, duration * 1000);
    }
    
    // Функция для создания мини-черепов - ОПТИМИЗИРОВАННАЯ
    function spawnMiniSkull(container) {
        const miniSkull = document.createElement('div');
        miniSkull.className = 'mini-skull';
        miniSkull.textContent = ['X', '+', '*', 'o'][Math.floor(Math.random() * 4)];
        
        const size = Math.random() * 15 + 10; // от 10px до 25px (меньше)
        const x = Math.random() * (window.innerWidth - 50);
        const y = Math.random() * (window.innerHeight - 50);
        const rotation = Math.random() * 180; // меньше поворотов
        const duration = Math.random() * 6 + 6; // от 6 до 12 секунд
        
        miniSkull.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            font-size: ${size}px;
            opacity: ${Math.random() * 0.4 + 0.2};
            transform: rotate(${rotation}deg);
            animation: mini-skull-float-simple ${duration}s linear infinite;
            z-index: ${Math.floor(Math.random() * 15) + 1};
        `;
        
        container.appendChild(miniSkull);
        
        setTimeout(() => {
            if (miniSkull.parentNode) {
                miniSkull.remove();
            }
        }, duration * 1000);
    }
    // Добавляем CSS анимации - УПРОЩЕННЫЕ ДЛЯ ПРОИЗВОДИТЕЛЬНОСТИ
    const horrorStyles = document.createElement('style');
    horrorStyles.textContent = `
        @keyframes skull-drift-simple {
            0% { 
                transform: rotate(0deg) scale(0.4) translateX(0px) translateY(0px); 
                opacity: 0.1; 
            }
            50% { 
                transform: rotate(90deg) scale(0.7) translateX(50px) translateY(-50px); 
                opacity: 0.3; 
            }
            100% { 
                transform: rotate(180deg) scale(0.4) translateX(0px) translateY(0px); 
                opacity: 0.1; 
            }
        }
        @keyframes mini-skull-float-simple {
            0% { 
                transform: rotate(0deg) translateY(0px); 
                opacity: 0.2; 
            }
            50% { 
                transform: rotate(180deg) translateY(-30px); 
                opacity: 0.6; 
            }
            100% { 
                transform: rotate(360deg) translateY(0px); 
                opacity: 0.2; 
            }
        }
        @keyframes message-glitch-simple {
            0%, 100% { 
                opacity: 0.6; 
                transform: translateX(0px); 
            }
            25% { 
                opacity: 0.3; 
                transform: translateX(-1px); 
            }
            50% { 
                opacity: 0.8; 
                transform: translateX(1px); 
            }
            75% { 
                opacity: 0.4; 
                transform: translateX(-0.5px); 
            }
        }
    `;
    document.head.appendChild(horrorStyles);
    
    // Запускаем спавн черепов и сообщений - МАКСИМАЛЬНО ОПТИМИЗИРОВАННО
    const skullInterval = setInterval(() => {
        if (hackActive) {
            // Только 1 череп за раз для максимальной производительности
            spawnRandomSkull();
        } else {
            clearInterval(skullInterval);
        }
    }, 2500); // каждые 2.5 секунды для снижения нагрузки
    
    const messageInterval = setInterval(() => {
        if (hackActive) {
            // Только 1 сообщение за раз
            spawnHorrorMessage();
        } else {
            clearInterval(messageInterval);
        }
    }, 3000); // каждые 3 секунды
    
    // Дополнительный интервал для мини-черепов - ОЧЕНЬ РЕДКО
    const miniSkullInterval = setInterval(() => {
        if (hackActive) {
            // Только 1 мини-череп за раз
            spawnMiniSkull(horrorLayer);
        } else {
            clearInterval(miniSkullInterval);
        }
    }, 2000); // каждые 2 секунды
    
    // Начальный спавн - МИНИМУМ ЭЛЕМЕНТОВ
    for (let i = 0; i < 2; i++) { // было 3
        setTimeout(() => spawnRandomSkull(), i * 800);
    }
    for (let i = 0; i < 1; i++) { // было 2
        setTimeout(() => spawnHorrorMessage(), i * 1000);
    }
    for (let i = 0; i < 1; i++) { // было 2
        setTimeout(() => spawnMiniSkull(horrorLayer), i * 600);
    }
}



function createGlitchOverlay(container) {
    const glitchOverlay = document.createElement('div');
    glitchOverlay.className = 'glitch-overlay';
    container.appendChild(glitchOverlay);
}

function startGlitchTerminals(container) {
    const glitchMessages = [
        'ERROR: Memory corruption detected',
        'FATAL: Kernel panic - system unstable',
        'WARNING: Unauthorized access detected',
        'CRITICAL: Security breach in progress',
        'ALERT: System integrity compromised',
        'DANGER: Malware execution detected',
        'BREACH: Firewall has been disabled',
        'HACK: Root access obtained',
        'VIRUS: Payload deployment active',
        'TROJAN: Backdoor installation complete',
        'WORM: Network propagation initiated',
        'EXPLOIT: Buffer overflow successful',
        'INJECT: Code injection in progress',
        'STEAL: Data exfiltration active',
        'CRYPT: Files encryption started',
        'RANSOM: Payment demand prepared',
        'SPY: Keylogger recording keystrokes',
        'WATCH: Screen capture activated',
        'LISTEN: Microphone monitoring active',
        'TRACK: Location services hijacked'
    ];
    
    let terminalCount = 0;
    const maxTerminals = 3; // Максимум одновременных терминалов
    let glitchActive = true; // Отдельная переменная для глитч терминалов
    
    const spawnGlitchTerminal = () => {
        if (!glitchActive || terminalCount >= maxTerminals) return;
        
        terminalCount++;
        
        const terminal = document.createElement('div');
        terminal.className = 'glitch-terminal';
        
        // Случайные размеры и позиция
        const width = Math.random() * 200 + 300; // от 300 до 500px
        const height = Math.random() * 150 + 200; // от 200 до 350px
        const x = Math.random() * (window.innerWidth - width);
        const y = Math.random() * (window.innerHeight - height);
        
        terminal.style.cssText = `
            position: absolute;
            left: ${x}px;
            top: ${y}px;
            width: ${width}px;
            height: ${height}px;
            background: rgba(0, 0, 0, 0.95);
            border: 1px solid #ff0000;
            font-family: 'Courier New', monospace;
            font-size: 10px;
            color: #ff0000;
            z-index: ${500 + Math.floor(Math.random() * 100)};
            opacity: 0;
            animation: glitch-terminal-appear 0.3s ease-out forwards;
            box-shadow: 0 0 20px rgba(255, 0, 0, 0.5);
        `;
        
        // Случайное сообщение
        const message = glitchMessages[Math.floor(Math.random() * glitchMessages.length)];
        
        terminal.innerHTML = `
            <div style="background: #ff0000; color: #000; padding: 2px 6px; font-size: 9px; font-weight: bold; display: flex; justify-content: space-between; align-items: center;">
                <span>SYSTEM ERROR - PID:${Math.floor(Math.random() * 9999)}</span>
                <span style="cursor: pointer; color: #000; font-weight: bold;" onclick="closeGlitchTerminal(event)">×</span>
            </div>
            <div style="padding: 8px; height: calc(100% - 20px); overflow: hidden;">
                <div style="color: #ff0000; font-weight: bold;">${message}</div>
                <div style="margin-top: 5px;">Timestamp: ${new Date().toLocaleTimeString()}</div>
                <div>Process: system_breach.exe</div>
                <div>Status: ACTIVE</div>
                <div style="margin-top: 8px; color: #ffff00;">
                    ${generateRandomHex()}
                </div>
                <div style="margin-top: 5px;">
                    Stack trace: 0x${Math.floor(Math.random() * 0xFFFFFF).toString(16).toUpperCase()}
                </div>
                <div style="position: absolute; bottom: 5px; right: 8px; color: #00ff00;">
                    <span class="blinking">█</span>
                </div>
            </div>
        `;
        
        container.appendChild(terminal);
        
        // Добавляем интерактивность - терминал "убегает" при клике
        terminal.addEventListener('click', function(e) {
            e.stopPropagation();
            
            // Терминал "паникует" и быстро исчезает
            terminal.style.animation = 'glitch-terminal-panic 0.5s ease-out forwards';
            
            // Показываем сообщение об ошибке
            const errorMsg = document.createElement('div');
            errorMsg.style.cssText = `
                position: fixed;
                top: ${e.clientY - 20}px;
                left: ${e.clientX - 80}px;
                background: #ff0000;
                color: #fff;
                padding: 4px 8px;
                font-family: 'Courier New', monospace;
                font-size: 10px;
                font-weight: bold;
                z-index: 1000000;
                animation: error-flash 1s ease-out forwards;
                pointer-events: none;
            `;
            errorMsg.textContent = 'ACCESS DENIED!';
            document.body.appendChild(errorMsg);
            
            setTimeout(() => {
                if (errorMsg.parentNode) errorMsg.remove();
                if (terminal.parentNode) {
                    terminal.remove();
                    terminalCount--;
                }
            }, 500);
            
            console.log('%c[СИСТЕМА] Попытка закрытия терминала заблокирована', 'color:#ff0000;font-size:11px');
        });
        
        // Автоматическое закрытие через случайное время
        const lifetime = Math.random() * 8000 + 4000; // от 4 до 12 секунд
        setTimeout(() => {
            if (terminal.parentNode) {
                terminal.style.animation = 'glitch-terminal-disappear 0.5s ease-out forwards';
                setTimeout(() => {
                    if (terminal.parentNode) {
                        terminal.remove();
                        terminalCount--;
                    }
                }, 500);
            }
        }, lifetime);
    };
    
    // Запускаем постоянное появление терминалов
    const spawnInterval = setInterval(() => {
        if (glitchActive && !windowsPhase) { // Останавливаем глитч терминалы когда начинается основная последовательность
            spawnGlitchTerminal();
        } else if (windowsPhase) {
            clearInterval(spawnInterval);
            glitchActive = false;
        }
    }, Math.random() * 3000 + 2000); // каждые 2-5 секунд
    
    // Начальный спавн
    setTimeout(() => spawnGlitchTerminal(), 1000);
    setTimeout(() => spawnGlitchTerminal(), 2500);
}

// Функция для попытки закрытия глитч терминалов
window.closeGlitchTerminal = function(event) {
    event.stopPropagation();
    const terminal = event.target.closest('.glitch-terminal');
    
    // Показываем критическую ошибку
    const criticalError = document.createElement('div');
    criticalError.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 400px;
        background: #000;
        border: 3px solid #ff0000;
        color: #ff0000;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        z-index: 2000000;
        animation: critical-error-appear 0.5s ease-out forwards;
        box-shadow: 0 0 50px rgba(255, 0, 0, 1);
    `;
    
    criticalError.innerHTML = `
        <div style="background: #ff0000; color: #000; padding: 8px; text-align: center; font-weight: bold;">
            ⚠ КРИТИЧЕСКАЯ ОШИБКА СИСТЕМЫ ⚠
        </div>
        <div style="padding: 15px;">
            <div style="font-weight: bold; margin-bottom: 10px;">ОПЕРАЦИЯ ЗАБЛОКИРОВАНА!</div>
            <div style="margin-bottom: 8px;">Невозможно завершить системный процесс</div>
            <div style="margin-bottom: 8px;">Процесс защищен от завершения</div>
            <div style="margin-bottom: 8px;">Код ошибки: 0xC0000005</div>
            <div style="margin-bottom: 15px; color: #ffff00;">
                ВНИМАНИЕ: Попытка вмешательства зафиксирована
            </div>
            <div style="text-align: center;">
                <button onclick="this.closest('div').remove()" style="
                    background: #ff0000; 
                    color: #fff; 
                    border: 2px solid #fff; 
                    padding: 5px 15px; 
                    font-family: 'Courier New', monospace;
                    font-size: 11px;
                    cursor: pointer;
                    font-weight: bold;
                ">ПОНЯТНО</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(criticalError);
    
    // Терминал "сопротивляется" закрытию
    terminal.style.animation = 'terminal-resistance 1s ease-in-out';
    
    // Автоматическое закрытие ошибки через 8 секунд
    setTimeout(() => {
        if (criticalError.parentNode) {
            criticalError.style.animation = 'critical-error-disappear 0.5s ease-out forwards';
            setTimeout(() => {
                if (criticalError.parentNode) {
                    criticalError.remove();
                }
            }, 500);
        }
    }, 8000);
    
    // Консольные сообщения
    console.log('%c[КРИТИЧЕСКАЯ ОШИБКА] Попытка завершения защищенного процесса', 'color:#ff0000;font-size:14px;font-weight:bold');
    console.log('%cДоступ запрещен - процесс находится под контролем системы', 'color:#ff0000;font-size:12px');
    console.log('%cВсе действия пользователя записываются', 'color:#ff0000;font-size:11px');
};

function generateRandomHex() {
    const lines = [];
    for (let i = 0; i < 3; i++) {
        let line = '';
        for (let j = 0; j < 8; j++) {
            line += Math.floor(Math.random() * 256).toString(16).padStart(2, '0').toUpperCase() + ' ';
        }
        lines.push(line.trim());
    }
    return lines.join('<br>');
}

function showSystemAlert() {
    const alert = document.createElement('div');
    alert.className = 'system-alert';
    alert.innerHTML = `
        <div style="font-weight: bold; margin-bottom: 5px;">⚠ КРИТИЧЕСКАЯ ОШИБКА СИСТЕМЫ</div>
        <div>Обнаружена несанкционированная активность</div>
        <div>IP: ${userInfo.ip}</div>
        <div>НЕ ЗАКРЫВАЙТЕ ЭТО ОКНО</div>
    `;
    
    document.body.appendChild(alert);
    
    // Убираем через 8 секунд
    setTimeout(() => {
        if (alert.parentNode) {
            alert.remove();
        }
    }, 8000);
}

function startRealisticAttack(container) {
    console.log('%cSYSTEM BREACH DETECTED', 'color:#ff0000;font-size:14px;font-weight:bold');
    
    // Сначала показываем поддельные системные окна
    const windows = [
        {
            title: 'cmd.exe',
            content: `Microsoft Windows [Version 10.0.19044.1889]
(c) Microsoft Corporation. All rights reserved.

C:\\Windows\\system32>netstat -an
Active Connections

  Proto  Local Address          Foreign Address        State
  TCP    0.0.0.0:135            0.0.0.0:0              LISTENING
  TCP    0.0.0.0:445            0.0.0.0:0              LISTENING
  TCP    ${userInfo.ip}:49152   185.220.101.32:443     ESTABLISHED
  TCP    ${userInfo.ip}:49153   185.220.101.32:80      ESTABLISHED

C:\\Windows\\system32>tasklist | findstr backdoor
backdoor.exe                  1337 Services                   0     89,234 K
keylogger.exe                 2021 Services                   0     67,123 K

C:\\Windows\\system32>`,
            x: 100, y: 100, w: 600, h: 350
        },
        {
            title: 'Диспетчер задач',
            content: `Имя                           ПИД    ЦП     Память
System                          4     0,1%   8 192 КБ
csrss.exe                     584     0,0%   4 096 КБ
winlogon.exe                  632     0,0%   2 048 КБ
backdoor.exe                 1337    25,7%  89 234 КБ
keylogger.exe                2021    15,4%  67 123 КБ
datathief.exe                 666    18,9% 123 456 КБ

ВНИМАНИЕ: Обнаружены подозрительные процессы!
Система безопасности скомпрометирована!`,
            x: 200, y: 150, w: 500, h: 300
        },
        {
            title: 'Сетевые подключения',
            content: `Активные подключения:

Локальный адрес: ${userInfo.ip}:49152
Удаленный адрес: 185.220.101.32:443
Состояние: УСТАНОВЛЕНО
Протокол: TCP через TOR

ПЕРЕДАЧА ДАННЫХ:
• Личные документы: 2.3 ГБ ████████████ 100%
• Фотографии: 1.8 ГБ ████████████ 100%
• Пароли браузера: ████████████ 100%
• История посещений: ████████████ 100%

Всего передано: 4.1 ГБ
Назначение: Сервер в даркнете

ВАШИ ДАННЫЕ УКРАДЕНЫ!`,
            x: 300, y: 200, w: 550, h: 280
        }
    ];
    
    // Создаем окна с интерактивностью
    windows.forEach((windowData, index) => {
        setTimeout(() => {
            if (windowsPhase) {
                createDraggableWindow(container, windowData);
            }
        }, index * 800); // Медленнее для реалистичности
    });
    
    // Через 5 секунд показываем критическое сообщение
    setTimeout(() => {
        if (windowsPhase) {
            showCriticalBreach(container);
        }
    }, 5000);
}



function createDraggableWindow(container, windowData) {
    const window = document.createElement('div');
    window.className = 'hack-window';
    
    window.style.cssText += `
        left: ${windowData.x}px;
        top: ${windowData.y}px;
        width: ${windowData.w}px;
        height: ${windowData.h}px;
    `;
    
    window.innerHTML = `
        <div class="window-header">
            <span>${windowData.title}</span>
            <div class="window-controls">
                <span class="window-minimize" onclick="minimizeWindow(event)">−</span>
                <span class="window-maximize" onclick="maximizeWindow(event)">□</span>
                <span class="window-close" onclick="closeWindow(event)">×</span>
            </div>
        </div>
        <div class="window-content">
            <pre style="margin: 0; white-space: pre-wrap; font-family: 'Courier New', monospace; font-size: 10px;">${windowData.content}</pre>
        </div>
    `;
    
    container.appendChild(window);
    
    // Делаем окно перетаскиваемым
    makeDraggable(window);
    
    // Добавляем интерактивные предупреждения при клике
    addWindowInteractivity(window);
}

// Функции управления окнами уже определены в начале файла

function addWindowInteractivity(window) {
    let clickCount = 0;
    const warnings = [
        "НЕ ТРОГАЙТЕ СИСТЕМНЫЕ ОКНА!",
        "ПОПЫТКА ВМЕШАТЕЛЬСТВА ОБНАРУЖЕНА!",
        "ЭТО НЕ ПОМОЖЕТ - СИСТЕМА ПОД КОНТРОЛЕМ!",
        "ПРЕКРАТИТЕ СОПРОТИВЛЕНИЕ!",
        "ВАШИ ДЕЙСТВИЯ ЗАПИСЫВАЮТСЯ!"
    ];
    
    window.addEventListener('click', function(e) {
        clickCount++;
        
        // Показываем предупреждение
        const warning = document.createElement('div');
        warning.style.cssText = `
            position: fixed;
            top: ${e.clientY - 30}px;
            left: ${e.clientX - 100}px;
            background: #ff0000;
            color: #fff;
            padding: 8px 12px;
            font-family: 'Courier New', monospace;
            font-size: 12px;
            font-weight: bold;
            z-index: 1000000;
            border: 2px solid #fff;
            animation: warning-popup 2s ease-out forwards;
            pointer-events: none;
        `;
        warning.textContent = warnings[Math.min(clickCount - 1, warnings.length - 1)];
        document.body.appendChild(warning);
        
        // Убираем предупреждение
        setTimeout(() => {
            if (warning.parentNode) {
                warning.remove();
            }
        }, 2000);
        
        // Окно "убегает" от курсора
        const rect = window.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        
        const deltaX = centerX - e.clientX;
        const deltaY = centerY - e.clientY;
        const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);
        
        if (distance < 200) {
            const moveX = (deltaX / distance) * 100;
            const moveY = (deltaY / distance) * 100;
            
            window.style.transition = 'transform 0.5s ease-out';
            window.style.transform = `translate(${moveX}px, ${moveY}px)`;
            
            // Возвращаем обратно через секунду
            setTimeout(() => {
                window.style.transition = 'transform 2s ease-out';
                window.style.transform = 'translate(0px, 0px)';
            }, 1000);
        }
        
        // Консольное сообщение
        console.log(`%c⚠ ПОПЫТКА ВМЕШАТЕЛЬСТВА #${clickCount} ОБНАРУЖЕНА`, 'color:#ff0000;font-size:14px;font-weight:bold');
        console.log(`%cКоординаты: X=${e.clientX}, Y=${e.clientY}`, 'color:#ff0000;font-size:12px');
        console.log('%cСИСТЕМА АДАПТИРУЕТСЯ К ВАШИМ ДЕЙСТВИЯМ', 'color:#ff0000;font-size:12px');
    });
}

function makeDraggable(element) {
    let isDragging = false;
    let currentX;
    let currentY;
    let initialX;
    let initialY;
    let xOffset = 0;
    let yOffset = 0;
    
    const header = element.querySelector('.window-header');
    
    header.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    function dragStart(e) {
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        
        if (e.target === header || header.contains(e.target)) {
            isDragging = true;
            element.classList.add('dragging');
        }
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            
            element.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }
    
    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
        element.classList.remove('dragging');
    }
}

function showCriticalBreach(container) {
    console.log('%cCRITICAL SYSTEM BREACH', 'color:#ff0000;font-size:16px;font-weight:bold');
    
    // Убираем все окна
    const windows = container.querySelectorAll('.hack-window');
    windows.forEach(window => {
        window.style.transition = 'opacity 1s, transform 1s';
        window.style.opacity = '0';
        window.style.transform = 'scale(0.8) translate(100px, -100px)';
        setTimeout(() => window.remove(), 1000);
    });
    
    // Показываем критическое сообщение
    setTimeout(() => {
        showFastCodeDrawing(container);
    }, 1500);
}



function showFastBigMessage(container) {
    // Убираем это - слишком кинематографично
    showCriticalBreach(container);
}

function showFastCodeDrawing(container) {
    console.log('%cPhase 3: Executing breach script', 'color:#00ff00;font-size:12px');
    
    // Убираем все окна и большое сообщение БЫСТРО
    const windows = container.querySelectorAll('.hack-window, .big-message');
    windows.forEach(window => {
        window.style.transition = 'opacity 0.3s';
        window.style.opacity = '0';
        setTimeout(() => window.remove(), 300);
    });
    
    // Создаем терминал для быстрого выполнения скрипта
    const scriptTerminal = document.createElement('div');
    scriptTerminal.className = 'script-terminal';
    scriptTerminal.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 700px;
        height: 500px;
        background: rgba(0, 0, 0, 0.98);
        border: 1px solid #00ff00;
        z-index: 100;
        font-family: 'Courier New', monospace;
        font-size: 12px;
        color: #00ff00;
        opacity: 0;
    `;
    
    scriptTerminal.innerHTML = `
        <div style="background: #00ff00; color: #000; padding: 4px 8px; text-align: center; font-weight: bold;">
            EXECUTING BREACH SCRIPT
        </div>
        <div id="script-output" style="padding: 10px; height: calc(100% - 30px); overflow-y: auto;">
            <div>root@target:~# ./breach_script.sh</div>
            <div></div>
        </div>
    `;
    
    container.appendChild(scriptTerminal);
    
    // Появление терминала
    setTimeout(() => {
        scriptTerminal.style.opacity = '1';
        startFastScriptExecution();
    }, 500);
    
    // Быстрое выполнение скрипта
    function startFastScriptExecution() {
        const output = document.getElementById('script-output');
        const commands = [
            'Initializing breach protocol...',
            'Loading exploit modules...',
            'Scanning target system...',
            'Target IP: ' + userInfo.ip,
            'Target OS: ' + userInfo.osName,
            'Exploiting vulnerabilities...',
            'Buffer overflow detected... EXPLOITING',
            'Privilege escalation... SUCCESS',
            'Installing backdoor...',
            'Backdoor installed successfully',
            'Disabling firewall...',
            'Firewall disabled',
            'Bypassing antivirus...',
            'Antivirus bypassed',
            'Establishing persistent connection...',
            'Connection established',
            'Extracting system information...',
            'Browser: ' + userInfo.browserName,
            'Screen: ' + userInfo.screenWidth + 'x' + userInfo.screenHeight,
            'Location: ' + userInfo.location,
            'Keylogger installation...',
            'Keylogger active',
            'Screen capture module...',
            'Screen capture active',
            'Data exfiltration...',
            'Uploading sensitive files...',
            'Upload progress: 25%',
            'Upload progress: 50%',
            'Upload progress: 75%',
            'Upload progress: 100%',
            'Data exfiltration complete',
            'Cleaning traces...',
            'Logs cleared',
            'Evidence removed',
            '',
            '████████████████████████████████████████',
            '█                                      █',
            '█           ВЗЛОМ УСПЕШЕН              █',
            '█        СИСТЕМА СКОМПРОМЕТИРОВАНА     █',
            '█                                      █',
            '████████████████████████████████████████',
            '',
            'Target fully compromised',
            'All objectives completed',
            'Maintaining access...',
            '',
            'root@target:~# echo "BREACH COMPLETE"',
            'BREACH COMPLETE',
            'root@target:~# '
        ];
        
        let i = 0;
        const fastExecution = () => {
            if (i < commands.length) {
                const line = document.createElement('div');
                line.textContent = commands[i];
                
                // Выделяем важные сообщения
                if (commands[i].includes('ВЗЛОМ УСПЕШЕН') || commands[i].includes('СИСТЕМА СКОМПРОМЕТИРОВАНА')) {
                    line.style.fontWeight = 'bold';
                    line.style.textAlign = 'center';
                }
                if (commands[i].includes('█')) {
                    line.style.fontWeight = 'bold';
                    line.style.textAlign = 'center';
                }
                if (commands[i].includes('SUCCESS') || commands[i].includes('complete') || commands[i].includes('active')) {
                    line.style.color = '#00ff00';
                }
                
                output.appendChild(line);
                output.scrollTop = output.scrollHeight;
                i++;
                
                // Очень быстрое выполнение
                setTimeout(fastExecution, Math.random() * 100 + 50); // от 50 до 150ms
            } else {
                // После завершения скрипта показываем финальный терминал
                setTimeout(() => {
                    showFinalTerminal(container);
                }, 2000);
            }
        };
        
        fastExecution();
    }
}

function showCodeDrawing(container) {
    console.log('%cPhase 3: Code visualization initiated', 'color:#00ff00;font-size:12px');
    
    // Убираем все окна и большое сообщение
    const windows = container.querySelectorAll('.hack-window, .big-message');
    windows.forEach(window => {
        window.style.transition = 'opacity 1s';
        window.style.opacity = '0';
        setTimeout(() => window.remove(), 1000);
    });
    
    // Создаем анимацию рисования черепа из кода
    const codeArt = document.createElement('div');
    codeArt.className = 'code-drawing';
    codeArt.style.cssText = `
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 10px;
        line-height: 1;
        z-index: 50;
    `;
    
    const skullCode = `
    ██████╗ ███████╗██████╗ ███████╗███████╗ ██████╗
    ██╔══██╗██╔════╝██╔══██╗██╔════╝██╔════╝██╔════╝
    ██║  ██║█████╗  ██║  ██║███████╗█████╗  ██║     
    ██║  ██║██╔══╝  ██║  ██║╚════██║██╔══╝  ██║     
    ██████╔╝███████╗██████╔╝███████║███████╗╚██████╗
    ╚═════╝ ╚══════╝╚═════╝ ╚══════╝╚══════╝ ╚═════╝
    
    ┌─────────────────────────────────────────────────────────────┐
    │  DEDSEC BREACH PROTOCOL v3.7.1 - TARGET COMPROMISED        │
    │─────────────────────────────────────────────────────────────│
    │  Target IP: ${userInfo.ip}                          │
    │  Location: ${userInfo.location}                     │
    │  System: ${userInfo.osName} (${userInfo.deviceType})       │
    │  Browser: ${userInfo.browserName}                          │
    │  Screen: ${userInfo.screenWidth}x${userInfo.screenHeight}  │
    │  Language: ${userInfo.language}                            │
    │  Timezone: ${userInfo.timezone}                            │
    │─────────────────────────────────────────────────────────────│
    │  Status: COMPLETELY COMPROMISED                             │
    │  Access Level: ROOT + ADMIN                                 │
    │  Backdoor: PERMANENTLY INSTALLED                            │
    │  Data Stolen: 2.3GB PERSONAL FILES                          │
    │  Monitoring: REAL-TIME ACTIVE                               │
    │─────────────────────────────────────────────────────────────│
    │  WARNING: YOUR PRIVACY NO LONGER EXISTS                     │
    │  WARNING: WE CAN SEE EVERYTHING YOU DO                      │
    │  WARNING: RESISTANCE IS FUTILE                              │
    └─────────────────────────────────────────────────────────────┘
    `;
    
    container.appendChild(codeArt);
    
    // Анимация печатания
    let i = 0;
    const typeWriter = () => {
        if (i < skullCode.length) {
            codeArt.textContent += skullCode.charAt(i);
            i++;
            setTimeout(typeWriter, 25); // Быстрее для большего эффекта
        } else {
            // После завершения рисования показываем терминал
            setTimeout(() => {
                showFinalTerminal(container);
            }, 2000);
        }
    };
    
    codeArt.style.opacity = '1';
    typeWriter();
}

function showFinalTerminal(container) {
    console.log('%cSYSTEM COMPROMISED - Authentication required', 'color:#ff0000;font-size:14px;font-weight:bold');
    windowsPhase = false;
    
    // Убираем скрипт терминал
    const scriptTerminal = container.querySelector('.script-terminal');
    if (scriptTerminal) {
        scriptTerminal.style.transition = 'opacity 0.5s';
        scriptTerminal.style.opacity = '0';
        setTimeout(() => scriptTerminal.remove(), 500);
    }
    
    // Создаем реалистичный хакерский терминал как в IDE
    const terminal = document.createElement('div');
    terminal.className = 'hacker-terminal';
    terminal.style.cssText = `
        position: fixed;
        top: 10%;
        left: 10%;
        width: 80%;
        height: 70%;
        background: rgba(0, 0, 0, 0.95);
        border: 2px solid #00ff00;
        font-family: 'Courier New', monospace;
        color: #00ff00;
        z-index: 100000;
        box-shadow: 
            0 0 40px rgba(0, 255, 0, 0.6),
            0 0 80px rgba(0, 255, 0, 0.3),
            inset 0 0 60px rgba(0, 255, 0, 0.05);
        display: flex;
        flex-direction: column;
        resize: both;
        overflow: hidden;
        min-width: 600px;
        min-height: 400px;
        border-radius: 4px;
    `;
    
    terminal.innerHTML = `
        <div class="terminal-header" style="
            background: #000;
            color: #00ff00;
            padding: 20px 20px;
            font-weight: bold;
            font-size: 18px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            cursor: move;
            user-select: none;
            border-bottom: 3px solid #00ff00;
            box-shadow: 0 4px 20px rgba(0, 255, 0, 0.4);
            text-shadow: 0 0 15px rgba(0, 255, 0, 0.8);
        ">
            <div style="display: flex; align-items: center; gap: 15px;">
                <span style="
                    letter-spacing: 2px; 
                    font-size: 20px;
                    font-weight: 900;
                    text-transform: uppercase;
                ">◢ PHANTOM DARKNET ◣ v6.66</span>
            </div>
            <div style="display: flex; gap: 4px;">
                <span style="
                    width: 20px; height: 20px; 
                    background: #666; 
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; font-size: 14px; color: #ccc;
                " onclick="minimizeHackerTerminal(event)">−</span>
                <span style="
                    width: 20px; height: 20px; 
                    background: #666; 
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; font-size: 12px; color: #ccc;
                " onclick="maximizeHackerTerminal(event)">□</span>
                <span style="
                    width: 20px; height: 20px; 
                    background: #666; 
                    display: flex; align-items: center; justify-content: center;
                    cursor: pointer; font-size: 16px; color: #ccc;
                " onclick="closeHackerTerminal(event)">×</span>
            </div>
        </div>
        <div class="terminal-content" style="
            flex: 1;
            padding: 20px;
            overflow-y: auto;
            background: #000;
            color: #00ff00;
            font-size: 13px;
            line-height: 1.6;
            text-shadow: 0 0 3px rgba(0, 255, 0, 0.5);
        ">
            <div style="color: #00ff00; font-weight: bold; margin-bottom: 10px;">╔═══════════════════════════════════════════════════════╗</div>
            <div style="color: #00ff00; font-weight: bold; margin-bottom: 10px;">║  [!] PHANTOM BREACH - YOUR SYSTEM IS OURS NOW        ║</div>
            <div style="color: #00ff00; font-weight: bold; margin-bottom: 10px;">╚═══════════════════════════════════════════════════════╝</div>
            <div style="margin-bottom: 8px;"></div>
            <div style="color: #00ff00;">[+] Victim Profile:</div>
            <div style="margin-left: 20px; margin-bottom: 8px; color: #00ff00;">
                <div>→ Soul ID: ${userInfo.ip}</div>
                <div>→ Physical Location: ${userInfo.location}</div>
                <div>→ Device: ${userInfo.osName} ${userInfo.deviceType}</div>
                <div>→ Gateway: ${userInfo.browserName}</div>
                <div>→ Capture Time: ${new Date().toLocaleString()}</div>
            </div>
            <div style="color: #ffff00; font-weight: bold; margin-bottom: 8px;">[!] STATUS: COMPLETE DOMINATION ACHIEVED</div>
            <div style="margin-bottom: 8px;"></div>
            <div style="color: #00ff00;">[+] Active Curses:</div>
            <div style="margin-left: 20px; margin-bottom: 10px; color: #00ff00;">
                <div>✓ Shadow backdoor embedded in your soul</div>
                <div>✓ Every keystroke feeds the darkness</div>
                <div>✓ Your secrets are now ours forever</div>
                <div>✓ We are watching... always watching</div>
            </div>
            <div style="color: #ffff00; font-weight: bold; margin-bottom: 5px;">[!] ONLY ONE PATH TO REDEMPTION</div>
            <div style="color: #ffff00; margin-bottom: 10px;">ANSWER CORRECTLY OR BE CONSUMED</div>
            <div style="margin-bottom: 8px; color: #666;">Enter the ritual command:</div>
            <div style="color: #00ff00; margin-bottom: 8px; font-weight: bold;">Format: auth your_answer</div>
            <div style="color: #666; margin-bottom: 10px;">Example: auth оганесян герман артурович</div>
            <div style="color: #00ff00; font-weight: bold; margin-bottom: 10px;">[?] THE QUESTION: <span id="question-text">Полное имя первого разработчика</span></div>
            <div id="terminal-output" style="margin-bottom: 10px; min-height: 60px;"></div>
        </div>
        <div class="terminal-input-area" style="
            background: #000;
            border-top: 2px solid #00ff00;
            padding: 12px 20px;
            display: flex;
            align-items: center;
            gap: 12px;
            box-shadow: 0 -4px 20px rgba(0, 255, 0, 0.3);
        ">
            <span style="
                color: #00ff00; 
                font-weight: bold; 
                text-shadow: 0 0 10px rgba(0, 255, 0, 0.8);
                font-size: 14px;
            ">shadow@phantom:~$</span>
            <input type="text" id="terminal-input" style="
                flex: 1;
                background: rgba(0, 255, 0, 0.05);
                border: 1px solid rgba(0, 255, 0, 0.3);
                border-radius: 4px;
                padding: 6px 12px;
                color: #00ff00;
                font-family: 'Courier New', monospace;
                font-size: 13px;
                outline: none;
                caret-color: #00ff00;
                text-shadow: 0 0 5px rgba(0, 255, 0, 0.5);
            " placeholder="Enter command..." autocomplete="off">
            " placeholder="Введите команду..." autocomplete="off">
        </div>
    `;
    
    container.appendChild(terminal);
    
    // Делаем терминал перетаскиваемым
    makeTerminalDraggable(terminal);
    
    // Настраиваем ввод команд
    setupTerminalInput(terminal);
    
    // Мгновенное появление
    terminal.style.opacity = '1';
    
    // Фокус на поле ввода
    setTimeout(() => {
        const input = terminal.querySelector('#terminal-input');
        if (input) {
            input.focus();
        }
    }, 100);
}

// Функции управления хакерским терминалом
window.closeHackerTerminal = function(event) {
    event.stopPropagation();
    
    // Показываем критическую ошибку - терминал нельзя закрыть
    const error = document.createElement('div');
    error.style.cssText = `
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 500px;
        background: #000;
        border: 3px solid #ff0000;
        color: #ff0000;
        font-family: 'Courier New', monospace;
        font-size: 13px;
        z-index: 200000;
        box-shadow: 0 0 50px rgba(255, 0, 0, 1);
        animation: critical-error-appear 0.5s ease-out forwards;
    `;
    
    error.innerHTML = `
        <div style="background: #ff0000; color: #000; padding: 10px; text-align: center; font-weight: bold;">
            🚫 ОПЕРАЦИЯ ЗАБЛОКИРОВАНА 🚫
        </div>
        <div style="padding: 20px;">
            <div style="font-weight: bold; margin-bottom: 15px; text-align: center;">НЕВОЗМОЖНО ЗАКРЫТЬ СИСТЕМНЫЙ ТЕРМИНАЛ</div>
            <div style="margin-bottom: 10px;">• Терминал защищен от закрытия</div>
            <div style="margin-bottom: 10px;">• Процесс восстановления активен</div>
            <div style="margin-bottom: 10px;">• Требуется завершение аутентификации</div>
            <div style="margin-bottom: 15px; color: #ffff00; text-align: center;">
                Для продолжения введите команду в терминале
            </div>
            <div style="text-align: center;">
                <button onclick="this.closest('div').remove()" style="
                    background: #ff0000; 
                    color: #fff; 
                    border: 2px solid #fff; 
                    padding: 8px 20px; 
                    font-family: 'Courier New', monospace;
                    font-size: 12px;
                    cursor: pointer;
                    font-weight: bold;
                ">ПОНЯТНО</button>
            </div>
        </div>
    `;
    
    document.body.appendChild(error);
    
    // Терминал "трясется" в знак протеста
    const terminal = event.target.closest('.hacker-terminal');
    terminal.style.animation = 'terminal-resistance 0.8s ease-in-out';
    
    setTimeout(() => {
        if (error.parentNode) {
            error.remove();
        }
    }, 6000);
    
    console.log('%c[ТЕРМИНАЛ] Попытка закрытия заблокирована - завершите аутентификацию', 'color:#ff0000;font-size:13px;font-weight:bold');
};

window.minimizeHackerTerminal = function(event) {
    event.stopPropagation();
    const terminal = event.target.closest('.hacker-terminal');
    
    // Терминал "сопротивляется" минимизации
    terminal.style.animation = 'terminal-minimize-resist 0.5s ease-in-out';
    
    // Показываем предупреждение
    const warning = document.createElement('div');
    warning.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #ff0000;
        color: #fff;
        padding: 10px 15px;
        font-family: 'Courier New', monospace;
        font-size: 11px;
        font-weight: bold;
        z-index: 300000;
        border: 2px solid #fff;
        animation: warning-flash 2s ease-out forwards;
    `;
    warning.textContent = 'МИНИМИЗАЦИЯ ОТКЛЮЧЕНА - ЗАВЕРШИТЕ ПРОЦЕДУРУ';
    document.body.appendChild(warning);
    
    setTimeout(() => {
        if (warning.parentNode) warning.remove();
    }, 2000);
    
    console.log('%c[ТЕРМИНАЛ] Минимизация заблокирована', 'color:#ff0000;font-size:12px');
};

window.maximizeHackerTerminal = function(event) {
    event.stopPropagation();
    const terminal = event.target.closest('.hacker-terminal');
    
    // Терминал может изменять размер, но с ограничениями
    if (terminal.style.width === '95%') {
        terminal.style.width = '80%';
        terminal.style.height = '70%';
        terminal.style.top = '10%';
        terminal.style.left = '10%';
    } else {
        terminal.style.width = '95%';
        terminal.style.height = '85%';
        terminal.style.top = '5%';
        terminal.style.left = '2.5%';
    }
    
    console.log('%c[ТЕРМИНАЛ] Размер изменен', 'color:#00ff00;font-size:12px');
};

function makeTerminalDraggable(terminal) {
    const header = terminal.querySelector('.terminal-header');
    let isDragging = false;
    let currentX, currentY, initialX, initialY;
    let xOffset = 0, yOffset = 0;
    
    header.addEventListener('mousedown', dragStart);
    document.addEventListener('mousemove', drag);
    document.addEventListener('mouseup', dragEnd);
    
    function dragStart(e) {
        if (e.target.closest('span[onclick]')) return; // Не перетаскиваем при клике на кнопки
        
        initialX = e.clientX - xOffset;
        initialY = e.clientY - yOffset;
        isDragging = true;
        terminal.style.cursor = 'grabbing';
        header.style.cursor = 'grabbing';
    }
    
    function drag(e) {
        if (isDragging) {
            e.preventDefault();
            currentX = e.clientX - initialX;
            currentY = e.clientY - initialY;
            xOffset = currentX;
            yOffset = currentY;
            
            terminal.style.transform = `translate(${currentX}px, ${currentY}px)`;
        }
    }
    
    function dragEnd() {
        initialX = currentX;
        initialY = currentY;
        isDragging = false;
        terminal.style.cursor = 'default';
        header.style.cursor = 'move';
    }
}
function setupTerminalInput(terminal) {
    const input = terminal.querySelector('#terminal-input');
    const output = terminal.querySelector('#terminal-output');
    let commandHistory = [];
    let historyIndex = -1;
    
    // Обработка ввода команд
    input.addEventListener('keydown', function(e) {
        if (e.key === 'Enter') {
            e.preventDefault();
            const command = input.value.trim();
            
            if (command) {
                commandHistory.push(command);
                historyIndex = commandHistory.length;
                processCommand(command, output, terminal);
                input.value = '';
            }
        } else if (e.key === 'ArrowUp') {
            e.preventDefault();
            if (historyIndex > 0) {
                historyIndex--;
                input.value = commandHistory[historyIndex];
            }
        } else if (e.key === 'ArrowDown') {
            e.preventDefault();
            if (historyIndex < commandHistory.length - 1) {
                historyIndex++;
                input.value = commandHistory[historyIndex];
            } else {
                historyIndex = commandHistory.length;
                input.value = '';
            }
        } else if (e.key === 'Tab') {
            e.preventDefault();
            // Автодополнение команд
            const suggestions = ['auth', 'help', 'status', 'exit', 'clear'];
            const matches = suggestions.filter(cmd => cmd.startsWith(command));
            if (matches.length === 1) {
                input.value = matches[0];
            }
        }
    });
    
    // Поддержание фокуса на поле ввода
    terminal.addEventListener('click', function() {
        input.focus();
    });
    
    // Начальное сообщение
    addToOutput(output, '╔═══════════════════════════════════════════════════════╗', '#00ff00');
    addToOutput(output, '║       PHANTOM DARKNET BREACH v6.66                    ║', '#00ff00');
    addToOutput(output, '║         YOUR SOUL BELONGS TO US NOW                   ║', '#00ff00');
    addToOutput(output, '╚═══════════════════════════════════════════════════════╝', '#00ff00');
    addToOutput(output, '', '#00ff00');
    addToOutput(output, '[+] Target soul captured successfully', '#00ff00');
    addToOutput(output, '[+] Shadow access obtained', '#00ff00');
    addToOutput(output, '[!] Your fate is sealed... authentication required', '#ffff00');
    addToOutput(output, '', '#00ff00');
    addToOutput(output, 'Type "help" to see your limited options', '#666');
    addToOutput(output, '', '#00ff00');
    addToOutput(output, '> THERE IS NO ESCAPE:', '#ffff00');
    addToOutput(output, '  auth оганесян герман артурович', '#00ff00');
}

function processCommand(command, output, terminal) {
    const cmd = command.toLowerCase();
    
    // Добавляем команду в вывод
    addToOutput(output, `shadow@phantom:~$ ${command}`, '#00ff00');
    
    if (cmd === 'help') {
        addToOutput(output, 'Доступные команды:', '#ffff00');
        addToOutput(output, '  auth <ответ>  - Аутентификация администратора', '#00ff00');
        addToOutput(output, '  status        - Статус системы', '#00ff00');
        addToOutput(output, '  clear         - Очистить терминал', '#00ff00');
        addToOutput(output, '  exit          - Попытка выхода (заблокирована)', '#00ff00');
        addToOutput(output, '', '#00ff00');
        addToOutput(output, 'ПРИМЕРЫ ИСПОЛЬЗОВАНИЯ:', '#ffff00');
        addToOutput(output, '  auth фурманов семён михайлович', '#00ff00');
        addToOutput(output, '  auth в двоичном коде', '#00ff00');
        addToOutput(output, '  auth 1024', '#00ff00');
        
    } else if (cmd === 'status') {
        addToOutput(output, 'СТАТУС СИСТЕМЫ:', '#ff0000');
        addToOutput(output, '• Безопасность: СКОМПРОМЕТИРОВАНА', '#ff0000');
        addToOutput(output, '• Контроль доступа: ОТКЛЮЧЕН', '#ff0000');
        addToOutput(output, '• Аутентификация: ТРЕБУЕТСЯ', '#ffff00');
        addToOutput(output, `• Текущий вопрос: ${questions[currentQuestion].question}`, '#00ff00');
        
    } else if (cmd === 'clear') {
        output.innerHTML = '';
        addToOutput(output, 'Терминал очищен', '#00ff00');
        
    } else if (cmd === 'exit') {
        addToOutput(output, 'ОШИБКА: Выход заблокирован', '#ff0000');
        addToOutput(output, 'Завершите процедуру аутентификации', '#ffff00');
        
    } else if (cmd.startsWith('auth ')) {
        const answer = cmd.substring(5).trim();
        if (answer) {
            processAuthAnswer(answer, output, terminal);
        } else {
            addToOutput(output, 'ОШИБКА: Укажите ответ после команды auth', '#ff0000');
            addToOutput(output, 'Пример: auth фурманов семён михайлович', '#ffff00');
        }
        
    } else if (cmd === 'auth') {
        addToOutput(output, 'ОШИБКА: Укажите ответ после команды auth', '#ff0000');
        addToOutput(output, `Вопрос: ${questions[currentQuestion].question}`, '#ffff00');
        addToOutput(output, 'Пример: auth ваш_ответ', '#00ff00');
        
    } else {
        addToOutput(output, `ОШИБКА: Неизвестная команда "${command}"`, '#ff0000');
        addToOutput(output, 'Введите "help" для списка команд', '#00ff00');
    }
}

function processAuthAnswer(answer, output, terminal) {
    // Активируем фоновые приколы при ответе
    triggerAnswerEffects();
    
    const correct = answer.toLowerCase() === questions[currentQuestion].answer;
    
    if (correct) {
        addToOutput(output, '✓ АУТЕНТИФИКАЦИЯ УСПЕШНА', '#00ff00');
        addToOutput(output, 'Доступ к следующему уровню получен', '#00ff00');
        
        // Показываем успешный череп
        showSuccessSkull();
        
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            setTimeout(() => {
                const questionEl = terminal.querySelector('#question-text');
                if (questionEl) questionEl.textContent = questions[currentQuestion].question;
                addToOutput(output, 'Требуется следующий уровень аутентификации', '#ffff00');
                addToOutput(output, `Вопрос: ${questions[currentQuestion].question}`, '#ffff00');
            }, 2000);
        } else {
            // Финальный успех
            showFinalSuccessSkull();
            
            setTimeout(() => {
                addToOutput(output, '╔══════════════════════════════════════╗', '#00ff00');
                addToOutput(output, '║      ПОЛНЫЙ ДОСТУП К СИСТЕМЕ         ║', '#00ff00');
                addToOutput(output, '║         ПОЛУЧЕН УСПЕШНО              ║', '#00ff00');
                addToOutput(output, '╚══════════════════════════════════════╝', '#00ff00');
                addToOutput(output, 'Симуляция взлома завершена', '#00ff00');
                addToOutput(output, 'Это была демонстрация безопасности', '#00ff00');
                addToOutput(output, 'Оставайтесь бдительными в сети', '#00ff00');
                
                setTimeout(() => {
                    const container = document.getElementById('hack-container');
                    if (container) {
                        container.style.transition = 'opacity 3s';
                        container.style.opacity = '0';
                        setTimeout(() => {
                            container.remove();
                            hackActive = false;
                            delete window.answer;
                            // Восстанавливаем нормальное состояние
                            document.body.style.cursor = 'auto';
                            document.body.style.overflow = 'auto';
                            
                            // Разблокируем навигацию
                            navigationBlocked = false;
                            history.back = originalBack;
                            history.forward = originalForward;
                            history.go = originalGo;
                            window.removeEventListener('beforeunload', beforeUnloadHandler);
                            console.log('%cСИСТЕМА ВОССТАНОВЛЕНА - НАВИГАЦИЯ РАЗБЛОКИРОВАНА', 'color:#00ff00;font-size:12px;font-weight:bold');
                        }, 3000);
                    }
                }, 3000);
            }, 1000);
        }
    } else {
        addToOutput(output, '✗ АУТЕНТИФИКАЦИЯ НЕ УДАЛАСЬ', '#ff0000');
        addToOutput(output, 'Доступ запрещен - Инициирована блокировка системы', '#ff0000');
        addToOutput(output, `Вопрос: ${questions[currentQuestion].question}`, '#ffff00');
        
        // Показываем злой череп при неправильном ответе
        showFailureSkull();
    }
}

function addToOutput(output, text, color = '#00ff00') {
    const line = document.createElement('div');
    line.style.color = color;
    line.style.marginBottom = '2px';
    line.textContent = text;
    output.appendChild(line);
    
    // Автоскролл
    output.scrollTop = output.scrollHeight;
}

const questions = [
    { question: 'Полное имя первого разработчика', answer: 'оганесян герман артурович' },
    { question: 'Полное имя второго разработчика', answer: 'газарян тигран арманович' },
    { question: 'Возраст разработчиков', answer: '17' }
];

// Функция ответа с фоновыми приколами
window.answer = function(userAnswer) {
    if (!hackActive || currentQuestion >= questions.length) {
        console.log('%c[СИСТЕМА] Сессия истекла', 'color:#666;font-size:12px');
        return;
    }
    
    // Активируем фоновые приколы при ответе
    triggerAnswerEffects();
    
    const correct = String(userAnswer).toLowerCase().trim() === questions[currentQuestion].answer;
    
    if (correct) {
        console.log('%c✓ АУТЕНТИФИКАЦИЯ УСПЕШНА', 'color:#00ff00;font-size:16px;font-weight:bold');
        
        // Показываем успешный череп
        showSuccessSkull();
        
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            setTimeout(() => {
                const questionEl = document.getElementById('question-text');
                if (questionEl) questionEl.textContent = questions[currentQuestion].question;
                console.log('%cТребуется следующий уровень аутентификации', 'color:#00ff00;font-size:12px');
                console.log('%c' + questions[currentQuestion].question, 'color:#00ff00;font-size:14px;font-weight:bold');
            }, 2000);
        } else {
            // Финальный успех с большим черепом
            showFinalSuccessSkull();
            
            console.log('%c╔══════════════════════════════════════╗', 'color:#00ff00;font-size:16px;font-weight:bold');
            console.log('%c║      ПОЛНЫЙ ДОСТУП К СИСТЕМЕ         ║', 'color:#00ff00;font-size:16px;font-weight:bold');
            console.log('%c║         ПОЛУЧЕН УСПЕШНО              ║', 'color:#00ff00;font-size:16px;font-weight:bold');
            console.log('%c╚══════════════════════════════════════╝', 'color:#00ff00;font-size:16px;font-weight:bold');
            console.log('%cСимуляция взлома завершена', 'color:#00ff00;font-size:14px');
            console.log('%cЭто была демонстрация безопасности', 'color:#00ff00;font-size:12px');
            console.log('%cОставайтесь бдительными в сети', 'color:#00ff00;font-size:12px');
            
            setTimeout(() => {
                const container = document.getElementById('hack-container');
                if (container) {
                    container.style.transition = 'opacity 3s';
                    container.style.opacity = '0';
                    setTimeout(() => {
                        container.remove();
                        hackActive = false;
                        delete window.answer;
                        // Восстанавливаем нормальное состояние
                        document.body.style.cursor = 'auto';
                        document.body.style.overflow = 'auto';
                        document.removeEventListener('contextmenu', e => e.preventDefault());
                        
                        // Разблокируем навигацию
                        navigationBlocked = false;
                        history.back = originalBack;
                        history.forward = originalForward;
                        history.go = originalGo;
                        window.removeEventListener('beforeunload', beforeUnloadHandler);
                        console.log('%cСИСТЕМА ВОССТАНОВЛЕНА - НАВИГАЦИЯ РАЗБЛОКИРОВАНА', 'color:#00ff00;font-size:12px;font-weight:bold');
                    }, 3000);
                }
            }, 3000);
        }
    } else {
        console.log('%c✗ АУТЕНТИФИКАЦИЯ НЕ УДАЛАСЬ', 'color:#ff0000;font-size:16px;font-weight:bold');
        console.log('%cДоступ запрещен - Инициирована блокировка системы', 'color:#ff0000;font-size:12px');
        
        // Показываем злой череп при неправильном ответе
        showFailureSkull();
    }
};

// Эффекты при ответе пользователя - ОПТИМИЗИРОВАННЫЕ!
function triggerAnswerEffects() {
    const container = document.getElementById('hack-container');
    if (!container) return;
    
    // Создаем умеренный взрыв черепов (было 15, стало 5)
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            createAnswerSkull(container);
        }, i * 200);
    }
    
    // Создаем мигающие сообщения (было 8, стало 3)
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createFlashMessage(container);
        }, i * 300);
    }
    
    // Добавляем мини-черепа взрыв (было 20, стало 8)
    for (let i = 0; i < 8; i++) {
        setTimeout(() => {
            createAnswerMiniSkull(container);
        }, i * 100);
    }
    
    // Создаем волну ужаса (уменьшенную)
    setTimeout(() => {
        createHorrorWave(container);
    }, 500);
}

function createAnswerMiniSkull(container) {
    const miniSkull = document.createElement('div');
    miniSkull.textContent = ['X', '+', '*', 'o', '#'][Math.floor(Math.random() * 5)];
    
    const x = Math.random() * (window.innerWidth - 50);
    const y = Math.random() * (window.innerHeight - 50);
    
    miniSkull.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        font-size: ${Math.random() * 30 + 15}px;
        opacity: 1;
        z-index: 120;
        animation: answer-mini-skull 1.5s ease-out forwards;
        filter: hue-rotate(${Math.random() * 360}deg);
    `;
    
    container.appendChild(miniSkull);
    
    setTimeout(() => {
        if (miniSkull.parentNode) {
            miniSkull.remove();
        }
    }, 1500);
}

function createHorrorWave(container) {
    // Создаем волну ASCII черепов (было 5, стало 3)
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            const waveSkull = document.createElement('pre');
            // Используем простые черепа для производительности
            waveSkull.textContent = skullArt[i % 5];
            
            const x = (window.innerWidth / 4) * (i + 1) - 100;
            const y = window.innerHeight / 2 - 100;
            
            waveSkull.style.cssText = `
                position: absolute;
                left: ${x}px;
                top: ${y}px;
                font-family: 'Courier New', monospace;
                font-size: 8px;
                color: #ff0000;
                opacity: 0;
                z-index: 110;
                animation: horror-wave-simple 1.5s ease-out forwards;
                white-space: pre;
                line-height: 1;
                text-shadow: 0 0 15px #ff0000;
            `;
            
            container.appendChild(waveSkull);
            
            setTimeout(() => {
                if (waveSkull.parentNode) {
                    waveSkull.remove();
                }
            }, 1500);
        }, i * 300);
    }
}

function createAnswerSkull(container) {
    const skull = document.createElement('pre');
    skull.textContent = skullArt[Math.floor(Math.random() * skullArt.length)];
    
    const x = Math.random() * (window.innerWidth - 200);
    const y = Math.random() * (window.innerHeight - 200);
    
    skull.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        font-family: 'Courier New', monospace;
        font-size: 8px;
        color: #ff0000;
        opacity: 0.8;
        z-index: 100;
        animation: answer-skull-explosion 2s ease-out forwards;
        white-space: pre;
        line-height: 1;
        text-shadow: 0 0 10px #ff0000;
    `;
    
    container.appendChild(skull);
    
    setTimeout(() => {
        if (skull.parentNode) {
            skull.remove();
        }
    }, 2000);
}

function createFlashMessage(container) {
    const message = document.createElement('div');
    message.textContent = horrorMessages[Math.floor(Math.random() * horrorMessages.length)];
    
    const x = Math.random() * (window.innerWidth - 300);
    const y = Math.random() * (window.innerHeight - 50);
    
    message.style.cssText = `
        position: absolute;
        left: ${x}px;
        top: ${y}px;
        font-family: 'Courier New', monospace;
        font-size: 16px;
        color: #ffff00;
        opacity: 1;
        font-weight: bold;
        z-index: 150;
        animation: flash-message 1.5s ease-out forwards;
        text-shadow: 0 0 20px #ffff00;
    `;
    
    container.appendChild(message);
    
    setTimeout(() => {
        if (message.parentNode) {
            message.remove();
        }
    }, 1500);
}

function showSuccessSkull() {
    const container = document.getElementById('hack-container');
    if (!container) return;
    
    const bigSkull = document.createElement('pre');
    bigSkull.textContent = skullArt[1]; // Используем красивый череп
    
    bigSkull.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Courier New', monospace;
        font-size: 12px;
        color: #00ff00;
        opacity: 0;
        z-index: 200;
        animation: success-skull 3s ease-out forwards;
        white-space: pre;
        line-height: 1;
        text-shadow: 0 0 30px #00ff00;
        text-align: center;
    `;
    
    container.appendChild(bigSkull);
    
    setTimeout(() => {
        if (bigSkull.parentNode) {
            bigSkull.remove();
        }
    }, 3000);
}

function showFailureSkull() {
    const container = document.getElementById('hack-container');
    if (!container) return;
    
    const evilSkull = document.createElement('pre');
    evilSkull.textContent = skullArt[4]; // Используем злой череп
    
    evilSkull.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Courier New', monospace;
        font-size: 10px;
        color: #ff0000;
        opacity: 0;
        z-index: 200;
        animation: failure-skull 2s ease-out forwards;
        white-space: pre;
        line-height: 1;
        text-shadow: 0 0 30px #ff0000;
        text-align: center;
    `;
    
    container.appendChild(evilSkull);
    
    setTimeout(() => {
        if (evilSkull.parentNode) {
            evilSkull.remove();
        }
    }, 2000);
}

function showFinalSuccessSkull() {
    const container = document.getElementById('hack-container');
    if (!container) return;
    
    const finalSkull = document.createElement('pre');
    finalSkull.textContent = skullArt[5]; // Используем большой красивый череп
    
    finalSkull.style.cssText = `
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-family: 'Courier New', monospace;
        font-size: 8px;
        color: #00ff00;
        opacity: 0;
        z-index: 300;
        animation: final-success-skull 5s ease-out forwards;
        white-space: pre;
        line-height: 1;
        text-shadow: 0 0 50px #00ff00;
        text-align: center;
    `;
    
    container.appendChild(finalSkull);
    
    setTimeout(() => {
        if (finalSkull.parentNode) {
            finalSkull.remove();
        }
    }, 5000);
}

// Добавляем CSS анимации для черепов - РАСШИРЕННЫЕ
const skullAnimationStyles = document.createElement('style');
skullAnimationStyles.textContent = `
    @keyframes answer-skull-explosion {
        0% { 
            opacity: 0; 
            transform: scale(0.5) rotate(0deg); 
        }
        50% { 
            opacity: 1; 
            transform: scale(1.2) rotate(180deg); 
        }
        100% { 
            opacity: 0; 
            transform: scale(0.3) rotate(360deg); 
        }
    }
    @keyframes answer-mini-skull {
        0% { 
            opacity: 0; 
            transform: scale(0.3) rotate(0deg); 
        }
        25% { 
            opacity: 1; 
            transform: scale(1.5) rotate(90deg); 
        }
        50% { 
            opacity: 1; 
            transform: scale(2) rotate(180deg); 
        }
        75% { 
            opacity: 0.8; 
            transform: scale(1.2) rotate(270deg); 
        }
        100% { 
            opacity: 0; 
            transform: scale(0.1) rotate(360deg); 
        }
    }
    @keyframes horror-wave-simple {
        0% { 
            opacity: 0; 
            transform: translateY(50px) scale(0.5); 
        }
        50% { 
            opacity: 1; 
            transform: translateY(0px) scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: translateY(-50px) scale(0.8); 
        }
    }
    @keyframes flash-message {
        0% { 
            opacity: 0; 
            transform: scale(0.5); 
        }
        25% { 
            opacity: 1; 
            transform: scale(1.5); 
        }
        50% { 
            opacity: 1; 
            transform: scale(1.2); 
        }
        75% { 
            opacity: 0.8; 
            transform: scale(1.8); 
        }
        100% { 
            opacity: 0; 
            transform: scale(0.8); 
        }
    }
    @keyframes success-skull {
        0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.3); 
        }
        25% { 
            opacity: 0.8; 
            transform: translate(-50%, -50%) scale(1.3); 
        }
        50% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.1); 
        }
        75% { 
            opacity: 0.9; 
            transform: translate(-50%, -50%) scale(1.2); 
        }
        100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.8); 
        }
    }
    @keyframes failure-skull {
        0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.5) rotate(0deg); 
        }
        15% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.5) rotate(-15deg); 
        }
        30% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.3) rotate(15deg); 
        }
        45% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.4) rotate(-10deg); 
        }
        60% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.2) rotate(10deg); 
        }
        75% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.1) rotate(-5deg); 
        }
        100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.7) rotate(0deg); 
        }
    }
    @keyframes final-success-skull {
        0% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.2); 
        }
        10% { 
            opacity: 0.5; 
            transform: translate(-50%, -50%) scale(0.8); 
        }
        20% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.4); 
        }
        40% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.2); 
        }
        60% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1.3); 
        }
        80% { 
            opacity: 1; 
            transform: translate(-50%, -50%) scale(1); 
        }
        100% { 
            opacity: 0; 
            transform: translate(-50%, -50%) scale(0.5); 
        }
    }
`;
document.head.appendChild(skullAnimationStyles);


// Автоматический запуск взлома через 15 секунд
setTimeout(() => {
    if (!hackActive) {
        console.log('%c⚠ АВТОМАТИЧЕСКИЙ ЗАПУСК ВЗЛОМА ЧЕРЕЗ 15 СЕКУНД', 'color:#ff0000;font-size:14px;font-weight:bold');
        startCinematicHack();
    }
}, 15000);
