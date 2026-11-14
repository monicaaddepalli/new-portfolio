import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../components/OptimizedImage';
import styles from './MozaicComponents.module.css';

const MOZAIC_PATH = '/work/mozaicds';

const imgGroups = '/assets/v2/mozaic/components/groups.png';
const imgApi = '/assets/v2/mozaic/components/api.png';
const imgPatterns = '/assets/v2/mozaic/components/patterns.png';
const imgExample1 = '/assets/v2/mozaic/components/example-1.webp';
const imgExample2 = '/assets/v2/mozaic/components/example-2.webp';
const imgHighlight1 = '/assets/v2/mozaic/components/highlight-1.webp';
const imgHighlight2 = '/assets/v2/mozaic/components/highlight-2.webp';
const imgHighlight3 = '/assets/v2/mozaic/components/highlight-3.webp';
const imgHighlight4 = '/assets/v2/mozaic/components/highlight-4.webp';
const imgHighlight5 = '/assets/v2/mozaic/components/highlight-5.webp';
const imgHighlight6 = '/assets/v2/mozaic/components/highlight-6.webp';
const imgHighlight7 = '/assets/v2/mozaic/components/highlight-7.webp';
const imgHighlight8 = '/assets/v2/mozaic/components/highlight-8.webp';
const imgHighlight9 = '/assets/v2/mozaic/components/highlight-9.webp';
const iconComponents = '/assets/v2/mozaic/icon-components.png';
const videoDocumentation = '/assets/v2/mozaic/components/documentation.mp4';
const imgDocumentationPoster = '/assets/v2/mozaic/components/documentation-poster.png';
const videoPatternDocs = '/assets/v2/mozaic/components/pattern-docs.mp4';
const imgPatternDocsPoster = '/assets/v2/mozaic/components/pattern-docs-poster.png';

const goalItems = [
  'Streamline design-to-dev handoff via unified components and patterns.',
  'Prevent reinvention of solutions by establishing shared component & pattern library.',
  'Drive faster iterations as product complexity grows.',
];

const componentGroups = ['actions', 'inputs', 'feedbacks', 'status', 'navigation'];

const apiBenefits = [
  'Designers and developers talk about components the same way.',
  'Handoffs become seamless.',
  'AI-assisted generation remains aligned with system constraints.',
];

const promotionRules = [
  {
    title: 'Proven reuse:',
    body: 'The organism is used across services and is not a local one time use.',
  },
  {
    title: 'Consistency was critical:',
    body: 'From a brand and experience perspective, it was essential to keep the component consistent.',
  },
  {
    title: 'Clear value:',
    body: 'It meaningfully reduced repeated decision-making or implementation effort across the team.',
  },
];

const varianceItems = [
  'Patterns emerged as localized solutions and graduated only after cross-service reuse.',
  'Intent and behavioural logic remained stable, even as UI changed across desktop, mobile, and app.',
  'Structural variations (eg: side sheets vs bottom sheets) shared the same hierarchy, actions, and rules.',
  'This ensured consistency across services while preserving platform-appropriate experiences.',
];

type HighlightSlide = { src: string; width: number; height: number };

const highlightRows: HighlightSlide[][] = [
  [
    { src: `${imgHighlight1}?v=7`, width: 1920, height: 1080 },
    { src: `${imgHighlight2}?v=7`, width: 1920, height: 1080 },
    { src: `${imgHighlight3}?v=7`, width: 1920, height: 1080 },
  ],
  [
    { src: `${imgHighlight4}?v=7`, width: 1920, height: 1080 },
    { src: `${imgHighlight5}?v=7`, width: 1920, height: 1080 },
    { src: `${imgHighlight6}?v=7`, width: 1920, height: 1080 },
  ],
  [
    { src: `${imgHighlight8}?v=7`, width: 1920, height: 1080 },
    { src: `${imgHighlight9}?v=7`, width: 1920, height: 1080 },
    { src: `${imgHighlight7}?v=7`, width: 1920, height: 1080 },
  ],
];

function Chip({ label }: { label: string }) {
  return (
    <span className={styles.chip}>
      <span className={styles.chipIcon} aria-hidden="true">
        <img src={iconComponents} alt="" width={20} height={20} />
      </span>
      {label}
    </span>
  );
}

function HighlightsRow({
  slides,
  reverse = false,
  eager = false,
}: {
  slides: HighlightSlide[];
  reverse?: boolean;
  eager?: boolean;
}) {
  const items =
    slides.length > 0
      ? slides
      : [
          { src: '', width: 16, height: 9 },
          { src: '', width: 16, height: 9 },
          { src: '', width: 16, height: 9 },
        ];
  const animate = slides.length > 0;
  const track = animate ? [...items, ...items] : items;
  const marqueeClass = reverse ? styles.highlightsMarqueeReverse : styles.highlightsMarquee;

  return (
    <div className={`${styles.highlightsViewport} ${animate ? '' : styles.highlightsScroll}`}>
      <div className={`${styles.highlightsTrack} ${animate ? marqueeClass : ''}`}>
        {track.map((slide, index) => {
          const isOriginal = index < items.length;
          return (
            <div
              key={`${slide.src}-${index}`}
              className={
                slide.src
                  ? styles.highlightsSlide
                  : `${styles.highlightsSlide} ${styles.highlightsPlaceholder}`
              }
            >
              {slide.src ? (
                <OptimizedImage
                  src={slide.src}
                  alt=""
                  width={slide.width}
                  height={slide.height}
                  priority={eager && isOriginal && index < 2}
                  loading={eager && isOriginal ? 'eager' : 'lazy'}
                />
              ) : null}
            </div>
          );
        })}
      </div>
    </div>
  );
}

