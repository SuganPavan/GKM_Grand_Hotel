import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowRight,
  MapPin,
  BedDouble,
  Maximize2,
  Wifi,
  Users
} from 'lucide-react';
import { ROOMS } from '../data/homeData';

const HOTEL_ROOM_SETS = {
  'gkm-grand': {
    label: 'Hotel GKM Grand',
    tabLocation: 'Hotel GKM Grand • Nayagaon',
    eyebrow: 'OUR ROOMS • NAYAGAON, PORT BLAIR',
    heading: 'Rooms at Hotel GKM Grand',
    subtitle: "Contemporary stays near Jogger's Park, AHW Colony, Nayagaon, Port Blair",
    rooms: [
      {
        ...ROOMS[1],
        subtitle: 'Relax in elegance',
        blurb: 'A perfect blend of comfort and serenity for a memorable stay in Port Blair.',
        bed: 'King Bed',
        area: '30 m²',
        maxGuests: 'Max 3 Guests'
      },
      {
        ...ROOMS[2],
        subtitle: 'Elevated Comfort',
        blurb: 'Upgraded living space with refined furnishings and a cozy lounge corner.',
        bed: 'King Bed',
        area: '36 m²',
        maxGuests: 'Max 3 Guests'
      },
      {
        ...ROOMS[3],
        subtitle: 'Your Private Retreat',
        blurb: 'Generously proportioned suite with separate living zone and priority concierge.',
        bed: 'King Bed',
        area: '43 m²',
        maxGuests: 'Max 4 Guests'
      },
      {
        ...ROOMS[4],
        subtitle: 'Spacious Stay Together',
        blurb: 'Our finest luxury suite with panoramic windows, lounge nook, and bespoke care.',
        bed: 'Master King',
        area: '52 m²',
        maxGuests: 'Max 4 Guests'
      }
    ]
  },
  'guru-international': {
    label: 'Hotel Guru International',
    tabLocation: 'Hotel Guru International • Port Blair',
    eyebrow: 'OUR ROOMS • PORT BLAIR, ANDAMAN',
    heading: 'Rooms at Hotel Guru International',
    subtitle: 'Peaceful family & couple accommodations in Port Blair with seamless island connectivity',
    rooms: [
      {
        ...ROOMS[0],
        subtitle: 'Cozy Island Comfort',
        blurb: 'Thoughtfully designed Port Blair stays with warm hospitality and seamless tours.',
        bed: 'Queen Bed',
        area: '22 m²',
        maxGuests: 'Max 2 Guests'
      },
      {
        ...ROOMS[1],
        subtitle: 'Everyday Elegance',
        blurb: 'Spacious modern rooms with king bedding, Wi-Fi, and 24-hour room service.',
        bed: 'King / Double',
        area: '30 m²',
        maxGuests: 'Max 3 Guests'
      },
      {
        ...ROOMS[2],
        subtitle: 'Your Private Retreat',
        blurb: 'Extra space and plush comfort layers after a day exploring Havelock & Neil.',
        bed: 'King Bed',
        area: '36 m²',
        maxGuests: 'Max 3 Guests'
      },
      {
        ...ROOMS[3],
        subtitle: 'Family Comfort Suite',
        blurb: 'Ideal for families and groups looking for airy rooms and effortless transfers.',
        bed: 'King + Lounge',
        area: '43 m²',
        maxGuests: 'Max 4 Guests'
      }
    ]
  }
};

