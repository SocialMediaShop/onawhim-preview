import type { Metadata } from 'next';
import PackageInteractions from '../PackageInteractions';
import '../packages.css';

export const metadata: Metadata = {
  title: 'Livingstone & Chobe Safari Package | 8 Days, Zambia & Botswana | On A Whim',
  description: 'An 8-day Livingstone & Chobe safari package for up to 8 guests. Experience Victoria Falls, walk with white rhinos in Mosi-oa-Tunya, and enjoy Chobe River boat cruises and boutique tented lodging. Bespoke, expert-guided, IATA TIDS accredited.',
  alternates: {
    canonical: 'https://onawhim.co.za/packages/livingstone-chobe',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/packages/livingstone-chobe',
    title: 'Livingstone & Chobe Safari Package | 8 Days | On A Whim',
    description: 'Eight days. Two rivers. Two countries. Victoria Falls to Chobe National Park, limited to 8 guests.',
    images: [
      {
        url: 'https://onawhim.co.za/packages/livingstone-chobe/assets/img/livingstone-chobe-hero-highres.png',
        width: 1301,
        height: 1686,
        alt: 'Victoria Falls and Chobe safari, Zambia and Botswana',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Livingstone & Chobe Safari Package | 8 Days | On A Whim',
    description: 'Eight days. Two rivers. Two countries. Victoria Falls to Chobe National Park, limited to 8 guests.',
    images: ['https://onawhim.co.za/packages/livingstone-chobe/assets/img/livingstone-chobe-hero-highres.png'],
  },
};

const lcSchema = {
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
      "@id": "https://onawhim.co.za/packages/livingstone-chobe/#primaryimage",
      "contentUrl": "https://onawhim.co.za/packages/livingstone-chobe/assets/img/livingstone-chobe-hero-highres.png",
      "width": 1301,
      "height": 1686,
      "caption": "Victoria Falls and Chobe safari, Zambia and Botswana"
    },
    {
      "@type": "WebPage",
      "@id": "https://onawhim.co.za/packages/livingstone-chobe/#webpage",
      "url": "https://onawhim.co.za/packages/livingstone-chobe",
      "name": "Livingstone & Chobe Safari Package | 8 Days, Zambia & Botswana | On A Whim",
      "primaryImageOfPage": {"@id":"https://onawhim.co.za/packages/livingstone-chobe/#primaryimage"},
      "isPartOf": {"@id":"https://onawhim.co.za/#org"}
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type":"ListItem","position":1,"name":"Home","item":"https://onawhim.co.za/"},
        {"@type":"ListItem","position":2,"name":"Packages","item":"https://onawhim.co.za/packages"},
        {"@type":"ListItem","position":3,"name":"Livingstone & Chobe","item":"https://onawhim.co.za/packages/livingstone-chobe"}
      ]
    },
    {
      "@type": "TouristTrip",
      "name": "Livingstone & Chobe — 8-Day Safari Package",
      "description": "Explore Victoria Falls from the Zambian bank, walk with white rhinos in Mosi-oa-Tunya, and experience boat cruises on the Chobe River. Limited to 8 guests and staying at Tlouwana Tented Camp.",
      "touristType": ["Wildlife safari travellers","Couples","Small groups"],
      "image": {"@id":"https://onawhim.co.za/packages/livingstone-chobe/#primaryimage"},
      "provider": {"@id":"https://onawhim.co.za/#org"},
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"item":{"@type":"TouristAttraction","name":"Victoria Falls","address":"Livingstone, Zambia"}},
          {"@type":"ListItem","position":2,"item":{"@type":"TouristAttraction","name":"Chobe National Park","address":"Kasane, Botswana"}},
          {"@type":"ListItem","position":3,"item":{"@type":"LodgingBusiness","name":"Tlouwana Tented Camp","address":"Chobe, Botswana"}}
        ]
      },
      "offers": {
        "@type": "Offer",
        "url": "https://onawhim.co.za/packages/livingstone-chobe",
        "priceCurrency": "USD",
        "priceSpecification": {"@type":"PriceSpecification","minPrice":"4176","priceCurrency":"USD","description":"From $4,176 pp — request a personalised quote"},
        "availability": "https://schema.org/InStock",
        "seller": {"@id":"https://onawhim.co.za/#org"}
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type":"Question","name":"How many guests are on this safari?","acceptedAnswer":{"@type":"Answer","text":"This package is deliberately intimate and limited to a maximum of 8 guests, so every game drive and transfer stays private and unhurried."}},
        {"@type":"Question","name":"When is the best time to visit Chobe?","acceptedAnswer":{"@type":"Answer","text":"The dry season from May to October concentrates wildlife around the Chobe River, making it the strongest window for massive elephant herds and predators. Green-season travel (November to April) rewards birders and photographers with lush scenery."}},
        {"@type":"Question","name":"How do you travel between Livingstone and Chobe?","acceptedAnswer":{"@type":"Answer","text":"A shared road transfer crosses the iconic Kazungula Bridge, connecting Livingstone (Zambia) with Kasane (Botswana). All border formalities and bridge levies are handled by our local guides."}},
        {"@type":"Question","name":"How much does this package cost?","acceptedAnswer":{"@type":"Answer","text":"This 8-day package is priced from $4,176 per person sharing during the shoulder season, and from $4,979 per person sharing during the high season. A single supplement of $1,048 (shoulder) or $1,236 (high season) applies for solo travellers."}}
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lcSchema) }}
      />
      <PackageInteractions packageName="Livingstone & Chobe" />

      <div className="pkg-page">
        {/* ================= NAV ================= */}
        <nav id="nav">
          <a href="/" className="brand">On a Whim</a>
          <div className="nav-links" id="navlinks">
            <a href="#overview">Overview</a>
            <a href="#itinerary">Itinerary</a>
            <a href="#stay">The Camp</a>
            <a href="#gallery">Gallery</a>
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
              src="/packages/livingstone-chobe/assets/img/livingstone-chobe-hero-highres.png"
              sizes="100vw"
              width="1301"
              height="1686"
              fetchPriority="high"
              decoding="async"
              alt="Victoria Falls and Chobe safari, Zambia and Botswana"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="hero-scrim"></div>
          <div className="hero-inner">
            <div className="wrap">
              <span className="eyebrow">8-Day Package · Zambia &amp; Botswana · Limited to 8 Guests</span>
              <h1>Livingstone<br />&amp; Chobe</h1>
              <p className="tagline">The Falls, The River, The Wild Heart of Africa</p>
              <div className="hero-facts">
                <div className="fact">
                  <div className="k">Duration</div>
                  <div className="v">8 <small>Days / 7 Nights</small></div>
                </div>
                <div className="fact">
                  <div className="k">Countries</div>
                  <div className="v">Zambia · Botswana</div>
                </div>
                <div className="fact">
                  <div className="k">Group Size</div>
                  <div className="v">Max 8 <small>Guests</small></div>
                </div>
                <div className="fact">
                  <div className="k">From</div>
                  <div className="v">$4,176 <small>pp / Shoulder Season</small></div>
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
              <h2 style={{ fontSize: 'clamp(32px,4.6vw,50px)', margin: '16px 0 22px' }}>Two rivers, two countries, one extraordinary journey.</h2>
              <p className="lede">Few journeys in southern Africa offer this kind of contrast without ever feeling disjointed. Three nights in Livingstone put you at the edge of Victoria Falls from the Zambian bank, then the road crosses into Botswana, and Chobe National Park opens up.</p>
              <p style={{ marginTop: '20px', color: 'var(--warm-grey)' }}>Walk with endangered white rhinos on foot, encounter elephants at river level, and dine aboard the Royal Livingstone Express. In Botswana, settle into the unhurried canvas sanctuary of Tlouwana Tented Camp, and explore Chobe's legendary elephant herds on unhurried boat cruises.</p>
            </div>
            <div className="overview-art reveal" style={{ overflow: 'hidden', borderRadius: '3px' }}>
              <img
                src="/packages/livingstone-chobe/assets/img/livingstone-chobe-journey.png"
                width="560"
                height="460"
                loading="lazy"
                alt="Victoria Falls spray and rainbows"
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
                <div className="place">Livingstone, Zambia</div>
                <h3>Riverside arrival &amp; Zambezi sunset</h3>
                <p>Met on arrival at Livingstone Airport and transferred to your river lodge. Settle in, then a relaxing sunset cruise on the Zambezi River with local beverages and appetizers.</p>
                <div className="stay">Overnight · <b>Radisson Blu Mosi-Oa-Tunya</b>, Livingstone</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">2<span className="lbl">Explore</span></div>
              <div>
                <div className="place">Livingstone, Zambia</div>
                <h3>Victoria Falls &amp; white rhino walk</h3>
                <p>A guided tour along the Zambian rainforest bank of Victoria Falls. Followed by a rare walk on foot with white rhinos and a game drive in Mosi-oa-Tunya National Park.</p>
                <div className="stay">Included · Guided Falls Tour · Walk with White Rhinos</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">3<span className="lbl">Savour</span></div>
              <div>
                <div className="place">Livingstone, Zambia</div>
                <h3>Elephants at river level &amp; dinner train</h3>
                <p>Enjoy a gentle elephant interaction with lunch on the river. In the evening, board the historic Royal Livingstone Express dinner train for a 5-course dinner crossing the Victoria Falls bridge.</p>
                <div className="stay">Included · Elephant interaction &amp; lunch · Royal Livingstone Express train</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">4<span className="lbl">Cross</span></div>
              <div>
                <div className="place">Zambia &rarr; Botswana</div>
                <h3>Across the Kazungula Bridge to Chobe</h3>
                <p>Cross the border via Kazungula Bridge into Botswana. Reach Tlouwana Tented Camp in time for your first afternoon game activity along the Chobe River.</p>
                <div className="stay">Overnight · <b>Tlouwana Tented Camp</b>, Chobe, Botswana</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">5<span className="lbl">Safari</span></div>
              <div>
                <div className="place">Chobe National Park</div>
                <h3>Game drives &amp; boat cruises</h3>
                <p>Explore Chobe National Park. Drift past hundreds of elephants on an unhurried boat cruise, and look for predators on deep game drives.</p>
                <div className="stay">Included · Chobe river boat cruises · National Park game drives</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">6<span className="lbl">Explore</span></div>
              <div>
                <div className="place">Chobe National Park</div>
                <h3>Predators &amp; night drives</h3>
                <p>Morning game drives searching for wild dogs, lions, and leopards. Enjoy a night drive on the concession to see what the daylight keeps hidden.</p>
                <div className="stay">Overnight · <b>Tlouwana Tented Camp</b></div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">7<span className="lbl">Immerse</span></div>
              <div>
                <div className="place">Lesoma Valley</div>
                <h3>Community &amp; bicycle tour</h3>
                <p>Embark on a community and bicycle tour through the scenic Lesoma Valley, learning about local conservation initiatives and village life.</p>
                <div className="stay">Included · Community &amp; Bicycle Tour · Lesoma Valley</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">8<span className="lbl">Depart</span></div>
              <div>
                <div className="place">Kasane, Botswana</div>
                <h3>Farewell Africa</h3>
                <p>A relaxed morning in camp before your transfer to Kasane Airport for your onward journey home.</p>
                <div className="stay">Included · Transfer to Kasane Airport</div>
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
                <li><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 6" /></svg>kazungula border transfers</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 6" /></svg>Local expert guides throughout</li>
              </ul>
            </div>
            <div className="exp-card reveal">
              <h3>Signature experiences</h3>
              <ul>
                <li>Guided Tour of Victoria Falls</li>
                <li>Walking with White Rhinos</li>
                <li>Lady Livingstone Sunset Cruise</li>
                <li>Royal Livingstone Express Dinner Train</li>
                <li>Chobe River Game Boat Cruise</li>
                <li>Lesoma Valley Community &amp; Bicycle Tour</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= STAY HIGHLIGHT ================= */}
        <section className="stay-hl section" id="stay">
          <div className="wrap">
            <div className="stay-art reveal" style={{ overflow: 'hidden', borderRadius: '3px' }}>
              <img
                src="/packages/livingstone-chobe/assets/img/tlouwana-tented-camp.png"
                width="560"
                height="420"
                loading="lazy"
                alt="Tlouwana Tented Camp canvas suites"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="reveal">
              <span className="eyebrow">Where You'll Stay · Chobe</span>
              <h2>Tlouwana Tented Camp</h2>
              <p>An intimate canvas camp on the edge of one of Africa's greatest wildlife destinations — unhurried, unfenced, and entirely at home in the wild of the Chobe River. Generous tents, personal hosting, and the quiet rhythms of the bush.</p>
              <p>Mornings begin with the sound of the birds; evenings end around the campfire under a beautiful starry sky. Daily game drives and river safaris run straight from camp.</p>
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

        {/* ================= GALLERY ================= */}
        <section className="gallery-section section" id="gallery">
          <div className="wrap">
            <div className="section-head reveal">
              <span className="eyebrow">Brochure Gallery</span>
              <h2>Visual Journey</h2>
              <p>A glimpse of the landscapes, wildlife, and accommodation featured in this itinerary.</p>
            </div>
          </div>
          <div className="gallery-scroller-container reveal">
            <div className="gallery-scroller">
              <div className="gallery-item">
                <img src="/packages/livingstone-chobe/assets/img/img-1-1333x1672.png" alt="Livingstone & Chobe PDF Image 1" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-chobe/assets/img/img-2-622x888.png" alt="Livingstone & Chobe PDF Image 2" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-chobe/assets/img/img-3-1360x907.png" alt="Livingstone & Chobe PDF Image 3" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-chobe/assets/img/img-4-741x456.png" alt="Livingstone & Chobe PDF Image 4" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-chobe/assets/img/img-5-742x1188.png" alt="Livingstone & Chobe PDF Image 5" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-chobe/assets/img/img-6-751x1192.png" alt="Livingstone & Chobe PDF Image 6" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-chobe/assets/img/img-7-747x461.png" alt="Livingstone & Chobe PDF Image 7" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-chobe/assets/img/img-8-1301x1686.png" alt="Livingstone & Chobe PDF Image 8" loading="lazy" />
              </div>

              <div className="gallery-item">
                <img src="/packages/livingstone-chobe/assets/img/img-10-722x1292.png" alt="Livingstone & Chobe PDF Image 10" loading="lazy" />
              </div>
            </div>
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
                <h3>When is the best time to visit Chobe?</h3>
                <p>The dry season from May to October concentrates wildlife around the Chobe River, making it the strongest window for massive elephant herds and predators. Green-season travel (November to April) rewards birders and photographers with lush scenery.</p>
              </div>
              <div className="faq-item">
                <h3>How do you travel between Livingstone and Chobe?</h3>
                <p>A shared road transfer crosses the iconic Kazungula Bridge, connecting Livingstone (Zambia) with Kasane (Botswana). All border formalities and bridge levies are handled by our local guides.</p>
              </div>
              <div className="faq-item">
                <h3>How much does this package cost?</h3>
                <p>This 8-day package is priced <b>from $4,176 per person sharing</b> during the shoulder season, and <b>from $4,979 per person sharing</b> during the high season. A single supplement of <b>$1,048 (shoulder)</b> or <b>$1,236 (high season)</b> applies for solo travellers.</p>
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
              <a href="/packages/victoria-falls-hwange" className="rel-card reveal">
                <div className="rel-art">
                  <picture>
                    <source type="image/webp" srcSet="/packages/victoria-falls-hwange/assets/img/vic-falls-hwange-hero-highres.png" sizes="(max-width:900px) 100vw, 360px" />
                    <img src="/packages/victoria-falls-hwange/assets/img/vic-falls-hwange-hero-highres.png" sizes="(max-width:900px) 100vw, 360px" width="760" height="570" loading="lazy" decoding="async" alt="Victoria Falls & Hwange package" />
                  </picture>
                </div>
                <div className="rel-body">
                  <div className="place">Zimbabwe</div>
                  <h3>Victoria Falls &amp; Hwange</h3>
                  <p>Begin at the edge of Victoria Falls, then fly deep into Hwange National Park for elephant herds and private safaris.</p>
                  <span className="go">View package &rarr;</span>
                </div>
              </a>
              <a href="/packages/livingstone-lower-zambezi" className="rel-card reveal">
                <div className="rel-art">
                  <picture>
                    <source type="image/webp" srcSet="/packages/livingstone-lower-zambezi/assets/img/img-9-1320x1756.png" sizes="(max-width:900px) 100vw, 360px" />
                    <img src="/packages/livingstone-lower-zambezi/assets/img/img-9-1320x1756.png" sizes="(max-width:900px) 100vw, 360px" width="760" height="570" loading="lazy" decoding="async" alt="Livingstone and Lower Zambezi package" />
                  </picture>
                </div>
                <div className="rel-body">
                  <div className="place">Zambia</div>
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
                    <input id="fname" name="name" type="text" placeholder="Your name" />
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
                    <select id="guests" name="groupSize">
                      <option>1–2</option>
                      <option>3–4</option>
                      <option>5–6</option>
                      <option>7–8</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label htmlFor="dates">Approximate travel dates</label>
                  <input id="dates" name="travelMonth" type="text" placeholder="e.g. July 2026, flexible" />
                </div>
                <div>
                  <label htmlFor="msg">Anything you'd like us to know</label>
                  <textarea id="msg" name="message" rows={3} placeholder="Special occasions, interests, must-sees…"></textarea>
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
