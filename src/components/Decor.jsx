// Декоративна графіка сайту: золоті каліграфічні лінії, хмари жуї, листя.
// Усі елементи — aria-hidden і не перехоплюють кліків.

const ROUTE =
  'M716 40C824 180 769 343 595 451C367 593 272 795 465 983C682 1194 737 1380 527 1591C311 1809 358 1998 655 2157C872 2272 806 2466 547 2608C293 2748 268 2971 497 3147C724 3321 768 3516 574 3714C468 3822 407 3976 455 4160';

export function DragonRoute() {
  return (
    <div className="dragon-route" aria-hidden="true">
      <svg viewBox="0 0 1000 4200" preserveAspectRatio="none" fill="none">
        <defs>
          <linearGradient id="routeGold" x1="180" y1="120" x2="820" y2="4100" gradientUnits="userSpaceOnUse">
            <stop offset="0" stopColor="#fff3a3" stopOpacity="0.8" />
            <stop offset="0.24" stopColor="#d7bd55" stopOpacity="0.62" />
            <stop offset="0.55" stopColor="#9fccc7" stopOpacity="0.42" />
            <stop offset="0.82" stopColor="#d7bd55" stopOpacity="0.56" />
            <stop offset="1" stopColor="#ffe600" stopOpacity="0.5" />
          </linearGradient>
        </defs>

        {/* Тіло-стрічка: дві лінії зі зсувом, що «перекручуються» на поворотах. */}
        <path
          className="dragon-route__line dragon-route__line--main"
          pathLength="1"
          d={ROUTE}
          stroke="url(#routeGold)"
          strokeWidth="2.2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />
        <path
          className="dragon-route__line dragon-route__line--twin"
          pathLength="1"
          d={ROUTE}
          transform="translate(24 14)"
          stroke="url(#routeGold)"
          strokeOpacity="0.55"
          strokeWidth="1.1"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        <path
          className="dragon-route__echo"
          d="M760 221C632 329 520 401 429 536C332 680 363 822 490 927M412 1700C526 1752 648 1848 677 1971C700 2071 643 2167 539 2249M321 2840C416 2945 596 3011 640 3160C670 3261 625 3382 525 3470"
          stroke="#85b084"
          strokeOpacity="0.26"
          strokeWidth="1.2"
          strokeLinecap="round"
          vectorEffect="non-scaling-stroke"
        />

        {/* Вусоподібні завитки біля вигинів тіла. */}
        <g className="dragon-route__whiskers" stroke="#d7bd55" strokeOpacity="0.4" strokeWidth="1.1" strokeLinecap="round" vectorEffect="non-scaling-stroke">
          <path d="M600 452C660 430 704 446 712 482C718 510 694 522 680 506" />
          <path d="M470 985C420 1010 400 1052 420 1084C436 1108 466 1098 458 1076" />
          <path d="M650 2158C716 2150 760 2176 760 2214C760 2242 732 2248 724 2228" />
          <path d="M500 3150C440 3168 414 3208 432 3240C446 3264 476 3256 468 3234" />
          <path d="M455 4160C430 4100 448 4050 490 4046C520 4044 528 4072 506 4084" />
        </g>

        <g className="dragon-route__clouds" stroke="#d7bd55" strokeOpacity="0.32" strokeWidth="1.15" strokeLinecap="round" vectorEffect="non-scaling-stroke">
          <path d="M150 920C180 920 182 890 206 890C230 890 230 914 216 916C206 917 204 904 212 902M206 890C214 866 250 860 266 880C278 862 314 864 318 890C338 884 358 900 350 916C344 928 326 924 330 912M150 920C210 928 290 928 364 920" />
          <path d="M640 1600C670 1600 672 1570 696 1570C720 1570 720 1594 706 1596C696 1597 694 1584 702 1582M696 1570C704 1546 740 1540 756 1560C768 1542 804 1544 808 1570C828 1564 848 1580 840 1596C834 1608 816 1604 820 1592M640 1600C700 1608 780 1608 854 1600" />
          <path d="M120 2560C150 2560 152 2530 176 2530C200 2530 200 2554 186 2556C176 2557 174 2544 182 2542M176 2530C184 2506 220 2500 236 2520C248 2502 284 2504 288 2530C308 2524 328 2540 320 2556C314 2568 296 2564 300 2552M120 2560C180 2568 260 2568 334 2560" />
          <path d="M610 3600C640 3600 642 3570 666 3570C690 3570 690 3594 676 3596C666 3597 664 3584 672 3582M666 3570C674 3546 710 3540 726 3560C738 3542 774 3544 778 3570C798 3564 818 3580 810 3596C804 3608 786 3604 790 3592M610 3600C670 3608 750 3608 824 3600" />
        </g>
      </svg>
    </div>
  );
}

