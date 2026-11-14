import { type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import styles from './MozaicFoundations.module.css';

const imgTokenisation = '/assets/mozaic/foundations/tokenisation.png';
const imgTypography = '/assets/v2/mozaic/typography.png';
const imgObjectStyles = '/assets/mozaic/foundations/object-styles.png';
const videoTypography = '/assets/mozaic/foundations/trial%201.mp4';
const iconText = '/assets/v2/mozaic/icon-text.png';
const iconToken = '/assets/v2/mozaic/icon-token.png';

const MOZAIC_PATH = '/work/mozaicds';

const goalItems = [
  'Create a shared language across services',
  'Encode consistency into the system itself',
  'Reduce subjective interpretation of UI decisions',
  'Prepare the system for scale, theming, and future workflows',
];

const typographySteps: ReactNode[] = [
  <>
    We started with selecting a proven typeface for scalable interfaces:{' '}
    <strong>Lexend Deca</strong>.
  </>,
  'Defined a responsive type scale across breakpoints using a scaling and a responsiveness factor.',
  'Tokenised the values into primitive typographic variables',
];

const semanticStyles = ['Caption', 'Label', 'Body', 'Title', 'Heading'];

const styleVariables = [
  'Font Family',
  'Font Size',
  'Font Weight',
  'Line Height',
  'Letter Spacing',
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

function Chip({ label, icon }: { label: string; icon: 'text' | 'token' }) {
  return (
    <span className={styles.chip}>
      <span className={styles.chipIcon} aria-hidden="true">
        <img src={icon === 'text' ? iconText : iconToken} alt="" width={20} height={20} />
      </span>
      {label}
    </span>
  );
}

export function MozaicFoundations() {

  return (
    <div className={styles.page} data-name="mozaic foundations">
      <div className={styles.headerBlur} aria-hidden="true">
        <div className={styles.headerBlurBg} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurSoft}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurMedium}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurStrong}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurExtra}`} />
      </div>

      <article className={styles.article}>
        <div className={styles.media}>
          <Link className={styles.back} to={MOZAIC_PATH} data-header-link="" data-style="Body Mono">
            <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.7 2.3 1.6 8l5.1 5.7.9-.8L3.6 8.6H15V7.4H3.6l4-4.3z"
              />
            </svg>
            Mozaic DS
          </Link>
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title}>Foundation &amp; Token Architecture</h1>

          <section className={styles.section}>
            <div className={styles.prose}>
              <p>
                When I joined MediBuddy, designers were shipping independently across services, with
                no shared design foundations to ensure visual consistency.
              </p>
              <p data-style="Heading 2">Goal:</p>
              <ul className={styles.steps}>
                {goalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Tokenisation</h2>
            <img
              className={styles.figure}
              src={imgTokenisation}
              alt="Mozaic tokenisation diagram"
            />
            <div className={styles.prose}>
              <p>
                Designers directly interacted with semantic tokens instead of primitive values.
                Primitive tokens existed underneath, but were intentionally hidden from day-to-day
                usage.
              </p>
              <p>This decision reduced ambiguity.</p>
              <p>
                Designers chose <span className={styles.emphasis}>intent</span> (“body text”, “surface
                fill”, “subtle border”) rather than <strong>values</strong> (“#FFFFFF”, “#E5E7EB”).
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Building Typography System</h2>
            <img className={styles.figure} src={imgTypography} alt="Mozaic typography system" />
            <div className={styles.prose}>
              <p>
                Setting up a responsive typographic system was crucial in baking in consistency in
                the system.
              </p>
              <ol className={styles.steps}>
                {typographySteps.map((step, index) => (
                  <li key={index}>{step}</li>
                ))}
              </ol>
              <p>
                Now, instead of exposing raw typographic variables to designers, Mozaic used{' '}
                <strong>Semantic text styles</strong> such as:
              </p>
              <div className={styles.chipRow}>
                {semanticStyles.map((style) => (
                  <Chip key={style} label={style} icon="text" />
                ))}
              </div>
              <p>Each style internally referenced variables for:</p>
              <div className={styles.chipRow}>
                {styleVariables.map((variable) => (
                  <Chip key={variable} label={variable} icon="token" />
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.videoFrame}>
              <video
                src={videoTypography}
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                title="Typography system"
              />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Defining Object Styles</h2>
            <div className={styles.prose}>
              <p>
                We also defined other core foundational elements like Border Width, Border Radius,
                Elevation etc. in a similar semantic format keeping scalability and headless
                architecture in mind.
              </p>
            </div>
            <img
              className={styles.figure}
              src={imgObjectStyles}
              alt="Mozaic object styles"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Applied Strategies</h2>
            <p className={styles.proseLead}>
              As the system evolved, some key decisions were taken
            </p>
            <div className={styles.principleGrid}>
              {strategies.map((strategy) => (
                <article key={strategy.index} className={styles.principleCard}>
                  <span className={styles.principleIndex} aria-hidden="true">
                    {strategy.index}
                  </span>
                  <p className={styles.principleTitle}>{strategy.title}</p>
                  <p className={styles.principleBody}>{strategy.body}</p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
