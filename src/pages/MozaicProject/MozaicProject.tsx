import { useState } from 'react';
import { Link } from 'react-router-dom';
import { applyTheme, getInitialTheme, type Theme } from '../../lib/theme';
import styles from './MozaicProject.module.css';

const imgHero = '/assets/mozaic/hero.png';
const imgFoundations = '/assets/mozaic/foundations.png';
const imgComponents = '/assets/mozaic/components.png';
const imgApp1 = '/assets/mozaic/app-1.png';
const imgApp2 = '/assets/mozaic/app-2.png';
const imgApp3 = '/assets/mozaic/app-3.png';
const imgApp4 = '/assets/mozaic/app-4.png';
const imgApp5 = '/assets/mozaic/app-5.png';
const imgApp6 = '/assets/mozaic/app-6.png';
const imgArrowOutward = '/assets/mozaic/icon-arrow-outward.svg';

function MediaImage({
  src,
  hero,
  figure,
  fill,
  className,
}: {
  src: string;
  hero?: boolean;
  figure?: boolean;
  fill?: string;
  className?: string;
}) {
  const wrapClass = [
    styles.media,
    hero && styles.mediaHero,
    figure && styles.mediaFigure,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapClass} style={fill ? { background: fill } : undefined}>
      <div className={styles.mediaInner} aria-hidden="true">
        <img className={styles.mediaImg} alt="" src={src} />
      </div>
    </div>
  );
}

const FOUNDATIONS_PATH = '/work/mozaic-design-system/foundations';

function DeepDiveCta({
  label,
  showArrow = false,
  href,
  allCaps = false,
}: {
  label: string;
  showArrow?: boolean;
  href?: string;
  allCaps?: boolean;
}) {
  const linkClass = [styles.externalLink, allCaps && styles.deepDiveCaps].filter(Boolean).join(' ');

  if (href) {
    return (
      <a
        className={linkClass}
        href={href}
        target="_blank"
        rel="noreferrer"
        data-accent-link
      >
        {label}
        {showArrow ? (
          <img className={styles.externalLinkIcon} alt="" src={imgArrowOutward} aria-hidden="true" />
        ) : null}
      </a>
    );
  }

  return (
    <p className={linkClass}>
      {label}
      {showArrow ? (
        <img className={styles.externalLinkIcon} alt="" src={imgArrowOutward} aria-hidden="true" />
      ) : null}
    </p>
  );
}

const problemItems = [
  {
    index: '01',
    title: 'Inconsistent visual & interaction patterns across domains',
    body: 'Everyone started solving identical challenges in divergent ways causing fragmented UX and brand perception.',
  },
  {
    index: '02',
    title: 'Broken Design to Development Pipeline',
    body: 'Lack of shared tokens, components, and behaviour definitions caused ambiguous dev handoffs and reworks.',
  },
  {
    index: '03',
    title: 'No adherence of WCAG guidelines',
    body: 'Accessibility failures in core journeys',
  },
  {
    index: '04',
    title: 'No governance model for components',
    body: 'Components were frequently re-created or overridden',
  },
];

const principles = [
  {
    index: '01',
    title: 'Build for practical workflows rather than ideal scenarios.',
    body: 'The system prioritized what designers could realistically use, allowing it to scale gradually without slowing teams down.',
  },
  {
    index: '02',
    title: 'Encode system decisions once, reuse them everywhere.',
    body: 'Spacing, typography, states, and semantics were baked into the system so team could focus on UX problems, not repeated UI decisions.',
  },
  {
    index: '03',
    title: 'Align behavior while allowing domain flexibility.',
    body: 'Shared interaction logic was prioritized over visual sameness, enabling different products to feel consistent. Visual consistency was a byproduct.',
  },
  {
    index: '04',
    title: 'Promote reuse only after it proves value.',
    body: 'Patterns graduated into the core system only after demonstrating clear, repeated use across domains.',
  },
];

const applicationImages = [
  [imgApp1, imgApp2],
  [imgApp3, imgApp4],
  [imgApp5, imgApp6],
];

