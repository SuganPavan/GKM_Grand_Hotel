import React, { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight, ChevronDown, BadgeCheck, MapPin } from 'lucide-react';
import { HOTELS, ROOMS } from '../data/homeData';

const GUESTBOOK_ENTRIES = [
  {
    author: 'Karthik Subramanian',
    city: 'Chennai',
    property: 'Hotel GKM Grand, Nayagaon',
    stay: 'Family Stay • Google Verified',
    date: 'Entry No. 01',
    photoLabel: 'Hotel GKM Grand — Port Blair',
    photo: HOTELS[0].image,
    quote:
      'Guru Swamy ji and his team went above and beyond to make our family feel safe and comfortable in Port Blair. Clean, spacious rooms, warm personal care, and seamless airport pickup.'
  },
  {
    author: 'Priya & Arjun Menon',
    city: 'Bengaluru',
    property: 'Hotel GKM Grand, Port Blair',
    stay: 'Honeymoon Package • Google Verified',
    date: 'Entry No. 02',
    photoLabel: 'Deluxe Suite — Hotel GKM Grand',
    photo: ROOMS[2].image,
    quote:
      'Well-maintained, hygienic rooms with large cozy beds and prompt room service. They even arranged packed breakfast for our early morning Havelock ferry and handled all cruise tickets smoothly.'
  },
  {
    author: 'Ankit & Neha Sharma',
    city: 'New Delhi',
    property: 'Hotel GKM Grand & Andaman Tours',
    stay: 'Andaman LTC Tour • Google Verified',
    date: 'Entry No. 03',
    photoLabel: 'Executive Suite — Port Blair',
    photo: ROOMS[3].image,
    quote:
      'Best all-in-one hotel and local tour operator in Port Blair. Polite, cooperative staff, delicious South Indian breakfast spread, and effortless AC cab transfers to Cellular Jail and Baratang.'
  },
  {
    author: 'Rajeshwari Nair',
    city: 'Kochi',
    property: 'Hotel Guru International, Port Blair',
    stay: 'Couple Getaway • Google Verified',
    date: 'Entry No. 04',
    photoLabel: 'Hotel Guru International — Port Blair',
    photo: HOTELS[1].image,
    quote:
      'Warm familial hospitality right near Jogger’s Park. The complimentary harbour drop and 24/7 local assistance made our Havelock and Neil Island trip completely stress-free.'
  },
  {
    author: 'Suresh & Kavitha Reddy',
    city: 'Hyderabad',
    property: 'Hotel GKM Grand, Port Blair',
    stay: '5N/6D Island Tour • Google Verified',
    date: 'Entry No. 05',
    photoLabel: 'Super Executive Suite — GKM Grand',
    photo: ROOMS[4].image,
    quote:
      'Spotless rooms, tasty home-style food, and genuine care from management throughout our stay. Truly deserving of their 4.8 Google rating in the Andaman Islands.'
  }
];

function GoogleBadgeIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="#4285F4"
        d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5c-.3 1.5-1.1 2.8-2.4 3.6v3h3.9c2.3-2.1 3.5-5.2 3.5-8.8z"
      />
      <path
        fill="#34A853"
        d="M12 24c3.2 0 6-1.1 8-3l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.2 0-5.9-2.1-6.8-5H1.2v3.1C3.2 21.3 7.3 24 12 24z"
      />
      <path
        fill="#FBBC05"
        d="M5.2 14.2c-.2-.7-.4-1.4-.4-2.2s.1-1.5.4-2.2V6.7H1.2C.4 8.3 0 10.1 0 12s.4 3.7 1.2 5.3l4-3.1z"
      />
      <path
        fill="#EA4335"
        d="M12 4.8c1.8 0 3.4.6 4.6 1.8l3.5-3.5C18 1.1 15.2 0 12 0 7.3 0 3.2 2.7 1.2 6.7l4 3.1c.9-2.9 3.6-5 6.8-5z"
      />
    </svg>
  );
}

