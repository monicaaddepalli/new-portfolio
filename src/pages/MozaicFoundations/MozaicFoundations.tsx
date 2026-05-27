import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { applyTheme, getInitialTheme } from '../../lib/theme';
import styles from './MozaicFoundations.module.css';

const imgTokenisation = '/assets/mozaic/foundations/tokenisation.png';
const imgTypography = '/assets/mozaic/foundations/typography.png';
const imgObjectStyles = '/assets/mozaic/foundations/object-styles.png';
const videoTrial1 = '/assets/mozaic/foundations/trial 1.mp4';

const goalItems = [
  'Create a shared language across services',
  'Encode consistency into the system itself',
  'Reduce subjective interpretation of UI decisions',
  'Prepare the system for scale, theming, and future workflows',
];

const typographySteps = [
  'We started with selecting a proven typeface for scalable interfaces: Lexend Deca.',
  'Defined a responsive Type scale across breakpoints using a scaling and a responsiveness factor.',
  'Tokenised the values into primitive Typographic variables',
];

const semanticStyles = ['Caption', 'label', 'body', 'title', 'heading'];

const styleVariables = [
  'Font Family',
  'font size',
  'font weight',
  'line height',
  'letter spacing',
  'Paragraph Spacing',
];

const strategies = [
  {
    index: '01',
    title: 'Prioritize simplicity over completeness.',
    body: 'To drive early adoption, we avoided over-segmenting tokens. Starting with a lean set of tokens prevented designers from being overwhelmed and allowed the system to scale based on real usage.',
  },
  {
    index: '02',
    title: 'Embed state tokens in the component.',
    body: 'Tokens for hover, focus, active etc. were baked into components. This hidden semantics approach reduced the decision-making fatigue for designers while ensuring consistency.',
  },
  {
    index: '03',
    title: 'Enforce Figma-Engineering parity.',
    body: 'Foundations were collaboratively developed to ensure Figma mirrored the codebase exactly. This eliminated handoff friction and accelerating development.',
  },
  {
    index: '04',
    title: 'Abstract through usage, not theory.',
    body: 'We allowed the system to evolve through active feedback loops. Real-world usages signaled what to add as tokens and semantics across the system.',
  },
];

function MediaImage({ src, natural }: { src: string; natural?: boolean }) {
  return (
    <img
      className={natural ? styles.mediaImgNatural : styles.mediaImg}
      alt=""
      src={src}
      loading="lazy"
      decoding="async"
    />
  );
}

