import { useState } from 'react';
import { Link } from 'react-router-dom';
import { applyTheme, getInitialTheme, type Theme } from '../../lib/theme';
import styles from './VisionProject.module.css';

const imgHero = '/assets/vision/hero.png';
const imgContext = '/assets/vision/context.png';
const imgAffinity = '/assets/vision/affinity.png';
const imgIA = '/assets/vision/ia.png';
/** Place the file at `public/assets/vision/landing-page-vision.mp4` or update this path. */
const videoLandingPageVision = '/assets/vision/landing-page-vision.mp4';
/** Same framed container as `videoLandingPageVision`; file: `public/assets/vision/form-section-vision.mp4`. */
const videoFormSectionVision = '/assets/vision/form-section-vision.mp4';
/** Order tracking section; file: `public/assets/vision/track-order-vision.mp4`. */
const videoTrackOrderVision = '/assets/vision/track-order-vision.mp4';

function MediaImage({
  src,
  bordered,
  hero,
  fill,
  className,
}: {
  src: string;
  bordered?: boolean;
  hero?: boolean;
  fill?: string;
  className?: string;
}) {
  const wrapClass = [
    styles.media,
    bordered && styles.mediaBordered,
    hero && styles.mediaHero,
    bordered && !hero && styles.mediaFigure,
    className,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={wrapClass} style={fill ? { background: fill } : undefined}>
      <div className={styles.mediaInner} aria-hidden="true">
        <img
          className={styles.mediaImg}
          alt=""
          src={src}
          loading={hero ? 'eager' : 'lazy'}
          decoding="async"
          fetchPriority={hero ? 'high' : undefined}
        />
      </div>
    </div>
  );
}

function MediaVideo({
  src,
  bordered = true,
  title,
}: {
  src: string;
  bordered?: boolean;
  title?: string;
}) {
  const wrapClass = [styles.media, bordered && styles.mediaBordered, styles.mediaVideoFrame]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={wrapClass}>
      <div className={styles.mediaVideoWrap}>
        <video
          className={styles.mediaVideo}
          src={src}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
          {...(title !== undefined ? { title } : {})}
        />
      </div>
    </div>
  );
}

