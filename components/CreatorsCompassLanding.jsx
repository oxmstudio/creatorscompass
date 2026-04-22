const SparklesIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 3l1.8 4.2L18 9l-4.2 1.8L12 15l-1.8-4.2L6 9l4.2-1.8L12 3z" />
    <path d="M5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16z" />
    <path d="M19 14l1.2 2.8L23 18l-2.8 1.2L19 22l-1.2-2.8L15 18l2.8-1.2L19 14z" />
  </svg>
);

const MenuIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const ArrowRightIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
);

const WandIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M15 4V2" />
    <path d="M15 16v-2" />
    <path d="M8 9h2" />
    <path d="M20 9h2" />
    <path d="M17.8 6.2l1.4-1.4" />
    <path d="M17.8 11.8l1.4 1.4" />
    <path d="M12.2 6.2l-1.4-1.4" />
    <path d="M3 21l9.4-9.4" />
    <path d="M14.5 6.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5z" />
  </svg>
);

const BookIcon = ({ size = 16, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
    <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
  </svg>
);

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,300;0,400;0,500;0,600;1,300;1,400&family=Source+Serif+4:ital,wght@0,300;0,400;1,300;1,400&display=swap');

  :root {
    --font-display: 'Poppins', sans-serif;
    --font-serif: 'Source Serif 4', serif;
  }

  * { box-sizing: border-box; margin: 0; padding: 0; }

  body {
    font-family: var(--font-display);
    overflow: hidden;
    height: 100vh;
  }

  .liquid-glass {
    background: rgba(255,255,255,0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(4px);
    -webkit-backdrop-filter: blur(4px);
    border: none;
    box-shadow: inset 0 1px 1px rgba(255,255,255,0.1);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1.4px;
    border-radius: inherit;
    background: linear-gradient(
      180deg,
      rgba(255,255,255,0.45) 0%,
      rgba(255,255,255,0.15) 20%,
      transparent 40%,
      transparent 60%,
      rgba(255,255,255,0.15) 80%,
      rgba(255,255,255,0.45) 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }

  .liquid-glass-strong {
    background: rgba(255,255,255,0.01);
    background-blend-mode: luminosity;
    backdrop-filter: blur(50px);
    -webkit-backdrop-filter: blur(50px);
    border: none;
    box-shadow:
      4px 4px 4px rgba(0,0,0,0.05),
      inset 0 1px 1px rgba(255,255,255,0.15);
    position: relative;
    overflow: hidden;
  }

  .liquid-glass-strong::before {
    content: '';
    position: absolute;
    inset: 0;
    padding: 1.4px;
    border-radius: inherit;
    background: linear-gradient(
      180deg,
      rgba(255,255,255,0.5) 0%,
      rgba(255,255,255,0.2) 20%,
      transparent 40%,
      transparent 60%,
      rgba(255,255,255,0.2) 80%,
      rgba(255,255,255,0.5) 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    z-index: 1;
  }

  .root {
    position: relative;
    width: 100vw;
    height: 100vh;
    display: flex;
    overflow: hidden;
    background: #0f172a;
  }

  .video-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .video-tint {
    position: absolute;
    inset: 0;
    z-index: 1;
    pointer-events: none;
    background:
      radial-gradient(circle at top left, rgba(255,255,255,0.12), transparent 35%),
      radial-gradient(circle at bottom right, rgba(255,255,255,0.08), transparent 30%),
      linear-gradient(135deg, rgba(15,23,42,0.18) 0%, rgba(30,41,59,0.12) 40%, rgba(49,46,129,0.16) 100%);
  }

  .panels {
    position: relative;
    z-index: 10;
    display: flex;
    width: 100%;
    height: 100%;
  }

  .left-panel {
    width: 52%;
    height: 100%;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .left-glass-overlay {
    position: absolute;
    inset: 1.5rem;
    border-radius: 1.5rem;
    z-index: 0;
  }

  .left-content {
    position: relative;
    z-index: 10;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  .nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1rem;
  }

  .nav-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }

  .logo-circle {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav-brand {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.25rem;
    letter-spacing: -0.05em;
    color: white;
  }

  .menu-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.4rem 0.9rem;
    border-radius: 9999px;
    border: none;
    background: transparent;
    color: white;
    font-family: var(--font-display);
    font-size: 0.8rem;
    cursor: pointer;
    transition: transform 0.2s;
  }

  .menu-btn:hover { transform: scale(1.05); }
  .menu-btn:active { transform: scale(0.95); }

  .hero-center {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    padding: 1rem 1.5rem;
    gap: 1.5rem;
  }

  .hero-logo {
    width: 72px;
    height: 72px;
    border-radius: 50%;
    background: rgba(255,255,255,0.12);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hero-h1 {
    font-family: var(--font-display);
    font-weight: 500;
    font-size: clamp(2.6rem, 5vw, 3.8rem);
    line-height: 1.05;
    letter-spacing: -0.05em;
    color: white;
  }

  .hero-h1 em {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 300;
    color: rgba(255,255,255,0.8);
  }

  .cta-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0.7rem 1.4rem 0.7rem 1rem;
    border-radius: 9999px;
    border: none;
    background: transparent;
    color: white;
    font-family: var(--font-display);
    font-size: 0.85rem;
    font-weight: 500;
    cursor: pointer;
    transition: transform 0.2s;
    letter-spacing: 0.01em;
  }

  .cta-btn:hover { transform: scale(1.05); }
  .cta-btn:active { transform: scale(0.95); }

  .cta-icon {
    width: 28px;
    height: 28px;
    border-radius: 50%;
    background: rgba(255,255,255,0.15);
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .pills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }

  .pill {
    padding: 0.35rem 0.9rem;
    border-radius: 9999px;
    font-size: 0.7rem;
    font-family: var(--font-display);
    color: rgba(255,255,255,0.8);
    cursor: default;
    transition: transform 0.2s;
    letter-spacing: 0.02em;
  }

  .pill:hover { transform: scale(1.05); }

  .bottom-quote {
    padding: 1rem 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .quote-label {
    font-size: 0.65rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    font-family: var(--font-display);
  }

  .quote-text {
    font-family: var(--font-display);
    font-size: 0.95rem;
    font-weight: 400;
    color: rgba(255,255,255,0.85);
    line-height: 1.5;
  }

  .quote-text .serif {
    font-family: var(--font-serif);
    font-style: italic;
    font-weight: 300;
    color: rgba(255,255,255,0.7);
  }

  .quote-author {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 0.25rem;
  }

  .author-line {
    flex: 1;
    height: 1px;
    background: rgba(255,255,255,0.2);
  }

  .author-name {
    font-size: 0.6rem;
    letter-spacing: 0.15em;
    text-transform: uppercase;
    color: rgba(255,255,255,0.5);
    font-family: var(--font-display);
  }

  .right-panel {
    width: 48%;
    height: 100%;
    display: none;
    flex-direction: column;
    padding: 1.5rem;
    gap: 1rem;
  }

  @media (min-width: 1024px) {
    .right-panel { display: flex; }
  }

  .right-top {
    display: flex;
    align-items: center;
    justify-content: flex-end;
  }

  .contact-pill {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.55rem 0.9rem;
    border-radius: 9999px;
    color: rgba(255,255,255,0.9);
    font-family: var(--font-display);
    font-size: 0.72rem;
    text-decoration: none;
    transition: transform 0.2s;
  }

  .contact-pill:hover { transform: scale(1.04); }

  .contact-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(255,255,255,0.7);
    box-shadow: 0 0 12px rgba(255,255,255,0.35);
    flex-shrink: 0;
  }

  .community-card {
    width: 16rem;
    padding: 1rem;
    border-radius: 1rem;
    align-self: flex-end;
  }

  .community-title {
    font-family: var(--font-display);
    font-size: 0.8rem;
    font-weight: 500;
    color: white;
    margin-bottom: 0.35rem;
  }

  .community-desc {
    font-family: var(--font-display);
    font-size: 0.65rem;
    color: rgba(255,255,255,0.6);
    line-height: 1.5;
  }

  .feature-section {
    margin-top: auto;
    padding: 1rem;
    border-radius: 2.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.75rem;
  }

  .feature-row {
    display: flex;
    gap: 0.75rem;
  }

  .feature-card {
    flex: 1;
    padding: 1.1rem;
    border-radius: 1.5rem;
    display: flex;
    flex-direction: column;
    gap: 0.6rem;
  }

  .feature-icon-wrap {
    width: 32px;
    height: 32px;
    border-radius: 50%;
    background: rgba(255,255,255,0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: rgba(255,255,255,0.7);
  }

  .feature-title {
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 500;
    color: white;
  }

  .feature-desc {
    font-family: var(--font-display);
    font-size: 0.62rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.5;
  }

  .bottom-card {
    padding: 0.9rem 1rem;
    border-radius: 1.5rem;
    display: flex;
    align-items: center;
    gap: 0.9rem;
  }

  .flower-thumb {
    width: 80px;
    height: 56px;
    border-radius: 0.75rem;
    background: rgba(255,255,255,0.08);
    overflow: hidden;
    flex-shrink: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .flower-thumb svg {
    opacity: 0.3;
  }

  .bottom-card-content {
    flex: 1;
    min-width: 0;
  }

  .bottom-card-title {
    font-family: var(--font-display);
    font-size: 0.75rem;
    font-weight: 500;
    color: white;
    margin-bottom: 0.2rem;
  }

  .bottom-card-desc {
    font-family: var(--font-display);
    font-size: 0.62rem;
    color: rgba(255,255,255,0.5);
    line-height: 1.4;
  }

  .plus-btn {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    border: none;
    background: transparent;
    color: rgba(255,255,255,0.7);
    font-size: 1.2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: transform 0.2s;
    flex-shrink: 0;
    font-family: var(--font-display);
  }

  .plus-btn:hover { transform: scale(1.05); }
  .plus-btn:active { transform: scale(0.95); }

  @keyframes fadeUp {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to { opacity: 1; }
  }

  .anim-fade-up {
    animation: fadeUp 0.7s cubic-bezier(0.22,1,0.36,1) both;
  }

  .delay-1 { animation-delay: 0.1s; }
  .delay-2 { animation-delay: 0.2s; }
  .delay-3 { animation-delay: 0.35s; }
  .delay-4 { animation-delay: 0.5s; }
  .delay-5 { animation-delay: 0.65s; }
  .delay-6 { animation-delay: 0.8s; }

  .right-panel { animation: fadeIn 1s ease both 0.3s; }

  @media (max-width: 1023px) {
    .left-panel {
      width: 100%;
    }

    .hero-center {
      padding-right: 2rem;
    }

    .hero-h1 {
      font-size: clamp(2.2rem, 8vw, 3.4rem);
    }
  }

  @media (max-width: 640px) {
    .left-panel {
      padding: 1rem;
    }

    .left-glass-overlay {
      inset: 1rem;
    }

    .nav,
    .hero-center,
    .bottom-quote {
      padding-left: 1rem;
      padding-right: 1rem;
    }

    .pills {
      gap: 0.4rem;
    }

    .pill {
      font-size: 0.65rem;
    }
  }
`;

export default function CreatorsCompassLanding() {
  return (
    <>
      <style dangerouslySetInnerHTML={{ __html: styles }} />
      <div className="root">
        <video
          className="video-bg"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260315_073750_51473149-4350-4920-ae24-c8214286f323.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="video-tint" />

        <div className="panels">
          <div className="left-panel">
            <div className="left-glass-overlay liquid-glass-strong" />

            <div className="left-content">
              <nav className="nav anim-fade-up delay-1">
                <div className="nav-logo">
                  <div className="logo-circle">
                    <SparklesIcon size={14} color="rgba(255,255,255,0.8)" />
                  </div>
                  <span className="nav-brand">Creator&apos;s Compass</span>
                </div>
                <button className="menu-btn liquid-glass" style={{ borderRadius: '9999px' }}>
                  <MenuIcon size={14} />
                  Menu
                </button>
              </nav>

              <div className="hero-center">
                <div className="hero-logo anim-fade-up delay-2">
                  <SparklesIcon size={28} color="rgba(255,255,255,0.7)" />
                </div>

                <h1 className="hero-h1 anim-fade-up delay-3">
                  Guiding creators toward the <br />
                  <em>right partners for the vision</em>
                </h1>

                <button className="cta-btn liquid-glass-strong anim-fade-up delay-4" style={{ borderRadius: '9999px' }}>
                  <div className="cta-icon">
                    <ArrowRightIcon size={13} />
                  </div>
                  Start the Conversation
                </button>

                <div className="pills anim-fade-up delay-5">
                  {['Creative Partnerships', 'Vision Strategy', 'Project Facilitation'].map((label) => (
                    <div key={label} className="pill liquid-glass">
                      {label}
                    </div>
                  ))}
                </div>
              </div>

              <div className="bottom-quote anim-fade-up delay-6">
                <div className="quote-label">Creator-Led Consulting</div>
                <div className="quote-text">
                  We help creators clarify the destination, align the right collaborators, and move ideas from <span className="serif">spark to reality.</span>
                </div>
                <div className="quote-author">
                  <div className="author-line" />
                  <span className="author-name">Creator&apos;s Compass</span>
                  <div className="author-line" />
                </div>
              </div>
            </div>
          </div>

          <div className="right-panel">
            <div className="right-top">
              <a className="contact-pill liquid-glass" href="mailto:bg@creatorscompass.net">
                <span className="contact-dot" />
                bg@creatorscompass.net
              </a>
            </div>

            <div className="community-card liquid-glass" style={{ alignSelf: 'flex-end' }}>
              <div className="community-title">A strategic partner for bold creative work</div>
              <div className="community-desc">
                Creator&apos;s Compass connects artists, brands, producers, and operators so each project has the right people behind it from the start.
              </div>
            </div>

            <div className="feature-section liquid-glass">
              <div className="feature-row">
                <div className="feature-card liquid-glass">
                  <div className="feature-icon-wrap">
                    <WandIcon size={15} />
                  </div>
                  <div className="feature-title">Vision Mapping</div>
                  <div className="feature-desc">
                    We translate creative ideas into clear direction, scope, and partnership needs.
                  </div>
                </div>

                <div className="feature-card liquid-glass">
                  <div className="feature-icon-wrap">
                    <BookIcon size={15} />
                  </div>
                  <div className="feature-title">Partner Alignment</div>
                  <div className="feature-desc">
                    We identify the collaborators, vendors, and strategic allies best suited to bring the work to life.
                  </div>
                </div>
              </div>

              <div className="bottom-card liquid-glass">
                <div className="flower-thumb">
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                    <circle cx="20" cy="20" r="5" fill="rgba(255,255,255,0.6)" />
                    {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                      <ellipse
                        key={i}
                        cx="20"
                        cy="20"
                        rx="4"
                        ry="9"
                        fill="rgba(255,255,255,0.4)"
                        transform={`rotate(${deg} 20 20) translate(0 -10)`}
                      />
                    ))}
                  </svg>
                </div>

                <div className="bottom-card-content">
                  <div className="bottom-card-title">Facilitated Execution</div>
                  <div className="bottom-card-desc">
                    From introductions to momentum, we help keep the right creative team moving in the same direction.
                  </div>
                </div>

                <button className="plus-btn liquid-glass" style={{ borderRadius: '50%' }}>
                  +
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
