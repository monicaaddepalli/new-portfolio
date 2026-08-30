import { useLayoutEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../components/OptimizedImage';
import { applyTheme } from '../../lib/theme';
import chrome from '../MozaicProjectV2/MozaicProjectV2.module.css';
import extras from '../MozaicDeepDiveV2/MozaicDeepDiveV2.module.css';

const imgTokenisation = '/assets/mozaic/foundations/tokenisation.png';
const imgTypography = '/assets/v2/mozaic/typography.png';
const imgObjectStyles = '/assets/mozaic/foundations/object-styles.png';
const videoTypography = '/assets/mozaic/foundations/trial 1.mp4';
const iconText = '/assets/v2/mozaic/icon-text.png';
const iconToken = '/assets/v2/mozaic/icon-token.png';

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

function Chip({
  label,
  icon,
}: {
  label: string;
  icon: 'text' | 'token';
}) {
  return (
    <span className={extras.chip}>
      <span className={extras.chipIcon} aria-hidden="true">
        <img
          src={icon === 'text' ? iconText : iconToken}
          alt=""
          width={24}
          height={24}
        />
      </span>
      {label}
    </span>
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
    <section className={chrome.copy}>
      <h2 className={chrome.heading}>{heading}</h2>
      {children}
    </section>
  );
}

function Figure({
  src,
  width,
  height,
  caption,
  maxWidth,
}: {
  src: string;
  width: number;
  height: number;
  caption?: string;
  maxWidth?: number;
}) {
  return (
    <div
      className={`${extras.mediaBlock} ${maxWidth === 800 ? extras.figure800 : ''}`}
    >
      <figure className={`${extras.figureNatural} ${maxWidth === 800 ? extras.figure800 : ''}`}>
        <OptimizedImage src={src} alt="" width={width} height={height} />
      </figure>
      {caption ? <p className={extras.caption}>{caption}</p> : null}
    </div>
  );
}

export function MozaicFoundationsV2() {
  useLayoutEffect(() => {
    applyTheme('light');
  }, []);

  return (
    <div className={chrome.page} data-name="mozaic foundations">
      <div className={chrome.headerBlur} aria-hidden="true">
        <div className={chrome.headerBlurBg} />
        <div className={`${chrome.headerBlurFilter} ${chrome.headerBlurSoft}`} />
        <div className={`${chrome.headerBlurFilter} ${chrome.headerBlurMedium}`} />
        <div className={`${chrome.headerBlurFilter} ${chrome.headerBlurStrong}`} />
        <div className={`${chrome.headerBlurFilter} ${chrome.headerBlurExtra}`} />
      </div>

      <div className={chrome.shell}>
        <header className={chrome.header}>
          <a className={chrome.identity} href="/" aria-label="Home">
            monica addepalli
          </a>
        </header>

        <main className={chrome.main}>
          <div className={chrome.intro}>
            <nav className={extras.crumb} aria-label="Breadcrumb">
              <Link className={extras.crumbBrand} to="/work/mozaic-design-system">
                <span className={extras.crumbBrandText}>mozaic ds</span>
              </Link>
              <span className={extras.crumbSep} aria-hidden="true">/</span>
              <span className={extras.crumbCurrent}>foundations</span>
            </nav>
            <h1 className={chrome.title}>
              foundation &amp;
              <br />
              token architecture
            </h1>
          </div>

          <Copy heading="overview">
            <div className={chrome.prose}>
              <p>
                When I joined MediBuddy, designers were shipping independently across services, with
                no shared design foundations to ensure visual consistency.
              </p>
              <p className={extras.subhead}>goal:</p>
              <ul className={chrome.bullets}>
                {goalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Copy>

          <section className={chrome.wide}>
            <h2 className={`${chrome.heading} ${chrome.wideHeading}`}>tokenisation</h2>
            <div className={extras.mediaThenCopy}>
              <Figure src={imgTokenisation} width={2000} height={624} maxWidth={800} />
              <div className={chrome.copy}>
                <div className={chrome.prose}>
                  <p>
                    Designers directly interacted with semantic tokens instead of primitive values.
                    Primitive tokens existed underneath, but were intentionally hidden from
                    day-to-day usage.
                  </p>
                  <p>This decision reduced ambiguity.</p>
                  <p>
                    Designers chose <span className={extras.italic}>intent</span> (“body text”,
                    “surface fill”, “subtle border”) rather than <strong>values</strong> (“#FFFFFF”,
                    “#E5E7EB”).
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className={chrome.wide}>
            <h2 className={`${chrome.heading} ${chrome.wideHeading}`}>building typography system</h2>
            <div className={extras.mediaThenCopy}>
              <Figure src={imgTypography} width={3260} height={2160} maxWidth={800} />
              <div className={chrome.copy}>
                <div className={chrome.prose}>
                  <p>
                    Setting up a responsive typographic system was crucial in baking in consistency
                    in the system.
                  </p>
                  <ol className={chrome.numbers}>
                    {typographySteps.map((step, index) => (
                      <li key={index}>{step}</li>
                    ))}
                  </ol>
                  <p>
                    Now, instead of exposing raw typographic variables to designers, Mozaic used{' '}
                    <strong>semantic text styles</strong> such as:
                  </p>
                  <div className={extras.chipRow}>
                    {semanticStyles.map((style) => (
                      <Chip key={style} label={style} icon="text" />
                    ))}
                  </div>
                  <p>Each style internally referenced variables for:</p>
                  <div className={extras.chipRow}>
                    {styleVariables.map((variable) => (
                      <Chip key={variable} label={variable} icon="token" />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={chrome.wide}>
            <div className={extras.videoFrame}>
              <video
                className={extras.video}
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

          <section className={chrome.wide}>
            <h2 className={`${chrome.heading} ${chrome.wideHeading}`}>defining object styles</h2>
            <div className={extras.mediaThenCopy}>
              <div className={chrome.copy}>
                <p className={chrome.proseSingle}>
                  We also defined other core foundational elements like Border Width, Border
                  Radius, Elevation etc. in a similar semantic format keeping scalability and
                  headless architecture in mind.
                </p>
              </div>
              <Figure
                src={imgObjectStyles}
                width={2000}
                height={1917}
                maxWidth={800}
              />
            </div>
          </section>

          <section className={chrome.wide}>
            <div className={extras.mediaThenCopy}>
              <div className={chrome.copyInner}>
                <h2 className={chrome.heading}>applied strategies</h2>
                <p className={chrome.proseSingle}>
                  As the system evolved, some key decisions were taken
                </p>
              </div>
              <div className={chrome.principleGrid}>
                {strategies.map((strategy) => (
                  <article key={strategy.index} className={chrome.principleCard}>
                    <p className={chrome.principleIndex}>{strategy.index}</p>
                    <h3 className={chrome.principleTitle}>{strategy.title}</h3>
                    <p className={chrome.principleBody}>{strategy.body}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
