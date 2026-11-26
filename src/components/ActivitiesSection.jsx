import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, ShieldCheck, Clock, Sparkles } from 'lucide-react';
import { ACTIVITIES } from '../data/homeData';

const ACTIVITY_EXPERIENCES = [
  {
    id: 'scuba',
    title: 'Scuba Diving',
    spot: 'Havelock Island • North Bay',
    tag: 'Non-Swimmer Friendly',
    duration: '45–60 Mins',
    highlight: 'Certified PADI / SSI Instructors',
    image: 'https://gkmgrandandaman.com/assets/img/gallery/e41bc6b159a2f2e4.jpeg',
    desc: 'Descend into crystal-clear Andaman coral gardens alongside vibrant reef fish with one-on-one certified dive masters and underwater photos.'
  },
  {
    id: 'snorkelling',
    title: 'Snorkelling',
    spot: 'Elephant Beach • Bharatpur',
    tag: 'Coral Reefs',
    duration: '30–45 Mins',
    highlight: 'Full Safety Gear Included',
    image: 'https://gkmgrandandaman.com/assets/img/activities/Activity_1574338676.jpg',
    desc: 'Glide effortlessly over sunlit shallow coral reefs in Havelock and Neil Island — ideal for couples, families, and first-time explorers.'
  },
  {
    id: 'seawalk',
    title: 'Sea Walking',
    spot: 'North Bay • Elephant Beach',
    tag: 'Ocean Floor Walk',
    duration: '30 Mins',
    highlight: 'Zero Swimming Needed',
    image: 'https://gkmgrandandaman.com/assets/img/activities/Activity_1574338742.jpg',
    desc: 'Walk directly along the sandy ocean floor wearing a panoramic oxygen helmet while colourful tropical fish swim right past your visor.'
  },
  {
    id: 'glassboat',
    title: 'Glass Bottom Boat',
    spot: 'North Bay • Neil Island',
    tag: 'Family Favorite',
    duration: '30–40 Mins',
    highlight: 'Dry Viewing for All Ages',
    image: 'https://gkmgrandandaman.com/assets/img/activities/Activity_1644386043.jpg',
    desc: 'Admire blooming coral reefs and marine life through a crystal-clear glass hull without getting wet — perfect for kids and seniors.'
  },
  {
    id: 'parasailing',
    title: 'Parasailing',
    spot: "Corbyn's Cove • Havelock",
    tag: 'Aerial Adventure',
    duration: '15–20 Mins',
    highlight: '360° Island Coastline Views',
    image: 'https://gkmgrandandaman.com/assets/img/activities/Activity_1644386388.jpg',
    desc: 'Lift off above emerald bays and turquoise reefs towed by a speedboat for an exhilarating bird’s-eye view of the Andaman coastline.'
  },
  {
    id: 'jetski',
    title: 'Jet Ski Ride',
    spot: "Corbyn's Cove • Elephant Beach",
    tag: 'High Thrill',
    duration: '15–20 Mins',
    highlight: 'Instructor-Guided Ride',
    image: 'https://gkmgrandandaman.com/assets/img/gallery/11b72effe4b9db5c.jpeg',
    desc: 'Carve across sparkling Andaman waves on a high-powered jet ski with trained coastal instructors ensuring safety and pure adrenaline.'
  }
];

export default function ActivitiesSection({ onOpenModal, onOpenBooking }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeIdx, setActiveIdx] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node || typeof IntersectionObserver === 'undefined') {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        } else if (entry.boundingClientRect.top > window.innerHeight * 0.85) {
          setVisible(false);
        }
      },
      { threshold: 0.12, rootMargin: '0px 0px -48px 0px' }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(() => {
      setActiveIdx((prev) => (prev + 1) % ACTIVITY_EXPERIENCES.length);
    }, 5500);
    return () => clearInterval(timer);
  }, [paused]);

  const current = ACTIVITY_EXPERIENCES[activeIdx];

  return (
    <section
      id="experiences"
      ref={sectionRef}
      className={`act-stage-section ${visible ? 'act-stage-visible' : ''}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="container act-stage-inner">
        {/* Centered Editorial Header */}
        <header className="act-stage-header act-anim aa-d1">
          <div className="act-arch-eyebrow">
            <span className="act-eyebrow-line" />
            <span>GKM GRAND • PORT BLAIR, HAVELOCK &amp; NEIL</span>
            <span className="act-eyebrow-line" />
          </div>
          <h2 className="act-arch-title">
            GKM Grand Andaman <em>Water Activities</em>
          </h2>
          <p className="act-stage-sub">
            Certified marine adventures arranged by Hotel GKM Grand &amp; Hotel Guru International
            across Port Blair, Havelock &amp; Neil Island.
          </p>
        </header>

        {/* Clean Side-by-Side Split Marine Showcase (Unobstructed Photo Left | Editorial Panel Right) */}
        <div className="act-split-card act-anim aa-d2">
          {/* Left: 100% Bright Unobstructed Marine Photo */}
          <div className="act-split-media">
            {ACTIVITY_EXPERIENCES.map((item, idx) => (
              <img
                key={item.id}
                src={item.image}
                alt={item.title}
                className={`act-cinema-img ${idx === activeIdx ? 'active' : ''}`}
                loading="lazy"
              />
            ))}
            <div className="act-cinema-counter">
              <strong>0{activeIdx + 1}</strong>
              <span>/ 0{ACTIVITY_EXPERIENCES.length}</span>
            </div>
          </div>

          {/* Right: Clean Solid Deep-Teal Editorial Panel */}
          <div key={current.id} className="act-split-panel act-panel-pop">
            <span className="act-cinema-tag">
              <Sparkles size={12} /> {current.tag}
            </span>

            <h3 className="act-cinema-title">{current.title}</h3>

            <p className="act-cinema-spot">
              <MapPin size={13} color="#4FD1C5" />
              <span>{current.spot}</span>
            </p>

            <p className="act-cinema-desc">{current.desc}</p>

            <div className="act-cinema-meta">
              <span>
                <Clock size={13} color="#7CE8DF" /> {current.duration}
              </span>
              <span>
                <ShieldCheck size={13} color="#7CE8DF" /> {current.highlight}
              </span>
            </div>

            <div className="act-cinema-actions">
              <button
                type="button"
                className="act-btn-gold"
                onClick={() => onOpenBooking(`${current.title} — ${current.spot}`)}
              >
                <span>Book {current.title}</span>
                <ArrowRight size={14} className="btn-arrow" />
              </button>
              <button
                type="button"
                className="act-btn-link"
                onClick={() => onOpenModal('activities', ACTIVITIES)}
              >
                View All Activities
              </button>
            </div>
          </div>
        </div>

        {/* Bottom 6 Interactive Circular Marine Medallions */}
        <div
          className="act-medallion-dock act-anim aa-d2"
          role="tablist"
          aria-label="Choose a water activity"
        >
          {ACTIVITY_EXPERIENCES.map((item, idx) => {
            const isActive = idx === activeIdx;
            return (
              <button
                key={item.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`act-medallion-btn ${isActive ? 'active' : ''}`}
                onMouseEnter={() => setActiveIdx(idx)}
                onClick={() => setActiveIdx(idx)}
              >
                <span className="act-medallion-ring">
                  <img src={item.image} alt={item.title} loading="lazy" />
                </span>
                <span className="act-medallion-label">{item.title}</span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
