import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../components/OptimizedImage';
import { TimeWidget } from '../../components/TimeWidget/TimeWidget';
import { applyTheme } from '../../lib/theme';
import styles from './PortfolioHomeV2.module.css';

const resumePdf = '/assets/monica-addepalli-resume.pdf?v=20260816-3';
const imgCamera = '/assets/v2/hero-camera.png';
const imgObsessed = '/assets/v2/obsessed.gif';
type ListItem = {
  title: string;
  year: string;
  path: string;
};

const projects: ListItem[] = [
  {
    title: 'Improving Doctor Booking Conversion to 32%',
    year: '2026',
    path: '/work/inclinic-search-filters',
  },
  {
    title: 'boosting 23% cashless adoption with behavioural design',
    year: '2025',
    path: '/work/r2c-reorder',
  },
  {
    title: 'Making it easier to use vision benefits',
    year: '2025',
    path: '/work/vision-revamp',
  },
];

const writings: ListItem[] = [
  {
    title: 'building a responsive typographic system',
    year: '2026',
    path: '/notes/responsive-typographic-system',
  },
  {
    title: 'building a design system component',
    year: '2025',
    path: '/notes/ds-component',
  },
];

function HeaderActions({ className }: { className?: string }) {
  return (
    <div className={className}>
      <a className={styles.resume} href={resumePdf} target="_blank" rel="noreferrer">
        resume
      </a>
      <div className={styles.socials}>
        <a
          className={`${styles.social} ${styles.socialLinkedin}`}
          href="https://www.linkedin.com/in/monica-addepalli-4a0b48299"
          target="_blank"
          rel="noreferrer"
          aria-label="LinkedIn"
        />
        <a
          className={`${styles.social} ${styles.socialGithub}`}
          href="https://github.com/monicaaddepalli"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub"
        />
      </div>
    </div>
  );
}

function ListSection({
  label,
  items,
}: {
  label: string;
  items: ListItem[];
}) {
  return (
    <section className={styles.listSection} aria-label={label}>
      <h2 className={styles.sectionLabel}>{label}</h2>
      <ul className={styles.list}>
        {items.map((item) => (
          <li key={item.path} className={styles.listItem}>
            <Link className={styles.listLink} to={item.path}>
              <span className={styles.listTitle}>{item.title}</span>
              <span className={styles.listYear}>{item.year}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export function PortfolioHomeV2() {
  useLayoutEffect(() => {
    applyTheme('light');
  }, []);

  return (
    <div className={styles.page} data-name="Home / v2">
      <div className={styles.headerBlur} aria-hidden="true">
        <div className={styles.headerBlurBg} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurSoft}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurMedium}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurStrong}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurExtra}`} />
      </div>
      <div className={styles.shell}>
        <header className={styles.header}>
          <a className={styles.identity} href="/" aria-label="Home">
            monica addepalli
          </a>
          <HeaderActions className={`${styles.actions} ${styles.headerActions}`} />
        </header>

        <div className={styles.hero}>
          <div className={styles.collage}>
            <div className={styles.heroCamera}>
              <OptimizedImage
                className={styles.camera}
                src={imgCamera}
                alt=""
                width={534}
                height={639}
                priority
              />
            </div>
            <div className={styles.obsessed}>
              <div className={styles.obsessedLabelWrap}>
                <p className={styles.obsessedLabel}>currently obsessed with</p>
              </div>
              <div className={styles.obsessedMedia}>
                <img className={styles.obsessedGif} src={imgObsessed} alt="" />
              </div>
            </div>
          </div>
          <div className={styles.clock}>
            <TimeWidget />
          </div>
        </div>

        <h1 className={styles.headline}>
          <span className={styles.headlineLine}>Monica is a design engineer and</span>
          <span className={styles.headlineLine}>a professional overthinker</span>
        </h1>
        <HeaderActions className={`${styles.actions} ${styles.introActions}`} />

        <div className={styles.body}>
          <section className={styles.about} aria-label="About">
            <p>
              i believe good design is about making complex things feel simple. i like thinking
              beyond the interface, understanding how products work, and solving problems that
              create real impact.
            </p>
            <p>
              i’ve worked across healthcare and digital products, designing user journeys, product
              experiences, and design systems. currently, i’m designing healthcare experiences for
              millions at{' '}
              <a
                className={styles.emphasis}
                href="https://www.medibuddy.in/"
                target="_blank"
                rel="noreferrer"
              >
                medibuddy
              </a>
              .
            </p>
            <p>
              i enjoy experimenting with ai and emerging technologies, and building things beyond
              figma to explore new ideas.
            </p>
            <p>outside of work, i enjoy watching movies, playing sports, and discovering new things.</p>
          </section>

          <div className={styles.lists}>
            <ListSection label="select projects" items={projects} />
            <ListSection label="writings" items={writings} />
          </div>

          <p className={styles.footer}>made with cursor</p>
        </div>
      </div>
    </div>
  );
}
