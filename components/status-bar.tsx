const Signal = ({ color }: { color: string }) => (
  <svg width="18" height="12" viewBox="0 0 18 12" fill="none" aria-hidden="true">
    <rect x="0" y="8" width="3" height="4" rx="1" fill={color} />
    <rect x="5" y="5" width="3" height="7" rx="1" fill={color} />
    <rect x="10" y="2.5" width="3" height="9.5" rx="1" fill={color} />
    <rect x="15" y="0" width="3" height="12" rx="1" fill={color} />
  </svg>
)

const Wifi = ({ color }: { color: string }) => (
  <svg width="17" height="12" viewBox="0 0 17 12" fill="none" aria-hidden="true">
    <path
      d="M8.5 2C11.4 2 14.06 3.1 16.02 4.9L8.5 12L0.98 4.9C2.94 3.1 5.6 2 8.5 2Z"
      fill={color}
    />
  </svg>
)

const Battery = ({ color }: { color: string }) => (
  <svg width="27" height="13" viewBox="0 0 27 13" fill="none" aria-hidden="true">
    <rect x="0.5" y="0.5" width="22" height="12" rx="3.5" stroke={color} opacity="0.5" />
    <rect x="2" y="2" width="19" height="9" rx="2" fill={color} />
    <rect x="24" y="4" width="1.5" height="5" rx="0.75" fill={color} opacity="0.6" />
  </svg>
)

export function StatusBar({ variant = 'dark' }: { variant?: 'light' | 'dark' }) {
  const color = variant === 'light' ? '#ffffff' : '#1a1a1a'
  return (
    <div className="flex items-center justify-between px-7 pt-3 pb-1 select-none">
      <span
        className="text-[15px] font-semibold tracking-tight"
        style={{ color }}
      >
        9:09
      </span>
      <div className="flex items-center gap-1.5">
        <Signal color={color} />
        <Wifi color={color} />
        <Battery color={color} />
      </div>
    </div>
  )
}
