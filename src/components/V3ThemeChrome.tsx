import { useLayoutEffect, useState } from 'react';
import { ThemeToggle } from './ThemeToggle';
import { applyTheme, getInitialTheme, toggleTheme, type Theme } from '../lib/theme';
import styles from './V3ThemeChrome.module.css';

const V3_PATH_PREFIXES = ['/', '/work/'];

function isV3Route(pathname: string) {
  if (pathname === '/') return true;
  if (pathname.startsWith('/notes/') || pathname.startsWith('/blog/')) return false;
  return V3_PATH_PREFIXES.some((prefix) => prefix !== '/' && pathname.startsWith(prefix));
}

type V3ThemeChromeProps = {
  pathname: string;
};

export function V3ThemeChrome({ pathname }: V3ThemeChromeProps) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useLayoutEffect(() => {
    if (!isV3Route(pathname)) return;
    const initial = getInitialTheme();
    applyTheme(initial);
    setTheme(initial);
  }, [pathname]);

  if (!isV3Route(pathname)) {
    return null;
  }

  const onToggle = () => {
    setTheme((current) => toggleTheme(current));
  };

  const isHome = pathname === '/';

  return (
    <div className={[styles.bar, isHome ? styles.barHome : ''].filter(Boolean).join(' ')}>
      <ThemeToggle theme={theme} onToggle={onToggle} />
    </div>
  );
}