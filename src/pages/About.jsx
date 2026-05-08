import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

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
      transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
      ...sx,
    }}>{children}</div>
  );
}

const HR = ({ opacity = 0.28, my = 0 }) => (
  <div style={{ height: 1, background: t.sand, opacity, margin: `${my}px 0` }} />
);

const Label = ({ children, light }) => (
  <p style={{
    fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
    letterSpacing: "0.28em", textTransform: "uppercase",
    color: light ? "rgba(255,255,255,0.45)" : t.sandDark,
    marginBottom: 14,
  }}>{children}</p>
);

const BigHead = ({ children, light, size = "clamp(32px,4.5vw,58px)", style: sx = {} }) => (
  <h2 style={{
    fontFamily: "'Cormorant Garamond', Georgia, serif",
    fontSize: size, fontWeight: 600, letterSpacing: "0.06em",
    textTransform: "uppercase", lineHeight: 1.0,
    color: light ? t.white : t.charcoal,
    margin: 0, ...sx,
  }}>{children}</h2>
);

const Body = ({ children, style: sx = {} }) => (
  <p style={{
    fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300,
    lineHeight: 1.85, color: t.muted, letterSpacing: "0.01em",
    ...sx,
  }}>{children}</p>
);

export default function About() {
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

        .cta-ghost {
          display: inline-block; font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 13px 36px;
          background: transparent; color: rgba(255,255,255,0.9);
          border: 1px solid rgba(255,255,255,0.4); cursor: pointer;
          transition: all 0.25s; text-decoration: none;
        }
        .cta-ghost:hover { border-color: white; color: white; }

        @keyframes heroIn {
          from { opacity: 0; transform: translateY(14px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hi { animation: heroIn 1.1s ease forwards; }
        .hi.d1 { animation-delay: 0.2s; opacity: 0; }
        .hi.d2 { animation-delay: 0.4s; opacity: 0; }
        .hi.d3 { animation-delay: 0.6s; opacity: 0; }
        .hi.d4 { animation-delay: 0.75s; opacity: 0; }

        @media (max-width: 768px) {
          .two-col { grid-template-columns: 1fr !important; gap: 40px !important; }
          .three-col { grid-template-columns: 1fr !important; }
          .sp { padding-left: 24px !important; padding-right: 24px !important; }
          .hero-h1 { font-size: clamp(44px, 10vw, 88px) !important; }
        }
      `}</style>

      {/* ── HERO ─────────────────────────────────────────────────── */}
      <section style={{
        position: "relative", height: "75vh", minHeight: 560,
        overflow: "hidden", display: "flex", alignItems: "center",
      }}>
        <div style={{
          position: "absolute", inset: 0,
          backgroundImage: `url("https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?w=1920&q=85&fit=crop&crop=center")`,
          backgroundSize: "cover", backgroundPosition: "center",
          filter: "brightness(0.65) saturate(1.05)",
        }} />
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to right, rgba(10,5,2,0.78) 0%, rgba(10,5,2,0.3) 65%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", inset: 0, opacity: 0.025, pointerEvents: "none",
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
        }} />
        <div style={{ position: "absolute", top: 108, left: 56, opacity: 0.2 }}>
          <div style={{ width: 1, height: 56, background: t.white, marginBottom: 6 }} />
          <div style={{ width: 36, height: 1, background: t.white }} />
        </div>

        <div className="sp" style={{
          position: "relative", zIndex: 10,
          maxWidth: 1200, margin: "0 auto",
          padding: "0 56px", width: "100%",
        }}>
          <p className="hi d1" style={{
            fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
            letterSpacing: "0.28em", textTransform: "uppercase",
            color: "rgba(255,255,255,0.45)", marginBottom: 18,
          }}>KwaZulu-Natal · Cape Town · Southern Africa</p>

          <h1 className="hi d2 hero-h1" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px,7.5vw,96px)",
            fontWeight: 600, letterSpacing: "0.06em",
            textTransform: "uppercase", lineHeight: 0.96,
            color: t.white,
          }}>About</h1>
          <h1 className="hi d3 hero-h1" style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(48px,7.5vw,96px)",
            fontWeight: 300, fontStyle: "italic",
            letterSpacing: "0.04em", lineHeight: 1.05,
            color: "rgba(255,255,255,0.88)",
            marginBottom: 30,
          }}>On a Whim</h1>

          <p className="hi d4" style={{
            fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300,
            lineHeight: 1.78, color: "rgba(255,255,255,0.62)",
            maxWidth: 460, marginBottom: 44,
          }}>
            A dynamic South African mother-daughter duo — passionate about Africa, driven by wanderlust, and on a mission to share the magic of this continent with the world.
          </p>

          <div className="hi d4" style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <Link to="/enquire" className="cta-primary">Start Planning</Link>
            <a href="#story" className="cta-ghost">Our Story ↓</a>
          </div>
        </div>

        <div style={{
          position: "absolute", bottom: 44, right: 56, zIndex: 6,
          display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          opacity: 0.25,
        }}>
          <span style={{
            fontFamily: "'Jost'", fontSize: 9, letterSpacing: "0.3em",
            textTransform: "uppercase", color: t.white, writingMode: "vertical-rl",
          }}>Scroll</span>
          <div style={{ width: 1, height: 48, background: `linear-gradient(to bottom, ${t.white}, transparent)` }} />
        </div>
      </section>

      {/* ── WHO WE ARE ───────────────────────────────────────────── */}
      <section id="story" className="sp" style={{ padding: "100px 56px", background: t.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="two-col" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 80, alignItems: "start",
          }}>
            <Fade>
              <Label>South African · Mother &amp; Daughter</Label>
              <BigHead size="clamp(34px,4.5vw,58px)" style={{ marginBottom: 32 }}>
                Who<br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>We Are</span>
              </BigHead>

              <div style={{ display: "flex", gap: 20, marginBottom: 36 }}>
                <div style={{ width: 2, background: `linear-gradient(to bottom, ${t.gold}, transparent)`, flexShrink: 0, borderRadius: 1 }} />
                <p style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 22, fontWeight: 400, fontStyle: "italic",
                  lineHeight: 1.65, color: t.earthMid,
                }}>
                  Meet On a Whim Travel &amp; Tours, a dynamic South African mother-daughter duo passionate about exploring new horizons, immersing themselves in diverse cultures, and living life to the fullest!
                </p>
              </div>

              <Body style={{ marginBottom: 20 }}>
                With a zest for adventure and a heart full of wanderlust, we're on a mission to share the breathtaking beauty, mystical magic, and profound spiritual essence of Africa with the world.
              </Body>
            </Fade>

            <Fade delay={0.15}>
              <div style={{ borderLeft: `1px solid ${t.sand}`, paddingLeft: 40 }}>
                <Body style={{ marginBottom: 22 }}>
                  We are children of Africa, born and raised in KwaZulu-Natal and Cape Town, respectively. As a mixed-race family with diverse heritage, our roots in South Africa are deep and intertwined. The rhythm of Africa is in our blood and DNA and we feel a deep connection to this sacred land.
                </Body>
                <Body style={{ marginBottom: 22 }}>
                  Africa is a wild and magical place, with a heartbeat that resonates in every African drum, every breathtaking sunset, every whisper of the wind, and all her people.
                </Body>
                <Body>
                  We want to share the immense beauty, transformative nature, and profound spiritual impact of our homeland with the world. From the majestic savannas of the Serengeti to the vibrant streets of Cape Town, we'll take you on a thrilling journey across this incredible continent.
                </Body>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ── BRIAN JACKMAN PULL QUOTE ─────────────────────────────── */}
      <section style={{
        padding: "80px 56px",
        background: `linear-gradient(168deg, ${t.earth} 0%, ${t.charcoal} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "-5%", left: "2%",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(220px,30vw,400px)",
          fontWeight: 600, lineHeight: 1,
          color: "rgba(255,255,255,0.03)",
          userSelect: "none", pointerEvents: "none",
        }}>"</div>

        <div style={{ maxWidth: 900, margin: "0 auto", position: "relative", zIndex: 1, textAlign: "center" }}>
          <Fade>
            <div style={{
              width: 40, height: 1,
              background: t.gold, margin: "0 auto 40px",
            }} />
            <blockquote style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "clamp(24px,3.5vw,44px)",
              fontWeight: 300, fontStyle: "italic",
              lineHeight: 1.45, letterSpacing: "0.02em",
              color: "rgba(255,255,255,0.92)",
              marginBottom: 36,
            }}>
              "Africa changes you forever, like nowhere on earth. Once you have been there, you will never be the same."
            </blockquote>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.25)" }} />
              <cite style={{
                fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 400,
                letterSpacing: "0.2em", textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)", fontStyle: "normal",
              }}>Brian Jackman</cite>
              <div style={{ width: 24, height: 1, background: "rgba(255,255,255,0.25)" }} />
            </div>
          </Fade>
        </div>
      </section>

      {/* ── OUR VISION ───────────────────────────────────────────── */}
      <section className="sp" style={{ padding: "100px 56px", background: t.offWhite }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div style={{ textAlign: "center", maxWidth: 720, margin: "0 auto" }}>
              <Label>What Drives Us</Label>
              <BigHead size="clamp(32px,4.5vw,56px)" style={{ marginBottom: 32 }}>
                Our<br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>Vision</span>
              </BigHead>
              <p style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontSize: "clamp(20px,2.5vw,30px)",
                fontWeight: 400, fontStyle: "italic",
                lineHeight: 1.6, color: t.earthMid,
                letterSpacing: "0.02em",
              }}>
                To craft inspired &amp; creative African travel experiences that spark a sense of discovery, create memorable moments, &amp; inspire joy.
              </p>
            </div>
          </Fade>

          <Fade delay={0.15}>
            <div style={{
              display: "grid", gridTemplateColumns: "repeat(3, 1fr)",
              gap: 2, marginTop: 72,
            }} className="three-col">
              {[
                {
                  n: "01",
                  title: "Inspire Discovery",
                  body: "Every journey we design opens a door to something unexpected — a landscape, a culture, a moment of connection that stays with you long after you return home.",
                },
                {
                  n: "02",
                  title: "Create Memories",
                  body: "We believe the best travel stories are the ones you didn't plan. We build the framework; Africa writes the story.",
                },
                {
                  n: "03",
                  title: "Inspire Joy",
                  body: "Nothing beats fun. We bring warmth, whimsy, and genuine passion to everything we do — because travel should feel like the best decision you ever made.",
                },
              ].map((item, i) => (
                <div key={i} style={{
                  background: t.cream,
                  border: `1px solid ${t.creamDeep}`,
                  padding: "40px 36px",
                  transition: "border-color 0.3s, transform 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.sandDark; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.creamDeep; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 56, fontWeight: 300, lineHeight: 1,
                    color: t.creamDeep, marginBottom: -4,
                  }}>{item.n}</div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 22, fontWeight: 600, letterSpacing: "0.05em",
                    textTransform: "uppercase", color: t.charcoal,
                    marginBottom: 14, marginTop: 10,
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: "'Jost', sans-serif", fontSize: 14,
                    fontWeight: 300, color: t.muted, lineHeight: 1.82,
                  }}>{item.body}</p>
                </div>
              ))}
            </div>
          </Fade>
        </div>
      </section>

      <HR />

      {/* ── ORIGIN STORY ─────────────────────────────────────────── */}
      <section className="sp" style={{ padding: "100px 56px", background: t.cream }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <Fade>
            <div style={{ maxWidth: 160, marginBottom: 60 }}>
              <Label>How We Began</Label>
              <BigHead size="clamp(32px,4.5vw,56px)">
                Our Origin<br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>Story</span>
              </BigHead>
            </div>
          </Fade>

          <div className="two-col" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr",
            gap: 80, alignItems: "start",
          }}>
            <Fade>
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", left: 0, top: 8, bottom: 0,
                  width: 1, background: `linear-gradient(to bottom, ${t.sand}, transparent)`,
                }} />

                {[
                  {
                    year: "2023",
                    title: "Founded",
                    body: "On a Whim was founded as the brainchild of four friends and former colleagues with a wealth of travel and event experience, who wanted to create world-class conferences and travel experiences that incorporated elements of fun and whimsy.",
                  },
                  {
                    year: "2024",
                    title: "Evolution",
                    body: "With three founding partners taking on other commitments, the business became solely owned and managed by one of the original founders — who went on to serve as Professional Conference Organiser for the 31st and 32nd Congresses of the Society of Neurosurgeons of South Africa, alongside a range of international and local projects.",
                  },
                  {
                    year: "2025",
                    title: "New Direction",
                    body: "After a new change in ownership and a whirlwind of activity spanning three years, we took the bold decision to split our services — On a Whim Travel & Tours now focuses solely on inbound leisure and conference-related travel, while PCO services moved to our sister company, Kaleidoscope Conferences.",
                  },
                ].map((item, i) => (
                  <div key={i} style={{
                    paddingLeft: 28, marginBottom: 44,
                    paddingBottom: 44,
                    borderBottom: i < 2 ? `1px solid ${t.creamDeep}` : "none",
                  }}>
                    <div style={{
                      position: "absolute", left: -5, marginTop: 6,
                      width: 10, height: 10, borderRadius: "50%",
                      background: t.gold, border: `2px solid ${t.cream}`,
                    }} />
                    <div style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 13, fontWeight: 600, letterSpacing: "0.15em",
                      color: t.gold, marginBottom: 6,
                    }}>{item.year}</div>
                    <h3 style={{
                      fontFamily: "'Cormorant Garamond', serif",
                      fontSize: 22, fontWeight: 600, letterSpacing: "0.04em",
                      textTransform: "uppercase", color: t.charcoal,
                      marginBottom: 12,
                    }}>{item.title}</h3>
                    <Body style={{ fontSize: 14 }}>{item.body}</Body>
                  </div>
                ))}
              </div>
            </Fade>

            <Fade delay={0.2}>
              <div style={{
                background: t.creamDark,
                border: `1px solid ${t.creamDeep}`,
                padding: "44px 40px",
                position: "sticky", top: 100,
              }}>
                <Label>The Thinking Behind It</Label>
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontSize: 26, fontWeight: 600, letterSpacing: "0.04em",
                  textTransform: "uppercase", color: t.charcoal,
                  marginBottom: 20,
                }}>Nothing Beats Fun</h3>
                <Body style={{ marginBottom: 20, fontSize: 14 }}>
                  Many conferences centre around serious academic, ethical or medical topics. Without detracting from the seriousness of those discussions, we believed in improving enjoyability, engagement, and learning outcomes by restructuring content delivery to include moments of levity and fun.
                </Body>
                <Body style={{ marginBottom: 32, fontSize: 14 }}>
                  Our idea was based on the principle that humans experience superior learning outcomes if they're having FUN — because, well… nothing beats fun, right?!
                </Body>

                <HR opacity={0.4} my={0} />

                <div style={{ marginTop: 28 }}>
                  <div style={{
                    fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
                    letterSpacing: "0.22em", textTransform: "uppercase",
                    color: t.sandDark, marginBottom: 16,
                  }}>The On a Whim Family</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[
                      { name: "On a Whim Travel & Tours", desc: "Inbound leisure & conference-related travel" },
                      { name: "Kaleidoscope Conferences", desc: "Professional Conference Organising services" },
                    ].map((co, i) => (
                      <div key={i} style={{
                        display: "flex", gap: 14, alignItems: "flex-start",
                        paddingBottom: 14,
                        borderBottom: i < 1 ? `1px solid ${t.creamDeep}` : "none",
                      }}>
                        <div style={{
                          width: 6, height: 6, borderRadius: "50%",
                          background: t.gold, flexShrink: 0, marginTop: 6,
                        }} />
                        <div>
                          <div style={{
                            fontFamily: "'Jost', sans-serif", fontSize: 13,
                            fontWeight: 500, color: t.charcoal, marginBottom: 2,
                          }}>{co.name}</div>
                          <div style={{
                            fontFamily: "'Jost', sans-serif", fontSize: 12,
                            fontWeight: 300, color: t.muted,
                          }}>{co.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Fade>
          </div>
        </div>
      </section>

      {/* ── WHY TRAVEL WITH US ───────────────────────────────────── */}
      <section className="sp" style={{
        padding: "100px 56px",
        background: t.creamDark,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", right: "-2%", top: "50%",
          transform: "translateY(-50%)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(140px,20vw,260px)",
          fontWeight: 300, color: t.sand, opacity: 0.12,
          lineHeight: 1, userSelect: "none", pointerEvents: "none",
          letterSpacing: "-0.04em",
        }}>AFRICA</div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Fade>
            <div style={{ marginBottom: 60 }}>
              <Label>Our Approach</Label>
              <BigHead size="clamp(32px,4.5vw,56px)">
                Why Travel<br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>With Us</span>
              </BigHead>
            </div>
          </Fade>

          <div className="two-col" style={{
            display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3,
          }}>
            {[
              {
                icon: "◈",
                title: "Born of This Land",
                body: "We are children of Africa — KwaZulu-Natal and Cape Town born and raised. We don't just know the destinations; we feel them. That depth of connection shapes every journey we design.",
              },
              {
                icon: "✦",
                title: "Personalised to You",
                body: "No two trips are the same. We listen deeply to what you're after and design an experience built around your pace, your interests, and your travel style.",
              },
              {
                icon: "◇",
                title: "Detail-Obsessed",
                body: "From the lodge selection to the dinner reservation, we sweat the small stuff so you don't have to. Every element of your journey is considered and curated.",
              },
              {
                icon: "—",
                title: "Genuinely Independent",
                body: "We are South African owned and operated. Our recommendations come from genuine experience and trusted relationships — not commission structures.",
              },
              {
                icon: "○",
                title: "IATA TIDS Accredited",
                body: "We hold Travel Industry Designator Service accreditation — recognised by airlines and tourism bodies globally as a mark of professional credibility.",
              },
              {
                icon: "✧",
                title: "Joy Is Our Standard",
                body: "We founded this company on a belief that travel should be fun, transformative, and deeply memorable. If you're not coming home changed, we haven't done our job.",
              },
            ].map((item, i) => (
              <Fade key={i} delay={i * 0.06}>
                <div style={{
                  background: t.offWhite,
                  border: `1px solid ${t.creamDeep}`,
                  padding: "36px 32px",
                  transition: "border-color 0.3s, transform 0.3s",
                  cursor: "default",
                }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = t.sandDark; e.currentTarget.style.transform = "translateY(-3px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = t.creamDeep; e.currentTarget.style.transform = "translateY(0)"; }}
                >
                  <div style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 28, fontWeight: 300, lineHeight: 1,
                    color: t.gold, marginBottom: 18,
                    letterSpacing: "0.05em",
                  }}>{item.icon}</div>
                  <h3 style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: 20, fontWeight: 600, letterSpacing: "0.04em",
                    textTransform: "uppercase", color: t.charcoal,
                    marginBottom: 12,
                  }}>{item.title}</h3>
                  <p style={{
                    fontFamily: "'Jost', sans-serif", fontSize: 14,
                    fontWeight: 300, color: t.muted, lineHeight: 1.8,
                  }}>{item.body}</p>
                </div>
              </Fade>
            ))}
          </div>
        </div>
      </section>


      {/* ── ENQUIRY CTA ──────────────────────────────────────────── */}
      <section className="sp" style={{
        padding: "100px 56px",
        background: `linear-gradient(168deg, ${t.earth} 0%, ${t.charcoal} 100%)`,
        position: "relative", overflow: "hidden",
      }}>
        <div style={{
          position: "absolute", top: "50%", right: "4%",
          transform: "translateY(-50%)",
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(140px,20vw,260px)", fontWeight: 300,
          color: "rgba(255,255,255,0.025)", lineHeight: 1,
          userSelect: "none", letterSpacing: "-0.04em",
        }}>OAW</div>

        <div style={{ maxWidth: 1200, margin: "0 auto", position: "relative", zIndex: 1 }}>
          <Fade>
            <div style={{ maxWidth: 580 }}>
              <Label light>Ready When You Are</Label>
              <BigHead light size="clamp(30px,4vw,52px)" style={{ marginBottom: 20 }}>
                Let's Plan<br />
                <span style={{ fontStyle: "italic", fontWeight: 300 }}>Your Journey</span>
              </BigHead>
              <p style={{
                fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300,
                color: "rgba(255,255,255,0.55)", lineHeight: 1.82, marginBottom: 40,
              }}>
                Whether you know exactly where you want to go or you're just beginning to dream — get in touch. We respond within 24 hours with ideas, options, and a no-obligation proposal tailored to you.
              </p>
              <div style={{ display: "flex", gap: 14, flexWrap: "wrap", alignItems: "center" }}>
                <Link to="/enquire" className="cta-primary" style={{ background: t.gold }}>
                  Start Planning
                </Link>
                <span style={{
                  fontFamily: "'Jost', sans-serif", fontSize: 12,
                  color: "rgba(255,255,255,0.3)", letterSpacing: "0.1em",
                }}>
                  or call &nbsp;<a href="tel:+27621380622" style={{ color: "rgba(255,255,255,0.6)", fontWeight: 500, textDecoration: "none" }}>+27 62 138 0622</a>
                </span>
              </div>
            </div>
          </Fade>
        </div>
      </section>
    </div>
  );
}
