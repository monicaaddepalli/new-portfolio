import { useLayoutEffect, type ReactNode } from 'react';
import { OptimizedImage } from '../../components/OptimizedImage';
import { applyTheme } from '../../lib/theme';
import styles from './InclinicProject.module.css';

const imgHero = '/assets/v2/inclinic/hero.png?v=20260829-1';
const imgContext = '/assets/v2/inclinic/context.png?v=20260828-3';
const imgPainPoints = '/assets/v2/inclinic/pain-points.png?v=20260828-3';
const imgSymptomSearch = '/assets/v2/inclinic/symptom-search.png?v=20260828-3';
const imgMultiCategory = '/assets/v2/inclinic/multi-category.png?v=20260828-3';
const imgGuidedSearch = '/assets/v2/inclinic/guided-search.png?v=20260828-3';
const imgFiltersListing = '/assets/v2/inclinic/filters-listing.png?v=20260828-3';
const imgFiltersSheet = '/assets/v2/inclinic/filters-sheet.png?v=20260828-3';

function Figure({
  src,
  caption,
  priority,
  hero,
}: {
  src: string;
  caption?: string;
  priority?: boolean;
  hero?: boolean;
}) {
  return (
    <figure className={`${styles.figure} ${caption ? styles.figureCaptioned : ''} ${hero ? styles.figureHero : ''}`}>
      <div className={styles.media}>
        <OptimizedImage src={src} alt="" width={1600} height={756} priority={priority} />
      </div>
      {caption ? <figcaption className={styles.caption}>{caption}</figcaption> : null}
    </figure>
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
    <section className={styles.copy}>
      <h2 className={styles.heading}>{heading}</h2>
      {children}
    </section>
  );
}

