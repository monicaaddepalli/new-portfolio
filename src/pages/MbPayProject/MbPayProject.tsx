import { useLayoutEffect } from 'react';
import styles from './MbPayProject.module.css';

const hero = '/assets/v3/home/mb-pay.png?v=20261109-1';

const learnings = [
  {
    lead: 'Designed a payment flow for the first time:',
    detail:
      'Understanding how payment methods, offers, transaction states and post-payment actions come together.',
  },
  {
    lead: 'No direct competitor meant more room to explore:',
    detail:
      'I could experiment with different approaches instead of following an established pattern.',
  },
  {
    lead: 'Designing for a new behaviour:',
    detail:
      'The challenge wasn\u2019t just making payment easy, but giving users a reason to pay through MediBuddy.',
  },
  {
    lead: 'AI made experimentation faster:',
    detail:
      'Building the MVP helped me move beyond static screens and experience the product more realistically.',
  },
];

export function MbPayProject() {

  return (
    <div className={styles.page} data-name="mb pay">
      <div className={styles.headerBlur} aria-hidden="true">
        <div className={styles.headerBlurBg} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurSoft}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurMedium}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurStrong}`} />
        <div className={`${styles.headerBlurFilter} ${styles.headerBlurExtra}`} />
      </div>

      <article className={styles.article}>
        <div className={styles.media}>
          <img
            className={styles.image}
            src={hero}
            alt="MB Pay rewards screen on a phone"
            width={280}
            height={420}
          />
          <a className={styles.back} href="/" data-header-link="" data-style="Body Mono">
            <svg width="12" height="12" viewBox="0 0 16 16" aria-hidden="true">
              <path
                fill="currentColor"
                d="M6.7 2.3 1.6 8l5.1 5.7.9-.8L3.6 8.6H15V7.4H3.6l4-4.3z"
              />
            </svg>
            Back to home
          </a>
        </div>

        <div className={styles.copy}>
          <h1 className={styles.title}>MB Pay</h1>

          <section className={styles.section}>
            <h2 className={styles.label}>
              What&rsquo;s MediBuddy?
            </h2>
            <p>
              MediBuddy is a digital healthcare platform that brings different healthcare needs
              together in one place, from consultations and diagnostics to medicines and other
              healthcare services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>
              What is MB Pay?
            </h2>
            <h3 className={styles.subhead}>
              What if healthcare payments worked like Dineout?
            </h3>
            <div className={styles.prose}>
              <p>
                Healthcare payments are usually straightforward. You receive the bill, pay the
                provider, and move on. But MB Pay explored a different idea: what if paying through
                MediBuddy gave users something back?
              </p>
              <p>
                The vision was to make MediBuddy the &ldquo;Dineout of healthcare&rdquo;, allowing
                users to pay healthcare providers through the platform and unlock exclusive offers
                and rewards along the way.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>
              Problem
            </h2>
            <h3 className={styles.subhead}>
              Why would anyone pay through MediBuddy?
            </h3>
            <p>
              Adding another payment method wasn&rsquo;t enough; users needed a reason to change
              their existing payment habits. MB Pay aimed to provide that incentive through offers
              such as discounts, cashback, provider offers, and healthcare vouchers.
            </p>
          </section>

          <section className={`${styles.section} ${styles.experience}`}>
            <h2 className={styles.label}>
              The Experience
            </h2>
            <h3 className={styles.subhead}>
              It wasn&rsquo;t just a payment flow.
            </h3>
            <div className={styles.prose}>
              <p>
                The journey brought together multiple steps, from service selection and provider
                discovery to payment, offer redemption, and invoice upload. Users could choose a
                service, find a provider, enter the amount, apply an offer, complete the payment,
                and upload their invoice.
              </p>
              <p>
                There were two ways to discover providers: users could search for mapped providers
                on the platform or scan a QR code to make payments at other providers.
              </p>
            </div>
            <h3 className={styles.subhead}>
              The tricky part was the offers.
            </h3>
            <p>
              Offer eligibility depended on factors like the provider, service, payment method,
              transaction amount, and usage limits. The challenge was to handle this complexity
              behind the scenes while keeping the experience simple for users.
            </p>
            <h3 className={styles.subhead}>
              And then came the invoice.
            </h3>
            <p>
              The payment wasn&rsquo;t quite the end. Users also had to upload their invoice, which
              was important for transaction verification and abuse control.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>
              Building the MVP
            </h2>
            <div className={styles.prose}>
              <p>
                I wanted to see the idea work beyond static screens, so I used AI to turn my Figma
                designs and product logic into a working MVP that I could interact with.
              </p>
              <p>
                Going from Figma to AI-assisted development helped me experience the actual flow,
                test how different interactions came together, and iterate on details that are
                difficult to evaluate in a static prototype.
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>
              Learnings
            </h2>
            <ul className={styles.learnings}>
              {learnings.map((item) => (
                <li key={item.lead}>
                  <span className={styles.lead} data-style="Large">
                    {item.lead}
                  </span>{' '}
                  <span className={styles.detail}>{item.detail}</span>
                </li>
              ))}
            </ul>
          </section>

          <p className={styles.note} data-style="Heading 2">
            P.S. Due to NDA restrictions, this project can be presented in detail over a call.
          </p>
        </div>
      </article>
    </div>
  );
}
