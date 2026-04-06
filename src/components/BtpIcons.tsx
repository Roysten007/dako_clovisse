export const BlueprintIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="3" y="3" width="26" height="26" rx="2" />
    <line x1="3" y1="11" x2="29" y2="11" />
    <line x1="3" y1="19" x2="29" y2="19" />
    <line x1="11" y1="3" x2="11" y2="29" />
    <line x1="20" y1="3" x2="20" y2="29" />
  </svg>
);

export const TrussIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 28L16 4L30 28H2Z" />
    <line x1="9" y1="16" x2="23" y2="16" />
    <line x1="16" y1="4" x2="9" y2="16" />
    <line x1="16" y1="4" x2="23" y2="16" />
    <line x1="9" y1="16" x2="5.5" y2="22" />
    <line x1="23" y1="16" x2="26.5" y2="22" />
  </svg>
);

export const CompassIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <circle cx="16" cy="16" r="13" />
    <polygon points="16,6 19,14 16,12 13,14" fill="currentColor" opacity="0.6" />
    <polygon points="16,26 13,18 16,20 19,18" fill="currentColor" opacity="0.3" />
    <circle cx="16" cy="16" r="2" fill="currentColor" />
  </svg>
);

export const HardhatIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M6 20C6 20 6 14 16 10C26 14 26 20 26 20" />
    <path d="M4 20H28V24C28 25 27 26 26 26H6C5 26 4 25 4 24V20Z" />
    <line x1="16" y1="6" x2="16" y2="10" />
    <circle cx="16" cy="5" r="1.5" fill="currentColor" />
  </svg>
);

export const CraneIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <line x1="10" y1="28" x2="10" y2="6" />
    <line x1="6" y1="28" x2="14" y2="28" />
    <line x1="10" y1="6" x2="28" y2="6" />
    <line x1="10" y1="6" x2="6" y2="10" />
    <line x1="28" y1="6" x2="28" y2="14" />
    <line x1="28" y1="14" x2="26" y2="14" />
    <rect x="25" y="14" width="4" height="5" rx="0.5" />
    <line x1="10" y1="12" x2="10" y2="28" strokeDasharray="2 2" opacity="0.3" />
  </svg>
);

export const TerrainIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M2 24C6 18 10 22 14 16C18 10 22 20 26 14C28 11 30 12 30 12" />
    <path d="M2 28C8 24 12 26 16 22C20 18 24 24 30 20" opacity="0.4" />
  </svg>
);

export const LayersIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 4L30 12L16 20L2 12L16 4Z" />
    <path d="M2 17L16 25L30 17" />
    <path d="M2 22L16 30L30 22" />
  </svg>
);

export const DigitalIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="4" y="4" width="24" height="18" rx="2" />
    <line x1="12" y1="22" x2="20" y2="22" />
    <line x1="16" y1="22" x2="16" y2="26" />
    <line x1="10" y1="26" x2="22" y2="26" />
    <path d="M10 12L13 15L10 18" opacity="0.7" />
    <line x1="15" y1="18" x2="22" y2="18" opacity="0.4" />
  </svg>
);

export const CalculatorIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="2" width="20" height="28" rx="2" />
    <rect x="9" y="5" width="14" height="6" rx="1" />
    <circle cx="12" cy="16" r="1.2" fill="currentColor" />
    <circle cx="20" cy="16" r="1.2" fill="currentColor" />
    <circle cx="12" cy="21" r="1.2" fill="currentColor" />
    <circle cx="20" cy="21" r="1.2" fill="currentColor" />
    <circle cx="12" cy="26" r="1.2" fill="currentColor" />
    <circle cx="20" cy="26" r="1.2" fill="currentColor" />
  </svg>
);

export const BuildingIcon = ({ className = "w-8 h-8" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="6" y="8" width="20" height="22" rx="1" />
    <rect x="10" y="12" width="4" height="4" rx="0.5" />
    <rect x="18" y="12" width="4" height="4" rx="0.5" />
    <rect x="10" y="19" width="4" height="4" rx="0.5" />
    <rect x="18" y="19" width="4" height="4" rx="0.5" />
    <rect x="13" y="25" width="6" height="5" rx="0.5" />
    <path d="M6 8L16 2L26 8" />
  </svg>
);
