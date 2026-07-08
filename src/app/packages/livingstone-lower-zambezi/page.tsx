import type { Metadata } from 'next';
import PackageInteractions from '../PackageInteractions';
import '../packages.css';

export const metadata: Metadata = {
  title: 'Livingstone & Lower Zambezi Safari Package | 8 Days, Zambia | On A Whim',
  description: 'An 8-day Livingstone & Lower Zambezi safari package for up to 8 guests. See Victoria Falls, walk with white rhinos, and fly east into the Lower Zambezi for game drives and luxury lodging. Bespoke, expert-guided, IATA TIDS accredited.',
  alternates: {
    canonical: 'https://onawhim.co.za/packages/livingstone-lower-zambezi',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/packages/livingstone-lower-zambezi',
    title: 'Livingstone & Lower Zambezi Safari Package | 8 Days | On A Whim',
    description: 'Eight days. Two worlds. One river between them. Victoria Falls to Lower Zambezi, limited to 8 guests.',
    images: [
      {
        url: 'https://onawhim.co.za/packages/livingstone-lower-zambezi/assets/img/livingstone-zambezi-hero-highres.png',
        width: 1320,
        height: 1756,
        alt: 'Victoria Falls and Lower Zambezi safari, Zambia',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Livingstone & Lower Zambezi Safari Package | 8 Days | On A Whim',
    description: 'Eight days. Two worlds. One river between them. Victoria Falls to Lower Zambezi, limited to 8 guests.',
    images: ['https://onawhim.co.za/packages/livingstone-lower-zambezi/assets/img/livingstone-zambezi-hero-highres.png'],
  },
};

const lzSchema = {
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
      "@id": "https://onawhim.co.za/packages/livingstone-lower-zambezi/#primaryimage",
      "contentUrl": "https://onawhim.co.za/packages/livingstone-lower-zambezi/assets/img/livingstone-zambezi-hero-highres.png",
      "width": 1320,
      "height": 1756,
      "caption": "Victoria Falls and Lower Zambezi safari, Zambia"
    },
    {
      "@type": "WebPage",
      "@id": "https://onawhim.co.za/packages/livingstone-lower-zambezi/#webpage",
      "url": "https://onawhim.co.za/packages/livingstone-lower-zambezi",
      "name": "Livingstone & Lower Zambezi Safari Package | 8 Days, Zambia | On A Whim",
      "primaryImageOfPage": {"@id":"https://onawhim.co.za/packages/livingstone-lower-zambezi/#primaryimage"},
      "isPartOf": {"@id":"https://onawhim.co.za/#org"}
    },
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        {"@type":"ListItem","position":1,"name":"Home","item":"https://onawhim.co.za/"},
        {"@type":"ListItem","position":2,"name":"Packages","item":"https://onawhim.co.za/packages"},
        {"@type":"ListItem","position":3,"name":"Livingstone & Lower Zambezi","item":"https://onawhim.co.za/packages/livingstone-lower-zambezi"}
      ]
    },
    {
      "@type": "TouristTrip",
      "name": "Livingstone & Lower Zambezi — 8-Day Safari Package",
      "description": "Follow the Zambezi from Victoria Falls to Lower Zambezi National Park for private game drives and water safaris. Limited to 8 guests and staying at Royal Zambezi Lodge.",
      "touristType": ["Wildlife safari travellers","Couples","Small groups"],
      "image": {"@id":"https://onawhim.co.za/packages/livingstone-lower-zambezi/#primaryimage"},
      "provider": {"@id":"https://onawhim.co.za/#org"},
      "itinerary": {
        "@type": "ItemList",
        "itemListElement": [
          {"@type":"ListItem","position":1,"item":{"@type":"TouristAttraction","name":"Victoria Falls","address":"Livingstone, Zambia"}},
          {"@type":"ListItem","position":2,"item":{"@type":"TouristAttraction","name":"Lower Zambezi National Park","address":"Zambia"}},
          {"@type":"ListItem","position":3,"item":{"@type":"LodgingBusiness","name":"Royal Zambezi Lodge","address":"Lower Zambezi, Zambia"}}
        ]
      },
      "offers": {
        "@type": "Offer",
        "url": "https://onawhim.co.za/packages/livingstone-lower-zambezi",
        "priceCurrency": "USD",
        "priceSpecification": {"@type":"PriceSpecification","minPrice":"6185","priceCurrency":"USD","description":"From $6,185 pp — request a personalised quote"},
        "availability": "https://schema.org/InStock",
        "seller": {"@id":"https://onawhim.co.za/#org"}
      }
    },
    {
      "@type": "FAQPage",
      "mainEntity": [
        {"@type":"Question","name":"How many guests are on this safari?","acceptedAnswer":{"@type":"Answer","text":"This package is deliberately intimate and limited to a maximum of 8 guests, so every game drive and transfer stays private and unhurried."}},
        {"@type":"Question","name":"When is the best time to visit Lower Zambezi?","acceptedAnswer":{"@type":"Answer","text":"The dry season from June to October is the peak wildlife viewing period in the Lower Zambezi when animal herds gather along the river floodplains. Many lodges close during the wet green season (November to March)."}},
        {"@type":"Question","name":"What flights are included in the package?","acceptedAnswer":{"@type":"Answer","text":"A scenic light-aircraft charter flight connects Livingstone directly to the Royal Zambezi Lodge airstrip. On departure, a charter flight from the lodge to Lusaka International Airport is included."}},
        {"@type":"Question","name":"How much does this package cost?","acceptedAnswer":{"@type":"Answer","text":"This 8-day package is priced from $6,185 per person sharing during the shoulder season, and from $7,016 per person sharing during the high season. A single supplement of $399 (shoulder) or $438 (high season) applies for solo travellers."}}
      ]
    }
  ]
};

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(lzSchema) }}
      />
      <PackageInteractions packageName="Livingstone & Lower Zambezi" />

      <div className="pkg-page">
        {/* ================= NAV ================= */}
        <nav id="nav">
          <a href="/" className="brand">On a Whim</a>
          <div className="nav-links" id="navlinks">
            <a href="#overview">Overview</a>
            <a href="#itinerary">Itinerary</a>
            <a href="#stay">The Lodge</a>
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
              src="/packages/livingstone-lower-zambezi/assets/img/livingstone-zambezi-hero-highres.png"
              sizes="100vw"
              width="1320"
              height="1756"
              fetchPriority="high"
              decoding="async"
              alt="Victoria Falls and Lower Zambezi safari, Zambia"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </div>
          <div className="hero-scrim"></div>
          <div className="hero-inner">
            <div className="wrap">
              <span className="eyebrow">8-Day Package · Zambia · Limited to 8 Guests</span>
              <h1>Livingstone &amp;<br />Lower Zambezi</h1>
              <p className="tagline">The River Leads. The Wild Waits.</p>
              <div className="hero-facts">
                <div className="fact">
                  <div className="k">Duration</div>
                  <div className="v">8 <small>Days / 7 Nights</small></div>
                </div>
                <div className="fact">
                  <div className="k">Countries</div>
                  <div className="v">Zambia</div>
                </div>
                <div className="fact">
                  <div className="k">Group Size</div>
                  <div className="v">Max 8 <small>Guests</small></div>
                </div>
                <div className="fact">
                  <div className="k">From</div>
                  <div className="v">$6,185 <small>pp / Shoulder Season</small></div>
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
              <h2 style={{ fontSize: 'clamp(32px,4.6vw,50px)', margin: '16px 0 22px' }}>The river leads. The wild waits.</h2>
              <p className="lede">Most safaris take you across borders. This one takes you deeper into a single country — following the Zambezi from its most famous spectacle at Victoria Falls to its most untouched wild in the Lower Zambezi.</p>
              <p style={{ marginTop: '20px', color: 'var(--warm-grey)' }}>Three nights at the edge of the Falls for white rhino walks and the historic dinner train at dusk. Then, a charter flight carries you east to Royal Zambezi Lodge for four nights of unhurried game viewing, riverboat safaris, and night drives in a park that receives a fraction of Africa's visitors.</p>
            </div>
            <div className="overview-art reveal" style={{ overflow: 'hidden', borderRadius: '3px' }}>
              <img
                src="/packages/livingstone-lower-zambezi/assets/img/livingstone-zambezi-journey.png"
                width="560"
                height="460"
                loading="lazy"
                alt="Victoria Falls spray and canyon"
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
                <h3>River views &amp; sunset cruise</h3>
                <p>Met at Livingstone Airport and transferred to the lodge. Settle in, then enjoy a sundowner riverboat cruise as the day settles and hippos surface.</p>
                <div className="stay">Overnight · <b>David Livingstone Safari Lodge</b>, Livingstone</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">2<span className="lbl">Explore</span></div>
              <div>
                <div className="place">Livingstone, Zambia</div>
                <h3>Victoria Falls &amp; rhino walks</h3>
                <p>Guided walk along the knife-edge paths of Victoria Falls (Zambian side). Afternoon walk on foot tracking white rhino in Mosi-oa-Tunya National Park.</p>
                <div className="stay">Included · Guided Falls Tour · Walking with White Rhinos</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">3<span className="lbl">Savour</span></div>
              <div>
                <div className="place">Livingstone, Zambia</div>
                <h3>Elephant encounter &amp; dinner train</h3>
                <p>Gentle elephant interaction with lunch on the Zambezi. In the evening, cross the Victoria Falls bridge aboard the restored Royal Livingstone Express train for a 5-course dinner.</p>
                <div className="stay">Included · Elephant interaction &amp; lunch · Royal Livingstone Express train</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">4<span className="lbl">Fly</span></div>
              <div>
                <div className="place">Zambia · Charter Flight</div>
                <h3>Fly east to the Lower Zambezi</h3>
                <p>A scenic charter flight follows the Zambezi east, landing on the private airstrip at Royal Zambezi Lodge. Enjoy a first afternoon activity along the river plains.</p>
                <div className="stay">Overnight · <b>Royal Zambezi Lodge</b>, Lower Zambezi</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">5<span className="lbl">Safari</span></div>
              <div>
                <div className="place">Lower Zambezi National Park</div>
                <h3>Walking safaris &amp; game drives</h3>
                <p>Mornings on foot tracking tracks with expert local guides. Afternoons exploring the private concession and park in open-sided 4x4 vehicles.</p>
                <div className="stay">Included · Guided Walking Safaris · 4x4 Game Drives</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">6<span className="lbl">Safari</span></div>
              <div>
                <div className="place">Lower Zambezi National Park</div>
                <h3>River boat cruises &amp; sandbanks</h3>
                <p>Explore the park from the water, drifting past elephants wading to their shoulders and sandbanks crowded with birdlife. Sunset drinks on the riverbank.</p>
                <div className="stay">Overnight · <b>Royal Zambezi Lodge</b></div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">7<span className="lbl">Savour</span></div>
              <div>
                <div className="place">Lower Zambezi National Park</div>
                <h3>Predators &amp; night drives</h3>
                <p>Dawn drives in search of lions and leopards, followed by unhurried afternoons in camp. A final evening night drive as the bush wakes up.</p>
                <div className="stay">Included · Night drives in Lower Zambezi National Park</div>
              </div>
            </div>

            <div className="day reveal">
              <div className="day-no">8<span className="lbl">Depart</span></div>
              <div>
                <div className="place">Lusaka, Zambia</div>
                <h3>Departure</h3>
                <p>A relaxed morning in camp before your charter flight to Lusaka International Airport for your onward travel.</p>
                <div className="stay">Included · Charter flight to Lusaka Airport</div>
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
                <li><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 6" /></svg>charter flights &amp; transfers</li>
                <li><svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 6" /></svg>Local expert guides throughout</li>
              </ul>
            </div>
            <div className="exp-card reveal">
              <h3>Signature experiences</h3>
              <ul>
                <li>Guided Tour of Victoria Falls</li>
                <li>Walking with White Rhinos</li>
                <li>Royal Livingstone Express Dinner Train</li>
                <li>Elephant Interaction with Lunch</li>
                <li>Zambezi River boat cruises</li>
                <li>Lower Zambezi walking safaris</li>
              </ul>
            </div>
          </div>
        </section>

        {/* ================= STAY HIGHLIGHT ================= */}
        <section className="stay-hl section" id="stay">
          <div className="wrap">
            <div className="stay-art reveal" style={{ overflow: 'hidden', borderRadius: '3px' }}>
              <img
                src="/packages/livingstone-lower-zambezi/assets/img/royal-zambezi-lodge.png"
                width="560"
                height="420"
                loading="lazy"
                alt="Royal Zambezi Lodge suite wooden deck"
                style={{ width: '100%', height: '100%', objectFit: 'cover' }}
              />
            </div>
            <div className="reveal">
              <span className="eyebrow">Where You'll Stay · Lower Zambezi</span>
              <h2>Royal Zambezi Lodge</h2>
              <p>A private concession on the banks of the Zambezi, with the escarpment rising behind camp and the game moving through on its own terms. Generous tented suites, exceptional food, and guiding of the highest order — in one of Africa's least-visited national parks.</p>
              <p>Watch wildlife drink from the river directly from your private wooden deck, and listen to the sounds of the African night under canvas luxury.</p>
              <a href="#enquire" className="btn btn-light" style={{ marginTop: '12px' }}>Enquire about this lodge</a>
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
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-1-1373x1909.png" alt="Livingstone & Lower Zambezi PDF Image 1" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-2-622x895.png" alt="Livingstone & Lower Zambezi PDF Image 2" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-3-750x454.png" alt="Livingstone & Lower Zambezi PDF Image 3" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-4-812x1279.png" alt="Livingstone & Lower Zambezi PDF Image 4" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-5-744x464.png" alt="Livingstone & Lower Zambezi PDF Image 5" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-6-749x1197.png" alt="Livingstone & Lower Zambezi PDF Image 6" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-7-540x855.png" alt="Livingstone & Lower Zambezi PDF Image 7" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-8-748x497.png" alt="Livingstone & Lower Zambezi PDF Image 8" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-9-1320x1756.png" alt="Livingstone & Lower Zambezi PDF Image 9" loading="lazy" />
              </div>
              <div className="gallery-item">
                <img src="/packages/livingstone-lower-zambezi/assets/img/img-10-716x1299.png" alt="Livingstone & Lower Zambezi PDF Image 10" loading="lazy" />
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
                <h3>When is the best time to visit Lower Zambezi?</h3>
                <p>The dry season from June to October is the peak wildlife viewing period in the Lower Zambezi when animal herds gather along the river floodplains. Many lodges close during the wet green season (November to March).</p>
              </div>
              <div className="faq-item">
                <h3>What flights are included in the package?</h3>
                <p>A scenic light-aircraft charter flight connects Livingstone directly to the Royal Zambezi Lodge airstrip. On departure, a charter flight from the lodge to Lusaka International Airport is included.</p>
              </div>
              <div className="faq-item">
                <h3>How much does this package cost?</h3>
                <p>This 8-day package is priced <b>from $6,185 per person sharing</b> during the shoulder season, and <b>from $7,016 per person sharing</b> during the high season. A single supplement of <b>$399 (shoulder)</b> or <b>$438 (high season)</b> applies for solo travellers.</p>
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
              <a href="/packages/livingstone-chobe" className="rel-card reveal">
                <div className="rel-art">
                  <picture>
                    <source type="image/webp" srcSet="/packages/livingstone-chobe/assets/img/livingstone-chobe-hero-highres.png" sizes="(max-width:900px) 100vw, 360px" />
                    <img src="/packages/livingstone-chobe/assets/img/livingstone-chobe-hero-highres.png" sizes="(max-width:900px) 100vw, 360px" width="760" height="570" loading="lazy" decoding="async" alt="Livingstone and Chobe package" />
                  </picture>
                </div>
                <div className="rel-body">
                  <div className="place">Zambia · Botswana</div>
                  <h3>Livingstone &amp; Chobe</h3>
                  <p>Experience Zambia and Botswana in one seamless journey — Victoria Falls from the Zambian bank and Chobe River boat cruises.</p>
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
