import React, { useCallback, useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronDown, RotateCcw } from 'lucide-react';
import { HERO_SLIDES } from '../data/homeData';

const DEER_VIDEO_URL = '/videos/hero-main.mp4';
const HOTEL_VIDEO_URL = '/videos/hero-video.mp4';

// Start sliding open the Hotel video from the right at 0:09 (9.0s) of the Deer video
const HOTEL_REVEAL_START_SEC = 9.0;
const HOTEL_SLIDE_DURATION_MS = 1250;

// Live caption cues synced to the Hotel GKM Grand video timestamps (0:02 Entrance -> 0:03 Reception Way -> 0:05 Sofa -> 0:09 Reception)
const HOTEL_VIDEO_CUES = [
  {
    step: '01',
    minSec: 0,
    label: 'Entrance',
    kicker: '01 · HOTEL GKM GRAND',
    titleMain: 'Grand',
    titleAccent: 'Entrance',
    sub: "Near Jogger’s Park, Nayagaon · Port Blair"
  },
  {
    step: '02',
    minSec: 3,
    label: 'Walkway',
    kicker: '02 · INSIDE THE HOTEL',
    titleMain: 'Reception',
    titleAccent: 'Walkway',
    sub: 'Calm coastal interiors & effortless island hospitality'
  },
  {
    step: '03',
    minSec: 5,
    label: 'Lounge',
    kicker: '03 · LOBBY LOUNGE',
    titleMain: 'Plush Sofa',
    titleAccent: 'Seating',
    sub: 'Serene lobby comfort before your Andaman journey'
  },
  {
    step: '04',
    minSec: 9,
    label: 'Reception',
    kicker: '04 · PERSONAL CONCIERGE',
    titleMain: 'Warm',
    titleAccent: 'Reception',
    sub: '24/7 front desk care, AC suites & island transfers'
  }
];

function getCueIndexForTime(sec) {
  let idx = 0;
  for (let i = 0; i < HOTEL_VIDEO_CUES.length; i++) {
    if (sec >= HOTEL_VIDEO_CUES[i].minSec) idx = i;
  }
  return idx;
}