function HighlightsTicker({ rows }: { rows: HighlightSlide[][] }) {
  return (
    <div className={styles.highlightsFrame} aria-label="Component highlights">
      {rows.map((slides, index) => (
        <HighlightsRow key={index} slides={slides} reverse={index % 2 === 1} eager />
      ))}
    </div>
  );
}

function DocsVideo({
  src,
  poster,
  title,
}: {
  src: string;
  poster: string;
  title: string;
}) {
  return (
    <div className={`${styles.mediaFrame} ${styles.mediaFrameBlue}`}>
      <video
        className={styles.docVideo}
        src={src}
        poster={poster}
        width={1920}
        height={1156}
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        title={title}
      />
    </div>
  );
}

export function MozaicComponents() {

  return (
    <div className={styles.page} data-name="mozaic components">
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
          <h1 className={styles.title}>Components &amp; Patterns</h1>

          <section className={styles.section}>
            <div className={styles.prose}>
              <p>
                Consultations, diagnostics, pharmacy, insurance, and wellness operated with distinct
                workflows and varying data densities. The challenge was to architect a unified framework
                that honored unique decision contexts while eliminating fragmented user experiences.
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
            <h2 className={styles.label}>Components</h2>
            <div className={styles.prose}>
              <p>
                Following Brad Frost&apos;s Atomic Design Principles, we first built the core components
                of these groups:
              </p>
              <div className={styles.chipRow}>
                {componentGroups.map((group) => (
                  <Chip key={group} label={group} />
                ))}
              </div>
            </div>
            <div className={styles.mediaFrame}>
              <OptimizedImage src={imgGroups} alt="" width={2763} height={1673} />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Component Properties as API Contracts</h2>
            <p>
              We audited internal requirements and collaborated with developers to finalize the component
              properties so that Figma props and component APIs completely matched.
            </p>
            <div className={styles.apiSplit}>
              <div className={styles.apiFrame}>
                <OptimizedImage src={imgApi} alt="" width={1206} height={1334} />
              </div>
              <div className={styles.apiCopy}>
                <p data-style="Heading 2">Benefits:</p>
                <ul className={styles.steps}>
                  {apiBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Highlights</h2>
            <HighlightsTicker rows={highlightRows} />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Documentation</h2>
            <p>
              We documented components in Figma, creating a shared source of truth for designers,
              developers, and evolving product workflows as Mozaic scaled.
            </p>
            <DocsVideo
              src={`${videoDocumentation}?v=desk`}
              poster={`${imgDocumentationPoster}?v=desk`}
              title="Component documentation"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Component Management</h2>
            <div className={styles.prose}>
              <p>
                We intended the Mozaic component library to stay curated rather than a catch-all
                repository. Organisms created during new projects remained local to their features,
                allowing teams to experiment and iterate, until their broader system value was clear. We
                were looking for:
              </p>
              <ol className={styles.steps}>
                {promotionRules.map((rule) => (
                  <li key={rule.title}>
                    <strong>{rule.title}</strong> {rule.body}
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Patterns</h2>
            <div className={styles.prose}>
              <p>
                As Mozaic grew, we discovered repeating interactions and user intents across services
                and converted them into Patterns.
              </p>
              <p>
                <strong>Objective:</strong> Standardize system logic and response across all services
                while allowing UI layouts and data density to remain context-specific.
              </p>
            </div>
            <div className={styles.mediaFrame}>
              <OptimizedImage src={imgPatterns} alt="" width={2761} height={1673} />
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Examples</h2>
            <div className={styles.examplesCard}>
              <h3 className={styles.exampleLabel}>Upload module</h3>
              <div className={styles.exampleShot}>
                <OptimizedImage src={`${imgExample1}?v=hi`} alt="" width={2842} height={1598} />
              </div>
              <h3 className={`${styles.exampleLabel} ${styles.exampleLabelFollow}`}>
                Date and slot selector
              </h3>
              <div className={styles.exampleShot}>
                <OptimizedImage src={`${imgExample2}?v=hi`} alt="" width={2862} height={1682} />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Documentation</h2>
            <p>
              We documented patterns to capture interaction intent, usage, and behavioural rules ensuring
              teams solved recurring problems consistently without reinterpreting the system each time.
            </p>
            <DocsVideo
              src={`${videoPatternDocs}?v=sheet`}
              poster={`${imgPatternDocsPoster}?v=sheet`}
              title="Bottom sheet documentation"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Platform &amp; Domain Variance</h2>
            <div className={styles.prose}>
              <p>
                Patterns in Mozaic recorded repeated user intent and expected behavior, allowing solutions
                to mature through real use rather than theoretical abstractions.
              </p>
              <ul className={styles.steps}>
                {varianceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>
        </div>
      </article>
    </div>
  );
}
