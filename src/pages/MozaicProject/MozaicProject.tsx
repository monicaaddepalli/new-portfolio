import { useLayoutEffect, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './MozaicProject.module.css';

const hero = '/assets/v3/home/mozaic.png?v=20261109-1';
const imgFoundations = '/assets/v2/mozaic/foundations.png';
const imgComponents = '/assets/v2/mozaic/components.png';
const imgImpactPatterns = '/assets/v2/mozaic/impact-patterns.png';
const imgImpactTat = '/assets/v2/mozaic/impact-tat.png';
const imgImpactAi = '/assets/v2/mozaic/impact-ai.png';
const imgQuoteMark = '/assets/v2/mozaic/quote-mark.svg?v=20261114-4';
const imgAppMobile1 = '/assets/v2/mozaic/application/mobile-1.png';
const imgAppMobile2 = '/assets/v2/mozaic/application/mobile-2.png';
const imgAppMobile3 = '/assets/v2/mozaic/application/mobile-3.png';
const imgAppDesktop1 = '/assets/v2/mozaic/application/desktop-1.png';
const imgAppDesktop2 = '/assets/v2/mozaic/application/desktop-2.png';

const applicationSlides = [
  imgAppMobile1,
  imgAppMobile2,
  imgAppMobile3,
  imgAppDesktop1,
  imgAppDesktop2,
];

const APPLICATION_AUTO_MS = 4000;

const FOUNDATIONS_PATH = '/work/mozaicds/foundations';
const COMPONENTS_PATH = '/work/mozaicds/components-patterns';

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
    title: 'Build for practical workflows rather than ideal scenarios',
    body: 'The system prioritized what designers could realistically use, allowing it to scale gradually without slowing teams down.',
  },
  {
    index: '02',
    title: 'Encode system decisions once, reuse them everywhere',
    body: 'Spacing, typography, states, and semantics were baked into the system so team could focus on UX problems, not repeated UI decisions.',
  },
  {
    index: '03',
    title: 'Align behaviour while allowing domain flexibility',
    body: 'Shared interaction logic was prioritized over visual sameness, enabling different products to feel consistent. Visual consistency was a byproduct.',
  },
  {
    index: '04',
    title: 'Promote reuse only after it proves value',
    body: 'Patterns graduated into the core system only after demonstrating clear, repeated use across domains.',
  },
];

const impactItems = [
  {
    value: '200+',
    label: 'standardized reusable patterns & components',
    src: imgImpactPatterns,
  },
  {
    value: '40%',
    label: 'reduction in design-to-development TAT',
    src: imgImpactTat,
  },
  {
    value: '3x',
    label: 'faster first-cuts using Mozaic + AI workflows',
    src: imgImpactAi,
  },
];

