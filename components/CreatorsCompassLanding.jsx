const focusAreas = [
  {
    title: "Strategic Partners",
    body: "Find operators, platforms, studios, brands, and builders who can unlock the next stage of your creative vision.",
  },
  {
    title: "Capital Alignment",
    body: "Connect with aligned backers, sponsors, and deal structures designed around long-term creative leverage.",
  },
  {
    title: "Creative Infrastructure",
    body: "Turn loose ambition into a launchable path with production partners, distribution channels, and growth systems.",
  },
];

const processSteps = [
  {
    eyebrow: "01",
    title: "Clarify the North Star",
    body: "We translate your creative ambition into a practical growth thesis, then define the partners needed to move it forward.",
  },
  {
    eyebrow: "02",
    title: "Map the Relationship Field",
    body: "We identify the people, companies, collaborators, and capital sources that make sense for the mission, not just the moment.",
  },
  {
    eyebrow: "03",
    title: "Open the Right Doors",
    body: "We help shape the positioning, outreach, and introduction flow so every conversation feels intentional and high-signal.",
  },
  {
    eyebrow: "04",
    title: "Activate the Partnership",
    body: "We support the path from first conversation to next step, keeping momentum, clarity, and strategic advantage intact.",
  },
];

const partnerTypes = [
  "Brands",
  "Studios",
  "Operators",
  "Investors",
  "Distributors",
  "Creative Teams",
  "Platforms",
  "Strategic Advisors",
];

const paths = [
  {
    title: "For founders",
    body: "Shape your offer, sharpen your story, and meet the partners that can help your company scale without diluting its soul.",
    items: ["Strategic introductions", "Capital readiness", "Partnership design"],
  },
  {
    title: "For studios",
    body: "Build a stronger creative ecosystem around your production, audience, and commercial goals.",
    items: ["Brand collaborations", "Distribution paths", "Creative deal flow"],
  },
  {
    title: "For artists",
    body: "Move from isolated talent to connected opportunity with people who understand the vision and can help carry it further.",
    items: ["Collaborator matching", "Project packaging", "Industry access"],
  },
];

