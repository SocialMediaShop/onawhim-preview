import { useState, useEffect, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";

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

const HERO_IMAGES = [
  {
    url: "/images/hero/hero-one.jpg",
    credit: "On a Whim",
    headline: ["Authentic", "African Experiences"],
    sub: "Bespoke journeys across South Africa and Southern Africa — guided by people who call it home.",
  },
  {
    url: "/images/hero/hero-two.jpg",
    credit: "On a Whim",
    headline: ["Bespoke Safaris,", "Perfectly Crafted"],
    sub: "Every itinerary designed entirely around you.",
  },
  {
    url: "/images/hero/hero-three.jpg",
    credit: "On a Whim",
    headline: ["Southern Africa,", "Your Way."],
    sub: "Day tours to cross-border expeditions — all crafted by experts who know Africa deeply.",
  },
];

const DESTINATIONS = [
  {
    name: "Cape Town & Western Cape",
    nights: "1–7 nights",
    url: "https://images.unsplash.com/photo-1580060839134-75a5edca2e99?w=800&q=80&fit=crop&crop=center",
    path: "/enquire"
  },
  {
    name: "Garden Route",
    nights: "3–7 nights",
    url: "https://images.unsplash.com/photo-1504432842672-1a79f78e4084?w=800&q=80&fit=crop&crop=center",
    path: "/enquire"
  },
  {
    name: "Safari & Wildlife",
    nights: "2–10 nights",
    url: "https://images.unsplash.com/photo-1547471080-7cc2caa01a7e?w=800&q=80&fit=crop&crop=top",
    path: "/enquire"
  },
  {
    name: "Multi-Day Packages",
    nights: "5–14 nights",
    url: "https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=800&q=80&fit=crop&crop=center",
    path: "/enquire"
  },
  {
    name: "Day Excursions",
    nights: "Full day",
    url: "https://images.unsplash.com/photo-1576485375217-d6a95e34d043?w=800&q=80&fit=crop&crop=center",
    path: "/enquire"
  },
  {
    name: "Southern Africa",
    nights: "7–21 nights",
    url: "https://images.unsplash.com/photo-1489392191049-fc10c97e64b6?w=800&q=80&fit=crop&crop=center",
    path: "/enquire"
  },
];

const TOURS = [
  { name: "Cape Peninsula & Boulders Beach", destinations: "Cape Point · Chapman's Peak · Simonstown", nights: "1 Day" },
  { name: "Garden Route Explorer", destinations: "Knysna · Tsitsikamma · Plettenberg Bay", nights: "5 Nights" },
  { name: "Big 5 Safari & Cape Town", destinations: "Kruger National Park · Cape Peninsula", nights: "7 Nights" },
  { name: "Winelands Day Tour", destinations: "Stellenbosch · Franschhoek · Paarl", nights: "1 Day" },
  { name: "Table Mountain & City Highlights", destinations: "Table Mountain · Bo-Kaap · Waterfront", nights: "1 Day" },
  { name: "Southern Africa Grand Tour", destinations: "Cape Town · Victoria Falls · Okavango", nights: "14 Nights" },
];

const STEPS = [
  { n: "01", title: "Tell Us Your Dream", body: "Share your dates, interests, and the kind of experience you're after. A brief conversation is all we need to start." },
  { n: "02", title: "We Design Your Trip", body: "A dedicated travel expert builds a personalised itinerary — routes, lodges, guides — tailored entirely to you." },
  { n: "03", title: "Confirm & Start Packing", body: "Review your proposal, make any changes, confirm your booking. Then all that's left is the anticipation." },
];

function useInView(threshold = 0.1) {
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
      transform: v ? "translateY(0)" : "translateY(26px)",
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
      ...sx,
    }}>
      {children}
    </div>
  );
}

const EyebrowLabel = ({ children, light }) => (
  <p style={{
    fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
    letterSpacing: "0.28em", textTransform: "uppercase",
    color: light ? "rgba(255,255,255,0.45)" : t.sandDark,
    marginBottom: 14,
  }}>{children}</p>
);

const BigHeading = ({ children, light, size = "clamp(36px,5vw,64px)", style: sx = {} }) => (
  <h2 style={{
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: size, fontWeight: 600, letterSpacing: "0.06em",
    textTransform: "uppercase", lineHeight: 1.0,
    color: light ? t.white : t.charcoal,
    margin: 0, ...sx,
  }}>{children}</h2>
);

