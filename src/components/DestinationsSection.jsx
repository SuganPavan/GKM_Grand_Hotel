import React, { useEffect, useRef, useState } from 'react';
import {
  Landmark,
  TreePalm,
  Waves,
  Mountain,
  Compass
} from 'lucide-react';
import { DESTINATIONS } from '../data/homeData';

// 5 Iconic Nearby Andaman Destinations from Hotel GKM Grand, Port Blair
const NEARBY_ISLANDS = [
  {
    ...DESTINATIONS[0], // Port Blair (Top Left)
    icon: Landmark,
    slotClass: 'map-slot-1',
    tilt: '-6deg',
    delay: '0.05s'
  },
  {
    ...DESTINATIONS[1], // Havelock (Top Center)
    icon: TreePalm,
    slotClass: 'map-slot-2',
    tilt: '-3.5deg',
    delay: '0.14s'
  },
  {
    ...DESTINATIONS[2], // Neil Island (Top Right)
    icon: Waves,
    slotClass: 'map-slot-3',
    tilt: '1.5deg',
    delay: '0.22s'
  },
  {
    ...DESTINATIONS[4], // Baratang (Bottom Center-Left)
    icon: Mountain,
    slotClass: 'map-slot-4',
    tilt: '-3.5deg',
    delay: '0.3s'
  },
  {
    ...DESTINATIONS[5], // Diglipur (Bottom Right)
    icon: Compass,
    slotClass: 'map-slot-5',
    tilt: '-4.5deg',
    delay: '0.38s'
  }
];

export default function DestinationsSection({ onOpenModal }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

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

  return (
    <section
      id="destinations"
      ref={sectionRef}
      className={`explore-poster-section ${visible ? 'explore-poster-visible' : ''}`}
    >
      {/* Soft Sage-Ivory Botanical Relief Map Backdrop */}
      <div className="explore-poster-sky" aria-hidden="true" />
      <div className="explore-poster-map-texture" aria-hidden="true" />

      <div className="container explore-poster-inner">
        {/* GKM Grand Branded Compact Travel Header */}
        <header className="explore-header exp-anim ex-d1">
          <div className="explore-script-row">
            <span className="explore-script">Explore Around</span>
            <svg
              className="explore-flight-svg"
              viewBox="0 0 185 56"
              fill="none"
              aria-hidden="true"
            >
              <path
                d="M4 36 C32 45, 62 43, 78 26 C88 15, 72 6, 62 13 C52 21, 66 41, 96 39 C118 37, 138 28, 154 16"
                stroke="#163A22"
                strokeWidth="1.5"
                strokeDasharray="4 4"
                strokeLinecap="round"
              />
              <path
                d="M155 14 L173 8 L162 24 L159 18 L155 14 Z"
                fill="#163A22"
              />
              <path
                d="M159 18 L166 24"
                stroke="#163A22"
                strokeWidth="1.7"
                strokeLinecap="round"
              />
            </svg>
          </div>

          <h2 className="explore-big-title">GKM GRAND PORT BLAIR</h2>

          <div className="explore-sub-rule">
            <div className="explore-gold-line" />
            <p className="explore-tagline">
              NEARBY ANDAMAN DESTINATIONS • FROM NAYAGAON TO HAVELOCK &amp; BEYOND
            </p>
            <div className="explore-gold-line-star">
              <span className="explore-gold-line" />
              <span className="explore-star" aria-hidden="true">✦</span>
              <span className="explore-gold-line" />
            </div>
          </div>
        </header>

        {/* Compact 5-Polaroid Map Canvas */}
        <div className="explore-poster-canvas">
          {/* Forest-Green Dashed Route Connectors */}
          <svg
            className="explore-routes-svg"
            viewBox="0 0 1140 445"
            preserveAspectRatio="none"
            fill="none"
            aria-hidden="true"
          >
            {/* Port Blair -> Havelock */}
            <path
              d="M255 155 Q325 188 385 182"
              stroke="#173B23"
              strokeWidth="3.2"
              strokeDasharray="7 9"
              strokeLinecap="round"
              className="explore-dashed-path"
            />
            <circle cx="255" cy="155" r="7" fill="#173B23" stroke="#FFFFFF" strokeWidth="2" />

            {/* Havelock -> Junction Dot -> Neil Island */}
            <path
              d="M505 220 Q630 250 755 155"
              stroke="#173B23"
              strokeWidth="3.2"
              strokeDasharray="7 9"
              strokeLinecap="round"
              className="explore-dashed-path"
            />
            <circle cx="755" cy="155" r="7" fill="#173B23" stroke="#FFFFFF" strokeWidth="2" />

            {/* Junction Dot -> Diglipur */}
            <path
              d="M755 155 Q760 205 835 235"
              stroke="#173B23"
              strokeWidth="3.2"
              strokeDasharray="7 9"
              strokeLinecap="round"
              className="explore-dashed-path"
            />

            {/* Baratang -> Diglipur Lower Curve */}
            <path
              d="M645 395 Q685 335 775 348"
              stroke="#173B23"
              strokeWidth="3.2"
              strokeDasharray="7 9"
              strokeLinecap="round"
              className="explore-dashed-path"
            />
            <circle cx="645" cy="395" r="7" fill="#173B23" stroke="#FFFFFF" strokeWidth="2" />
            <circle cx="775" cy="348" r="7" fill="#173B23" stroke="#FFFFFF" strokeWidth="2" />
          </svg>

          {/* 5 Compact Tilted Polaroid Cards */}
          {NEARBY_ISLANDS.map((dest) => {
            const Icon = dest.icon;
            return (
              <article
                key={dest.name}
                className={`poster-polaroid ${dest.slotClass}`}
                style={{ '--p-tilt': dest.tilt, '--p-delay': dest.delay }}
                onClick={() => onOpenModal('destination', dest)}
              >
                <span className="poster-medallion" aria-hidden="true">
                  <Icon size={19} strokeWidth={1.7} />
                </span>

                <div className="poster-photo-box">
                  <img src={dest.image} alt={`${dest.name}, Andaman`} loading="lazy" />
                </div>

                <div className="poster-ribbon">
                  <span>{dest.name}</span>
                </div>
              </article>
            );
          })}

          {/* Bottom-Left GKM Grand Compass Signature */}
          <div className="poster-compass-corner exp-anim ex-d2">
            <svg
              className="poster-compass-svg"
              viewBox="0 0 90 90"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="45" cy="45" r="27" stroke="#C59D4B" strokeWidth="1.5" />
              <circle cx="45" cy="45" r="21" stroke="#C59D4B" strokeWidth="1" strokeDasharray="2 3" />
              <path
                d="M45 6 L51 39 L84 45 L51 51 L45 84 L39 51 L6 45 L39 39 Z"
                fill="#C59D4B"
                opacity="0.92"
              />
              <path
                d="M19 19 L41 41 M49 49 L71 71 M71 19 L49 41 M41 49 L19 71"
                stroke="#173B23"
                strokeWidth="1.2"
                opacity="0.55"
              />
              <circle cx="45" cy="45" r="4.5" fill="#FAF8F2" stroke="#C59D4B" strokeWidth="1.5" />
            </svg>
            <div className="poster-quote-script">GKM Grand</div>
            <div className="poster-quote-sub">PORT BLAIR • SINCE 2018</div>
          </div>
        </div>
      </div>
    </section>
  );
}
