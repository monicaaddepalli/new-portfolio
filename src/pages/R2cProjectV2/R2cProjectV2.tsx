import { useEffect, useLayoutEffect, useRef, useState, type ReactNode } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import { OptimizedImage } from '../../components/OptimizedImage';
import { applyTheme } from '../../lib/theme';
import styles from './R2cProjectV2.module.css';

const imgHero = '/assets/v2/r2c/hero.png';
const imgUserCalls = '/assets/r2c/user-calls.png';
const imgPrioritisation = '/assets/r2c/prioritisation.png';
const imgIA = '/assets/r2c/ia.png';
const imgWireBoard = '/assets/v2/r2c/wireframes-board.png';
const imgWireFlowGrid = '/assets/v2/r2c/wireframes-flow-grid.png';
const imgWireFlow = '/assets/v2/r2c/wireframes-flow.png';
const imgWireStories = '/assets/v2/r2c/wireframes-stories.png';
const imgScreenReorder1 = '/assets/r2c/screen-reorder-1.png';
const imgScreenReorder3 = '/assets/r2c/screen-reorder-3.png';
const imgScreenReorder4 = '/assets/r2c/screen-reorder-4.png';
const imgPlaygroundPages = '/assets/v2/r2c/playground-pages.png';
const imgPlaygroundFlows = '/assets/v2/r2c/playground-flows.png';
const imgPlaygroundFlowsMobile = '/assets/v2/r2c/playground-flows-mobile.png';
const imgPlaygroundLabel = '/assets/v2/r2c/playground-label.png';
const imgPlaygroundLabelMobile = '/assets/v2/r2c/playground-label-mobile.png';
const imgClosing = '/assets/v2/r2c/closing.png';
const card2Animation = '/assets/r2c/card2-animation.riv';
const videoPlayground = '/assets/v2/r2c/component-library.mp4';
const videoSeamlessCheckout = '/assets/r2c/seamless-checkout.mp4';
const videoDigitization = '/assets/r2c/digitization.mp4';
const videoFastCheckout = '/assets/r2c/fast-checkout.mp4';
const videoFtue = '/assets/r2c/ftue.mp4';
const iconBookOpenUser = '/assets/v2/r2c/icon-book-open-user.svg';
const iconFastForward = '/assets/v2/r2c/icon-fast-forward.svg';
const iconHandshake = '/assets/v2/r2c/icon-handshake.svg';
const iconSmiley = '/assets/v2/r2c/icon-smiley.svg';

const card2Layout = new Layout({ fit: Fit.Cover, alignment: Alignment.Center });

const themes = [
  {
    icon: iconBookOpenUser,
    title: 'user education',
    points: [
      'Educate users on cashless benefits through a dedicated benefits page, collaterals, and FAQs.',
      'Highlight key benefits of cashless over reimbursement process.',
    ],
  },
  {
    icon: iconFastForward,
    title: 'Fast Checkout',
    points: [
      'Auto-fill user details (cart items, beneficiary info) to simplify checkout.',
      'Streamline the flow from Reorder to Payout, aiming for an eventual one-tap checkout.',
    ],
  },
  {
    icon: iconHandshake,
    title: 'Build User Trust',
    points: [
      'Clearly explain the digitization of reimbursement data into reorder cards.',
      'Enable users to verify and report issues with digitized prescriptions for continuous feedback.',
    ],
  },
  {
    icon: iconSmiley,
    title: 'Improve Convenience and Delight',
    points: [
      'Personalize the page with dynamically arranged service carousels based on user behaviour.',
      'Enhance engagement with micro-interactions like animations and tooltips.',
    ],
  },
];

function Figure({
  src,
  wide,
  ia,
  surface,
  hero,
  priority,
}: {
  src: string;
  wide?: boolean;
  ia?: boolean;
  surface?: boolean;
  hero?: boolean;
  priority?: boolean;
}) {
  const figureClass = [
    styles.figure,
    wide && styles.figureWide,
    ia && styles.figureIa,
    surface && styles.figureSurface,
    hero && styles.figureHero,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure className={figureClass}>
      <div className={styles.media}>
        <OptimizedImage src={src} alt="" priority={priority} />
      </div>
    </figure>
  );
}

