import { useEffect, useRef, type CSSProperties } from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../components/OptimizedImage';
import styles from './PortfolioHome.module.css';

const contactLinks = [
  {
    label: 'Resume',
    href: 'https://www.monicaaddepalli.com/assets/monica-addepalli-resume.pdf?v=20260905-1',
    external: true,
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/monica-addepalli',
    external: true,
  },
  {
    label: 'Mail',
    href: 'mailto:monicaaddepalli@gmail.com',
    external: false,
  },
  {
    label: 'Phone',
    href: 'https://wa.me/919986892130?text=Hey%20there%21',
    external: true,
  },
];

const photoVersion = '20261109-1';

function photo(name: string) {
  return {
    image: `/assets/v3/home/${name}.png?v=${photoVersion}`,
    width: 1086,
    height: 1448,
  };
}

const projects = [
  {
    index: '01',
    title: 'MB Pay',
    summary: 'Making Healthcare Payments Rewarding',
    path: '/work/mb-pay',
    ...photo('mb-pay'),
  },
  {
    index: '02',
    title: 'In Clinic',
    summary: 'Improving Doctor Booking Conversion To 32%',
    path: '/work/inclinic-search-filters',
    ...photo('inclinic'),
  },
  {
    index: '03',
    title: 'R2C - Reorder',
    summary: 'Boosting 23% Cashless Adoption With Behavioural Design',
    path: '/work/r2c-reorder',
    ...photo('r2c'),
  },
  {
    index: '04',
    title: 'Mozaic Design System',
    summary: 'Achieving Consistency At Scale Across Multi-Service B2B2C Platform',
    path: '/work/mozaicds',
    ...photo('mozaic'),
  },
  {
    index: '05',
    title: 'Vision Revamp',
    summary: 'Rethinking how people use Vision Care',
    path: '/work/vision-revamp',
    ...photo('vision'),
  },
  {
    index: '06',
    title: 'Building a responsive typographic system',
    summary: 'WRITING',
    path: '/notes/responsive-typographic-system',
    image: '/assets/v2/typography/hero.jpg?v=20261116-5',
    width: 682,
    height: 1024,
  },
  {
    index: '07',
    title: 'Building a design system component',
    summary: 'WRITING',
    path: '/notes/ds-component',
    image: '/assets/v2/component-blog/hero.jpg',
    width: 682,
    height: 1024,
  },
];

export function PortfolioHome() {
  const stageRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return;

    const onWheel = (event: WheelEvent) => {
      if (stage.scrollWidth <= stage.clientWidth + 1) return;
      const delta = Math.abs(event.deltaY) > Math.abs(event.deltaX) ? event.deltaY : event.deltaX;
      if (delta === 0) return;
      event.preventDefault();
      stage.scrollLeft += delta;
    };

    stage.addEventListener('wheel', onWheel, { passive: false });
    return () => stage.removeEventListener('wheel', onWheel);
  }, []);

  return (
    <main className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.intro}>
            <h1 className={styles.name} data-style="Large">
              Monica
            </h1>
            <p className={styles.bio} data-style="Body">
              Product Designer building and scaling impactful B2B and B2C experiences across
              Healthcare and E-commerce.
            </p>
          </div>
          <nav className={styles.links} aria-label="Contact">
            {contactLinks.map((link) => (
              <a
                key={link.label}
                className={styles.contactLink}
                data-style="Large"
                data-header-link=""
                href={link.href}
                {...(link.external ? { target: '_blank', rel: 'noreferrer' } : {})}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </header>

        <div className={styles.stage} ref={stageRef}>
          <ul className={styles.projects}>
          {projects.map((project, index) => (
            <li key={project.path}>
              <Link
                className={styles.card}
                style={{ '--enter': index } as CSSProperties}
                to={project.path}
              >
                <div className={styles.media}>
                  <OptimizedImage
                    className={styles.image}
                    src={project.image}
                    alt=""
                    width={project.width}
                    height={project.height}
                    priority={index < 2}
                  />
                </div>
                <div className={styles.meta}>
                  <span className={styles.index} data-style="Body Mono">
                    ({project.index})
                  </span>
                  <div className={styles.copy}>
                    <h2 className={styles.title} data-style="Body">
                      {project.title}
                    </h2>
                    <p className={styles.summary} data-style="Body Mono">
                      {project.summary}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