// Центральний мотив hero: лінійний дракон, що женеться за перлиною.
export function HeroDragon() {
  return (
    <svg className="hero-dragon" viewBox="0 0 560 680" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="dragonGold" x1="140" y1="60" x2="480" y2="660" gradientUnits="userSpaceOnUse">
          <stop stopColor="#fff3a3" />
          <stop offset="0.45" stopColor="#d7bd55" />
          <stop offset="0.8" stopColor="#9fccc7" stopOpacity="0.75" />
          <stop offset="1" stopColor="#d7bd55" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="pearlGlow" cx="0.5" cy="0.5" r="0.5">
          <stop stopColor="#ffe600" stopOpacity="0.5" />
          <stop offset="1" stopColor="#ffe600" stopOpacity="0" />
        </radialGradient>
      </defs>

      {/* Хмари жуї */}
      <g className="hero-dragon__clouds" stroke="#9fccc7" strokeOpacity="0.38" strokeWidth="1.2" strokeLinecap="round">
        <path d="M20 470C50 470 52 440 76 440C100 440 100 464 86 466C76 467 74 454 82 452M76 440C84 416 120 410 136 430C148 412 184 414 188 440C208 434 228 450 220 466C214 478 196 474 200 462M20 470C80 478 160 478 234 470" />
        <path d="M400 52C426 52 428 26 448 26C468 26 468 46 456 48C448 49 446 38 453 36M448 26C456 8 484 4 498 20C508 6 538 8 542 28C552 26 558 34 556 44C552 54 540 52 542 44M400 52C454 58 500 58 554 52" />
      </g>

      {/* Тіло: спинна й черевна лінії, між ними — пластини луски. */}
      <g className="hero-dragon__body" stroke="url(#dragonGold)" strokeLinecap="round" strokeLinejoin="round">
        <path
          className="hero-dragon__draw"
          pathLength="1"
          strokeWidth="2.2"
          d="M360 140C432 150 482 200 472 270C462 340 382 360 320 380C250 404 228 470 290 510C350 550 432 540 452 590C464 622 442 642 410 638"
        />
        <path
          className="hero-dragon__draw hero-dragon__draw--late"
          pathLength="1"
          strokeWidth="1.5"
          d="M352 176C410 186 446 226 438 280C428 330 366 344 312 362C228 392 206 480 278 526C340 564 410 556 424 596C430 616 422 630 410 638"
        />
        <path
          className="hero-dragon__scales"
          strokeWidth="13"
          strokeLinecap="butt"
          strokeOpacity="0.3"
          strokeDasharray="1.4 9"
          d="M356 158C420 168 463 213 454 275C444 335 373 352 316 371C239 398 218 475 284 518C345 557 420 548 437 593"
        />
        {/* Спинний гребінь */}
        <path
          className="hero-dragon__fade"
          strokeWidth="1.1"
          d="M392 138L400 124L408 142M430 152L442 138L446 160M458 176L474 166L472 188M476 214L494 208L486 230M482 256L500 256L488 274M474 300L490 308L472 318M446 330L458 344L436 344M404 350L410 366L392 360"
        />
        {/* Лапи з кігтями */}
        <path
          className="hero-dragon__fade"
          strokeWidth="1.4"
          d="M444 302C478 314 498 334 502 360M502 360L490 370M502 360L504 375M502 360L515 368M288 522C276 552 258 568 232 570M232 570L222 560M232 570L220 576M232 570L230 584"
        />
        {/* Хвіст-полум'я */}
        <path
          className="hero-dragon__fade"
          strokeWidth="1.3"
          d="M410 638C380 642 360 622 372 604C380 594 394 598 392 610M410 638C402 664 374 672 352 660M410 638C430 660 428 676 410 680"
        />
      </g>

      {/* Голова */}
      <g className="hero-dragon__head" stroke="url(#dragonGold)" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M352 128C322 112 290 118 262 132C252 137 246 146 252 152C272 160 300 162 322 156" />
        <path d="M262 132C254 122 262 112 272 118" />
        <path d="M262 168C285 180 315 180 338 166M270 160L274 170M292 162L294 172" />
        <path d="M300 132C308 126 318 126 324 132C316 136 308 136 300 132Z" />
        <circle cx="312" cy="131" r="2" fill="#fff3a3" stroke="none" />
        <path d="M294 124C306 114 322 112 334 118" />
        {/* Роги */}
        <path d="M330 116C350 92 380 78 420 76C405 84 388 96 380 112M340 122C368 106 402 104 432 112" />
        {/* Грива */}
        <path strokeWidth="1.2" d="M352 128C380 128 400 140 420 160M350 140C372 150 384 168 386 192M345 150C360 172 360 196 348 214" />
        {/* Вуса й борода */}
        <path strokeWidth="1.2" className="hero-dragon__whisker" d="M258 140C220 128 190 100 196 70C200 50 222 48 226 62" />
        <path strokeWidth="1.2" className="hero-dragon__whisker hero-dragon__whisker--low" d="M262 168C226 190 200 230 214 268C222 288 244 286 240 270" />
        <path strokeWidth="1.1" d="M300 168C296 190 304 206 290 222" />
      </g>

      {/* Перлина — єдиний насичено-жовтий акцент */}
      <g className="hero-dragon__pearl">
        <circle cx="132" cy="318" r="34" fill="url(#pearlGlow)" />
        <circle cx="132" cy="318" r="20" stroke="#d7bd55" strokeOpacity="0.5" strokeWidth="1" />
        <circle cx="132" cy="318" r="8" fill="#ffe600" />
        <path d="M112 300C100 284 104 266 120 258M152 336C166 350 164 368 148 378" stroke="#d7bd55" strokeOpacity="0.55" strokeWidth="1.1" strokeLinecap="round" />
      </g>
    </svg>
  );
}

