import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Authentic African Safaris & Tours | Handpicked Packages | On a Whim',
  description: 'Explore our handpicked African tours and safari packages. Expert-guided journeys covering Victoria Falls, Hwange, Chobe, and the Lower Zambezi.',
  alternates: {
    canonical: 'https://onawhim.co.za/tours',
  },
  openGraph: {
    type: 'website',
    url: 'https://onawhim.co.za/tours',
    title: 'Authentic African Safaris & Tours | Handpicked Packages | On a Whim',
    description: 'Explore our handpicked African tours and safari packages. Expert-guided journeys covering Victoria Falls, Hwange, Chobe, and the Lower Zambezi.',
    images: [
      {
        url: 'https://onawhim.co.za/images/hero/hero-one.jpg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Authentic African Safaris & Tours | Handpicked Packages | On a Whim',
    description: 'Explore our handpicked African tours and safari packages. Expert-guided journeys covering Victoria Falls, Hwange, Chobe, and the Lower Zambezi.',
    images: ['https://onawhim.co.za/images/hero/hero-one.jpg'],
  },
};

const toursSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "name": "African Safaris & Tours",
  "description": "Exclusive, handpicked tour packages across South Africa, Zimbabwe, Zambia, and Botswana.",
  "url": "https://onawhim.co.za/tours",
  "mainEntity": {
    "@type": "ItemList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "url": "https://onawhim.co.za/packages/victoria-falls-hwange"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "url": "https://onawhim.co.za/packages/livingstone-chobe"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "url": "https://onawhim.co.za/packages/livingstone-lower-zambezi"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "url": "https://onawhim.co.za/tours/giants-of-the-garden-route"
      }
    ]
  }
};

const t = {
  cream:     "#F5F0E8",
  creamDark: "#EDE6D8",
  creamDeep: "#E0D6C4",
  sand:      "#C8B99A",
  sandDark:  "#A89278",
  earth:     "#3D2B1A",
  earthMid:  "#6B4A30",
  gold:      "#8B6914",
  goldLight: "#B8952A",
  charcoal:  "#1A1614",
  white:     "#FFFFFF",
  offWhite:  "#FDFAF5",
  muted:     "#7A6E63",
};

const TOURS = [
  {
    id: "vic-falls-hwange",
    name: "Victoria Falls & Hwange",
    dates: "9 Aug · 23 Aug · 6 Sep · 4 Oct",
    price: "From $4,939 pp",
    image: "/images/now%20booking/Victoria_Falls_Hwange.png",
    tag: "Zimbabwe",
    spots: "4 spots left",
    pagePath: "/packages/victoria-falls-hwange",
    description: "Begin at the edge of Victoria Falls, then fly deep into Hwange National Park for elephant herds and private-concession game drives."
  },
  {
    id: "livingstone-chobe",
    name: "Livingstone & Chobe",
    dates: "2 Jul · 23 Jul · 20 Aug · 22 Oct",
    price: "From $4,176 pp",
    image: "/images/now%20booking/Livingstone_Chobe.png",
    tag: "Zambia · Botswana",
    spots: "6 spots left",
    pagePath: "/packages/livingstone-chobe",
    description: "Intimate walking safaris with rhinos in Livingstone, followed by river cruises and private drives along the Chobe River."
  },
  {
    id: "livingstone-lower-zambezi",
    name: "Livingstone & Lower Zambezi",
    dates: "25 Jul · 1 Aug · 5 Sep · 17 Sep",
    price: "From $6,185 pp",
    image: "/images/now%20booking/Livingstone_Lower_Zambezi.png",
    tag: "Zambia",
    spots: "Selling Fast",
    pagePath: "/packages/livingstone-lower-zambezi",
    description: "Follow the Zambezi from the thunder of Victoria Falls to the ultimate wilderness of the Lower Zambezi National Park."
  },
  {
    id: "giants-garden-route",
    name: "Giants of the Garden Route",
    dates: "3 Aug · 24 Aug · 7 Sep · 21 Sep",
    price: "Rates on Enquiry",
    image: "/images/giants/giants-garden-route-whale-knysna.jpg",
    tag: "South Africa",
    spots: "Booking Now",
    pagePath: "/tours/giants-of-the-garden-route",
    description: "Whales breaching off the Knysna Heads, walking with forest elephants, and standing under an 800-year-old ancient giant."
  }
];

