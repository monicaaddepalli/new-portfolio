import { useLayoutEffect, type ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { OptimizedImage } from '../../components/OptimizedImage';
import { applyTheme } from '../../lib/theme';
import chrome from '../MozaicProject/MozaicProject.module.css';
import extras from '../../components/MozaicDeepDive.module.css';

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
    <span className={extras.chip}>
      <span className={extras.chipIcon} aria-hidden="true">
        <img src={iconComponents} alt="" width={24} height={24} />
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
  const marqueeClass = reverse ? extras.highlightsMarqueeReverse : extras.highlightsMarquee;

  return (
    <div
      className={`${extras.highlightsViewport} ${animate ? '' : extras.highlightsScroll}`}
    >
      <div className={`${extras.highlightsTrack} ${animate ? marqueeClass : ''}`}>
        {track.map((slide, index) => {
          const isOriginal = index < items.length;
          return (
            <div
              key={`${slide.src}-${index}`}
              className={
                slide.src
                  ? extras.highlightsSlide
                  : `${extras.highlightsSlide} ${extras.highlightsPlaceholder}`
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
    <div className={extras.highlightsFrame} aria-label="Component highlights">
      {rows.map((slides, index) => (
        <HighlightsRow
          key={index}
          slides={slides}
          reverse={index % 2 === 1}
          eager
        />
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
    <div className={`${extras.videoFrame} ${extras.videoFrameFill}`}>
      <video
        className={extras.docFit}
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

export function MozaicComponents() {
  useLayoutEffect(() => {
    applyTheme('light');
  }, []);

  return (
    <div className={chrome.page} data-name="mozaic components">
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
              <span className={extras.crumbCurrent}>components &amp; patterns</span>
            </nav>
            <h1 className={chrome.title}>
              components
              <br />
              &amp; patterns
            </h1>
          </div>

          <Copy heading="overview">
            <div className={chrome.prose}>
              <p>
                Consultations, diagnostics, pharmacy, insurance, and wellness operated with distinct
                workflows and varying data densities. The challenge was to architect a unified
                framework that honored unique decision contexts while eliminating fragmented user
                experiences.
              </p>
              <p className={extras.subhead}>goal:</p>
              <ul className={chrome.bullets}>
                {goalItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Copy>

          <section className={extras.chipToMedia}>
            <div className={chrome.copyInner}>
              <h2 className={extras.sectionTitle}>components</h2>
              <div className={chrome.prose}>
                <p>
                  Following Brad Frost&apos;s Atomic Design Principles, we first built the core
                  components of these groups:
                </p>
                <div className={extras.chipRow}>
                  {componentGroups.map((group) => (
                    <Chip key={group} label={group} />
                  ))}
                </div>
              </div>
            </div>
            <div className={`${extras.videoFrame} ${extras.videoFrameFill}`}>
              <OptimizedImage src={imgGroups} alt="" width={2763} height={1673} />
            </div>
          </section>

          <section className={chrome.wide}>
            <div className={chrome.copyInner}>
              <h2 className={chrome.heading}>component properties as api contracts</h2>
              <p className={chrome.proseSingle}>
                We audited internal requirements and collaborated with developers to finalize the
                component properties so that Figma props and component APIs completely matched.
              </p>
            </div>
            <div className={extras.apiSplit}>
              <div className={extras.apiFrame}>
                <OptimizedImage src={imgApi} alt="" width={1206} height={1334} />
              </div>
              <div className={extras.splitCopy}>
                <p className={extras.subhead}>benefits:</p>
                <ul className={chrome.bullets}>
                  {apiBenefits.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </section>

          <section className={extras.highlightsBlock}>
            <div className={chrome.copyInner}>
              <h2 className={chrome.heading}>highlights</h2>
            </div>
            <HighlightsTicker rows={highlightRows} />
          </section>

          <section className={extras.chipToMedia}>
            <div className={chrome.copyInner}>
              <h2 className={chrome.heading}>documentation</h2>
              <p className={chrome.proseSingle}>
                We documented components in Figma, creating a shared source of truth for designers,
                developers, and evolving product workflows as Mozaic scaled.
              </p>
            </div>
            <DocsVideo
              src={`${videoDocumentation}?v=desk`}
              poster={`${imgDocumentationPoster}?v=desk`}
              title="Component documentation"
            />
          </section>

          <Copy heading="component management">
            <div className={chrome.prose}>
              <p>
                We intended the Mozaic component library to stay curated rather than a catch-all
                repository. Organisms created during new projects remained local to their features,
                allowing teams to experiment and iterate, until their broader system value was
                clear. We were looking for:
              </p>
              <ol className={chrome.numbers}>
                {promotionRules.map((rule) => (
                  <li key={rule.title}>
                    <strong>{rule.title}</strong> {rule.body}
                  </li>
                ))}
              </ol>
            </div>
          </Copy>

          <section className={extras.chipToMedia}>
            <div className={chrome.copyInner}>
              <h2 className={extras.sectionTitle}>patterns</h2>
              <div className={chrome.prose}>
                <p>
                  As Mozaic grew, we discovered repeating interactions and user intents across
                  services and converted them into Patterns.
                </p>
                <p>
                  <strong>Objective:</strong> Standardize system logic and response across all
                  services while allowing UI layouts and data density to remain context-specific.
                </p>
              </div>
            </div>
            <div className={`${extras.videoFrame} ${extras.videoFrameFill}`}>
              <OptimizedImage src={imgPatterns} alt="" width={2761} height={1673} />
            </div>
          </section>

          <section className={extras.examples}>
            <h2 className={`${chrome.heading} ${chrome.wideHeading}`}>examples</h2>
            <div className={extras.examplesCard}>
              <h3 className={extras.exampleLabel}>upload module</h3>
              <div className={extras.exampleShot}>
                <OptimizedImage src={`${imgExample1}?v=hi`} alt="" width={2842} height={1598} />
              </div>
              <h3 className={`${extras.exampleLabel} ${extras.exampleLabelFollow}`}>date and slot selector</h3>
              <div className={extras.exampleShot}>
                <OptimizedImage src={`${imgExample2}?v=hi`} alt="" width={2862} height={1682} />
              </div>
            </div>
          </section>

          <section className={extras.chipToMedia}>
            <div className={chrome.copyInner}>
              <h2 className={chrome.heading}>documentation</h2>
              <p className={chrome.proseSingle}>
                We documented patterns to capture interaction intent, usage, and behavioural rules
                ensuring teams solved recurring problems consistently without reinterpreting the
                system each time.
              </p>
            </div>
            <DocsVideo
              src={`${videoPatternDocs}?v=sheet`}
              poster={`${imgPatternDocsPoster}?v=sheet`}
              title="Bottom sheet documentation"
            />
          </section>

          <Copy heading="platform & domain variance">
            <div className={chrome.prose}>
              <p>
                Patterns in Mozaic recorded repeated user intent and expected behavior, allowing
                solutions to mature through real use rather than theoretical abstractions.
              </p>
              <ul className={chrome.bullets}>
                {varianceItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </Copy>
        </main>
      </div>
    </div>
  );
}
