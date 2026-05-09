import { useState, useEffect } from "react";
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
          <Link to="/enquire" className="cta-nav">Start Planning</Link>
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
        <Link to="/enquire" className="cta-nav" style={{ padding: "14px 40px", fontSize: 12 }}>Start Planning</Link>
      </div>

      <main>{children}</main>

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
