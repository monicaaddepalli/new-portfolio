import { type ReactNode } from 'react';
import { OptimizedImage } from '../../components/OptimizedImage';
import styles from './DesignSystemBlog.module.css';

const imgAudit = '/assets/v2/component-blog/audit.png';
const imgApiDesign = '/assets/v2/component-blog/api-design.png';
const imgPocNav = '/assets/v2/component-blog/poc-nav.png';
const imgBaseAvatar = '/assets/v2/component-blog/base-avatar.png';
const imgVariants = '/assets/v2/component-blog/variants.png';
const imgDocumentation = '/assets/v2/component-blog/documentation.png';
const imgSlack = '/assets/v2/component-blog/slack.png';

function Figure({
  src,
  caption,
  contain,
  surface,
}: {
  src: string;
  caption: string;
  contain?: boolean;
  surface?: boolean;
}) {
  const mediaClass = [
    styles.media,
    contain && styles.mediaContain,
    surface && styles.mediaSurface,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <figure className={styles.figure}>
      <div className={mediaClass}>
        <OptimizedImage src={src} alt="" width={1600} height={756} />
      </div>
      <figcaption className={styles.caption}>{caption}</figcaption>
    </figure>
  );
}

function Copy({
  title,
  children,
}: {
  title?: string;
  children?: ReactNode;
}) {
  return (
    <section className={styles.copy}>
      {title ? <h2 className={styles.display}>{title}</h2> : null}
      {children}
    </section>
  );
}