export function MozaicProject() {
  const [theme, setTheme] = useState<Theme>(() => {
    const initial = getInitialTheme();
    applyTheme(initial);
    return initial;
  });

  const onToggleTheme = () => {
    const next: Theme = theme === 'dark' ? 'light' : 'dark';
    setTheme(next);
    applyTheme(next);
    localStorage.setItem('theme', next);
  };

  return (
    <div className={styles.pageWrap}>
      <div className={styles.page} data-node-id="242:767" data-name="mozaic ds">
        <div className={styles.main}>
          <div className={styles.heroLead}>
            <header className={styles.sectionText} data-node-id="242:770">
              <div className={styles.stack60}>
                <div className={styles.backRow} data-node-id="242:771">
                  <Link className={styles.backLink} to="/" data-node-id="242:772" data-muted>
                    <span className={styles.backIconWrap} aria-hidden="true">
                      <svg className={styles.backIcon} viewBox="0 0 16 16" width={16} height={16}>
                        <path
                          fill="currentColor"
                          d="M5.50312 12.0865L1.41667 8L5.50312 3.91354L6.27729 4.6875L3.50646 7.45833H14.5833V8.54167H3.50646L6.27729 11.3125L5.50312 12.0865Z"
                        />
                      </svg>
                    </span>
                    <span className={styles.backLinkLabel}>back</span>
                  </Link>
                </div>

                <div className={`${styles.textBlock} ${styles.stack0}`} data-node-id="242:786">
                  <p className={styles.primary} data-node-id="242:788">
                    mozaic design system
                  </p>
                  <p className={styles.secondary} data-node-id="242:789">
                    achieving consistency at scale across multi-service B2B2C platform
                  </p>
                </div>
              </div>
            </header>

            <MediaImage src={imgHero} hero fill="#f2f2f2" className={styles.heroLeadImage} />

            <div className={`${styles.sectionText} ${styles.projectMeta}`}>
              <div className={styles.metaRow} data-node-id="242:790">
                <div className={styles.metaItem} data-node-id="242:791">
                  <p className={styles.secondary} data-node-id="242:792">
                    product
                  </p>
                  <p className={styles.primary} data-node-id="242:794">
                    medibuddy
                  </p>
                </div>
                <div className={styles.metaItem} data-node-id="242:796">
                  <p className={styles.secondary} data-node-id="242:797">
                    role
                  </p>
                  <p className={styles.primary} data-node-id="242:799">
                    product designer
                  </p>
                </div>
                <div className={styles.metaItem} data-node-id="242:801">
                  <p className={styles.secondary} data-node-id="242:802">
                    duration
                  </p>
                  <p className={styles.primary} data-node-id="242:804">
                    always in progress
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.sectionText} ${styles.heroLeadIntro}`}>
              <div className={`${styles.textBlock} ${styles.stack8}`} data-node-id="242:806">
                <p className={styles.primary} data-node-id="242:807">
                  Mozaic is a design system built to support a rapidly growing B2B2C healthcare
                  platform operating across multiple services - consultations, diagnostics, pharmacy,
                  insurance, and wellness.
                </p>
                <p className={styles.primary} data-node-id="242:808">
                  The goal was not just visual consistency, but a{' '}
                  <strong>shared design language</strong> that could scale across teams, products,
                  and levels of complexity while remaining practical to adopt within real
                  organizational constraints.
                </p>
              </div>
            </div>
          </div>

          <section className={styles.sectionText} data-node-id="242:810">
            <div className={`${styles.textBlock} ${styles.stack16}`} data-node-id="242:820">
              <p className={styles.heading} data-node-id="242:821">
                problem
              </p>

              <blockquote className={styles.blockquote} data-node-id="242:951">
                <p className={styles.blockquoteQuote} data-node-id="242:952">
                  &ldquo;Each person is essentially building their own interpretation of the brand.&rdquo;
                </p>
                <p className={styles.blockquoteAttribution} data-node-id="242:954">
                  Head of Design during Problem Grooming
                </p>
              </blockquote>

              <p className={styles.primary} data-node-id="242:822">
                As MediBuddy expanded into multiple healthcare services, individuals began shipping
                independently, each evolving their own visual language, interaction patterns, and
                implementation approaches.
              </p>

              <div className={styles.stack12} data-node-id="242:956">
                <p className={styles.primary} data-node-id="242:958">
                  this led to:
                </p>
                <div className={styles.stack16} data-node-id="242:960">
                  {problemItems.map((item) => (
                    <div key={item.index} className={styles.insightRow}>
                      <span className={styles.insightIndex}>{item.index}</span>
                      <div className={styles.insightBody}>
                        <p className={styles.strong}>{item.title}</p>
                        <p className={styles.primary}>{item.body}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <p className={styles.primary} data-node-id="242:982">
                We needed a unified, flexible system that could work across diverse product contexts
                while staying stable, maintainable, and evolving with the brand.
              </p>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="242:825">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="242:837">
              <p className={styles.heading} data-node-id="242:838">
                Guiding Principles
              </p>
              <p className={styles.primary} data-node-id="242:839">
                These principles shaped every major design decision in Mozaic:
              </p>
              <div className={styles.principleGrid} data-node-id="243:1006">
                <div className={styles.principleRow}>
                  {principles.slice(0, 2).map((principle) => (
                    <article key={principle.index} className={styles.principleCard}>
                      <p className={styles.principleCardIndex}>{principle.index}</p>
                      <div className={styles.principleCardBody}>
                        <p className={styles.principleCardTitle}>{principle.title}</p>
                        <p className={styles.principleCardText}>{principle.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <div className={styles.principleRow}>
                  {principles.slice(2).map((principle) => (
                    <article key={principle.index} className={styles.principleCard}>
                      <p className={styles.principleCardIndex}>{principle.index}</p>
                      <div className={styles.principleCardBody}>
                        <p className={styles.principleCardTitle}>{principle.title}</p>
                        <p className={styles.principleCardText}>{principle.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="244:1024">
            <div className={`${styles.textBlock} ${styles.stack40}`} data-node-id="244:1034">
              <div className={styles.stack12} data-node-id="244:1096">
                <p className={styles.heading} data-node-id="244:1035">
                  Building &amp; Scaling Mozaic DS
                </p>
                <p className={styles.primary} data-node-id="244:1036">
                  Mozaic wasn&apos;t a static style guide. It evolved as a system in response to real
                  product complexity, team behavior, and delivery constraints
                </p>
              </div>

              <div className={styles.stack60} data-node-id="244:1095">
                <div className={styles.stack24} data-node-id="244:1079">
                  <p className={styles.heading} data-node-id="244:1080">
                    phase 1: Identifying Fragmentation
                  </p>
                  <p className={styles.primary} data-node-id="244:1081">
                    The priority was diagnosing where and why products were diverging.
                  </p>
                  <ul className={styles.bulletList} data-node-id="244:1082">
                    <li data-node-id="244:1083">
                      <strong>Audited</strong> existing UI across consultations, diagnostics,
                      pharmacy, insurance, and wellness
                    </li>
                    <li data-node-id="244:1084">
                      Identified repeated interaction patterns (beneficiary, upload module,
                      navigation, badges)
                    </li>
                    <li data-node-id="244:1086">
                      Highlighted <strong>behavioural inconsistencies</strong> and design-to-dev
                      bottlenecks
                    </li>
                  </ul>
                </div>

                <div className={styles.stack24} data-node-id="244:1088">
                  <p className={styles.heading} data-node-id="244:1089">
                    phase 2: Establishing Shared Foundations
                  </p>
                  <MediaImage src={imgFoundations} figure />
                  <div className={styles.stack12} data-node-id="244:1110">
                    <p className={styles.primary} data-node-id="244:1090">
                      We replaced raw values with a system of logic to reduce unnecessary &amp;
                      repetitive decision-making.
                    </p>
                    <ul className={styles.bulletList} data-node-id="244:1091">
                      <li data-node-id="244:1092">
                        Implemented <strong>semantic tokens</strong> and a responsive typography
                        hierarchy.
                      </li>
                      <li data-node-id="244:1093">
                        Standardized naming conventions between Figma and the codebase.
                      </li>
                      <li data-node-id="244:1094">
                        Kept foundations lean to prioritize immediate adoption over exhaustive
                        completeness.
                      </li>
                    </ul>
                  </div>
                  <DeepDiveCta
                    label="Foundation & Token Architecture"
                    showArrow
                    href={FOUNDATIONS_PATH}
                    allCaps
                  />
                </div>

                <div className={styles.stack24} data-node-id="244:1121">
                  <p className={styles.heading} data-node-id="244:1122">
                    phase 3: Scaling Through Components and Patterns
                  </p>
                  <MediaImage src={imgComponents} figure />
                  <div className={styles.stack12} data-node-id="244:1124">
                    <p className={styles.primary} data-node-id="244:1125">
                      With foundations in place, we targeted{' '}
                      <strong>seamless feature handoffs</strong> to developers and supporting{' '}
                      <strong>faster iterations</strong> as product complexity increased. To achieve
                      this we:
                    </p>
                    <ul className={styles.bulletList} data-node-id="244:1126">
                      <li data-node-id="244:1127">
                        Designed components as contracts with predictable APIs.
                      </li>
                      <li data-node-id="244:1128">
                        Defined elements by behavior and intent rather than just visual layout.
                      </li>
                      <li data-node-id="244:1129">
                        Mirrored component props between Figma and code.
                      </li>
                      <li data-node-id="244:1137">
                        New patterns were held in a reference library and only &quot;promoted&quot; to
                        the core system once repeated reuse was proven.
                      </li>
                    </ul>
                  </div>
                  <DeepDiveCta label="components & patterns (coming soon)" allCaps />
                </div>

                <div className={styles.stack12} data-node-id="244:1149">
                  <p className={styles.heading} data-node-id="244:1150">
                    Phase 4: Adoption, Governance, and Iteration
                  </p>
                  <div className={styles.stack12} data-node-id="244:1152">
                    <p className={styles.primary} data-node-id="244:1153">
                      As usage increased, the focus moved to <strong>sustainability</strong>.
                    </p>
                    <ul className={styles.bulletList} data-node-id="244:1154">
                      <li data-node-id="244:1155">
                        Initial governance done through shared judgment over individual bias.
                      </li>
                      <li data-node-id="244:1156">
                        Followed regular release cycles with room for urgent fixes
                      </li>
                      <li data-node-id="244:1157">
                        Training, walkthroughs, and recorded handovers
                      </li>
                      <li data-node-id="244:1158">
                        Continuous refinement based on real usage and feedback
                      </li>
                    </ul>
                    <p className={styles.primary} data-node-id="244:1166">
                      Governance was human centered by choice, using documented decisions to
                      eventually transition from manual oversight to scalable processes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="244:1230">
            <div className={`${styles.textBlock} ${styles.stack20}`} data-node-id="244:1281">
              <p className={styles.heading} data-node-id="244:1283">
                impact
              </p>
              <div className={styles.impactList} data-node-id="244:1285">
                <div className={styles.impactItem} data-node-id="244:1286">
                  <p className={styles.impactValue} data-node-id="244:1287">
                    200+
                  </p>
                  <p className={styles.impactLabel} data-node-id="244:1288">
                    standardized reusable patterns &amp; components
                  </p>
                </div>
                <div className={styles.impactItem} data-node-id="244:1289">
                  <p className={styles.impactValue} data-node-id="244:1290">
                    40%
                  </p>
                  <p className={styles.impactLabel} data-node-id="244:1291">
                    reduction in design-to-development TAT
                  </p>
                </div>
                <div className={styles.impactItem} data-node-id="244:1293">
                  <p className={styles.impactValue} data-node-id="244:1294">
                    3x
                  </p>
                  <p className={styles.impactLabel} data-node-id="244:1295">
                    faster first-cuts using Mozaic + AI workflows
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section
            className={`${styles.sectionText} ${styles.sectionTextFullBleed}`}
            data-node-id="247:2028"
          >
            <div className={styles.stack20} data-node-id="247:2038">
              <p className={`${styles.heading} ${styles.applicationHeading}`} data-node-id="247:2040">
                Application
              </p>
              <div className={styles.applicationGrid} data-node-id="247:2042">
                {applicationImages.map((row, rowIndex) => (
                  <div key={rowIndex} className={styles.applicationRow}>
                    {row.map((src, cellIndex) => (
                      <div key={cellIndex} className={styles.applicationCell} aria-hidden="true">
                        <img alt="" src={src} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="246:1348">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="246:1358">
              <p className={styles.heading} data-node-id="246:1359">
                Reflection
              </p>
              <p className={styles.primary} data-node-id="246:1364">
                Building Mozaic improved my design and systems thinking skills through rigorous
                trade-off analysis and evidence-based decision-making in a complex product
                environment.
              </p>
              <ol className={styles.orderedList} data-node-id="246:1391">
                <li data-node-id="246:1392">
                  Practical constraints like team maturity and delivery deadlines are inevitable and
                  require a focus on{' '}
                  <strong>accurate tradeoffs and restraint</strong> rather than theoretical
                  perfection.
                </li>
                <li data-node-id="246:1393">
                  Components &amp; Patterns should <strong>earn their place</strong> in the system by
                  resolving observed friction or repeated inconsistencies in active workflows.
                </li>
                <li data-node-id="246:1394">
                  <strong>Adoption</strong> is the true north star. Systems only remain relevant by
                  evolving alongside product needs rather than adhering to rigid, upfront
                  definitions.
                </li>
              </ol>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="246:1396">
            <div className={`${styles.textBlock} ${styles.stack20}`} data-node-id="246:1406">
              <p className={styles.heading} data-node-id="246:1407">
                topic deep dives
              </p>
              <div className={styles.stack16} data-node-id="246:1409">
                <DeepDiveCta label="Foundation & Token Architecture" showArrow href={FOUNDATIONS_PATH} allCaps />
                <DeepDiveCta label="components & patterns (coming soon)" allCaps />
                <DeepDiveCta label="AI-Assisted Workflows (coming SOon)" allCaps />
              </div>
            </div>
          </section>

          <footer className={styles.footer}>
            <button className={styles.footerButton} type="button" onClick={onToggleTheme}>
              {theme === 'dark' ? 'light mode' : 'dark mode'}
            </button>
          </footer>
        </div>
      </div>
    </div>
  );
}
