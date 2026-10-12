// Декоративна графіка сайту: золоті каліграфічні лінії, хмари жуї, листя.
// Усі елементи — aria-hidden і не перехоплюють кліків.

// Медальйон із лускою по колу: 44 дуги між внутрішнім і зовнішнім кільцем.
const CX = 300;
const CY = 290;
const SCALLOPS = Array.from({ length: 44 }, (_, i) => {
  const a0 = (i / 44) * Math.PI * 2;
  const a1 = ((i + 1) / 44) * Math.PI * 2;
  const am = (a0 + a1) / 2;
  const at = (r, a) => `${(CX + r * Math.cos(a)).toFixed(1)} ${(CY + r * Math.sin(a)).toFixed(1)}`;
  return `M${at(156, a0)}Q${at(174, am)} ${at(156, a1)}`;
}).join('');

// Ліва половина голови; права — дзеркальна копія.
function HeadHalf() {
  return (
    <>
      {/* Роги-стрічки з відростками */}
      <g className="dragon-head__horns">
        <path d="M238 146C216 104 192 70 150 36C170 68 198 100 254 136" />
        <path d="M206 102C188 88 170 84 148 88C168 94 184 102 198 114" />
        <path d="M184 72C170 58 156 54 138 58C154 62 166 70 176 80" />
        <path d="M268 126C264 92 254 66 236 46C252 72 262 98 282 122" />
      </g>
      {/* Полум'яна грива, відкинута назад і вгору */}
      <g className="dragon-head__mane">
        <path d="M150 214C116 196 96 168 92 128C110 160 132 176 160 184" />
        <path d="M146 206C126 190 112 170 106 146" strokeOpacity="0.55" />
        <path d="M134 262C96 252 66 226 52 188C78 212 104 226 136 232" />
        <path d="M132 254C106 244 86 226 74 204" strokeOpacity="0.55" />
        <path d="M134 318C96 326 62 314 40 288C70 300 98 300 128 294" />
        <path d="M128 312C102 314 80 308 62 296" strokeOpacity="0.55" />
      </g>
      {/* Щелепа з іклом і полум'ям на вилицях */}
      <g className="dragon-head__jaw">
        <path d="M184 410C212 454 254 482 300 488" />
        <path d="M246 476L256 452L264 481" />
        <path d="M196 430C176 440 164 458 160 480C176 468 192 460 212 452" />
        <path d="M170 386C148 392 134 408 128 428C144 418 158 412 178 408" />
      </g>
      {/* Довгий вус зі спіраллю */}
      <path className="dragon-head__whisker" d="M224 456C182 486 146 516 134 556C122 594 150 618 176 606C196 596 190 570 170 574" />
    </>
  );
}

// Голова дракона навколо портрета: портрет — це «обличчя», з-за медальйона виходить тіло.
export function DragonHead({ portrait }) {
  return (
    <div className="dragon-head">
      <svg className="dragon-head__back" viewBox="0 0 600 660" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="headGold" x1="60" y1="20" x2="540" y2="640" gradientUnits="userSpaceOnUse">
            <stop stopColor="#fff3a3" />
            <stop offset="0.5" stopColor="#d7bd55" />
            <stop offset="1" stopColor="#9fccc7" stopOpacity="0.8" />
          </linearGradient>
          <radialGradient id="headPearl" cx="0.5" cy="0.5" r="0.5">
            <stop stopColor="#ffe600" stopOpacity="0.5" />
            <stop offset="1" stopColor="#ffe600" stopOpacity="0" />
          </radialGradient>
        </defs>
        <g stroke="url(#headGold)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <HeadHalf />
          <g transform="matrix(-1 0 0 1 600 0)">
            <HeadHalf />
          </g>
          {/* Борода-полум'я під підборіддям */}
          <g className="dragon-head__beard" strokeWidth="1.3">
            <path d="M284 490C276 520 286 550 310 572C298 544 300 516 312 492" />
            <path d="M298 500C296 524 302 544 312 558" strokeOpacity="0.55" />
          </g>
        </g>
        <g className="dragon-head__pearl">
          <circle cx="70" cy="470" r="30" fill="url(#headPearl)" />
          <circle cx="70" cy="470" r="17" stroke="#d7bd55" strokeOpacity="0.5" />
          <circle cx="70" cy="470" r="7" fill="#ffe600" />
        </g>
      </svg>

      <div className="dragon-head__portrait">{portrait}</div>

      <svg className="dragon-head__front" viewBox="0 0 600 660" fill="none" aria-hidden="true">
        <g stroke="url(#headGold)" strokeLinecap="round">
          <circle className="dragon-head__ring" cx={CX} cy={CY} r="154" strokeWidth="1.6" pathLength="1" />
          <path className="dragon-head__scallops" d={SCALLOPS} strokeWidth="1" />
          <circle className="dragon-head__ring dragon-head__ring--outer" cx={CX} cy={CY} r="178" strokeWidth="0.8" pathLength="1" />
          <g className="dragon-head__brows" strokeWidth="1.4">
            <path d="M196 158C212 132 246 118 280 124M204 146C186 126 180 104 192 86C194 104 202 116 214 124M226 132C214 112 214 94 226 80C228 96 234 108 244 116" />
            <path transform="matrix(-1 0 0 1 600 0)" d="M196 158C212 132 246 118 280 124M204 146C186 126 180 104 192 86C194 104 202 116 214 124M226 132C214 112 214 94 226 80C228 96 234 108 244 116" />
          </g>
        </g>
      </svg>
    </div>
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
