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
      transform: v ? "translateY(0)" : "translateY(22px)",
      transition: `opacity 0.85s ease ${delay}s, transform 0.85s ease ${delay}s`,
      ...sx,
    }}>{children}</div>
  );
}

const Label = ({ children, light }) => (
  <p style={{
    fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500,
    letterSpacing: "0.28em", textTransform: "uppercase",
    color: light ? "rgba(255,255,255,0.45)" : t.sandDark,
    marginBottom: 14,
  }}>{children}</p>
);

const HR = ({ opacity = 0.28, my = 0 }) => (
  <div style={{ height: 1, background: t.sand, opacity, margin: `${my}px 0` }} />
);

const TOUR_TYPES = [
  "Day Tour or Excursion",
  "Multi-Day Package",
  "Safari & Wildlife",
  "Garden Route",
  "Cape Town & Western Cape",
  "Southern Africa Cross-Border",
  "Not sure yet — help me decide",
];

const GROUP_SIZES = [
  "Just me (solo)",
  "2 people",
  "3–4 people",
  "5–8 people",
  "9+ people / group",
];

const HOW_HEARD = [
  "Google search",
  "Social media",
  "Referred by a friend",
  "Travel agent",
  "Repeat client",
  "Other",
];

const PKG_NAMES = {
  "vic-falls-hwange": "Victoria Falls & Hwange",
  "livingstone-chobe": "Livingstone & Chobe",
  "livingstone-lower-zambezi": "Livingstone & Lower Zambezi",
};