// Хмара жуї для розділів.
export function SectionCloud({ className = '' }) {
  return (
    <svg className={`section-cloud ${className}`} viewBox="0 0 240 90" fill="none" aria-hidden="true">
      <path
        d="M8 78C38 78 40 48 64 48C88 48 88 72 74 74C64 75 62 62 70 60M64 48C72 24 108 18 124 38C136 20 172 22 176 48C196 42 216 58 208 74C202 86 184 82 188 70M8 78C68 86 148 86 222 78"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
      />
    </svg>
  );
}

// Короткий вусоподібний завиток перед підписом розділу.
export function Whisker({ className = '' }) {
  return (
    <svg className={`whisker ${className}`} viewBox="0 0 40 14" fill="none" aria-hidden="true">
      <path pathLength="1" d="M1 10C8 3 14 3 19 7C24 11 30 11 37 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="37" cy="4" r="1.6" fill="currentColor" />
    </svg>
  );
}

export function StudioDivider() {
  return (
    <svg className="studio-divider" viewBox="0 0 100 100" fill="none" aria-hidden="true" preserveAspectRatio="none">
      <path d="M5 49C26 46 38 53 53 50C69 47 80 51 95 48" />
      <path d="M51 5C48 27 54 40 50 54C47 70 52 82 49 95" />
    </svg>
  );
}

export function LeafBranch({ className = '' }) {
  return (
    <svg className={`leaf-branch ${className}`} viewBox="0 0 260 420" fill="none" aria-hidden="true">
      <path d="M32 401C90 314 119 218 120 91" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" />
      <path d="M118 316C73 296 40 305 18 342C59 351 92 342 118 316ZM121 258C161 237 196 240 225 268C186 282 151 278 121 258ZM120 201C82 175 46 175 12 201C49 222 85 222 120 201ZM120 143C153 116 187 111 224 129C193 154 158 159 120 143ZM119 90C91 64 65 59 39 75C62 97 89 103 119 90ZM119 89C139 53 166 34 201 32C186 68 159 87 119 89Z" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
