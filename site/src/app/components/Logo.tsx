export default function Logo() {
  return (
    <svg
      className="logo"
      viewBox="0 0 140 140"
      role="img"
      aria-label="Time 4U logo wave and clock mark"
    >
      <path
        d="M18 95 C43 95, 47 75, 62 70 C79 64, 87 89, 120 89"
        fill="none"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
      />
      <path
        d="M44 95 C58 94, 67 84, 75 77 C86 68, 100 71, 98 82"
        fill="none"
        stroke="currentColor"
        strokeWidth="5"
        strokeLinecap="round"
      />
      <path
        d="M42 76 A36 36 0 1 1 95 47"
        fill="none"
        stroke="currentColor"
        strokeWidth="4"
      />
      <line x1="50" y1="40" x2="50" y2="33" stroke="currentColor" strokeWidth="2" />
      <line x1="63" y1="30" x2="63" y2="23" stroke="currentColor" strokeWidth="2" />
      <line x1="78" y1="28" x2="78" y2="21" stroke="currentColor" strokeWidth="2" />
      <line x1="92" y1="34" x2="92" y2="27" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}