export function VisionProject() {
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
      <div className={styles.page} data-node-id="46:490" data-name="vision project">
        <div className={styles.main}>
          <div className={styles.heroLead}>
            <header className={styles.sectionText} data-node-id="46:493">
              <div className={styles.stack60}>
                <div className={styles.backRow} data-node-id="46:494">
                  <Link
                    className={styles.backLink}
                    to="/"
                    data-node-id="46:495"
                    data-muted
                  >
                    <span className={styles.backIconWrap} aria-hidden="true">
                      <svg
                        className={styles.backIcon}
                        viewBox="0 0 16 16"
                        width={16}
                        height={16}
                      >
                        <path
                          fill="currentColor"
                          d="M5.50312 12.0865L1.41667 8L5.50312 3.91354L6.27729 4.6875L3.50646 7.45833H14.5833V8.54167H3.50646L6.27729 11.3125L5.50312 12.0865Z"
                        />
                      </svg>
                    </span>
                    <span className={styles.backLinkLabel}>back</span>
                  </Link>
                </div>

                <div className={`${styles.textBlock} ${styles.stack0}`} data-node-id="49:600">
                  <p className={styles.primary} data-node-id="46:500">
                    vision flow revamp
                  </p>
                  <p className={styles.secondary} data-node-id="49:599">
                    a smarter, more predictable way to book vision care
                  </p>
                </div>
              </div>
            </header>

            <MediaImage
              src={imgHero}
              hero
              fill="#f2f2f2"
              className={styles.heroLeadImage}
            />

            <div className={`${styles.sectionText} ${styles.projectMeta}`}>
              <div className={styles.metaRow} data-node-id="49:627">
                <div className={styles.metaItem} data-node-id="49:616">
                  <p className={styles.secondary} data-node-id="49:617">
                    product
                  </p>
                  <p className={styles.primary} data-node-id="49:619">
                    medibuddy
                  </p>
                </div>
                <div className={styles.metaItem} data-node-id="49:633">
                  <p className={styles.secondary} data-node-id="49:634">
                    role
                  </p>
                  <p className={styles.primary} data-node-id="49:636">
                    product designer
                  </p>
                </div>
                <div className={styles.metaItem} data-node-id="49:622">
                  <p className={styles.secondary} data-node-id="49:623">
                    duration
                  </p>
                  <p className={styles.primary} data-node-id="49:625">
                    1 month
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.sectionText} ${styles.heroLeadIntro}`}>
              <div className={`${styles.textBlock} ${styles.stack8}`} data-node-id="49:610">
                <p className={styles.primary} data-node-id="49:609">
                  the booking experience was losing users at every turn.
                </p>
                <p className={styles.primary} data-node-id="54:680">
                  the vision booking experience lacked clarity at key moments around eligibility,
                  process, and payment. Funnel analysis showed consistent dropoffs across stages,
                  from form initiation to order placement to payment. this pointed to a core issue
                  not of demand, but of confidence driven by uncertainty in the journey.
                </p>
              </div>
            </div>
          </div>

          <section className={styles.sectionText} data-node-id="52:640">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="52:656">
              <p className={styles.heading} data-node-id="52:658">
                background
              </p>
              <p className={styles.primary} data-node-id="52:661">
                medibuddy is India&apos;s leading digital healthcare platform, built to make quality
                healthcare accessible to everyone serving over 100,000 people every day.
              </p>
              <p className={styles.primary} data-node-id="59:682">
                after a successful two week pilot with lenskart at Intel campuses generating ₹60L GMV
                from 260 orders, the team had validated the vision care product. The next challenge was
                scaling it. That meant fixing the booking journey.
              </p>
            </div>
          </section>

          <MediaImage src={imgContext} bordered />

          <div className={styles.stack80} data-node-id="79:62">
            <section className={styles.sectionText} data-node-id="65:683">
              <div className={`${styles.textBlock} ${styles.stack60}`} data-node-id="65:693">
                <div className={styles.stack12} data-node-id="77:43">
                  <p className={styles.heading} data-node-id="65:694">
                    problem
                  </p>
                  <p className={styles.primary} data-node-id="65:695">
                    medibuddy users were entitled to vision benefits, but the actual experience felt
                    anything but beneficial. Confusing policies, surprise payments, and unclear next
                    steps left users frustrated and frequently dropping off. recognizing this gap, we
                    saw a powerful opportunity to rebuild trust and clarity creating a seamless,
                    policy-aware eyewear journey that users could actually rely on.
                  </p>
                </div>
                <div className={styles.stack8} data-node-id="77:44">
                  <p className={styles.heading} data-node-id="77:42">
                    pain points from user research
                  </p>
                  <div className={styles.primary} data-node-id="77:41">
                    <p className={styles.primary}>&quot;I don&apos;t have my prescription with me&quot;</p>
                    <p className={styles.primary}>
                      &quot;I don&apos;t want to go to a store just to place an order&quot;
                    </p>
                    <p className={styles.primary}>
                      &quot;I don&apos;t understand what happens after I fill the form&quot;
                    </p>
                    <p className={styles.primary}>
                      &quot;I don&apos;t know what my policy actually covers&quot;
                    </p>
                    <p className={styles.primary}>
                      &quot;Why am I getting a payment link? I thought this was cashless&quot;
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section className={styles.sectionText} data-node-id="79:45">
              <div className={styles.textBlock} data-node-id="79:55">
                <div className={styles.stack12} data-node-id="79:56">
                  <p className={styles.heading} data-node-id="79:57">
                    how might we
                  </p>
                  <ol className={styles.hmwList} data-node-id="79:67">
                    <li>
                      <span className={styles.hmwLead}>remove the prescription barrier: </span>
                      transfer ownership from the user to the vendor so the form no longer required
                      something most users didn&apos;t have on hand
                    </li>
                    <li>
                      <span className={styles.hmwLead}>reduce friction in order placement: </span>
                      introduce a Home Visit mode so users didn&apos;t have to visit a store or
                      navigate a vendor website on their own
                    </li>
                    <li>
                      <span className={styles.hmwLead}>Build clarity into every step: </span>
                      surface the right information at the right moment, from policy details during
                      form fill to a guided next-steps view post-submission
                    </li>
                  </ol>
                </div>
              </div>
            </section>
          </div>

          <section className={styles.sectionText} data-node-id="79:68">
            <p className={`${styles.textBlock} ${styles.primary}`} data-node-id="103:335">
              i worked with the PM in an affinity mapping session to break down user feedback into
              themes. this helped us explore solution directions across four areas before narrowing
              down what to build.
            </p>
          </section>

          <MediaImage src={imgAffinity} bordered />

          <section className={styles.sectionText} data-node-id="103:337">
            <p className={`${styles.textBlock} ${styles.primary}`} data-node-id="103:348">
              with the solution direction aligned, i mapped out the information architecture to define
              how the pages and user flows connected ensuring it worked within the existing product
              structure and met user needs at each step.
            </p>
          </section>

          <MediaImage src={imgIA} bordered />

          <section className={styles.sectionText} data-node-id="88:84">
            <div className={`${styles.textBlock} ${styles.stack20}`} data-node-id="88:94">
              <p className={styles.heading} data-node-id="88:95">
                solution
              </p>
              <div className={styles.stack12} data-node-id="94:103">
                <p className={styles.heading} data-node-id="88:96">
                  making policy clarity the first step
                </p>
                <div className={styles.stack12} data-node-id="94:102">
                  <p className={styles.primary} data-node-id="88:98">
                    for the Vision Care experience, I redesigned the entry flow to make policy coverage
                    and eligibility easier to understand upfront. Previously, users had limited
                    clarity on what was covered, leading to hesitation and drop-offs during booking.
                  </p>
                  <p className={styles.primary} data-node-id="94:100">
                    the updated experience surfaces key policy information earlier in the journey,
                    helping users make informed decisions with more confidence. By reducing uncertainty
                    and improving visibility around benefits, the flow creates a smoother and more
                    trustworthy booking experience.
                  </p>
                  <p className={styles.primary} data-node-id="94:101">
                    i also simplified the information hierarchy to make important actions and coverage
                    details easier to scan, especially on smaller mobile screens.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <MediaVideo src={videoLandingPageVision} bordered title="Landing page vision" />

          <section className={styles.sectionText} data-node-id="94:111">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="94:123">
              <p className={styles.heading} data-node-id="94:124">
                simplifying the ordering experience
              </p>
              <div className={styles.stack12} data-node-id="94:125">
                <p className={styles.primary} data-node-id="94:126">
                  the ordering experience was redesigned to reduce unnecessary complexity and guide users
                  through the flow with greater clarity. instead of presenting every input at once, the
                  interface progressively reveals only the most relevant fields based on user actions
                  and policy context.
                </p>
                <p className={styles.primary} data-node-id="94:127">
                  to make the process feel lighter and faster, i introduced guided steps, optional
                  prescription upload, and clearer decision points throughout the journey. this helped
                  create a more seamless ordering experience while reducing friction during checkout.
                </p>
              </div>
            </div>
          </section>

          <MediaVideo src={videoFormSectionVision} bordered title="Form section vision" />

          <section className={styles.sectionText} data-node-id="94:130">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="94:140">
              <p className={styles.heading} data-node-id="94:141">
                introducing order tracking
              </p>
              <div className={styles.stack12} data-node-id="94:142">
                <p className={styles.primary} data-node-id="94:143">
                  to improve visibility after checkout, i introduced a dedicated order tracking
                  experience that keeps users informed throughout the journey. previously, users had
                  limited clarity on their order status after placing a request, leading to uncertainty
                  and support dependency.
                </p>
                <p className={styles.primary} data-node-id="94:145">
                  the new flow provides real-time updates, structured tracking states, and guided next
                  steps, helping users stay informed and confident while their order is being processed.
                </p>
              </div>
            </div>
          </section>

          <MediaVideo src={videoTrackOrderVision} bordered title="Track order vision" />

          <section className={styles.sectionText} data-node-id="94:147">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="94:157">
              <p className={styles.heading} data-node-id="94:158">
                impact
              </p>
              <p className={styles.primary} data-node-id="94:160">
                The redesigned Vision Flow led to a <strong>7% increase</strong> in conversion rate,
                resulting in an estimated ₹5 Cr annualised business impact. The platform also generated
                <strong> ₹54.7 Cr in GMV</strong> through Vision bookings.
              </p>
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
