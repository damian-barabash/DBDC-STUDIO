type P = { size?: number }
const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
})

export const ArrowDown = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M12 5v14M6 13l6 6 6-6" /></svg>
)
export const ArrowUp = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M12 19V5M6 11l6-6 6 6" /></svg>
)
export const ArrowUpRight = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M7 17L17 7M8 7h9v9" /></svg>
)
export const Chevron = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M6 9l6 6 6-6" /></svg>
)
export const Mail = ({ size = 16 }: P) => (
  <svg {...base(size)}><rect x="3" y="5" width="18" height="14" rx="2.5" /><path d="M3.5 7.5l8.5 6 8.5-6" /></svg>
)
export const Doc = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M7 3h7l4 4v14H7z" /><path d="M14 3v4h4M10 12h5M10 16h5" /></svg>
)
export const Pin = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M12 21s7-6.2 7-11.5A7 7 0 005 9.500C5 14.800 12 21 12 21z" /><circle cx="12" cy="9.500" r="2.500" /></svg>
)
export const Pencil = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M4 20l1-4L16.500 4.500l3 3L8 19z" /><path d="M14.500 6.500l3 3" /></svg>
)
export const Copy = ({ size = 16 }: P) => (
  <svg {...base(size)}><rect x="8" y="8" width="12" height="12" rx="2.500" /><path d="M16 8V6a2 2 0 00-2-2H6a2 2 0 00-2 2v8a2 2 0 002 2h2" /></svg>
)
export const Check = ({ size = 16 }: P) => (
  <svg {...base(size)}><path d="M5 12.500l4.500 4.500L19 7.500" /></svg>
)

/** Жирная стрелка ↘ из hero референса */
export const BigArrow = () => (
  <svg className="big-arrow" viewBox="0 0 100 100" aria-hidden="true">
    <path d="M8 26 L26 8 L72 54 L72 16 L96 16 L96 96 L16 96 L16 72 L54 72 Z" fill="currentColor" />
  </svg>
)
