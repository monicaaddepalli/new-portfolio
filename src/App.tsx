import { useEffect, useLayoutEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
  ScrollRestoration,
  useLocation,
} from 'react-router-dom';
import { PortfolioHome } from './pages/PortfolioHome/PortfolioHome';
import { R2cProject } from './pages/R2cProject/R2cProject';
import { VisionProject } from './pages/VisionProject/VisionProject';
import { DesignSystemBlog } from './pages/DesignSystemBlog/DesignSystemBlog';
import { TypographyBlog } from './pages/TypographyBlog/TypographyBlog';
import { MozaicProject } from './pages/MozaicProject/MozaicProject';
import { MozaicFoundations } from './pages/MozaicFoundations/MozaicFoundations';
import { InclinicProject } from './pages/InclinicProject/InclinicProject';

const BLOG_SCROLL_OFFSET = 120;
const SCROLL_STORAGE_KEY = 'portfolio-scroll-positions';

function getScrollPathKey(pathname: string, search: string) {
  return `${pathname}${search}`;
}

function readScrollPosition(pathKey: string) {
  try {
    const positions = JSON.parse(sessionStorage.getItem(SCROLL_STORAGE_KEY) || '{}') as Record<
      string,
      number
    >;
    const saved = positions[pathKey];
    return typeof saved === 'number' && !Number.isNaN(saved) ? saved : null;
  } catch {
    return null;
  }
}

function writeScrollPosition(pathKey: string, y: number) {
  try {
    const positions = JSON.parse(sessionStorage.getItem(SCROLL_STORAGE_KEY) || '{}') as Record<
      string,
      number
    >;
    positions[pathKey] = y;
    sessionStorage.setItem(SCROLL_STORAGE_KEY, JSON.stringify(positions));
  } catch {
    // Ignore quota or privacy mode errors.
  }
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

function ScrollRestorePersistence() {
  const location = useLocation();
  const pathKey = getScrollPathKey(location.pathname, location.search);

  useLayoutEffect(() => {
    if ('scrollRestoration' in history) {
      history.scrollRestoration = 'manual';
    }
  }, []);

  useLayoutEffect(() => {
    if (location.hash) return;

    const savedY = readScrollPosition(pathKey);
    if (savedY == null || savedY <= 0) return;

    const restore = () => {
      window.scrollTo({ top: savedY, behavior: 'auto' });
    };

    restore();

    const retries = [50, 150, 400, 800].map((delay) =>
      window.setTimeout(() => {
        if (Math.abs(window.scrollY - savedY) > 2) {
          restore();
        }
      }, delay),
    );

    return () => {
      retries.forEach((timer) => window.clearTimeout(timer));
    };
  }, [pathKey, location.hash]);

  useEffect(() => {
    const persist = () => {
      writeScrollPosition(pathKey, window.scrollY);
    };

    const saveBeforeNavigate = (event: MouseEvent) => {
      const anchor = (event.target as Element | null)?.closest('a[href]');
      if (!anchor || anchor.getAttribute('target') === '_blank') return;

      const href = anchor.getAttribute('href');
      if (!href || href.startsWith('http') || href.startsWith('mailto:')) return;

      persist();
    };

    window.addEventListener('scroll', persist, { passive: true });
    window.addEventListener('pagehide', persist);
    document.addEventListener('click', saveBeforeNavigate, true);

    return () => {
      window.removeEventListener('scroll', persist);
      window.removeEventListener('pagehide', persist);
      document.removeEventListener('click', saveBeforeNavigate, true);
    };
  }, [pathKey]);

  return null;
}

function RootLayout() {
  const location = useLocation();

  useLayoutEffect(() => {
    if (!location.hash) return;

    requestAnimationFrame(() => {
      scrollToHash(location.hash);
    });
  }, [location.pathname, location.search, location.hash]);

  return (
    <>
      <ScrollRestoration
        getKey={(scrollLocation) => `${scrollLocation.pathname}${scrollLocation.search}`}
        storageKey={SCROLL_STORAGE_KEY}
      />
      <ScrollRestorePersistence />
      <Outlet />
      <Analytics />
    </>
  );
}

const router = createBrowserRouter([
  {
    element: <RootLayout />,
    children: [
      { path: '/', element: <PortfolioHome /> },
      { path: '/v1', element: <Navigate to="/" replace /> },
      { path: '/work/inclinic-search-filters', element: <InclinicProject /> },
      { path: '/work/r2c-reorder', element: <R2cProject /> },
      { path: '/work/vision-revamp', element: <VisionProject /> },
      { path: '/work/mozaic-design-system', element: <MozaicProject /> },
      { path: '/work/mozaic-design-system/foundations', element: <MozaicFoundations /> },
      { path: '/notes/ds-component', element: <DesignSystemBlog /> },
      {
        path: '/notes/design-system-component',
        element: <Navigate to="/notes/ds-component" replace />,
      },
      { path: '/notes/responsive-typographic-system', element: <TypographyBlog /> },
      { path: '/blog/ds-component', element: <Navigate to="/notes/ds-component" replace /> },
      {
        path: '/blog/design-system-component',
        element: <Navigate to="/notes/ds-component" replace />,
      },
      {
        path: '/blog/responsive-typographic-system',
        element: <Navigate to="/notes/responsive-typographic-system" replace />,
      },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
