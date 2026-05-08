import { useState, useRef, useEffect } from "react";
import { useLocation, Link } from "react-router-dom";

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

/* ─── REAL PACKAGE DATA FROM BUSHTRACKS PDFs ────────────────── */
const PACKAGES = [
  {
    id: "vic-falls-hwange",
    country: "Zimbabwe",
    name: "Victoria Falls & Hwange",
    tagline: "One Zimbabwe, Two Distinct Experiences",
    subtitle: "Eight Days. Two Landscapes. Endless Wild.",
    description: "Begin at the edge of one of the world's greatest natural wonders — Victoria Falls, known as Mosi-oa-Tunya, the smoke that thunders. Three nights at Insika Lodge put you at the doorstep of this UNESCO World Heritage Site, then a scenic charter flight carries you into the heart of Hwange National Park — Zimbabwe's largest game reserve, famed for its extraordinary elephant herds. Four nights at Iganyana Tented Camp place you deep in the wilderness where few roads and even fewer visitors venture.",
    duration: "8 Days · 7 Nights",
    guests: "Limited to 8 Guests",
    price: "From $4,939 pp",
    singleSupp: "Single supp. $648",
    accommodation: [
      { nights: "3 Nights", property: "Insika Lodge", location: "Victoria Falls, Zimbabwe", type: "Bed & Breakfast", description: "African elegance meets natural serenity just 3.6 km from the Falls. Spacious rooms, tranquil gardens, a spa, and a private waterhole that draws wildlife to the horizon pool." },
      { nights: "4 Nights", property: "Iganyana Tented Camp", location: "Dete Vlei, Hwange", type: "Full Board", description: "A refined tented sanctuary on a private concession bordering Hwange National Park, overlooking the ancient Dete Vlei — a natural wildlife corridor alive with elephants, antelope, and predators." },
    ],
    meals: "7 breakfasts · 5 lunches · 6 dinners · 1 sundowner",
    experiences: [
      { title: "Guided Tour of Victoria Falls", desc: "More than a kilometre wide, a hundred metres deep — absolutely nothing prepares you for it." },
      { title: "Night Game Drive & Bush Dinner", desc: "Stanley & Livingstone Private Reserve. The bush after dark is a different country entirely." },
      { title: "Bushtracks Express Dinner Train", desc: "A restored historic train, a candlelit table, the bush rolling past the windows. There is no other dinner quite like it." },
      { title: "Sunset River Cruise — Zambezi", desc: "The river turns gold, the hippos surface, and the day settles into something you won't want to end." },
      { title: "Township Tour", desc: "The community around Victoria Falls is as rich a story as the falls themselves — this is where you hear it." },
      { title: "Game Drives — Private Concession", desc: "No other vehicles. No shared sightings. Just Iganyana's guides, the Dete Vlei, and whatever the day decides to offer." },
      { title: "Night Drive — Hwange Concession", desc: "When the guides cut the engine and listen, Hwange reveals what the daylight keeps to itself." },
      { title: "Sundowner Picnic in the Bush", desc: "No camp, no walls, no roof — just the concession, the last of the light, and a sundowner that earns its name." },
      { title: "Painted Dog Conservation Centre", desc: "A visit and contribution to one of Africa's most vital wildlife conservation projects." },
    ],
    departures: {
      label: "2026 Departures",
      dates: ["9 August", "23 August", "6 September", "4 October", "18 October", "8 November", "6 December"],
    },
    heroGradient: "linear-gradient(160deg, #1a0a02 0%, #3d1a05 40%, #6b3510 70%, #3d1a05 100%)",
    cardImage: "/images/packages/vic-falls-hwange.jpg",
    accentColor: "#C9932A",
    mapRegion: "Zimbabwe",
    route: "Victoria Falls → Hwange",
    pages: ["safari", "southern-africa"],
  },
  {
    id: "livingstone-chobe",
    country: "Zambia · Botswana",
    name: "Livingstone & Chobe",
    tagline: "The Falls, The River, The Wild Heart of Africa",
    subtitle: "Eight Days. Two Countries. One Seamless Journey.",
    description: "Few journeys in southern Africa offer this kind of contrast without ever feeling disjointed. Three nights in Livingstone put you at the edge of Victoria Falls from the Zambian bank — intimate paths, white rhino on foot, a candlelit dinner on the Royal Livingstone Express. Then the road crosses into Botswana, and Chobe National Park opens up — quieter and more expansive, where the game comes to the river and the days are shaped by boat cruises and long drives deep into the park.",
    duration: "8 Days · 7 Nights",
    guests: "Limited to 8 Guests",
    price: "From $4,176 pp",
    priceHighSeason: "From $4,979 pp",
    priceShoulder: "From $4,176 pp",
    singleSupp: "Single supp. from $1,048",
    accommodation: [
      { nights: "3 Nights", property: "Radisson Blu Mosi-Oa-Tunya", location: "Livingstone, Zambia", type: "Bed & Breakfast", description: "A well-appointed riverside base close to the spray of the Falls, with spacious rooms, attentive service, and easy access to the Zambian bank of Victoria Falls." },
      { nights: "4 Nights", property: "Tlouwana Tented Camp", location: "Chobe, Botswana", type: "Full Board", description: "An intimate canvas camp on the edge of one of Africa's greatest wildlife destinations — unhurried, unfenced, and entirely at home in the wild of the Chobe River." },
    ],
    meals: "7 breakfasts · 5 lunches · 5 dinners · 1 sundowner",
    experiences: [
      { title: "Guided Tour of Victoria Falls — Zambian Side", desc: "The Zambian bank offers an intimacy the other side cannot — paths that wind close to the edge of the gorge." },
      { title: "Walking with White Rhino — Mosi-oa-Tunya", desc: "On foot, at close range, with a species that was once gone from Zambia entirely. A quiet morning that stays with you." },
      { title: "Elephant Interaction with Lunch", desc: "At river level, in the company of elephants raised with remarkable gentleness — and a lunch in one of the most unexpected locations on the Zambezi." },
      { title: "Sunset River Cruise — Lady Livingstone", desc: "The river turns gold, the hippos surface, and the day settles into something you won't want to end." },
      { title: "Royal Livingstone Express", desc: "A 5-course dinner aboard a restored historic train that crosses the Victoria Falls bridge at dusk." },
      { title: "Mukuni Village & Maramba Market", desc: "The community around Livingstone is as rich a story as the falls themselves — this is where you hear it." },
      { title: "Game Drives — Chobe National Park", desc: "One of the highest concentrations of elephant on the continent. Chobe rewards patience with everything it has to offer." },
      { title: "Boat Cruise — Chobe River", desc: "Elephants cross in their hundreds, crocodiles surface, and the late afternoon light on the river is something cameras never quite manage to capture." },
      { title: "Community & Bicycle Tour — Lesoma Valley", desc: "A stay that manages to feel both full and unhurried. The Chobe rewards those who give it time." },
    ],
    departures: {
      label: "2026 Departures",
      highSeason: ["2 July", "23 July", "20 August", "22 October"],
      shoulder: ["5 November", "19 November", "10 December"],
    },
    heroGradient: "linear-gradient(160deg, #020f1a 0%, #051e2e 40%, #0a3d5c 70%, #051e2e 100%)",
    cardImage: "/images/packages/livingstone-chobe.jpg",
    accentColor: "#4A9ECC",
    mapRegion: "Zambia · Botswana",
    route: "Livingstone → Kasane",
    pages: ["safari", "southern-africa"],
  },
  {
    id: "livingstone-lower-zambezi",
    country: "Zambia",
    name: "Livingstone & Lower Zambezi",
    tagline: "The River Leads. The Wild Waits.",
    subtitle: "Eight Days. Two Worlds. One River Between Them.",
    description: "Most safaris take you across borders. This one takes you deeper into a single country — following the Zambezi from its most famous moment to one of its most untouched. Three nights in Livingstone for the Falls, white rhino on foot, and the Royal Livingstone Express at dusk. Then a charter flight carries you east to Royal Zambezi Lodge — four nights on a private concession in one of Africa's least-visited national parks, where wide floodplains meet a dramatic escarpment and lion and leopard move through the jesse bush.",
    duration: "8 Days · 7 Nights",
    guests: "Limited to 8 Guests",
    price: "From $6,185 pp",
    priceHighSeason: "From $7,016 pp",
    priceShoulder: "From $6,185 pp",
    singleSupp: "Single supp. from $399",
    accommodation: [
      { nights: "3 Nights", property: "David Livingstone Safari Lodge", location: "Livingstone, Zambia", type: "Bed & Breakfast", description: "Set on the banks of the Zambezi within easy reach of the Falls, this is one of Zambia's most celebrated riverside properties — classic in character, generous in scale." },
      { nights: "4 Nights", property: "Royal Zambezi Lodge", location: "Lower Zambezi National Park, Zambia", type: "Full Board", description: "A private concession on the banks of the Zambezi with the escarpment rising behind camp. Generous tented suites, exceptional food, and guiding of the highest order in one of Africa's least-visited parks." },
    ],
    meals: "7 breakfasts · 4 lunches · 6 dinners · 1 sundowner",
    experiences: [
      { title: "Guided Tour of Victoria Falls — Zambian Side", desc: "Paths that wind close to the edge of the gorge, and a curtain of mist that shifts with the season and the hour." },
      { title: "Walking with White Rhino — Mosi-oa-Tunya", desc: "On foot, at close range, with a species that was once gone from Zambia entirely." },
      { title: "Elephant Interaction with Lunch", desc: "At river level, in the company of elephants raised with remarkable gentleness — and a lunch set in one of the most unexpected locations on the Zambezi." },
      { title: "Royal Livingstone Express", desc: "A 5-course dinner aboard a restored historic train that crosses the Victoria Falls bridge at dusk — and doesn't stop until dinner is long finished and the bush has gone completely dark." },
      { title: "Sunset River Cruise — Zambezi", desc: "The river wide and unhurried, the Falls somewhere upstream making themselves heard before you've even seen them." },
      { title: "Mukuni Village & Maramba Market", desc: "The community around Livingstone is as rich a story as the falls themselves." },
      { title: "Game Drives & Walking Safaris — Lower Zambezi", desc: "No other vehicles. No shared sightings. Just the private concession, the escarpment, and whatever the day decides to offer." },
      { title: "Boat Cruise — Zambezi River", desc: "From the water, the Lower Zambezi looks like a different park entirely. The elephants wade in to their shoulders. The hippos surface closer than expected." },
      { title: "Night Drives — Lower Zambezi", desc: "Unhurried. The sense, throughout, that you are somewhere genuinely far from the circuit." },
    ],
    departures: {
      label: "2026 Departures",
      highSeason: ["25 July", "1 August", "5 September", "17 September", "5 October", "12 November"],
      shoulder: ["3 December", "10 December"],
    },
    heroGradient: "linear-gradient(160deg, #0a0f02 0%, #1a2a05 40%, #2d4a0a 70%, #1a2a05 100%)",
    cardImage: "/images/packages/livingstone-lower-zambezi.jpg",
    accentColor: "#8BAA3A",
    mapRegion: "Zambia",
    route: "Livingstone → Lower Zambezi",
    pages: ["safari", "southern-africa"],
  },
];