export default function CreatorsCompassLanding() {
  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600,700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; }
        body { background: #000; }
        a { color: inherit; }

        .site {
          position: relative;
          min-height: 100vh;
          background: #000;
          color: #fff;
          font-family: 'General Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
          overflow: hidden;
        }

        .bg-video {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          object-fit: cover;
          z-index: 0;
          opacity: 0.82;
        }

        .bg-overlay {
          position: absolute;
          inset: 0 0 auto 0;
          height: 120vh;
          background:
            radial-gradient(circle at 50% 18%, rgba(255,255,255,0.10), transparent 32%),
            linear-gradient(180deg, rgba(0,0,0,0.46) 0%, rgba(0,0,0,0.78) 62%, #000 100%);
          z-index: 1;
          pointer-events: none;
        }

        .ambient-grid {
          position: absolute;
          inset: 0;
          z-index: 1;
          background-image:
            linear-gradient(rgba(255,255,255,0.035) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.035) 1px, transparent 1px);
          background-size: 64px 64px;
          mask-image: linear-gradient(to bottom, rgba(0,0,0,0.75), transparent 68%);
          pointer-events: none;
        }

        .nav {
          position: fixed;
          top: 20px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 50;
          width: min(1120px, calc(100% - 32px));
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          padding: 12px 14px 12px 18px;
          border: 1px solid rgba(255,255,255,0.13);
          border-radius: 999px;
          background: rgba(0,0,0,0.42);
          backdrop-filter: blur(24px);
          box-shadow: 0 18px 60px rgba(0,0,0,0.25);
        }

        .brand {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.01em;
          text-decoration: none;
          white-space: nowrap;
        }

        .brand-mark {
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          color: #000;
          background: linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.58) 100%);
          box-shadow: inset 0 0 20px rgba(255,255,255,0.7), 0 0 36px rgba(255,255,255,0.18);
        }

        .nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
          color: rgba(255,255,255,0.68);
          font-size: 13px;
        }

        .nav-links a {
          padding: 9px 12px;
          border-radius: 999px;
          text-decoration: none;
          transition: background 0.22s, color 0.22s;
        }

        .nav-links a:hover {
          color: #fff;
          background: rgba(255,255,255,0.08);
        }

        .pill-btn {
          position: relative;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          border: 0.6px solid rgba(255, 255, 255, 0.9);
          padding: 2px;
          cursor: pointer;
          text-decoration: none;
          overflow: hidden;
          background: transparent;
          flex-shrink: 0;
        }

        .pill-btn::before {
          content: '';
          position: absolute;
          top: -2px;
          left: 50%;
          transform: translateX(-50%);
          width: 60%;
          height: 12px;
          background: radial-gradient(ellipse at center top, rgba(255,255,255,0.55) 0%, transparent 80%);
          filter: blur(4px);
          z-index: 2;
          border-radius: 999px;
          pointer-events: none;
        }

        .pill-btn-inner {
          position: relative;
          z-index: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          border-radius: 999px;
          padding: 11px 24px;
          font-size: 14px;
          font-weight: 600;
          white-space: nowrap;
          background: #fff;
          color: #000;
          transition: opacity 0.2s, transform 0.2s;
        }

        .pill-btn:hover .pill-btn-inner {
          opacity: 0.88;
          transform: translateY(-1px);
        }

        .ghost-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 13px 20px;
          border: 1px solid rgba(255,255,255,0.16);
          background: rgba(255,255,255,0.045);
          color: rgba(255,255,255,0.84);
          text-decoration: none;
          font-size: 14px;
          font-weight: 600;
          transition: border-color 0.22s, background 0.22s, transform 0.22s;
        }

        .ghost-btn:hover {
          transform: translateY(-1px);
          border-color: rgba(255,255,255,0.34);
          background: rgba(255,255,255,0.09);
        }

        .hero {
          position: relative;
          z-index: 2;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 150px 20px 90px;
        }

        .hero-inner {
          width: min(1120px, 100%);
          display: grid;
          grid-template-columns: minmax(0, 1.08fr) minmax(300px, 0.72fr);
          align-items: end;
          gap: 60px;
        }

        .kicker {
          display: inline-flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 26px;
          padding: 8px 12px;
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 999px;
          background: rgba(255,255,255,0.055);
          color: rgba(255,255,255,0.78);
          font-size: 13px;
          font-weight: 500;
          backdrop-filter: blur(16px);
        }

        .kicker-dot {
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 22px rgba(255,255,255,0.95);
        }

        .hero-heading {
          max-width: 780px;
          font-size: clamp(48px, 8vw, 104px);
          font-weight: 500;
          line-height: 0.98;
          letter-spacing: -0.07em;
          background: linear-gradient(144.5deg, #ffffff 28%, rgba(255,255,255,0.24) 115%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .hero-subtitle {
          max-width: 680px;
          margin-top: 28px;
          font-size: clamp(16px, 1.5vw, 20px);
          font-weight: 400;
          color: rgba(255, 255, 255, 0.72);
          line-height: 1.65;
        }

        .hero-actions {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px;
          margin-top: 34px;
        }

        .hero-panel {
          position: relative;
          padding: 22px;
          border: 1px solid rgba(255,255,255,0.15);
          border-radius: 32px;
          background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(255,255,255,0.045));
          backdrop-filter: blur(24px);
          box-shadow: 0 30px 100px rgba(0,0,0,0.36);
          overflow: hidden;
        }

        .hero-panel::before {
          content: '';
          position: absolute;
          inset: -1px;
          background: radial-gradient(circle at 30% 0%, rgba(255,255,255,0.22), transparent 36%);
          pointer-events: none;
        }

        .panel-label {
          position: relative;
          color: rgba(255,255,255,0.52);
          font-size: 12px;
          letter-spacing: 0.18em;
          text-transform: uppercase;
        }

        .signal-list {
          position: relative;
          display: grid;
          gap: 12px;
          margin-top: 22px;
        }

        .signal-row {
          display: flex;
          justify-content: space-between;
          gap: 16px;
          padding: 15px;
          border: 1px solid rgba(255,255,255,0.1);
          border-radius: 20px;
          background: rgba(0,0,0,0.22);
        }

        .signal-row span:first-child {
          color: rgba(255,255,255,0.58);
          font-size: 13px;
        }

        .signal-row span:last-child {
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          text-align: right;
        }

        .section {
          position: relative;
          z-index: 2;
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
          padding: 100px 0;
        }

        .section-header {
          display: flex;
          align-items: end;
          justify-content: space-between;
          gap: 24px;
          margin-bottom: 34px;
        }

        .section-eyebrow {
          margin-bottom: 14px;
          color: rgba(255,255,255,0.48);
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 0.22em;
          text-transform: uppercase;
        }

        .section-title {
          max-width: 700px;
          font-size: clamp(32px, 5vw, 64px);
          font-weight: 500;
          line-height: 1.02;
          letter-spacing: -0.045em;
        }

        .section-copy {
          max-width: 420px;
          color: rgba(255,255,255,0.62);
          font-size: 15px;
          line-height: 1.75;
        }

        .focus-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .focus-card,
        .process-card,
        .path-card,
        .detail-card {
          position: relative;
          border: 1px solid rgba(255,255,255,0.12);
          background: linear-gradient(180deg, rgba(255,255,255,0.09), rgba(255,255,255,0.032));
          border-radius: 30px;
          overflow: hidden;
          transition: transform 0.28s ease, border-color 0.28s ease, background 0.28s ease;
        }

        .focus-card:hover,
        .process-card:hover,
        .path-card:hover,
        .detail-card:hover {
          transform: translateY(-6px);
          border-color: rgba(255,255,255,0.26);
          background: linear-gradient(180deg, rgba(255,255,255,0.13), rgba(255,255,255,0.045));
        }

        .focus-card {
          min-height: 275px;
          padding: 26px;
        }

        .focus-card::after {
          content: '';
          position: absolute;
          right: -35px;
          top: -35px;
          width: 130px;
          height: 130px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          filter: blur(8px);
        }

        .focus-number {
          width: 42px;
          height: 42px;
          display: grid;
          place-items: center;
          border-radius: 50%;
          background: rgba(255,255,255,0.09);
          color: rgba(255,255,255,0.76);
          font-size: 13px;
          margin-bottom: 78px;
        }

        .card-title {
          font-size: 22px;
          font-weight: 600;
          letter-spacing: -0.03em;
        }

        .card-copy {
          margin-top: 12px;
          color: rgba(255,255,255,0.62);
          font-size: 14px;
          line-height: 1.7;
        }

        .process-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }

        .process-card {
          padding: 24px;
          min-height: 250px;
        }

        .process-eyebrow {
          color: rgba(255,255,255,0.38);
          font-size: 12px;
          letter-spacing: 0.18em;
          margin-bottom: 72px;
        }

        .marquee-wrap {
          width: 100%;
          overflow: hidden;
          border-top: 1px solid rgba(255,255,255,0.1);
          border-bottom: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.035);
        }

        .marquee {
          display: flex;
          width: max-content;
          animation: drift 28s linear infinite;
        }

        .marquee span {
          padding: 22px 34px;
          color: rgba(255,255,255,0.68);
          font-size: clamp(18px, 2.4vw, 34px);
          letter-spacing: -0.035em;
          white-space: nowrap;
        }

        @keyframes drift {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .compass {
          display: grid;
          grid-template-columns: minmax(280px, 0.85fr) minmax(0, 1.15fr);
          gap: 18px;
          align-items: stretch;
        }

        .compass-orb {
          position: relative;
          min-height: 520px;
          border: 1px solid rgba(255,255,255,0.12);
          border-radius: 38px;
          background:
            radial-gradient(circle at center, rgba(255,255,255,0.16), transparent 24%),
            linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.025));
          overflow: hidden;
        }

        .compass-ring,
        .compass-ring::before,
        .compass-ring::after {
          position: absolute;
          content: '';
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.12);
        }

        .compass-ring {
          width: 250px;
          height: 250px;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%);
          animation: pulseRing 5s ease-in-out infinite;
        }

        .compass-ring::before {
          inset: -58px;
        }

        .compass-ring::after {
          inset: 58px;
          background: rgba(255,255,255,0.04);
        }

        .compass-line {
          position: absolute;
          top: 50%;
          left: 50%;
          width: 1px;
          height: 390px;
          background: linear-gradient(transparent, rgba(255,255,255,0.45), transparent);
          transform-origin: top;
          animation: rotateLine 12s linear infinite;
        }

        .compass-center {
          position: absolute;
          inset: 50% auto auto 50%;
          transform: translate(-50%, -50%);
          width: 98px;
          height: 98px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: #fff;
          color: #000;
          font-weight: 700;
          letter-spacing: -0.03em;
          box-shadow: 0 0 80px rgba(255,255,255,0.25);
        }

        @keyframes rotateLine {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulseRing {
          0%, 100% { opacity: 0.68; transform: translate(-50%, -50%) scale(1); }
          50% { opacity: 1; transform: translate(-50%, -50%) scale(1.04); }
        }

        .detail-stack {
          display: grid;
          gap: 12px;
        }

        .detail-card {
          padding: 0;
        }

        .detail-card summary {
          list-style: none;
          cursor: pointer;
          padding: 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          font-size: 21px;
          font-weight: 600;
          letter-spacing: -0.03em;
        }

        .detail-card summary::-webkit-details-marker { display: none; }

        .detail-card summary span {
          width: 34px;
          height: 34px;
          border-radius: 50%;
          display: grid;
          place-items: center;
          background: rgba(255,255,255,0.08);
          color: rgba(255,255,255,0.7);
          transition: transform 0.24s;
          flex: 0 0 auto;
        }

        .detail-card[open] summary span { transform: rotate(45deg); }

        .detail-card p {
          padding: 0 24px 24px;
          color: rgba(255,255,255,0.62);
          line-height: 1.72;
          font-size: 14px;
        }

        .path-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .path-card {
          padding: 28px;
          min-height: 360px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
        }

        .path-list {
          display: grid;
          gap: 10px;
          margin-top: 28px;
          list-style: none;
        }

        .path-list li {
          display: flex;
          align-items: center;
          gap: 10px;
          color: rgba(255,255,255,0.68);
          font-size: 14px;
        }

        .path-list li::before {
          content: '';
          width: 7px;
          height: 7px;
          border-radius: 50%;
          background: #fff;
          box-shadow: 0 0 16px rgba(255,255,255,0.75);
        }

        .cta {
          position: relative;
          z-index: 2;
          width: min(1120px, calc(100% - 40px));
          margin: 20px auto 80px;
          padding: clamp(36px, 7vw, 76px);
          border: 1px solid rgba(255,255,255,0.14);
          border-radius: 42px;
          background:
            radial-gradient(circle at 18% 0%, rgba(255,255,255,0.18), transparent 26%),
            linear-gradient(180deg, rgba(255,255,255,0.1), rgba(255,255,255,0.035));
          overflow: hidden;
        }

        .cta::after {
          content: '';
          position: absolute;
          right: -80px;
          bottom: -120px;
          width: 330px;
          height: 330px;
          border-radius: 50%;
          background: rgba(255,255,255,0.08);
          filter: blur(20px);
        }

        .cta-content {
          position: relative;
          z-index: 1;
          max-width: 760px;
        }

        .cta h2 {
          font-size: clamp(36px, 6vw, 72px);
          font-weight: 500;
          line-height: 1;
          letter-spacing: -0.055em;
        }

        .cta p {
          margin-top: 22px;
          max-width: 610px;
          color: rgba(255,255,255,0.66);
          line-height: 1.75;
          font-size: 16px;
        }

        .footer {
          position: relative;
          z-index: 2;
          width: min(1120px, calc(100% - 40px));
          margin: 0 auto;
          padding: 0 0 38px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 18px;
          color: rgba(255,255,255,0.42);
          font-size: 13px;
        }

        @media (max-width: 980px) {
          .hero-inner,
          .compass {
            grid-template-columns: 1fr;
          }

          .hero-panel {
            max-width: 520px;
          }

          .focus-grid,
          .path-grid {
            grid-template-columns: 1fr;
          }

          .process-grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .section-header {
            align-items: flex-start;
            flex-direction: column;
          }
        }

        @media (max-width: 720px) {
          .nav {
            top: 12px;
            border-radius: 26px;
            align-items: flex-start;
            flex-direction: column;
          }

          .nav-links {
            width: 100%;
            overflow-x: auto;
            padding-bottom: 2px;
          }

          .nav .pill-btn {
            width: 100%;
          }

          .nav .pill-btn-inner {
            width: 100%;
          }

          .hero {
            padding-top: 220px;
          }

          .hero-heading {
            letter-spacing: -0.055em;
          }

          .process-grid {
            grid-template-columns: 1fr;
          }

          .compass-orb {
            min-height: 380px;
          }

          .footer {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <main className="site">
        <video
          className="bg-video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="bg-overlay" />
        <div className="ambient-grid" />

        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="Creator's Compass home">
            <span className="brand-mark">✦</span>
            <span>Creator&apos;s Compass</span>
          </a>
          <div className="nav-links">
            <a href="#access">Access</a>
            <a href="#process">Process</a>
            <a href="#compass">Compass</a>
            <a href="#paths">Paths</a>
          </div>
          <a href="mailto:bg@creatorscompass.net" className="pill-btn">
            <span className="pill-btn-inner">Get Connected</span>
          </a>
        </nav>

        <section className="hero" id="top">
          <div className="hero-inner">
            <div>
              <div className="kicker"><span className="kicker-dot" /> Creative consulting for high-signal partnerships</div>
              <h1 className="hero-heading">Access For The Creative Visionary</h1>
              <p className="hero-subtitle">
                Creator&apos;s Compass connects founders, studios, artists, and industry leaders with the partners,
                collaborators, and capital they need to grow, turning the right relationships into long-term strategic advantage.
              </p>
              <div className="hero-actions">
                <a href="mailto:bg@creatorscompass.net" className="pill-btn">
                  <span className="pill-btn-inner">Start the Conversation <span aria-hidden="true">↗</span></span>
                </a>
                <a href="#process" className="ghost-btn">Explore the Method</a>
              </div>
            </div>

            <aside className="hero-panel" aria-label="Creator's Compass positioning snapshot">
              <p className="panel-label">Relationship Advantage</p>
              <div className="signal-list">
                <div className="signal-row"><span>Vision</span><span>Made legible</span></div>
                <div className="signal-row"><span>Partners</span><span>Curated by fit</span></div>
                <div className="signal-row"><span>Capital</span><span>Aligned with growth</span></div>
                <div className="signal-row"><span>Momentum</span><span>Built into next steps</span></div>
              </div>
            </aside>
          </div>
        </section>

        <section className="section" id="access">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">What we unlock</p>
              <h2 className="section-title">The right room changes the entire project.</h2>
            </div>
            <p className="section-copy">
              We help creative people and ambitious companies move from scattered opportunity to intentional access,
              with a strategy that respects the art and strengthens the business around it.
            </p>
          </div>

          <div className="focus-grid">
            {focusAreas.map((area, index) => (
              <article className="focus-card" key={area.title}>
                <div className="focus-number">0{index + 1}</div>
                <h3 className="card-title">{area.title}</h3>
                <p className="card-copy">{area.body}</p>
              </article>
            ))}
          </div>
        </section>

        <div className="marquee-wrap" aria-label="Partner ecosystem">
          <div className="marquee">
            {[...partnerTypes, ...partnerTypes].map((type, index) => (
              <span key={`${type}-${index}`}>{type}</span>
            ))}
          </div>
        </div>

        <section className="section" id="process">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">How it works</p>
              <h2 className="section-title">A calmer path from vision to valuable relationship.</h2>
            </div>
            <p className="section-copy">
              The goal is not more noise. The goal is precision, trust, and momentum with the people who can actually help the work travel farther.
            </p>
          </div>

          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.title}>
                <p className="process-eyebrow">{step.eyebrow}</p>
                <h3 className="card-title">{step.title}</h3>
                <p className="card-copy">{step.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section" id="compass">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Interactive compass</p>
              <h2 className="section-title">Use the signal stack to see where support is needed.</h2>
            </div>
            <p className="section-copy">
              Open each layer below to pressure-test the relationship gap around a project, campaign, company, or creative launch.
            </p>
          </div>

          <div className="compass">
            <div className="compass-orb" aria-hidden="true">
              <div className="compass-ring" />
              <div className="compass-line" />
              <div className="compass-center">CC</div>
            </div>

            <div className="detail-stack">
              <details className="detail-card" open>
                <summary>Positioning <span>+</span></summary>
                <p>What is the sharpest version of the opportunity, and why should the right partner care now?</p>
              </details>
              <details className="detail-card">
                <summary>Partner Fit <span>+</span></summary>
                <p>Who benefits from the creative vision becoming real, and who can add credibility, reach, capital, or execution strength?</p>
              </details>
              <details className="detail-card">
                <summary>Introduction Path <span>+</span></summary>
                <p>Which warm doors, strategic angles, and credibility signals make the first conversation feel natural instead of cold?</p>
              </details>
              <details className="detail-card">
                <summary>Activation <span>+</span></summary>
                <p>What should happen after the meeting so momentum does not evaporate into a polite follow-up fog?</p>
              </details>
            </div>
          </div>
        </section>

        <section className="section" id="paths">
          <div className="section-header">
            <div>
              <p className="section-eyebrow">Who it is for</p>
              <h2 className="section-title">Different visions, one operating principle: access should be intentional.</h2>
            </div>
            <p className="section-copy">
              Whether the next chapter needs money, collaborators, distribution, or strategic credibility, we help shape the bridge.
            </p>
          </div>

          <div className="path-grid">
            {paths.map((path) => (
              <article className="path-card" key={path.title}>
                <div>
                  <h3 className="card-title">{path.title}</h3>
                  <p className="card-copy">{path.body}</p>
                </div>
                <ul className="path-list">
                  {path.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="cta" id="contact">
          <div className="cta-content">
            <p className="section-eyebrow">Let the vision find its field</p>
            <h2>Bring the right people around the idea.</h2>
            <p>
              Send a brief note about what you are building, who you hope to reach, and what kind of partner would change the trajectory.
              Creator&apos;s Compass will help you turn that direction into a relationship map.
            </p>
            <div className="hero-actions">
              <a href="mailto:bg@creatorscompass.net" className="pill-btn">
                <span className="pill-btn-inner">bg@creatorscompass.net <span aria-hidden="true">↗</span></span>
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© {new Date().getFullYear()} Creator&apos;s Compass</span>
          <span>Creative consulting for founders, studios, artists, and industry leaders.</span>
        </footer>
      </main>
    </>
  );
}