function ApplicationCarousel() {
  const slideCount = applicationSlides.length;
  const extendedSlides = [
    applicationSlides[slideCount - 1],
    ...applicationSlides,
    applicationSlides[0],
  ];
  const extendedCount = extendedSlides.length;
  /** 1 … slideCount are real slides; 0 and slideCount + 1 are edge clones for looping */
  const [position, setPosition] = useState(1);
  const [smoothScroll, setSmoothScroll] = useState(true);
  const stageRef = useRef<HTMLDivElement>(null);
  const [slideWidthPx, setSlideWidthPx] = useState(0);
  const isSnappingRef = useRef(false);

  const logicalIndex =
    position === 0 ? slideCount - 1 : position > slideCount ? 0 : position - 1;

  const snapInfiniteEdges = () => {
    if (isSnappingRef.current) return;
    setPosition((current) => {
      if (current === slideCount + 1) {
        isSnappingRef.current = true;
        setSmoothScroll(false);
        return 1;
      }
      if (current === 0) {
        isSnappingRef.current = true;
        setSmoothScroll(false);
        return slideCount;
      }
      return current;
    });
  };

  useLayoutEffect(() => {
    applicationSlides.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const updateWidth = () => setSlideWidthPx(stage.clientWidth);
    updateWidth();

    const observer = new ResizeObserver(updateWidth);
    observer.observe(stage);
    return () => observer.disconnect();
  }, []);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    if (!stage || slideWidthPx <= 0) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const behavior = reducedMotion || !smoothScroll ? 'instant' : 'smooth';
    stage.scrollTo({ left: position * slideWidthPx, behavior });
    isSnappingRef.current = false;
  }, [position, slideWidthPx, smoothScroll]);

  useEffect(() => {
    const stage = stageRef.current;
    if (!stage) return undefined;

    const onScrollEnd = () => snapInfiniteEdges();
    stage.addEventListener('scrollend', onScrollEnd);
    return () => stage.removeEventListener('scrollend', onScrollEnd);
  }, [slideCount]);

  useEffect(() => {
    if (!smoothScroll) return undefined;
    if (position !== slideCount + 1 && position !== 0) return undefined;
    const id = window.setTimeout(() => snapInfiniteEdges(), 550);
    return () => window.clearTimeout(id);
  }, [position, slideCount, smoothScroll]);

  useEffect(() => {
    if (!smoothScroll) {
      const id = window.requestAnimationFrame(() => setSmoothScroll(true));
      return () => window.cancelAnimationFrame(id);
    }
    return undefined;
  }, [smoothScroll]);

  useEffect(() => {
    const id = window.setInterval(() => {
      setSmoothScroll(true);
      setPosition((current) => current + 1);
    }, APPLICATION_AUTO_MS);
    return () => window.clearInterval(id);
  }, []);

  useEffect(() => {
    const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (!reduced) return undefined;
    if (position === slideCount + 1 || position === 0) {
      snapInfiniteEdges();
    }
    return undefined;
  }, [position, slideCount]);

  return (
    <div className={styles.application} aria-roledescription="carousel" aria-label="Application screens">
      <div className={styles.applicationFrame}>
        <div ref={stageRef} className={styles.applicationStage}>
          <div
            className={styles.applicationTrack}
            style={{ width: `${extendedCount * 100}%` }}
            aria-live="polite"
          >
            {extendedSlides.map((src, slideIndex) => (
              <div
                key={`${src}-${slideIndex}`}
                className={styles.applicationCell}
                style={{ width: `${100 / extendedCount}%` }}
              >
                <img src={src} alt="" />
              </div>
            ))}
          </div>
        </div>
        <button
          type="button"
          className={`${styles.carouselBtn} ${styles.carouselPrev}`}
          aria-label="Previous screen"
          onClick={() => {
            setSmoothScroll(true);
            setPosition((current) => current - 1);
          }}
        />
        <button
          type="button"
          className={`${styles.carouselBtn} ${styles.carouselNext}`}
          aria-label="Next screen"
          onClick={() => {
            setSmoothScroll(true);
            setPosition((current) => current + 1);
          }}
        />
        <div className={styles.carouselDots} role="tablist" aria-label="Application slides">
          {applicationSlides.map((src, slideIndex) => (
            <button
              key={src}
              type="button"
              className={`${styles.carouselDot} ${slideIndex === logicalIndex ? styles.carouselDotActive : ''}`}
              aria-label={`Show screen ${slideIndex + 1}`}
              aria-current={slideIndex === logicalIndex ? 'true' : undefined}
              onClick={() => {
                setSmoothScroll(true);
                setPosition(slideIndex + 1);
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DeepDive({ title, href }: { title: string; href: string }) {
  return (
    <Link className={styles.deepDive} to={href}>
      <span className={styles.deepDiveCopy}>
        <span className={styles.deepDiveTitle}>{title}</span>
        <span className={styles.deepDiveHint}>Click to read more about this</span>
      </span>
      <span className={styles.deepDiveIcon} aria-hidden="true">
        <svg className={styles.deepDiveArrow} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M5 15L15 5"
            stroke="currentColor"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.875 5H15V13.125"
            stroke="currentColor"
            strokeWidth="1.875"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </Link>
  );
}

export function MozaicProject() {

  return (
    <div className={styles.page} data-name="mozaic ds">
      <div className={styles.headerBlur} aria-hidden="true">
        <div className={styles.headerBlurBg} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurSoft}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurMedium}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurStrong}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurExtra}`} />
      </div>

      <article className={styles.article}>
        <div className={styles.media}>
          <img
            className={styles.image}
            src={hero}
            alt="Mozaic design system on a laptop"
            width={280}
            height={420}
          />
          <a className={styles.back} href="/" data-header-link="" data-style="Body Mono">
            <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.7 2.3 1.6 8l5.1 5.7.9-.8L3.6 8.6H15V7.4H3.6l4-4.3z"
              />
            </svg>
            Back to home
          </a>
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title}>Mozaic Design System</h1>

          <section className={styles.section}>
            <h2 className={styles.label}>Overview</h2>
            <div className={styles.prose}>
              <p>
                Mozaic is a design system built to support a rapidly growing B2B2C healthcare
                platform operating across multiple services - consultations, diagnostics, pharmacy,
                insurance, and wellness.
              </p>
              <p>
                The goal was not just visual consistency, but a{' '}
                <strong>shared design language</strong> that could scale across teams, products, and
                levels of complexity while remaining practical to adopt within real organizational
                constraints.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Problem</h2>
            <div className={styles.prose}>
              <figure className={styles.quote}>
                <img
                  className={styles.quoteMark}
                  src={imgQuoteMark}
                  alt=""
                  width={48}
                  height={44}
                  aria-hidden="true"
                />
                <blockquote data-style="Large">
                  &ldquo;Each person is essentially building their own interpretation of the
                  brand.&rdquo;
                </blockquote>
                <figcaption>Head of Design during Problem Grooming</figcaption>
              </figure>
              <p>
                As MediBuddy expanded into multiple healthcare services, individuals began shipping
                independently, each evolving their own visual language, interaction patterns, and
                implementation approaches.
              </p>
              <p>this led to:</p>
            </div>
            <ol className={styles.insights}>
              {problemItems.map((item) => (
                <li key={item.index}>
                  <span>{item.index}</span>
                  <div>
                    <p className={styles.insightTitle}>{item.title}</p>
                    <p>↪ {item.body}</p>
                  </div>
                </li>
              ))}
            </ol>
            <p className={styles.proseLead}>
              We needed a unified, flexible system that could work across diverse product contexts
              while staying stable, maintainable, and evolving with the brand.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Guiding Principles</h2>
            <p className={styles.proseLead}>
              These principles shaped every major design decision in Mozaic:
            </p>
            <div className={styles.principleGrid}>
              {principles.map((principle) => (
                <article key={principle.index} className={styles.principleCard}>
                  <span className={styles.principleIndex} aria-hidden="true">
                    {principle.index}
                  </span>
                  <p className={styles.principleTitle}>{principle.title}</p>
                  <p className={styles.principleBody}>{principle.body}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Building &amp; Scaling Mozaic DS</h2>
            <p className={styles.proseLead}>
              Mozaic wasn&apos;t a static style guide. It evolved as a system in response to real
              product complexity, team behaviour, and delivery constraints
            </p>

            <div className={styles.phase}>
              <p className={styles.phaseLabel}>Phase 1</p>
              <h3 className={styles.subhead}>Identifying Fragmentation</h3>
              <p>
                The priority was diagnosing where and why products were diverging.
              </p>
              <ul className={styles.steps}>
                <li>
                  <strong>Audited</strong> existing UI across consultations, diagnostics, pharmacy,
                  insurance, and wellness
                </li>
                <li>
                  Identified repeated interaction patterns (beneficiary, upload module, navigation,
                  badges)
                </li>
                <li>
                  Highlighted <strong>behavioural inconsistencies</strong> and design-to-dev
                  bottlenecks
                </li>
              </ul>
            </div>

            <div className={styles.phase}>
              <p className={styles.phaseLabel}>Phase 2</p>
              <h3 className={styles.subhead}>Establishing Shared Foundations</h3>
              <img className={styles.figure} src={imgFoundations} alt="Mozaic foundations" />
              <p>
                We replaced raw values with a system of logic to reduce unnecessary &amp; repetitive
                decision-making.
              </p>
              <ul className={styles.steps}>
                <li>
                  Implemented <strong>semantic tokens</strong> and a responsive typography hierarchy.
                </li>
                <li>Standardized naming conventions between Figma and the codebase.</li>
                <li>
                  Kept foundations lean to prioritize immediate adoption over exhaustive completeness.
                </li>
              </ul>
              <DeepDive title="Foundation & Token Architecture" href={FOUNDATIONS_PATH} />
            </div>

            <div className={styles.phase}>
              <p className={styles.phaseLabel}>Phase 3</p>
              <h3 className={styles.subhead}>Scaling Through Components and Patterns</h3>
              <img className={styles.figure} src={imgComponents} alt="Mozaic components" />
              <p>
                With foundations in place, we targeted <strong>seamless feature handoffs</strong> to
                developers and supporting <strong>faster iterations</strong> as product complexity
                increased. To achieve this we:
              </p>
              <ul className={styles.steps}>
                <li>Designed components as contracts with predictable APIs.</li>
                <li>Defined elements by behaviour and intent rather than just visual layout.</li>
                <li>Mirrored component props between Figma and code.</li>
                <li>
                  New patterns were held in a reference library and only &quot;promoted&quot; to the
                  core system once repeated reuse was proven.
                </li>
              </ul>
              <DeepDive title="Components & Patterns" href={COMPONENTS_PATH} />
            </div>

            <div className={styles.phase}>
              <p className={styles.phaseLabel}>Phase 4</p>
              <h3 className={styles.subhead}>Adoption, Governance, and Iteration</h3>
              <p>
                As usage increased, the focus moved to <strong>sustainability</strong>.
              </p>
              <ul className={styles.steps}>
                <li>Initial governance done through shared judgment over individual bias.</li>
                <li>Followed regular release cycles with room for urgent fixes</li>
                <li>Training, walkthroughs, and recorded handovers</li>
                <li>Continuous refinement based on real usage and feedback</li>
              </ul>
              <p>
                Governance was human centered by choice, using documented decisions to eventually
                transition from manual oversight to scalable processes.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Impact</h2>
            <div className={styles.impactGrid}>
              {impactItems.map((item) => (
                <article key={item.value} className={styles.impactCard}>
                  <img className={styles.impactIcon} src={item.src} alt="" />
                  <p className={styles.impactValue}>{item.value}</p>
                  <p className={styles.impactLabel}>{item.label}</p>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Application</h2>
            <ApplicationCarousel />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Reflection</h2>
            <div className={styles.prose}>
              <p>
                Building Mozaic improved my design and systems thinking skills through rigorous
                trade-off analysis and evidence-based decision-making in a complex product
                environment.
              </p>
              <ol className={styles.steps}>
                <li>
                  Practical constraints like team maturity and delivery deadlines are inevitable and
                  require a focus on <strong>accurate tradeoffs and restraint</strong> rather than
                  theoretical perfection.
                </li>
                <li>
                  Components &amp; Patterns should <strong>earn their place</strong> in the system by
                  resolving observed friction or repeated inconsistencies in active workflows.
                </li>
                <li>
                  <strong>Adoption</strong> is the true north star. Systems only remain relevant by
                  evolving alongside product needs rather than adhering to rigid, upfront
                  definitions.
                </li>
              </ol>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