export default function RoomsSection({ onOpenModal, onOpenBooking }) {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);
  const [activeHotel, setActiveHotel] = useState('gkm-grand');
  const [expandedIdx, setExpandedIdx] = useState(0);

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

  const currentSet = HOTEL_ROOM_SETS[activeHotel];

  const handleHotelSwitch = (key) => {
    setActiveHotel(key);
    setExpandedIdx(0);
  };

  return (
    <section
      id="rooms"
      ref={sectionRef}
      className={`rooms-style-section ${visible ? 'rooms-style-visible' : ''}`}
    >
      {/* Subtle Top-Right Island Backdrop Fade */}
      <div className="rooms-style-coast-bg" aria-hidden="true" />

      <div className="container rooms-style-inner">
        {/* Dynamic Hotel & Location Header + Segmented Switcher */}
        <header className="rooms-style-header">
          <div className="rooms-style-eyebrow rooms-anim r-d1">
            <span className="rooms-eyebrow-line" />
            <span>{currentSet.eyebrow}</span>
            <span className="rooms-eyebrow-line" />
          </div>

          <h2 className="rooms-style-title rooms-anim r-d2">
            {currentSet.heading}
          </h2>

          <p className="rooms-style-sub rooms-anim r-d3">
            {currentSet.subtitle}
          </p>

          <div
            className="rooms-location-toggle rooms-anim r-d3"
            role="tablist"
            aria-label="Select Hotel Property"
          >
            <button
              type="button"
              role="tab"
              aria-selected={activeHotel === 'gkm-grand'}
              className={`rooms-loc-btn ${activeHotel === 'gkm-grand' ? 'active' : ''}`}
              onClick={() => handleHotelSwitch('gkm-grand')}
            >
              <MapPin size={14} />
              <span>{HOTEL_ROOM_SETS['gkm-grand'].tabLocation}</span>
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={activeHotel === 'guru-international'}
              className={`rooms-loc-btn ${activeHotel === 'guru-international' ? 'active' : ''}`}
              onClick={() => handleHotelSwitch('guru-international')}
            >
              <MapPin size={14} />
              <span>{HOTEL_ROOM_SETS['guru-international'].tabLocation}</span>
            </button>
          </div>
        </header>

        {/* Interactive Hover-Stretch Room Showcase */}
        <div key={activeHotel} className="rooms-accordion-track rooms-fade-swap">
          {currentSet.rooms.map((room, idx) => {
            const isExpanded = idx === expandedIdx;

            return (
              <article
                key={room.id}
                className={`rooms-acc-card ${isExpanded ? 'is-expanded' : 'is-compact'}`}
                onMouseEnter={() => setExpandedIdx(idx)}
                onFocus={() => setExpandedIdx(idx)}
                onClick={() => onOpenModal('room', room)}
                tabIndex={0}
              >
                {/* Media Layer */}
                <div className="rooms-acc-media">
                  <img src={room.image} alt={room.name} loading="lazy" />
                  <span className="rooms-acc-price">{room.price}</span>

                  {/* Curved Ivory Cutout (visible in compact vertical mode) */}
                  <svg
                    className="rooms-acc-compact-wave"
                    viewBox="0 0 320 32"
                    preserveAspectRatio="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M0,12 C95,34 225,2 320,18 L320,32 L0,32 Z"
                      fill="#FAF8F2"
                    />
                  </svg>
                </div>

                {/* Slim Low-Profile Bottom Bar (Keeps ~72% of HD Room Photo Clearly Visible) */}
                <div className="rooms-acc-expanded-overlay">
                  <div className="rooms-expanded-slim-bar">
                    <div className="rooms-expanded-left">
                      <h3 className="rooms-featured-name">{room.name}</h3>
                      <div className="rooms-expanded-specs">
                        <span><BedDouble size={13} /> {room.bed}</span>
                        <span><Maximize2 size={12} /> {room.area}</span>
                        <span><Wifi size={13} /> Free Wi-Fi</span>
                        <span><Users size={13} /> {room.maxGuests}</span>
                      </div>
                    </div>

                    <div className="rooms-expanded-actions">
                      <button
                        type="button"
                        className="rooms-featured-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenModal('room', room);
                        }}
                      >
                        <span>Details</span>
                        <ArrowRight size={13} className="btn-arrow" />
                      </button>
                      <button
                        type="button"
                        className="rooms-featured-book"
                        onClick={(e) => {
                          e.stopPropagation();
                          onOpenBooking(`${room.name} — ${currentSet.label} (${room.price})`);
                        }}
                      >
                        <span>Book Now</span>
                        <ArrowRight size={13} className="btn-arrow" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Compact Vertical Card Body */}
                <div className="rooms-acc-compact-body">
                  <div>
                    <h3 className="rooms-v-title">{room.name}</h3>
                    <p className="rooms-v-sub">{room.subtitle}</p>

                    <div className="rooms-v-specs">
                      <span className="rooms-v-spec">
                        <BedDouble size={14} /> {room.bed}
                      </span>
                      <span className="rooms-v-spec">
                        <Maximize2 size={13} /> {room.area}
                      </span>
                      <span className="rooms-v-spec">
                        <Wifi size={14} /> Free Wi-Fi
                      </span>
                      <span className="rooms-v-spec">
                        <Users size={14} /> {room.maxGuests}
                      </span>
                    </div>
                  </div>

                  <button
                    type="button"
                    className="rooms-v-book-btn"
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenBooking(`${room.name} — ${currentSet.label} (${room.price})`);
                    }}
                  >
                    <span>Book Now</span>
                    <ArrowRight size={14} className="btn-arrow" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
