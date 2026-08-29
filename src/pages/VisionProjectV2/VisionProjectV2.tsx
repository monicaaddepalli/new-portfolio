import { useLayoutEffect, type ReactNode } from 'react';
import { OptimizedImage } from '../../components/OptimizedImage';
import { applyTheme } from '../../lib/theme';
import styles from './VisionProjectV2.module.css';

const imgHero = '/assets/v2/vision/hero.png';
const imgOldExperience = '/assets/v2/vision/old-experience.png';
const imgIa = '/assets/v2/vision/ia.png';
const videoLanding = '/assets/vision/landing-page-vision.mp4';
const videoForm = '/assets/vision/form-section-vision.mp4';
const videoTrack = '/assets/vision/track-order-vision.mp4';

const themes = [
  {
    title: 'user education',
    points: [
      'Educate users on policy coverage and cashless benefits through a dedicated Benefits Page.',
      'Provide vendor-specific next steps and clear visual journeys post-form submission.',
    ],
  },
  {
    title: 'Smart Prescription Handling',
    points: [
      'Allow interest form submission without a prescription when permitted.',
      'Enable vendors and ops teams to upload and verify prescriptions post-submission.',
    ],
  },
  {
    title: 'Flexible Fulfillment Options',
    points: [
      'Introduce Home Visit as a new delivery mode with Lenskart for user convenience.',
      'Clearly differentiate between online orders and store pick-up in the flow.',
    ],
  },
  {
    title: 'Build Trust and Transparency',
    points: [
      'Communicate pricing breakdowns upfront during payment.',
      'Show real-time order statuses and clarify what\'s pending at every stage.',
    ],
  },
];

function Figure({
  src,
  priority,
  hero,
  ia,
}: {
  src: string;
  priority?: boolean;
  hero?: boolean;
  ia?: boolean;
}) {
  const figureClass = [
    styles.figure,
    hero && styles.figureHero,
    ia && styles.figureIa,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure className={figureClass}>
      <div className={styles.media}>
        <OptimizedImage src={src} alt="" width={1600} height={756} priority={priority} />
      </div>
    </figure>
  );
}

function FlowVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className={styles.videoFrame}>
      <video src={src} autoPlay loop muted playsInline preload="metadata" title={title} />
    </div>
  );
}

function Flow({
  reverse,
  heading,
  children,
  videoSrc,
  videoTitle,
}: {
  reverse?: boolean;
  heading: string;
  children: ReactNode;
  videoSrc: string;
  videoTitle: string;
}) {
  return (
    <div className={`${styles.flowRow} ${reverse ? styles.flowRowReverse : ''}`}>
      <div className={styles.flowCopy}>
        <h2 className={styles.heading}>{heading}</h2>
        {children}
      </div>
      <FlowVideo src={videoSrc} title={videoTitle} />
    </div>
  );
}

function Copy({
  heading,
  children,
}: {
  heading?: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.copy}>
      {heading ? <h2 className={styles.heading}>{heading}</h2> : null}
      {children}
    </section>
  );
}