/* ─── HOOKS ─────────────────────────────────────────────────── */
function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setV(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return [ref, v];
}

function Fade({ children, delay = 0, style: sx = {} }) {
  const [ref, v] = useInView();
  return (
    <div ref={ref} style={{
      opacity: v ? 1 : 0,
      transform: v ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
      ...sx,
    }}>{children}</div>
  );
}

const HR = ({ opacity = 0.3, my = 0, color = t.sand }) => (
  <div style={{ height: 1, background: color, opacity, margin: `${my}px 0` }} />
);

const Label = ({ children, light }) => (
  <p style={{
    fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
    letterSpacing: "0.28em", textTransform: "uppercase",
    color: light ? "rgba(255,255,255,0.45)" : t.sandDark, marginBottom: 14,
  }}>{children}</p>
);

const BigHead = ({ children, light, size = "clamp(32px,4.5vw,60px)", style: sx = {} }) => (
  <h2 style={{
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: size, fontWeight: 600, letterSpacing: "0.06em",
    textTransform: "uppercase", lineHeight: 1.0,
    color: light ? t.white : t.charcoal, margin: 0, ...sx,
  }}>{children}</h2>
);

/* ─── PACKAGE CARD ─────────────────────────────────────────── */
function PackageCard({ pkg, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <Fade delay={index * 0.1}>
      <article style={{
        background: t.offWhite,
        border: `1px solid ${t.creamDeep}`,
        marginBottom: 2,
        transition: "border-color 0.3s",
      }}>

        {/* ── CARD HEADER ── */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "280px 1fr auto",
          gap: 0,
          cursor: "pointer",
        }} onClick={() => setExpanded(!expanded)}>

          <div style={{
            background: t.charcoal,
            minHeight: 200,
            position: "relative",
            overflow: "hidden",
          }}>
            <img
              src={pkg.cardImage}
              alt={pkg.name}
              style={{
                position: "absolute", inset: 0,
                width: "100%", height: "100%",
                objectFit: "cover", objectPosition: "center",
                filter: "brightness(0.72) saturate(1.05)",
              }}
            />
            <div style={{
              position: "absolute", inset: 0,
              background: "linear-gradient(to top, rgba(10,5,2,0.85) 0%, rgba(10,5,2,0.2) 55%, transparent 100%)",
            }} />
            <div style={{ position: "relative", zIndex: 1, padding: "28px 28px 0" }}>
              <div style={{
                fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 500,
                letterSpacing: "0.3em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.65)", marginBottom: 10,
              }}>{pkg.country}</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px,2.5vw,26px)",
                fontWeight: 600, letterSpacing: "0.05em",
                textTransform: "uppercase", color: t.white, lineHeight: 1.1,
              }}>{pkg.name}</div>
            </div>
            <div style={{ position: "relative", zIndex: 1, padding: "0 28px 28px" }}>
              <div style={{
                fontFamily: "'Jost', sans-serif", fontSize: 10,
                letterSpacing: "0.15em", color: "rgba(255,255,255,0.55)",
                marginBottom: 4,
              }}>{pkg.route}</div>
              <div style={{ width: 32, height: 1, background: pkg.accentColor, opacity: 0.9 }} />
            </div>
          </div>

          <div style={{ padding: "32px 36px", borderLeft: `1px solid ${t.creamDeep}` }}>
            <p style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: 18, fontStyle: "italic", fontWeight: 300,
              color: t.earthMid, marginBottom: 14, lineHeight: 1.4,
            }}>{pkg.tagline}</p>
            <p style={{
              fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300,
              color: t.muted, lineHeight: 1.78, marginBottom: 24,
              display: "-webkit-box", WebkitLineClamp: 3,
              WebkitBoxOrient: "vertical", overflow: "hidden",
            }}>{pkg.description}</p>

            <div style={{ display: "flex", gap: 32, flexWrap: "wrap" }}>
              {[
                { label: "Duration", value: pkg.duration },
                { label: "Group Size", value: pkg.guests },
                { label: "Meals", value: pkg.meals.split("·").length + " meals/day incl." },
              ].map((stat, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: t.sandDark, marginBottom: 3 }}>{stat.label}</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 500, color: t.charcoal }}>{stat.value}</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{
            padding: "32px 28px",
            borderLeft: `1px solid ${t.creamDeep}`,
            display: "flex", flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "flex-end",
            minWidth: 180,
          }}>
            <div style={{ textAlign: "right" }}>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: t.sandDark, marginBottom: 6 }}>Price Per Person</div>
              <div style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: 22, fontWeight: 600, color: t.charcoal, letterSpacing: "0.03em",
              }}>{pkg.priceShoulder || pkg.price}</div>
              {pkg.priceHighSeason && (
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: t.muted, marginTop: 2 }}>
                  High season {pkg.priceHighSeason}
                </div>
              )}
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: t.muted, marginTop: 4 }}>{pkg.singleSupp}</div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 10, alignItems: "flex-end", marginTop: 16 }}>
              <button
                onClick={e => { e.stopPropagation(); setExpanded(!expanded); }}
                style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
                  letterSpacing: "0.2em", textTransform: "uppercase",
                  background: "none", border: `1px solid ${t.sandDark}`,
                  color: t.charcoal, padding: "9px 18px", cursor: "pointer",
                  transition: "all 0.2s", whiteSpace: "nowrap",
                }}
              >
                {expanded ? "Close ↑" : "View Details ↓"}
              </button>
              <Link
                to="/enquire"
                onClick={e => e.stopPropagation()}
                className="cta-primary"
                style={{ padding: "10px 18px", fontSize: 10 }}
              >
                Start Planning →
              </Link>
            </div>
          </div>
        </div>

        {expanded && (
          <div style={{
            borderTop: `1px solid ${t.creamDeep}`,
            animation: "expandIn 0.35s ease forwards",
          }}>
            <style>{`
              @keyframes expandIn {
                from { opacity: 0; transform: translateY(-8px); }
                to   { opacity: 1; transform: translateY(0); }
              }
              .acc-grid { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0; }
              @media (max-width: 900px) { .acc-grid { grid-template-columns: 1fr !important; } }
            `}</style>

            <div className="acc-grid">
              <div style={{ padding: "40px 36px", borderRight: `1px solid ${t.creamDeep}` }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: t.sandDark, marginBottom: 20 }}>Accommodation</div>
                {pkg.accommodation.map((acc, i) => (
                  <div key={i} style={{ marginBottom: 28, paddingBottom: 28, borderBottom: i < pkg.accommodation.length - 1 ? `1px solid ${t.creamDeep}` : "none" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 6 }}>
                      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600, color: t.charcoal, lineHeight: 1.2 }}>{acc.property}</div>
                      <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, background: t.creamDark, padding: "3px 10px", borderRadius: 0, color: t.earthMid, whiteSpace: "nowrap", marginLeft: 12, marginTop: 3, letterSpacing: "0.1em" }}>{acc.nights}</div>
                    </div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, letterSpacing: "0.15em", textTransform: "uppercase", color: t.sandDark, marginBottom: 8 }}>{acc.location} · {acc.type}</div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 300, color: t.muted, lineHeight: 1.72 }}>{acc.description}</p>
                  </div>
                ))}

                <div style={{ marginTop: 8, padding: "16px 18px", background: t.creamDark, borderLeft: `3px solid ${t.sand}` }}>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: t.sandDark, marginBottom: 6 }}>Meals Included</div>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, color: t.earthMid, fontWeight: 400 }}>{pkg.meals}</div>
                </div>
              </div>

              <div style={{ padding: "40px 36px", borderRight: `1px solid ${t.creamDeep}` }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: t.sandDark, marginBottom: 20 }}>Curated Experiences</div>
                {pkg.experiences.map((exp, i) => (
                  <div key={i} style={{ marginBottom: 18, paddingBottom: 18, borderBottom: i < pkg.experiences.length - 1 ? `1px solid ${t.creamDeep}` : "none" }}>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 500, color: t.charcoal, marginBottom: 4, letterSpacing: "0.02em" }}>{exp.title}</div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 300, color: t.muted, lineHeight: 1.65 }}>{exp.desc}</div>
                  </div>
                ))}
              </div>

              <div style={{ padding: "40px 36px" }}>
                <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: t.sandDark, marginBottom: 20 }}>{pkg.departures.label}</div>

                {pkg.departures.dates ? (
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 32 }}>
                    {pkg.departures.dates.map((d, i) => (
                      <div key={i} style={{
                        fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 400,
                        padding: "6px 14px", background: t.creamDark,
                        border: `1px solid ${t.creamDeep}`, color: t.earthMid,
                        letterSpacing: "0.04em",
                      }}>{d}</div>
                    ))}
                  </div>
                ) : (
                  <div style={{ marginBottom: 32 }}>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: t.gold, marginBottom: 10 }}>High Season</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                      {pkg.departures.highSeason.map((d, i) => (
                        <div key={i} style={{
                          fontFamily: "'Jost', sans-serif", fontSize: 12,
                          padding: "6px 14px", background: t.creamDark,
                          border: `1px solid ${t.creamDeep}`, color: t.earthMid,
                        }}>{d}</div>
                      ))}
                    </div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: t.sandDark, marginBottom: 10 }}>Shoulder Season</div>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      {pkg.departures.shoulder.map((d, i) => (
                        <div key={i} style={{
                          fontFamily: "'Jost', sans-serif", fontSize: 12,
                          padding: "6px 14px", background: t.offWhite,
                          border: `1px solid ${t.creamDeep}`, color: t.muted,
                        }}>{d}</div>
                      ))}
                    </div>
                  </div>
                )}

                <HR opacity={0.35} my={0} />

                <div style={{ margin: "24px 0" }}>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: t.sandDark, marginBottom: 14 }}>Price Includes</div>
                  {[
                    "All accommodation as listed",
                    "All meals as specified",
                    "All activities & experiences listed",
                    "Airport transfers & charter flights",
                    "Park & conservation fees",
                    "VIP arrival service",
                  ].map((item, i) => (
                    <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                      <div style={{ width: 14, height: 14, border: `1px solid ${t.sandDark}`, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, marginTop: 1 }}>
                        <span style={{ color: t.gold, fontSize: 8 }}>✓</span>
                      </div>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 300, color: t.muted, lineHeight: 1.5 }}>{item}</span>
                    </div>
                  ))}
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, color: t.muted, marginTop: 12, fontStyle: "italic", lineHeight: 1.6 }}>
                    Excludes: international flights, visas, travel insurance, gratuities, premium beverages & items of a personal nature.
                  </div>
                </div>

                <HR opacity={0.35} my={0} />

                <div style={{ margin: "20px 0 28px" }}>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.22em", textTransform: "uppercase", color: t.sandDark, marginBottom: 12 }}>Key Information</div>
                  {[
                    ["Group size", "Minimum 2, maximum 8 guests"],
                    ["Validity", "1 July – 31 December 2026"],
                    ["Deposit", "Required to confirm booking"],
                    ["Final payment", "Due 30 days before departure"],
                  ].map(([k, v], i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", marginBottom: 8, paddingBottom: 8, borderBottom: `1px solid ${t.creamDeep}` }}>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: t.muted, fontWeight: 300 }}>{k}</span>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: t.charcoal, fontWeight: 500, textAlign: "right", maxWidth: "55%" }}>{v}</span>
                    </div>
                  ))}
                </div>

                <Link to="/enquire" className="cta-primary" style={{ width: "100%", textAlign: "center" }}>
                  Enquire About This Package
                </Link>
              </div>
            </div>
          </div>
        )}
      </article>
    </Fade>
  );
}