function MediaVideo({ src, title }: { src: string; title?: string }) {
  return (
    <div className={styles.mediaVideoFrame}>
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

export function MozaicFoundations() {
  useLayoutEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.page} data-node-id="250:2590" data-name="foundations">
        <div className={styles.main}>
          <header className={styles.sectionText} data-node-id="250:2593">
            <div className={`${styles.textBlock} ${styles.stack60}`}>
              <div className={styles.backRow} data-node-id="250:2594">
                <Link
                  className={styles.backLink}
                  to="/work/mozaic-design-system"
                  data-node-id="250:2595"
                  data-muted
                >
                  <span className={styles.backIconWrap} aria-hidden="true">
                    <svg className={styles.backIcon} viewBox="0 0 16 16" width={16} height={16}>
                      <path
                        fill="currentColor"
                        d="M5.50312 12.0865L1.41667 8L5.50312 3.91354L6.27729 4.6875L3.50646 7.45833H14.5833V8.54167H3.50646L6.27729 11.3125L5.50312 12.0865Z"
                      />
                    </svg>
                  </span>
                  <span className={styles.backLinkLabel}>back to mozaic</span>
                </Link>
              </div>

              <div className={styles.stack32} data-node-id="250:2609">
                <p className={styles.heading} data-node-id="250:2611">
                  Foundation &amp; Token Architecture
                </p>

                <div className={styles.stack12} data-node-id="250:2629">
                  <p className={styles.primary} data-node-id="250:2630">
                    When I joined MediBuddy, designers were shipping independently across services,
                    with no shared design foundations to ensure visual consistency.
                  </p>
                  <p className={styles.strong} data-node-id="250:2631">
                    goal:
                  </p>
                  <div className={styles.stack4} data-node-id="250:2632">
                    <ul className={styles.bulletList}>
                      {goalItems.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <section className={styles.sectionBlock} data-node-id="250:2637">
            <div className={styles.sectionText}>
              <div className={`${styles.textBlock} ${styles.stack12}`}>
                <p className={styles.heading} data-node-id="250:2648">
                  Tokenisation
                </p>
                <MediaImage src={imgTokenisation} natural />
                <div className={styles.stack12}>
                  <p className={styles.primary} data-node-id="250:2650">
                    Designers directly interacted with semantic tokens instead of primitive values.
                    Primitive tokens existed underneath, but were intentionally hidden from day-to-day
                    usage.
                  </p>
                  <p className={styles.primary} data-node-id="250:2651">
                    This decision reduced ambiguity.
                  </p>
                  <p className={styles.primary} data-node-id="250:2652">
                    Designers chose <strong>intent</strong> (“body text”, “surface fill”, “subtle
                    border”) rather than <strong>values</strong> (“#FFFFFF”, “#E5E7EB”).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={styles.sectionBlock} data-node-id="250:2653">
            <div className={styles.sectionText}>
              <div className={`${styles.textBlock} ${styles.stack12}`}>
                <p className={styles.heading} data-node-id="250:2664">
                  Building Typography System
                </p>
                <MediaImage src={imgTypography} natural />
                <div className={styles.stack20}>
                  <p className={styles.primary} data-node-id="250:2666">
                    Setting up a responsive typographic system was crucial in baking in consistency in
                    the system.
                  </p>
                  <ol className={styles.orderedList} data-node-id="250:2667">
                    {typographySteps.map((step) => (
                      <li key={step}>{step}</li>
                    ))}
                  </ol>
                  <div className={styles.stack12} data-node-id="250:2671">
                    <p className={styles.primary} data-node-id="250:2672">
                      Now, Instead of exposing raw Tpographic variables to designers, Mozaic used
                      Semantic text styles such as:
                    </p>
                    <ol className={styles.inlineStyleList} data-node-id="250:2673">
                      {semanticStyles.map((style) => (
                        <li key={style}>{style}</li>
                      ))}
                    </ol>
                  </div>
                  <div className={styles.stack12} data-node-id="250:2679">
                    <p className={styles.primary} data-node-id="250:2680">
                      Each style internally referenced variables for:
                    </p>
                    <ol className={styles.orderedList} data-node-id="250:2681">
                      {styleVariables.map((variable) => (
                        <li key={variable}>{variable}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <div data-node-id="250:2688">
            <MediaVideo src={videoTrial1} title="Typography system" />
          </div>

          <section className={styles.sectionBlock} data-node-id="250:2689">
            <div className={styles.sectionText}>
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="250:2699">
                <p className={styles.heading} data-node-id="250:2700">
                  Defining Object Styles
                </p>
                <p className={styles.primary} data-node-id="250:2701">
                  We also defined other core foundational elements like Border Width, Border Radius,
                  Elevation etc. in a similar semantic format keeping scalability and headless
                  architecture in mind.
                </p>
                <MediaImage src={imgObjectStyles} natural />
              </div>
            </div>
          </section>

          <section className={styles.sectionText} data-node-id="250:2703">
            <div className={`${styles.textBlock} ${styles.stack20}`} data-node-id="250:2713">
              <p className={styles.heading} data-node-id="250:2714">
                Applied Strategies
              </p>
              <p className={styles.primary} data-node-id="250:2715">
                As the system evolved, some key decisions were taken
              </p>
              <div className={styles.principleGrid} data-node-id="250:2716">
                <div className={styles.principleRow}>
                  {strategies.slice(0, 2).map((strategy) => (
                    <article key={strategy.index} className={styles.principleCard}>
                      <p className={styles.principleCardIndex}>{strategy.index}</p>
                      <div className={styles.principleCardBody}>
                        <p className={styles.principleCardTitle}>{strategy.title}</p>
                        <p className={styles.principleCardText}>{strategy.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
                <div className={styles.principleRow}>
                  {strategies.slice(2).map((strategy) => (
                    <article key={strategy.index} className={styles.principleCard}>
                      <p className={styles.principleCardIndex}>{strategy.index}</p>
                      <div className={styles.principleCardBody}>
                        <p className={styles.principleCardTitle}>{strategy.title}</p>
                        <p className={styles.principleCardText}>{strategy.body}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
