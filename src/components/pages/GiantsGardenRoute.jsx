"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

/* ─── COLOUR TOKENS (identical to Safari.jsx) ──────────────── */
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
  /* Page-only accent — use ONLY for booking chip, departure pills, small text accents */
  green:     "#79C261",
};

/* ─── HOOKS (identical to Safari.jsx) ──────────────────────── */
function useInView(threshold = 0.08) {
  const ref = useRef(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setV(true); },
      { threshold }
    );
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

const Label = ({ children, light = false, green: isGreen = false }) => (
  <p style={{
    fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
    letterSpacing: "0.28em", textTransform: "uppercase",
    color: isGreen ? t.green : light ? "rgba(255,255,255,0.45)" : t.sandDark,
    marginBottom: 14,
  }}>{children}</p>
);

/* ─── ACCORDION ITEM ────────────────────────────────────────── */
function AccordionItem({ title, body }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ borderBottom: `1px solid ${t.creamDeep}` }}>
      <button
        onClick={() => setOpen(!open)}
        style={{
          width: "100%", textAlign: "left", background: "none", border: "none",
          padding: "20px 0", cursor: "pointer",
          display: "flex", justifyContent: "space-between", alignItems: "flex-start",
          gap: 16,
        }}
        aria-expanded={open}
      >
        <span style={{
          fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 500,
          color: t.charcoal, letterSpacing: "0.02em", lineHeight: 1.4, textAlign: "left",
        }}>{title}</span>
        <span style={{
          fontFamily: "'Cormorant Garamond', serif", fontSize: 22,
          color: t.sandDark, flexShrink: 0, lineHeight: 1,
          transform: open ? "rotate(45deg)" : "rotate(0deg)",
          transition: "transform 0.25s ease", display: "inline-block",
        }}>+</span>
      </button>
      {open && (
        <div style={{ paddingBottom: 20, animation: "expandIn 0.3s ease forwards" }}>
          <p style={{
            fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300,
            color: t.muted, lineHeight: 1.78,
          }}>{body}</p>
        </div>
      )}
    </div>
  );
}

/* ─── STICKY MOBILE CTA BAR ─────────────────────────────────── */
function StickyMobileCTA() {
  const [scrolledPast60, setScrolledPast60] = useState(false);
  const [footerVisible, setFooterVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const pct = window.scrollY / Math.max(
        document.documentElement.scrollHeight - window.innerHeight, 1
      );
      setScrolledPast60(pct > 0.6);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;
    const obs = new IntersectionObserver(
      ([e]) => setFooterVisible(e.isIntersecting),
      { threshold: 0.01 }
    );
    obs.observe(footer);
    return () => obs.disconnect();
  }, []);

  const visible = scrolledPast60 && !footerVisible;

  return (
    <div
      className="hide-desktop"
      role="complementary"
      aria-label="Quick enquiry"
      style={{
        position: "fixed", bottom: 0, left: 0, right: 0, zIndex: 500,
        background: t.charcoal,
        borderTop: "1px solid rgba(255,255,255,0.08)",
        padding: "12px 20px",
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
        transform: visible ? "translateY(0)" : "translateY(110%)",
        transition: "transform 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
        boxShadow: "0 -4px 20px rgba(0,0,0,0.3)",
      }}
    >
      <span style={{
        fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 400,
        color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em", lineHeight: 1.4,
        flexShrink: 1,
      }}>
        Aug &amp; Sep 2026 · 16 seats per departure
      </span>
      <Link
        href="https://onawhimtravel.waybird.com/trip/d2fa427c-2b54-4fe7-bf1b-3c18a9d774c7"
        id="sticky-mobile-cta"
        style={{
          fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
          letterSpacing: "0.22em", textTransform: "uppercase",
          padding: "10px 20px",
          background: t.white, color: t.charcoal,
          border: "none", cursor: "pointer",
          textDecoration: "none", whiteSpace: "nowrap", flexShrink: 0,
        }}
      >
        Start Planning
      </Link>
    </div>
  );
}

