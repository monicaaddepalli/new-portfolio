import { useEffect, useRef, useState, type ReactNode } from 'react';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import styles from './R2cProject.module.css';

const hero = '/assets/v3/home/r2c.png?v=20261109-1';
const imgUserCalls = '/assets/r2c/user-calls.png';
const imgPrioritisation = '/assets/r2c/prioritisation.png';
const imgIA = '/assets/r2c/ia.png';
const imgWireBoard = '/assets/v2/r2c/wireframes-board.png';
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
    title: 'User Education',
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

export function R2cProject() {

  return (
    <div className={styles.page} data-name="r2c">
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
            alt="Reorder screen scanning a prescription"
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
          <h1 className={styles.title}>R2C - Reorder</h1>

          <section className={`${styles.section} ${styles.headed}`}>
            <h2 className={styles.label}>Background</h2>
            <div className={styles.stack}>
            <h3 className={styles.subhead}>Project Overview</h3>
            <div className={styles.prose}>
              <p>
                MediBuddy, a B2B2C digital healthcare platform, offers corporate employees services
                like consultations, lab tests, and medicine delivery. Employee benefits allows the
                use of a pre-funded wallet (&quot;<strong>Cashless</strong>&quot;) or{' '}
                <strong>Reimbursement</strong> of any out-of-pocket payment.
              </p>
              <p>
                This project aimed to increase cashless transactions, which were significantly lower
                than reimbursements. We wanted to create a smooth and personalised reordering
                process that leveraged digitised reimbursement data &amp; would encourage customers
                to switch from reimbursements to cashless payments.
              </p>
              <p>
                This initiative was projected to generate <strong>₹100 crore</strong> in annual
                revenue and improve customer satisfaction and retention.
              </p>
            </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.headed}`}>
            <h2 className={styles.label}>Business Challenge</h2>
            <div className={styles.stack}>
            <h3 className={styles.subhead}>How Might We Boost Cashless Orders</h3>
            <div className={styles.prose}>
              <p>
                Medibuddy exclusively generates revenue from cashless orders, not reimbursements.
                However,
              </p>
              <p className={styles.callout}>
                Only <span className={styles.accent}>15%</span> users ordered Cashless
              </p>
              <p>
                A major opportunity to increase revenue lied in shifting users from reimbursements
                to cashless payments. Enabling hassle-free reorders became the gateway to changing
                this user behaviour.
              </p>
              <p className={styles.lead}>Reorders were frequent:</p>
            </div>
            <div className={styles.pair}>
              <div>
                <p className={styles.bigStat}>32%</p>
                <p>of total users had repeated orders using the same prescription</p>
              </div>
              <div>
                <p className={styles.bigStat}>70%</p>
                <p>of total users were chronic illness patients likely to reorder services</p>
              </div>
            </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.headed}`}>
            <h2 className={styles.label}>Understanding Pain Points</h2>
            <div className={styles.stack}>
            <h3 className={styles.subhead}>Users were frustrated...</h3>
            <img className={styles.figure} src={imgUserCalls} alt="Notes from more than 100 user calls" />
            <div className={styles.block}>
              <h3 className={`${styles.subhead} ${styles.semibold}`}>Convoluted reimbursement process ~</h3>
              <div className={styles.blockBody}>
                <div className={styles.statPair}>
                  <p className={styles.bigStat}>62%</p>
                  <p>Users expressed one or more issues with the reimbursement process.</p>
                </div>
                <ul className={`${styles.list} ${styles.listStrong}`}>
                  <li>Lengthy processes (1 - 2 weeks)</li>
                  <li>Claims get rejected frequently</li>
                  <li>Unclear policy and coverage guidelines</li>
                </ul>
              </div>
            </div>
            <hr className={styles.rule} />
            <div className={styles.block}>
              <h3 className={`${styles.subhead} ${styles.semibold}`}>Cashless: better but with caveats ~</h3>
              <div className={styles.blockBody}>
                <p>
                  Cashless was <strong>instant</strong>, <strong>hassle free</strong> and there
                  wasn&apos;t a chance of claims getting rejected. However converting users to
                  cashless was <strong>NOT</strong> going to be easy, because:
                </p>
                <div className={styles.statPair}>
                  <p className={styles.bigStat}>51%</p>
                  <p>Users also expressed frustrations related to the cashless process.</p>
                </div>
                <ul className={`${styles.list} ${styles.listStrong}`}>
                  <li>Doctors or medicines not available in user&apos;s area</li>
                  <li>Lack of trust in online healthcare</li>
                  <li>Lack of understanding of the cashless system</li>
                  <li>Unaware of their health benefits</li>
                </ul>
              </div>
            </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.headed}`}>
            <h2 className={styles.label}>Design Thinking</h2>
            <div className={styles.stack}>
            <div className={styles.headCopy}>
              <h3 className={styles.subhead}>Brainstorming Solutions</h3>
              <p>
                Collaborated with the PMs of each service line, Operations, Tech, and the CEO in an
                Affinity Mapping session to deeply analyze user pain points, which guided the
                development of our solution themes.
              </p>
            </div>
            <div className={styles.themes}>
              {themes.map((theme) => (
                <article key={theme.title} className={styles.theme}>
                  <div className={styles.themeHead}>
                    <img src={theme.icon} alt="" width={20} height={20} />
                    <h4>{theme.title}</h4>
                  </div>
                  <ul className={styles.list}>
                    {theme.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.compact}`}>
            <h3 className={styles.subhead}>Prioritisation Matrix</h3>
            <img className={styles.figure} src={imgPrioritisation} alt="Prioritisation matrix" />
          </section>

          <section className={`${styles.section} ${styles.compact}`}>
            <h3 className={styles.subhead}>Information Architecture</h3>
            <img className={styles.figure} src={imgIA} alt="Information architecture for reorder" />
          </section>

          <section className={`${styles.section} ${styles.compact}`}>
            <h3 className={styles.subhead}>Wireframes and Early Designs</h3>
            <div className={styles.wireframes}>
              <div className={styles.wireframesTop}>
                <div className={styles.wireframesBoard}>
                  <img src={imgWireBoard} alt="Whiteboard of early reorder wireframes" />
                </div>
                <div className={styles.wireframesFlow}>
                  <img src={imgWireFlow} alt="Early reorder flow wireframes" />
                </div>
              </div>
              <div className={styles.wireframesStories}>
                <div className={styles.wireframesStoriesMedia}>
                  <img src={imgWireStories} alt="Wireframe, lo-fi, and polished screens" />
                </div>
                <div className={styles.wireframesStoriesCopy}>
                  <p className={styles.wireframesStoriesTitle}>Tested User Stories</p>
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
          </section>

          <section className={`${styles.section} ${styles.headed}`}>
            <h2 className={styles.label}>Final Solution</h2>
            <div className={styles.solutionStack}>
            <div className={styles.solutionBlock}>
              <h3 className={styles.subhead}>Driving Cashless Orders through New Reorder Flow</h3>
              <div className={styles.phoneGrid}>
                <PhoneCard>
                  <img
                    className={styles.phoneShot}
                    src={imgScreenReorder1}
                    alt="Reorder tab in the bottom navigation"
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
                    alt="Clean and responsive service reorder cards"
                    loading="lazy"
                    decoding="async"
                  />
                </PhoneCard>
                <PhoneCard>
                  <img
                    className={styles.phoneShot}
                    src={imgScreenReorder4}
                    alt="Streamlined checkout experience"
                    loading="lazy"
                    decoding="async"
                  />
                </PhoneCard>
              </div>
            </div>
            <div className={styles.solutionBlock}>
            <h3 className={styles.subhead}>Hi-Fidelity Screens and Core Flows</h3>
            <div className={styles.flows}>
              <div className={styles.flow}>
                <div className={styles.flowCopy}>
                  <h4 className={styles.flowTitle}>Effortless Checkout Process</h4>
                  <ul className={styles.flowList}>
                    <li>
                      <strong>Simplified Checkout:</strong> easily fill and verify required details
                      before purchase.
                    </li>
                    <li>
                      <strong>Add Beneficiary On-the-Go:</strong> quickly include a beneficiary during
                      checkout if needed.
                    </li>
                  </ul>
                </div>
                <FlowVideo src={videoSeamlessCheckout} title="Seamless checkout" />
              </div>
              <div className={`${styles.flow} ${styles.flowReverse}`}>
                <div className={styles.flowCopy}>
                  <h4 className={styles.flowTitle}>Service Specific Checkout Flows</h4>
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
                </div>
                <FlowVideo src={videoDigitization} title="Digitization" />
              </div>
              <div className={styles.flow}>
                <div className={styles.flowCopy}>
                  <div className={styles.flowHead}>
                    <p className={styles.badge}>Experiment</p>
                    <h4 className={styles.flowTitle}>New One-Page Checkout</h4>
                  </div>
                  <ul className={styles.flowList}>
                    <li>
                      <strong>Experience Unification:</strong> Reduced steps and cognitive load by
                      consolidating information, enabling faster transactions and laying the foundation
                      for a unified checkout experience.
                    </li>
                    <li>
                      <strong>Focus on Speed:</strong> The design prioritizes efficiency, enabling
                      users to complete transactions in seconds, improving overall satisfaction.
                    </li>
                  </ul>
                </div>
                <FlowVideo src={videoFastCheckout} title="Fast checkout" />
              </div>
              <div className={`${styles.flow} ${styles.flowReverse}`}>
                <div className={styles.flowCopy}>
                  <h4 className={styles.flowTitle}>FTUE and Storytelling</h4>
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
                      <strong>Delightful Introduction:</strong> The animation creates a
                      &quot;wow&quot; moment, highlighting the platform&apos;s ability to simplify
                      healthcare reordering and build user confidence.
                    </li>
                  </ul>
                </div>
                <FlowVideo src={videoFtue} title="FTUE" />
              </div>
            </div>
            </div>
            <div className={`${styles.solutionBlock} ${styles.solutionBlockPlayground}`}>
            <div className={styles.playgroundIntro}>
              <h3 className={styles.subhead}>Component Playground and Design System</h3>
              <p>
                Facilitated developer independence by creating a <strong>Component Playground</strong>{' '}
                for component states and edge-case testing. This enabled seamless UI builds, especially
                for junior developers, and contributed reusable organisms to our Mozaic Design System.
              </p>
            </div>
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
                <img src={imgPlaygroundPages} alt="Component playground pages" loading="lazy" decoding="async" />
              </div>
              <div className={styles.playgroundFlows}>
                <img
                  className={styles.playgroundFlowsDesktop}
                  src={imgPlaygroundFlows}
                  alt="Component playground flows"
                  loading="lazy"
                  decoding="async"
                />
                <img
                  className={styles.playgroundFlowsMobile}
                  src={imgPlaygroundFlowsMobile}
                  alt="Component playground flows"
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className={styles.playgroundLabel}>
                <picture>
                  <source media="(max-width: 767px)" srcSet={imgPlaygroundLabelMobile} />
                  <img src={imgPlaygroundLabel} alt="Component labels" loading="lazy" decoding="async" />
                </picture>
              </div>
            </div>
            </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.headed}`}>
            <h2 className={styles.label}>Feedback &amp; Iterations</h2>
            <div className={styles.feedbackStack}>
            <div className={styles.feedbackBlock}>
              <h3 className={styles.subhead}>Validating the Design with More Users</h3>
              <p>
                Conducted usability tests with <strong>15 random Medibuddy employees</strong> and{' '}
                <strong>10 external corporate users</strong> to gather actionable feedbacks to improve
                upon.
              </p>
            </div>
            <div className={styles.feedbackBlock}>
              <h3 className={`${styles.subhead} ${styles.minor}`}>Usability Testing Feedback</h3>
              <div className={styles.scores}>
                <div className={styles.score}>
                  <p className={styles.bigStat}>4.7</p>
                  <p className={styles.scoreLabel}>Ease of Navigation</p>
                </div>
                <div className={styles.score}>
                  <p className={styles.bigStat}>4.2</p>
                  <p className={styles.scoreLabel}>User Trust</p>
                </div>
                <div className={styles.score}>
                  <p className={styles.bigStat}>4.6</p>
                  <p className={styles.scoreLabel}>Information Clarity</p>
                </div>
                <div className={styles.score}>
                  <p className={styles.bigStat}>4.5</p>
                  <p className={styles.scoreLabel}>Overall Satisfaction</p>
                </div>
              </div>
            </div>
            <div className={styles.feedbackBlock}>
              <h3 className={`${styles.subhead} ${styles.minor}`}>Actionable Insights</h3>
              <ol className={styles.insights}>
              <li>
                <span>01</span>
                <div>
                  <p className={styles.insightTitle}>User missed the &apos;Reorder&apos; tab.</p>
                  <p className={styles.ink}>Added FTUE with a tooltip nudging on the reorder tab.</p>
                </div>
              </li>
              <li>
                <span>02</span>
                <div>
                  <p className={styles.insightTitle}>Improving Cart Differentiation</p>
                  <p className={styles.ink}>
                    Some users struggled to distinguish between similar carts. to resolve this, added
                    order dates to reorder cards, providing clear differentiation.
                  </p>
                </div>
              </li>
              <li>
                <span>03</span>
                <div>
                  <p className={styles.insightTitle}>
                    Dead-end flow when verifying reimbursement records
                  </p>
                  <p className={styles.ink}>
                    Added an &quot;<strong>Order Again</strong>&quot; <strong>CTA</strong> on the
                    record verification page.
                  </p>
                </div>
              </li>
              <li>
                <span>04</span>
                <div>
                  <p className={styles.insightTitle}>Successful Unified Checkout Test</p>
                  <p className={styles.ink}>
                    Users found the new checkout positive, but a tech-stack upgrade is required for
                    future release.
                  </p>
                </div>
              </li>
              </ol>
            </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.headed}`}>
            <h2 className={styles.label}>Impact Created</h2>
            <div className={styles.impactIntro}>
              <h3 className={styles.subhead}>Positive Results and Road to 100cr</h3>
              <div className={styles.impactResults}>
                <div className={styles.impactGroup}>
                  <h3 className={`${styles.subhead} ${styles.minor} ${styles.semibold}`}>
                    Behaviour Shift Towards Cashless Adoption
                  </h3>
                  <div className={styles.pair}>
                    <div className={styles.impactCard}>
                      <p className={styles.impactLabel}>Cashless Adoption Rate Increase</p>
                      <p className={styles.shift}>
                        <span>15% to </span>
                        <span className={styles.blue}>23%</span>
                      </p>
                      <p className={styles.statNote}>
                        within 3 months of launching the R2C Reorder feature
                      </p>
                    </div>
                    <div className={styles.impactCard}>
                      <p className={styles.impactLabel}>&apos;Only Reimbursement&apos; Percentage Decrease</p>
                      <p className={styles.shift}>
                        <span>40% to </span>
                        <span className={styles.blue}>21.7%</span>
                      </p>
                      <p className={styles.statNote}>
                        of total users did Pure Reimbursement, showing strong Cashless Signals
                      </p>
                    </div>
                  </div>
                </div>
                <div className={styles.impactGroup}>
                  <h3 className={`${styles.subhead} ${styles.minor}`}>User Engagement Improved</h3>
                  <div className={styles.engage}>
                    <div className={styles.engageMetric}>
                      <p className={styles.impactLabel}>MAU for Release Month</p>
                      <p className={styles.shift}>
                        <span>31% to </span>
                        <span className={styles.blue}>35%</span>
                      </p>
                    </div>
                    <div className={styles.engageMetric}>
                      <p className={styles.impactLabel}>DAU for Release Month</p>
                      <p className={styles.shift}>
                        <span>14% to </span>
                        <span className={styles.blue}>20%</span>
                      </p>
                    </div>
                    <div className={styles.engageMetric}>
                      <p className={styles.impactLabel}>Login Rates after 3 months</p>
                      <p className={styles.shift}>
                        <span>60% to </span>
                        <span className={styles.blue}>82%</span>
                      </p>
                    </div>
                  </div>
                </div>
                <hr className={styles.rule} />
                <div className={`${styles.impactGroup} ${styles.impactGroupRevenue}`}>
                  <h3 className={`${styles.subhead} ${styles.minor} ${styles.semibold}`}>
                    Revenue Projections Exceeded
                  </h3>
                  <div className={styles.revenue}>
                    <div className={styles.revenueMetric}>
                      <p className={styles.impactLabel}>Average GMV after 3 months</p>
                      <p className={styles.revenueValue}>12cr</p>
                    </div>
                    <div className={styles.revenueMetric}>
                      <p className={styles.impactLabel}>Estimated Revenue from R2C for FY26-27</p>
                      <p className={styles.revenueValue}>200cr!</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <img
              className={`${styles.figure} ${styles.impactClosing}`}
              src={imgClosing}
              alt="Reorder screens across a set of phones"
            />
          </section>

          <section className={`${styles.section} ${styles.headed}`}>
            <h2 className={styles.label}>Learnings</h2>
            <div className={styles.stack}>
            <h3 className={styles.subhead}>Key Takeaways</h3>
            <ul className={`${styles.list} ${styles.listInk}`}>
              <li>
                <strong>Transparency Builds Trust:</strong> Clearly explaining how reimbursement data
                was digitized helped build trust and encouraged adoption.
              </li>
              <li>
                <strong>Dynamic Personalization Works:</strong> Dynamically arranging service
                carousels based on user behavior improved engagement.
              </li>
              <li>
                <strong>Iterative Testing is Key:</strong> Usability testing uncovered critical issues
                that were addressed before launch.
              </li>
            </ul>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
