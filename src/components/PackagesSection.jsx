import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Calendar, Check, ChevronDown } from 'lucide-react';
import { PACKAGES } from '../data/homeData';

export default function PackagesSection({ onOpenModal, onOpenBooking }) {
  const runwayRef = useRef(null);
  const manualLockRef = useRef(false);
  const lockTimerRef = useRef(null);
  const [activeIdx, setActiveIdx] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const el = runwayRef.current;
      if (!el || window.innerWidth <= 1024) return;

      const rect = el.getBoundingClientRect();
      const scrollableDistance = el.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollableDistance);
      const progress = scrolled / scrollableDistance;
      setScrollProgress(progress);

      if (manualLockRef.current) return;

      const nextIdx = Math.min(
        PACKAGES.length - 1,
        Math.floor(progress * PACKAGES.length)
      );
      setActiveIdx(nextIdx);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
      if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    };
  }, []);

  const handleSelectPackage = (idx) => {
    setActiveIdx(idx);
    const el = runwayRef.current;
    if (!el || window.innerWidth <= 1024) return;

    const scrollableDistance = el.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return;

    manualLockRef.current = true;
    if (lockTimerRef.current) clearTimeout(lockTimerRef.current);
    lockTimerRef.current = setTimeout(() => {
      manualLockRef.current = false;
    }, 700);

    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    const targetScroll =
      sectionTop + ((idx + 0.12) / PACKAGES.length) * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  const activePkg = PACKAGES[activeIdx] || PACKAGES[0];

  return (
    <section id="packages" ref={runwayRef} className="pkg-scroll-runway">
      <div className="pkg-scroll-sticky">
        <div className="container pkg-scroll-container">
          {/* Top Header + Live Scroll Progress Indicator */}
          <header className="pkg-scroll-header">
            <div>
              <div className="pkg-bento-eyebrow">
                <span className="pkg-b-line" />
                <span>GKM GRAND • NAYAGAON, PORT BLAIR</span>
              </div>
              <h2 className="pkg-scroll-title">
                GKM Grand Port Blair <em>Holiday Packages</em>
              </h2>
            </div>

            <div className="pkg-scroll-status">
              <div className="pkg-scroll-hint">
                <span>Scroll or click a package</span>
                <ChevronDown size={14} className="pkg-scroll-chevron" />
              </div>
              <div className="pkg-scroll-counter-row">
                <span className="pkg-scroll-num">
                  <strong>0{activeIdx + 1}</strong> / 0{PACKAGES.length}
                </span>
                <div className="pkg-scroll-bar-track">
                  <div
                    className="pkg-scroll-bar-fill"
                    style={{
                      width: `${Math.max(
                        ((activeIdx + 1) / PACKAGES.length) * 100,
                        scrollProgress * 100
                      )}%`
                    }}
                  />
                </div>
              </div>
            </div>
          </header>

          {/* ONE BIG IMAGE STAGE + RIGHT-SIDE CORNER THUMBNAILS */}
          <div className="pkg-hero-stage">
            {/* Big Full-Bleed Crossfading Package Image */}
            <div className="pkg-hero-media">
              {PACKAGES.map((pkg, idx) => (
                <img
                  key={pkg.id}
                  src={pkg.image}
                  alt={pkg.title}
                  className={`pkg-big-img ${idx === activeIdx ? 'active' : ''}`}
                />
              ))}
              <div className="pkg-hero-scrim" />
            </div>

            {/* Top-Left Duration & Category Pills */}
            <div className="pkg-hero-top">
              <span className="pkg-gkm-dur-pill-inline">
                <Calendar size={13} />
                {activePkg.duration.replace(/[()]/g, '')}
              </span>
              <span className="pkg-hero-cat-pill">{activePkg.category}</span>
            </div>

            {/* Bottom Row: Warm-Ivory GKM Editorial Card (Left) + Corner Thumbnails (Right) */}
            <div className="pkg-hero-bottom">
              {/* Warm-Ivory Brand-Matched Package Details */}
              <div key={activePkg.id} className="pkg-ivory-float pkg-big-pop">
                <span className="pkg-ivory-route">
                  <MapPin size={13} color="#286037" />
                  {activePkg.places}
                </span>
                <h3 className="pkg-ivory-title">{activePkg.title}</h3>
                <p className="pkg-ivory-desc">{activePkg.summary}</p>

                <ul className="pkg-ivory-inclusions">
                  {activePkg.inclusions.slice(0, 2).map((inc) => (
                    <li key={inc}>
                      <Check size={13} color="#286037" />
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>

                <div className="pkg-gkm-actions">
                  <button
                    type="button"
                    className="btn btn--dark btn--sm"
                    onClick={() =>
                      onOpenBooking(`${activePkg.title} ${activePkg.duration}`)
                    }
                  >
                    <span>Book Now</span>
                    <ArrowRight size={14} className="btn-arrow" />
                  </button>
                  <button
                    type="button"
                    className="pkg-gkm-outline-btn"
                    onClick={() => onOpenModal('package', activePkg)}
                  >
                    View Itinerary
                  </button>
                </div>
              </div>

              {/* Right-Side Corner Multiple Package Thumbnails (Clickable + Scroll-Synced) */}
              <div
                className="pkg-right-corner-rail"
                role="tablist"
                aria-label="Choose Andaman Holiday Package"
              >
                {PACKAGES.map((pkg, idx) => {
                  const isCurrent = idx === activeIdx;
                  return (
                    <button
                      key={pkg.id}
                      type="button"
                      role="tab"
                      aria-selected={isCurrent}
                      className={`pkg-corner-card ${isCurrent ? 'active' : ''}`}
                      onClick={() => handleSelectPackage(idx)}
                    >
                      <img src={pkg.image} alt={pkg.title} loading="lazy" />
                      <div className="pkg-corner-card-scrim" />
                      <span className="pkg-corner-card-num">0{idx + 1}</span>
                      <div className="pkg-corner-card-info">
                        <strong>{pkg.title}</strong>
                        <span>{pkg.duration.replace(/[()]/g, '')}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
