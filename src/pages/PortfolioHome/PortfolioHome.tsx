import { Fragment, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { OptimizedImage } from '../../components/OptimizedImage';
import { ThemeToggle } from '../../components/ThemeToggle';
import { applyTheme, getInitialTheme, type Theme } from '../../lib/theme';
import styles from './PortfolioHome.module.css';

const imgFrameInclinicSearch = '/assets/home/work-inclinic-search.png';
const imgFrame1 = '/assets/home/work-r2c.png';
const imgFrame2 = '/assets/home/work-mozaic.png';
const imgFrame3 = '/assets/home/work-vision.png';
const imgBlogDesignSystem = '/assets/home/blog-design-system.png';
const imgBlogTypography = '/assets/home/blog-typography.png';
const imgContentCopy = '/assets/home/icon-copy.svg';

const EMAIL = 'lakshmimonica14@gmail.com';

async function copyToClipboard(text: string) {
  if (navigator.clipboard?.writeText) {
    await navigator.clipboard.writeText(text);
    return;
  }

  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  textarea.style.left = '-9999px';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
}

type TabId = 'work' | 'notes';

type WorkItem = {
  title: string;
  subtitle: string;
  imageUrl: string;
  comingSoon?: boolean;
  caseStudyPath?: string;
};

type NotePost = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  path?: string;
};

const selectedWork: WorkItem[] = [
  {
    title: 'improving doctor discovery',
    subtitle: 'reducing friction in the journey from search to consultation.',
    imageUrl: imgFrameInclinicSearch,
    caseStudyPath: '/work/inclinic-search-filters',
  },
  {
    title: 'r2c - reorder',
    subtitle: 'boosting 23% cashless adoption with behavioural design.',
    imageUrl: imgFrame1,
    caseStudyPath: '/work/r2c-reorder',
  },
  {
    title: 'mozaic design system',
    subtitle: 'achieving consistency at scale across multi-service B2B2C platform.',
    imageUrl: imgFrame2,
    caseStudyPath: '/work/mozaic-design-system',
  },
  {
    title: 'vision revamp',
    subtitle:
      'improving the eyewear booking flow to reduce friction and increase conversions by 7%.',
    imageUrl: imgFrame3,
    caseStudyPath: '/work/vision-revamp',
  },
];

function tabFromSearchParams(params: URLSearchParams): TabId {
  const tab = params.get('tab');
  return tab === 'notes' || tab === 'blog' ? 'notes' : 'work';
}

const notesPosts: NotePost[] = [
  {
    title: 'behind the scenes of building design system component',
    subtitle:
      'my experience understanding what it takes to design a design system component from scratch.',
    imageUrl: imgBlogDesignSystem,
    path: '/notes/ds-component',
  },
  {
    title: 'how to build a responsive typographic system',
    subtitle:
      'a step-by-step guide to building a type system that works across every screen size.',
    imageUrl: imgBlogTypography,
    path: '/notes/responsive-typographic-system',
  },
];

