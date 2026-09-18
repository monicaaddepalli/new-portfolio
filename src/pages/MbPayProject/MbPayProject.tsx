import { useLayoutEffect, type ReactNode } from 'react';
import { applyTheme } from '../../lib/theme';
import styles from './MbPayProject.module.css';

const videoHero = '/assets/v2/mb-pay/hero.mp4';

const learnings = [
  {
    title: 'Designed a payment flow for the first time:',
    body: 'understanding how payment methods, offers, transaction states and post-payment actions come together.',
  },
  {
    title: 'No direct competitor meant more room to explore:',
    body: 'I could experiment with different approaches instead of following an established pattern.',
  },
  {
    title: 'Designing for a new behaviour:',
    body: 'the challenge wasn\u2019t just making payment easy, but giving users a reason to pay through MediBuddy.',
  },
  {
    title: 'AI made experimentation faster:',
    body: 'building the MVP helped me move beyond static screens and experience the product more realistically.',
  },
];

function Copy({
  heading,
  title,
  children,
}: {
  heading?: string;
  title?: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.copy}>
      {heading ? <p className={styles.heading}>{heading}</p> : null}
      <div className={styles.stack}>
        {title ? <h2 className={styles.display}>{title}</h2> : null}
        {children}
      </div>
    </section>
  );
}

export function MbPayProject() {
  useLayoutEffect(() => {
    applyTheme('light');
  }, []);

  return (
    <div className={styles.page} data-name="mb pay">
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
          <div className={styles.hero}>
            <figure className={styles.figure}>
              <div className={styles.media}>
                <video
                  src={videoHero}
                  autoPlay
                  loop
                  muted
                  playsInline
                  preload="metadata"
                  title="MB Pay hero"
                />
              </div>
            </figure>
            <div className={styles.intro}>
              <p className={styles.year}>2026</p>
              <h1 className={styles.title}>making healthcare payments rewarding</h1>
            </div>
          </div>

          <Copy heading="what's medibuddy?">
            <div className={styles.prose}>
              <p>
                MediBuddy is a digital healthcare platform that brings different healthcare needs
                together in one place, from consultations and diagnostics to medicines and other
                healthcare services.
              </p>
            </div>
          </Copy>

          <Copy
            heading="what is mb pay?"
            title="What if healthcare payments worked like Dineout?"
          >
            <div className={styles.prose}>
              <p>
                Healthcare payments are usually pretty straightforward &mdash; get the bill, pay the
                provider, and move on.
              </p>
              <p>
                MB Pay explored a different idea:{' '}
                <strong>what if paying through MediBuddy gave you something back?</strong>
              </p>
              <p>
                The vision was to make MediBuddy the{' '}
                <strong>&ldquo;Dineout of healthcare&rdquo;</strong>, where users could pay
                healthcare providers through MediBuddy and unlock offers along the way.
              </p>
            </div>
          </Copy>

          <Copy heading="problem" title="Why would anyone pay through MediBuddy?">
            <div className={styles.prose}>
              <p>
                Adding another payment method isn&apos;t enough. There needs to be a reason to
                change something users already know how to do.
              </p>
              <p>
                For MB Pay, that reason was offers &mdash; discounts, cashback, provider offers and
                healthcare vouchers.
              </p>
            </div>
          </Copy>

          <Copy heading="the experience">
            <div className={styles.groups}>
              <div className={styles.group}>
                <h2 className={styles.display}>It wasn&apos;t just a payment flow.</h2>
                <div className={styles.prose}>
                  <p>
                    The journey had to bring together service selection, provider discovery,
                    payment, offers and invoice upload.
                  </p>
                  <p>
                    Choose a service → Find a provider → Enter amount → Apply offer → Pay → Upload
                    invoice
                  </p>
                  <p>
                    There were also two ways to find a provider:{' '}
                    <strong>search for mapped providers</strong> or{' '}
                    <strong>scan a QR code for others</strong>.
                  </p>
                </div>
              </div>
              <div className={styles.group}>
                <h3 className={styles.display}>The tricky part was the offers.</h3>
                <div className={styles.prose}>
                  <p>
                    An offer could depend on the provider, service, payment method, transaction
                    amount and usage limits.
                  </p>
                  <p>There was a lot happening behind the scenes.</p>
                  <p>The user shouldn&apos;t have to care about any of it.</p>
                </div>
              </div>
              <div className={styles.group}>
                <h3 className={styles.display}>And then came the invoice.</h3>
                <div className={styles.prose}>
                  <p>
                    The payment wasn&apos;t quite the end. Users also had to upload their invoice,
                    which was important for transaction verification and abuse control.
                  </p>
                </div>
              </div>
            </div>
          </Copy>

          <Copy heading="building the mvp">
            <div className={styles.groups}>
              <div className={styles.group}>
                <h2 className={styles.display}>I wanted to see it work.</h2>
                <div className={styles.prose}>
                  <p>
                    Instead of stopping at Figma, I used AI to <strong>build the MVP</strong>.
                  </p>
                  <p>
                    I took the product logic and designs and turned them into a working experience
                    that I <strong>could actually interact with</strong>.
                  </p>
                </div>
              </div>
              <div className={styles.group}>
                <h3 className={styles.display}>From design to build</h3>
                <div className={styles.prose}>
                  <p>Figma → AI-assisted development → Working MVP</p>
                  <p>
                    The interesting part wasn&apos;t just getting the screens into code. Building
                    the experience made it possible to see how the flow actually behaved and iterate
                    on things that are difficult to judge in a static prototype.
                  </p>
                </div>
              </div>
            </div>
          </Copy>

          <Copy heading="learnings">
            <ol className={styles.learnings}>
              {learnings.map((item) => (
                <li key={item.title}>
                  <strong>{item.title}</strong> {item.body}
                </li>
              ))}
            </ol>
          </Copy>

          <p className={styles.note}>
            P.S. Due to NDA restrictions, this project can be presented in detail over a call.
          </p>
        </main>
      </div>
    </div>
  );
}