export function DesignSystemBlog() {
  return (
    <div className={styles.page} data-name="component blog">
      <div className={styles.headerBlur} aria-hidden="true">
        <div className={styles.headerBlurBg} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurSoft}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurMedium}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurStrong}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurExtra}`} />
      </div>

      <div className={styles.shell}>
        <a className={styles.back} href="/" data-header-link="" data-style="Body Mono">
          <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
            <path
              fill="currentColor"
              d="M6.7 2.3 1.6 8l5.1 5.7.9-.8L3.6 8.6H15V7.4H3.6l4-4.3z"
            />
          </svg>
          Back to home
        </a>

        <main className={styles.main}>
          <div className={styles.intro}>
            <h1 className={styles.title}>Building a design system component</h1>
          </div>

          <Copy title="Background">
            <div className={styles.prose}>
              <p>
                It&apos;s been over 8 months since I joined MediBuddy. Before working on the Mozaic
                design system, I held a common misconception that designing a component was a quick,
                straightforward task. I assumed that creating a polished design with a few
                variations would be enough to call it complete.
              </p>
              <p>
                But as I immersed myself in the process, I realized that designing a component is
                far more intricate. It&apos;s not just about how it looks, but how it functions,
                adapts, and serves multiple teams across diverse products and platforms.
              </p>
              <p>
                In this blog, I&apos;ll share my insights and experiences shedding light on the
                thoughtful, collaborative process that goes into creating a design system component.
              </p>
              <div className={styles.stack12}>
                <p className={styles.emphasis}>
                  If you&apos;re new to design systems or curious about the work behind them, you may
                  have asked yourself:
                </p>
                <ul className={styles.bullets}>
                  <li>What is it really like to design a component?</li>
                  <li>
                    Why can something so simple looking take weeks or even months to perfect?
                  </li>
                </ul>
              </div>
              <p>
                By the end of this article, I hope to answer both questions and give you a behind
                the scenes look at the craft, decisions, and collaboration that bring a design
                system component to life. So, let&apos;s dive in.
              </p>
            </div>
          </Copy>

          <Copy title="Auditing products">
            <p className={styles.proseSingle}>
              The process begins with auditing existing components used across MediBuddy&apos;s wide
              range of products. Given this diversity, understanding varied use cases and spotting
              common interaction patterns is crucial to creating components that work seamlessly
              across different products and contexts. I worked closely with all the design team
              members, who helped me identify use cases and problems I wasn&apos;t aware of.
            </p>
            <Figure
              src={imgAudit}
              caption="Audit findings of top navigation bar across different products"
              contain
            />
          </Copy>

          <Copy title="Component research">
            <div className={styles.prose}>
              <p>
                No matter what you&apos;re designing, a bit of research always goes a long way. For
                components in a design system, this is usually secondary research and in my case, it
                could be broken down into two key areas:
              </p>
              <ul className={styles.bullets}>
                <li>
                  <strong>Gaining a component level understanding:</strong> this involved reading
                  articles, blogs, and documentation, and watching videos to get deeper context
                  about the component I was about to design.
                </li>
                <li>
                  <strong>Studying how other design systems approach it:</strong> I analysed how
                  different design systems structure and design the same type of component, noting
                  similarities, differences, and unique approaches.
                </li>
              </ul>
              <div className={styles.stack12}>
                <p className={styles.emphasis}>
                  You might wonder how does this actually help? The insights from this research
                  helped me:
                </p>
                <ul className={styles.bullets}>
                  <li>Identify best practices for the component</li>
                  <li>
                    Define usage guidelines, accessibility standards, interaction patterns, and
                    behaviour
                  </li>
                  <li>Understand how other systems structure their components</li>
                  <li>List possible variants the component could support</li>
                  <li>Determine which props should be offered to developers for flexibility</li>
                </ul>
              </div>
              <p>
                This research step not only built a strong foundation but also ensured the
                component could scale across MediBuddy&apos;s diverse product needs.
              </p>
            </div>
          </Copy>

          <Copy title="API design">
            <div className={styles.prose}>
              <p>
                One of the most critical steps in building a design system component is API design.
                A component&apos;s API defines all the properties, methods, and events that
                designers and developers can use to customize and interact with it. In simpler
                terms, these are the properties you see in Figma&apos;s right hand panel when you
                select a component instance.
              </p>
              <p>
                With Mozaic, one of our key goals is to minimize discrepancies between design and
                development by exposing a consistent set of APIs across both. This means that a
                property in Figma maps directly to prop for developers making the handoff smoother
                and reducing chances of friction.
              </p>
              <p>
                While it might be tempting to expose a large number of props and give users
                complete freedom, too many options can lead to inconsistency. Striking the right
                balance is essential to ensure components remain flexible yet uniform across
                MediBuddy&apos;s products.
              </p>
              <p>
                The process begins with compiling an exhaustive list of potential variants and
                props the component could support. Then, through collaborative discussions with
                designers and developers, we decide which props should be exposed and which should
                remain fixed to preserve consistency and maintain design standards.
              </p>
            </div>
            <Figure
              src={imgApiDesign}
              caption="API design for beneficiary select chip component"
            />
          </Copy>

          <Copy title="Creating a proof of concept">
            <div className={styles.prose}>
              <p>
                Based on the insights gathered from the audit and research, I designed the first
                version of the component as a proof of concept. At this stage, the focus was on
                defining the component&apos;s structure and deciding which props to offer in the
                context of MediBuddy&apos;s needs.
              </p>
              <p>
                Once the initial version was ready, we had in depth discussions with the head of
                design and the design team to refine the approach. These conversations helped
                validate our assumptions, uncover edge cases, and ensure the component aligned with
                Mozaic&apos;s overall design principles.
              </p>
            </div>
            <Figure
              src={imgPocNav}
              caption="Initial version of top nav bar component"
              surface
            />
          </Copy>

          <Copy title="Internal review">
            <div className={styles.prose}>
              <p>
                Once the POC is ready, it enters a collaborative review phase with our design team,
                which includes the head of design and the other team members. This stage combines
                brainstorming, critique, and technical evaluation to refine the component before
                finalization.
              </p>
              <p>
                We review the component&apos;s structure, styling, props, and covered use cases
                together, ensuring it&apos;s functional and adaptable across contexts. Developers
                are also brought in to walk through the component structure and available props,
                providing input on technical feasibility, edge cases, and improvements.
              </p>
              <p>
                The feedback cycles here aren&apos;t one off, we revisit and refine the design as
                needed until there&apos;s full alignment within the team, setting the stage for the
                next phase.
              </p>
            </div>
          </Copy>

          <Copy title="Creating the base component">
            <div className={styles.prose}>
              <p>
                Once the component&apos;s structure and API decisions are finalized, the next step
                is to build the base component.
              </p>
              <p className={styles.emphasis}>Why have a base component?</p>
              <p>
                <strong>Pros:</strong> in a multi brand system, a base component streamlines
                maintenance across different themes and makes it much easier to introduce new
                themes in the future.
              </p>
              <p>
                <strong>Cons:</strong> on the flip side, this approach can make the component
                heavier in Figma, sometimes slowing performance due to the nested layers involved.
              </p>
            </div>
            <Figure src={imgBaseAvatar} caption="Base component of avatar component" />
          </Copy>

          <Copy title="Creating variants">
            <div className={styles.prose}>
              <p>
                Using the base component built earlier, we move on to applying design tokens to
                create the final variants. This is where the component starts to take shape
                visually colors, typography, spacing, borders, and other styles are added based on
                the Mozaic design system.
              </p>
              <p>
                Design tokens help ensure consistency across all products and make updates much
                easier in the future. For example, if a brand color or font size changes, we just
                update the token, and the change automatically reflects in every component that
                uses it.
              </p>
              <p>
                At this stage, we also ensure that accessibility requirements such as color
                contrast and font readability are met so that the component is both visually
                appealing and usable for everyone.
              </p>
            </div>
            <Figure src={imgVariants} caption="Different variants of upload module component" />
          </Copy>

          <Copy title="Documentation">
            <p className={styles.proseSingle}>
              The next step is thorough documentation, ensuring every component is clearly defined,
              structured, and easy for both designers and developers to use. The documentation
              includes:
            </p>
            <div className={styles.stack24}>
              <div className={styles.stack20}>
                <h3 className={styles.step}>2.8.1 Introduction</h3>
                <div className={styles.stack12}>
                  <p className={styles.proseSingle}>
                    <strong>What is it?</strong> – a short definition and overview of the
                    component.
                  </p>
                  <p className={styles.proseSingle}>
                    <strong>Where is it used?</strong> – common contexts, products, or features
                    where the component is applied.
                  </p>
                  <p className={styles.proseSingle}>
                    <strong>Why did we create this?</strong> – the design or business need that led
                    to its creation.
                  </p>
                </div>
              </div>
              <div className={styles.stack20}>
                <h3 className={styles.step}>2.8.2 Construction</h3>
                <div className={styles.stack12}>
                  <p className={styles.proseSingle}>
                    <strong>Overall component</strong> – a visual and structural overview of the
                    component.
                  </p>
                  <p className={styles.proseSingle}>
                    <strong>Construction</strong> – breakdown of the component&apos;s internal
                    structure and hierarchy.
                  </p>
                  <p className={styles.proseSingle}>
                    <strong>Properties</strong> – all available properties (props) and design
                    tokens applied to the component.
                  </p>
                </div>
              </div>
              <div className={styles.stack20}>
                <h3 className={styles.step}>2.8.3 How to add</h3>
                <div className={styles.stack12}>
                  <p className={styles.proseSingle}>
                    <strong>New size</strong> – guidelines for introducing a new size while
                    maintaining consistency.
                  </p>
                  <p className={styles.proseSingle}>
                    <strong>New variant</strong> – steps to create and integrate a new variant into
                    the system.
                  </p>
                </div>
              </div>
              <div className={styles.stack20}>
                <h3 className={styles.step}>Design decisions taken</h3>
                <p className={styles.proseSingle}>
                  A record of the key decisions made during the design process, including rationale
                  and trade-offs.
                </p>
              </div>
            </div>
            <Figure
              src={imgDocumentation}
              caption="Documentation for upload module component"
              surface
            />
          </Copy>

          <Copy title="Dev review">
            <p className={styles.proseSingle}>
              Once the component is designed and documented, it goes through another round of
              developer review. The developers review the designs and documentation, sharing
              feedback on improvements, technical considerations, or overlooked edge cases. Most
              feedback is addressed asynchronously, while major points are discussed and resolved
              in a review call.
            </p>
          </Copy>

          <Copy title="Design review">
            <p className={styles.proseSingle}>
              Once the component is developed, a final check ensures the built version matches the
              original design. At this stage, any discrepancies whether in visual design, prop
              naming, or behaviour are identified and resolved.
            </p>
          </Copy>

          <Copy title="Time to go live">
            <div className={styles.prose}>
              <p>
                Once the component is finalized, we publish it in our Figma library for designers
                to start using, and the development team begins building it in parallel.
              </p>
              <p>
                even after release, feedback, new requirements, and change requests can arise at
                any time. If a use case is valid, we prioritize and update the component
                accordingly.
              </p>
            </div>
            <Figure
              src={imgSlack}
              caption="Published announcement on Slack channel for the components"
            />
          </Copy>

          <Copy>
            <p className={styles.proseSingle}>
              Much like any other design process, this one isn&apos;t strictly linear there&apos;s
              plenty of back-and-forth at different stages before the component is finalized and
              shipped.
            </p>
          </Copy>
        </main>
      </div>
    </div>
  );
}
