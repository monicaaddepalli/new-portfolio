import { useLayoutEffect } from 'react';
import { Link } from 'react-router-dom';
import { applyTheme, getInitialTheme } from '../../lib/theme';
import styles from './InclinicSearchProject.module.css';

const imgHero = '/assets/inclinic/hero.png';
const imgContext = '/assets/inclinic/context.png';
const imgPainPoints = '/assets/inclinic/pain-points.png';
const imgSymptomSearch = '/assets/inclinic/symptom-search.png';
const imgMultiCategory = '/assets/inclinic/multi-category.png';
const imgGuidedSearch = '/assets/inclinic/guided-search.png';
const imgFiltersListing = '/assets/inclinic/filters-listing.png';
const imgFiltersSheet = '/assets/inclinic/filters-sheet.png';

function MediaImage({
  src,
  bordered,
  hero,
  contain,
  fill,
  className,
}: {
  src: string;
  bordered?: boolean;
  hero?: boolean;
  contain?: boolean;
  fill?: string;
  className?: string;
}) {
  const wrapClass = [
    styles.media,
    bordered && styles.mediaBordered,
    hero && styles.mediaHero,
    bordered && !hero && styles.mediaFigure,
    contain && styles.mediaContain,
    className,
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

export function InclinicSearchProject() {
  useLayoutEffect(() => {
    applyTheme(getInitialTheme());
  }, []);

  return (
    <div className={styles.pageWrap}>
      <div className={styles.page} data-node-id="293:41" data-name="inclinic search and filters">
        <div className={styles.main}>
          <div className={styles.heroLead}>
            <header className={styles.sectionText} data-node-id="293:44">
              <div className={styles.stack60}>
                <div className={styles.backRow} data-node-id="293:45">
                  <Link className={styles.backLink} to="/" data-node-id="293:46" data-muted>
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

                <div className={`${styles.textBlock} ${styles.stack0}`} data-node-id="293:61">
                  <p className={styles.primary} data-node-id="293:62">
                    improving doctor discovery
                  </p>
                  <p className={styles.secondary} data-node-id="293:63">
                    reducing friction in the journey from search to consultation
                  </p>
                </div>
              </div>
            </header>

            <MediaImage
              src={imgHero}
              hero
              fill="var(--hero-media-surface)"
              className={styles.heroLeadImage}
            />

            <div className={`${styles.sectionText} ${styles.projectMeta}`}>
              <div className={styles.metaRow} data-node-id="293:64">
                <div className={styles.metaItem} data-node-id="293:65">
                  <p className={styles.secondary} data-node-id="293:66">
                    product
                  </p>
                  <p className={styles.primary} data-node-id="293:68">
                    medibuddy
                  </p>
                </div>
                <div className={styles.metaItem} data-node-id="293:70">
                  <p className={styles.secondary} data-node-id="293:71">
                    role
                  </p>
                  <p className={styles.primary} data-node-id="293:73">
                    product designer
                  </p>
                </div>
                <div className={styles.metaItem} data-node-id="293:75">
                  <p className={styles.secondary} data-node-id="293:76">
                    duration
                  </p>
                  <p className={styles.primary} data-node-id="293:78">
                    1 month
                  </p>
                </div>
              </div>
            </div>

            <div className={`${styles.sectionText} ${styles.heroLeadIntro}`}>
              <div className={`${styles.textBlock} ${styles.stack8}`} data-node-id="293:80">
                <p className={styles.primary} data-node-id="293:81">
                  finding the right doctor is one of the most critical moments in a patient&apos;s
                  healthcare journey. yet users visiting medibuddy&apos;s in-clinic consultation
                  experience often struggled to discover, evaluate, and choose the right doctor from
                  a growing network of specialists and hospitals.
                </p>
                <p className={styles.primary} data-node-id="293:82">
                  this project focused on improving doctor discoverability by reducing friction across
                  search and filtering experiences, helping users navigate options faster and move
                  confidently from discovery to consultation.
                </p>
              </div>
            </div>
          </div>

          <section className={styles.sectionText} data-node-id="293:84">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="293:94">
              <p className={styles.heading} data-node-id="293:95">
                background
              </p>
              <p className={styles.primary} data-node-id="293:96">
                doctor discovery is one of the most important stages in the in-clinic consultation
                journey. before booking an appointment, users need to find a doctor that matches their
                symptoms, preferred specialization, hospital, or a specific doctor they already know.
              </p>
              <p className={styles.primary} data-node-id="293:97">
                as medibuddy&apos;s network continued to grow, so did the complexity of finding the right
                doctor. search and filters became critical tools for discovery, yet existing experiences
                were not effectively supporting how users naturally searched for care.
              </p>
            </div>
          </section>

          <MediaImage src={imgContext} bordered />

          <section className={styles.sectionText} data-node-id="293:100">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="293:111">
              <p className={styles.heading} data-node-id="293:112">
                problem
              </p>
              <p className={styles.primary} data-node-id="293:113">
                search was a key entry point for doctor discovery, but it underperformed compared to
                filter-led journeys, converting at 18.36% versus 22%. nearly 40% of searches resulted in
                no outcome, with symptom-based queries accounting for 8% of all searches. more
                importantly, around 80% of users didn&apos;t have a specific doctor or hospital in mind,
                revealing an opportunity to reduce discovery friction and consultation drop-offs.
              </p>
            </div>
          </section>

          <div className={styles.stack8} data-node-id="321:230">
            <MediaImage src={imgPainPoints} bordered contain />
            <p className={styles.mediaCaption} data-node-id="321:232">
              user pain points identified from our research
            </p>
          </div>

          <section className={styles.sectionText} data-node-id="293:160">
            <div className={`${styles.textBlock} ${styles.stack60}`} data-node-id="293:170">
              <div className={styles.stack20} data-node-id="336:42">
                <p className={styles.heading} data-node-id="293:171">
                  oppurtunities
                </p>
                <ul className={`${styles.bulletList} ${styles.bulletListTight}`} data-node-id="336:41">
                  <li>symptom-based doctor discovery</li>
                  <li>multi-category search results</li>
                  <li>guided search suggestions</li>
                  <li>structured &amp; scalable filters</li>
                </ul>
              </div>

              <div className={styles.stack12} data-node-id="293:172">
                <p className={styles.heading} data-node-id="293:173">
                  symptom-based doctor discovery
                </p>
                <div className={styles.stack12} data-node-id="293:174">
                  <p className={styles.primary} data-node-id="293:175">
                    search analysis revealed that{' '}
                    <strong>symptom-based queries accounted for 8% of all searches</strong>, yet they had
                    the <strong>highest null search rate (43.7%)</strong>. users naturally searched using
                    symptoms like fever, headache, and chest pain, but the existing experience only
                    recognized doctors, hospitals, and specializations, often leading to dead ends.
                  </p>
                  <p className={styles.primary} data-node-id="293:176">
                    we introduced <strong>symptom-based search</strong>, enabling users to search using
                    the symptoms they were experiencing and discover doctors related to those symptoms.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <MediaImage src={imgSymptomSearch} bordered />

          <section className={styles.sectionText} data-node-id="293:179">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="293:189">
              <p className={styles.heading} data-node-id="293:190">
                multi-category search results
              </p>
              <div className={styles.stack12} data-node-id="293:191">
                <p className={styles.primary} data-node-id="293:192">
                  search analysis showed that{' '}
                  <strong>nearly 80% of users didn&apos;t have a specific doctor or hospital preference</strong>
                  , indicating that most users were exploring rather than searching for someone specific.
                  search behaviour also revealed multiple discovery paths, with users searching for{' '}
                  <strong>
                    doctors (27.6%), specialities (27.6%), hospitals (27.2%), and symptoms (7.7%).
                  </strong>
                </p>
                <p className={styles.primary} data-node-id="293:193">
                  instead of treating every query the same, we redesigned search to surface results across{' '}
                  <strong>symptoms, specializations, hospitals, and doctors</strong>, making it easier for
                  users to understand what they were searching for and discover the right doctor through
                  multiple entry points.
                </p>
              </div>
            </div>
          </section>

          <MediaImage src={imgMultiCategory} bordered />

          <section className={styles.sectionText} data-node-id="293:195">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="293:205">
              <p className={styles.heading} data-node-id="293:206">
                guided search suggestions
              </p>
              <div className={styles.stack12} data-node-id="293:207">
                <p className={styles.primary} data-node-id="293:208">
                  search-led journeys converted at <strong>18.36%</strong>, compared to{' '}
                  <strong>22%</strong> for filter-led journeys, while{' '}
                  <strong>40% of searches resulted in no outcome</strong>. many of these failures were
                  caused by misspellings, abbreviations, and partial queries such as gyno or appol,
                  preventing users from reaching relevant results despite the information being available.
                </p>
                <p className={styles.primary} data-node-id="293:209">
                  to reduce search failures, we introduced{' '}
                  <strong>guided search suggestions</strong> that surfaced relevant matches after users
                  typed two characters, clearly categorized each result, and supported fuzzy matching
                  across the catalog to make search faster and more forgiving.
                </p>
              </div>
            </div>
          </section>

          <MediaImage src={imgGuidedSearch} bordered />

          <section className={styles.sectionText} data-node-id="351:52">
            <div className={`${styles.textBlock} ${styles.stack12}`} data-node-id="351:62">
              <p className={styles.heading} data-node-id="351:63">
                structured &amp; scalable filters
              </p>
              <div className={styles.stack12} data-node-id="351:64">
                <p className={styles.primary} data-node-id="351:65">
                  while search helped users discover doctors, filters played a critical role in helping
                  them narrow their choices. analysis showed that{' '}
                  <strong>filter-led journeys converted 4.4% higher (22%)</strong> than search-led
                  journeys, highlighting the importance of efficient refinement before booking. we analyzed
                  user behaviour to understand which filters were used most frequently, allowing us to
                  prioritize the most relevant actions directly on the listing page and reduce unnecessary
                  interactions.
                </p>
                <p className={styles.primary} data-node-id="351:66">
                  based on these insights, we surfaced the most commonly used filters upfront for quicker
                  access, while moving the remaining options into a{' '}
                  <strong>structured bottom sheet</strong>. organizing filters across{' '}
                  <strong>
                    specialization, hospital, availability, experience, consultation fee, and distance
                  </strong>{' '}
                  created a scalable system that balanced speed for common tasks with flexibility for
                  advanced refinement, helping users reach the right doctor with less effort.
                </p>
              </div>
            </div>
          </section>

          <div className={styles.stack28} data-node-id="358:42">
            <MediaImage src={imgFiltersListing} bordered />
            <MediaImage src={imgFiltersSheet} bordered />
          </div>

          <section className={styles.sectionText} data-node-id="293:211">
            <div className={`${styles.textBlock} ${styles.stack32}`} data-node-id="293:221">
              <p className={styles.heading} data-node-id="293:222">
                impact
              </p>

              <div className={styles.impactGrid} data-node-id="400:41">
                <div className={styles.statCard} data-node-id="400:42">
                  <p className={styles.statValue} data-node-id="400:43">
                    18% → 32%
                  </p>
                  <p className={styles.statLabel} data-node-id="400:44">
                    search conversion
                  </p>
                </div>
                <div className={styles.statCard} data-node-id="400:45">
                  <p className={styles.statValue} data-node-id="400:46">
                    22% → 47%
                  </p>
                  <p className={styles.statLabel} data-node-id="400:47">
                    filter-led conversion
                  </p>
                </div>
              </div>

              <div className={styles.stack16} data-node-id="400:58">
                <p className={styles.heading} data-node-id="400:60">
                  search &amp; discovery improved
                </p>
                <div className={styles.stack12} data-node-id="400:62">
                  <div className={styles.metricRow} data-node-id="400:63">
                    <span className={styles.metricDash} data-node-id="400:64">
                      -
                    </span>
                    <div className={styles.metricBody} data-node-id="400:65">
                      <p className={styles.strong} data-node-id="400:66">
                        null searches
                      </p>
                      <p className={styles.secondary} data-node-id="400:67">
                        40% → 5%
                      </p>
                    </div>
                  </div>
                  <div className={styles.metricRow} data-node-id="400:68">
                    <span className={styles.metricDash} data-node-id="400:69">
                      -
                    </span>
                    <div className={styles.metricBody} data-node-id="400:70">
                      <p className={styles.strong} data-node-id="400:71">
                        monthly gmv
                      </p>
                      <p className={styles.secondary} data-node-id="400:72">
                        ₹3 cr+
                      </p>
                    </div>
                  </div>
                  <div className={styles.metricRow} data-node-id="400:73">
                    <span className={styles.metricDash} data-node-id="400:74">
                      -
                    </span>
                    <div className={styles.metricBody} data-node-id="400:75">
                      <p className={styles.strong} data-node-id="400:76">
                        daily doctor slot checks
                      </p>
                      <p className={styles.secondary} data-node-id="400:77">
                        1,300+
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