function Copy({
  label,
  title,
  children,
}: {
  label?: string;
  title?: string;
  children?: ReactNode;
}) {
  return (
    <section className={styles.copy}>
      {label || title ? (
        <div className={styles.copyHead}>
          {label ? <p className={styles.label}>{label}</p> : null}
          {title ? <h2 className={styles.display}>{title}</h2> : null}
        </div>
      ) : null}
      {children}
    </section>
  );
}

function PhoneCard({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el || visible) return;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        setVisible(true);
        observer.disconnect();
      },
      { threshold: 0.25, rootMargin: '0px 0px -12% 0px' },
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [visible]);

  return (
    <div ref={ref} className={`${styles.phoneCard} ${visible ? styles.phoneCardIn : ''}`}>
      {children}
    </div>
  );
}

function Card2Animation() {
  const { RiveComponent } = useRive({
    src: card2Animation,
    stateMachines: 'State Machine 1',
    autoplay: true,
    layout: card2Layout,
  });

  return (
    <div className={`${styles.phoneShot} ${styles.phoneShotRive}`}>
      <RiveComponent className={styles.phoneRive} aria-hidden="true" />
    </div>
  );
}

function FlowVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className={styles.videoFrame}>
      <video src={src} autoPlay loop muted playsInline preload="metadata" title={title} />
    </div>
  );
}

function FlowRow({
  reverse,
  title,
  badge,
  children,
  videoSrc,
  videoTitle,
}: {
  reverse?: boolean;
  title: string;
  badge?: string;
  children: ReactNode;
  videoSrc: string;
  videoTitle: string;
}) {
  return (
    <div className={`${styles.flowRow} ${reverse ? styles.flowRowReverse : ''}`}>
      <div className={styles.flowCopy}>
        <div className={styles.flowHead}>
          {badge ? <p className={styles.badge}>{badge}</p> : null}
          <h3 className={styles.featureHeading}>{title}</h3>
        </div>
        {children}
      </div>
      <FlowVideo src={videoSrc} title={videoTitle} />
    </div>
  );
}