/* ─── PAGE ──────────────────────────────────────────────────── */
export default function GiantsGardenRoute() {
  return (
    <>
      <style>{`
        /* ── Reused from Safari.jsx — do not change ── */
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

        @keyframes expandIn {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes heroIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hi { animation: heroIn 1s ease forwards; }
        .hi.d1 { animation-delay: 0.15s; opacity: 0; }
        .hi.d2 { animation-delay: 0.35s; opacity: 0; }
        .hi.d3 { animation-delay: 0.55s; opacity: 0; }
        .hi.d4 { animation-delay: 0.70s; opacity: 0; }

        /* ── Responsive overrides (mirrors Safari.jsx) ── */
        @media (max-width: 900px) {
          .two-col  { grid-template-columns: 1fr !important; gap: 36px !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .pkg-header { grid-template-columns: 1fr !important; }
          .pkg-img-box  { min-height: 240px !important; }
          .pkg-info-box {
            border-left: none !important;
            border-top: 1px solid ${t.creamDeep} !important;
            padding: 24px 20px !important;
          }
          .pkg-price-box {
            border-left: none !important;
            border-top: 1px solid ${t.creamDeep} !important;
            padding: 24px 20px !important;
          }
          .solo-img { min-height: 280px !important; }
        }

        /* Green departure pill — accent specific to this page */
        .dep-pill {
          display: inline-block;
          font-family: 'Jost', sans-serif; font-size: 11px; font-weight: 500;
          padding: 5px 14px; border: 1px solid ${t.green};
          color: ${t.green}; letter-spacing: 0.08em;
          text-decoration: none; transition: background 0.2s, color 0.2s;
          cursor: pointer;
        }
        .dep-pill:hover { background: ${t.green}; color: ${t.charcoal}; }

        /* Giant cards */
        .giant-card {
          background: ${t.offWhite};
          border: 1px solid ${t.creamDeep};
          display: flex; flex-direction: column;
        }

        /* Itinerary day label accent */
        .day-label {
          font-family: 'Jost', sans-serif; font-size: 10px; font-weight: 600;
          letter-spacing: 0.18em; color: ${t.green};
          margin-right: 10px; flex-shrink: 0;
        }
      `}</style>

      <div style={{ background: t.cream, color: t.charcoal }}>

        {/* ══════════════════════════════════════════════════════════
            SECTION 1 · HERO
        ══════════════════════════════════════════════════════════ */}
        <section style={{ position: "relative", height: "72vh", minHeight: 540, overflow: "hidden" }}>

          {/* Hero image — breaching humpback whale */}
          <Image
            src="/images/giants/giants-garden-route-whale-knysna.jpg"
            alt="Humpback whale breaching off the Knysna Heads, Garden Route, South Africa"
            fill
            priority
            style={{
              objectFit: "cover",
              objectPosition: "center 30%",
              filter: "brightness(0.68) saturate(1.1)",
            }}
          />

          {/* Gradient overlay — matches Safari.jsx */}
          <div style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(to right, rgba(10,5,2,0.82) 0%, rgba(10,5,2,0.30) 60%, transparent 100%)",
          }} />

          {/* Grain texture — matches global overlay in Layout.jsx */}
          <div style={{
            position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none",
            backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
          }} />

          {/* ● BOOKING NOW chip — green accent, top-right */}
          <div className="hi d1" style={{
            position: "absolute", top: 100, right: 28,
            background: "rgba(121,194,97,0.10)",
            border: `1px solid ${t.green}`,
            color: t.green,
            fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 600,
            letterSpacing: "0.20em", textTransform: "uppercase",
            padding: "7px 16px",
          }}>
            ● BOOKING NOW
          </div>

          {/* Hero content */}
          <div className="sp" style={{
            position: "absolute", inset: 0,
            display: "flex", alignItems: "center",
            padding: "0 56px",
          }}>
            <div style={{ maxWidth: 600 }}>

              {/* Eyebrow — green accent */}
              <p className="hi d1" style={{
                fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
                letterSpacing: "0.28em", textTransform: "uppercase",
                color: t.green, marginBottom: 20,
              }}>
                GARDEN ROUTE · 8 DAYS / 7 NIGHTS · FROM CAPE TOWN
              </p>

              {/* H1 */}
              <h1 className="hi d2" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(42px, 6.5vw, 82px)",
                fontWeight: 600, letterSpacing: "0.06em",
                textTransform: "uppercase", lineHeight: 0.95,
                color: t.white, margin: "0 0 10px 0",
              }}>
                Giants of the Garden Route
              </h1>

              {/* Hero italic line */}
              <div className="hi d3" style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px, 2.8vw, 32px)",
                fontWeight: 300, fontStyle: "italic",
                letterSpacing: "0.03em", lineHeight: 1.25,
                color: "rgba(255,255,255,0.80)",
                marginBottom: 22,
              }}>
                Some things you have to experience up close.
              </div>

              {/* Support line */}
              <p className="hi d4" style={{
                fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300,
                lineHeight: 1.78, color: "rgba(255,255,255,0.60)",
                marginBottom: 36,
              }}>
                Whales breaching off the Knysna Heads. Elephants close enough to feed. An 800-year-old tree that makes everything else feel small.
              </p>

              {/* CTA #1 — hero button */}
              <div className="hi d4" style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 12 }}>
                <Link
                  href="https://onawhimtravel.waybird.com/trip/d2fa427c-2b54-4fe7-bf1b-3c18a9d774c7"
                  className="cta-primary"
                  id="cta-hero"
                >
                  Start Planning
                </Link>
                <span style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 400,
                  color: "rgba(255,255,255,0.32)", letterSpacing: "0.06em",
                }}>
                  No-obligation enquiry · Personal reply within 24 hours
                </span>
              </div>

            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 2 · DEPARTURES URGENCY STRIP
        ══════════════════════════════════════════════════════════ */}
        <div className="sp" style={{
          background: t.charcoal,
          padding: "18px 56px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 16,
        }}>
          <div style={{ display: "flex", alignItems: "center", flexWrap: "wrap", gap: 10 }}>
            <span style={{
              fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 500,
              letterSpacing: "0.22em", textTransform: "uppercase",
              color: "rgba(255,255,255,0.30)",
            }}>
              2026 Departures —
            </span>
            {["3 Aug", "24 Aug", "7 Sep", "21 Sep"].map((d) => (
              <Link
                key={d}
                href="https://onawhimtravel.waybird.com/trip/d2fa427c-2b54-4fe7-bf1b-3c18a9d774c7"
                className="dep-pill"
              >
                {d}
              </Link>
            ))}
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            {["Max 16 guests per departure", "Peak whale season"].map((s, i) => (
              <div key={s} style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {i > 0 && (
                  <div className="hide-sm" style={{ width: 1, height: 16, background: "rgba(255,255,255,0.1)" }} />
                )}
                <span style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 400,
                  color: "rgba(255,255,255,0.40)", letterSpacing: "0.1em",
                }}>{s}</span>
              </div>
            ))}
          </div>
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 3 · THREE GIANTS
        ══════════════════════════════════════════════════════════ */}
        <section id="giants" className="sp" style={{ padding: "80px 56px", background: t.cream }}>
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>

            {/* Section intro — two-column header (mirrors Safari packages header) */}
            <Fade>
              <div className="two-col" style={{
                display: "grid", gridTemplateColumns: "1fr 1fr",
                gap: 64, alignItems: "end", marginBottom: 56,
              }}>
                <div>
                  <Label>Garden Route · South Africa</Label>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(30px, 4vw, 52px)",
                    fontWeight: 600, letterSpacing: "0.05em",
                    textTransform: "uppercase",
                    color: t.charcoal, lineHeight: 1.05, margin: 0,
                  }}>
                    Three giants.<br />
                    <span style={{ fontStyle: "italic", fontWeight: 300 }}>One coastline.</span>
                  </h2>
                </div>
                <div style={{ borderLeft: `1px solid ${t.sand}`, paddingLeft: 36 }}>
                  <p style={{
                    fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300,
                    color: t.muted, lineHeight: 1.82,
                  }}>
                    Photographs don't prepare you for scale. This trip is built around three encounters that have to be experienced in person — stitched together by South Africa's most beautiful coastal road.
                  </p>
                </div>
              </div>
            </Fade>

            <HR opacity={0.3} />
            <div style={{ height: 32 }} />

            {/* 3-card grid — reuses pkg-info-box / pkg-img-box classes */}
            <div className="three-col" style={{
              display: "grid", gridTemplateColumns: "1fr 1fr 1fr",
              gap: 2,
            }}>

              {/* Card 1 — Whale */}
              <Fade delay={0} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="giant-card" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div className="pkg-img-box" style={{
                    position: "relative", height: 280, overflow: "hidden",
                  }}>
                    <img
                      src="/images/giants/giants-garden-route-whale-watching-knysna.jpg"
                      alt="Whale watching boat trip off the Knysna Heads, Garden Route"
                      style={{
                        width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center",
                        filter: "brightness(0.82) saturate(1.05)",
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(10,5,2,0.65) 0%, transparent 55%)",
                    }} />
                  </div>
                  <div className="pkg-info-box" style={{ padding: "28px 28px 32px", flexGrow: 1 }}>
                    <p style={{
                      fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 600,
                      letterSpacing: "0.22em", textTransform: "uppercase",
                      color: t.green, marginBottom: 10,
                    }}>Giant 1 of 3</p>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22, fontWeight: 600, letterSpacing: "0.04em",
                      textTransform: "uppercase", color: t.charcoal,
                      lineHeight: 1.15, marginBottom: 14,
                    }}>The Giant of the Deep Blue</h3>
                    <p style={{
                      fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300,
                      color: t.muted, lineHeight: 1.78,
                    }}>
                      The boat engine cuts, and for a second there's nothing — then a humpback breaks the surface close enough that you hear it breathe. June to September is peak season off the Knysna Heads, and every departure is timed for it.
                    </p>
                  </div>
                </div>
              </Fade>

              {/* Card 2 — Elephant */}
              <Fade delay={0.1} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="giant-card" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div className="pkg-img-box" style={{
                    position: "relative", height: 280, overflow: "hidden",
                  }}>
                    <img
                      src="/images/giants/giants-garden-route-knysna-elephant.jpg"
                      alt="Close encounter with a Knysna forest elephant"
                      style={{
                        width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center",
                        filter: "brightness(0.82) saturate(1.05)",
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(10,5,2,0.65) 0%, transparent 55%)",
                    }} />
                  </div>
                  <div className="pkg-info-box" style={{ padding: "28px 28px 32px", flexGrow: 1 }}>
                    <p style={{
                      fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 600,
                      letterSpacing: "0.22em", textTransform: "uppercase",
                      color: t.green, marginBottom: 10,
                    }}>Giant 2 of 3</p>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22, fontWeight: 600, letterSpacing: "0.04em",
                      textTransform: "uppercase", color: t.charcoal,
                      lineHeight: 1.15, marginBottom: 14,
                    }}>The Giants of the Forest</h3>
                    <p style={{
                      fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300,
                      color: t.muted, lineHeight: 1.78,
                    }}>
                      A morning walking beside rescued elephants at a reputable Knysna sanctuary — feeding them, not photographing them through glass. Gentle, unhurried, unforgettable.
                    </p>
                  </div>
                </div>
              </Fade>

              {/* Card 3 — Big Tree */}
              <Fade delay={0.2} style={{ display: "flex", flexDirection: "column", height: "100%" }}>
                <div className="giant-card" style={{ flexGrow: 1, display: "flex", flexDirection: "column" }}>
                  <div className="pkg-img-box" style={{
                    position: "relative", height: 280, overflow: "hidden",
                  }}>
                    <img
                      src="/images/giants/giants-garden-route-big-tree-knysna.jpg"
                      alt="The 800-year-old Big Tree boardwalk, Tsitsikamma forest"
                      style={{
                        width: "100%", height: "100%",
                        objectFit: "cover", objectPosition: "center",
                        filter: "brightness(0.85) saturate(1.05)",
                      }}
                    />
                    <div style={{
                      position: "absolute", inset: 0,
                      background: "linear-gradient(to top, rgba(10,5,2,0.65) 0%, transparent 55%)",
                    }} />
                  </div>
                  <div className="pkg-info-box" style={{ padding: "28px 28px 32px", flexGrow: 1 }}>
                    <p style={{
                      fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 600,
                      letterSpacing: "0.22em", textTransform: "uppercase",
                      color: t.green, marginBottom: 10,
                    }}>Giant 3 of 3</p>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22, fontWeight: 600, letterSpacing: "0.04em",
                      textTransform: "uppercase", color: t.charcoal,
                      lineHeight: 1.15, marginBottom: 14,
                    }}>The Giant of the Ancient Woods</h3>
                    <p style={{
                      fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300,
                      color: t.muted, lineHeight: 1.78,
                    }}>
                      A flat ten-minute boardwalk through the Tsitsikamma forest ends at the Big Tree: 800 years old, 36 metres tall, and completely indifferent to your itinerary. Stand under it and recalibrate.
                    </p>
                  </div>
                </div>
              </Fade>

            </div>

            {/* CTA #3 — after Three Giants (dark button on cream background) */}
            <Fade delay={0.2}>
              <div style={{ marginTop: 40, textAlign: "center" }}>
                <Link
                  href="https://onawhimtravel.waybird.com/trip/d2fa427c-2b54-4fe7-bf1b-3c18a9d774c7"
                  id="cta-giants"
                  style={{
                    display: "inline-block",
                    fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 500,
                    letterSpacing: "0.22em", textTransform: "uppercase",
                    padding: "13px 44px",
                    background: "transparent", color: t.charcoal,
                    border: `1px solid ${t.sandDark}`,
                    textDecoration: "none",
                    transition: "all 0.25s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = t.charcoal;
                    e.currentTarget.style.color = t.white;
                    e.currentTarget.style.borderColor = t.charcoal;
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.color = t.charcoal;
                    e.currentTarget.style.borderColor = t.sandDark;
                  }}
                >
                  Enquire
                </Link>
              </div>
            </Fade>

          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 4 · ITINERARY ACCORDION (8 days)
        ══════════════════════════════════════════════════════════ */}
        <section
          className="sp"
          style={{
            padding: "80px 56px",
            background: t.offWhite,
            borderTop: `1px solid ${t.creamDeep}`,
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Fade>
              <Label>8-Day Itinerary · Cape Town Return</Label>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(30px, 4vw, 52px)",
                fontWeight: 600, letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: t.charcoal, lineHeight: 1.0, marginBottom: 12,
              }}>
                Eight days, end to end.
              </h2>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300,
                color: t.muted, lineHeight: 1.78, marginBottom: 48,
              }}>
                Adventure with the volume up during the day — and right down at night.
              </p>
            </Fade>

            <div style={{ borderTop: `1px solid ${t.creamDeep}` }}>
              {[
                {
                  day: "Day 1",
                  title: "Cape Town to Albertinia & Sunset Safari",
                  body: "Depart Cape Town along the N2 with a coffee stop in Riviersonderend. Check in near Mossel Bay, then an open-top 4x4 sunset Big Five game drive and a traditional South African dinner at the lodge.",
                },
                {
                  day: "Day 2",
                  title: "Sunrise Game Drive & Hidden Valley",
                  body: "A 07:00 sunrise drive and lodge breakfast, then east to Timberlake Organic Village for lunch and a forest boardwalk along the Touw River. Settle into a boutique eco-lodge in indigenous forest — canoes launch from the jetty.",
                },
                {
                  day: "Day 3",
                  title: "Marine Giants & Knysna",
                  body: "The big one: a permitted whale-watching boat trip from the Knysna Heads to meet southern rights and humpbacks up close. Fresh seafood on the Knysna Waterfront (optional oyster experience), then a relaxed walk at the Heads viewpoint.",
                },
                {
                  day: "Day 4",
                  title: "Elephant Encounters & Into Tsitsikamma",
                  body: "An intimate 8am elephant encounter at a reputable Knysna sanctuary. Tapas among the vines at Bramon Wine Estate, then a cliffside lodge overlooking a waterfall dropping into the sea.",
                },
                {
                  day: "Day 5",
                  title: "Ancient Forests & Canopy Tours",
                  body: "Storms River Village for the Tsitsikamma Canopy Tour — ten zipline platforms in giant yellowwoods (or the gentler Woodcutters Journey). Retro burgers at Marilyn's 60s Diner, then the short boardwalk to the 800-year-old Big Tree.",
                },
                {
                  day: "Day 6",
                  title: "The Ultimate Leap",
                  body: "Bloukrans Bridge: the world's highest commercial bridge bungee at 216 metres — jump if you dare, or take the guided skywalk. Cliffside lunch in Tsitsikamma National Park, then ziplines over the Kruis River waterfalls.",
                },
                {
                  day: "Day 7",
                  title: "Returning Through Wilderness",
                  body: "West to Wilderness for a cosy village lunch, then check in on the edge of the lagoon. The afternoon is yours: kayak the quiet waterways or birdwatch under ancient trees.",
                },
                {
                  day: "Day 8",
                  title: "Scenic Return to Cape Town",
                  body: "A multi-course breakfast on the lagoon deck, a wine and olive-oil tasting at Baleia Wines near Riversdale, and back in Cape Town by late afternoon.",
                },
              ].map((item, i) => (
                <AccordionItem
                  key={i}
                  title={
                    <span>
                      <span className="day-label">{item.day}</span>
                      {item.title}
                    </span>
                  }
                  body={item.body}
                />
              ))}
            </div>

            <Fade delay={0.1}>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 300,
                color: t.muted, fontStyle: "italic", lineHeight: 1.65,
                marginTop: 24, marginBottom: 40,
              }}>
                Accommodation is subject to availability; alternative properties of an equal or better grading may be selected. Optional activities (e.g. bungee) are excluded.
              </p>

              {/* CTA #4 — after itinerary */}
              <Link
                href="https://onawhimtravel.waybird.com/trip/d2fa427c-2b54-4fe7-bf1b-3c18a9d774c7"
                className="cta-primary"
                id="cta-itinerary"
              >
                Start Planning
              </Link>
            </Fade>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 5 · SOLO TRAVELLERS (dark split: image | ink copy)
        ══════════════════════════════════════════════════════════ */}
        <section
          className="sp"
          style={{
            padding: "80px 56px",
            background: t.charcoal,
            borderTop: `1px solid rgba(255,255,255,0.06)`,
          }}
        >
          <div style={{ maxWidth: 1200, margin: "0 auto" }}>
            <Fade>
              <div
                className="two-col"
                style={{
                  display: "grid",
                  gridTemplateColumns: "1fr 1fr",
                  gap: 0,
                  border: "1px solid rgba(255,255,255,0.06)",
                  overflow: "hidden",
                }}
              >
                {/* Image side */}
                <div
                  className="solo-img"
                  style={{ position: "relative", minHeight: 420, overflow: "hidden" }}
                >
                  <img
                    src="/images/giants/giants-garden-route-knysna-elephant-1.jpg"
                    alt="Knysna elephants in their natural habitat, Garden Route"
                    style={{
                      width: "100%", height: "100%",
                      objectFit: "cover", objectPosition: "center",
                      filter: "brightness(0.70) saturate(1.0)",
                    }}
                  />
                  <div style={{
                    position: "absolute", inset: 0,
                    background: "linear-gradient(to right, transparent 40%, rgba(26,22,20,0.96) 100%)",
                  }} />
                </div>

                {/* Copy side — ink background, ghost button works here */}
                <div
                  className="pkg-info-box"
                  style={{
                    padding: "52px 48px",
                    background: t.charcoal,
                    borderLeft: "1px solid rgba(255,255,255,0.06)",
                    display: "flex", flexDirection: "column", justifyContent: "center",
                  }}
                >
                  <Label light>Suited for Groups, Families &amp; Solo Travellers</Label>
                  <h2 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "clamp(24px, 3.2vw, 40px)",
                    fontWeight: 600, letterSpacing: "0.04em",
                    textTransform: "uppercase",
                    color: t.white, lineHeight: 1.1, marginBottom: 20,
                  }}>
                    Travelling solo doesn't mean travelling alone.
                  </h2>
                  <p style={{
                    fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300,
                    color: "rgba(255,255,255,0.55)", lineHeight: 1.82, marginBottom: 32,
                  }}>
                    This tour is perfectly suited to groups, families, and solo travellers alike. With a small group size of 6–16, sociable dinners at boutique lodges, and a guide who handles every detail, it is safe, welcoming, and genuinely well-suited to solo women travellers — that's not a tagline, it's how the trip is designed.
                  </p>

                  {/* CTA #5 — solo travellers block */}
                  <div>
                    <Link
                      href="https://onawhimtravel.waybird.com/trip/d2fa427c-2b54-4fe7-bf1b-3c18a9d774c7"
                      className="cta-ghost-dark"
                      id="cta-solo"
                    >
                      Enquire
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 6 · AT-A-GLANCE / OFFER BOX (pkg-price-box styling)
        ══════════════════════════════════════════════════════════ */}
        <section
          className="sp"
          style={{
            padding: "80px 56px",
            background: t.cream,
            borderTop: `1px solid ${t.creamDeep}`,
          }}
        >
          <div style={{ maxWidth: 1100, margin: "0 auto" }}>
            <Fade>
              <div
                className="pkg-price-box"
                style={{
                  background: t.offWhite,
                  border: `1px solid ${t.creamDeep}`,
                  padding: "48px 48px",
                }}
              >
                <div
                  className="two-col"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 48,
                    alignItems: "stretch",
                  }}
                >
                  {/* Inclusions */}
                  <div>
                    <Label>At a Glance</Label>
                    <h2 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(24px, 3.2vw, 38px)",
                      fontWeight: 600, letterSpacing: "0.05em",
                      textTransform: "uppercase",
                      color: t.charcoal, lineHeight: 1.05, marginBottom: 28,
                    }}>
                      What's included
                    </h2>
                    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                      {[
                        "8 days / 7 nights · Cape Town return",
                        "Boutique 4-star lodges throughout",
                        "Small group: min 6, max 16",
                        "Includes transport, guide, 7 nights' accommodation, meals & activities as specified",
                        "Whale-season departures: 3 & 24 Aug · 7 & 21 Sep 2026",
                      ].map((item, i) => (
                        <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                          <div style={{
                            width: 14, height: 14,
                            border: `1px solid ${t.sandDark}`,
                            display: "flex", alignItems: "center", justifyContent: "center",
                            flexShrink: 0, marginTop: 2,
                          }}>
                            <span style={{ color: t.gold, fontSize: 8 }}>✓</span>
                          </div>
                          <span style={{
                            fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 300,
                            color: t.muted, lineHeight: 1.55,
                          }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Pricing + departures + CTA */}
                  <div style={{
                    borderLeft: `1px solid ${t.creamDeep}`,
                    paddingLeft: 40,
                    display: "flex", flexDirection: "column", gap: 0,
                  }}>
                    <div style={{
                      fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 500,
                      letterSpacing: "0.22em", textTransform: "uppercase",
                      color: t.sandDark, marginBottom: 10,
                    }}>
                      Investment
                    </div>

                    {/* Price rule: no price — rates on enquiry */}
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: "clamp(17px, 2.2vw, 22px)",
                      fontWeight: 500, color: t.charcoal,
                      letterSpacing: "0.01em", lineHeight: 1.4,
                      marginBottom: 6,
                    }}>
                      Rates on enquiry — personalised proposal within 24 hours.
                    </div>

                    <HR opacity={0.3} my={24} />

                    <div style={{
                      fontFamily: "'Jost', sans-serif", fontSize: 9, fontWeight: 500,
                      letterSpacing: "0.22em", textTransform: "uppercase",
                      color: t.sandDark, marginBottom: 12,
                    }}>
                      2026 Departures
                    </div>

                    {/* Departure pills — green accent */}
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 28 }}>
                      {["3 Aug", "24 Aug", "7 Sep", "21 Sep"].map((d) => (
                        <Link
                          key={d}
                          href="https://onawhimtravel.waybird.com/trip/d2fa427c-2b54-4fe7-bf1b-3c18a9d774c7"
                          className="dep-pill"
                          style={{ padding: "5px 12px" }}
                        >
                          {d}
                        </Link>
                      ))}
                    </div>

                    {/* CTA #6 — pricing/offer box */}
                    <Link
                      href="https://onawhimtravel.waybird.com/trip/d2fa427c-2b54-4fe7-bf1b-3c18a9d774c7"
                      className="cta-primary"
                      id="cta-offer"
                      style={{ alignSelf: "flex-start" }}
                    >
                      Start Planning
                    </Link>
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 7 · TRUST BAR (mirrors Safari intro strip exactly)
        ══════════════════════════════════════════════════════════ */}
        <div className="sp" style={{
          background: t.charcoal,
          padding: "22px 56px",
          display: "flex", alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap", gap: 24,
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}>
          {[
            { stat: "IATA TIDS Accredited",         label: "Internationally recognised" },
            { stat: "South African Owned & Guided", label: "Local knowledge, genuine care" },
            { stat: "10+ Years Experience",          label: "Expert-curated journeys" },
            { stat: "24-Hour Personal Response",    label: "A real person, not a bot" },
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 14 }}>
              {i > 0 && (
                <div className="hide-sm" style={{ width: 1, height: 24, background: "rgba(255,255,255,0.08)" }} />
              )}
              <div>
                <div style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 15, fontWeight: 600, letterSpacing: "0.08em",
                  color: t.white,
                }}>{item.stat}</div>
                <div style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: 9.5, letterSpacing: "0.16em", textTransform: "uppercase",
                  color: "rgba(255,255,255,0.30)", marginTop: 1,
                }}>{item.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ══════════════════════════════════════════════════════════
            SECTION 8 · FAQ ACCORDION (6 items)
        ══════════════════════════════════════════════════════════ */}
        <section
          className="sp"
          style={{
            padding: "80px 56px",
            background: t.cream,
            borderTop: `1px solid ${t.creamDeep}`,
          }}
        >
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <Fade>
              <Label>Common Questions</Label>
              <h2 style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(28px, 3.5vw, 48px)",
                fontWeight: 600, letterSpacing: "0.05em",
                textTransform: "uppercase",
                color: t.charcoal, lineHeight: 1.05, marginBottom: 40,
              }}>
                Good questions,<br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>honest answers.</span>
              </h2>
            </Fade>

            <div style={{ borderTop: `1px solid ${t.creamDeep}` }}>
              {[
                {
                  q: "Is this trip suitable for solo travellers?",
                  a: "Very. Groups are small (6–16), the pace is sociable, and it's a safe, well-suited choice for solo women travellers. A single supplement may apply — ask us when you enquire.",
                },
                {
                  q: "When's the best time to see whales?",
                  a: "You'll be travelling in it: June–September is peak season on this coast, and the Aug & Sep departures are timed for exactly this window.",
                },
                {
                  q: "Do I have to do the bungee jump?",
                  a: "Not a chance — unless you want to. Every adrenaline activity has a gentler alternative, from the Bloukrans skywalk to the Woodcutters Journey. No one gets left in the van.",
                },
                {
                  q: "How fit do I need to be?",
                  a: "Moderately mobile is enough. The Big Tree boardwalk is flat and ten minutes long, game drives are vehicle-based, and activities scale to your comfort.",
                },
                {
                  q: "What's the accommodation like?",
                  a: "Boutique 4-star throughout — a private game lodge, a riverside eco-lodge near Knysna, cliffside chalets above the Tsitsikamma coast, and a lagoon-edge lodge in Wilderness.",
                },
                {
                  q: "Can we book this privately on different dates?",
                  a: "Yes — meet the minimum of 6 guests and we'll run it on dates that suit you, at the budget level that suits you.",
                },
              ].map((item, i) => (
                <Fade key={i} delay={i * 0.04}>
                  <AccordionItem title={item.q} body={item.a} />
                </Fade>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════════════════════════════════
            SECTION 9 · FINAL CTA (ink section — mirrors Safari enquiry CTA)
        ══════════════════════════════════════════════════════════ */}
        <section
          className="sp"
          style={{
            padding: "100px 56px",
            background: t.charcoal,
            position: "relative", overflow: "hidden",
          }}
        >
          {/* Watermark */}
          <div style={{
            position: "absolute", top: "50%", right: "5%",
            transform: "translateY(-50%)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(100px, 16vw, 200px)",
            fontWeight: 300, color: "rgba(255,255,255,0.025)",
            lineHeight: 1, userSelect: "none", pointerEvents: "none",
          }}>
            ✦
          </div>

          <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
            <Fade>
              <div style={{ maxWidth: 640 }}>
                <Label light>Ready to go?</Label>
                <h2 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: "clamp(28px, 4vw, 52px)",
                  fontWeight: 600, letterSpacing: "0.05em",
                  textTransform: "uppercase",
                  color: t.white, lineHeight: 1.05, marginBottom: 20,
                }}>
                  The giants are waiting.<br />
                  <span style={{ fontStyle: "italic", fontWeight: 300 }}>
                    They're patient — your dates aren't.
                  </span>
                </h2>
                <p style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300,
                  color: "rgba(255,255,255,0.55)", lineHeight: 1.82, marginBottom: 36,
                }}>
                  Four departures. Sixteen seats each. A dedicated travel expert will reply personally within 24 hours — enquiring costs nothing, and you decide from there.
                </p>

                {/* CTA #7 — final CTA section */}
                <Link
                  href="https://onawhimtravel.waybird.com/trip/d2fa427c-2b54-4fe7-bf1b-3c18a9d774c7"
                  className="cta-primary"
                  id="cta-final"
                >
                  Start Planning
                </Link>
              </div>
            </Fade>
          </div>
        </section>

      </div>

      {/* CTA #2 — sticky mobile bar (fixed bottom, mobile only, after 60% scroll) */}
      <StickyMobileCTA />
    </>
  );
}
