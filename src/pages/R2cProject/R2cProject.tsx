import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { Alignment, Fit, Layout, useRive } from '@rive-app/react-canvas';
import { applyTheme, getInitialTheme } from '../../lib/theme';
import styles from './R2cProject.module.css';

const card2Layout = new Layout({ fit: Fit.Contain, alignment: Alignment.Center });

const imgHero = '/assets/r2c/hero.png';
const imgUserCalls = '/assets/r2c/user-calls.png';
const imgAffinity = '/assets/r2c/affinity.png?v=4';
const imgPrioritisation = '/assets/r2c/prioritisation.png';
const imgIA = '/assets/r2c/ia.png';
const imgWireframes = '/assets/r2c/wireframes.png';
const imgScreenReorder1 = '/assets/r2c/screen-reorder-1.png';
const card2Animation = '/assets/r2c/card2-animation.riv';
const imgScreenReorder3 = '/assets/r2c/screen-reorder-3.png';
const imgScreenReorder4 = '/assets/r2c/screen-reorder-4.png';
const imgDesignSystem = '/assets/r2c/design-system.png';
/** Place the file at `public/assets/r2c/seamless-checkout.mp4` or update this path. */
const videoSeamlessCheckout = '/assets/r2c/seamless-checkout.mp4';
/** Place the file at `public/assets/r2c/digitization.mp4` or update this path. */
const videoDigitization = '/assets/r2c/digitization.mp4';
/** Place the file at `public/assets/r2c/fast-checkout.mp4` or update this path. */
const videoFastCheckout = '/assets/r2c/fast-checkout.mp4';
/** Place the file at `public/assets/r2c/ftue.mp4` or update this path. */
const videoFtue = '/assets/r2c/ftue.mp4';