const HR = ({ my = 0, opacity = 0.3 }) => (
  <div style={{ height: 1, background: t.sand, opacity, margin: `${my}px 0` }} />
);

export default function Home() {
  const navigate = useNavigate();
  const [slide, setSlide] = useState(0);
  const [prevSlide, setPrevSlide] = useState(null);
  const [transitioning, setTransitioning] = useState(false);

  useEffect(() => {
    const id = setInterval(() => {
      setPrevSlide(slide);
      setTransitioning(true);
      const next = (slide + 1) % HERO_IMAGES.length;
      setTimeout(() => {
        setSlide(next);
        setTransitioning(false);
        setPrevSlide(null);
      }, 800);
    }, 6000);
    return () => clearInterval(id);
  }, [slide]);

  return (
    <div style={{ background: t.cream, color: t.charcoal }}>
      <style>{`
        .cta-primary {
          display: inline-block; font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 14px 38px;
          background: ${t.charcoal}; color: ${t.white};
          border: none; cursor: pointer;
          transition: background 0.25s; text-decoration: none;
        }
        .cta-primary:hover { background: ${t.earth}; }

        .cta-ghost {
          display: inline-block; font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 13px 36px;
          background: transparent; color: rgba(255,255,255,0.9);
          border: 1px solid rgba(255,255,255,0.4); cursor: pointer;
          transition: border-color 0.25s, color 0.25s;
          text-decoration: none;
        }
        .cta-ghost:hover { border-color: white; color: white; }

        .cta-outline {
          display: inline-block; font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 13px 34px;
          background: transparent; color: ${t.charcoal};
          border: 1px solid ${t.sandDark}; cursor: pointer;
          transition: background 0.25s, color 0.25s, border-color 0.25s;
          text-decoration: none;
        }
        .cta-outline:hover { background: ${t.charcoal}; color: ${t.white}; border-color: ${t.charcoal}; }

        .hero-bg {
          position: absolute; inset: 0;
          background-size: cover; background-position: center;
          transition: opacity 0.9s ease;
        }

        @keyframes heroIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-text { animation: heroIn 1.1s ease forwards; }
        .hero-text.d1 { animation-delay: 0.15s; opacity: 0; }
        .hero-text.d2 { animation-delay: 0.35s; opacity: 0; }
        .hero-text.d3 { animation-delay: 0.55s; opacity: 0; }
        .hero-text.d4 { animation-delay: 0.72s; opacity: 0; }

        .dest-tile { position: relative; overflow: hidden; cursor: pointer; aspect-ratio: 4/5; display: block; }
        .dest-tile img {
          position: absolute; inset: 0; width: 100%; height: 100%;
          object-fit: cover; object-position: center;
          transition: transform 0.75s ease;
          filter: brightness(0.82) saturate(1.08);
        }
        .dest-tile:hover img { transform: scale(1.07); }
        .dest-tile::after {
          content: ''; position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(15,8,2,0.75) 0%, rgba(0,0,0,0.1) 55%, transparent 100%);
          transition: background 0.4s;
        }
        .dest-tile:hover::after {
          background: linear-gradient(to top, rgba(15,8,2,0.85) 0%, rgba(0,0,0,0.22) 60%, transparent 100%);
        }
        .dest-label {
          position: absolute; bottom: 0; left: 0; right: 0;
          padding: 22px 20px; z-index: 2;
        }

        .tour-card {
          background: ${t.offWhite};
          border: 1px solid ${t.creamDeep};
          padding: 28px 28px 24px;
          transition: border-color 0.3s, transform 0.35s;
          cursor: pointer;
        }
        .tour-card:hover { border-color: ${t.sandDark}; transform: translateY(-3px); }
        .tour-link {
          font-family: 'Jost', sans-serif; font-size: 11px; font-weight: 500;
          letter-spacing: 0.18em; text-transform: uppercase;
          color: ${t.gold}; text-decoration: none;
          border-bottom: 1px solid transparent; padding-bottom: 1px;
          cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
          transition: border-color 0.2s;
        }
        .tour-link:hover { border-color: ${t.gold}; }

        @media (max-width: 768px) {
          .dest-grid { grid-template-columns: 1fr !important; }
          .tour-grid { grid-template-columns: 1fr !important; }
          .step-grid { grid-template-columns: 1fr !important; }
          .welcome-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
        @media (min-width: 480px) and (max-width: 768px) {
          .dest-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section style={{ position: "relative", height: "100vh", minHeight: 640, overflow: "hidden" }}>
        {HERO_IMAGES.map((img, i) => (
          <div key={i} className="hero-bg" style={{
            backgroundImage: `url("${img.url}")`,
            opacity: i === slide ? 1 : (i === prevSlide && transitioning ? 0 : 0),
            zIndex: i === slide ? 2 : (i === prevSlide ? 1 : 0),
          }} />
        ))}

        <div style={{
          position: "absolute", inset: 0, zIndex: 3,
          background: `
            linear-gradient(to right, rgba(10,5,2,0.72) 0%, rgba(10,5,2,0.3) 60%, rgba(10,5,2,0.15) 100%),
            linear-gradient(to top, rgba(10,5,2,0.55) 0%, transparent 45%)
          `,
        }} />

        <div style={{
          position: "absolute", inset: 0, zIndex: 4, opacity: 0.025, pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />

        {/* Corner bracket decorations */}
        <div className="hide-mobile" style={{ position: "absolute", top: 108, left: 56, zIndex: 5, opacity: 0.22 }}>
          <div style={{ width: 1, height: 56, background: t.white, marginBottom: 6 }} />
          <div style={{ width: 36, height: 1, background: t.white }} />
        </div>
        <div className="hide-mobile" style={{ position: "absolute", top: 108, right: 56, zIndex: 5, opacity: 0.22 }}>
          <div style={{ width: 1, height: 56, background: t.white, marginLeft: "auto", marginBottom: 6 }} />
          <div style={{ width: 36, height: 1, background: t.white, marginLeft: "auto" }} />
        </div>

        <div className="sp" style={{
          position: "absolute", inset: 0, zIndex: 6,
          display: "flex", alignItems: "center",
          padding: "0 56px",
        }}>
          <div style={{ maxWidth: 700 }} key={slide}>
            <EyebrowLabel light>Cape Town · Garden Route · Southern Africa</EyebrowLabel>

            <h1 className="hero-text d1" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(50px, 7.5vw, 96px)",
              fontWeight: 600, letterSpacing: "0.06em",
              textTransform: "uppercase", lineHeight: 0.96,
              color: t.white, marginBottom: 4,
            }}>
              {HERO_IMAGES[slide].headline[0]}
            </h1>
            <div className="hero-text d2" style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(50px, 7.5vw, 96px)",
              fontWeight: 300, fontStyle: "italic",
              letterSpacing: "0.04em", lineHeight: 1.05,
              color: "rgba(255,255,255,0.88)",
              marginBottom: 30,
            }}>
              {HERO_IMAGES[slide].headline[1]}
            </div>

            <p className="hero-text d3" style={{
              fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300,
              lineHeight: 1.78, color: "rgba(255,255,255,0.62)",
              maxWidth: 460, marginBottom: 44, letterSpacing: "0.02em",
            }}>
              {HERO_IMAGES[slide].sub}
            </p>

            <div className="hero-text d4" style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
              <Link to="/enquire" className="cta-primary">Start Planning</Link>
            </div>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 44, right: 56, zIndex: 6,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          opacity: 0.28,
        }}>
          <span style={{
            fontFamily: "'Jost'", fontSize: 9, letterSpacing: "0.3em",
            textTransform: "uppercase", color: t.white, writingMode: "vertical-rl",
          }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, ${t.white}, transparent)` }} />
        </div>
      </section>

      {/* ── TRUST BAR ── */}
      <div className="sp" style={{
        background: t.charcoal, padding: "28px 56px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        gap: 24, flexWrap: "wrap",
      }}>
        {[
          { stat: "10+ Years", label: "Experience" },
          { stat: "Local Knowledge", label: "South African owned" },
          { stat: "IATA TIDS Accredited", label: "Professional Credibility" },
          { stat: "24-Hour Response", label: "Personalised Proposals" },
        ].map((item, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, minWidth: "fit-content" }}>
            <div>
              <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 16, fontWeight: 600, letterSpacing: "0.08em", color: t.white }}>{item.stat}</div>
              <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 9.5, letterSpacing: "0.18em", textTransform: "uppercase", color: "rgba(255,255,255,0.35)", marginTop: 1 }}>{item.label}</div>
            </div>
          </div>
        ))}
      </div>

      {/* ── WELCOME ── */}
      <section className="sp" style={{ padding: "100px 56px", background: t.cream }}>
        <div className="welcome-grid" style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
          <Fade>
            <EyebrowLabel>Welcome to On a Whim</EyebrowLabel>
            <BigHeading size="clamp(34px,4.5vw,58px)">
              Africa Is About<br />
              <span style={{ fontStyle: "italic", fontWeight: 300 }}>Who You Know</span>
            </BigHeading>
          </Fade>
          <Fade delay={0.15}>
            <div style={{ borderLeft: `1px solid ${t.sand}`, paddingLeft: 40 }}>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 16, fontWeight: 300, lineHeight: 1.85, color: t.muted, marginBottom: 0, letterSpacing: "0.01em" }}>
                At On a Whim, we're guided by our love and passion for Southern Africa. From a single day on the Cape Peninsula to a 14-day cross-border safari, every experience is personalised, expert-guided, and built entirely around you.
              </p>
            </div>
          </Fade>
        </div>
      </section>

      {/* ── DESTINATIONS ── */}
      <section className="sp" style={{ padding: "100px 56px", background: t.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 52, flexWrap: "wrap", gap: 16 }}>
              <div>
                <EyebrowLabel>Explore by Region</EyebrowLabel>
                <BigHeading size="clamp(30px,4vw,50px)">
                  Popular<br />
                  <span style={{ fontStyle: "italic", fontWeight: 300 }}>Destinations</span>
                </BigHeading>
              </div>
            </div>
          </Fade>

          <div className="dest-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
            {DESTINATIONS.map((dest, i) => (
              <Fade key={i} delay={i * 0.07}>
                <Link to={dest.path} className="dest-tile">
                  <img src={dest.url} alt={dest.name} loading="lazy" />
                  <div className="dest-label">
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif", fontSize: 19,
                      fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase",
                      color: t.white, lineHeight: 1.15, marginBottom: 4,
                    }}>{dest.name}</div>
                    <div style={{
                      fontFamily: "'Jost', sans-serif", fontSize: 10,
                      letterSpacing: "0.2em", textTransform: "uppercase",
                      color: "rgba(255,255,255,0.48)",
                    }}>{dest.nights}</div>
                  </div>
                </Link>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOUR IDEAS ── */}
      <section className="sp" style={{ padding: "100px 56px", background: t.offWhite }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
              <div>
                <EyebrowLabel>Handpicked Itineraries</EyebrowLabel>
                <BigHeading size="clamp(30px,4vw,50px)">Tour Ideas</BigHeading>
              </div>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300, color: t.muted, maxWidth: 320, lineHeight: 1.75 }}>
                We tailor-make every itinerary. Let these inspire your journey — then we'll build the perfect version for you.
              </p>
            </div>
          </Fade>

          <div className="tour-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 2 }}>
            {TOURS.map((tour, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div className="tour-card" onClick={() => navigate("/enquire")}>
                  <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.2em", textTransform: "uppercase", color: t.sandDark, marginBottom: 12 }}>{tour.nights}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 22, fontWeight: 600, letterSpacing: "0.03em", color: t.charcoal, lineHeight: 1.2, marginBottom: 10 }}>{tour.name}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 300, letterSpacing: "0.05em", color: t.muted, marginBottom: 22, lineHeight: 1.6 }}>{tour.destinations}</p>
                  <HR my={0} opacity={0.45} />
                  <div style={{ display: "flex", justifyContent: "flex-end", alignItems: "center", marginTop: 18 }}>
                    <span className="tour-link">Explore <span>→</span></span>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ── */}
      <section className="sp" style={{ padding: "100px 56px", background: t.creamDark, position: "relative", overflow: "hidden" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <EyebrowLabel>The Process</EyebrowLabel>
            <BigHeading style={{ marginBottom: 72 }} size="clamp(30px,4vw,50px)">How It Works</BigHeading>
          </Fade>
          <div className="step-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 0 }}>
            {STEPS.map((step, i) => (
              <Fade key={i} delay={i * 0.12}>
                <div style={{ borderLeft: `1px solid ${t.sand}`, paddingLeft: 36, paddingRight: 32, paddingBottom: 16 }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 72, fontWeight: 300, lineHeight: 1, color: t.creamDeep, marginBottom: -6 }}>{step.n}</div>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 23, fontWeight: 600, letterSpacing: "0.05em", color: t.charcoal, marginBottom: 14, marginTop: 10, textTransform: "uppercase" }}>{step.title}</h3>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300, color: t.muted, lineHeight: 1.85, letterSpacing: "0.01em" }}>{step.body}</p>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.3}>
            <div style={{ marginTop: 72, display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              <Link to="/enquire" className="cta-primary">Start Planning</Link>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
