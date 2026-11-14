import { useLayoutEffect } from 'react';
import styles from './InclinicProject.module.css';

const hero = '/assets/v3/home/inclinic.png?v=20261109-1';
const imgContext = '/assets/v2/inclinic/context.png?v=20260828-3';
const imgPainPoints = '/assets/v2/inclinic/pain-points.png?v=20260828-3';
const imgSymptomSearch = '/assets/v2/inclinic/symptom-search.png?v=20260828-3';
const imgMultiCategory = '/assets/v2/inclinic/multi-category.png?v=20260828-3';
const imgGuidedSearch = '/assets/v2/inclinic/guided-search.png?v=20260828-3';
const imgFiltersListing = '/assets/v2/inclinic/filters-listing.png?v=20260828-3';
const imgFiltersSheet = '/assets/v2/inclinic/filters-sheet.png?v=20260828-3';

export function InclinicProject() {

  return (
    <div className={styles.page} data-name="in clinic">
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
            alt="In Clinic search screen on a phone"
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
          <h1 className={styles.title}>In Clinic</h1>

          <section className={styles.section}>
            <h2 className={styles.label}>Background</h2>
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
            <img className={styles.figure} src={imgContext} alt="Doctor listing page" />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Problem</h2>
            <p>
              Search was a key entry point for doctor discovery, but it underperformed compared to
              filter-led journeys, converting at 18.36% versus 22%. Nearly 40% of searches resulted
              in no outcome, with symptom-based queries accounting for 8% of all searches. More
              importantly, around 80% of users didn&apos;t have a specific doctor or hospital in
              mind, revealing an opportunity to reduce discovery friction and consultation drop-offs.
            </p>
            <figure className={styles.pain}>
              <img src={imgPainPoints} alt="Quotes from people who struggled to find a doctor" />
              <figcaption>User pain points identified from our research</figcaption>
            </figure>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Opportunities</h2>
            <ol className={styles.steps}>
              <li>Symptom-based doctor discovery</li>
              <li>Multi-category search results</li>
              <li>Guided search suggestions</li>
              <li>Structured &amp; scalable filters</li>
            </ol>
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Symptom-Based Doctor Discovery</h2>
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
            <img className={styles.figure} src={imgSymptomSearch} alt="Default state of symptom search" />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Multi-category Search Results</h2>
            <div className={styles.prose}>
              <p>
                Search analysis showed that{' '}
                <strong>nearly 80% of users didn&apos;t have a specific doctor or hospital preference</strong>
                , indicating that most users were exploring rather than searching for someone
                specific. Search behaviour also revealed multiple discovery paths, with users
                searching for{' '}
                <strong>Doctors (27.6%), Specialities (27.6%), Hospitals (27.2%), and Symptoms (7.7%)</strong>
                .
              </p>
              <p>
                Instead of treating every query the same, we redesigned search to surface results
                across <strong>Symptoms, Specializations, Hospitals, and Doctors</strong>, making it
                easier for users to understand what they were searching for and discover the right
                doctor through multiple entry points.
              </p>
            </div>
            <img
              className={styles.figure}
              src={imgMultiCategory}
              alt="Listing page, default state, and results after typing"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Guided Search Suggestions</h2>
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
            <img
              className={styles.figure}
              src={imgGuidedSearch}
              alt="Guided search from the default state through a doctor profile"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Structured &amp; Scalable Filters</h2>
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
            <img
              className={styles.figure}
              src={imgFiltersListing}
              alt="Listing page and the filters bottom sheet"
            />
            <img
              className={styles.figure}
              src={imgFiltersSheet}
              alt="Listing page with quick filters applied"
            />
          </section>

          <section className={styles.section}>
            <h2 className={styles.label}>Impact</h2>
            <div className={styles.statGrid}>
              <div className={styles.statCard}>
                <p className={styles.statValue}>18% → 32%</p>
                <p className={styles.statName}>Search Conversion</p>
              </div>
              <div className={styles.statCard}>
                <p className={styles.statValue}>22% → 47%</p>
                <p className={styles.statName}>Filter-led Conversion</p>
              </div>
            </div>
            <h3 className={styles.impactTitle}>Search &amp; Discovery Improved</h3>
            <ul className={styles.metrics}>
              <li>
                <p className={styles.metricName}>Null Searches</p>
                <p className={styles.metricValue}>40% → 5%</p>
              </li>
              <li>
                <p className={styles.metricName}>Monthly GMV</p>
                <p className={styles.metricValue}>₹3 Cr+</p>
              </li>
              <li>
                <p className={styles.metricName}>Daily Doctor Slot Checks</p>
                <p className={styles.metricValue}>1,300+</p>
              </li>
            </ul>
          </section>
        </div>
      </article>
    </div>
  );
}
