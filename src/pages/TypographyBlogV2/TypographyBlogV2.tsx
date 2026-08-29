import { useLayoutEffect, type ReactNode } from 'react';
import { OptimizedImage } from '../../components/OptimizedImage';
import { applyTheme } from '../../lib/theme';
import styles from './TypographyBlogV2.module.css';

const imgMobileTypescale = '/assets/v2/typography/mobile-typescale.png';
const imgNextBreakpoint = '/assets/v2/typography/next-breakpoint.png';
const imgBreakpoints = '/assets/v2/typography/breakpoints.png';
const imgGeneratedSystem = '/assets/v2/typography/generated-system.png';
const imgResponsivenessScale = '/assets/v2/typography/responsiveness-scale.png';
const imgFreezingScale = '/assets/v2/typography/freezing-scale.png';

function Figure({
  src,
  ratio,
}: {
  src: string;
  ratio: string;
}) {
  return (
    <figure className={styles.figure} style={{ aspectRatio: ratio }}>
      <OptimizedImage src={src} alt="" />
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

export function TypographyBlogV2() {
  useLayoutEffect(() => {
    applyTheme('light');
  }, []);

  return (
    <div className={styles.page} data-name="typography blog">
      <div className={styles.headerBlur} aria-hidden="true">
        <div className={styles.headerBlurBg} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurSoft}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurMedium}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurStrong}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurExtra}`} />
      </div>

      <div className={styles.shell}>
        <header className={styles.header}>
          <a className={styles.identity} href="/" aria-label="Home">
            monica addepalli
          </a>
        </header>

        <main className={styles.main}>
          <div className={styles.intro}>
            <p className={styles.year}>2026</p>
            <h1 className={styles.title}>
              building a responsive
              <br />
              typographic system
            </h1>
          </div>

          <Copy title="background">
            <div className={styles.prose}>
              <p>Most of the UI is basically text, so why not get it right?</p>
              <p>
                Setting up a good typographic system is crucial for modern product design. But wait,
                what makes such a system good?
              </p>
              <p className={styles.emphasis}>Well, a good system should:</p>
              <ol className={styles.numbers}>
                <li>
                  Ensure design consistency and readability across all devices (mobile, tablets,
                  laptops, desktops, and even large-screen TVs.)
                </li>
                <li>
                  Adapt based on use cases: user interfaces, marketing pages, banners, or even
                  internal dashboards.
                </li>
                <li>
                  Set rules and guidelines for designers to effectively use typography in their
                  designs.
                </li>
              </ol>
              <p>So, how might we build such a system?</p>
            </div>
          </Copy>

          <div className={styles.blockTight}>
            <h3 className={styles.step}>Step 1: Select a Typeface</h3>
            <div className={styles.prose}>
              <p>
                The typeface defines the tone of your product. It should reflect your brand&apos;s
                personality while remaining clear and legible across all devices.
              </p>
              <div className={styles.stack16}>
                <p>Two commonly used typefaces are:</p>
                <ol className={styles.numbers}>
                  <li>
                    <strong>Serifs:</strong> Ideal for creating a formal or traditional feel.
                  </li>
                  <li>
                    <strong>Sans-serifs:</strong> Modern, clean, and more versatile for digital
                    interfaces.
                  </li>
                </ol>
              </div>
              <div className={styles.stack16}>
                <p>Application of typefaces depends on the brand. Some common combinations are:</p>
                <ol className={styles.numbers}>
                  <li>
                    <strong>Only sans-serif:</strong> Google uses Roboto for both headings and body
                    text, creating a modern, unified look.
                  </li>
                  <li>
                    <strong>Serif + Sans-serif:</strong> The New York Times pairs Cheltenham (serif)
                    for headings with Franklin Gothic (sans-serif) for body text.
                  </li>
                </ol>
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <h3 className={styles.step}>Step 2: Set a Type-Scale</h3>
            <p className={styles.proseSingle}>
              A type-scale is a collection of predefined font sizes that ensures balance and
              contrast in the created designs. When creating a scale in music, we choose notes that
              are carefully spaced to create harmony. Similarly, a type-scale uses specific gaps
              between font sizes to create harmony in the designs.
            </p>
            <div className={styles.stack40}>
              <div className={styles.prose}>
                <div className={styles.stack12}>
                  <p className={styles.emphasis}>How to apply a Type-scale</p>
                  <ol className={styles.numbers}>
                    <li>Select a base font size (e.g., 16px, the default for most browsers).</li>
                    <li>Select a scaling factor.</li>
                    <li>Multiply the base size by the scaling factor to generate the next size.</li>
                  </ol>
                </div>
                <div className={styles.stack12}>
                  <p>
                    For example, with a base size of 16px and the Perfect Fourth scale (1.333):
                  </p>
                  <ul className={styles.bullets}>
                    <li>16px × 1.333 ≈ 21px</li>
                    <li>21px × 1.333 ≈ 28px</li>
                  </ul>
                </div>
              </div>
              <div className={styles.prose}>
                <p className={styles.emphasis}>Categories of scales based on contrast</p>
                <div className={styles.stack16}>
                  <div className={styles.stack12}>
                    <ol className={styles.numbersEmphasis} start={1}>
                      <li>Low Contrast Scales</li>
                    </ol>
                    <p>Perfect for dashboards and content heavy pages.</p>
                    <ul className={styles.bullets}>
                      <li>Minor Second (1.067)</li>
                      <li>Major Second (1.125)</li>
                    </ul>
                  </div>
                  <div className={styles.stack12}>
                    <ol className={styles.numbersEmphasis} start={2}>
                      <li>Medium Contrast Scales</li>
                    </ol>
                    <p>Commonly found in app screen UI. Has good readability and hierarchy.</p>
                    <ul className={styles.bullets}>
                      <li>Minor Third (1.200)</li>
                      <li>Major Third (1.250)</li>
                      <li>Perfect Fourth (1.333)</li>
                    </ul>
                  </div>
                  <div className={styles.stack12}>
                    <ol className={styles.numbersEmphasis} start={3}>
                      <li>High Contrast Scales</li>
                    </ol>
                    <p>
                      Best for marketing pages, hero sections, and landing screens which need high
                      contrast between the body and headings.
                    </p>
                    <ul className={styles.bullets}>
                      <li>Augmented Fourth (1.414)</li>
                      <li>Perfect Fifth (1.500)</li>
                      <li>Golden Ratio (1.618)</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className={styles.stack12}>
                <p className={styles.emphasis}>Tools to Automate Type-scales</p>
                <p className={styles.proseSingle}>
                  There&apos;s no need to do the maths to generate these manually! Use these tools
                  instead:
                </p>
                <ul className={styles.bullets}>
                  <li>
                    <a
                      className={styles.inlineLink}
                      href="https://type-scale.com/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Type-Scale Calculator
                    </a>
                  </li>
                  <li>
                    Figma Plugins: Search for &quot;type-scale generator&quot; in the Figma plugins.
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.blockTight}>
            <h3 className={styles.step}>Step 3: Set a line height</h3>
            <p className={styles.proseSingle}>
              Line height is the vertical space between lines of text. It impacts readability and
              visual hierarchy, so getting the right balance becomes important.
            </p>
            <p className={styles.proseSingle}>
              The Web Content Accessibility Guidelines (WCAG) recommends a line height of 1.5 for
              better readability, particularly for users with visual impairments or attention
              difficulties.
            </p>
            <p className={styles.proseSingle}>
              For headings and display fonts on a landing page, a line height of 1.2 - 1.3 also
              works.
            </p>
          </div>

          <div className={styles.block}>
            <h3 className={styles.step}>step 4: Make it responsive - The TL:DR version</h3>
            <div className={styles.stack40}>
              <div className={styles.stack20}>
                <div className={styles.stack12}>
                  <ol className={styles.numbersEmphasis} start={1}>
                    <li>Start with creating the typescale for mobile</li>
                  </ol>
                  <p className={styles.proseSingle}>
                    With a root size of 16 and a scale of 1.2, the mobile typescale will look like
                    this:
                  </p>
                </div>
                <Figure src={imgMobileTypescale} ratio="1382 / 494" />
              </div>
              <div className={styles.stack20}>
                <div className={styles.stack12}>
                  <ol className={styles.numbersEmphasis} start={2}>
                    <li>Generate for the next breakpoint</li>
                  </ol>
                  <p className={styles.proseSingle}>
                    To generate font sizes for the next breakpoint, simply multiply the scaling
                    factor by each mobile font size.
                  </p>
                </div>
                <Figure src={imgNextBreakpoint} ratio="1382 / 494" />
              </div>
              <div className={styles.stack20}>
                <div className={styles.stack12}>
                  <ol className={styles.numbersEmphasis} start={3}>
                    <li>Repeat for all breakpoints</li>
                  </ol>
                  <p className={styles.proseSingle}>
                    Here are the commonly breakpoints used in responsive design:
                  </p>
                </div>
                <Figure src={imgBreakpoints} ratio="1382 / 422" />
                <div className={styles.stack12}>
                  <p className={styles.proseSingle}>
                    Based on the breakpoints, the generated system will be the following:
                  </p>
                  <p className={styles.proseSingle}>
                    Example: Root: 16, Typescale: 1.2 and Responsiveness Scale: 1.2
                  </p>
                </div>
                <Figure src={imgGeneratedSystem} ratio="1382 / 492" />
              </div>
            </div>
          </div>

          <div className={styles.stack40}>
            <h2 className={styles.display}>additional points to keep in mind</h2>
            <div className={styles.stack20}>
              <h3 className={styles.step}>1. Rounding the generated font sizes</h3>
              <p className={styles.proseSingle}>
                Generated font sizes often include decimals, which can be tricky to work with.
                Rounding simplifies these values while maintaining general consistency. Here are
                three common approaches:
              </p>
              <div className={styles.stack20}>
                <div className={styles.stack12}>
                  <p className={styles.emphasis}>a. Round to the nearest even number</p>
                  <p className={styles.proseSingle}>This minimizes errors for smaller font sizes:</p>
                  <ul className={styles.bullets}>
                    <li>10.3px → 10px</li>
                    <li>15.7px → 16px</li>
                  </ul>
                </div>
                <div className={styles.stack12}>
                  <p className={styles.emphasis}>b. Round to the nearest multiple of 4</p>
                  <p className={styles.proseSingle}>
                    This works well with a 4px grid system but may introduce more error for smaller
                    sizes:
                  </p>
                  <ul className={styles.bullets}>
                    <li>10px → 12px (20% error)</li>
                    <li>18px → 20px</li>
                  </ul>
                </div>
                <div className={styles.stack12}>
                  <p className={styles.emphasis}>
                    c. Use odd font sizes, round line heights to multiples of 4
                  </p>
                  <p className={styles.proseSingle}>This ensures text blocks align with a 4px grid:</p>
                  <ul className={styles.bullets}>
                    <li>Font size: 15px</li>
                    <li>Line height: 15px × 1.5 = 22.5px → round to 24px</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.stack20}>
              <h3 className={styles.step}>2. Effects of changing the responsiveness scale</h3>
              <p className={styles.proseSingle}>
                We can use a different scale to fine-tune how font sizes change between breakpoints.
              </p>
              <p className={styles.proseSingle}>
                Example: Root: 16, Typescale: 1.2, Responsiveness Scale: 1.125 with rounding to
                nearest even enabled
              </p>
              <Figure src={imgResponsivenessScale} ratio="1382 / 494" />
            </div>
            <div className={styles.stack20}>
              <h3 className={styles.step}>3. Freezing the scale</h3>
              <p className={styles.proseSingle}>
                Another strategy of building a responsive typography is to freeze the body and
                caption font size while scaling up the headings. This is seen in places like
                Atlassian and Hubspot&apos;s home Page
              </p>
              <p className={styles.proseSingle}>
                Example: Freezing the above generated scale till 16px will generate a system as
                follows:
              </p>
              <Figure src={imgFreezingScale} ratio="1382 / 492" />
            </div>
            <div className={styles.stack20}>
              <h3 className={styles.step}>4. Incorporate letter spacing where needed</h3>
              <p className={styles.proseSingle}>
                Letter spacing, also known as tracking, affects how text appears by adjusting the
                space between the letters.
              </p>
              <ul className={styles.bullets}>
                <li>
                  Tighter letter spacing can be used for large headings, creating a bold and compact
                  look.
                </li>
                <li>
                  Looser letter spacing can be used to enhance readability of text of smaller sizes.
                </li>
              </ul>
            </div>
          </div>

          <Copy title="Afterthoughts">
            <div className={styles.prose}>
              <p>
                Researching for this article made one thing clear - typography doesn&apos;t have a
                one-size-fits-all solution. Depending on the project and its use cases, the
                generated system can vary quite a lot.
              </p>
              <p>
                While this article shares some common strategies to build a typographic system, we
                would recommend doing practical testing to see what works best for your use case.
                Further, during testing, feel free to adjust the generated values within an
                acceptable margin of error to make the numbers more practical to use. Using 15.26 px
                with 19.25 line height seems like a nightmare both for the designer and the
                developer!
              </p>
            </div>
          </Copy>
        </main>
      </div>
    </div>
  );
}
