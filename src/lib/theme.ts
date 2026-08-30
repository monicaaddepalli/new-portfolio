export type Theme = 'light' | 'dark';

const FAVICON = '/favicon.png?v=20260830';

export function getInitialTheme(): Theme {
  const stored = localStorage.getItem('theme');
  if (stored === 'dark' || stored === 'light') return stored;
  return 'dark';
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
  link.href = FAVICON;
}

export function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  updateFavicon(theme);
}
