"use client";

interface Props {
  species: string;
}

export default function SpeciesIllustration({ species }: Props) {
  switch (species) {
    case "poultry":
      return <PoultryIllustration />;
    case "swine":
      return <SwineIllustration />;
    case "beef":
      return <BeefIllustration />;
    case "dairy":
      return <DairyIllustration />;
    case "equine":
      return <EquineIllustration />;
    default:
      return null;
  }
}

/* ── shared decorative background ── */
function Background({ id }: { id: string }) {
  return (
    <>
      <defs>
        <linearGradient id={`body-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#66BB6A" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <linearGradient id={`organ-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#1B5E20" />
          <stop offset="100%" stopColor="#2E7D32" />
        </linearGradient>
        <linearGradient id={`circle-${id}`} x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#4CAF50" stopOpacity="0.18" />
          <stop offset="100%" stopColor="#2E7D32" stopOpacity="0.10" />
        </linearGradient>
      </defs>
      {/* Large accent circle */}
      <circle cx="400" cy="265" r="195" fill={`url(#circle-${id})`} />
      <circle cx="400" cy="265" r="195" stroke="#2E7D32" strokeWidth="1.5" opacity="0.2" fill="none" />
      {/* Decorative wireframe circles */}
      <circle cx="240" cy="390" r="75" stroke="#66BB6A" strokeWidth="1" opacity="0.18" fill="none" />
      <circle cx="590" cy="150" r="50" stroke="#66BB6A" strokeWidth="1" opacity="0.18" fill="none" />
      <circle cx="520" cy="400" r="35" stroke="#66BB6A" strokeWidth="1" opacity="0.15" fill="none" />
      <circle cx="180" cy="170" r="25" stroke="#66BB6A" strokeWidth="1" opacity="0.15" fill="none" />
      {/* Cross lines */}
      <line x1="150" y1="120" x2="650" y2="430" stroke="#66BB6A" strokeWidth="0.8" opacity="0.12" />
      <line x1="130" y1="400" x2="670" y2="140" stroke="#66BB6A" strokeWidth="0.8" opacity="0.12" />
      <line x1="300" y1="80" x2="500" y2="470" stroke="#66BB6A" strokeWidth="0.5" opacity="0.08" />
    </>
  );
}

/* ── wireframe lines over body ── */
function WireframeOverlay({ paths }: { paths: string[] }) {
  return (
    <g stroke="#66BB6A" strokeWidth="1" fill="none" opacity="0.35">
      {paths.map((d, i) => (
        <path key={i} d={d} />
      ))}
    </g>
  );
}

/* ═══════════════════════════════════════════
   POULTRY — Chicken side view
   ═══════════════════════════════════════════ */
function PoultryIllustration() {
  return (
    <svg viewBox="0 0 800 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <Background id="poultry" />

      {/* Body silhouette */}
      <path
        d="M 280 180
           Q 260 170 250 155 L 240 130 Q 235 118 225 120 L 215 125 Q 210 130 215 140 L 225 155
           Q 215 150 205 155 L 195 160 Q 188 165 192 172 L 200 175
           Q 195 170 188 175 L 180 182 Q 175 188 180 195 L 192 192
           Q 180 195 175 190 Q 165 198 175 208 L 195 205 Q 210 200 220 195
           L 185 210 Q 170 220 172 230 L 180 235 Q 200 225 220 210
           Q 230 200 240 195 Q 248 192 255 195
           Q 260 200 265 210 Q 270 225 268 245
           Q 265 270 270 295 Q 278 330 300 350
           Q 330 375 370 388 Q 420 400 470 395
           Q 520 388 555 365 Q 575 350 585 340
           L 600 360 Q 615 380 625 395 Q 630 405 640 410
           Q 650 415 655 408 L 650 395 Q 648 385 640 372
           Q 635 365 642 368 Q 655 375 660 370
           Q 665 362 655 355 L 640 348
           Q 638 340 630 330
           Q 620 315 610 305 Q 595 290 590 275
           Q 605 265 615 245 Q 630 215 638 185
           Q 645 160 640 140 Q 635 125 620 118
           Q 600 110 575 125 Q 555 140 545 160
           Q 535 180 530 200 Q 528 210 525 215
           Q 510 210 490 205 Q 460 200 430 200
           Q 395 200 360 205 Q 330 210 310 198
           Q 295 188 280 180 Z"
        fill="url(#body-poultry)"
      />

      {/* Comb */}
      <path
        d="M 250 155 Q 255 135 265 125 Q 270 130 275 120
           Q 280 115 285 125 Q 290 115 298 118
           Q 295 130 288 145 Q 280 160 270 170
           Q 260 165 255 158 Z"
        fill="#1B5E20"
        opacity="0.9"
      />

      {/* Wattle */}
      <path
        d="M 232 205 Q 240 215 235 228 Q 228 240 220 235 Q 215 225 220 215 Q 225 208 232 205 Z"
        fill="#1B5E20"
        opacity="0.7"
      />

      {/* Eye */}
      <circle cx="248" cy="190" r="6" fill="#1B5E20" />
      <circle cx="249" cy="189" r="2.5" fill="#E8F5E9" />

      {/* Beak */}
      <path
        d="M 220 195 L 188 205 Q 180 208 182 215 L 195 212
           Q 205 210 218 205 Q 225 202 222 198 Z"
        fill="#33691E"
        opacity="0.9"
      />

      {/* Legs */}
      <g fill="none" stroke="#2E7D32" strokeWidth="4" strokeLinecap="round">
        <path d="M 390 395 L 385 440 L 370 460 M 385 440 L 395 458 M 385 440 L 382 460" />
        <path d="M 440 392 L 445 438 L 430 456 M 445 438 L 455 455 M 445 438 L 442 458" />
      </g>

      {/* ── Internal organs (digestive) ── */}
      {/* Crop */}
      <ellipse cx="290" cy="240" rx="22" ry="28" fill="url(#organ-poultry)" opacity="0.55" />
      <text x="290" y="244" textAnchor="middle" fontSize="8" fill="#E8F5E9" fontWeight="bold">Crop</text>

      {/* Proventriculus */}
      <ellipse cx="350" cy="280" rx="18" ry="22" fill="url(#organ-poultry)" opacity="0.55" />

      {/* Gizzard */}
      <ellipse cx="400" cy="310" rx="28" ry="25" fill="url(#organ-poultry)" opacity="0.6" />
      <text x="400" y="314" textAnchor="middle" fontSize="8" fill="#E8F5E9" fontWeight="bold">Gizzard</text>

      {/* Intestines */}
      <path
        d="M 428 310 Q 450 300 465 310 Q 480 325 470 340 Q 455 355 440 345
           Q 425 335 435 320 Q 445 310 460 320 Q 470 332 458 342
           Q 500 340 520 320 Q 535 305 530 285"
        stroke="#1B5E20" strokeWidth="3.5" fill="none" opacity="0.5"
      />

      {/* Connecting tube from crop to gizzard */}
      <path d="M 305 258 Q 320 270 340 275" stroke="#1B5E20" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M 365 295 Q 375 305 390 310" stroke="#1B5E20" strokeWidth="2" fill="none" opacity="0.4" />

      {/* Wireframe overlay */}
      <WireframeOverlay paths={[
        "M 280 280 Q 350 250 430 260 Q 510 270 560 290",
        "M 300 310 Q 400 290 500 300",
        "M 350 220 Q 400 350 500 350",
        "M 310 350 Q 380 320 460 360",
      ]} />

      {/* Annotation circles */}
      <circle cx="290" cy="240" r="35" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 3" />
      <circle cx="400" cy="310" r="40" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   SWINE — Pig side view (closest to reference)
   ═══════════════════════════════════════════ */
function SwineIllustration() {
  return (
    <svg viewBox="0 0 800 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <Background id="swine" />

      {/* Body silhouette */}
      <path
        d="M 175 245
           Q 170 235 172 220 Q 178 205 190 200 L 200 198
           Q 210 190 215 178 Q 220 165 230 158
           Q 238 175 240 185
           Q 250 158 258 145 Q 265 135 275 140
           Q 278 155 275 170 Q 270 185 268 190
           Q 285 175 305 170 Q 340 162 380 158
           Q 440 152 500 150 Q 550 150 585 158
           Q 615 168 630 185 Q 642 200 648 220
           Q 652 240 650 265
           Q 648 290 640 310 Q 630 328 620 340
           Q 628 350 632 368 Q 636 385 638 400
           Q 640 412 635 420 Q 628 425 620 422
           Q 615 415 612 400 L 608 380
           Q 605 365 600 355
           Q 580 365 555 370
           Q 530 375 500 378
           Q 495 390 492 405 Q 488 420 486 432
           Q 484 440 478 442 Q 470 440 468 432
           L 470 415 Q 472 400 474 385
           Q 460 388 440 390
           Q 420 390 400 388
           Q 395 400 392 415 Q 388 430 386 440
           Q 384 445 378 442 Q 372 438 374 430
           L 378 410 Q 380 395 382 385
           Q 360 382 340 378
           Q 310 372 290 365
           Q 285 375 280 390 Q 275 405 272 418
           Q 270 428 264 430 Q 258 428 256 420
           L 260 400 Q 262 385 265 370
           Q 260 365 250 355
           Q 235 340 225 320
           Q 215 300 210 285 Q 205 270 200 262
           Q 190 258 180 255 Q 172 252 175 245 Z"
        fill="url(#body-swine)"
      />

      {/* Ear */}
      <path
        d="M 230 158 Q 218 130 225 115 Q 235 105 248 110
           Q 258 118 255 135 Q 250 148 245 155 Z"
        fill="#2E7D32"
        opacity="0.8"
      />

      {/* Eye */}
      <circle cx="222" cy="210" r="7" fill="#1B5E20" />
      <circle cx="223" cy="209" r="3" fill="#E8F5E9" />

      {/* Snout */}
      <ellipse cx="182" cy="240" rx="18" ry="22" fill="#2E7D32" opacity="0.7" />
      <circle cx="177" cy="236" r="4" fill="#1B5E20" opacity="0.6" />
      <circle cx="177" cy="248" r="4" fill="#1B5E20" opacity="0.6" />

      {/* Tail (curly) */}
      <path
        d="M 648 220 Q 660 210 668 215 Q 675 225 665 232
           Q 658 238 665 245 Q 672 250 678 242"
        stroke="#2E7D32" strokeWidth="4" fill="none" strokeLinecap="round"
      />

      {/* ── Internal organs (digestive) ── */}
      {/* Stomach */}
      <path
        d="M 340 250 Q 365 230 395 235 Q 420 242 425 265
           Q 428 290 405 300 Q 380 308 355 295
           Q 335 280 340 250 Z"
        fill="url(#organ-swine)" opacity="0.55"
      />
      <text x="382" y="275" textAnchor="middle" fontSize="9" fill="#E8F5E9" fontWeight="bold">Stomach</text>

      {/* Small intestine */}
      <path
        d="M 425 275 Q 445 265 460 275 Q 475 290 465 305
           Q 455 318 440 310 Q 430 300 445 290
           Q 460 280 475 295 Q 485 310 475 322
           Q 465 335 450 328 Q 440 320 455 312
           Q 500 315 520 295 Q 535 278 540 260"
        stroke="#1B5E20" strokeWidth="4" fill="none" opacity="0.5" strokeLinecap="round"
      />

      {/* Large intestine */}
      <path
        d="M 540 260 Q 555 250 570 262 Q 580 280 568 298
           Q 555 310 540 305 Q 530 298 535 285
           Q 540 275 552 278 Q 560 285 555 295"
        stroke="#1B5E20" strokeWidth="5" fill="none" opacity="0.45" strokeLinecap="round"
      />

      {/* Esophagus line */}
      <path d="M 280 240 Q 300 242 320 245 Q 335 248 340 252" stroke="#1B5E20" strokeWidth="2.5" fill="none" opacity="0.4" />

      {/* Wireframe overlay on body */}
      <WireframeOverlay paths={[
        "M 220 250 Q 350 220 500 230 Q 600 240 640 270",
        "M 260 310 Q 400 280 550 290",
        "M 300 200 Q 400 350 550 340",
        "M 280 350 Q 400 310 530 350",
        "M 350 180 Q 420 300 520 280",
      ]} />

      {/* Annotation circles */}
      <circle cx="382" cy="272" r="52" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 3" />
      <circle cx="490" cy="290" r="60" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.25" strokeDasharray="4 3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   BEEF — Cow side view
   ═══════════════════════════════════════════ */
function BeefIllustration() {
  return (
    <svg viewBox="0 0 800 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <Background id="beef" />

      {/* Body silhouette */}
      <path
        d="M 195 265
           Q 185 250 180 235 Q 178 220 185 210
           Q 190 200 200 195 Q 210 190 215 180
           Q 218 168 225 158 Q 235 148 245 155
           Q 252 162 250 175
           Q 270 140 285 128 Q 295 122 305 130
           Q 310 140 305 155 Q 300 168 295 175
           Q 310 170 330 168 Q 365 165 400 162
           Q 450 158 500 155 Q 545 155 580 160
           Q 610 168 630 182 Q 645 195 652 215
           Q 658 240 655 268
           Q 652 295 645 315
           Q 638 330 630 340
           Q 635 355 638 375 Q 640 395 642 415
           Q 643 428 638 432 Q 630 435 625 428
           L 620 405 Q 618 385 615 370
           Q 610 358 605 350
           Q 580 360 550 365
           Q 525 368 500 370
           Q 496 385 493 405 Q 490 425 488 435
           Q 486 442 480 442 Q 474 440 472 432
           L 475 410 Q 478 390 480 375
           Q 460 378 440 380 Q 418 380 395 378
           Q 390 392 387 410 Q 384 428 382 438
           Q 380 445 374 443 Q 368 440 370 430
           L 374 408 Q 378 390 380 378
           Q 355 375 330 370 Q 305 365 285 358
           Q 280 372 276 390 Q 272 410 270 425
           Q 268 435 262 435 Q 256 432 258 422
           L 262 400 Q 265 380 268 365
           Q 255 355 245 340 Q 232 318 225 300
           Q 218 282 210 272
           Q 200 268 195 265 Z"
        fill="url(#body-beef)"
      />

      {/* Horns */}
      <path
        d="M 240 158 Q 232 135 222 120 Q 218 112 225 110 Q 232 112 238 125 Q 244 140 248 152"
        stroke="#33691E" strokeWidth="5" fill="none" strokeLinecap="round"
      />
      <path
        d="M 290 135 Q 298 115 308 105 Q 315 100 318 108 Q 312 118 305 132 Q 300 142 295 148"
        stroke="#33691E" strokeWidth="5" fill="none" strokeLinecap="round"
      />

      {/* Ear */}
      <path
        d="M 295 160 Q 315 152 325 158 Q 330 168 320 175 Q 308 178 300 172 Z"
        fill="#2E7D32" opacity="0.7"
      />

      {/* Eye */}
      <circle cx="240" cy="210" r="7" fill="#1B5E20" />
      <circle cx="241" cy="209" r="3" fill="#E8F5E9" />

      {/* Muzzle */}
      <ellipse cx="195" cy="255" rx="20" ry="18" fill="#2E7D32" opacity="0.6" />
      <circle cx="189" cy="252" r="4" fill="#1B5E20" opacity="0.5" />
      <circle cx="189" cy="260" r="4" fill="#1B5E20" opacity="0.5" />

      {/* Tail */}
      <path
        d="M 655 260 Q 665 250 670 265 Q 672 285 668 310
           Q 665 330 660 345 Q 655 355 650 360
           Q 645 368 648 375 Q 652 382 658 378"
        stroke="#2E7D32" strokeWidth="3.5" fill="none" strokeLinecap="round"
      />

      {/* ── Internal organs (4-compartment stomach) ── */}
      {/* Rumen (largest) */}
      <path
        d="M 330 240 Q 360 218 400 222 Q 435 228 445 260
           Q 450 290 430 310 Q 405 328 375 320
           Q 345 310 335 280 Q 328 260 330 240 Z"
        fill="url(#organ-beef)" opacity="0.5"
      />
      <text x="385" y="275" textAnchor="middle" fontSize="9" fill="#E8F5E9" fontWeight="bold">Rumen</text>

      {/* Reticulum */}
      <ellipse cx="325" cy="268" rx="22" ry="20" fill="url(#organ-beef)" opacity="0.5" />

      {/* Omasum */}
      <ellipse cx="460" cy="268" rx="20" ry="18" fill="url(#organ-beef)" opacity="0.5" />

      {/* Abomasum */}
      <ellipse cx="500" cy="290" rx="25" ry="20" fill="url(#organ-beef)" opacity="0.5" />
      <text x="500" y="294" textAnchor="middle" fontSize="7" fill="#E8F5E9" fontWeight="bold">Abomasum</text>

      {/* Intestines */}
      <path
        d="M 525 290 Q 545 280 558 290 Q 570 305 560 318
           Q 548 328 535 320 Q 528 312 540 305
           Q 555 298 565 310 Q 575 325 570 335
           Q 585 328 600 310"
        stroke="#1B5E20" strokeWidth="3.5" fill="none" opacity="0.4" strokeLinecap="round"
      />

      {/* Wireframe overlay */}
      <WireframeOverlay paths={[
        "M 230 260 Q 380 225 540 240 Q 620 250 650 280",
        "M 280 320 Q 430 285 580 300",
        "M 320 195 Q 420 340 560 320",
        "M 300 355 Q 430 320 570 350",
      ]} />

      {/* Annotation circles */}
      <circle cx="385" cy="270" r="65" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 3" />
      <circle cx="500" cy="290" r="38" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.25" strokeDasharray="4 3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   DAIRY — Dairy cow side view (with udder)
   ═══════════════════════════════════════════ */
function DairyIllustration() {
  return (
    <svg viewBox="0 0 800 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <Background id="dairy" />

      {/* Body silhouette */}
      <path
        d="M 195 265
           Q 185 250 180 235 Q 178 220 185 210
           Q 190 200 200 195 Q 210 190 215 180
           Q 218 168 225 158 Q 235 148 245 155
           Q 252 162 250 175
           Q 270 140 285 128 Q 295 122 305 130
           Q 310 140 305 155 Q 300 168 295 175
           Q 310 170 330 168 Q 365 165 400 162
           Q 450 158 500 155 Q 545 155 580 160
           Q 610 168 630 182 Q 645 195 652 215
           Q 658 240 655 268
           Q 652 295 645 315
           Q 638 330 630 340
           Q 635 355 638 375 Q 640 395 642 415
           Q 643 428 638 432 Q 630 435 625 428
           L 620 405 Q 618 385 615 370
           Q 610 358 605 350
           Q 580 360 550 365
           Q 525 368 500 370
           Q 496 385 493 405 Q 490 425 488 435
           Q 486 442 480 442 Q 474 440 472 432
           L 475 410 Q 478 390 480 375
           Q 460 378 440 380 Q 418 380 395 378
           Q 390 392 387 410 Q 384 428 382 438
           Q 380 445 374 443 Q 368 440 370 430
           L 374 408 Q 378 390 380 378
           Q 355 375 330 370 Q 305 365 285 358
           Q 280 372 276 390 Q 272 410 270 425
           Q 268 435 262 435 Q 256 432 258 422
           L 262 400 Q 265 380 268 365
           Q 255 355 245 340 Q 232 318 225 300
           Q 218 282 210 272
           Q 200 268 195 265 Z"
        fill="url(#body-dairy)"
      />

      {/* Dairy markings (spots) */}
      <ellipse cx="380" cy="260" rx="45" ry="35" fill="#E8F5E9" opacity="0.25" />
      <ellipse cx="520" cy="240" rx="35" ry="28" fill="#E8F5E9" opacity="0.2" />
      <ellipse cx="450" cy="320" rx="30" ry="22" fill="#E8F5E9" opacity="0.2" />

      {/* Horns */}
      <path
        d="M 240 158 Q 232 135 222 120 Q 218 112 225 110 Q 232 112 238 125 Q 244 140 248 152"
        stroke="#33691E" strokeWidth="4" fill="none" strokeLinecap="round"
      />
      <path
        d="M 290 135 Q 298 115 308 105 Q 315 100 318 108 Q 312 118 305 132 Q 300 142 295 148"
        stroke="#33691E" strokeWidth="4" fill="none" strokeLinecap="round"
      />

      {/* Ear */}
      <path
        d="M 295 160 Q 315 152 325 158 Q 330 168 320 175 Q 308 178 300 172 Z"
        fill="#2E7D32" opacity="0.7"
      />

      {/* Eye */}
      <circle cx="240" cy="210" r="7" fill="#1B5E20" />
      <circle cx="241" cy="209" r="3" fill="#E8F5E9" />

      {/* Muzzle */}
      <ellipse cx="195" cy="255" rx="20" ry="18" fill="#2E7D32" opacity="0.6" />
      <circle cx="189" cy="252" r="4" fill="#1B5E20" opacity="0.5" />
      <circle cx="189" cy="260" r="4" fill="#1B5E20" opacity="0.5" />

      {/* Udder */}
      <path
        d="M 440 378 Q 445 395 455 405 Q 470 415 485 408
           Q 495 400 498 385 Q 495 375 485 372 Q 465 368 450 372 Q 442 374 440 378 Z"
        fill="#4CAF50" opacity="0.6"
      />
      {/* Teats */}
      <line x1="452" y1="405" x2="450" y2="418" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <line x1="465" y1="410" x2="464" y2="422" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <line x1="478" y1="408" x2="479" y2="420" stroke="#2E7D32" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

      {/* Tail */}
      <path
        d="M 655 260 Q 665 250 670 265 Q 672 285 668 310
           Q 665 330 660 345 Q 655 355 650 360
           Q 645 368 648 375 Q 652 382 658 378"
        stroke="#2E7D32" strokeWidth="3.5" fill="none" strokeLinecap="round"
      />

      {/* ── Internal organs (rumen focus + mammary) ── */}
      {/* Rumen */}
      <path
        d="M 330 240 Q 360 218 400 222 Q 435 228 445 260
           Q 450 290 430 310 Q 405 328 375 320
           Q 345 310 335 280 Q 328 260 330 240 Z"
        fill="url(#organ-dairy)" opacity="0.45"
      />
      <text x="385" y="275" textAnchor="middle" fontSize="9" fill="#E8F5E9" fontWeight="bold">Rumen</text>

      {/* Reticulum */}
      <ellipse cx="325" cy="268" rx="22" ry="20" fill="url(#organ-dairy)" opacity="0.45" />

      {/* Abomasum */}
      <ellipse cx="480" cy="285" rx="28" ry="22" fill="url(#organ-dairy)" opacity="0.45" />
      <text x="480" y="289" textAnchor="middle" fontSize="7" fill="#E8F5E9" fontWeight="bold">Abomasum</text>

      {/* Mammary gland connection */}
      <path d="M 470 305 Q 468 340 462 370" stroke="#1B5E20" strokeWidth="2" fill="none" opacity="0.35" strokeDasharray="4 2" />

      {/* Wireframe overlay */}
      <WireframeOverlay paths={[
        "M 230 260 Q 380 225 540 240 Q 620 250 650 280",
        "M 280 320 Q 430 285 580 300",
        "M 320 195 Q 420 340 560 320",
        "M 300 355 Q 430 320 570 350",
      ]} />

      {/* Annotation circles */}
      <circle cx="385" cy="270" r="65" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 3" />
      <circle cx="468" cy="395" r="30" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.25" strokeDasharray="4 3" />
    </svg>
  );
}

/* ═══════════════════════════════════════════
   EQUINE — Horse side view
   ═══════════════════════════════════════════ */
function EquineIllustration() {
  return (
    <svg viewBox="0 0 800 550" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
      <Background id="equine" />

      {/* Body silhouette */}
      <path
        d="M 195 210
           Q 190 195 185 180 Q 182 165 188 155
           Q 195 148 205 152 Q 210 158 208 168
           Q 212 155 218 140 Q 225 128 235 125
           Q 242 128 240 140 Q 238 155 235 165
           Q 240 155 248 145 Q 255 138 262 142
           Q 265 150 260 165
           Q 268 158 275 155 Q 282 152 288 158
           Q 290 168 285 178
           Q 290 172 298 170 Q 305 175 302 185
           Q 298 195 292 200
           Q 288 208 280 215 Q 270 222 260 228
           Q 252 235 248 242 Q 245 252 248 265
           Q 255 278 268 288
           Q 285 298 310 305 Q 345 312 385 315
           Q 430 318 475 315 Q 520 310 555 300
           Q 580 292 598 280
           Q 612 268 620 255
           Q 628 240 632 228
           Q 638 218 642 215
           Q 648 220 650 235
           Q 652 255 648 275
           Q 645 295 638 312
           Q 632 325 625 335
           Q 630 350 634 370 Q 637 390 638 410
           Q 639 425 634 430 Q 626 432 622 425
           L 618 405 Q 615 385 612 368
           Q 608 355 603 348
           Q 580 358 552 363
           Q 528 368 505 370
           Q 500 388 496 408 Q 493 428 490 438
           Q 488 445 482 443 Q 476 440 478 430
           L 482 408 Q 485 390 488 375
           Q 460 378 435 380 Q 410 380 385 378
           Q 380 395 376 415 Q 373 432 370 442
           Q 368 448 362 446 Q 356 442 358 432
           L 363 410 Q 366 392 370 378
           Q 345 375 320 370 Q 295 365 275 358
           Q 270 372 266 392 Q 262 412 260 428
           Q 258 438 252 438 Q 246 435 248 425
           L 252 405 Q 255 385 258 368
           Q 248 358 240 345
           Q 228 325 222 305
           Q 215 285 210 270
           Q 205 255 200 245
           Q 195 235 192 225
           Q 190 218 195 210 Z"
        fill="url(#body-equine)"
      />

      {/* Mane */}
      <path
        d="M 260 165 Q 252 175 248 190 Q 245 205 248 218
           Q 250 230 255 238 Q 258 245 260 248
           Q 255 248 250 245 Q 242 240 238 232
           Q 232 220 230 208 Q 228 195 232 182
           Q 238 170 248 162"
        fill="#1B5E20" opacity="0.5"
      />

      {/* Ears */}
      <path
        d="M 225 128 Q 220 108 225 98 Q 232 92 238 100 Q 240 112 238 125"
        fill="#2E7D32" opacity="0.8"
      />
      <path
        d="M 248 125 Q 250 105 258 98 Q 265 95 268 105 Q 265 118 260 128"
        fill="#2E7D32" opacity="0.7"
      />

      {/* Eye */}
      <circle cx="228" cy="195" r="6" fill="#1B5E20" />
      <circle cx="229" cy="194" r="2.5" fill="#E8F5E9" />

      {/* Nostril */}
      <ellipse cx="198" cy="218" rx="6" ry="8" fill="#1B5E20" opacity="0.5" />

      {/* Mouth line */}
      <path d="M 192 230 Q 200 235 210 232" stroke="#1B5E20" strokeWidth="1.5" fill="none" opacity="0.4" />

      {/* Tail */}
      <path
        d="M 650 245 Q 662 235 670 250 Q 678 270 675 295
           Q 672 320 665 345 Q 658 370 650 390
           Q 645 405 640 415 Q 635 422 630 418
           Q 635 408 640 395 Q 648 370 652 345
           Q 656 320 654 295 Q 652 275 650 260"
        fill="#2E7D32" opacity="0.6"
      />

      {/* Hooves */}
      <rect x="255" y="430" width="12" height="10" rx="2" fill="#1B5E20" opacity="0.7" />
      <rect x="365" y="438" width="12" height="10" rx="2" fill="#1B5E20" opacity="0.7" />
      <rect x="482" y="435" width="12" height="10" rx="2" fill="#1B5E20" opacity="0.7" />
      <rect x="618" y="422" width="12" height="10" rx="2" fill="#1B5E20" opacity="0.7" />

      {/* ── Internal organs (hindgut fermenter) ── */}
      {/* Stomach (small, simple) */}
      <ellipse cx="350" cy="305" rx="25" ry="18" fill="url(#organ-equine)" opacity="0.5" />
      <text x="350" y="309" textAnchor="middle" fontSize="7" fill="#E8F5E9" fontWeight="bold">Stomach</text>

      {/* Small intestine */}
      <path
        d="M 375 305 Q 395 295 410 305 Q 420 318 410 328
           Q 398 335 390 325 Q 385 315 395 308
           Q 408 300 420 312"
        stroke="#1B5E20" strokeWidth="3" fill="none" opacity="0.45" strokeLinecap="round"
      />

      {/* Cecum (large — key organ for equine) */}
      <path
        d="M 440 290 Q 470 270 500 278 Q 530 290 535 320
           Q 538 350 518 365 Q 495 375 470 365
           Q 450 352 445 325 Q 440 305 440 290 Z"
        fill="url(#organ-equine)" opacity="0.5"
      />
      <text x="490" y="330" textAnchor="middle" fontSize="9" fill="#E8F5E9" fontWeight="bold">Cecum</text>

      {/* Large colon */}
      <path
        d="M 535 320 Q 555 310 570 320 Q 582 335 575 350
           Q 565 360 552 355 Q 545 345 555 338
           Q 568 330 578 342 Q 590 358 585 368"
        stroke="#1B5E20" strokeWidth="4" fill="none" opacity="0.4" strokeLinecap="round"
      />

      {/* Wireframe overlay */}
      <WireframeOverlay paths={[
        "M 260 260 Q 400 280 550 275 Q 620 270 648 260",
        "M 290 330 Q 430 300 570 310",
        "M 330 240 Q 430 350 560 340",
        "M 310 360 Q 430 330 560 360",
        "M 380 260 Q 440 320 520 300",
      ]} />

      {/* Annotation circles */}
      <circle cx="350" cy="305" r="35" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 3" />
      <circle cx="490" cy="325" r="55" stroke="#4CAF50" strokeWidth="1" fill="none" opacity="0.3" strokeDasharray="4 3" />
    </svg>
  );
}