export function R2cProjectV2() {
  useLayoutEffect(() => {
    applyTheme('light');
  }, []);

  return (
    <div className={styles.page} data-name="r2c">
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
          <div className={styles.hero}>
            <Figure src={imgHero} hero priority />
            <div className={styles.intro}>
              <p className={styles.year}>2025</p>
              <h1 className={styles.title}>
                boosting 23% cashless adoption with behavioural design
              </h1>
            </div>
          </div>

          <Copy label="background" title="Project Overview">
            <div className={styles.prose}>
              <p>
                mediBuddy, a b2b2c digital healthcare platform, offers corporate employees services
                like consultations, lab tests, and medicine delivery. employee benefits allows the
                use of a pre-funded wallet (&quot;<strong>cashless</strong>&quot;) or{' '}
                <strong>reimbursement</strong> of any out-of-pocket payment.
              </p>
              <p>
                this project aimed to increase cashless transactions, which were significantly lower
                than reimbursements. we wanted to create a smooth and personalised reordering
                process that leveraged digitised reimbursement data &amp; would encourage customers
                to switch from reimbursements to cashless payments.
              </p>
              <p>
                this initiative was projected to generate <strong>₹100 crore</strong> in annual
                revenue and improve customer satisfaction and retention.
              </p>
            </div>
          </Copy>

          <Copy label="business challenge" title="how might we boost cashless orders">
            <div className={styles.stack20}>
              <div className={styles.prose}>
                <p>
                  medibuddy exclusively generates revenue from cashless orders, not reimbursements.
                  however,
                </p>
                <p className={styles.emphasis}>
                  only <span className={styles.accentRed}>15%</span> users ordered cashless
                </p>
                <p>
                  a major opportunity to increase revenue lied in shifting users from reimbursements
                  to cashless payments. enabling hassle-free reorders became the gateway to changing
                  this user behaviour.
                </p>
                <p className={styles.emphasis}>reorders were frequent:</p>
              </div>
              <div className={styles.statRow}>
                <div className={styles.statPlain}>
                  <p className={styles.statValue}>32%</p>
                  <p className={styles.statLabel}>
                    of total users had repeating orders using the same prescription
                  </p>
                </div>
                <div className={styles.statPlain}>
                  <p className={styles.statValue}>70%</p>
                  <p className={styles.statLabel}>
                    of total users were chronic illness patients likely to reorder services
                  </p>
                </div>
              </div>
            </div>
          </Copy>

          <div className={`${styles.block} ${styles.block40}`}>
            <Copy label="understanding pain points" title="users were frustrated..." />
            <Figure src={imgUserCalls} />
            <div className={styles.copy}>
              <div className={styles.painBlock}>
                <h3 className={styles.subheading}>convoluted reimbursement process ~</h3>
                <div className={styles.statPlain}>
                  <p className={styles.statValue}>62%</p>
                  <p className={styles.statLabel}>
                    users expressed one or more issues with the reimbursement process.
                  </p>
                </div>
                <ul className={styles.bullets}>
                  <li>lengthy processes (1 - 2 weeks)</li>
                  <li>claims get rejected frequently</li>
                  <li>unclear policy and coverage guidelines</li>
                </ul>
              </div>
              <div className={styles.divider} role="separator" />
              <div className={styles.painBlock}>
                <h3 className={styles.subheading}>cashless: better but with caveats ~</h3>
                <div className={`${styles.prose} ${styles.proseTight}`}>
                  <p>
                    cashless was <strong>instant</strong>, <strong>hassle free</strong> and there
                    wasn&apos;t a chance of claims getting rejected.
                  </p>
                  <p>
                    however converting users to cashless was <strong>NOT</strong> going to be easy,
                    because:
                  </p>
                </div>
                <div className={styles.statPlain}>
                  <p className={styles.statValue}>51%</p>
                  <p className={styles.statLabel}>
                    users also expressed frustrations related to the cashless process.
                  </p>
                </div>
                <ul className={styles.bullets}>
                  <li>doctors or medicines not available in user&apos;s area</li>
                  <li>lack of trust in online healthcare</li>
                  <li>lack of understanding of the cashless system</li>
                  <li>unaware of their health benefits</li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <Copy label="design thinking" title="brainstorming solutions">
              <p className={styles.proseSingle}>
                Collaborated with the PMs of each service line, Operations, Tech, and the CEO in an
                Affinity Mapping session to deeply analyze user pain points, which guided the
                development of our solution themes.
              </p>
            </Copy>
            <div className={styles.themeGrid}>
              {themes.map((theme) => (
                <article key={theme.title} className={styles.themeCard}>
                  <div className={styles.themeTitleRow}>
                    <span className={styles.themeIcon}>
                      <img src={theme.icon} alt="" width={28} height={28} />
                    </span>
                    <h3 className={styles.themeTitle}>{theme.title}</h3>
                  </div>
                  <ul className={styles.themeList}>
                    {theme.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>

          <div className={styles.block}>
            <div className={styles.copy}>
              <h3 className={styles.subheading}>prioritisation matrix</h3>
            </div>
            <Figure src={imgPrioritisation} />
          </div>

          <div className={styles.block}>
            <div className={styles.copy}>
              <h3 className={styles.subheading}>information architecture</h3>
            </div>
            <Figure src={imgIA} ia />
          </div>

          <div className={styles.block}>
            <div className={styles.copy}>
              <h3 className={styles.subheading}>wireframes and early designs</h3>
            </div>
            <div className={styles.wireframes}>
              <div className={styles.wireframesTop}>
                <div className={styles.wireframesBoard}>
                  <OptimizedImage src={imgWireBoard} alt="" />
                </div>
                <div className={styles.wireframesFlow}>
                  <OptimizedImage src={imgWireFlowGrid} alt="" />
                  <OptimizedImage src={imgWireFlow} alt="" />
                </div>
              </div>
              <div className={styles.wireframesStories}>
                <div className={styles.wireframesStoriesMedia}>
                  <OptimizedImage src={imgWireStories} alt="" />
                </div>
                <div className={styles.wireframesStoriesCopy}>
                  <p className={styles.wireframesStoriesTitle}>tested user stories</p>
                  <p className={styles.wireframesStoriesBody}>
                    As screens were getting developed we tested the flows with internal users and
                    stakeholders.
                  </p>
                  <div className={styles.wireframesStat}>
                    <p className={styles.wireframesStatValue}>40+</p>
                    <p className={styles.wireframesStatLabel}>user flows tested</p>
                  </div>
                  <div className={styles.wireframesStat}>
                    <p className={styles.wireframesStatValue}>20+</p>
                    <p className={styles.wireframesStatLabel}>prototypes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className={`${styles.block} ${styles.block40}`}>
            <Copy label="final solution" title="Driving Cashless Orders through New Reorder Flow" />
            <div className={styles.phoneGrid}>
              <PhoneCard>
                <img
                  className={styles.phoneShot}
                  src={imgScreenReorder1}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </PhoneCard>
              <PhoneCard>
                <Card2Animation />
              </PhoneCard>
              <PhoneCard>
                <img
                  className={styles.phoneShot}
                  src={imgScreenReorder3}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </PhoneCard>
              <PhoneCard>
                <img
                  className={styles.phoneShot}
                  src={imgScreenReorder4}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </PhoneCard>
            </div>
          </div>

          <div className={styles.flows}>
            <div className={styles.copy}>
              <h3 className={styles.subheading}>Hi-Fidelity Screens and Core Flows</h3>
            </div>

            <FlowRow
              title="effortless checkout process"
              videoSrc={videoSeamlessCheckout}
              videoTitle="Seamless checkout"
            >
              <ul className={styles.flowList}>
                <li>
                  <strong>simplified checkout:</strong> easily fill and verify required details
                  before purchase.
                </li>
                <li>
                  <strong>add beneficiary on-the-go:</strong> quickly include a beneficiary during
                  checkout if needed.
                </li>
              </ul>
            </FlowRow>

            <FlowRow
              reverse
              title="Service Specific Checkout Flows"
              videoSrc={videoDigitization}
              videoTitle="Digitization"
            >
              <ul className={styles.flowList}>
                <li>
                  <strong>View Original Prescription:</strong> Easily access the digitized
                  prescription of each reorder card.
                </li>
                <li>
                  <strong>Report Card Issues Instantly:</strong> Quickly flag and resolve any
                  problems, ensuring user trust and convenience for the user.
                </li>
              </ul>
            </FlowRow>

            <FlowRow
              badge="experiment"
              title="New One-Page Checkout"
              videoSrc={videoFastCheckout}
              videoTitle="Fast checkout"
            >
              <ul className={styles.flowList}>
                <li>
                  <strong>Experience Unification:</strong> Reduced steps and cognitive load by
                  consolidating information, enabling faster transactions and laying the foundation
                  for a unified checkout experience.
                </li>
                <li>
                  <strong>Focus on Speed:</strong> The design prioritizes efficiency, enabling users
                  to complete transactions in seconds, improving overall satisfaction.
                </li>
              </ul>
            </FlowRow>

            <FlowRow
              reverse
              title="FTUE and Storytelling"
              videoSrc={videoFtue}
              videoTitle="FTUE"
            >
              <ul className={styles.flowList}>
                <li>
                  <strong>Guided Onboarding:</strong> A prominent FTUE nudge introduces the reorder
                  feature, ensuring users are aware of its value proposition from the start.
                </li>
                <li>
                  <strong>Engaging Animation:</strong> A scanning animation explains how
                  reimbursement data is digitized into reorder cards, doubling as a loading screen
                  while APIs fetch data.
                </li>
                <li>
                  <strong>Delightful Introduction:</strong> The animation creates a &quot;wow&quot;
                  moment, highlighting the platform&apos;s ability to simplify healthcare reordering
                  and build user confidence.
                </li>
              </ul>
            </FlowRow>
          </div>

          <div className={styles.block}>
            <Copy>
              <h3 className={styles.subheading}>component playground and design system</h3>
              <p className={styles.proseSingle}>
                Facilitated developer independence by creating a <strong>Component Playground</strong>{' '}
                for component states and edge-case testing. This enabled seamless UI builds,
                especially for junior developers, and contributed reusable organisms to our Mozaic
                Design System.
              </p>
            </Copy>
            <div className={styles.playground}>
              <div className={styles.playgroundVideo}>
                <video
                  src={videoPlayground}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  title="Component playground"
                />
              </div>
              <div className={styles.playgroundPages}>
                <OptimizedImage src={imgPlaygroundPages} alt="" />
              </div>
              <div className={styles.playgroundFlows}>
                <OptimizedImage
                  className={styles.playgroundFlowsDesktop}
                  src={imgPlaygroundFlows}
                  alt=""
                />
                <OptimizedImage
                  className={styles.playgroundFlowsMobile}
                  src={imgPlaygroundFlowsMobile}
                  alt=""
                />
              </div>
              <div className={styles.playgroundLabel}>
                <picture>
                  <source media="(max-width: 767px)" srcSet={imgPlaygroundLabelMobile} />
                  <OptimizedImage src={imgPlaygroundLabel} alt="" />
                </picture>
              </div>
            </div>
          </div>

          <Copy label="feedback & iterations" title="Validating the Design with More Users">
            <div className={styles.stack32}>
              <p className={styles.proseSingle}>
                Conducted usability tests with <strong>15 random Medibuddy employees</strong> and{' '}
                <strong>10 external corporate users</strong> to gather actionable feedbacks to improve
                upon.
              </p>
              <div className={styles.stack20}>
              <h3 className={styles.subheading}>usability testing feedback</h3>
              <div className={styles.statGridFour}>
                <div className={styles.statCard}>
                  <p className={styles.statValue}>4.7</p>
                  <p className={styles.statLabel}>ease of navigation</p>
                </div>
                <div className={styles.statCard}>
                  <p className={styles.statValue}>4.2</p>
                  <p className={styles.statLabel}>user trust</p>
                </div>
                <div className={styles.statCard}>
                  <p className={styles.statValue}>4.6</p>
                  <p className={styles.statLabel}>information clarity</p>
                </div>
                <div className={styles.statCard}>
                  <p className={styles.statValue}>4.5</p>
                  <p className={styles.statLabel}>overall satisfaction</p>
                </div>
              </div>
            </div>
            <div className={styles.stack20}>
              <h3 className={styles.subheading}>actionable insights</h3>
              <div className={styles.insights}>
                <div className={styles.insight}>
                  <span className={styles.insightIndex}>01</span>
                  <div>
                    <p className={styles.insightTitle}>user missed the &apos;reorder&apos; tab.</p>
                    <p className={styles.insightBody}>
                      added FTUE with a tooltip nudging on the reorder tab.
                    </p>
                  </div>
                </div>
                <div className={styles.insight}>
                  <span className={styles.insightIndex}>02</span>
                  <div>
                    <p className={styles.insightTitle}>improving cart differentiation</p>
                    <p className={styles.insightBody}>
                      some users struggled to distinguish between similar carts. to resolve this,
                      added order dates to reorder cards, providing clear differentiation.
                    </p>
                  </div>
                </div>
                <div className={styles.insight}>
                  <span className={styles.insightIndex}>03</span>
                  <div>
                    <p className={styles.insightTitle}>
                      dead-end flow when verifying reimbursement records
                    </p>
                    <p className={styles.insightBody}>
                      added an &quot;<strong>order again</strong>&quot; <strong>CTA</strong> on the
                      record verification page.
                    </p>
                  </div>
                </div>
                <div className={styles.insight}>
                  <span className={styles.insightIndex}>04</span>
                  <div>
                    <p className={styles.insightTitle}>successful unified checkout test</p>
                    <p className={styles.insightBody}>
                      users found the new checkout positive, but a tech-stack upgrade is required
                      for future release.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            </div>
          </Copy>

          <div className={`${styles.block} ${styles.block40}`}>
            <Copy label="impact created" title="positive results and road to 100cr" />
            <div className={styles.impact}>
              <div className={styles.copy}>
                <h3 className={styles.subheading}>Behaviour Shift Towards Cashless Adoption</h3>
              </div>
              <div className={styles.impactCards}>
                <div className={styles.impactCard}>
                  <p className={styles.impactEyebrow}>Cashless Adoption Rate Increase</p>
                  <p className={styles.impactValue}>
                    <span className={styles.impactFrom}>15% to</span>
                    <span className={styles.impactTo}>23%</span>
                  </p>
                  <p className={styles.impactBody}>
                    within 3 months of launching the R2C Reorder feature
                  </p>
                </div>
                <div className={styles.impactCard}>
                  <p className={styles.impactEyebrow}>&apos;Only Reimbursement&apos; Percentage Decrease</p>
                  <p className={styles.impactValue}>
                    <span className={styles.impactFrom}>40% to</span>
                    <span className={styles.impactTo}>21.7%</span>
                  </p>
                  <p className={styles.impactBody}>
                    of total users did Pure Reimbursement, showing strong Cashless Signals
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.engagement}>
              <div className={styles.copy}>
                <h3 className={styles.subheading}>User Engagement Improved</h3>
              </div>
              <div className={styles.engagementRow}>
                <div className={styles.metricItem}>
                  <p className={styles.metricLabel}>MAU for Release Month</p>
                  <p className={styles.impactValue}>
                    <span className={styles.impactFrom}>31% to</span>
                    <span className={styles.impactTo}>35%</span>
                  </p>
                </div>
                <div className={styles.metricItem}>
                  <p className={styles.metricLabel}>dAU for Release Month</p>
                  <p className={styles.impactValue}>
                    <span className={styles.impactFrom}>14% to</span>
                    <span className={styles.impactTo}>20%</span>
                  </p>
                </div>
                <div className={styles.metricItem}>
                  <p className={styles.metricLabel}>login rates after 3 months</p>
                  <p className={styles.impactValue}>
                    <span className={styles.impactFrom}>60% to</span>
                    <span className={styles.impactTo}>82%</span>
                  </p>
                </div>
              </div>
            </div>
            <div className={`${styles.divider} ${styles.dividerWide}`} role="separator" />
            <div className={styles.copy}>
              <h3 className={styles.subheading}>revenue projections exceeded</h3>
              <div className={styles.metricStack}>
                <div className={styles.metricItem}>
                  <p className={styles.metricLabel}>average gmv after 3 months</p>
                  <p className={styles.revenueValue}>12cr</p>
                </div>
                <div className={styles.metricItem}>
                  <p className={styles.metricLabel}>Estimated Revenue from R2C for FY26-27</p>
                  <p className={styles.revenueValue}>200cr!</p>
                </div>
              </div>
            </div>
          </div>

          <Figure src={imgClosing} wide />

          <Copy label="learnings" title="key takeaways">
            <ol className={styles.learnings}>
              <li>
                <strong>Transparency Builds Trust:</strong> Clearly explaining how reimbursement
                data was digitized helped build trust and encouraged adoption.
              </li>
              <li>
                <strong>Dynamic Personalization Works:</strong> Dynamically arranging service
                carousels based on user behavior improved engagement.
              </li>
              <li>
                <strong>Iterative Testing is Key:</strong> Usability testing uncovered critical
                issues that were addressed before launch.
              </li>
            </ol>
          </Copy>
        </main>
      </div>
    </div>
  );
}