export default function Enquire() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    country: "",
    tourType: "",
    groupSize: "",
    travelMonth: "",
    duration: "",
    message: "",
    howHeard: "",
    newsletter: false,
  });

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const pkg = queryParams.get("pkg");
    const date = queryParams.get("date");

    const updates = {};
    if (pkg) {
      updates.tourType = "Safari & Wildlife";
      const pkgName = PKG_NAMES[pkg] || pkg;
      updates.message = `I am enquiring about the "${pkgName}" package.`;
      if (date) {
        updates.message += ` Preferred departure date: ${date}.`;
        updates.travelMonth = date;
      }
    } else if (date) {
      updates.travelMonth = date;
    }

    if (Object.keys(updates).length > 0) {
      setForm(prev => ({ ...prev, ...updates }));
    }
  }, []);

  const set = (key, val) => {
    setForm(prev => ({ ...prev, [key]: val }));
    if (errors[key]) setErrors(prev => ({ ...prev, [key]: "" }));
  };

  const validateStep1 = () => {
    const e = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) e.email = "Valid email required";
    return e;
  };

  const validateStep2 = () => {
    const e = {};
    if (!form.tourType) e.tourType = "Please select a tour type";
    if (!form.groupSize) e.groupSize = "Please select a group size";
    return e;
  };

  const nextStep = () => {
    if (step === 1) {
      const e = validateStep1();
      if (Object.keys(e).length) { setErrors(e); return; }
    }
    if (step === 2) {
      const e = validateStep2();
      if (Object.keys(e).length) { setErrors(e); return; }
    }
    setStep(s => s + 1);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ 
        "form-name": "enquiry", 
        ...form,
        newsletter: form.newsletter ? "on" : "off"
      })
    })
    .then(() => {
      if (window.fbq) window.fbq('track', 'Lead');
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    })
    .catch(error => {
      console.error("Form submission error:", error);
      // Still show success to user to avoid frustration, or handle error
      setSubmitted(true);
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  };

  const inputStyle = (hasError) => ({
    width: "100%",
    padding: "13px 16px",
    background: t.cream,
    border: `1px solid ${hasError ? "#C0392B" : t.sand}`,
    fontFamily: "'Jost', sans-serif",
    fontSize: 14, fontWeight: 300,
    color: t.charcoal,
    outline: "none",
    transition: "border-color 0.2s",
    borderRadius: 0,
  });

  const labelStyle = {
    fontFamily: "'Jost', sans-serif",
    fontSize: 10, fontWeight: 500,
    letterSpacing: "0.2em", textTransform: "uppercase",
    color: t.earthMid, display: "block", marginBottom: 7,
  };

  const errorStyle = {
    fontFamily: "'Jost', sans-serif",
    fontSize: 11, color: "#C0392B",
    marginTop: 4, display: "block",
  };

  const pillSelect = (options, field) => (
    <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginTop: 4 }}>
      {options.map(opt => (
        <button
          key={opt}
          type="button"
          onClick={() => set(field, opt)}
          style={{
            fontFamily: "'Jost', sans-serif",
            fontSize: 12, fontWeight: 400,
            letterSpacing: "0.05em",
            padding: "9px 16px",
            border: `1px solid ${form[field] === opt ? t.charcoal : t.creamDeep}`,
            background: form[field] === opt ? t.charcoal : t.offWhite,
            color: form[field] === opt ? t.white : t.muted,
            cursor: "pointer",
            transition: "all 0.2s",
          }}
        >{opt}</button>
      ))}
    </div>
  );

  return (
    <div style={{ background: t.cream, color: t.charcoal, minHeight: "100vh", paddingTop: 80 }}>
      <style>{`
        .ow-input:focus { border-color: ${t.charcoal} !important; }
        .ow-input::placeholder { color: ${t.muted}; }
        .ow-textarea { resize: vertical; min-height: 130px; }

        .cta-primary {
          display: inline-block; font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 500; letter-spacing: 0.22em;
          text-transform: uppercase; padding: 14px 38px;
          background: ${t.charcoal}; color: ${t.white};
          border: none; cursor: pointer; transition: background 0.25s;
          width: 100%;
          text-decoration: none;
          text-align: center;
        }
        .cta-primary:hover { background: ${t.earth}; }

        .cta-back {
          display: inline-block; font-family: 'Jost', sans-serif;
          font-size: 11px; font-weight: 400; letter-spacing: 0.18em;
          text-transform: uppercase; padding: 13px 28px;
          background: transparent; color: ${t.muted};
          border: 1px solid ${t.creamDeep}; cursor: pointer;
          transition: all 0.2s;
        }
        .cta-back:hover { border-color: ${t.sandDark}; color: ${t.charcoal}; }

        .step-dot {
          width: 8px; height: 8px; border-radius: 50%;
          transition: all 0.3s ease;
        }

        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .fade-up { animation: fadeUp 0.5s ease forwards; }

        @media (max-width: 768px) {
          .page-grid { grid-template-columns: 1fr !important; }
          .sp { padding-left: 20px !important; padding-right: 20px !important; }
          .form-row { grid-template-columns: 1fr !important; }
          .info-panel { position: static !important; height: auto !important; padding: 48px 20px !important; }
          .form-panel { padding: 40px 20px 60px !important; border-right: none !important; border-bottom: 1px solid ${t.creamDeep} !important; }
          .step-indicator { flex-wrap: wrap; gap: 15px !important; }
          .step-item span { font-size: 9px !important; }
          .step-line { display: none !important; }
        }
      `}</style>

      <div className="page-grid sp" style={{
        display: "grid", gridTemplateColumns: "1fr 420px", gap: 0,
        maxWidth: 1400, margin: "0 auto", minHeight: "calc(100vh - 80px)",
      }}>
        {/* ── LEFT — FORM PANEL ─────────────────────────────── */}
        <div className="form-panel" style={{ padding: "64px 56px 80px", background: t.cream, borderRight: `1px solid ${t.creamDeep}` }}>
          {submitted ? (
            <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: 480, textAlign: "center", padding: "40px 0" }}>
              <div style={{ width: 72, height: 72, borderRadius: "50%", background: t.creamDark, border: `1px solid ${t.sand}`, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 32 }}>
                <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 32, color: t.gold }}>✦</span>
              </div>
              <Label>Enquiry Received</Label>
              <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(32px,4vw,48px)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", color: t.charcoal, lineHeight: 1.1, marginBottom: 20 }}>
                Thank You,<br /><span style={{ fontWeight: 300, fontStyle: "italic" }}>{form.name.split(" ")[0] || "Traveller"}</span>
              </h2>
              <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 15, fontWeight: 300, color: t.muted, lineHeight: 1.82, maxWidth: 420, marginBottom: 40 }}>
                We've received your enquiry and will be in touch within 24 hours with ideas, availability, and a no-obligation proposal tailored to your trip.
              </p>
              <Link to="/" className="cta-primary" style={{ width: "auto" }}>Back to Home</Link>
            </div>
          ) : (
            <div className="fade-up">
              <div style={{ marginBottom: 48 }}>
                <Label>Start Here</Label>
                <h1 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(36px,4.5vw,56px)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 1.0, color: t.charcoal, marginBottom: 16 }}>
                  Tell Us About<br /><span style={{ fontWeight: 300, fontStyle: "italic" }}>Your Dream Trip</span>
                </h1>
                <p style={{ fontFamily: "'Jost', sans-serif", fontSize: 14, fontWeight: 300, color: t.muted, lineHeight: 1.78, maxWidth: 480 }}>
                  A few details is all we need. We'll come back within 24 hours with a personalised proposal — no obligations.
                </p>
              </div>

              {/* Step indicator */}
              <div className="step-indicator" style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 48 }}>
                {[1, 2, 3].map(s => (
                  <div key={s} className="step-item" style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div className="step-dot" style={{ background: step >= s ? t.charcoal : t.creamDeep, width: step === s ? 10 : 8, height: step === s ? 10 : 8 }} />
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, fontWeight: 500, letterSpacing: "0.18em", textTransform: "uppercase", color: step >= s ? t.charcoal : t.sandDark }}>
                        {s === 1 ? "Your Details" : s === 2 ? "Your Trip" : "Final Details"}
                      </span>
                    </div>
                    {s < 3 && <div className="step-line" style={{ width: 28, height: 1, background: step > s ? t.charcoal : t.creamDeep, transition: "background 0.3s" }} />}
                  </div>
                ))}
              </div>

              <form name="enquiry" method="POST" data-netlify="true" onSubmit={handleSubmit}>
                <input type="hidden" name="form-name" value="enquiry" />
                {step === 1 && (
                  <div className="fade-up">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: t.gold, marginBottom: 28 }}>Step 1 of 3 — About You</div>
                    <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={labelStyle}>Full Name *</label>
                        <input className="ow-input" style={inputStyle(errors.name)} placeholder="Jane Smith" value={form.name} onChange={e => set("name", e.target.value)} />
                        {errors.name && <span style={errorStyle}>{errors.name}</span>}
                      </div>
                      <div>
                        <label style={labelStyle}>Email Address *</label>
                        <input className="ow-input" type="email" style={inputStyle(errors.email)} placeholder="jane@email.com" value={form.email} onChange={e => set("email", e.target.value)} />
                        {errors.email && <span style={errorStyle}>{errors.email}</span>}
                      </div>
                    </div>
                    <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 16 }}>
                      <div>
                        <label style={labelStyle}>Phone Number</label>
                        <input className="ow-input" style={inputStyle(false)} placeholder="+27 62 138 0622" value={form.phone} onChange={e => set("phone", e.target.value)} />
                      </div>
                      <div>
                        <label style={labelStyle}>Country of Residence</label>
                        <input className="ow-input" style={inputStyle(false)} placeholder="e.g. South Africa, UK, USA" value={form.country} onChange={e => set("country", e.target.value)} />
                      </div>
                    </div>
                    <div style={{ marginBottom: 16 }}>
                      <label style={labelStyle}>How Did You Hear About Us?</label>
                      {pillSelect(HOW_HEARD, "howHeard")}
                    </div>
                    <div style={{ marginTop: 36, display: "flex", gap: 14, alignItems: "center" }}>
                      <button type="button" className="cta-primary" onClick={nextStep} style={{ width: "auto", padding: "14px 48px" }}>Continue →</button>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="fade-up">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: t.gold, marginBottom: 28 }}>Step 2 of 3 — Your Trip</div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={labelStyle}>What type of experience are you interested in? *</label>
                      {pillSelect(TOUR_TYPES, "tourType")}
                      {errors.tourType && <span style={errorStyle}>{errors.tourType}</span>}
                    </div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={labelStyle}>How many people in your group? *</label>
                      {pillSelect(GROUP_SIZES, "groupSize")}
                      {errors.groupSize && <span style={errorStyle}>{errors.groupSize}</span>}
                    </div>
                    <div className="form-row" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 24 }}>
                      <div>
                        <label style={labelStyle}>When are you thinking of travelling?</label>
                        <input className="ow-input" style={inputStyle(false)} placeholder="e.g. July 2026, flexible" value={form.travelMonth} onChange={e => set("travelMonth", e.target.value)} />
                      </div>
                      <div>
                        <label style={labelStyle}>How long is your trip?</label>
                        <input className="ow-input" style={inputStyle(false)} placeholder="e.g. 7 days, 2 weeks" value={form.duration} onChange={e => set("duration", e.target.value)} />
                      </div>
                    </div>
                    <div style={{ marginTop: 36, display: "flex", gap: 14 }}>
                      <button type="button" className="cta-back" onClick={() => setStep(1)}>← Back</button>
                      <button type="button" className="cta-primary" onClick={nextStep} style={{ width: "auto", padding: "14px 48px", flex: 1 }}>Continue →</button>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="fade-up">
                    <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 13, fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: t.gold, marginBottom: 28 }}>Step 3 of 3 — Your Story</div>
                    <div style={{ marginBottom: 24 }}>
                      <label style={labelStyle}>Tell us about your dream trip</label>
                      <textarea className="ow-input ow-textarea" style={{ ...inputStyle(false), display: "block" }} placeholder="Where have you always wanted to go? What kind of experience are you looking for — adventure, relaxation, culture, wildlife? Any special occasions we should know about?" value={form.message} onChange={e => set("message", e.target.value)} rows={6} />
                    </div>

                    {/* Summary card */}
                    <div style={{ background: t.offWhite, border: `1px solid ${t.creamDeep}`, padding: "24px", marginBottom: 24 }}>
                      <Label>Your Enquiry Summary</Label>
                      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px 24px" }}>
                        {[
                          ["Name", form.name],
                          ["Email", form.email],
                          ["Phone", form.phone || "—"],
                          ["Country", form.country || "—"],
                          ["Tour Type", form.tourType || "—"],
                          ["Group Size", form.groupSize || "—"],
                          ["Travel Dates", form.travelMonth || "—"],
                          ["Duration", form.duration || "—"],
                        ].map(([k, v]) => (
                          <div key={k}>
                            <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 10, color: t.sandDark, letterSpacing: "0.1em", textTransform: "uppercase" }}>{k}</span>
                            <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 400, color: t.charcoal, marginTop: 1 }}>{v || "—"}</div>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Newsletter opt-in */}
                    <div style={{ display: "flex", alignItems: "flex-start", gap: 12, marginBottom: 28, cursor: "pointer" }} onClick={() => set("newsletter", !form.newsletter)}>
                      <div style={{ width: 18, height: 18, flexShrink: 0, border: `1px solid ${form.newsletter ? t.charcoal : t.sand}`, background: form.newsletter ? t.charcoal : "transparent", display: "flex", alignItems: "center", justifyContent: "center", marginTop: 1, transition: "all 0.2s" }}>
                        {form.newsletter && <span style={{ color: t.white, fontSize: 10 }}>✓</span>}
                      </div>
                      <span style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 300, color: t.muted, lineHeight: 1.6 }}>Keep me updated with travel inspiration and new itineraries from On a Whim.</span>
                    </div>

                    <div style={{ display: "flex", gap: 14 }}>
                      <button type="button" className="cta-back" onClick={() => setStep(2)}>← Back</button>
                      <button type="submit" className="cta-primary" style={{ flex: 1, padding: "14px 0" }}>Send My Enquiry ✦</button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          )}
        </div>

        {/* ── RIGHT — INFO PANEL ────────────────────────────── */}
        <div className="info-panel" style={{ background: t.charcoal, padding: "64px 48px", color: t.white, position: "sticky", top: 80, height: "calc(100vh - 80px)", overflowY: "auto" }}>
          <Fade>
            <Label light>Why Enquire With Us</Label>
            <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(28px,3vw,38px)", fontWeight: 600, letterSpacing: "0.05em", textTransform: "uppercase", lineHeight: 1.05, color: t.white, marginBottom: 36 }}>Your Journey<br /><span style={{ fontWeight: 300, fontStyle: "italic" }}>Starts Here</span></h2>
          </Fade>
          <div style={{ marginBottom: 44 }}>
            {[
              { symbol: "✦", title: "Response within 24 hours", body: "A dedicated travel expert will respond to your enquiry personally — not an automated system." },
              { symbol: "◇", title: "Personalised to you", body: "Every proposal we send is built from scratch around your dates, group, and travel style." },
              { symbol: "○", title: "No obligation", body: "Enquiring costs nothing. We'll send you ideas and a proposal — you decide from there." },
              { symbol: "—", title: "IATA TIDS Accredited", body: "Recognised by airlines and tourism bodies globally as a trusted, professional operator." },
            ].map((item, i) => (
              <Fade key={i} delay={i * 0.08}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 24, paddingBottom: 24, borderBottom: i < 3 ? "1px solid rgba(255,255,255,0.07)" : "none" }}>
                  <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 20, fontWeight: 300, color: t.gold, flexShrink: 0, width: 20, textAlign: "center", marginTop: 2 }}>{item.symbol}</div>
                  <div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 13, fontWeight: 500, color: t.white, marginBottom: 4, letterSpacing: "0.03em" }}>{item.title}</div>
                    <div style={{ fontFamily: "'Jost', sans-serif", fontSize: 12, fontWeight: 300, color: "rgba(255,255,255,0.42)", lineHeight: 1.68 }}>{item.body}</div>
                  </div>
                </div>
              </Fade>
            ))}
          </div>
          <Fade delay={0.2}>
            <div style={{ marginTop: 28, marginBottom: 28 }}>
              <Label light>Destinations We Cover</Label>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["Cape Town", "Garden Route", "Kruger & Safaris", "KwaZulu-Natal", "Victoria Falls", "Zambia", "Botswana", "Namibia", "Zimbabwe"].map(dest => (
                  <span key={dest} style={{ fontFamily: "'Jost', sans-serif", fontSize: 11, fontWeight: 300, letterSpacing: "0.06em", color: "rgba(255,255,255,0.45)", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.08)" }}>{dest}</span>
                ))}
              </div>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}
