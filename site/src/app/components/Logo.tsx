// Approximation of the Time 4U brand mark (clock face flowing into an ocean wave).
// Swap for the designer's real vector/PNG when available.
export default function Logo() {
  const cx = 74;
  const cy = 52;
  const rInner = 33;
  const rOuter = 41;
  const tickCount = 16;

  const ticks = Array.from({ length: tickCount }, (_, i) => {
    const deg = (i * 360) / tickCount;
    // leave the bottom open where the wave flows out
    if (deg > 148 && deg < 212) return null;
    const a = ((deg - 90) * Math.PI) / 180;
    return (
      <line
        key={i}
        x1={(cx + rInner * Math.cos(a)).toFixed(1)}
        y1={(cy + rInner * Math.sin(a)).toFixed(1)}
        x2={(cx + rOuter * Math.cos(a)).toFixed(1)}
        y2={(cy + rOuter * Math.sin(a)).toFixed(1)}
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      />
    );
  });

  return (
    <svg
      className="logo"
      viewBox="0 0 150 138"
      role="img"
      aria-label="Time 4U clock and wave logo"
    >
      {/* clock face */}
      <circle
        cx={cx}
        cy={cy}
        r={rInner}
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
      />
      {ticks}
      {/* clock hands */}
      <line
        x1={cx}
        y1={cy}
        x2={cx - 10}
        y2={cy - 17}
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
      <line
        x1={cx}
        y1={cy}
        x2={cx + 15}
        y2={cy - 8}
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
      />

      {/* wave crest flowing out of the clock and curling on the left */}
      <path
        d="M138 90
           C 118 84, 100 92, 88 100
           C 76 108, 62 109, 50 102
           C 40 96, 27 98, 22 108
           C 17 118, 25 128, 35 125
           C 43 122, 44 114, 38 110
           C 33 107, 27 110, 29 116"
        fill="none"
        stroke="currentColor"
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* second wave line (foam) */}
      <path
        d="M126 99
           C 108 108, 86 111, 70 104
           C 63 101, 57 99, 51 101"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
