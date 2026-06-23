import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

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

const SocialIcons = ({ size = 16, gap = 16 }) => (
  <div style={{ display: "flex", gap, alignItems: "center" }}>
    <a href="https://www.facebook.com/onawhimtravelandtours" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", transition: "opacity 0.3s", opacity: 0.8 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.8} aria-label="Facebook">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
    </a>
    <a href="https://www.instagram.com/africaonawhim" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", transition: "opacity 0.3s", opacity: 0.8 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.8} aria-label="Instagram">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
    </a>
    <a href="https://www.tiktok.com/@onawhimtravel" target="_blank" rel="noopener noreferrer" style={{ color: "inherit", transition: "opacity 0.3s", opacity: 0.8 }} onMouseEnter={e => e.currentTarget.style.opacity = 1} onMouseLeave={e => e.currentTarget.style.opacity = 0.8} aria-label="TikTok">
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"></path></svg>
    </a>
  </div>
);

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

export default function Layout({ children }) {
  const [scrollY, setScrollY] = useState(0);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    // Define the success callback globally
    window.ml_webform_success_42900468 = function() {
      const rowSuccess = document.querySelector('.ml-subscribe-form-42900468 .row-success');
      const rowForm = document.querySelector('.ml-subscribe-form-42900468 .row-form');
      if (rowSuccess) rowSuccess.style.display = 'block';
      if (rowForm) rowForm.style.display = 'none';
    };

    // Load MailerLite tracking/webforms script
    if (!document.querySelector('script[src*="webforms.min.js"]')) {
      const script = document.createElement('script');
      script.src = "https://groot.mailerlite.com/js/w/webforms.min.js?v83147fa8ce2d95cb73ece7f28b469519";
      script.type = "text/javascript";
      script.async = true;
      document.body.appendChild(script);
    }

    // Call load tracking (takel)
    fetch("https://assets.mailerlite.com/jsonp/2462437/forms/190973097449358909/takel")
      .catch(() => {});

    return () => {
      delete window.ml_webform_success_42900468;
    };
  }, []);

  const isHome = location.pathname === "/";
  const navSolid = scrollY > 80 || !isHome;

  return (
    <div style={{ fontFamily: "'Jost', system-ui, sans-serif", background: t.cream, color: t.charcoal }}>
      <style>{`
        .nav-link {
          font-family: 'Jost', sans-serif; font-size: 11px; font-weight: 500;
          letter-spacing: 0.22em; text-transform: uppercase;
          text-decoration: none; cursor: pointer; transition: all 0.3s ease; opacity: 0.8;
        }
        .nav-link:hover { opacity: 1; transform: translateY(-1px); }
        .nav-light { color: rgba(255,255,255,0.95); }
        .nav-dark  { color: ${t.charcoal}; }

        .cta-nav {
          display: inline-block; font-family: 'Jost', sans-serif;
          font-size: 10px; font-weight: 600; letter-spacing: 0.24em;
          text-transform: uppercase; padding: 12px 28px;
          background: ${t.charcoal}; color: ${t.white};
          border: none; cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          text-decoration: none;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .cta-nav:hover { background: ${t.earthMid}; transform: translateY(-2px); box-shadow: 0 6px 20px rgba(0,0,0,0.15); }

        .glass-nav {
          backdrop-filter: blur(12px);
          -webkit-backdrop-filter: blur(12px);
        }

        .mob-menu {
          position: fixed; inset: 0; background: ${t.charcoal}; z-index: 300;
          display: flex; flex-direction: column; align-items: center;
          justify-content: center; gap: 36px;
          transform: translateX(100%);
          transition: transform 0.6s cubic-bezier(0.8, 0, 0.1, 1);
        }
        .mob-menu.open { transform: translateX(0); }

        @media (max-width: 768px) {
          .hide-sm { display: none !important; }
          .footer-container { padding: 60px 24px 40px !important; }
          .footer-grid { grid-template-columns: 1fr !important; gap: 48px !important; text-align: center; }
          .footer-section { display: flex; flex-direction: column; align-items: center; }
          .footer-bottom { flex-direction: column !important; gap: 24px; text-align: center; }
          .footer-desc { max-width: 100% !important; }
        }

        .footer-grid {
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 60px;
          margin-bottom: 60px;
        }
      `}</style>

      {/* Global fine grain overlay */}
      <div style={{
        position: "fixed", inset: 0, zIndex: 999, opacity: 0.02, pointerEvents: "none",
        backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='300'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='300' height='300' filter='url(%23n)'/%3E%3C/svg%3E")`,
      }} />

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 200,
        padding: navSolid ? "14px 56px" : "24px 56px",
        background: navSolid ? "rgba(253, 250, 245, 0.85)" : "transparent",
        borderBottom: navSolid ? `1px solid rgba(200, 185, 154, 0.2)` : "none",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        transition: "all 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
      }} className={navSolid ? "glass-nav" : ""}>
        <Link to="/" style={{ textDecoration: "none" }}>
          <div style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase", lineHeight: 1.1,
            color: navSolid ? t.charcoal : t.white, transition: "color 0.4s",
          }}>On a Whim</div>
          <div style={{
            fontFamily: "'Jost', sans-serif", fontSize: 8.5, letterSpacing: "0.32em",
            textTransform: "uppercase",
            color: navSolid ? t.sandDark : "rgba(255,255,255,0.5)",
            transition: "color 0.4s",
          }}>Travel &amp; Tours · South Africa</div>
        </Link>

        <div className="hide-sm" style={{ display: "flex", alignItems: "center", gap: 40 }}>
          {[
            { l: "Tours", p: "/tours" },
            { l: "Safari", p: "/safari" },
            { l: "About", p: "/about" },
            { l: "Contact", p: "/enquire" }
          ].map(item => (
            <Link key={item.l} to={item.p} className={`nav-link ${navSolid ? "nav-dark" : "nav-light"}`}>
              {item.l}
            </Link>
          ))}
          <div style={{ display: "flex", alignItems: "center", gap: 32 }}>
            <div className={navSolid ? "nav-dark" : "nav-light"} style={{ display: "flex" }}>
              <SocialIcons size={15} gap={16} />
            </div>
            <Link to="/enquire" className="cta-nav">Start Planning</Link>
          </div>
        </div>

        <button className="show-sm" onClick={() => setMobileOpen(true)}
          style={{ background: "none", border: "none", cursor: "pointer", display: "flex", flexDirection: "column", gap: 5 }}>
          {[0,1,2].map(i => (
            <span key={i} style={{ display: "block", width: 22, height: 1.5, background: navSolid ? t.charcoal : t.white, transition: "background 0.3s" }} />
          ))}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`mob-menu ${mobileOpen ? "open" : ""}`}>
        <button onClick={() => setMobileOpen(false)} style={{
          position: "absolute", top: 28, right: 28, background: "none",
          border: "none", color: t.white, fontSize: 24, cursor: "pointer",
        }}>✕</button>
        {[
          { l: "Home", p: "/" },
          { l: "Tours", p: "/tours" },
          { l: "Safari", p: "/safari" },
          { l: "About", p: "/about" },
          { l: "Contact", p: "/enquire" }
        ].map(item => (
          <Link key={item.l} to={item.p} style={{
            fontFamily: "'Cormorant Garamond', serif", fontSize: 32, fontWeight: 400,
            letterSpacing: "0.1em", textTransform: "uppercase",
            color: t.white, textDecoration: "none", cursor: "pointer",
          }}>{item.l}</Link>
        ))}
        <Link to="/enquire" className="cta-nav" style={{ padding: "14px 40px", fontSize: 12, marginBottom: 12 }}>Start Planning</Link>
        <div style={{ color: t.white }}>
          <SocialIcons size={20} gap={24} />
        </div>
      </div>

      <main>{children}</main>

      {/* ── NEWSLETTER ── */}
      <section className="sp" style={{ padding: "100px 56px", background: t.offWhite, borderTop: `1px solid ${t.creamDeep}` }}>
        <style>{`
          .ml-form-embedSubmitLoad {
            display: inline-block;
            width: 20px;
            height: 20px;
          }
          .ml-form-embedSubmitLoad:after {
            content: " ";
            display: block;
            width: 11px;
            height: 11px;
            margin: 1px;
            border-radius: 50%;
            border: 4px solid #fff;
            border-color: #ffffff #ffffff #ffffff transparent;
            animation: ml-form-embedSubmitLoad 1.2s linear infinite;
          }
          @keyframes ml-form-embedSubmitLoad {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
          .sr-only {
            position: absolute;
            width: 1px;
            height: 1px;
            padding: 0;
            margin: -1px;
            overflow: hidden;
            clip: rect(0,0,0,0);
            border: 0;
          }
        `}</style>
        <div style={{ maxWidth: 650, margin: "0 auto", textAlign: "center" }}>
          <div id="mlb2-42900468" className="ml-form-embedContainer ml-subscribe-form ml-subscribe-form-42900468">
            <div className="ml-form-embedWrapper embedForm">
              
              {/* Form Content */}
              <div className="ml-form-embedBody ml-form-embedBodyDefault row-form">
                <Fade>
                  <EyebrowLabel>Newsletter</EyebrowLabel>
                  <BigHeading size="clamp(28px, 4vw, 42px)" style={{ marginBottom: 16 }}>
                    Adventure is calling.<br />
                    <span style={{ fontStyle: "italic", fontWeight: 300 }}>Will you answer it?</span>
                  </BigHeading>
                  <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300, color: t.muted, lineHeight: 1.8, marginBottom: 36 }}>
                    Sign up for travel inspiration, special offers and giveaways!
                  </p>
                </Fade>

                <form className="ml-block-form" action="https://assets.mailerlite.com/jsonp/2462437/forms/190973097449358909/subscribe" data-code="" method="post" target="_blank">
                  <div className="ml-form-formContent" style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                    
                    <div className="ml-form-fieldRow ml-last-item">
                      <div className="ml-field-group ml-field-email ml-validate-email ml-validate-required" style={{ position: "relative" }}>
                        <input
                          aria-label="email"
                          aria-required="true"
                          type="email"
                          className="form-control"
                          name="fields[email]"
                          placeholder="Your email address"
                          autoComplete="email"
                          style={{
                            width: "100%",
                            padding: "14px 20px",
                            background: t.cream,
                            border: `1px solid ${t.sand}`,
                            fontFamily: "'Jost', sans-serif",
                            fontSize: 14,
                            fontWeight: 300,
                            color: t.charcoal,
                            outline: "none",
                            transition: "border-color 0.2s",
                            textAlign: "center",
                            borderRadius: 0,
                          }}
                          onFocus={(e) => e.target.style.borderColor = t.charcoal}
                          onBlur={(e) => e.target.style.borderColor = t.sand}
                        />
                      </div>
                    </div>

                    <input type="hidden" name="ml-submit" value="1" />
                    <input type="hidden" name="anticsrf" value="true" />

                    <div className="ml-form-embedSubmit" style={{ width: "100%", marginTop: 8 }}>
                      <button
                        type="submit"
                        className="cta-primary"
                        style={{
                          width: "100%",
                          padding: "15px 0",
                          fontFamily: "'Jost', sans-serif",
                          fontSize: 11,
                          fontWeight: 500,
                          letterSpacing: "0.22em",
                          textTransform: "uppercase",
                          background: t.charcoal,
                          color: t.white,
                          border: "none",
                          cursor: "pointer",
                          transition: "background 0.25s",
                        }}
                      >
                        Subscribe ✦
                      </button>
                      <button
                        disabled="disabled"
                        style={{ display: "none" }}
                        type="button"
                        className="loading"
                      >
                        <div className="ml-form-embedSubmitLoad"></div>
                        <span className="sr-only">Loading...</span>
                      </button>
                    </div>

                  </div>
                </form>
              </div>

              {/* Success Body */}
              <div className="ml-form-successBody row-success" style={{ display: "none" }}>
                <Fade>
                  <div style={{ display: "flex", flexDirection: "column", alignItems: "center", padding: "40px 0" }}>
                    <div style={{ width: 64, height: 64, borderRadius: "50%", background: t.creamDark, border: `1px solid ${t.sand}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 28 }}>
                      <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, color: t.gold }}>✦</span>
                    </div>
                    <EyebrowLabel>Subscribed</EyebrowLabel>
                    <BigHeading size="clamp(28px, 4vw, 42px)" style={{ marginBottom: 16 }}>
                      Start making your<br />
                      <span style={{ fontStyle: "italic", fontWeight: 300 }}>bucket-list!</span>
                    </BigHeading>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300, color: t.muted, lineHeight: 1.8, maxWidth: 450, margin: "0 auto" }}>
                      You have successfully joined our subscriber list. Let's start making your travel dreams a reality.
                    </p>
                  </div>
                </Fade>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="footer-container" style={{ background: t.charcoal, padding: "72px 56px 32px", borderTop: `3px solid ${t.earth}` }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="footer-grid">
            <div className="footer-section">
               <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 24, color: t.white, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 10 }}>On a Whim</div>
               <p className="footer-desc" style={{ fontSize: 13, color: "rgba(255,255,255,0.4)", lineHeight: 1.6, maxWidth: 280 }}>
                 Bespoke journeys across South Africa and Southern Africa. Travel with people who know this land deeply.
               </p>
            </div>
            <div className="footer-section">
               <div style={{ fontSize: 10, color: t.sandDark, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 20 }}>Quick Links</div>
               <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                 {["Tours", "Destinations", "About", "Enquire"].map(l => (
                   <Link key={l} to={`/${l.toLowerCase()}`} style={{ color: "rgba(255,255,255,0.6)", textDecoration: "none", fontSize: 13 }}>{l}</Link>
                 ))}
               </div>
            </div>
            <div className="footer-section">
               <div style={{ fontSize: 10, color: t.sandDark, textTransform: "uppercase", letterSpacing: "0.2em", marginBottom: 20 }}>Contact</div>
               <div style={{ color: "rgba(255,255,255,0.6)", fontSize: 13, lineHeight: 1.8 }}>
                 <a href="mailto:info@onawhim.co.za" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = t.white} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>info@onawhim.co.za</a><br />
                 <a href="tel:+27621380622" style={{ color: "inherit", textDecoration: "none" }} onMouseEnter={e => e.currentTarget.style.color = t.white} onMouseLeave={e => e.currentTarget.style.color = "rgba(255,255,255,0.6)"}>+27 62 138 0622</a><br />
                 Cape Town, South Africa
                 <div style={{ marginTop: 24, color: t.white }}>
                   <SocialIcons size={16} gap={16} />
                 </div>
               </div>
            </div>
          </div>
          <div className="footer-bottom" style={{ borderTop: "1px solid rgba(255,255,255,0.05)", paddingTop: 32, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
            <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>© 2026 On a Whim. IATA TIDS Accredited.</span>
            <div style={{ display: "flex", gap: 20 }}>
               <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>Privacy Policy</span>
               <span style={{ fontSize: 11, color: "rgba(255,255,255,0.2)" }}>Terms & Conditions</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