export function PortfolioHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = tabFromSearchParams(searchParams);

  useLayoutEffect(() => {
    if (searchParams.get('tab') === 'blog') {
      setSearchParams({ tab: 'notes' }, { replace: true });
    }
  }, [searchParams, setSearchParams]);

  const selectTab = (tab: TabId) => {
    if (tab === 'notes') {
      setSearchParams({ tab: 'notes' }, { replace: true });
    } else {
      setSearchParams({}, { replace: true });
    }
  };

  const tabsRef = useRef<HTMLElement>(null);
  const [tabIndicator, setTabIndicator] = useState({ width: 0, transform: 'translateX(0px)' });

  const updateTabIndicator = useCallback(() => {
    const nav = tabsRef.current;
    if (!nav) return;

    const activeButton = nav.querySelector<HTMLButtonElement>(`[data-tab="${activeTab}"]`);
    if (!activeButton) return;

    setTabIndicator({
      width: activeButton.offsetWidth,
      transform: `translateX(${activeButton.offsetLeft}px)`,
    });
  }, [activeTab]);

  useLayoutEffect(() => {
    updateTabIndicator();
    window.addEventListener('resize', updateTabIndicator);
    return () => window.removeEventListener('resize', updateTabIndicator);
  }, [updateTabIndicator]);

  const [theme, setTheme] = useState<Theme>(() => {
    const initial = getInitialTheme();
    applyTheme(initial);
    return initial;
  });
  const [emailCopied, setEmailCopied] = useState(false);

  const onToggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    localStorage.setItem('theme', next);
  };

  const onCopyEmail = async () => {
    try {
      await copyToClipboard(EMAIL);
      setEmailCopied(true);
      window.setTimeout(() => setEmailCopied(false), 1500);
    } catch {
      // no-op
    }
  };

  return (
    <div className={styles.page} data-node-id="2:2" data-name="desktop -light mode">
      {emailCopied ? (
        <div className={styles.copyToast} role="status" aria-live="polite">
          email copied!
        </div>
      ) : null}
      <div className={styles.content} data-node-id="24:486">
        <div className={styles.container} data-node-id="24:344" data-name="container">
          <header className={styles.intro} data-node-id="4:50">
            <div className={`${styles.introTop} ${styles.narrowText}`}>
              <div className={styles.topRow} data-node-id="16:46">
                <div className={styles.nameBlock} data-node-id="2:801">
                  <a className={styles.nameLink} href="/" aria-label="Home" data-node-id="2:4">
                    monica
                  </a>
                  <p className={styles.secondaryText} data-node-id="2:6">
                    product designer
                  </p>
                </div>
                <div className={styles.location} data-node-id="16:75">
                  <ThemeToggle theme={theme} onToggle={onToggleTheme} />
                </div>
              </div>
              <hr className={styles.topRowDivider} aria-hidden="true" />
            </div>

            <p className={`${styles.primaryText} ${styles.narrowText}`} data-node-id="4:35">
              i design intuitive interfaces and experiences across digital products, driven by
              curiosity, experimentation, and bold ideas.
            </p>

            <p className={`${styles.primaryText} ${styles.narrowText}`} data-node-id="7:69">
              <span>{`currently designing seamless healthcare experiences for millions at `}</span>
              <a
                className={styles.link}
                href="https://www.medibuddy.in/"
                target="_blank"
                rel="noreferrer"
                data-accent-link
              >
                medibuddy
              </a>
              <span>{`. `}</span>
              <span className={styles.secondaryText}>(2024 - now)</span>
            </p>

            <p className={`${styles.primaryText} ${styles.narrowText} ${styles.contactRow}`} data-node-id="8:594">
              <span data-node-id="5:61">get in touch at </span>
              <span className={styles.emailRow} data-node-id="8:585">
                <a
                  className={styles.link}
                  href={`mailto:${EMAIL}`}
                  data-node-id="5:64"
                  data-accent-link
                >
                  {EMAIL}
                </a>
                <button
                  className={styles.copyButton}
                  type="button"
                  onClick={onCopyEmail}
                  aria-label={emailCopied ? 'Copied' : 'Copy email'}
                  data-node-id="8:582"
                >
                  {emailCopied ? (
                    <svg
                      className={styles.copyIcon}
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      aria-hidden="true"
                    >
                      <path
                        d="M13.7333 4.26667L6.8 11.2L2.26667 6.66667"
                        stroke="currentColor"
                        strokeWidth="1.4"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <img className={styles.copyIcon} alt="" src={imgContentCopy} />
                  )}
                </button>
              </span>
              <span data-node-id="8:588"> or view my </span>
              <span className={styles.resumePhrase}>
                <a
                  className={styles.resumeInlineLink}
                  href="/assets/monica-addepalli-resume.pdf"
                  data-node-id="8:595"
                  target="_blank"
                  rel="noreferrer"
                  data-accent-link
                >
                  <span className={styles.underline}>resume</span>
                </a>
                .
              </span>
            </p>
          </header>

          <section className={styles.workSection} data-node-id="15:39">
            <nav
              ref={tabsRef}
              className={styles.tabs}
              role="tablist"
              aria-label="Work and notes"
              data-node-id="9:3834"
            >
              <button
                id="tab-work"
                data-tab="work"
                className={activeTab === 'work' ? styles.tabSelected : styles.tab}
                type="button"
                role="tab"
                aria-selected={activeTab === 'work'}
                aria-controls="panel-work"
                onClick={() => selectTab('work')}
                data-node-id="9:3829"
              >
                selected work
              </button>
              <button
                id="tab-notes"
                data-tab="notes"
                className={activeTab === 'notes' ? styles.tabSelected : styles.tab}
                type="button"
                role="tab"
                aria-selected={activeTab === 'notes'}
                aria-controls="panel-notes"
                onClick={() => selectTab('notes')}
                data-node-id="9:3832"
              >
                notes
              </button>
              <span
                className={styles.tabIndicator}
                style={{
                  width: tabIndicator.width,
                  transform: tabIndicator.transform,
                }}
                aria-hidden="true"
              />
            </nav>

            <div className={styles.tabPanels}>
              <div
                id="panel-work"
                role="tabpanel"
                aria-labelledby="tab-work"
                aria-hidden={activeTab !== 'work'}
                className={`${styles.tabPanel} ${activeTab === 'work' ? styles.tabPanelActive : styles.tabPanelInactive}`}
              >
                <div className={styles.workList} data-node-id="15:38">
              {selectedWork.map((item, index) => {
                const titleId = `work-title-${item.title.replace(/\s+/g, '-').toLowerCase()}`;

                const card = (
                  <article className={styles.workItem} data-node-id="16:51">
                    <div className={styles.workImage} aria-hidden="true">
                      <div className={styles.workImageBg} />
                      <OptimizedImage
                        className={styles.workImgTag}
                        alt=""
                        src={item.imageUrl}
                        priority={index === 0}
                      />
                    </div>

                    <div className={styles.workText}>
                      <p id={titleId} className={styles.primaryText}>
                        {item.title}
                        {item.comingSoon ? (
                          <span className={styles.comingSoon}> (coming soon)</span>
                        ) : null}
                      </p>
                      <p className={styles.secondaryText}>{item.subtitle}</p>
                    </div>
                  </article>
                );

                return item.caseStudyPath ? (
                  <Link
                    key={item.title}
                    to={item.caseStudyPath}
                    className={styles.workItemLink}
                    aria-labelledby={titleId}
                  >
                    {card}
                  </Link>
                ) : (
                  <Fragment key={item.title}>{card}</Fragment>
                );
              })}
                </div>
              </div>

              <div
                id="panel-notes"
                role="tabpanel"
                aria-labelledby="tab-notes"
                aria-hidden={activeTab !== 'notes'}
                className={`${styles.tabPanel} ${activeTab === 'notes' ? styles.tabPanelActive : styles.tabPanelInactive}`}
              >
                <div className={styles.notesList}>
                  {notesPosts.map((post) => {
                    const titleId = `notes-title-${post.title.replace(/\s+/g, '-').toLowerCase()}`;

                    const card = (
                      <article className={styles.notesCard} data-node-id="188:890">
                        <div className={styles.workImage} aria-hidden="true" data-node-id="188:891">
                          <div className={styles.workImageBg} />
                          {post.imageUrl ? (
                            <OptimizedImage className={styles.workImgTag} alt="" src={post.imageUrl} />
                          ) : null}
                        </div>

                        <div className={styles.workText} data-node-id="188:892">
                          <p id={titleId} className={styles.primaryText} data-node-id="188:893">
                            {post.title}
                          </p>
                          <p className={styles.secondaryText} data-node-id="188:894">
                            {post.subtitle}
                          </p>
                        </div>
                      </article>
                    );

                    return post.path ? (
                      <Link
                        key={post.title}
                        to={post.path}
                        className={styles.workItemLink}
                        aria-labelledby={titleId}
                      >
                        {card}
                      </Link>
                    ) : (
                      <Fragment key={post.title}>{card}</Fragment>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
        </div>

        <div className={styles.footerStack}>
          <footer className={styles.footer} data-node-id="24:349" data-name="footer">
            <a
              className={styles.footerLink}
              href="https://www.linkedin.com/in/monica-addepalli-4a0b48299"
              target="_blank"
              rel="noreferrer"
              data-accent-link
            >
              linkedin
            </a>
            <a
              className={styles.footerLink}
              href="/assets/monica-addepalli-resume.pdf"
              target="_blank"
              rel="noreferrer"
              data-accent-link
            >
              resume
            </a>
            <p className={`${styles.secondaryText} ${styles.footerUpdated}`}>last updated: june 2026</p>
          </footer>
          <a
            className={`${styles.secondaryText} ${styles.footerCredit}`}
            href="https://cursor.com"
            target="_blank"
            rel="noreferrer"
            data-muted
            data-no-hover
          >
            made with cursor
          </a>
        </div>
      </div>
    </div>
  );
}