function MediaImage({
  src,
  bordered,
  plain,
  hero,
  cardBg,
  fill,
  className,
}: {
  src: string;
  bordered?: boolean;
  plain?: boolean;
  hero?: boolean;
  cardBg?: boolean;
  fill?: string;
  className?: string;
}) {
  const wrapClass = [
    styles.media,
    plain && styles.mediaPlain,
    bordered && styles.mediaBordered,
    cardBg && styles.mediaCardBg,
    hero && styles.mediaHero,
    bordered && !hero && !plain && styles.mediaFigure,
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

function Card2Animation() {
  const { RiveComponent } = useRive({
    src: card2Animation,
    stateMachines: 'State Machine 1',
    autoplay: true,
    layout: card2Layout,
  });

  return (
    <div className={styles.phoneShot}>
      <RiveComponent className={styles.phoneRiveCanvas} aria-hidden="true" />
    </div>
  );
}

function PhoneRowScroller() {
  return (
    <div className={styles.phoneRowSection}>
      <div className={styles.phoneRow} data-node-id="143:746">
        <img className={styles.phoneShot} alt="" src={imgScreenReorder1} loading="lazy" decoding="async" data-node-id="143:748" />
        <Card2Animation />
        <img className={styles.phoneShot} alt="" src={imgScreenReorder3} loading="lazy" decoding="async" data-node-id="143:751" />
        <img className={styles.phoneShot} alt="" src={imgScreenReorder4} loading="lazy" decoding="async" data-node-id="143:752" />
      </div>
    </div>
  );
}

export function R2cProject() {
  useLayoutEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.page} data-node-id="143:536" data-name="r2c project">
        <div className={styles.main}>
          <div className={styles.heroLead}>
            <header className={styles.sectionText} data-node-id="143:538">
              <div className={styles.stack60}>
                <div className={styles.backRow} data-node-id="143:539">
                  <Link className={styles.backLink} to="/" data-node-id="143:540" data-muted>
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

                <div className={`${styles.textBlock} ${styles.stack0}`} data-node-id="143:555">
                  <p className={styles.primary} data-node-id="143:556">
                    r2c - reorder
                  </p>
                  <p className={styles.secondary} data-node-id="143:557">
                    boosting 23% cashless adoption with behavioural design
                  </p>
                </div>
              </div>
            </header>

            <MediaImage
              src={imgHero}
              hero
              fill="var(--hero-media-surface)"
              className={styles.heroLeadImage}
            />

            <div className={`${styles.sectionText} ${styles.projectMeta}`}>
              <div className={styles.stack12} data-node-id="143:558">
                <div className={styles.metaRow} data-node-id="143:559">
                  <div className={styles.metaItem} data-node-id="143:560">
                    <p className={styles.secondary} data-node-id="143:561">
                      product
                    </p>
                    <p className={styles.primary} data-node-id="143:563">
                      medibuddy
                    </p>
                  </div>
                  <div className={styles.metaItem} data-node-id="143:565">
                    <p className={styles.secondary} data-node-id="143:566">
                      role
                    </p>
                    <p className={styles.primary} data-node-id="143:568">
                      product designer
                    </p>
                  </div>
                  <div className={styles.metaItem} data-node-id="143:570">
                    <p className={styles.secondary} data-node-id="143:571">
                      duration
                    </p>
                    <p className={styles.primary} data-node-id="143:573">
                      6 months
                    </p>
                  </div>
                  <div className={`${styles.metaItem} ${styles.metaItemWide}`} data-node-id="143:575">
                    <p className={styles.secondary} data-node-id="143:576">
                      skills
                    </p>
                    <p className={styles.primary} data-node-id="143:577">
                      ideation, visual direction and ui design, prototyping and testing, component
                      library for design system, dev handoff and feedback.
                    </p>
                  </div>
                </div>
                <div className={`${styles.metaItem} ${styles.metaItemFull}`} data-node-id="143:579">
                  <p className={styles.secondary} data-node-id="143:580">
                    team
                  </p>
                  <p className={styles.primary} data-node-id="143:582">
                    2 product designers, 1 developer, 1 qa, 1 pm
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.sectionText} ${styles.heroLeadIntro}`}>
              <div className={`${styles.textBlock} ${styles.stack8}`} data-node-id="143:584">
                <p className={styles.primary} data-node-id="143:585">
                  mediBuddy, a b2b2c digital healthcare platform, offers corporate employees services
                  like consultations, lab tests, and medicine delivery. employee benefits allows the
                  use of a pre-funded wallet (&quot;<strong>cashless</strong>&quot;) or{' '}
                  <strong>reimbursement</strong> of any out-of-pocket payment.
                </p>
                <p className={styles.primary} data-node-id="143:586">
                  this project aimed to increase cashless transactions, which were significantly lower
                  than reimbursements. we wanted to create a smooth and personalised reordering
                  process that leveraged digitised reimbursement data &amp; would encourage customers
                  to switch from reimbursements to cashless payments.
                </p>
                <p className={styles.primary} data-node-id="143:587">
                  this initiative was projected to generate <strong>₹100 crore</strong> in annual
                  revenue and improve customer satisfaction and retention.
                </p>
              </div>
            </div>
          </div>

          <section className={styles.sectionText} data-node-id="143:589">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="143:599">
              <div className={styles.stack0} data-node-id="143:600">
                <p className={styles.heading} data-node-id="143:601">
                  business challenge
                </p>
                <p className={styles.subheading} data-node-id="143:602">
                  how might we boost cashless orders
                </p>
              </div>
              <p className={styles.primary} data-node-id="143:603">
                medibuddy exclusively generates revenue from cashless orders, not reimbursements.
                however, <strong>only</strong> <span className={styles.accentRed}>15%</span>{' '}
                <strong>users ordered cashless</strong>
              </p>
              <p className={styles.primary} data-node-id="143:604">
                a major opportunity to increase revenue lied in shifting users from reimbursements to
                cashless payments. enabling hassle free reorders became the gateway to changing this
                user behaviour.
              </p>
              <p className={styles.primary} data-node-id="143:606">
                reorders were frequent:
              </p>
              <div className={styles.statGrid} data-node-id="143:610">
                <div className={styles.statCard} data-node-id="143:611">
                  <p className={styles.statValue} data-node-id="143:612">
                    32%
                  </p>
                  <p className={styles.statLabel} data-node-id="143:613">
                    of total users had repeating orders using the same prescription
                  </p>
                </div>
                <div className={styles.statCard} data-node-id="143:614">
                  <p className={styles.statValue} data-node-id="143:615">
                    70%
                  </p>
                  <p className={styles.statLabel} data-node-id="143:616">
                    of total users were chronic illness patients likely to reorder services
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="143:617">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="143:627">
              <div className={styles.stack0} data-node-id="143:628">
                <p className={styles.heading} data-node-id="143:629">
                  understanding pain points
                </p>
                <p className={styles.subheading} data-node-id="143:630">
                  users were frustrated...
                </p>
              </div>
              <p className={styles.primary} data-node-id="143:631">
                We conducted <strong>100 user calls</strong> with users across various corporates, pan
                India to gather insights about their struggles with their reimbursement process. Here is
                what we found:
              </p>
            </div>
          </section>

          <MediaImage
            src={imgUserCalls}
            plain
            bordered
            className={`${styles.framedPlainImage} ${styles.userCallsImage}`}
          />

          <section className={`${styles.sectionText} ${styles.stack60}`} data-node-id="143:633">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="143:643">
              <p className={styles.numberedHeading} data-node-id="143:644">
                <span data-node-id="143:645">01</span>
                <span data-node-id="143:646">convoluted reimbursement process ~</span>
              </p>
              <div className={styles.stack20} data-node-id="143:647">
                <div className={styles.statCard} data-node-id="143:648">
                  <p className={styles.statValue} data-node-id="143:649">
                    62%
                  </p>
                  <p className={styles.statLabel} data-node-id="143:650">
                    users expressed one or more issues with the reimbursement process
                  </p>
                </div>
                <ul className={styles.bulletList} data-node-id="143:651">
                  <li data-node-id="143:652">lengthy processes (1 - 2 weeks)</li>
                  <li data-node-id="143:653">claims get rejected frequently</li>
                  <li data-node-id="143:654">unclear policy and coverage guidelines</li>
                </ul>
              </div>
            </div>

            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="143:655">
              <p className={styles.numberedHeading} data-node-id="143:656">
                <span data-node-id="143:657">02</span>
                <span data-node-id="143:658">cashless: better but with caveats ~</span>
              </p>
              <div className={styles.stack8} data-node-id="143:659">
                <p className={styles.primary} data-node-id="143:660">
                  cashless was <strong>instant</strong>, <strong>hassle free</strong> and there
                  wasn&apos;t a chance of claims getting rejected.
                </p>
                <p className={styles.primary} data-node-id="143:661">
                  however converting users to cashless was <strong>NOT</strong> going to be easy,
                  because:
                </p>
              </div>
              <div className={styles.stack20} data-node-id="143:662">
                <div className={styles.statCard} data-node-id="143:663">
                  <p className={styles.statValue} data-node-id="143:664">
                    51%
                  </p>
                  <p className={styles.statLabel} data-node-id="143:665">
                    users also expressed frustrations related to the cashless process
                  </p>
                </div>
                <ul className={styles.bulletList} data-node-id="143:666">
                  <li data-node-id="143:667">doctors or medicines not available in user&apos;s area</li>
                  <li data-node-id="143:668">lack of trust in online healthcare</li>
                  <li data-node-id="143:669">lack of understanding of the cashless system</li>
                  <li data-node-id="143:670">unaware of their health benefits</li>
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="143:671">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="143:681">
              <div className={styles.stack0} data-node-id="143:682">
                <p className={styles.heading} data-node-id="143:683">
                  design thinking
                </p>
                <p className={styles.subheading} data-node-id="143:684">
                  brainstorming solutions
                </p>
              </div>
              <p className={styles.primary} data-node-id="143:685">
                Collaborated with the PMs of each service line, Operations, Tech, and the CEO in an
                Affinity Mapping session to deeply analyze user pain points, which guided the
                development of our solution themes.
              </p>
            </div>
          </section>

          <MediaImage src={imgAffinity} plain bordered className={styles.framedPlainImage} />

          <section className={styles.sectionText} data-node-id="143:687">
            <div className={styles.textBlock} data-node-id="143:697">
              <p className={styles.heading} data-node-id="143:699">
                prioritisation matrix
              </p>
            </div>
          </section>

          <MediaImage src={imgPrioritisation} plain bordered className={styles.framedPlainImage} />

          <section className={styles.sectionText} data-node-id="143:702">
            <div className={styles.textBlock} data-node-id="143:712">
              <p className={styles.heading} data-node-id="143:714">
                information architecture
              </p>
            </div>
          </section>

          <MediaImage src={imgIA} plain bordered className={styles.framedPlainImage} />

          <section className={styles.sectionText} data-node-id="143:717">
            <div className={styles.textBlock} data-node-id="143:727">
              <p className={styles.heading} data-node-id="143:729">
                wireframes and early designs
              </p>
            </div>
          </section>

          <MediaImage src={imgWireframes} plain bordered className={styles.framedPlainImage} />

          <section className={styles.sectionText} data-node-id="143:732">
            <div className={styles.textBlock} data-node-id="143:742">
              <p className={styles.heading} data-node-id="143:744">
                solution
              </p>
              <p className={styles.subheading} data-node-id="143:745">
                driving cashless orders through new reorder flow
              </p>
            </div>
          </section>

          <PhoneRowScroller />

          <section className={styles.sectionText} data-node-id="143:753">
            <div className={`${styles.textBlock} ${styles.stack20}`} data-node-id="143:763">
              <p className={styles.heading} data-node-id="143:765">
                effortless checkout process
              </p>
              <ul className={styles.bulletList} data-node-id="143:766">
                <li data-node-id="143:767">
                  <strong>simplified checkout:</strong> easily fill and verify required details before
                  purchase.
                </li>
                <li data-node-id="143:768">
                  <strong>add beneficiary on-the-go:</strong> quickly include a beneficiary during
                  checkout if needed.
                </li>
              </ul>
            </div>
          </section>

          <MediaVideo src={videoSeamlessCheckout} bordered title="Seamless checkout" />

          <section className={styles.sectionText} data-node-id="143:770">
            <div className={`${styles.textBlock} ${styles.stack20}`} data-node-id="143:780">
              <p className={styles.heading} data-node-id="143:782">
                service specific checkout flows
              </p>
              <ul className={styles.bulletList} data-node-id="143:783">
                <li data-node-id="143:784">
                  <strong>view original prescription:</strong> easily access the digitized prescription
                  of each reorder card.
                </li>
                <li data-node-id="143:785">
                  <strong>report card issues instantly:</strong> Quickly flag and resolve any problems,
                  ensuring user trust and convenience for the user.
                </li>
              </ul>
            </div>
          </section>

          <MediaVideo src={videoDigitization} bordered title="Digitization" />

          <section className={styles.sectionText} data-node-id="143:787">
            <div className={`${styles.textBlock} ${styles.stack20}`} data-node-id="143:797">
              <div className={styles.stack0} data-node-id="143:798">
                <p className={styles.subheading} data-node-id="143:799">
                  experiment
                </p>
                <p className={styles.heading} data-node-id="143:800">
                  new one page checkout
                </p>
              </div>
              <ul className={styles.bulletList} data-node-id="143:801">
                <li data-node-id="143:802">
                  <strong>experience unification:</strong> reduced steps and cognitive load by
                  consolidating information, enabling faster transactions and laying the foundation for
                  a unified checkout experience.
                </li>
                <li data-node-id="143:803">
                  <strong>focus on speed:</strong> the design prioritizes efficiency, enabling users to
                  complete transactions in seconds, improving overall satisfaction.
                </li>
              </ul>
            </div>
          </section>

          <MediaVideo src={videoFastCheckout} bordered title="Fast checkout" />

          <section className={styles.sectionText} data-node-id="143:805">
            <div className={`${styles.textBlock} ${styles.stack20}`} data-node-id="143:815">
              <p className={styles.heading} data-node-id="143:818">
                FTUE and storytelling
              </p>
              <ul className={styles.bulletList} data-node-id="143:819">
                <li data-node-id="143:820">
                  <strong>guided onboarding:</strong> a prominent FTUE nudge introduces the reorder
                  feature, ensuring users are aware of its value proposition from the start.
                </li>
                <li data-node-id="143:821">
                  <strong>engaging animation:</strong> a scanning animation explains how reimbursement
                  data is digitized into reorder cards, doubling as a loading screen while APIs fetch
                  data.
                </li>
                <li data-node-id="143:822">
                  <strong>delightful introduction:</strong> the animation creates a &quot;wow&quot;
                  moment, highlighting the platform&apos;s ability to simplify healthcare reordering and
                  build user confidence.
                </li>
              </ul>
            </div>
          </section>

          <MediaVideo src={videoFtue} bordered title="FTUE" />

          <section className={styles.sectionText} data-node-id="143:824">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="143:834">
              <p className={styles.heading} data-node-id="143:836">
                component playground and design system
              </p>
              <p className={styles.primary} data-node-id="143:838">
                facilitated developer independence by creating a <strong>component playground</strong>{' '}
                for component states and edge case testing. this enabled seamless UI builds, especially
                for junior developers, and contributed reusable organisms to our mozaic design system.
              </p>
            </div>
          </section>

          <MediaImage src={imgDesignSystem} bordered cardBg />

          <section className={styles.sectionText} data-node-id="143:841">
            <div className={`${styles.textBlock} ${styles.stack28}`} data-node-id="143:851">
              <div className={styles.stack12} data-node-id="143:852">
                <div className={styles.stack0} data-node-id="143:853">
                  <p className={styles.heading} data-node-id="143:854">
                    feedback and iterations
                  </p>
                  <p className={styles.subheading} data-node-id="143:855">
                    validating the design with more users
                  </p>
                </div>
                <p className={styles.primary} data-node-id="143:856">
                  conducted usability tests with 15 random medibuddy employees and 10 external
                  corporate users to gather actionable feedbacks to improve upon.
                </p>
                <p className={styles.primary} data-node-id="143:858">
                  usability testing feedback
                </p>
                <div className={styles.statGridFour} data-node-id="143:862">
                  <div className={styles.statCard} data-node-id="143:863">
                    <p className={styles.statValue} data-node-id="143:864">
                      4.7
                    </p>
                    <p className={styles.statLabel} data-node-id="143:865">
                      ease of navigation
                    </p>
                  </div>
                  <div className={styles.statCard} data-node-id="143:866">
                    <p className={styles.statValue} data-node-id="143:867">
                      4.2
                    </p>
                    <p className={styles.statLabel} data-node-id="143:868">
                      user trust
                    </p>
                  </div>
                  <div className={styles.statCard} data-node-id="143:869">
                    <p className={styles.statValue} data-node-id="143:870">
                      4.6
                    </p>
                    <p className={styles.statLabel} data-node-id="143:871">
                      information clarity
                    </p>
                  </div>
                  <div className={styles.statCard} data-node-id="143:872">
                    <p className={styles.statValue} data-node-id="143:873">
                      4.5
                    </p>
                    <p className={styles.statLabel} data-node-id="143:874">
                      overall satisfaction
                    </p>
                  </div>
                </div>
              </div>

              <div className={styles.stack16} data-node-id="143:875">
                <p className={styles.heading} data-node-id="143:877">
                  actionable insights
                </p>
                <div className={styles.stack12} data-node-id="143:879">
                  <div className={styles.insightRow} data-node-id="143:880">
                    <span className={styles.insightIndex} data-node-id="143:881">
                      01
                    </span>
                    <div className={styles.insightBody} data-node-id="143:882">
                      <p className={styles.strong} data-node-id="143:883">
                        user missed the &apos;reorder&apos; tab.
                      </p>
                      <p className={styles.primary} data-node-id="143:884">
                        added FTUE with a tooltip nudging on the reorder tab.
                      </p>
                    </div>
                  </div>
                  <div className={styles.insightRow} data-node-id="143:885">
                    <span className={styles.insightIndex} data-node-id="143:886">
                      02
                    </span>
                    <div className={styles.insightBody} data-node-id="143:887">
                      <p className={styles.strong} data-node-id="143:888">
                        improving cart differentiation
                      </p>
                      <p className={styles.primary} data-node-id="143:889">
                        some users struggled to distinguish between similar carts. to resolve this,
                        added order dates to reorder cards, providing clear differentiation.
                      </p>
                    </div>
                  </div>
                  <div className={styles.insightRow} data-node-id="143:890">
                    <span className={styles.insightIndex} data-node-id="143:891">
                      03
                    </span>
                    <div className={styles.insightBody} data-node-id="143:892">
                      <p className={styles.strong} data-node-id="143:893">
                        dead-end flow when verifying reimbursement records
                      </p>
                      <p className={styles.primary} data-node-id="143:894">
                        added an &quot;order again&quot; CTA on the record verification page.
                      </p>
                    </div>
                  </div>
                  <div className={styles.insightRow} data-node-id="143:895">
                    <span className={styles.insightIndex} data-node-id="143:896">
                      04
                    </span>
                    <div className={styles.insightBody} data-node-id="143:897">
                      <p className={styles.strong} data-node-id="143:898">
                        successful unified checkout test
                      </p>
                      <p className={styles.primary} data-node-id="143:899">
                        users found the new checkout positive, but a tech-stack upgrade is required for
                        future release.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="143:900">
            <div className={`${styles.textBlock} ${styles.stack28}`} data-node-id="143:910">
              <div className={styles.stack12} data-node-id="143:911">
                <div className={styles.stack0} data-node-id="143:912">
                  <p className={styles.heading} data-node-id="143:913">
                    impact created
                  </p>
                  <p className={styles.subheading} data-node-id="143:914">
                    positive results and road to 100 cr
                  </p>
                </div>
                <p className={styles.primary} data-node-id="143:916">
                  behaviour shift towards cashless adoption
                </p>
                <div className={styles.impactGrid} data-node-id="143:920">
                  <div className={`${styles.statCard} ${styles.statCardTall}`} data-node-id="143:921">
                    <p className={styles.strong} data-node-id="143:922">
                      cashless adoption rate increase
                    </p>
                    <div className={styles.stack8} data-node-id="143:923">
                      <p className={styles.cardText} data-node-id="143:924">
                        15% to <strong>23%</strong>
                      </p>
                      <p className={styles.cardText} data-node-id="143:925">
                        within 3 months of launching the r2c reorder feature
                      </p>
                    </div>
                  </div>
                  <div className={`${styles.statCard} ${styles.statCardTall}`} data-node-id="143:926">
                    <p className={styles.strong} data-node-id="143:927">
                      &apos;only reimbursement&apos; percentage decrease
                    </p>
                    <div className={styles.stack8} data-node-id="143:928">
                      <p className={styles.cardText} data-node-id="143:929">
                        40% to <strong>21.7%</strong>
                      </p>
                      <p className={styles.cardText} data-node-id="143:930">
                        of total users did pure reimbursement, showing strong cashless signals
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.stack16} data-node-id="143:931">
                <p className={styles.heading} data-node-id="143:933">
                  user engagement improved
                </p>
                <div className={styles.stack12} data-node-id="143:935">
                  <div className={styles.metricRow} data-node-id="143:936">
                    <span className={styles.metricDash} data-node-id="143:937">
                      -
                    </span>
                    <div className={styles.metricBody} data-node-id="143:938">
                      <p className={styles.strong} data-node-id="143:939">
                        MAU for release month
                      </p>
                      <p className={styles.secondary} data-node-id="143:940">
                        31% to 35%
                      </p>
                    </div>
                  </div>
                  <div className={styles.metricRow} data-node-id="143:941">
                    <span className={styles.metricDash} data-node-id="143:942">
                      -
                    </span>
                    <div className={styles.metricBody} data-node-id="143:943">
                      <p className={styles.strong} data-node-id="143:944">
                        DAU for release month
                      </p>
                      <p className={styles.secondary} data-node-id="143:945">
                        14% to 20%
                      </p>
                    </div>
                  </div>
                  <div className={styles.metricRow} data-node-id="143:946">
                    <span className={styles.metricDash} data-node-id="143:947">
                      -
                    </span>
                    <div className={styles.metricBody} data-node-id="143:948">
                      <p className={styles.strong} data-node-id="143:949">
                        login rates after 3 months
                      </p>
                      <p className={styles.secondary} data-node-id="143:950">
                        60% to 80%
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className={styles.stack0} data-node-id="143:951">
                <p className={styles.heading} data-node-id="143:953">
                  revenue projections exceeded
                </p>
                <div className={styles.stack0} data-node-id="143:955">
                  <div className={styles.revenueItem} data-node-id="143:956">
                    <p className={styles.strong} data-node-id="143:957">
                      average GMV after 3 months
                    </p>
                    <p className={styles.secondary} data-node-id="143:958">
                      12 cr
                    </p>
                  </div>
                  <div className={styles.revenueItem} data-node-id="143:959">
                    <p className={styles.strong} data-node-id="143:960">
                      estimated revenue from r2c for FY26-27
                    </p>
                    <p className={styles.secondary} data-node-id="143:961">
                      200 cr!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="143:962">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="143:972">
              <p className={styles.heading} data-node-id="143:974">
                learnings
              </p>
              <ul className={styles.bulletList} data-node-id="143:976">
                <li data-node-id="143:977">
                  <strong>transparency builds trust:</strong> clearly explaining how reimbursement data
                  was digitized helped build trust and encouraged adoption.
                </li>
                <li data-node-id="143:978">
                  <strong>dynamic personalization works:</strong> dynamically arranging service carousels
                  based on user behavior improved engagement.
                </li>
                <li data-node-id="143:979">
                  <strong>iterative testing is key:</strong> usability testing uncovered critical issues
                  that were addressed before launch.
                </li>
              </ul>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
