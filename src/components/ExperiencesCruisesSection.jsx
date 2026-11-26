import React from 'react';
import {
  ArrowRight,
  Waves,
  Glasses,
  Sailboat,
  Compass,
  Wind,
  Sparkles
} from 'lucide-react';
import { ACTIVITIES, CRUISES } from '../data/homeData';

const ACTIVITY_ICONS = [Waves, Glasses, Sailboat, Compass, Wind, Sparkles];

export default function ExperiencesCruisesSection({ onOpenModal }) {
  return (
    <section id="experiences" className="experiences-cruises-section">
      <div className="container">
        <div className="split-banner">
          {/* Left: Our Experiences */}
          <div className="experiences-panel">
            <div className="experiences-header-row">
              <div className="experiences-intro">
                <span className="eyebrow">OUR EXPERIENCES</span>
                <h2 className="section-title">Make More of Your Island Stay</h2>
                <p className="section-desc">
                  From water sports to island tours — experience the best of Andaman.
                </p>
              </div>

              <div className="activities-icons-row">
                {ACTIVITIES.map((act, idx) => {
                  const Icon = ACTIVITY_ICONS[idx] || Sparkles;
                  return (
                    <button
                      key={act.id}
                      type="button"
                      className="activity-pill"
                      onClick={() => onOpenModal('activities', ACTIVITIES)}
                    >
                      <span className="activity-icon-circle">
                        <Icon size={18} strokeWidth={1.8} />
                      </span>
                      <span className="activity-label">{act.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <button
                className="btn btn--dark btn--sm"
                onClick={() => onOpenModal('activities', ACTIVITIES)}
              >
                Explore Activities <ArrowRight size={14} className="btn-arrow" />
              </button>
            </div>
          </div>

          {/* Right: Cruise Services */}
          <div id="cruises" className="cruise-panel">
            <img
              className="cruise-bg-img"
              src="https://images.unsplash.com/photo-1548574505-5e239809ee19?auto=format&fit=crop&w=1000&q=80"
              alt="Andaman Private Cruise Ferry"
              loading="lazy"
            />
            <div className="cruise-bg-fade" />

            <div className="cruise-content">
              <span className="eyebrow">CRUISE SERVICES</span>
              <h2 className="section-title">Sail the Andaman Seas</h2>
              <p className="section-desc">
                Explore our cruise options for a memorable journey.
              </p>
              <button
                className="btn btn--dark btn--sm"
                onClick={() => onOpenModal('cruises', CRUISES)}
              >
                Explore Cruises <ArrowRight size={14} className="btn-arrow" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
