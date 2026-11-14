export type Theme = 'light' | 'dark';

const FAVICON: Record<Theme, string> = {
  light: '/favicon-light.png?v=20261112-5',
  dark: '/favicon-dark.png?v=20261112-5',
};

export function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return 'light';
}

function updateFavicon(theme: Theme) {
  let link = document.querySelector<HTMLLinkElement>('link[data-theme-icon]');
  if (!link) {
    link = document.createElement('link');
    link.rel = 'icon';
    link.setAttribute('data-theme-icon', '');
    document.head.appendChild(link);
  }
  link.type = 'image/png';
  link.href = FAVICON[theme];
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  updateFavicon(theme);
}

export function toggleTheme(current: Theme): Theme {
  const next: Theme = current === 'light' ? 'dark' : 'light';
  applyTheme(next);
  try {
    localStorage.setItem('theme', next);
  } catch {
    // private mode
  }
  return next;
}
