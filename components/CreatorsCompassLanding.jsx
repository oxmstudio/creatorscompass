export default function CreatorsCompassHero() {
  return (
    <>
      <style>{`
        @import url('https://api.fontshare.com/v2/css?f[]=general-sans@400,500,600&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #000;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          font-family: 'General Sans', sans-serif;
          -webkit-font-smoothing: antialiased;
        }

        .bg-video {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
        }

        .bg-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.50);
          z-index: 1;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 40px 20px;
        }

        .hero-inner {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
          text-align: center;
        }

        .hero-heading {
          max-width: 613px;
          font-size: 56px;
          font-weight: 500;
          line-height: 1.28;
          background: linear-gradient(144.5deg, #ffffff 28%, rgba(0,0,0,0) 115%);
          -webkit-background-clip: text;
          background-clip: text;
          -webkit-text-fill-color: transparent;
          color: transparent;
        }

        .hero-subtitle {
          max-width: 680px;
          font-size: 15px;
          font-weight: 400;
          color: rgba(255, 255, 255, 0.70);
          line-height: 1.65;
          margin-top: -16px;
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
          border-radius: 999px;
          padding: 11px 29px;
          font-family: 'General Sans', sans-serif;
          font-size: 14px;
          font-weight: 500;
          white-space: nowrap;
          background: #fff;
          color: #000;
          transition: opacity 0.2s;
        }

        .pill-btn:hover .pill-btn-inner {
          opacity: 0.88;
        }

        @media (max-width: 767px) {
          .hero-heading { font-size: 36px; }
        }
      `}</style>

      <section className="hero">
        <video
          className="bg-video"
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260217_030345_246c0224-10a4-422c-b324-070b7c0eceda.mp4"
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="bg-overlay" />

        <div className="hero-content">
          <div className="hero-inner">
            <h1 className="hero-heading">Where the Right People Find Each Other</h1>
            <p className="hero-subtitle">
              Creator's Compass connects founders, studios, and industry leaders with the partners,
              collaborators, and capital they need to grow — turning the right relationships into
              long-term strategic advantage.
            </p>
            <a href="mailto:bg@creatorscompass.net" className="pill-btn">
              <span className="pill-btn-inner">Contact Us</span>
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
