import { useLayoutEffect } from 'react';
import styles from './VisionProject.module.css';

const hero = '/assets/v3/home/vision.png?v=20261109-1';
const imgOldExperience = '/assets/v2/vision/old-experience.png?v=20260830-2';
const imgIa = '/assets/v2/vision/ia.png';
const videoLanding = '/assets/vision/landing-page-vision.mp4';
const videoForm = '/assets/vision/form-section-vision.mp4';
const videoTrack = '/assets/vision/track-order-vision.mp4';

const themes = [
  {
    title: 'User Education',
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
    title: 'Build Trust And Transparency',
    points: [
      'Communicate pricing breakdowns upfront during payment.',
      "Show real-time order statuses and clarify what's pending at every stage.",
    ],
  },
];

function FlowVideo({ src, title }: { src: string; title: string }) {
  return (
    <div className={styles.videoFrame}>
      <video src={src} autoPlay loop muted playsInline preload="metadata" title={title} />
    </div>
  );
}

export function VisionProject() {

  return (
    <div className={styles.page} data-name="vision">
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
            alt="Vision Care booking flow on a phone"
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
          <h1 className={styles.title}>Vision Revamp</h1>

          <section className={styles.section}>
            <h2 className={styles.label}>Background</h2>
            <div className={styles.prose}>
              <p>
                MediBuddy is <strong>India&apos;s leading digital healthcare platform</strong>, built
                to make quality healthcare accessible to everyone serving over{' '}
                <strong>100,000 people</strong> every day.
              </p>
              <p>
                Vision Care is one of the services that helps employees use their insurance benefits
                to purchase eyewear.
              </p>
              <p>
                After a successful <strong>pilot</strong> with Lenskart at Intel campuses, Vision Care
                generated <strong>₹60L in GMV from 260 orders</strong> over two weeks.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Problem</h2>
            <div className={styles.prose}>
              <p>After the pilot, we looked at how users moved through the booking journey.</p>
              <p>
                The data showed <strong>three major drop-offs</strong>. Some users opened the Vision
                form but didn&apos;t complete it. Others filled the form but never placed an order. And
                some received a payment link but didn&apos;t complete the payment.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>How Vision Care Works</h2>
            <div className={styles.prose}>
              <p>
                Users start by filling out a form based on their preferences, including their
                preferred vendor and mode of purchase. Once the form is submitted, a coupon code is
                generated for them.
              </p>
              <p>
                They can then proceed with their purchase either at a store or online and use the
                coupon code with the provider, such as Lenskart. Once the purchase details are
                verified, any additional amount, such as a co pay or amount beyond policy coverage, is
                collected before the order is processed.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Old Experience</h2>
            <div className={styles.prose}>
              <p>
                The existing experience was built around a single form that users had to complete to
                access their Vision Care benefits.
              </p>
            </div>
            <img
              className={`${styles.figure} ${styles.figureOld}`}
              src={imgOldExperience}
              alt="Previous Vision Care form experience"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Investigation And Findings</h2>
            <div className={styles.prose}>
              <p>
                Below were some <strong>core findings</strong> from our investigation.
              </p>
            </div>
            <div className={styles.quotes}>
              <p>&quot;I don&apos;t have my prescription with me&quot;</p>
              <p>&quot;I don&apos;t want to go to a store just to place an order&quot;</p>
              <p>&quot;I don&apos;t understand what happens after I fill the form&quot;</p>
              <p>&quot;I don&apos;t know what my policy actually covers&quot;</p>
              <p>&quot;Why am I getting a payment link? I thought this was cashless&quot;</p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>How Might We?</h2>
            <ol className={styles.steps}>
              <li>
                <strong>Remove the prescription barrier:</strong> transfer ownership from the user to
                the vendor so the form no longer required something most users didn&apos;t have on hand
              </li>
              <li>
                <strong>Reduce friction in order placement:</strong> introduce a Home Visit mode so
                users didn&apos;t have to visit a store or navigate a vendor website on their own
              </li>
              <li>
                <strong>Build clarity into every step:</strong> surface the right information at the
                right moment, from policy details during form fill to a guided next-steps view
                post-submission
              </li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Design Thinking</h2>
            <p>
              I worked with the PM in an affinity mapping session to break down user feedback into
              themes. This helped us explore solution directions across four areas before narrowing
              down what to build.
            </p>
            <div className={styles.themeGrid}>
              {themes.map((theme) => (
                <article key={theme.title} className={styles.themeCard}>
                  <h3 className={styles.themeTitle}>{theme.title}</h3>
                  <ul className={styles.themeList}>
                    {theme.points.map((point) => (
                      <li key={point}>{point}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
            <p>
              With the solution direction aligned, I mapped out the information architecture to define
              how the pages and user flows connected ensuring it worked within the existing product
              structure and met user needs at each step.
            </p>
            <img
              className={`${styles.figure} ${styles.figureIa}`}
              src={imgIa}
              alt="Vision Care information architecture"
            />
          </section>

          <section className={`${styles.section} ${styles.flowSection}`}>
            <h2 className={styles.label}>Policy Coverage And Eligibility</h2>
            <div className={styles.prose}>
              <p>
                For the Vision Care experience, I redesigned the entry flow to make policy coverage and
                eligibility easier to understand upfront.
              </p>
              <p>
                Previously, users weren&apos;t always sure what their policy covered. The updated
                experience brings this information earlier in the journey, making it easier to
                understand what&apos;s covered and move forward with more clarity.
              </p>
              <p>
                I also simplified the information hierarchy to make important details easier to scan on
                mobile.
              </p>
            </div>
            <FlowVideo src={videoLanding} title="Landing page vision" />
          </section>

          <section className={`${styles.section} ${styles.flowSection}`}>
            <h2 className={styles.label}>Ordering Experience</h2>
            <div className={styles.prose}>
              <p>
                The ordering flow was redesigned to make the process easier to follow. Instead of
                showing everything at once, users only saw the information and fields relevant to their
                choices and policy.
              </p>
              <p>
                We also made prescriptions optional where possible and introduced clearer steps
                throughout the journey, making it easier to move from filling the form to placing an
                order.
              </p>
            </div>
            <FlowVideo src={videoForm} title="Form section vision" />
          </section>

          <section className={`${styles.section} ${styles.flowSection}`}>
            <h2 className={styles.label}>Order Tracking</h2>
            <div className={styles.prose}>
              <p>
                Once users placed an order, they had little visibility into what happened next. We
                introduced a dedicated tracking experience to keep them informed throughout the process.
              </p>
              <p>
                The new flow shows clear order updates and next steps, so users always know where their
                order stands and what to expect next.
              </p>
            </div>
            <FlowVideo src={videoTrack} title="Track order vision" />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Impact</h2>
            <div className={styles.prose}>
              <p>The redesigned Vision Care journey led to meaningful business impact.</p>
            </div>
            <ul className={styles.impactList}>
              <li>
                <strong>7% increase</strong> in conversion rate
              </li>
              <li>An estimated ₹5 Cr in annualised business impact</li>
              <li>
                <strong>₹54.7 Cr in GMV</strong> generated through Vision bookings
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
