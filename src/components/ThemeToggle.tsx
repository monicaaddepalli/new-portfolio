import type { Theme } from '../lib/theme';
import styles from './ThemeToggle.module.css';

function BrightnessIcon() {
  return (
    <svg className={styles.icon} viewBox="0 -960 960 960" aria-hidden="true">
      <path
        fill="currentColor"
        d="M346.16-160H220q-24.75 0-42.37-17.63Q160-195.25 160-220v-125.59L68-438q-9-9-13-19.81-4-10.82-4-22Q51-491 55-502q4-11 13-20l92-92.41V-740q0-24.75 17.63-42.38Q195.25-800 220-800h125.59L438-892q9-9 20.5-13t22.7-4q11.19 0 22.02 4.7 10.82 4.69 19.78 13.3l91 91h126q24.75 0 42.38 17.62Q800-764.75 800-740v125.59L892-522q9 9 13 19.81 4 10.82 4 22 0 11.19-4 22.19-4 11-13 20l-92 92.41V-220q0 24.75-17.62 42.37Q764.75-160 740-160H614l-91 90q-8.96 8.13-19.78 12.57Q492.39-53 481.2-53q-11.2 0-22.16-4.43Q448.07-61.87 439-70l-92.84-90ZM619-343.05q57-57.06 57-138Q676-562 618.95-619q-57.06-57-138-57Q400-676 343-618.95q-57 57.06-57 138Q286-400 343.05-343q57.06 57 138 57Q562-286 619-343.05ZM385-385q-39-39-39-96t39-96q39-39 96-39t96 39q39 39 39 96t-39 96q-39 39-96 39t-96-39Z"
      />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg className={styles.icon} viewBox="0 -960 960 960" aria-hidden="true">
      <path
        fill="currentColor"
        d="M480-120q-150 0-255-105T120-480q0-135 79.5-229T408-830q20-5 34-1t22 15q8 10 7.5 25t-8.5 35q-9 23-14 47t-5 49q0 90 63 153t153 63q25 0 48.5-4.5T754-461q22-8 38-7t26 9q10 8 13 23t-2 36q-27 121-121 200.5T480-120Z"
      />
    </svg>
  );
}

type ThemeToggleProps = {
  theme: Theme;
  onToggle: () => void;
  className?: string;
};

export function ThemeToggle({ theme, onToggle, className }: ThemeToggleProps) {
  const isDark = theme === 'dark';

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      className={[styles.toggle, className].filter(Boolean).join(' ')}
      data-theme={theme}
      onClick={onToggle}
    >
      <span className={styles.track}>
        <span className={styles.iconSlot} aria-hidden="true">
          <BrightnessIcon />
        </span>
        <span className={styles.iconSlot} aria-hidden="true">
          <MoonIcon />
        </span>
        <span className={styles.thumb} aria-hidden="true">
          {isDark ? <MoonIcon /> : <BrightnessIcon />}
        </span>
      </span>
    </button>
  );
}