export function InclinicProject() {
  useLayoutEffect(() => {
    applyTheme('light');
  }, []);

  return (
    <div className={styles.page} data-name="inclinic search and filters">
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
            <Figure src={imgHero} hero priority />
            <div className={styles.intro}>
              <p className={styles.year}>2026</p>
              <h1 className={styles.title}>Improving Doctor Booking Conversion to 32%</h1>
            </div>
          </div>

          <Copy heading="background">
            <div className={styles.prose}>
              <p>
                Doctor discovery is one of the most important stages in the in-clinic consultation
                journey. Before booking an appointment, users need to find a doctor that matches
                their symptoms, preferred specialization, hospital, or a specific doctor they
                already know.
              </p>
              <p>
                As MediBuddy&apos;s network continued to grow, so did the complexity of finding the
                right doctor. Search and filters became critical tools for discovery, yet existing
                experiences were not effectively supporting how users naturally searched for care.
              </p>
            </div>
          </Copy>

          <Figure src={imgContext} />

          <Copy heading="problem">
            <div className={styles.prose}>
              <p>
                Search was a key entry point for doctor discovery, but it underperformed compared to
                filter-led journeys, converting at 18.36% versus 22%. Nearly 40% of searches
                resulted in no outcome, with symptom-based queries accounting for 8% of all
                searches. More importantly, around 80% of users didn&apos;t have a specific doctor
                or hospital in mind, revealing an opportunity to reduce discovery friction and
                consultation drop-offs.
              </p>
            </div>
          </Copy>

          <Figure
            src={imgPainPoints}
            caption="User pain points identified from our research"
          />

          <Copy heading="opportunities">
            <ol className={styles.opportunities}>
              <li>Symptom-based doctor discovery</li>
              <li>Multi-category search results</li>
              <li>Guided search suggestions</li>
              <li>Structured &amp; scalable filters</li>
            </ol>
          </Copy>

          <Copy heading="Symptom-based doctor discovery">
            <div className={styles.prose}>
              <p>
                Search analysis revealed that{' '}
                <strong>symptom-based queries accounted for 8% of all searches</strong>, yet they
                had the <strong>highest null search rate (43.7%)</strong>. Users naturally searched
                using symptoms like fever, headache, and chest pain, but the existing experience
                only recognized doctors, hospitals, and specializations, often leading to dead ends.
              </p>
              <p>
                We introduced symptom-based search, enabling users to search using the symptoms they
                were experiencing and discover doctors related to those symptoms.
              </p>
            </div>
          </Copy>

          <Figure src={imgSymptomSearch} />

          <Copy heading="Multi-category Search Results">
            <div className={styles.prose}>
              <p>
                Search analysis showed that{' '}
                <strong>
                  nearly 80% of users didn&apos;t have a specific doctor or hospital preference
                </strong>
                , indicating that most users were exploring rather than searching for someone
                specific. Search behaviour also revealed multiple discovery paths, with users
                searching for{' '}
                <strong>
                  Doctors (27.6%), Specialities (27.6%), Hospitals (27.2%), and Symptoms (7.7%)
                </strong>
                .
              </p>
              <p>
                Instead of treating every query the same, we redesigned search to surface results
                across <strong>Symptoms, Specializations, Hospitals, and Doctors,</strong> making it
                easier for users to understand what they were searching for and discover the right
                doctor through multiple entry points.
              </p>
            </div>
          </Copy>

          <Figure src={imgMultiCategory} />

          <Copy heading="Guided Search Suggestions">
            <div className={styles.prose}>
              <p>
                Search-led journeys converted at <strong>18.36%</strong>, compared to{' '}
                <strong>22%</strong> for filter-led journeys, while{' '}
                <strong>40% of searches resulted in no outcome</strong>. Many of these failures were
                caused by misspellings, abbreviations, and partial queries such as Gyno or Appol,
                preventing users from reaching relevant results despite the information being
                available.
              </p>
              <p>
                To reduce search failures, we introduced <strong>guided search suggestions</strong>{' '}
                that surfaced relevant matches after users typed two characters, clearly categorized
                each result, and supported fuzzy matching across the catalog to make search faster
                and more forgiving.
              </p>
            </div>
          </Copy>

          <Figure src={imgGuidedSearch} />

          <Copy heading="Structured & Scalable Filters">
            <div className={styles.prose}>
              <p>
                While search helped users discover doctors, filters played a critical role in
                helping them narrow their choices. Analysis showed that{' '}
                <strong>filter-led journeys converted 4.4% higher (22%)</strong> than search-led
                journeys, highlighting the importance of efficient refinement before booking. We
                analyzed user behaviour to understand which filters were used most frequently,
                allowing us to prioritize the most relevant actions directly on the listing page and
                reduce unnecessary interactions.
              </p>
              <p>
                Based on these insights, we surfaced the most commonly used filters upfront for
                quicker access, while moving the remaining options into a{' '}
                <strong>structured bottom sheet</strong>. Organizing filters across{' '}
                <strong>
                  Specialization, Hospital, Availability, Experience, Consultation Fee, and Distance
                </strong>{' '}
                created a scalable system that balanced speed for common tasks with flexibility for
                advanced refinement, helping users reach the right doctor with less effort.
              </p>
            </div>
          </Copy>

          <div className={styles.filterPair}>
            <Figure src={imgFiltersListing} />
            <Figure src={imgFiltersSheet} />
          </div>

          <Copy heading="impact">
            <div className={styles.impact}>
              <div className={styles.statGrid}>
                <div className={styles.statCard}>
                  <p className={styles.statValue}>18% → 32%</p>
                  <p className={styles.statLabel}>Search conversion</p>
                </div>
                <div className={styles.statCard}>
                  <p className={styles.statValue}>22% → 47%</p>
                  <p className={styles.statLabel}>Filter-led conversion</p>
                </div>
              </div>

              <div className={styles.metrics}>
                <p className={styles.metricsTitle}>search &amp; discovery improved</p>
                <ul className={styles.metricList}>
                  <li>
                    <span className={styles.metricDash} aria-hidden="true">
                      -
                    </span>
                    <span>
                      <span className={styles.metricName}>null searches</span>
                      <span className={styles.metricValue}>40% → 5%</span>
                    </span>
                  </li>
                  <li>
                    <span className={styles.metricDash} aria-hidden="true">
                      -
                    </span>
                    <span>
                      <span className={styles.metricName}>monthly gmv</span>
                      <span className={styles.metricValue}>₹3 Cr+</span>
                    </span>
                  </li>
                  <li>
                    <span className={styles.metricDash} aria-hidden="true">
                      -
                    </span>
                    <span>
                      <span className={styles.metricName}>Daily doctor slot checks</span>
                      <span className={styles.metricValue}>1,300+</span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </Copy>
        </main>
      </div>
    </div>
  );
}