export default function ReviewsSection() {
  const runwayRef = useRef(null);
  const [pageIdx, setPageIdx] = useState(0);

  const total = GUESTBOOK_ENTRIES.length;
  const activeEntry = GUESTBOOK_ENTRIES[pageIdx] || GUESTBOOK_ENTRIES[0];

  useEffect(() => {
    const handleScroll = () => {
      const el = runwayRef.current;
      if (!el || window.innerWidth <= 1024) return;

      const rect = el.getBoundingClientRect();
      const scrollableDistance = el.offsetHeight - window.innerHeight;
      if (scrollableDistance <= 0) return;

      const scrolled = Math.min(Math.max(-rect.top, 0), scrollableDistance);
      const progress = scrolled / scrollableDistance;

      const nextPage = Math.min(total - 1, Math.floor(progress * total));
      setPageIdx(nextPage);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [total]);

  const jumpToPage = (targetIdx) => {
    const clamped = Math.max(0, Math.min(total - 1, targetIdx));
    setPageIdx(clamped);

    const el = runwayRef.current;
    if (!el || window.innerWidth <= 1024) return;

    const scrollableDistance = el.offsetHeight - window.innerHeight;
    if (scrollableDistance <= 0) return;

    const sectionTop = el.getBoundingClientRect().top + window.scrollY;
    const targetScroll =
      sectionTop + ((clamped + 0.15) / total) * scrollableDistance;
    window.scrollTo({ top: targetScroll, behavior: 'smooth' });
  };

  return (
    <section id="reviews" ref={runwayRef} className="guestbook-runway">
      <div className="guestbook-sticky">
        {/* Dynamic Respective Hotel Photo Background Layer */}
        <div className="guestbook-bg-wrap" aria-hidden="true">
          {GUESTBOOK_ENTRIES.map((entry, idx) => (
            <img
              key={entry.date}
              src={entry.photo}
              alt=""
              className={`guestbook-bg-img ${idx === pageIdx ? 'active' : ''}`}
            />
          ))}
          <div className="guestbook-bg-scrim" />
        </div>

        <div className="container guestbook-inner">
          {/* Compact Centered Section Heading */}
          <header className="guestbook-section-header">
            <div className="guestbook-section-eyebrow">
              <span className="guestbook-eyebrow-line" />
              <span>GKM GRAND • PORT BLAIR GUESTBOOK</span>
              <span className="guestbook-eyebrow-line" />
            </div>
            <h2 className="guestbook-section-title">
              Guest Reviews &amp; <em>Cherished Stories</em>
            </h2>
          </header>

          {/* Compact Open Hardcover Luxury Resort Guestbook */}
          <div className="guestbook-cover">
            <div className="guestbook-spread">
              {/* Left Page: Synced Hotel Photo + Google Rating + Controls */}
              <div className="guestbook-page guestbook-page--left">
                <div className="guestbook-page-frame guestbook-left-photo-layout">
                  <div className="guestbook-left-head">
                    <div className="guestbook-google-pill">
                      <GoogleBadgeIcon />
                      <span>Google Verified</span>
                    </div>
                    <div className="guestbook-mini-rating">
                      <Star size={13} fill="#D8A73A" color="#D8A73A" />
                      <strong>4.8</strong>
                      <span>(160+)</span>
                    </div>
                  </div>

                  {/* Dynamic Hotel Photo Matching Active Review */}
                  <div className="guestbook-hotel-photo-box">
                    {GUESTBOOK_ENTRIES.map((entry, idx) => (
                      <img
                        key={entry.date}
                        src={entry.photo}
                        alt={entry.photoLabel}
                        className={`guestbook-hotel-img ${idx === pageIdx ? 'active' : ''}`}
                        loading="lazy"
                      />
                    ))}
                    <div className="guestbook-photo-caption">
                      <MapPin size={12} color="#E6C987" />
                      <span>{activeEntry.photoLabel}</span>
                    </div>
                  </div>

                  <div className="guestbook-footer-controls">
                    <div className="guestbook-page-counter">
                      <span>Page</span>
                      <strong>0{pageIdx + 1}</strong>
                      <span>of 0{total}</span>
                    </div>

                    <div className="guestbook-scroll-hint">
                      <span>Scroll to turn</span>
                      <ChevronDown size={13} className="pkg-scroll-chevron" />
                    </div>

                    <div className="guestbook-turn-btns">
                      <button
                        type="button"
                        className="guestbook-turn-btn"
                        disabled={pageIdx === 0}
                        onClick={() => jumpToPage(pageIdx - 1)}
                        aria-label="Previous guestbook page"
                      >
                        <ChevronLeft size={15} />
                      </button>
                      <button
                        type="button"
                        className="guestbook-turn-btn"
                        disabled={pageIdx === total - 1}
                        onClick={() => jumpToPage(pageIdx + 1)}
                        aria-label="Next guestbook page"
                      >
                        <ChevronRight size={15} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Book Spine Shadow */}
              <div className="guestbook-spine" aria-hidden="true" />

              {/* Right 3D Flipping Google-Verified Review Pages */}
              <div className="guestbook-page-stack" aria-live="polite">
                {GUESTBOOK_ENTRIES.map((entry, idx) => {
                  const isFlipped = idx < pageIdx;
                  const isCurrent = idx === pageIdx;
                  const zIndex = isFlipped ? idx + 1 : total - idx + 2;

                  return (
                    <article
                      key={entry.date}
                      className={`guestbook-sheet ${isFlipped ? 'is-flipped' : ''} ${
                        isCurrent ? 'is-current' : ''
                      }`}
                      style={{ zIndex }}
                    >
                      <div className="guestbook-sheet-front">
                        <div className="guestbook-page-frame guestbook-entry-frame">
                          <div className="guestbook-entry-top">
                            <span className="guestbook-verified-chip">
                              <GoogleBadgeIcon />
                              <BadgeCheck size={13} color="#1E6B3A" />
                              <span>Verified Google Review</span>
                            </span>
                            <div className="guestbook-stars">
                              {[0, 1, 2, 3, 4].map((s) => (
                                <Star key={s} size={13} fill="#D8A73A" color="#D8A73A" />
                              ))}
                            </div>
                          </div>

                          <blockquote className="guestbook-quote">
                            “{entry.quote}”
                          </blockquote>

                          <div className="guestbook-ornament" aria-hidden="true">
                            <span />
                            <i>✦</i>
                            <span />
                          </div>

                          <div className="guestbook-signature-block">
                            <div className="guestbook-signature">{entry.author}</div>
                            <div className="guestbook-meta">
                              {entry.city} • {entry.property}
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="guestbook-sheet-back" aria-hidden="true">
                        <div className="guestbook-back-watermark">GKM GRAND</div>
                      </div>
                    </article>
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
