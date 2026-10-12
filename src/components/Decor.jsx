// Декоративна графіка сайту: золоті каліграфічні лінії, хмари жуї, листя.
// Усі елементи — aria-hidden і не перехоплюють кліків.

// Медальйон: center (380, 340), r = 190 у системі 700×700.
const CX = 380;
const CY = 340;
const polar = (r, deg) => {
  const a = (deg * Math.PI) / 180;
  return [CX + r * Math.cos(a), CY + r * Math.sin(a)];
};
const fmt = ([x, y]) => `${x.toFixed(1)} ${y.toFixed(1)}`;

// Луска по колу медальйона.
const SCALLOPS = Array.from({ length: 52 }, (_, i) => {
  const a0 = (i / 52) * 360;
  const a1 = ((i + 1) / 52) * 360;
  return `M${fmt(polar(196, a0))}Q${fmt(polar(214, (a0 + a1) / 2))} ${fmt(polar(196, a1))}`;
}).join('');

// Грива: полум'яні пасма праворуч, відкинуті назад — у бік, куди йде тіло.
const MANE = [-58, -38, -18, 2, 22, 42, 62].map((deg, i) => {
  const len = [70, 92, 80, 96, 78, 88, 64][i];
  const [bx, by] = polar(228, deg);
  const sweep = ((deg + 34) * Math.PI) / 180;
  const tip = [bx + Math.cos(sweep) * len, by + Math.sin(sweep) * len];
  const b1 = polar(228, deg - 7);
  const b2 = polar(228, deg + 7);
  const c1 = [(b1[0] + tip[0]) / 2 - Math.sin(sweep) * 16, (b1[1] + tip[1]) / 2 + Math.cos(sweep) * 16];
  const c2 = [(b2[0] + tip[0]) / 2 + Math.sin(sweep) * 6, (b2[1] + tip[1]) / 2 - Math.cos(sweep) * 6];
  const vein = [bx + Math.cos(sweep) * len * 0.62, by + Math.sin(sweep) * len * 0.62];
  return { shape: `M${fmt(b1)}Q${fmt(c1)} ${fmt(tip)}Q${fmt(c2)} ${fmt(b2)}`, vein: `M${fmt([bx, by])}L${fmt(vein)}` };
});

// Голова дракона в три чверті: морда з відкритою пащею тягнеться до перлини,
// роги й грива відкинуті назад. Портрет — «обличчя», з-за медальйона виходить тіло.
export function DragonHead({ portrait }) {
  return (
    <div className="dragon-head">
      <svg className="dragon-head__back" viewBox="0 0 700 700" fill="none" aria-hidden="true">
        <defs>
          <linearGradient id="headGold" x1="40" y1="20" x2="660" y2="680" gradientUnits="userSpaceOnUse">
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
          {/* Роги-стрічки з відростками */}
          <g className="dragon-head__horns">
            <path d="M300 166C330 100 400 50 500 28C440 60 380 100 338 158" />
            <path d="M400 72C420 44 452 28 488 24M360 104C368 72 384 50 408 36" />
            <path d="M346 152C400 108 470 92 560 98C500 108 440 124 392 150" strokeOpacity="0.75" />
            <path d="M470 100C490 82 512 74 540 74" strokeOpacity="0.75" />
          </g>
          <g className="dragon-head__mane">
            {MANE.map(({ shape, vein }) => (
              <g key={shape}>
                <path d={shape} fill="rgba(215, 189, 85, 0.06)" />
                <path d={vein} strokeOpacity="0.5" strokeWidth="1" />
              </g>
            ))}
          </g>
          {/* Морда: верхня щелепа із закрученим носом, відкрита паща з іклами та язиком */}
          <g className="dragon-head__jaw">
            <path d="M196 252C150 238 104 238 70 256C46 270 44 300 66 308C84 314 102 302 96 288" />
            <path d="M66 308C110 318 154 322 192 326" />
            <path d="M90 262C80 248 92 234 108 242M120 244C128 234 140 232 150 238" />
            <path d="M104 314L110 336L118 316M150 320L155 338L162 321" />
            <path d="M196 378C160 400 118 404 86 392C104 414 150 424 206 418" />
            <path d="M100 396L108 376L114 398" />
            <path d="M120 352C100 350 86 360 88 372C90 380 100 380 102 372" strokeOpacity="0.7" />
            <path d="M236 492C220 520 222 548 240 568C240 540 248 520 262 504M262 512C254 540 262 566 284 582C280 556 284 536 296 522" />
          </g>
          {/* Борода-полум'я під пащею */}
          <g className="dragon-head__beard" strokeWidth="1.3">
            <path d="M150 420C140 456 156 486 140 520C158 498 168 470 170 424M186 420C184 456 200 480 192 514C206 490 210 462 206 422" />
          </g>
          {/* Довгі вуса зі спіралями */}
          <path className="dragon-head__whisker" d="M100 262C60 230 40 180 62 140C80 110 118 116 116 144C114 160 96 162 92 150" />
          <path className="dragon-head__whisker dragon-head__whisker--low" d="M80 306C40 330 22 390 44 440C62 480 106 478 108 446C108 426 86 420 78 436" />
        </g>
        <g className="dragon-head__pearl">
          <circle cx="34" cy="356" r="28" fill="url(#headPearl)" />
          <circle cx="34" cy="356" r="15" stroke="#d7bd55" strokeOpacity="0.5" />
          <circle cx="34" cy="356" r="6.5" fill="#ffe600" />
        </g>
      </svg>

      <div className="dragon-head__portrait">{portrait}</div>

      <svg className="dragon-head__front" viewBox="0 0 700 700" fill="none" aria-hidden="true">
        <g stroke="url(#headGold)" strokeLinecap="round" strokeLinejoin="round">
          <circle className="dragon-head__ring" cx={CX} cy={CY} r="194" strokeWidth="1.6" pathLength="1" />
          <path className="dragon-head__scallops" d={SCALLOPS} strokeWidth="1" />
          <circle className="dragon-head__ring dragon-head__ring--outer" cx={CX} cy={CY} r="222" strokeWidth="0.8" pathLength="1" />
          {/* Око з полум'яною бровою над мордою */}
          <g className="dragon-head__brows" strokeWidth="1.4">
            <path d="M168 196C186 178 214 174 236 184C220 202 192 208 168 196Z" fill="rgba(3, 17, 9, 0.85)" />
            <circle cx="204" cy="192" r="4.5" fill="#fff3a3" stroke="none" />
            <path d="M160 176C182 146 222 132 262 140M172 162C160 138 164 112 184 96C182 120 190 136 204 146M206 146C200 120 210 98 232 86C226 108 230 124 240 136" />
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