export function VisionProjectV2() {
  useLayoutEffect(() => {
    applyTheme('light');
  }, []);

  return (
    <div className={styles.page} data-name="vision care">
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
              <h1 className={styles.title}>Making it easier to use vision benefits</h1>
            </div>
          </div>

          <Copy heading="background">
            <div className={styles.prose}>
              <p>
                medibuddy is <strong>India&apos;s leading digital healthcare platform</strong>, built
                to make quality healthcare accessible to everyone serving over{' '}
                <strong>100,000 people</strong> every day.
              </p>
              <p>
                Vision Care is one of the services that helps employees use their insurance benefits
                to purchase eyewear.
              </p>
              <p>
                After a successful <strong>pilot</strong> with Lenskart at Intel campuses, Vision
                Care generated <strong>₹60L in GMV from 260 orders</strong> over two weeks.
              </p>
            </div>
          </Copy>

          <Copy heading="problem">
            <div className={styles.prose}>
              <p>After the pilot, we looked at how users moved through the booking journey.</p>
              <p>
                The data showed <strong>three major drop-offs</strong>. Some users opened the Vision
                form but didn&apos;t complete it. Others filled the form but never placed an order.
                And some received a payment link but didn&apos;t complete the payment.
              </p>
            </div>
          </Copy>

          <Copy heading="how vision care works">
            <div className={styles.prose}>
              <p>
                Users start by filling out a form based on their preferences, including their
                preferred vendor and mode of purchase. Once the form is submitted, a coupon code is
                generated for them.
              </p>
              <p>
                They can then proceed with their purchase either at a store or online and use the
                coupon code with the provider, such as Lenskart. Once the purchase details are
                verified, any additional amount, such as a co pay or amount beyond policy coverage,
                is collected before the order is processed.
              </p>
            </div>
          </Copy>

          <div className={styles.stack}>
            <Copy heading="old experience">
              <div className={styles.prose}>
                <p>
                  The existing experience was built around a single form that users had to complete
                  to access their Vision Care benefits.
                </p>
              </div>
            </Copy>
            <Figure src={imgOldExperience} />
          </div>

          <Copy heading="investigation and findings">
            <div className={styles.prose}>
              <p>
                Below were some <strong>core findings</strong> from our investigation.
              </p>
              <div className={styles.quotes}>
                <p>&quot;I don&apos;t have my prescription with me&quot;</p>
                <p>&quot;I don&apos;t want to go to a store just to place an order&quot;</p>
                <p>&quot;I don&apos;t understand what happens after I fill the form&quot;</p>
                <p>&quot;I don&apos;t know what my policy actually covers&quot;</p>
                <p>&quot;Why am I getting a payment link? I thought this was cashless&quot;</p>
              </div>
            </div>
          </Copy>

          <Copy heading="how might we?">
            <ol className={styles.hmw}>
              <li>
                <strong>remove the prescription barrier:</strong> transfer ownership from the user
                to the vendor so the form no longer required something most users didn&apos;t have
                on hand
              </li>
              <li>
                <strong>reduce friction in order placement:</strong> introduce a Home Visit mode so
                users didn&apos;t have to visit a store or navigate a vendor website on their own
              </li>
              <li>
                <strong>Build clarity into every step:</strong> surface the right information at the
                right moment, from policy details during form fill to a guided next-steps view
                post-submission
              </li>
            </ol>
          </Copy>

          <div className={styles.stack}>
            <Copy heading="design thinking">
              <div className={styles.prose}>
                <p>
                  i worked with the PM in an affinity mapping session to break down user feedback
                  into themes. this helped us explore solution directions across four areas before
                  narrowing down what to build.
                </p>
              </div>
            </Copy>
            <div className={styles.themeGrid}>
              {themes.map((theme) => (
                <div key={theme.title} className={styles.themeCard}>
                  <p className={styles.themeTitle}>{theme.title}</p>
                  <ul className={styles.themeList}>
                    {theme.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className={styles.stack}>
            <Copy>
              <div className={styles.prose}>
                <p>
                  with the solution direction aligned, i mapped out the information architecture to
                  define how the pages and user flows connected ensuring it worked within the
                  existing product structure and met user needs at each step.
                </p>
              </div>
            </Copy>
            <Figure src={imgIa} ia />
          </div>

          <div className={styles.flows}>
            <Flow
              heading="policy coverage and eligibility"
              videoSrc={videoLanding}
              videoTitle="Landing page vision"
            >
              <div className={styles.prose}>
                <p>
                  For the Vision Care experience, I redesigned the entry flow to make policy coverage
                  and eligibility easier to understand upfront.
                </p>
                <p>
                  Previously, users weren&apos;t always sure what their policy covered. The updated
                  experience brings this information earlier in the journey, making it easier to
                  understand what&apos;s covered and move forward with more clarity.
                </p>
                <p>
                  I also simplified the information hierarchy to make important details easier to
                  scan on mobile.
                </p>
              </div>
            </Flow>

            <Flow
              reverse
              heading="ordering experience"
              videoSrc={videoForm}
              videoTitle="Form section vision"
            >
              <div className={styles.prose}>
                <p>
                  The ordering flow was redesigned to make the process easier to follow. Instead of
                  showing everything at once, users only saw the information and fields relevant to
                  their choices and policy.
                </p>
                <p>
                  We also made prescriptions optional where possible and introduced clearer steps
                  throughout the journey, making it easier to move from filling the form to placing
                  an order.
                </p>
              </div>
            </Flow>

            <Flow
              heading="order tracking"
              videoSrc={videoTrack}
              videoTitle="Track order vision"
            >
              <div className={styles.prose}>
                <p>
                  Once users placed an order, they had little visibility into what happened next. We
                  introduced a dedicated tracking experience to keep them informed throughout the
                  process.
                </p>
                <p>
                  The new flow shows clear order updates and next steps, so users always know where
                  their order stands and what to expect next.
                </p>
              </div>
            </Flow>
          </div>

          <Copy heading="Impact">
            <div className={styles.prose}>
              <p>The redesigned Vision Care journey led to meaningful business impact.</p>
              <ul className={styles.impactList}>
                <li>
                  <strong>7% increase</strong> in conversion rate
                </li>
                <li>An estimated ₹5 Cr in annualised business impact</li>
                <li>
                  <strong>₹54.7 Cr in GMV</strong> generated through Vision bookings
                </li>
              </ul>
            </div>
          </Copy>
        </main>
      </div>
    </div>
  );
}
