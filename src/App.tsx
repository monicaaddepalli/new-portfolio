import { useEffect, useLayoutEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { PortfolioHome } from './pages/PortfolioHome/PortfolioHome';
import { R2cProject } from './pages/R2cProject/R2cProject';
import { VisionProject } from './pages/VisionProject/VisionProject';
import { DesignSystemBlog } from './pages/DesignSystemBlog/DesignSystemBlog';
import { TypographyBlog } from './pages/TypographyBlog/TypographyBlog';
import { MozaicProject } from './pages/MozaicProject/MozaicProject';
import { MozaicFoundations } from './pages/MozaicFoundations/MozaicFoundations';

const BLOG_SCROLL_OFFSET = 120;

function scrollStorageKey(pathname: string, search: string) {
  return `scroll:${pathname}${search}`;
}

function isPageReload() {
  const nav = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming | undefined;
  return nav?.type === 'reload';
}

function scrollToHash(hash: string) {
  const id = hash.replace(/^#/, '');
  if (!id) return false;

  const target = document.getElementById(id);
  if (!target) return false;

  const top = target.getBoundingClientRect().top + window.scrollY - BLOG_SCROLL_OFFSET;
  window.scrollTo({ top, behavior: 'auto' });
  return true;
}

function ScrollRestoration() {
  const location = useLocation();
  const pathKey = scrollStorageKey(location.pathname, location.search);
  const prevPathKeyRef = useRef<string | null>(null);

  useLayoutEffect(() => {
    if (location.hash && scrollToHash(location.hash)) {
      prevPathKeyRef.current = pathKey;
      return;
    }

    if (isPageReload()) {
      const saved = sessionStorage.getItem(pathKey);
      if (saved !== null) {
        const y = Number(saved);
        if (!Number.isNaN(y)) {
          window.scrollTo(0, y);
          prevPathKeyRef.current = pathKey;
          return;
        }
      }
    }

    if (prevPathKeyRef.current !== pathKey) {
      window.scrollTo(0, 0);
    }

    prevPathKeyRef.current = pathKey;
  }, [pathKey, location.hash]);

  useEffect(() => {
    const save = () => sessionStorage.setItem(pathKey, String(window.scrollY));

    window.addEventListener('scroll', save, { passive: true });
    window.addEventListener('pagehide', save);

    return () => {
      window.removeEventListener('scroll', save);
      window.removeEventListener('pagehide', save);
      save();
    };
  }, [pathKey]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Routes>
        <Route path="/" element={<PortfolioHome />} />
        <Route path="/work/r2c-reorder" element={<R2cProject />} />
        <Route path="/work/vision-revamp" element={<VisionProject />} />
        <Route path="/work/mozaic-design-system" element={<MozaicProject />} />
        <Route path="/work/mozaic-design-system/foundations" element={<MozaicFoundations />} />
        <Route path="/blog/design-system-component" element={<DesignSystemBlog />} />
        <Route path="/blog/responsive-typographic-system" element={<TypographyBlog />} />
      </Routes>
      <Analytics />
    </BrowserRouter>
  );
}
