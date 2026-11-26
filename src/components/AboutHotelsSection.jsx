import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, MapPin, Star } from 'lucide-react';
import { HOTELS } from '../data/homeData';

const HOTEL_SUB = {
  'gkm-grand': { tag: 'Flagship • Nayagaon', subtitle: 'Near Jogger’s Park, Port Blair' },
  'guru-international': { tag: 'Sister Property', subtitle: 'Port Blair, Andaman Islands' }
};

export default function AboutHotelsSection({ onOpenModal }) {
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
      id="hotels"
      ref={sectionRef}
      className={`about-prem-section ${visible ? 'about-prem-visible' : ''}`}
    >
      <div className="container">
        <div className="about-prem-grid">
          {/* Left Luxury Editorial Column */}
          <div className="about-prem-left">
            <div className="about-prem-eyebrow prem-anim p-a1">
              <span className="about-prem-line" />
              <span>ABOUT GKM GRAND</span>
            </div>

            <h2 className="about-prem-title prem-anim p-a2">
              Experience the
              <br />
              <em>Andaman Difference</em>
            </h2>

            <p className="about-prem-copy prem-anim p-a3">
              At GKM Grand, we bring together warm island hospitality and local
              travel expertise. Across our two Port Blair properties —{' '}
              <strong>Hotel GKM Grand</strong> &amp;{' '}
              <strong>Hotel Guru International</strong> — we craft effortless,
              memorable Andaman stays.
            </p>

            <div className="prem-anim p-a4" style={{ marginTop: '28px' }}>
              <button
                type="button"
                className="about-prem-btn"
                onClick={() => onOpenModal('about', null)}
              >
                <span>Discover Our Hotels</span>
                <ArrowRight size={15} className="btn-arrow" />
              </button>
            </div>
          </div>

          {/* Right Two Staggered Architectural Hotel Frames + Floating Corner Credential Badge */}
          <div className="about-prem-cards about-cards-with-badge prem-anim p-a3">
            {/* Sleek Floating Corner Badge tucked on top of the hotel photo */}
            <div className="about-photo-float-badge" aria-label="GKM Grand credentials">
              <div className="about-fb-item">
                <strong>2018</strong>
                <span>Local DMC</span>
              </div>
              <span className="about-fb-sep" aria-hidden="true" />
              <div className="about-fb-item">
                <strong>3,000+</strong>
                <span>Guests</span>
              </div>
              <span className="about-fb-sep" aria-hidden="true" />
              <div className="about-fb-item">
                <strong className="about-fb-rating">
                  4.8 <Star size={12} fill="#D8AF56" color="#D8AF56" />
                </strong>
                <span>Google</span>
              </div>
            </div>
            {HOTELS.map((hotel, idx) => {
              const meta = HOTEL_SUB[hotel.id] || {
                tag: 'Port Blair',
                subtitle: hotel.fullLocation
              };

              return (
                <article
                  key={hotel.id}
                  className={`about-prem-card ${idx === 1 ? 'about-prem-card--offset' : ''}`}
                  onClick={() => onOpenModal('hotel', hotel)}
                >
                  <div className="about-prem-img-wrap">
                    <img
                      src={hotel.image}
                      alt={`${hotel.name}, ${hotel.location}`}
                      onError={(e) => {
                        if (hotel.fallbackImage && e.currentTarget.src !== hotel.fallbackImage) {
                          e.currentTarget.src = hotel.fallbackImage;
                        }
                      }}
                    />
                  </div>

                  <div className="about-prem-card-top">
                    <span className="about-prem-tag">{meta.tag}</span>
                  </div>

                  <div className="about-prem-card-overlay">
                    <div className="about-prem-card-info">
                      <div>
                        <h3 className="about-prem-card-name">{hotel.name}</h3>
                        <p className="about-prem-card-loc">
                          <MapPin size={12} /> {meta.subtitle}
                        </p>
                      </div>
                      <span className="about-prem-card-arrow" aria-hidden="true">
                        <ArrowRight size={16} />
                      </span>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
