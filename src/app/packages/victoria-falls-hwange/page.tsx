import type { Metadata } from 'next';
import PackageInteractions from '../PackageInteractions';
import '../packages.css';

export const metadata: Metadata = {
  title: 'Victoria Falls & Hwange Safari Package | 8 Days, Zimbabwe | On A Whim',
  description: 'An 8-day Victoria Falls & Hwange safari package for up to 8 guests. Begin at the smoke that thunders, then fly into Hwange for Iganyana Tented Camp, elephant herds and private-concession game drives. Bespoke, expert-guided, IATA TIDS accredited.',
  alternates: {
    canonical: 'https://onawhim.co.za/packages/victoria-falls-hwange',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/packages/victoria-falls-hwange',
    title: 'Victoria Falls & Hwange Safari Package | 8 Days | On A Whim',
    description: 'Eight days. Two landscapes. Endless wild. Victoria Falls to Hwange National Park, limited to 8 guests.',
    images: [
      {
        url: 'https://onawhim.co.za/packages/victoria-falls-hwange/assets/img/vic-falls-hwange-800.jpg',
        width: 800,
        height: 600,
        alt: 'Victoria Falls and Hwange safari, Zimbabwe',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Victoria Falls & Hwange Safari Package | 8 Days | On A Whim',
    description: 'Eight days. Two landscapes. Endless wild. Victoria Falls to Hwange National Park, limited to 8 guests.',
    images: ['https://onawhim.co.za/packages/victoria-falls-hwange/assets/img/vic-falls-hwange-800.jpg'],
  },
};

const vfhSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "TravelAgency",
      "@id": "https://onawhim.co.za/#org",
      "name": "On A Whim",
      "description": "Bespoke African safaris & packages across South Africa and Southern Africa.",
      "email": "info@onawhim.co.za",
      "telephone": "+27621380622",
      "areaServed": ["Zimbabwe","Zambia","Botswana","South Africa"]
    },
    {
      "@type": "ImageObject",
      "@id": "https://onawhim.co.za/packages/victoria-falls-hwange/#primaryimage",
      "contentUrl": "https://onawhim.co.za/packages/victoria-falls-hwange/assets/img/vic-falls-hwange-800.jpg",
      "width": 800,
      "height": 600,
      "caption": "Victoria Falls and Hwange National Park safari, Zimbabwe"
    },
    {
      "@type": "WebPage",
      "@id": "https://onawhim.co.za/packages/victoria-falls-hwange/#webpage",
      "url": "https://onawhim.co.za/packages/victoria-falls-hwange",
      "name": "Victoria Falls & Hwange Safari Package | 8 Days, Zimbabwe | On A Whim",
      "primaryImageOfPage": {"@id":"https://onawhim.co.za/packages/victoria-falls-hwange/#primaryimage"},
      "isPartOf": {"@id":"https://onawhim.co.za/#org"}
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type":"ListItem","position":1,"name":"Home","item":"https://onawhim.co.za/"},
        {"@type":"ListItem","position":2,"name":"Packages","item":"https://onawhim.co.za/packages"},
        {"@type":"ListItem","position":3,"name":"Victoria Falls & Hwange","item":"https://onawhim.co.za/packages/victoria-falls-hwange"}
      ]
    },
    {
      "@type": "TouristTrip",
      "name": "Victoria Falls & Hwange — 8-Day Safari Package",
      "description": "Begin at the edge of Victoria Falls, Zimbabwe's smoke that thunders, then fly into Hwange National Park for elephant herds and wilderness. Limited to 8 guests and staying at Iganyana Tented Camp.",
      "touristType": ["Wildlife safari travellers","Couples","Small groups"],
      "image": {"@id":"https://onawhim.co.za/packages/victoria-falls-hwange/#primaryimage"},
      "provider": {"@id":"https://onawhim.co.za/#org"},
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"item":{"@type":"TouristAttraction","name":"Victoria Falls","address":"Victoria Falls, Zimbabwe"}},
          {"@type":"ListItem","position":2,"item":{"@type":"TouristAttraction","name":"Hwange National Park","address":"Hwange, Zimbabwe"}},
          {"@type":"ListItem","position":3,"item":{"@type":"LodgingBusiness","name":"Iganyana Tented Camp","address":"Hwange, Zimbabwe"}}
        ]
      },
      "offers": {
        "@type": "Offer",
        "url": "https://onawhim.co.za/packages/victoria-falls-hwange",
        "priceCurrency": "USD",
        "priceSpecification": {"@type":"PriceSpecification","minPrice":"4939","priceCurrency":"USD","description":"From $4,939 pp — request a personalised quote"},
        "availability": "https://schema.org/InStock",
        "seller": {"@id":"https://onawhim.co.za/#org"}
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type":"Question","name":"How many guests are on this safari?","acceptedAnswer":{"@type":"Answer","text":"This package is deliberately intimate and limited to a maximum of 8 guests, so every game drive and transfer stays private and unhurried."}},
        {"@type":"Question","name":"When is the best time to visit Hwange?","acceptedAnswer":{"@type":"Answer","text":"The dry season from May to October concentrates wildlife around Hwange's waterholes and pumped pans, making it the strongest window for elephant herds and predators. Green-season travel (November to April) rewards birders and photographers with lush scenery."}},
        {"@type":"Question","name":"How do you travel between Victoria Falls and Hwange?","acceptedAnswer":{"@type":"Answer","text":"A light-aircraft charter flight connects Victoria Falls to Hwange's private airstrip, turning a long road transfer into a short scenic flight over the bushveld. Charter flights and airport transfers are included."}},
        {"@type":"Question","name":"Is this a malaria area?","acceptedAnswer":{"@type":"Answer","text":"Both Victoria Falls and Hwange fall within a malaria zone. We recommend consulting a travel clinic about prophylaxis before departure; your dedicated travel expert will share current guidance with your proposal."}},
        {"@type":"Question","name":"How much does this package cost?","acceptedAnswer":{"@type":"Answer","text":"This 8-day package is priced from $4,939 per person sharing (Shoulder Season). A single supplement of $648 applies for solo travellers. Custom quotes can be tailored based on your exact travel dates and preferences."}}
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(vfhSchema) }}
      />
      <PackageInteractions packageName="Victoria Falls & Hwange" />

      <div className="pkg-page">
        {/* ================= NAV ================= */}
        <nav id="nav">
          <a href="#" className="brand">On a Whim</a>
          <div className="nav-links" id="navlinks">
            <a href="#overview">Overview</a>
            <a href="#itinerary">Itinerary</a>
            <a href="#stay">The Camp</a>
            <a href="#faq">FAQ</a>
            <a href="#enquire" className="btn btn-light">Enquire</a>
          </div>
          <button className="nav-toggle" id="navtoggle" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </nav>

        {/* ================= HERO ================= */}
        <header className="hero">
          <div className="hero-svg">
            <img
              src="/packages/victoria-falls-hwange/assets/img/vic-falls-hwange-hero-highres.png"
              sizes="100vw"
              width="1920"
              height="1080"
              fetchPriority="high"
              decoding="async"
              alt="Victoria Falls and Hwange National Park safari, Zimbabwe — elephant at the water's edge"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="hero-scrim"></div>
          <div className="hero-inner">
            <div className="wrap">
              <span className="eyebrow">8-Day Package · Zimbabwe · Limited to 8 Guests</span>
              <h1>Victoria Falls<br />&amp; Hwange</h1>
              <p className="tagline">Eight days. Two landscapes. Endless wild.</p>
              <div className="hero-facts">
                <div className="fact">
                  <div className="k">Duration</div>
                  <div className="v">8 <small>Days / 7 Nights</small></div>
                </div>
                <div className="fact">
                  <div className="k">Countries</div>
                  <div className="v">Zimbabwe</div>
                </div>
                <div className="fact">
                  <div className="k">Group Size</div>
                  <div className="v">Max 8 <small>Guests</small></div>
                </div>
                <div className="fact">
                  <div className="k">From</div>
                  <div className="v">$4,939 <small>pp / Shoulder Season</small></div>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* ================= TRUST STRIP ================= */}
        <section className="trust section" style={{ padding: '64px 0' }}>
          <div className="wrap">
            <div className="pillar reveal">
              <svg viewBox="0 0 24 24"><path d="M12 3v18M5 8l7-5 7 5M6 21h12" /></svg>
              <h4>Genuinely Independent</h4>
              <p>No fixed suppliers to push. We recommend only what fits your journey.</p>
            </div>
            <div className="pillar reveal">
              <svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4 4-6 8-6s8 2 8 6" /></svg>
              <h4>Intimate &amp; Exclusive</h4>
              <p>Capped at eight guests, so every drive and transfer stays private.</p>
            </div>
            <div className="pillar reveal">
              <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h10" /><circle cx="19" cy="18" r="2" /></svg>
              <h4>Handpicked Itineraries</h4>
              <p>Every proposal built from scratch around your dates and travel style.</p>
            </div>
            <div className="pillar reveal">
              <svg viewBox="0 0 24 24"><path d="M12 2l3 6 6 .8-4.5 4.2L18 20l-6-3.3L6 20l1.5-7L3 8.8 9 8z" /></svg>
              <h4>IATA TIDS Accredited</h4>
              <p>A recognised, accountable travel partner — booked with confidence.</p>
            </div>
          </div>
        </section>

        {/* ================= OVERVIEW ================= */}
        <section className="overview section" id="overview">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">The Journey</span>
              <h2 style={{ fontSize: 'clamp(32px,4.6vw,50px)', margin: '16px 0 22px' }}>The smoke that thunders, then the silence of the bush.</h2>
              <p className="lede">Begin at the edge of Victoria Falls — Zimbabwe's <span className="serif-accent">smoke that thunders</span> — then fly into Hwange National Park for elephant herds and wilderness. This is a slow, deliberate journey between two of Southern Africa's great landscapes, with a light-aircraft charter linking them.</p>
              <p style={{ marginTop: '20px', color: 'var(--warm-grey)' }}>You'll stay at Iganyana Tented Camp on a private concession, where game drives and walking safaris run morning and evening, and the days settle into the rhythm of the wild. Fully curated, select departures, and never more than eight guests.</p>
            </div>
            <div className="overview-art reveal" style={{ overflow: 'hidden', borderRadius: '3px' }}>
              <img
                src="/packages/victoria-falls-hwange/assets/img/the-journey-falls.png"
                width="560"
                height="460"
                loading="lazy"
                alt="Victoria Falls mist and canyon landscape"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
          </div>
        </section>

        {/* ================= ITINERARY ================= */}
        <section className="itin section" id="itinerary">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Day By Day</span>
              <h2>The Itinerary</h2>
              <p>Illustrative day-by-day flow — your dedicated expert tailors the exact routing, lodges and pace to you.</p>
            </div>

            <div className="day reveal">
              <div className="day-no">1<span className="lbl">Arrive</span></div>
              <div>
                <div className="place">Victoria Falls, Zimbabwe</div>
                <h3>Arrival &amp; the falls at golden hour</h3>
                <p>Met on arrival and transferred to your riverside lodge. Settle in, then an easy first evening watching the light drop over the Zambezi.</p>
                <div className="stay">Overnight · <b>David Livingstone Safari Lodge</b>, Victoria Falls</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">2<span className="lbl">Explore</span></div>
              <div>
                <div className="place">Victoria Falls</div>
                <h3>Guided tour of Victoria Falls</h3>
                <p>A guided walk along the rainforest rim of one of the seven natural wonders of the world, followed by a Zambezi River sunset boat cruise as hippos surface and elephants come down to drink.</p>
                <div className="stay">Included · Guided Tour of Victoria Falls · Boat Cruise — Zambezi River</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">3<span className="lbl">Fly</span></div>
              <div>
                <div className="place">Charter Flight · Hwange</div>
                <h3>Light-aircraft flight into the wilderness</h3>
                <p>A short scenic charter flight replaces the long road, dropping you onto a private airstrip deep in Hwange National Park. First afternoon game drive on the way to camp.</p>
                <div className="stay">Overnight · <b>Iganyana Tented Camp</b>, private concession</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">4<span className="lbl">Safari</span></div>
              <div>
                <div className="place">Hwange National Park</div>
                <h3>Elephant herds &amp; the great pans</h3>
                <p>Full days of game drives and guided walking safaris across Hwange's private concession, tracking the park's famous elephant herds as they gather at the pumped waterholes.</p>
                <div className="stay">Included · Game Drives — Private Concession · Walking Safaris</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">5<span className="lbl">Safari</span></div>
              <div>
                <div className="place">Hwange National Park</div>
                <h3>Predators, birdlife &amp; the quiet hours</h3>
                <p>Dawn and dusk drives in search of lion, wild dog and cheetah, with unhurried afternoons back at camp. A stay that manages to feel both full and unhurried — Hwange rewards those who give it time.</p>
                <div className="stay">Overnight · <b>Iganyana Tented Camp</b></div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">6<span className="lbl">Immerse</span></div>
              <div>
                <div className="place">Lesoma Valley</div>
                <h3>Community &amp; conservation</h3>
                <p>A Community &amp; Bicycle Tour through the Lesoma Valley, plus a visit and contribution to one of Africa's most vital wildlife conservation projects — travel that gives back to the land it moves through.</p>
                <div className="stay">Included · Community &amp; Bicycle Tour — Lesoma Valley</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">7<span className="lbl">Savour</span></div>
              <div>
                <div className="place">Victoria Falls Bridge</div>
                <h3>A final night, in style</h3>
                <p>Return toward Victoria Falls for a 5-course dinner aboard the restored Bushtracks Express Dinner Train as it crosses the Victoria Falls bridge at dusk — a fitting last evening.</p>
                <div className="stay">Included · Bushtracks Express Dinner Train</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">8<span className="lbl">Depart</span></div>
              <div>
                <div className="place">Victoria Falls</div>
                <h3>Homeward, changed</h3>
                <p>A relaxed morning before your airport transfer and onward flight — with the bush still in your ears.</p>
                <div className="stay">Included · Airport transfers &amp; charter flights throughout</div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= INCLUDED ================= */}
        <section className="included section">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">The Detail</span>
              <h2 style={{ fontSize: 'clamp(30px,4.4vw,46px)', margin: '16px 0 28px' }}>What's included</h2>
              <ul className="inc-list">
                <li><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 6" /></svg>All accommodation as listed</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 6" /></svg>All meals as specified</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 6" /></svg>All activities &amp; experiences listed</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 6" /></svg>Airport transfers &amp; charter flights</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 6" /></svg>Expert local guides throughout</li>
              </ul>
            </div>
            <div className="exp-card reveal">
              <h3>Signature experiences</h3>
              <ul>
                <li>Guided Tour of Victoria Falls</li>
                <li>Boat Cruise — Zambezi River</li>
                <li>Game Drives — Private Concession, Hwange</li>
                <li>Walking Safaris — Hwange National Park</li>
                <li>Community &amp; Bicycle Tour — Lesoma Valley</li>
                <li>Bushtracks Express Dinner Train</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= STAY HIGHLIGHT ================= */}
        <section className="stay-hl section" id="stay">
          <div className="wrap">
            <div className="stay-art reveal" style={{ overflow: 'hidden', borderRadius: '3px' }}>
              <img
                src="/packages/victoria-falls-hwange/assets/img/iganyana-tent-camp.png"
                width="560"
                height="420"
                loading="lazy"
                alt="Iganyana Luxury Tented Camp in Hwange National Park"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="reveal">
              <span className="eyebrow">Where You'll Stay · Hwange</span>
              <h2>Iganyana Tented Camp</h2>
              <p>An intimate tented camp set on a private concession in Hwange National Park — canvas suites, open-sided game vehicles, and a waterhole that brings the wild to your doorstep. Exactly the kind of small, characterful place we handpick rather than default to.</p>
              <p>Mornings begin with the sound of the bush; evenings end around the fire under one of Africa's clearest skies. Twice-daily game drives and guided walks run straight from camp.</p>
              <a href="#enquire" className="btn btn-light" style={{ marginTop: '12px' }}>Enquire about this camp</a>
            </div>
          </div>
        </section>

        {/* ================= QUOTE ================= */}
        <section className="quote section">
          <div className="wrap reveal">
            <blockquote>"Africa changes you forever, like nowhere on earth. Once you have been there, you will never be the same."</blockquote>
            <cite>Why We Do This</cite>
          </div>
        </section>

        {/* ================= FAQ ================= */}
        <section className="section" id="faq">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Good To Know</span>
              <h2>Questions, answered</h2>
            </div>
            <div className="reveal">
              <div className="faq-item">
                <h3>How many guests are on this safari?</h3>
                <p>This package is deliberately intimate and limited to a maximum of eight guests, so every game drive and transfer stays private and unhurried.</p>
              </div>
              <div className="faq-item">
                <h3>When is the best time to visit Hwange?</h3>
                <p>The dry season from May to October concentrates wildlife around Hwange's waterholes and pumped pans, making it the strongest window for elephant herds and predators. Green-season travel (November to April) rewards birders and photographers with lush scenery.</p>
              </div>
              <div className="faq-item">
                <h3>How do you travel between Victoria Falls and Hwange?</h3>
                <p>A light-aircraft charter flight connects Victoria Falls to Hwange's private airstrip, turning a long road transfer into a short scenic flight over the bushveld. Charter flights and airport transfers are included throughout.</p>
              </div>
              <div className="faq-item">
                <h3>Is this a malaria area?</h3>
                <p>Both Victoria Falls and Hwange fall within a malaria zone. We recommend consulting a travel clinic about prophylaxis before departure; your dedicated travel expert will share current guidance alongside your proposal.</p>
              </div>
              <div className="faq-item">
                <h3>How much does this package cost?</h3>
                <p>This 8-day package is priced <b>from $4,939 per person sharing</b> (Shoulder Season). A single supplement of <b>$648</b> applies for solo travellers. Custom quotes can be tailored based on your exact travel dates and preferences.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RELATED ================= */}
        <section className="related section">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Continue Exploring</span>
              <h2>Other handpicked journeys</h2>
            </div>
            <div className="rel-grid">
              <a href="/safari#livingstone-chobe" className="rel-card reveal">
                <div className="rel-art">
                  <picture>
                    <source type="image/webp" srcSet="/packages/victoria-falls-hwange/assets/img/livingstone-chobe-400.webp 400w, /packages/victoria-falls-hwange/assets/img/livingstone-chobe-760.webp 760w" sizes="(max-width:900px) 100vw, 360px" />
                    <img src="/packages/victoria-falls-hwange/assets/img/livingstone-chobe-760.jpg" srcSet="/packages/victoria-falls-hwange/assets/img/livingstone-chobe-400.jpg 400w, /packages/victoria-falls-hwange/assets/img/livingstone-chobe-760.jpg 760w" sizes="(max-width:900px) 100vw, 360px" width="760" height="570" loading="lazy" decoding="async" alt="Livingstone and Chobe National Park — Zambia and Botswana safari" />
                  </picture>
                </div>
                <div className="rel-body">
                  <div className="place">Zambia · Botswana</div>
                  <h3>Livingstone &amp; Chobe</h3>
                  <p>Experience Zambia and Botswana in one seamless journey — Victoria Falls from the Zambian bank and Chobe River boat cruises.</p>
                  <span className="go">View package &rarr;</span>
                </div>
              </a>
              <a href="/safari#livingstone-lower-zambezi" className="rel-card reveal">
                <div className="rel-art">
                  <picture>
                    <source type="image/webp" srcSet="/packages/victoria-falls-hwange/assets/img/livingstone-lower-zambezi-400.webp 400w, /packages/victoria-falls-hwange/assets/img/livingstone-lower-zambezi-760.webp 760w" sizes="(max-width:900px) 100vw, 360px" />
                    <img src="/packages/victoria-falls-hwange/assets/img/livingstone-lower-zambezi-760.jpg" srcSet="/packages/victoria-falls-hwange/assets/img/livingstone-lower-zambezi-400.jpg 400w, /packages/victoria-falls-hwange/assets/img/livingstone-lower-zambezi-760.jpg 760w" sizes="(max-width:900px) 100vw, 360px" width="760" height="570" loading="lazy" decoding="async" alt="Lower Zambezi and Victoria Falls cross-border safari — Zimbabwe and Zambia" />
                  </picture>
                </div>
                <div className="rel-body">
                  <div className="place">Zimbabwe · Zambia</div>
                  <h3>Lower Zambezi &amp; Falls</h3>
                  <p>Cross-border journeys from the spray of Victoria Falls to the silence of the Lower Zambezi — and beyond.</p>
                  <span className="go">View package &rarr;</span>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* ================= ENQUIRY ================= */}
        <section className="enquire section" id="enquire">
          <div className="wrap">
            <div className="reveal">
              <span className="eyebrow">Start The Conversation</span>
              <h2>Enquire about this package</h2>
              <p>A few details is all we need. We'll come back within 24 hours with a personalised proposal — no obligations.</p>
              <div className="assurance">A dedicated travel expert will respond to your enquiry personally — not an automated system. Enquiring costs nothing.</div>
            </div>
            <div className="reveal">
              <form id="enquiryForm" name="enquiry" method="POST" data-netlify="true" noValidate>
                <input type="hidden" name="form-name" value="enquiry" />
                <div className="field-row">
                  <div>
                    <label htmlFor="fname">Full name</label>
                    <input id="fname" name="fname" type="text" placeholder="Your name" />
                  </div>
                  <div>
                    <label htmlFor="country">Country of residence</label>
                    <input id="country" name="country" type="text" placeholder="e.g. United States" />
                  </div>
                </div>
                <div className="field-row">
                  <div>
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="you@email.com" />
                  </div>
                  <div>
                    <label htmlFor="guests">Number of guests</label>
                    <select id="guests" name="guests">
                      <option>1–2</option>
                      <option>3–4</option>
                      <option>5–6</option>
                      <option>7–8</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="dates">Approximate travel dates</label>
                  <input id="dates" name="dates" type="text" placeholder="e.g. July 2026, flexible" />
                </div>
                <div>
                  <label htmlFor="msg">Anything you'd like us to know</label>
                  <textarea id="msg" name="msg" rows={3} placeholder="Special occasions, interests, must-sees…"></textarea>
                </div>
                <button type="submit" className="btn btn-solid" style={{ justifyContent: 'center', background: 'var(--ochre-bright)', color: 'var(--ink)' }}>Confirm &amp; Start Packing</button>
                <p className="form-note" id="formNote">This demo opens your email app addressed to info@onawhim.co.za. On the live site this posts to your form handler.</p>
              </form>
            </div>
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer>
          <div className="wrap">
            <div>
              <div className="brand">On a Whim</div>
              <p style={{ maxWidth: '340px', color: 'var(--taupe)' }}>Bespoke African safaris &amp; packages across South Africa and Southern Africa — guided by people who call it home.</p>
            </div>
            <div className="foot-contacts">
              <p><a href="mailto:info@onawhim.co.za">info@onawhim.co.za</a></p>
              <p><a href="tel:+27621380622">+27 62 138 0622</a></p>
              <p style={{ color: 'var(--taupe)', marginTop: '10px' }}>Cape Town, South Africa<br />IATA TIDS Accredited</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