export default function HeroSection() {
  const deerVideoRef = useRef(null);
  const hotelVideoRef = useRef(null);
  const hotelLayerRef = useRef(null);
  const hotelCopyRef = useRef(null);

  // 'idle' = centered hero text over Deer video's first frame | 'deer' = deer playing | 'hotel' = hotel video open
  const phaseRef = useRef('idle');
  const hotelSlideStartTsRef = useRef(0);
  const touchStartYRef = useRef(null);
  const lockUntilRef = useRef(0);
  const syncRafRef = useRef(0);

  const [phase, setPhase] = useState('idle');
  const [cueIdx, setCueIdx] = useState(0);
  const currentHero = HERO_SLIDES[0];
  const activeCue = HOTEL_VIDEO_CUES[cueIdx] || HOTEL_VIDEO_CUES[0];

  const stopSyncLoop = useCallback(() => {
    if (syncRafRef.current) {
      cancelAnimationFrame(syncRafRef.current);
      syncRafRef.current = 0;
    }
  }, []);

  const setHotelSlideProgress = useCallback((p) => {
    const clamped = Math.min(1, Math.max(0, p));
    // Smooth ease-out curve so the slide feels cinematic as the deer runs
    const eased = 1 - Math.pow(1 - clamped, 2.2);
    if (hotelLayerRef.current) {
      hotelLayerRef.current.style.transform = `translateX(${(1 - eased) * 100}%)`;
    }
    if (hotelCopyRef.current) {
      // Fade in the understated editorial bottom bar smoothly once the Hotel video is mostly open
      const copyP = Math.min(1, Math.max(0, (clamped - 0.55) / 0.45));
      hotelCopyRef.current.style.opacity = `${copyP}`;
      hotelCopyRef.current.style.transform = `translateY(${(1 - copyP) * 16}px)`;
    }
  }, []);

  const finishHotelReveal = useCallback(() => {
    stopSyncLoop();
    phaseRef.current = 'hotel';
    setPhase('hotel');
    setHotelSlideProgress(1);
    lockUntilRef.current = performance.now() + 260;

    const hotelVid = hotelVideoRef.current;
    if (hotelVid && hotelVid.paused) {
      hotelVid.play().catch(() => {});
    }
  }, [setHotelSlideProgress, stopSyncLoop]);

  const beginHotelSlide = useCallback(() => {
    if (hotelSlideStartTsRef.current > 0) return;
    hotelSlideStartTsRef.current = performance.now();

    const hv = hotelVideoRef.current;
    if (hv) {
      hv.currentTime = 0;
      setCueIdx(0);
      hv.play().catch(() => {});
    }

    const animateSlide = (now) => {
      if (phaseRef.current !== 'deer') return;
      const elapsed = now - hotelSlideStartTsRef.current;
      const p = Math.min(1, elapsed / HOTEL_SLIDE_DURATION_MS);
      setHotelSlideProgress(p);
      if (p < 1) {
        syncRafRef.current = requestAnimationFrame(animateSlide);
      } else {
        finishHotelReveal();
      }
    };

    syncRafRef.current = requestAnimationFrame(animateSlide);
  }, [finishHotelReveal, setHotelSlideProgress]);

  const startDeerSequence = useCallback(() => {
    stopSyncLoop();
    phaseRef.current = 'deer';
    hotelSlideStartTsRef.current = 0;
    setPhase('deer');
    setHotelSlideProgress(0);

    const deerVid = deerVideoRef.current;
    const hotelVid = hotelVideoRef.current;
    if (hotelVid) {
      hotelVid.pause();
      hotelVid.currentTime = 0;
    }

    if (deerVid) {
      deerVid.currentTime = 0;
      deerVid.play().catch(() => {});

      const watchDeerTime = () => {
        if (phaseRef.current !== 'deer') return;
        const vid = deerVideoRef.current;
        if (!vid) return;

        // Trigger smooth right-side Hotel video slide at exact 0:08 (8.0s) of the Deer video
        if (vid.currentTime >= HOTEL_REVEAL_START_SEC) {
          beginHotelSlide();
          return;
        }

        syncRafRef.current = requestAnimationFrame(watchDeerTime);
      };

      syncRafRef.current = requestAnimationFrame(watchDeerTime);
    }
  }, [beginHotelSlide, setHotelSlideProgress, stopSyncLoop]);

  const resetToCenterHero = useCallback(() => {
    stopSyncLoop();
    phaseRef.current = 'idle';
    hotelSlideStartTsRef.current = 0;
    setPhase('idle');
    setHotelSlideProgress(0);

    const deerVid = deerVideoRef.current;
    if (deerVid) {
      deerVid.pause();
      deerVid.currentTime = 0.01;
    }
    const hotelVid = hotelVideoRef.current;
    if (hotelVid) {
      hotelVid.pause();
      hotelVid.currentTime = 0;
    }
  }, [setHotelSlideProgress, stopSyncLoop]);

  // Trigger deer video on slight scroll from top; release to page scroll once Hotel video is open
  useEffect(() => {
    const onWheel = (e) => {
      if (window.scrollY > 8) return;
      if (e.deltaY === 0) return;

      const now = performance.now();
      const cur = phaseRef.current;

      if (e.deltaY > 0) {
        if (cur === 'idle') {
          e.preventDefault();
          lockUntilRef.current = now + 500;
          startDeerSequence();
          return;
        }
        if (cur === 'deer') {
          // Keep hero pinned while deer video plays & opens the hotel video
          e.preventDefault();
          return;
        }
        if (now < lockUntilRef.current) {
          e.preventDefault();
          return;
        }
        // Hotel video is fully open -> normal page scroll down to Booking Bar & About
        return;
      }

      // Scroll UP at top -> smoothly return to centered Hero typography
      if (e.deltaY < 0 && cur !== 'idle') {
        e.preventDefault();
        if (now < lockUntilRef.current) return;
        lockUntilRef.current = now + 450;
        resetToCenterHero();
      }
    };

    const onTouchStart = (e) => {
      if (window.scrollY <= 8 && e.touches.length === 1) {
        touchStartYRef.current = e.touches[0].clientY;
      } else {
        touchStartYRef.current = null;
      }
    };

    const onTouchMove = (e) => {
      if (touchStartYRef.current === null || window.scrollY > 8) return;
      const dy = touchStartYRef.current - e.touches[0].clientY;
      if (Math.abs(dy) < 16) return;

      const cur = phaseRef.current;
      if (dy > 0 && cur === 'idle') {
        e.preventDefault();
        touchStartYRef.current = null;
        startDeerSequence();
      } else if (dy > 0 && cur === 'deer') {
        e.preventDefault();
      } else if (dy < 0 && cur !== 'idle') {
        e.preventDefault();
        touchStartYRef.current = null;
        resetToCenterHero();
      }
    };

    const onKeyDown = (e) => {
      if (window.scrollY > 8) return;
      const tag = document.activeElement?.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;

      const cur = phaseRef.current;
      if ((e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') && cur === 'idle') {
        e.preventDefault();
        startDeerSequence();
      } else if ((e.key === 'ArrowUp' || e.key === 'PageUp') && cur !== 'idle') {
        e.preventDefault();
        resetToCenterHero();
      }
    };

    const onScroll = () => {
      const y = window.scrollY;
      const offscreen = y > window.innerHeight * 0.95;

      // If user jumps down via navbar link or scrollbar, finalize to hotel state cleanly
      if (y > 24 && phaseRef.current !== 'hotel') {
        finishHotelReveal();
      }

      // Auto-pause looping hotel video when off-screen to save GPU/battery
      const hv = hotelVideoRef.current;
      if (hv && phaseRef.current === 'hotel') {
        if (offscreen && !hv.paused) {
          hv.pause();
        } else if (!offscreen && hv.paused) {
          hv.play().catch(() => {});
        }
      }
    };

    window.addEventListener('wheel', onWheel, { passive: false });
    window.addEventListener('touchstart', onTouchStart, { passive: true });
    window.addEventListener('touchmove', onTouchMove, { passive: false });
    window.addEventListener('keydown', onKeyDown);
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('wheel', onWheel);
      window.removeEventListener('touchstart', onTouchStart);
      window.removeEventListener('touchmove', onTouchMove);
      window.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('scroll', onScroll);
      stopSyncLoop();
    };
  }, [finishHotelReveal, resetToCenterHero, startDeerSequence, stopSyncLoop]);

  const isStarted = phase !== 'idle';
  const isHotelOpen = phase === 'hotel';

  return (
    <section id="home" className="hero-frame-runway">
      <div className={`hero-frame-sticky ${isStarted ? 'is-scrubbing' : ''}`}>
        {/* 1. Deer Video (Forces immediate decode & paint of exact first frame on initial load via #t=0.05) */}
        <video
          ref={deerVideoRef}
          className="hero-video-bg"
          src={`${DEER_VIDEO_URL}#t=0.05`}
          muted
          playsInline
          preload="auto"
          onLoadedData={(e) => {
            if (phaseRef.current === 'idle') {
              e.currentTarget.currentTime = 0.05;
            }
          }}
          onEnded={beginHotelSlide}
        />

        <div className="hero-cinematic-scrim hero-entrance-scrim" aria-hidden="true" />

        {/* 2. Initial Centered Hero Typography & CTAs (Visible at rest over Deer first frame, hides on scroll) */}
        <div className="container hero-cinematic-inner hero-entrance-content">
          <div className="hero-center-stack hero-text-fade">
            <span className="hero-center-eyebrow">{currentHero.eyebrow}</span>

            <h1 className="hero-center-title">
              {currentHero.titleLine1}
              <br />
              <em>{currentHero.titleAccent}</em>
            </h1>

            <p className="hero-center-sub">{currentHero.subtitle}</p>

            <div className="hero-center-ctas">
              <a href="#hotels" className="hero-btn-primary">
                <span>Explore Our Hotels</span>
                <ArrowRight size={15} className="btn-arrow" />
              </a>
              <a href="#packages" className="hero-btn-outline">
                <span>Holiday Packages</span>
                <ArrowRight size={14} className="btn-arrow" />
              </a>
            </div>
          </div>
        </div>

        {/* 3. Hotel Video Layer (Slides open smoothly from the RIGHT side at 0:09 with unique asymmetric editorial alignment) */}
        <div
          className="hero-split-reveal"
          style={{
            opacity: isStarted ? 1 : 0,
            pointerEvents: isHotelOpen ? 'auto' : 'none'
          }}
        >
          <div
            ref={hotelLayerRef}
            className="hero-split-video-layer"
            style={{ transform: 'translateX(100%)', transition: 'none' }}
          >
            <video
              ref={hotelVideoRef}
              className="hero-split-video"
              src={HOTEL_VIDEO_URL}
              poster={currentHero.image}
              muted
              loop
              playsInline
              preload="auto"
              onTimeUpdate={(e) => {
                const nextIdx = getCueIndexForTime(e.currentTarget.currentTime);
                setCueIdx((prev) => (prev === nextIdx ? prev : nextIdx));
              }}
            />
            <div className="hero-split-video-scrim" aria-hidden="true" />
          </div>

          {/* Understated 5-Star Editorial Overlay synced live to Hotel video timestamps */}
          <div
            ref={hotelCopyRef}
            className="container hero-asymmetric-wrap"
            style={{ opacity: 0, transform: 'translateY(16px)', transition: 'none' }}
          >
            <div className="hero-coord-stamp">
              <span className="hero-coord-dot" />
              <span>NAYAGAON · PORT BLAIR · ANDAMAN ISLANDS</span>
            </div>

            <div className="hero-asymmetric-bottom hero-editorial-bar">
              <div key={activeCue.step} className="hero-asym-left hero-cue-fade">
                <span className="hero-asym-kicker">{activeCue.kicker}</span>
                <h2 className="hero-asym-title">
                  {activeCue.titleMain} <em>{activeCue.titleAccent}</em>
                </h2>
                <p className="hero-asym-caption">{activeCue.sub}</p>
              </div>

              <div className="hero-video-timeline" role="tablist" aria-label="Hotel tour chapters">
                {HOTEL_VIDEO_CUES.map((cue, idx) => (
                  <button
                    key={cue.step}
                    type="button"
                    role="tab"
                    aria-selected={cueIdx === idx}
                    className={`hero-timeline-item ${cueIdx === idx ? 'is-active' : ''}`}
                    onClick={() => {
                      const hv = hotelVideoRef.current;
                      if (hv) {
                        hv.currentTime = cue.minSec;
                        setCueIdx(idx);
                      }
                    }}
                  >
                    <span className="hero-timeline-bar" />
                    <span className="hero-timeline-lbl">{cue.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* At-Rest Scroll Prompt */}
        {phase === 'idle' && (
          <div className="hero-scrub-hud">
            <button type="button" className="hero-scrub-cue" onClick={startDeerSequence}>
              <span>Scroll to begin</span>
              <ChevronDown size={14} className="pkg-scroll-chevron" />
            </button>
          </div>
        )}

        {/* Skip button while Deer video plays / Replay once Hotel video is open */}
        {phase === 'deer' && (
          <button type="button" className="hero-replay-float" onClick={finishHotelReveal}>
            <span>Skip</span>
            <ArrowRight size={13} />
          </button>
        )}

        {isHotelOpen && (
          <button
            type="button"
            className="hero-replay-float"
            onClick={resetToCenterHero}
            aria-label="Replay intro"
          >
            <RotateCcw size={13} />
            <span>Replay Intro</span>
          </button>
        )}
      </div>
    </section>
  );
}