export default function Page() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(toursSchema) }}
      />
      <div style={{ paddingTop: '80px', background: t.cream, minHeight: '100vh' }}>
        {/* Intro Section */}
        <section style={{ padding: "80px 24px 40px", textAlign: "center" }}>
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <p style={{
              fontFamily: "var(--font-jost), sans-serif", fontSize: "11px", fontWeight: 500,
              letterSpacing: "0.28em", textTransform: "uppercase", color: t.sandDark,
              marginBottom: "14px"
            }}>Handpicked Journeys</p>
            <h1 style={{
              fontFamily: "var(--font-cormorant), Georgia, serif",
              fontSize: "clamp(36px, 5vw, 64px)",
              fontWeight: 600, letterSpacing: "0.06em",
              textTransform: "uppercase", color: t.charcoal,
              margin: "0 0 20px 0", lineHeight: 1.1
            }}>Authentic African Safaris &amp; Tours</h1>
            <p style={{
              fontFamily: "var(--font-jost), sans-serif", fontSize: "16px", fontWeight: 300,
              color: t.muted, lineHeight: 1.8, margin: 0
            }}>
              Discover our exclusive Southern African tour packages, custom-crafted by local experts to show you the best of Victoria Falls, Hwange, Chobe, and the Lower Zambezi.
            </p>
          </div>
        </section>

        {/* Tours Grid */}
        <section style={{ padding: "40px 24px 100px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <div style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "40px 30px"
            }}>
              {TOURS.map((pkg) => (
                <div
                  key={pkg.id}
                  style={{
                    background: t.offWhite,
                    border: `1px solid rgba(200, 185, 154, 0.15)`,
                    borderRadius: "4px",
                    overflow: "hidden",
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.03)"
                  }}
                >
                  <div style={{ position: "relative", height: "240px", width: "100%", overflow: "hidden" }}>
                    <span style={{
                      position: "absolute", top: "16px", left: "16px", zIndex: 10,
                      background: t.charcoal, color: t.white,
                      fontFamily: "var(--font-jost), sans-serif", fontSize: "9px", fontWeight: 500,
                      letterSpacing: "0.15em", textTransform: "uppercase",
                      padding: "6px 12px", borderRadius: "2px"
                    }}>{pkg.tag}</span>
                    <span style={{
                      position: "absolute", top: "16px", right: "16px", zIndex: 10,
                      background: "rgba(201, 147, 42, 0.9)", color: t.white,
                      fontFamily: "var(--font-jost), sans-serif", fontSize: "9px", fontWeight: 600,
                      letterSpacing: "0.1em", textTransform: "uppercase",
                      padding: "6px 12px", borderRadius: "2px"
                    }}>{pkg.spots}</span>
                    <img
                      src={pkg.image}
                      alt={pkg.name}
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover"
                      }}
                    />
                  </div>
                  <div style={{ padding: "30px 24px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
                    <h3 style={{
                      fontFamily: "var(--font-cormorant), serif",
                      fontSize: "26px",
                      fontWeight: 600,
                      letterSpacing: "0.03em",
                      color: t.charcoal,
                      lineHeight: 1.2,
                      margin: "0 0 12px 0"
                    }}>{pkg.name}</h3>
                    <p style={{
                      fontFamily: "var(--font-jost), sans-serif",
                      fontSize: "14px",
                      fontWeight: 300,
                      color: t.muted,
                      lineHeight: 1.6,
                      margin: "0 0 20px 0",
                      flexGrow: 1
                    }}>
                      {pkg.description}
                    </p>
                    <p style={{
                      fontFamily: "var(--font-jost), sans-serif",
                      fontSize: "13px",
                      fontWeight: 400,
                      color: t.muted,
                      margin: "0 0 24px 0"
                    }}>
                      <strong style={{ color: t.charcoal }}>Key Dates:</strong> {pkg.dates}
                    </p>
                    <div style={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      borderTop: `1px solid rgba(200, 185, 154, 0.15)`,
                      paddingTop: "20px"
                    }}>
                      <span style={{
                        fontFamily: "var(--font-jost), sans-serif",
                        fontSize: "15px",
                        fontWeight: 600,
                        color: t.charcoal
                      }}>{pkg.price}</span>
                      <Link
                        href={pkg.pagePath}
                        style={{
                          fontFamily: "var(--font-jost), sans-serif",
                          fontSize: "11px",
                          fontWeight: 600,
                          letterSpacing: "0.15em",
                          textTransform: "uppercase",
                          color: t.gold,
                          textDecoration: "none"
                        }}
                      >
                        View Details &rarr;
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
