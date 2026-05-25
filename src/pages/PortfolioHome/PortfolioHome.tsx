import { Fragment, useCallback, useLayoutEffect, useRef, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { applyTheme, getInitialTheme, type Theme } from '../../lib/theme';
import styles from './PortfolioHome.module.css';

const imgFrame1 = '/assets/home/work-r2c.png';
const imgFrame2 = '/assets/home/work-mozaic.png';
const imgFrame3 = '/assets/home/work-vision.png';
const imgFrame4 = '/assets/home/work-inclinic.png';
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

type TabId = 'work' | 'blog';

type WorkItem = {
  title: string;
  subtitle: string;
  imageUrl: string;
  comingSoon?: boolean;
  caseStudyPath?: string;
};

type BlogPost = {
  title: string;
  subtitle: string;
  imageUrl?: string;
  path?: string;
};

const selectedWork: WorkItem[] = [
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
  {
    title: 'inclinic hospital page',
    subtitle: 'improving hospital discovery and appointment conversion.',
    imageUrl: imgFrame4,
    comingSoon: true,
  },
];

function tabFromSearchParams(params: URLSearchParams): TabId {
  return params.get('tab') === 'blog' ? 'blog' : 'work';
}

const blogPosts: BlogPost[] = [
  {
    title: 'behind the scenes of building design system component',
    subtitle:
      'my experience understanding what it takes to design a design system component from scratch.',
    imageUrl: imgBlogDesignSystem,
    path: '/blog/design-system-component',
  },
  {
    title: 'how to build a responsive typographic system',
    subtitle:
      'a step-by-step guide to building a type system that works across every screen size.',
    imageUrl: imgBlogTypography,
    path: '/blog/responsive-typographic-system',
  },
];

export function PortfolioHome() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = tabFromSearchParams(searchParams);

  const selectTab = (tab: TabId) => {
    if (tab === 'blog') {
      setSearchParams({ tab: 'blog' }, { replace: true });
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
            <div className={`${styles.topRow} ${styles.narrowText}`} data-node-id="16:46">
              <div className={styles.nameBlock} data-node-id="2:801">
                <a className={styles.nameLink} href="/" aria-label="Home" data-node-id="2:4">
                  monica addepalli
                </a>
                <p className={styles.secondaryText} data-node-id="2:6">
                  product designer
                </p>
              </div>
              <div className={styles.location} data-node-id="16:75">
                <p className={styles.secondaryText} data-node-id="16:44">
                  bangalore, India
                </p>
              </div>
            </div>

            <p className={`${styles.primaryText} ${styles.narrowText}`} data-node-id="4:35">
              i design intuitive interfaces and experiences across digital products, driven by
              curiosity, experimentation, and bold ideas.
            </p>

            <p className={`${styles.primaryText} ${styles.narrowText}`} data-node-id="7:69">
              <span>{`currently designing seamless healthcare experiences for millions at `}</span>
              <a className={styles.link} href="https://www.medibuddy.in/" target="_blank" rel="noreferrer">
                medibuddy
              </a>
              <span>{`. `}</span>
              <span className={styles.secondaryText}>(2024 - now)</span>
            </p>

            <div className={`${styles.contactRow} ${styles.narrowText}`} data-node-id="8:594">
              <div className={styles.contactLeft} data-node-id="5:63">
                <p className={styles.primaryText} data-node-id="5:61">
                  get in touch at
                </p>
                <div className={styles.emailRow} data-node-id="8:585">
                  <a
                    className={styles.link}
                    href={`mailto:${EMAIL}`}
                    data-node-id="5:64"
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
                </div>
              </div>

              <div className={styles.contactRight} data-node-id="8:588">
                <span data-node-id="8:589">or</span>
                <span data-node-id="8:597">view my</span>
                <a
                  className={styles.resumeInlineLink}
                  href="https://drive.google.com/file/d/1nwYkwOtMrwIv1kuXU2iqUVJTK4wdNjM6/view?usp=sharing"
                  data-node-id="8:595"
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className={styles.underline}>resume</span>.
                </a>
              </div>
            </div>
          </header>

          <section className={styles.workSection} data-node-id="15:39">
            <nav
              ref={tabsRef}
              className={styles.tabs}
              role="tablist"
              aria-label="Work and blog"
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
                id="tab-blog"
                data-tab="blog"
                className={activeTab === 'blog' ? styles.tabSelected : styles.tab}
                type="button"
                role="tab"
                aria-selected={activeTab === 'blog'}
                aria-controls="panel-blog"
                onClick={() => selectTab('blog')}
                data-node-id="9:3832"
              >
                blog
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
              {selectedWork.map((item) => {
                const titleId = `work-title-${item.title.replace(/\s+/g, '-').toLowerCase()}`;

                const card = (
                  <article className={styles.workItem} data-node-id="16:51">
                    <div className={styles.workImage} aria-hidden="true">
                      <div className={styles.workImageBg} />
                      <img className={styles.workImgTag} alt="" src={item.imageUrl} />
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
                id="panel-blog"
                role="tabpanel"
                aria-labelledby="tab-blog"
                aria-hidden={activeTab !== 'blog'}
                className={`${styles.tabPanel} ${activeTab === 'blog' ? styles.tabPanelActive : styles.tabPanelInactive}`}
              >
                <div className={styles.blogList}>
                  {blogPosts.map((post) => {
                    const titleId = `blog-title-${post.title.replace(/\s+/g, '-').toLowerCase()}`;

                    const card = (
                      <article className={styles.blogCard} data-node-id="188:890">
                        <div className={styles.workImage} aria-hidden="true" data-node-id="188:891">
                          <div className={styles.workImageBg} />
                          {post.imageUrl ? (
                            <img className={styles.workImgTag} alt="" src={post.imageUrl} />
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
            >
              linkedin
            </a>
            <a
              className={styles.footerLink}
              href="https://drive.google.com/file/d/1nwYkwOtMrwIv1kuXU2iqUVJTK4wdNjM6/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              resume
            </a>
            <button className={styles.footerButton} type="button" onClick={onToggleTheme}>
              {theme === 'dark' ? 'light mode' : 'dark mode'}
            </button>
          </footer>
          <a
            className={styles.footerCredit}
            href="https://cursor.com"
            target="_blank"
            rel="noreferrer"
          >
            made with cursor
          </a>
        </div>
      </div>
    </div>
  );
}

