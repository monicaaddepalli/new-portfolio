import { useLayoutEffect, useState, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../components/OptimizedImage';
import { applyTheme } from '../../lib/theme';
import styles from './MozaicProject.module.css';

const imgFoundations = '/assets/v2/mozaic/foundations.png';
const imgComponents = '/assets/v2/mozaic/components.png';
const imgImpactPatterns = '/assets/v2/mozaic/impact-patterns.png';
const imgImpactTat = '/assets/v2/mozaic/impact-tat.png';
const imgImpactAi = '/assets/v2/mozaic/impact-ai.png';
const iconArrow = '/assets/v2/mozaic/arrow-up-right.svg';
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

const FOUNDATIONS_PATH = '/work/mozaic-design-system/foundations';

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

function Figure({ src }: { src: string }) {
  return (
    <figure className={styles.figure}>
      <OptimizedImage src={src} alt="" width={1040} height={640} />
    </figure>
  );
}

function Copy({
  heading,
  children,
}: {
  heading: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.copy}>
      <h2 className={styles.heading}>{heading}</h2>
      {children}
    </section>
  );
}

function ApplicationCarousel() {
  const [index, setIndex] = useState(0);
  const last = applicationSlides.length - 1;

  return (
    <div className={styles.application} aria-roledescription="carousel" aria-label="Application screens">
      <div className={styles.applicationFrame}>
        <div className={styles.applicationStage}>
          <OptimizedImage
            src={applicationSlides[index]}
            alt=""
            width={1440}
            height={960}
          />
        </div>
        <button
          type="button"
          className={`${styles.carouselBtn} ${styles.carouselPrev}`}
          aria-label="Previous screen"
          onClick={() => setIndex((current) => (current === 0 ? last : current - 1))}
        />
        <button
          type="button"
          className={`${styles.carouselBtn} ${styles.carouselNext}`}
          aria-label="Next screen"
          onClick={() => setIndex((current) => (current === last ? 0 : current + 1))}
        />
        <div className={styles.carouselDots} role="tablist" aria-label="Application slides">
          {applicationSlides.map((src, slideIndex) => (
            <button
              key={src}
              type="button"
              className={`${styles.carouselDot} ${slideIndex === index ? styles.carouselDotActive : ''}`}
              aria-label={`Show screen ${slideIndex + 1}`}
              aria-current={slideIndex === index ? 'true' : undefined}
              onClick={() => setIndex(slideIndex)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DeepDive({
  title,
  href,
}: {
  title: string;
  href?: string;
}) {
  const inner = (
    <>
      <span className={styles.deepDiveCopy}>
        <span className={styles.deepDiveTitle}>{title}</span>
        <span className={styles.deepDiveHint}>click to read more about this</span>
      </span>
      <span className={styles.deepDiveIcon} aria-hidden="true">
        <img src={iconArrow} alt="" width={20} height={20} />
      </span>
    </>
  );

  if (href) {
    return (
      <Link className={styles.deepDive} to={href}>
        {inner}
      </Link>
    );
  }

  return <div className={styles.deepDive}>{inner}</div>;
}

export function MozaicProject() {
  useLayoutEffect(() => {
    applyTheme('light');
  }, []);

  return (
    <div className={styles.page} data-name="mozaic ds">
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
        </header>

        <main className={styles.main}>
          <div className={styles.intro}>
            <p className={styles.year}>2026</p>
            <h1 className={styles.title}>
              building mozaic
              <br />
              design system
            </h1>
          </div>

          <Copy heading="overview">
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
          </Copy>

          <Copy heading="problem">
            <div className={styles.prose}>
              <div className={styles.quote}>
                <p className={styles.quoteText}>
                  “Each person is essentially building their own interpretation of the brand.”
                </p>
                <p>Head of Design during Problem Grooming</p>
              </div>
              <p>
                As MediBuddy expanded into multiple healthcare services, individuals began shipping
                independently, each evolving their own visual language, interaction patterns, and
                implementation approaches.
              </p>
              <p>this led to:</p>
              <div className={styles.insightList}>
                {problemItems.map((item) => (
                  <div key={item.index} className={styles.insightRow}>
                    <p className={styles.insightIndex}>{item.index}</p>
                    <div className={styles.insightBody}>
                      <p className={styles.insightTitle}>{item.title}</p>
                      <p>↪ {item.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p>
                We needed a unified, flexible system that could work across diverse product contexts
                while staying stable, maintainable, and evolving with the brand.
              </p>
            </div>
          </Copy>

          <section className={styles.wide}>
            <div className={styles.copyInner}>
              <h2 className={styles.heading}>Guiding Principles</h2>
              <p className={styles.proseSingle}>
                These principles shaped every major design decision in Mozaic:
              </p>
            </div>
            <div className={styles.principleGrid}>
              {principles.map((principle) => (
                <article key={principle.index} className={styles.principleCard}>
                  <p className={styles.principleIndex}>{principle.index}</p>
                  <p className={styles.principleTitle}>{principle.title}</p>
                  <p className={styles.principleBody}>{principle.body}</p>
                </article>
              ))}
            </div>
          </section>

          <Copy heading="Building & Scaling Mozaic DS">
            <p className={styles.proseSingle}>
              Mozaic wasn&apos;t a static style guide. It evolved as a system in response to real
              product complexity, team behaviour, and delivery constraints
            </p>
            <div className={styles.phaseList}>
              <div className={styles.phase}>
                <div className={styles.phaseHead}>
                  <p className={styles.phaseLabel}>phase 1</p>
                  <h3 className={styles.phaseTitle}>Identifying Fragmentation</h3>
                </div>
                <p className={styles.proseSingle}>
                  The priority was diagnosing where and why products were diverging.
                </p>
                <ul className={styles.bullets}>
                  <li>
                    <strong>Audited</strong> existing UI across consultations, diagnostics,
                    pharmacy, insurance, and wellness
                  </li>
                  <li>
                    Identified repeated interaction patterns (beneficiary, upload module,
                    navigation, badges)
                  </li>
                  <li>
                    Highlighted <strong>behavioural inconsistencies</strong> and design-to-dev
                    bottlenecks
                  </li>
                </ul>
              </div>

              <div className={styles.phase}>
                <div className={styles.phaseHead}>
                  <p className={styles.phaseLabel}>phase 2</p>
                  <h3 className={styles.phaseTitle}>Establishing Shared Foundations</h3>
                </div>
                <Figure src={imgFoundations} />
                <p className={styles.proseSingle}>
                  We replaced raw values with a system of logic to reduce unnecessary &amp;
                  repetitive decision-making.
                </p>
                <ul className={styles.bullets}>
                  <li>
                    Implemented <strong>semantic tokens</strong> and a responsive typography
                    hierarchy.
                  </li>
                  <li>Standardized naming conventions between Figma and the codebase.</li>
                  <li>
                    Kept foundations lean to prioritize immediate adoption over exhaustive
                    completeness.
                  </li>
                </ul>
                <DeepDive title="Foundation & Token Architecture" href={FOUNDATIONS_PATH} />
              </div>

              <div className={styles.phase}>
                <div className={styles.phaseHead}>
                  <p className={styles.phaseLabel}>phase 3</p>
                  <h3 className={styles.phaseTitle}>Scaling Through Components and Patterns</h3>
                </div>
                <Figure src={imgComponents} />
                <p className={styles.proseSingle}>
                  With foundations in place, we targeted <strong>seamless feature handoffs</strong>{' '}
                  to developers and supporting <strong>faster iterations</strong> as product
                  complexity increased. To achieve this we:
                </p>
                <ul className={styles.bullets}>
                  <li>Designed components as contracts with predictable APIs.</li>
                  <li>
                    Defined elements by behaviour and intent rather than just visual layout.
                  </li>
                  <li>Mirrored component props between Figma and code.</li>
                  <li>
                    New patterns were held in a reference library and only &quot;promoted&quot; to
                    the core system once repeated reuse was proven.
                  </li>
                </ul>
              </div>

              <div className={styles.phase}>
                <div className={styles.phaseHead}>
                  <p className={styles.phaseLabel}>phase 4</p>
                  <h3 className={styles.phaseTitle}>Adoption, Governance, and Iteration</h3>
                </div>
                <p className={styles.proseSingle}>
                  As usage increased, the focus moved to <strong>sustainability</strong>.
                </p>
                <ul className={styles.bullets}>
                  <li>Initial governance done through shared judgment over individual bias.</li>
                  <li>Followed regular release cycles with room for urgent fixes</li>
                  <li>Training, walkthroughs, and recorded handovers</li>
                  <li>Continuous refinement based on real usage and feedback</li>
                </ul>
                <p className={styles.proseSingle}>
                  Governance was human centered by choice, using documented decisions to eventually
                  transition from manual oversight to scalable processes.
                </p>
              </div>
            </div>
          </Copy>

          <section className={styles.wide}>
            <h2 className={`${styles.heading} ${styles.wideHeading}`}>Impact</h2>
            <div className={styles.impactGrid}>
              {impactItems.map((item) => (
                <article key={item.value} className={styles.impactCard}>
                  <div className={styles.impactIcon}>
                    <OptimizedImage src={item.src} alt="" width={140} height={140} />
                  </div>
                  <div className={styles.impactCopy}>
                    <p className={styles.impactValue}>{item.value}</p>
                    <p className={styles.impactLabel}>{item.label}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.wide}>
            <h2 className={`${styles.heading} ${styles.wideHeading}`}>application</h2>
            <ApplicationCarousel />
          </section>

          <Copy heading="Reflection">
            <div className={styles.prose}>
              <p>
                Building Mozaic improved my design and systems thinking skills through rigorous
                trade-off analysis and evidence-based decision-making in a complex product
                environment.
              </p>
              <ol className={styles.numbers}>
                <li>
                  Practical constraints like team maturity and delivery deadlines are inevitable and
                  require a focus on <strong>accurate tradeoffs and restraint</strong> rather than
                  theoretical perfection.
                </li>
                <li>
                  Components &amp; Patterns should <strong>earn their place</strong> in the system
                  by resolving observed friction or repeated inconsistencies in active workflows.
                </li>
                <li>
                  <strong>Adoption</strong> is the true north star. Systems only remain relevant by
                  evolving alongside product needs rather than adhering to rigid, upfront
                  definitions.
                </li>
              </ol>
            </div>
          </Copy>
        </main>
      </div>
    </div>
  );
}