export default function Safari() {
  const { pathname } = useLocation();
  const isSafari = pathname === "/safari";

  const heroImg = isSafari
    ? "/images/hero/safari-hero.jpg"
    : "/images/hero/southern-africa-hero.jpg";

  const heading = isSafari
    ? ["Safari &", "Wildlife"]
    : ["Southern", "Africa"];

  const sub = isSafari
    ? "Extraordinary wildlife encounters across Zimbabwe, Zambia and Botswana — curated, expert-guided, and limited to just 8 guests."
    : "Cross-border journeys from the spray of Victoria Falls to the silence of the Lower Zambezi — and beyond.";

  const eyebrow = isSafari
    ? "Zimbabwe · Zambia · Botswana"
    : "Zimbabwe · Zambia · Botswana · Namibia · Mozambique";

  const packagesToDisplay = isSafari
    ? PACKAGES.filter(p => p.pages.includes("safari"))
    : PACKAGES.filter(p => p.pages.includes("southern-africa"));

  return (
    <div style={{ background: t.cream, color: t.charcoal }}>
      <style>{`
        .cta-primary {
          display: inline-block; font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 14px 38px;
          background: ${t.charcoal}; color: ${t.white};
          border: none; cursor: pointer; transition: background 0.25s;
          text-decoration: none;
        }
        .cta-primary:hover { background: ${t.earth}; }

        .cta-ghost-dark {
          display: inline-block; font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 13px 36px;
          background: transparent; color: rgba(255,255,255,0.9);
          border: 1px solid rgba(255,255,255,0.4); cursor: pointer;
          transition: border-color 0.25s, color 0.25s;
          text-decoration: none;
        }
        .cta-ghost-dark:hover { border-color: white; color: white; }

        @keyframes heroIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hi { animation: heroIn 1s ease forwards; }
        .hi.d1 { animation-delay: 0.2s; opacity: 0; }
        .hi.d2 { animation-delay: 0.4s; opacity: 0; }
        .hi.d3 { animation-delay: 0.6s; opacity: 0; }
        .hi.d4 { animation-delay: 0.75s; opacity: 0; }

        @media (max-width: 900px) {
          .sp { padding-left: 24px !important; padding-right: 24px !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{ position: "relative", height: "72vh", minHeight: 520, overflow: "hidden" }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("${heroImg}")`,
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.7) saturate(1.1)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(10,5,2,0.75) 0%, rgba(10,5,2,0.25) 60%, transparent 100%)",
        }} />
        <div style={{ position: "absolute", inset: 0, opacity: 0.02, backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")` }} />

        <div style={{ position: "absolute", top: 36, left: 56, opacity: 0.2 }}>
          <div style={{ width: 1, height: 48, background: t.white, marginBottom: 5 }} />
          <div style={{ width: 32, height: 1, background: t.white }} />
        </div>

        <div className="sp" style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", padding: "0 56px" }}>
          <div>
            <p className="hi d1" style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.28em", textTransform: "uppercase", color: "rgba(255,255,255,0.45)", marginBottom: 18 }}>
              {eyebrow}
            </p>
            <h1 className="hi d2" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px,7vw,88px)", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", lineHeight: 0.95, color: t.white }}>
              {heading[0]}
            </h1>
            <h1 className="hi d3" style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(44px,7vw,88px)", fontWeight: 300, fontStyle: "italic", letterSpacing: "0.04em", lineHeight: 1.05, color: "rgba(255,255,255,0.88)", marginBottom: 28 }}>
              {heading[1]}
            </h1>
            <p className="hi d4" style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300, lineHeight: 1.78, color: "rgba(255,255,255,0.65)", maxWidth: 500, marginBottom: 40 }}>
              {sub}
            </p>
            <div className="hi d4" style={{ display: "flex", gap: 14 }}>
              <Link to="/enquire" className="cta-primary">Start Planning</Link>
              <a href="#packages" className="cta-ghost-dark">View Packages ↓</a>
            </div>
          </div>
        </div>
      </section>

      {/* ── INTRO STRIP ── */}
      <div style={{ background: t.charcoal, padding: "22px 56px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 20 }}>
        {[
          { stat: "Explorer Safaris", label: "Bushtracks Africa · Est. 1989" },
          { stat: "3 Itineraries", label: "Fully curated, select departures" },
          { stat: "8 Guests Max", label: "Intimate & exclusive" },
          { stat: "8 Days · 7 Nights", label: "Per package" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
            {i > 0 && <div className="hide-sm" style={{ width: 1, height: 24, background: "rgba(255,255,255,0.08)" }} />}
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 15, fontWeight: 600, letterSpacing: "0.08em", color: t.white }}>{item.stat}</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase", color: "rgba(255,255,255,0.32)", marginTop: 1 }}>{item.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── PACKAGES ── */}
      <section id="packages" style={{ padding: "80px 56px 60px", background: t.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div className="two-col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "end", marginBottom: 60 }}>
              <div>
                <Label>{isSafari ? "Featured Safari Packages · 2026" : "Cross-Border Journeys · 2026"}</Label>
                <BigHead size="clamp(30px,4vw,50px)">
                  {isSafari ? "Explorer" : "Featured"}<br />
                  <span style={{ fontStyle: "italic", fontWeight: 300 }}>{isSafari ? "Safaris" : "Itineraries"}</span>
                </BigHead>
              </div>
              <div style={{ borderLeft: `1px solid ${t.sand}`, paddingLeft: 36 }}>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300, color: t.muted, lineHeight: 1.82 }}>
                  {isSafari 
                    ? "Three carefully crafted itineraries. Each one a complete journey — with expert guiding, exclusive properties, and every detail arranged. Fully curated, select departures, limited to 8 guests."
                    : "Southern Africa rewards those who venture beyond the familiar. These three itineraries follow the Zambezi through Zimbabwe, Zambia and Botswana — from the thunder of Victoria Falls to the silence of the Lower Zambezi's private concessions."}
                </p>
              </div>
            </div>
          </Fade>

          <HR opacity={0.3} my={0} />
          <div style={{ height: 32 }} />

          {packagesToDisplay.map((pkg, i) => (
            <PackageCard key={pkg.id} pkg={pkg} index={i} />
          ))}

          {/* Bespoke section (only for Southern Africa or both) */}
          <Fade delay={0.2}>
            <div style={{
              marginTop: 48, padding: "48px 44px",
              background: t.creamDark,
              border: `1px solid ${t.creamDeep}`,
              display: "grid", gridTemplateColumns: "1fr auto", gap: 40, alignItems: "center",
            }} className="two-col">
              <div>
                <Label>Something Different?</Label>
                <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: t.charcoal, marginBottom: 12 }}>
                  Need a Bespoke Itinerary?
                </h3>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300, color: t.muted, lineHeight: 1.78, maxWidth: 500 }}>
                  These packages represent select departures. If you'd prefer a private journey to Namibia, Mozambique, Botswana or Zimbabwe on your own dates, we build bespoke itineraries around you. Tell us where you want to go.
                </p>
              </div>
              <Link to="/enquire" className="cta-primary">Build My Itinerary →</Link>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── ENQUIRY CTA ── */}
      <section style={{ padding: "80px 56px", background: t.charcoal, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", right: "5%", transform: "translateY(-50%)", fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(120px,18vw,220px)", fontWeight: 300, color: "rgba(255,255,255,0.025)", lineHeight: 1, userSelect: "none" }}>?</div>
        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Fade>
            <div style={{ maxWidth: 620 }}>
              <Label light>Ready to Go?</Label>
              <BigHead light size="clamp(30px,4vw,52px)" style={{ marginBottom: 20 }}>
                Enquire About<br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>These Packages</span>
              </BigHead>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300, color: "rgba(255,255,255,0.55)", lineHeight: 1.82, marginBottom: 36 }}>
                Tell us which itinerary interests you, your preferred travel dates, and group size. We'll come back to you within 24 hours with availability and a full proposal.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <Link to="/enquire" className="cta-primary" style={{ background: t.gold }}>
                  Start Planning
                </Link>
                <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em" }}>
                  or call &nbsp;<strong style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500 }}>+27 62 138 0622</strong>
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
