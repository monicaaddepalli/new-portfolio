import { useCallback, useEffect, useState, type MouseEvent } from 'react';
import { Link } from 'react-router-dom';
import { applyTheme, getInitialTheme, type Theme } from '../../lib/theme';
import styles from './DesignSystemBlog.module.css';

const imgHero = '/assets/blog/hero.png';
const imgAudit = '/assets/blog/audit.png';
const imgApiDesign = '/assets/blog/api-design.png';
const imgPocNav = '/assets/blog/poc-nav.png';
const imgBaseAvatar = '/assets/blog/base-avatar.png';
const imgVariants = '/assets/blog/variants.png';
const imgDocumentation = '/assets/blog/documentation.png';
const imgSlack = '/assets/blog/slack.png';

const TOC_SECTION_IDS = [
  'background',
  'process',
  'auditing-products',
  'component-research',
  'api-design',
  'proof-of-concept',
  'internal-review',
  'base-component',
  'creating-variants',
  'documentation',
  'doc-introduction',
  'doc-construction',
  'doc-how-to-add',
  'dev-review',
  'design-review',
  'time-to-go-live',
] as const;

type TocSectionId = (typeof TOC_SECTION_IDS)[number];

const SCROLL_OFFSET = 120;

function useActiveTocSection() {
  const [activeId, setActiveId] = useState<TocSectionId>(TOC_SECTION_IDS[0]);

  const scrollToSection = useCallback((href: string) => {
    const id = href.replace(/^#/, '') as TocSectionId;
    const target = document.getElementById(id);
    if (!target) return;

    setActiveId(id);

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const top = target.getBoundingClientRect().top + window.scrollY - SCROLL_OFFSET;

    window.scrollTo({
      top,
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
    });

    window.history.pushState(null, '', `#${id}`);
  }, []);

  useEffect(() => {
    const getSectionElements = () =>
      TOC_SECTION_IDS.map((id) => document.getElementById(id)).filter(
        (el): el is HTMLElement => el !== null,
      );

    const updateActiveSection = () => {
      const sections = getSectionElements();
      if (sections.length === 0) return;

      const scrollMarker = window.scrollY + SCROLL_OFFSET;
      const nearBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 48;

      if (nearBottom) {
        setActiveId(TOC_SECTION_IDS[TOC_SECTION_IDS.length - 1]);
        return;
      }

      let current: TocSectionId = TOC_SECTION_IDS[0];

      for (const section of sections) {
        const sectionTop = section.getBoundingClientRect().top + window.scrollY;
        if (sectionTop <= scrollMarker) {
          current = section.id as TocSectionId;
        }
      }

      setActiveId(current);
    };

    updateActiveSection();
    window.addEventListener('scroll', updateActiveSection, { passive: true });
    window.addEventListener('resize', updateActiveSection);

    return () => {
      window.removeEventListener('scroll', updateActiveSection);
      window.removeEventListener('resize', updateActiveSection);
    };
  }, []);

  return { activeId, scrollToSection };
}

function MediaImage({
  src,
  bordered,
  hero,
  contain,
  fill,
}: {
  src: string;
  bordered?: boolean;
  hero?: boolean;
  contain?: boolean;
  fill?: string;
}) {
  const wrapClass = [
    styles.media,
    bordered && styles.mediaBordered,
    hero && styles.mediaHero,
    !hero && bordered && styles.mediaFigure,
    contain && styles.mediaContain,
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

function MediaFigure({
  src,
  caption,
  contain,
  fill,
}: {
  src: string;
  caption: string;
  contain?: boolean;
  fill?: string;
}) {
  return (
    <figure className={styles.figure}>
      <MediaImage src={src} bordered contain={contain} fill={fill} />
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

function TocAnchor({
  href,
  className,
  children,
  isActive,
  onNavigate,
}: {
  href: string;
  className: string;
  children: string;
  isActive: boolean;
  onNavigate: (href: string) => void;
}) {
  const onClick = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    onNavigate(href);
  };

  return (
    <a
      className={[className, isActive && styles.tocActive].filter(Boolean).join(' ')}
      href={href}
      data-muted={isActive ? undefined : true}
      aria-current={isActive ? 'location' : undefined}
      onClick={onClick}
    >
      {children}
    </a>
  );
}

function TocOrderedItem({
  start,
  href,
  label,
  isActive,
  onNavigate,
}: {
  start: number;
  href: string;
  label: string;
  isActive: boolean;
  onNavigate: (href: string) => void;
}) {
  return (
    <div className={styles.tocRow}>
      <ol
        className={[styles.tocOrdered, isActive && styles.tocOrderedActive].filter(Boolean).join(' ')}
        start={start}
      >
        <li>
          <TocAnchor href={href} className={styles.tocOrderedLink} isActive={isActive} onNavigate={onNavigate}>
            {label}
          </TocAnchor>
        </li>
      </ol>
    </div>
  );
}

function TocNestedItem({
  href,
  children,
  isActive,
  onNavigate,
}: {
  href: string;
  children: string;
  isActive: boolean;
  onNavigate: (href: string) => void;
}) {
  return (
    <div className={styles.tocRow}>
      <div className={styles.tocNestedInner}>
        <TocAnchor href={href} className={styles.tocNestedLink} isActive={isActive} onNavigate={onNavigate}>
          {children}
        </TocAnchor>
      </div>
    </div>
  );
}

function TocDeepItem({
  href,
  children,
  isActive,
  onNavigate,
}: {
  href: string;
  children: string;
  isActive: boolean;
  onNavigate: (href: string) => void;
}) {
  return (
    <div className={styles.tocDeepRow}>
      <TocAnchor href={href} className={styles.tocDeepLink} isActive={isActive} onNavigate={onNavigate}>
        {children}
      </TocAnchor>
    </div>
  );
}

export function DesignSystemBlog() {
  const { activeId: activeSectionId, scrollToSection } = useActiveTocSection();
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
      <div className={styles.page} data-node-id="187:550" data-name="ds component blog">
        <div className={styles.pageShell}>
          <div className={styles.introColumn} data-node-id="187:551">
            <header className={styles.sectionText} data-node-id="187:552">
              <div className={styles.stack60}>
                <div className={styles.backRow} data-node-id="187:554">
                  <Link className={styles.backLink} to="/?tab=blog" data-node-id="187:555" data-muted>
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

                <div className={`${styles.textBlock} ${styles.stack0}`} data-node-id="187:569">
                  <p className={styles.primary} data-node-id="187:571">
                    behind the scenes of building design system component
                  </p>
                  <p className={styles.secondary} data-node-id="187:572">
                    my experience understanding what it takes to design a design system component
                    from scratch
                  </p>
                </div>
              </div>
            </header>

            <MediaImage src={imgHero} hero fill="#f2f2f2" />
          </div>

          <div className={styles.articleLayout}>
            <nav className={styles.sidebar} aria-label="Table of contents" data-node-id="187:840">
              <div className={styles.tocList} data-node-id="187:843">
                <TocOrderedItem start={1} href="#background" label="background" isActive={activeSectionId === "background"} onNavigate={scrollToSection} />
                <div className={styles.tocGroup} data-node-id="187:846">
                  <TocOrderedItem start={2} href="#process" label="process" isActive={activeSectionId === "process"} onNavigate={scrollToSection} />
                  <div className={styles.tocProcessList} data-node-id="187:849">
                    <TocNestedItem href="#auditing-products" isActive={activeSectionId === "auditing-products"} onNavigate={scrollToSection}>2.1 auditing products</TocNestedItem>
                    <TocNestedItem href="#component-research" isActive={activeSectionId === "component-research"} onNavigate={scrollToSection}>2.2 component research</TocNestedItem>
                    <TocNestedItem href="#api-design" isActive={activeSectionId === "api-design"} onNavigate={scrollToSection}>2.3 api design</TocNestedItem>
                    <TocNestedItem href="#proof-of-concept" isActive={activeSectionId === "proof-of-concept"} onNavigate={scrollToSection}>
                      2.4 creating a proof of concept
                    </TocNestedItem>
                    <TocNestedItem href="#internal-review" isActive={activeSectionId === "internal-review"} onNavigate={scrollToSection}>2.5 internal review</TocNestedItem>
                    <TocNestedItem href="#base-component" isActive={activeSectionId === "base-component"} onNavigate={scrollToSection}>
                      2.6 creating the base component
                    </TocNestedItem>
                    <TocNestedItem href="#creating-variants" isActive={activeSectionId === "creating-variants"} onNavigate={scrollToSection}>2.7 creating variants</TocNestedItem>
                    <div className={styles.tocDocGroup} data-node-id="187:871">
                      <TocNestedItem href="#documentation" isActive={activeSectionId === "documentation"} onNavigate={scrollToSection}>2.8 documentation</TocNestedItem>
                      <div className={styles.tocDeepList} data-node-id="187:874">
                        <TocDeepItem href="#doc-introduction" isActive={activeSectionId === "doc-introduction"} onNavigate={scrollToSection}>2.8.1 introduction</TocDeepItem>
                        <TocDeepItem href="#doc-construction" isActive={activeSectionId === "doc-construction"} onNavigate={scrollToSection}>2.8.2 construction</TocDeepItem>
                        <TocDeepItem href="#doc-how-to-add" isActive={activeSectionId === "doc-how-to-add"} onNavigate={scrollToSection}>2.8.3 how to add</TocDeepItem>
                      </div>
                    </div>
                    <TocNestedItem href="#dev-review" isActive={activeSectionId === "dev-review"} onNavigate={scrollToSection}>2.9 dev review</TocNestedItem>
                    <TocNestedItem href="#design-review" isActive={activeSectionId === "design-review"} onNavigate={scrollToSection}>2.10 design review</TocNestedItem>
                    <TocNestedItem href="#time-to-go-live" isActive={activeSectionId === "time-to-go-live"} onNavigate={scrollToSection}>2.11 time to go live</TocNestedItem>
                  </div>
                </div>
              </div>
            </nav>

            <div className={styles.articleMain}>
            <section
              id="background"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:593"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:603">
                <p className={styles.heading} data-node-id="187:604">
                  background
                </p>
                <p className={styles.primary} data-node-id="187:605">
                  it&apos;s been over 8 months since i joined medibuddy. before working on the mozaic
                  design system, i held a common misconception that designing a component was a quick,
                  straightforward task. i assumed that creating a polished design with a few
                  variations would be enough to call it complete.
                </p>
                <p className={styles.primary} data-node-id="187:606">
                  but as i immersed myself in the process, i realized that designing a component is far
                  more intricate. it&apos;s not just about how it looks, but how it functions, adapts,
                  and serves multiple teams across diverse products and platforms.
                </p>
                <p className={styles.primary} data-node-id="187:607">
                  in this blog, i&apos;ll share my insights and experiences shedding light on the
                  thoughtful, collaborative process that goes into creating a design system component.
                </p>
                <p className={styles.primary} data-node-id="187:608">
                  <strong>
                    if you&apos;re new to design systems or curious about the work behind them, you may
                    have asked yourself:
                  </strong>
                </p>
                <ul className={styles.bulletList} data-node-id="187:609">
                  <li>what is it really like to design a component?</li>
                  <li>why can something so simple looking take weeks or even months to perfect?</li>
                </ul>
                <p className={styles.primary} data-node-id="187:612">
                  by the end of this article, i hope to answer both questions and give you a behind the
                  scenes look at the craft, decisions, and collaboration that bring a design system
                  component to life. so, let&apos;s dive in.
                </p>
              </div>
            </section>

            <section
              id="process"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:613"
            >
              <div id="auditing-products" className={styles.sectionAnchor} aria-hidden="true" />
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:623">
                <p className={styles.heading} data-node-id="187:624">
                  auditing products
                </p>
                <p className={styles.primary} data-node-id="187:625">
                  the process begins with auditing existing components used across medibuddy&apos;s wide
                  range of products. given this diversity, understanding varied use cases and spotting
                  common interaction patterns is crucial to creating components that work seamlessly
                  across different products and contexts. i worked closely with all the design team
                  members, who helped me identify use cases and problems i wasn&apos;t aware of.
                </p>
              </div>
            </section>

            <MediaFigure
              src={imgAudit}
              caption="audit findings of top navigation bar across different products"
              contain
              fill="#ffffff"
            />

            <section
              id="component-research"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:629"
            >
              <div className={`${styles.textBlock} ${styles.stack20}`} data-node-id="187:639">
                <div className={styles.stack12} data-node-id="187:640">
                  <p className={styles.heading} data-node-id="187:641">
                    component research
                  </p>
                  <p className={styles.primary} data-node-id="187:642">
                    no matter what you&apos;re designing, a bit of research always goes a long way. for
                    components in a design system, this is usually secondary research and in my case, it
                    could be broken down into two key areas:
                  </p>
                  <ul className={styles.bulletList} data-node-id="187:643">
                    <li>
                      <strong>gaining a component level understanding:</strong> this involved reading
                      articles, blogs, and documentation, and watching videos to get deeper context about
                      the component i was about to design.
                    </li>
                    <li>
                      <strong>studying how other design systems approach it:</strong> i analysed how
                      different design systems structure and design the same type of component, noting
                      similarities, differences, and unique approaches.
                    </li>
                  </ul>
                </div>
                <div className={styles.stack12} data-node-id="187:646">
                  <p className={styles.primary} data-node-id="187:647">
                    <strong>you might wonder how does this actually help? the insights from this research helped me:</strong>
                  </p>
                  <ul className={styles.bulletList} data-node-id="187:648">
                    <li>identify best practices for the component</li>
                    <li>
                      define usage guidelines, accessibility standards, interaction patterns, and
                      behaviour
                    </li>
                    <li>understand how other systems structure their components</li>
                    <li>list possible variants the component could support</li>
                    <li>determine which props should be offered to developers for flexibility</li>
                  </ul>
                  <p className={styles.primary} data-node-id="187:654">
                    this research step not only built a strong foundation but also ensured the component
                    could scale across medibuddy&apos;s diverse product needs.
                  </p>
                </div>
              </div>
            </section>

            <section
              id="api-design"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:655"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:665">
                <p className={styles.heading} data-node-id="187:666">
                  api design
                </p>
                <p className={styles.primary} data-node-id="187:667">
                  one of the most critical steps in building a design system component is api design. a
                  component&apos;s api defines all the properties, methods, and events that designers and
                  developers can use to customize and interact with it. in simpler terms, these are the
                  properties you see in figma&apos;s right hand panel when you select a component instance.
                </p>
                <p className={styles.primary} data-node-id="187:668">
                  with mozaic, one of our key goals is to minimize discrepancies between design and
                  development by exposing a consistent set of apis across both. this means that a property
                  in figma maps directly to prop for developers making the handoff smoother and reducing
                  chances of friction.
                </p>
                <p className={styles.primary} data-node-id="187:669">
                  while it might be tempting to expose a large number of props and give users complete
                  freedom, too many options can lead to inconsistency. striking the right balance is
                  essential to ensure components remain flexible yet uniform across medibuddy&apos;s
                  products.
                </p>
                <p className={styles.primary} data-node-id="187:670">
                  the process begins with compiling an exhaustive list of potential variants and props the
                  component could support. then, through collaborative discussions with designers and
                  developers, we decide which props should be exposed and which should remain fixed to
                  preserve consistency and maintain design standards.
                </p>
              </div>
            </section>

            <MediaFigure
              src={imgApiDesign}
              caption="api design for beneficiary select chip component"
              contain
              fill="#ffffff"
            />

            <section
              id="proof-of-concept"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:674"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:684">
                <p className={styles.heading} data-node-id="187:685">
                  creating a proof of concept
                </p>
                <p className={styles.primary} data-node-id="187:686">
                  based on the insights gathered from the audit and research, i designed the first
                  version of the component as a proof of concept. at this stage, the focus was on defining
                  the component&apos;s structure and deciding which props to offer in the context of
                  medibuddy&apos;s needs.
                </p>
                <p className={styles.primary} data-node-id="187:687">
                  once the initial version was ready, we had in depth discussions with the head of design
                  and the design team to refine the approach. these conversations helped validate our
                  assumptions, uncover edge cases, and ensure the component aligned with mozaic&apos;s
                  overall design principles.
                </p>
              </div>
            </section>

            <MediaFigure
              src={imgPocNav}
              caption="initial version of top nav bar component"
              fill="#f9f9f9"
            />

            <section
              id="internal-review"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:691"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:701">
                <p className={styles.heading} data-node-id="187:702">
                  internal review
                </p>
                <p className={styles.primary} data-node-id="187:703">
                  once the poc is ready, it enters a collaborative review phase with our design team,
                  which includes the head of design and the other team members. this stage combines
                  brainstorming, critique, and technical evaluation to refine the component before
                  finalization.
                </p>
                <p className={styles.primary} data-node-id="187:704">
                  we review the component&apos;s structure, styling, props, and covered use cases
                  together, ensuring it&apos;s functional and adaptable across contexts. developers are
                  also brought in to walk through the component structure and available props, providing
                  input on technical feasibility, edge cases, and improvements.
                </p>
                <p className={styles.primary} data-node-id="187:705">
                  the feedback cycles here aren&apos;t one off, we revisit and refine the design as needed
                  until there&apos;s full alignment within the team, setting the stage for the next phase.
                </p>
              </div>
            </section>

            <section
              id="base-component"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:706"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:716">
                <p className={styles.heading} data-node-id="187:717">
                  creating the base component
                </p>
                <p className={styles.primary} data-node-id="187:718">
                  once the component&apos;s structure and api decisions are finalized, the next step is to
                  build the base component.
                </p>
                <div className={styles.callout} data-node-id="187:719">
                  <p className={styles.headingCard} data-node-id="187:720">
                    why have a base component?
                  </p>
                  <div className={styles.calloutList} data-node-id="187:721">
                    <p data-node-id="187:722">
                      <strong>pros:</strong> in a multi brand system, a base component streamlines
                      maintenance across different themes and makes it much easier to introduce new themes
                      in the future.
                    </p>
                    <p data-node-id="187:723">
                      <strong>cons:</strong> on the flip side, this approach can make the component heavier
                      in figma, sometimes slowing performance due to the nested layers involved.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <MediaFigure
              src={imgBaseAvatar}
              caption="base component of avatar component"
              fill="#ffffff"
            />

            <section
              id="creating-variants"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:727"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:737">
                <p className={styles.heading} data-node-id="187:738">
                  creating variants
                </p>
                <p className={styles.primary} data-node-id="187:739">
                  using the base component built earlier, we move on to applying design tokens to create the
                  final variants. this is where the component starts to take shape visually colors,
                  typography, spacing, borders, and other styles are added based on the mozaic design
                  system.
                </p>
                <p className={styles.primary} data-node-id="187:740">
                  design tokens help ensure consistency across all products and make updates much easier in
                  the future. for example, if a brand color or font size changes, we just update the token,
                  and the change automatically reflects in every component that uses it.
                </p>
                <p className={styles.primary} data-node-id="187:741">
                  at this stage, we also ensure that accessibility requirements such as color contrast and
                  font readability are met so that the component is both visually appealing and usable for
                  everyone.
                </p>
              </div>
            </section>

            <MediaFigure
              src={imgVariants}
              caption="different variants of upload module component"
              fill="#ffffff"
            />

            <section
              id="documentation"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:745"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:755">
                <p className={styles.heading} data-node-id="187:756">
                  documentation
                </p>
                <p className={styles.primary} data-node-id="187:757">
                  the next step is thorough documentation, ensuring every component is clearly defined,
                  structured, and easy for both designers and developers to use. the documentation
                  includes:
                </p>
                <div className={styles.docGroup} data-node-id="187:758">
                  <div className={styles.stack12} data-node-id="187:759">
                    <p className={styles.docSubheading} id="doc-introduction" data-node-id="187:761">
                      2.8.1 introduction
                    </p>
                    <div className={styles.docList} data-node-id="187:762">
                      <p data-node-id="187:763">
                        <strong>what is it?</strong> – a short definition and overview of the component.
                      </p>
                      <p data-node-id="187:764">
                        <strong>where is it used?</strong> – common contexts, products, or features where
                        the component is applied.
                      </p>
                      <p data-node-id="187:765">
                        <strong>why did we create this?</strong> – the design or business need that led to
                        its creation.
                      </p>
                    </div>
                  </div>
                  <div className={styles.stack12} data-node-id="187:766">
                    <p className={styles.docSubheading} id="doc-construction" data-node-id="187:768">
                      2.8.2 construction
                    </p>
                    <div className={styles.docList} data-node-id="187:769">
                      <p data-node-id="187:770">
                        <strong>overall component –</strong> a visual and structural overview of the
                        component.
                      </p>
                      <p data-node-id="187:771">
                        <strong>construction</strong> – breakdown of the component&apos;s internal structure
                        and hierarchy.
                      </p>
                      <p data-node-id="187:772">
                        <strong>properties</strong> – all available properties (props) and design tokens
                        applied to the component.
                      </p>
                    </div>
                  </div>
                  <div className={styles.stack12} data-node-id="187:773">
                    <p className={styles.docSubheading} id="doc-how-to-add" data-node-id="187:775">
                      2.8.3 how to add
                    </p>
                    <div className={styles.docList} data-node-id="187:776">
                      <p data-node-id="187:777">
                        <strong>new size –</strong> guidelines for introducing a new size while maintaining
                        consistency.
                      </p>
                      <p data-node-id="187:778">
                        <strong>new variant</strong> – steps to create and integrate a new variant into the
                        system.
                      </p>
                    </div>
                  </div>
                  <div className={styles.callout} data-node-id="187:779">
                    <p className={styles.headingCard} data-node-id="187:780">
                      design decisions taken
                    </p>
                    <p className={styles.primary} data-node-id="187:781">
                      a record of the key decisions made during the design process, including rationale and
                      trade-offs.
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <MediaFigure
              src={imgDocumentation}
              caption="documentation for upload module component"
              fill="#f9f9f9"
            />

            <section
              id="dev-review"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:785"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:795">
                <p className={styles.heading} data-node-id="187:796">
                  dev review
                </p>
                <p className={styles.primary} data-node-id="187:797">
                  once the component is designed and documented, it goes through another round of developer
                  review. the developers review the designs and documentation, sharing feedback on
                  improvements, technical considerations, or overlooked edge cases. most feedback is
                  addressed asynchronously, while major points are discussed and resolved in a review call.
                </p>
              </div>
            </section>

            <section
              id="design-review"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:798"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:808">
                <p className={styles.heading} data-node-id="187:809">
                  design review
                </p>
                <p className={styles.primary} data-node-id="187:810">
                  once the component is developed, a final check ensures the built version matches the
                  original design. at this stage, any discrepancies whether in visual design, prop naming,
                  or behaviour are identified and resolved.
                </p>
              </div>
            </section>

            <section
              id="time-to-go-live"
              className={`${styles.sectionText} ${styles.sectionAnchor}`}
              data-node-id="187:811"
            >
              <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="187:821">
                <p className={styles.heading} data-node-id="187:822">
                  time to go live
                </p>
                <p className={styles.primary} data-node-id="187:823">
                  once the component is finalized, we publish it in our figma library for designers to
                  start using, and the development team begins building it in parallel.
                </p>
                <p className={styles.primary} data-node-id="187:824">
                  even after release, feedback, new requirements, and change requests can arise at any time.
                  if a use case is valid, we prioritize and update the component accordingly.
                </p>
              </div>
            </section>

            <MediaFigure
              src={imgSlack}
              caption="published announcement on slack channel for the components"
              fill="#ffffff"
            />

            <section className={styles.sectionText} data-node-id="187:828">
              <div className={styles.callout} data-node-id="187:838">
                <p className={styles.primary} data-node-id="187:839">
                  much like any other design process, this one isn&apos;t strictly linear there&apos;s
                  plenty of back-and-forth at different stages before the component is finalized and
                  shipped.
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
      </div>
    </div>
  );
}
