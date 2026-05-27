import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { applyTheme, getInitialTheme } from '../../lib/theme';
import styles from './TypographyBlog.module.css';

const imgHero = '/assets/blog/typography/hero.png';
const imgMobileTypescale = '/assets/blog/typography/mobile-typescale.png';
const imgNextBreakpoint = '/assets/blog/typography/next-breakpoint.png';
const imgBreakpoints = '/assets/blog/typography/breakpoints.png';
const imgGeneratedSystem = '/assets/blog/typography/generated-system.png';
const imgResponsivenessScale = '/assets/blog/typography/responsiveness-scale.png';
const imgFreezingScale = '/assets/blog/typography/freezing-scale.png';

function MediaImage({
  src,
  hero,
  fill,
}: {
  src: string;
  hero?: boolean;
  fill?: string;
}) {
  const wrapClass = [styles.media, hero && styles.mediaHero].filter(Boolean).join(' ');

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

export function TypographyBlog() {
  useLayoutEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.page} data-node-id="230:293" data-name="ds typography blog">
        <div className={styles.pageShell}>
          <header className={`${styles.contentColumn} ${styles.stack60}`}>
            <div className={styles.backRow}>
              <Link className={styles.backLink} to="/?tab=blog" data-muted>
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

            <div className={styles.stack0}>
              <p className={styles.primary}>how to build a responsive typographic system</p>
              <p className={styles.secondary}>
                a step-by-step guide to building a type system that works across every screen size
              </p>
            </div>
          </header>

          <MediaImage src={imgHero} hero fill="var(--hero-media-surface)" />

          <section className={styles.section}>
            <blockquote className={styles.blockquote}>
              <p>most of the UI is basically text, so why not get it right?</p>
            </blockquote>
            <p className={styles.secondary}>
              setting up a good typographic system is crucial for modern product design. but wait, what
              makes such a system good?
            </p>
            <p className={styles.emphasis}>well, a good system should:</p>
            <ol className={styles.orderedList}>
              <li>
                ensure design consistency and readability across all devices (mobile, tablets, laptops,
                desktops, and even large-screen TVs.)
              </li>
              <li>
                adapt based on use cases: user interfaces, marketing pages, banners, or even internal
                dashboards.
              </li>
              <li>
                set rules and guidelines for designers to effectively use typography in their designs.
              </li>
            </ol>
            <p className={styles.secondary}>so, how might we build such a system?</p>
          </section>

          <section className={styles.section}>
            <p className={styles.heading}>step 1: select a typeface</p>
            <div className={styles.sectionBody}>
              <p className={styles.secondary}>
                the typeface defines the tone of your product. it should reflect your brand&apos;s
                personality while remaining clear and legible across all devices.
              </p>
              <div className={styles.stack8}>
                <p className={styles.secondary}>two commonly used typefaces are:</p>
                <ol className={styles.orderedList}>
                  <li>serifs: ideal for creating a formal or traditional feel.</li>
                  <li>sans-serifs: modern, clean, and more versatile for digital interfaces.</li>
                </ol>
              </div>
              <div className={styles.stack8}>
                <p className={styles.secondary}>
                  application of typefaces depends on the brand. some common combinations are:
                </p>
                <ol className={styles.orderedList}>
                  <li>
                    only sans-serif: google uses roboto for both headings and body text, creating a
                    modern, unified look.
                  </li>
                  <li>
                    serif + sans-serif: the new york times pairs cheltenham (serif) for headings with
                    franklin gothic (sans-serif) for body text.
                  </li>
                </ol>
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.heading}>step 2: set a type-scale</p>
            <div className={styles.sectionBody}>
            <p className={styles.secondary}>
              a type-scale is a collection of predefined font sizes that ensures balance and contrast in
              the created designs. when creating a scale in music, we choose notes that are carefully
              spaced to create harmony. similarly, a type-scale uses specific gaps between font sizes to
              create harmony in the designs.
            </p>
            <div className={styles.stack12}>
              <div className={styles.stack8}>
                <p className={styles.emphasis}>how to apply a type-scale</p>
                <ol className={styles.orderedList}>
                  <li>select a base font size (e.g., 16px, the default for most browsers).</li>
                  <li>select a scaling factor.</li>
                  <li>multiply the base size by the scaling factor to generate the next size.</li>
                </ol>
              </div>
              <div className={styles.stack8}>
                <p className={styles.secondary}>
                  for example, with a base size of 16px and the perfect fourth scale (1.333):
                </p>
                <ul className={styles.bulletList}>
                  <li>16px × 1.333 ≈ 21px</li>
                  <li>21px × 1.333 ≈ 28px</li>
                </ul>
              </div>
            </div>
            <div className={styles.stack12}>
              <p className={styles.emphasis}>categories of scales based on contrast</p>
              <div className={styles.stack16}>
                <div className={styles.stack8}>
                  <ol className={styles.orderedListPrimary} start={1}>
                    <li>low contrast scales</li>
                  </ol>
                  <p className={styles.secondary}>
                    perfect for dashboards and content heavy pages.
                  </p>
                  <ul className={styles.bulletList}>
                    <li>minor second (1.067)</li>
                    <li>major second (1.125)</li>
                  </ul>
                </div>
                <div className={styles.stack8}>
                  <ol className={styles.orderedListPrimary} start={2}>
                    <li>medium contrast scales</li>
                  </ol>
                  <p className={styles.secondary}>
                    commonly found in app screen UI. has good readability and hierarchy.
                  </p>
                  <ul className={styles.bulletList}>
                    <li>minor third (1.200)</li>
                    <li>major third (1.250)</li>
                    <li>perfect fourth (1.333)</li>
                  </ul>
                </div>
                <div className={styles.stack8}>
                  <ol className={styles.orderedListPrimary} start={3}>
                    <li>high contrast scales</li>
                  </ol>
                  <p className={styles.secondary}>
                    best for marketing pages, hero sections, and landing screens which need high contrast
                    between the body and headings.
                  </p>
                  <ul className={styles.bulletList}>
                    <li>augmented fourth (1.414)</li>
                    <li>perfect fifth (1.500)</li>
                    <li>golden ratio (1.618)</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.stack8}>
              <p className={styles.heading}>tools to automate type-scales</p>
              <p className={styles.secondary}>
                there&apos;s no need to do the maths to generate these manually! use these tools instead:
              </p>
              <ul className={styles.bulletList}>
                <li>
                  <a
                    className={styles.inlineLink}
                    href="https://type-scale.com/"
                    target="_blank"
                    rel="noreferrer"
                    data-secondary-link
                  >
                    type-scale calculator
                  </a>
                </li>
                <li>
                  figma plugins: search for &quot;type-scale generator&quot; in the figma plugins.
                </li>
              </ul>
            </div>
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.heading}>step 3: set a line height</p>
            <div className={styles.sectionBody}>
            <p className={styles.secondary}>
              line height is the vertical space between lines of text. it impacts readability and visual
              hierarchy, so getting the right balance becomes important.
            </p>
            <p className={styles.secondary}>
              the web content accessibility guidelines (WCAG) recommends a line height of 1.5 for better
              readability, particularly for users with visual impairments or attention difficulties.
            </p>
            <p className={styles.secondary}>
              for headings and display fonts on a landing page, a line height of 1.2 - 1.3 also works.
            </p>
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.heading}>step 4: make it responsive - the TL:DR version</p>
            <div className={styles.sectionBody}>
              <div className={styles.stepBlock}>
                <div className={styles.stack8}>
                  <ol className={styles.orderedListPrimary} start={1}>
                    <li>start with creating the typescale for mobile</li>
                  </ol>
                  <p className={styles.secondary}>
                    with a root size of 16 and a scale of 1.2, the mobile typescale will look like this:
                  </p>
                </div>
                <MediaImage src={imgMobileTypescale} />
              </div>
              <div className={styles.stepBlock}>
                <div className={styles.stack8}>
                  <ol className={styles.orderedListPrimary} start={2}>
                    <li>generate for the next breakpoint</li>
                  </ol>
                  <p className={styles.secondary}>
                    to generate font sizes for the next breakpoint, simply multiply the scaling factor by
                    each mobile font size.
                  </p>
                </div>
                <MediaImage src={imgNextBreakpoint} />
              </div>
              <div className={styles.stepBlockWide}>
                <div className={styles.stack8}>
                  <ol className={styles.orderedListPrimary} start={3}>
                    <li>repeat for all breakpoints</li>
                  </ol>
                  <p className={styles.secondary}>
                    here are the commonly breakpoints used in responsive design:
                  </p>
                </div>
                <MediaImage src={imgBreakpoints} />
                <div className={styles.stack8}>
                  <p className={styles.secondary}>
                    based on the breakpoints, the generated system will be the following:
                  </p>
                  <p className={styles.exampleNote}>
                    example: root: 16, typescale: 1.2 and responsiveness scale: 1.2
                  </p>
                </div>
                <MediaImage src={imgGeneratedSystem} />
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <p className={styles.heading}>additional points to keep in mind</p>
            <div className={styles.sectionBody}>
            <ol className={styles.orderedListPrimary} start={1}>
              <li>rounding the generated font sizes</li>
            </ol>
            <p className={styles.secondary}>
              generated font sizes often include decimals, which can be tricky to work with. rounding
              simplifies these values while maintaining general consistency. here are three common
              approaches:
            </p>
            <div className={styles.nestedGroup}>
              <div className={styles.nestedItem}>
                <p className={styles.subheading}>a. round to the nearest even number</p>
                <p className={styles.secondary}>this minimizes errors for smaller font sizes:</p>
                <ul className={styles.bulletList}>
                  <li>10.3px → 10px</li>
                  <li>15.7px → 16px</li>
                </ul>
              </div>
              <div className={styles.nestedItem}>
                <p className={styles.subheading}>b. round to the nearest multiple of 4</p>
                <p className={styles.secondary}>
                  this works well with a 4px grid system but may introduce more error for smaller sizes:
                </p>
                <ul className={styles.bulletList}>
                  <li>10px → 12px (20% error)</li>
                  <li>18px → 20px</li>
                </ul>
              </div>
              <div className={styles.nestedItem}>
                <p className={styles.subheading}>c. use odd font sizes, round line heights to multiples of 4</p>
                <p className={styles.secondary}>this ensures text blocks align with a 4px grid:</p>
                <ul className={styles.bulletList}>
                  <li>font size: 15px</li>
                  <li>line height: 15px × 1.5 = 22.5px → round to 24px</li>
                </ul>
              </div>
            </div>
            </div>
          </section>

          <section className={`${styles.section} ${styles.stepBlock}`}>
            <div className={styles.stack8}>
              <ol className={styles.orderedListPrimary} start={2}>
                <li>effects of changing the responsiveness scale</li>
              </ol>
              <p className={styles.secondary}>
                we can use a different scale to fine-tune how font sizes change between breakpoints.
              </p>
            </div>
            <p className={styles.exampleNote}>
              example: root: 16, typescale: 1.2, responsiveness scale: 1.125 with rounding to nearest even
              enabled
            </p>
            <MediaImage src={imgResponsivenessScale} />
          </section>

          <section className={`${styles.section} ${styles.stepBlock}`}>
            <div className={styles.stack8}>
              <ol className={styles.orderedListPrimary} start={3}>
                <li>freezing the scale</li>
              </ol>
              <p className={styles.secondary}>
                another strategy of building a responsive typography is to freeze the body and caption font
                size while scaling up the headings. this is seen in places like atlassian and hubspot&apos;s
                home page
              </p>
            </div>
            <p className={styles.exampleNote}>
              example: freezing the above generated scale till 16px will generate a system as follows:
            </p>
            <MediaImage src={imgFreezingScale} />
          </section>

          <section className={`${styles.section} ${styles.stack8}`}>
            <ol className={styles.orderedListPrimary} start={4}>
              <li>incorporate letter spacing where needed</li>
            </ol>
            <p className={styles.secondary}>
              letter spacing, also known as tracking, affects how text appears by adjusting the space
              between the letters.
            </p>
            <ul className={styles.bulletList}>
              <li>
                tighter letter spacing can be used for large headings, creating a bold and compact look.
              </li>
              <li>
                looser letter spacing can be used to enhance readability of text of smaller sizes.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <p className={styles.heading}>afterthoughts</p>
            <div className={styles.sectionBody}>
            <p className={styles.secondary}>
              researching for this article made one thing clear - typography doesn&apos;t have a
              one-size-fits-all solution. depending on the project and its use cases, the generated system
              can vary quite a lot.
            </p>
            <p className={styles.secondary}>
              while this article shares some common strategies to build a typographic system, we would
              recommend doing practical testing to see what works best for your use case. further, during
              testing, feel free to adjust the generated values within an acceptable margin of error to make
              the numbers more practical to use. using 15.26 px with 19.25 line height seems like a nightmare
              both for the designer and the developer!
            </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
