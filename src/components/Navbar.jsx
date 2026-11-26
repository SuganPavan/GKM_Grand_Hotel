import React, { useState } from 'react';
import { ChevronDown, Phone, ArrowRight, Menu, X, MessageCircle } from 'lucide-react';
import BrandLogo from './BrandLogo';
import { CONTACT, HOTELS, ROOMS, PACKAGES, DESTINATIONS, ACTIVITIES, CRUISES } from '../data/homeData';

export default function Navbar({ onOpenModal, onOpenBooking }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-inner">
          <BrandLogo />

          <nav className="main-nav" aria-label="Primary Navigation">
            <div className="nav-item">
              <a href="#home" className="nav-link">Home</a>
            </div>

            <div className="nav-item">
              <a href="#hotels" className="nav-link">
                Hotels <ChevronDown size={12} className="nav-chevron" />
              </a>
              <div className="dropdown-menu">
                {HOTELS.map((hotel) => (
                  <button
                    key={hotel.id}
                    className="dropdown-link"
                    onClick={() => onOpenModal('hotel', hotel)}
                  >
                    <span>{hotel.name}</span>
                    <span className="dropdown-badge">{hotel.location}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <a href="#rooms" className="nav-link">
                Rooms <ChevronDown size={12} className="nav-chevron" />
              </a>
              <div className="dropdown-menu">
                {ROOMS.map((room) => (
                  <button
                    key={room.id}
                    className="dropdown-link"
                    onClick={() => onOpenModal('room', room)}
                  >
                    <span>{room.name}</span>
                    <span className="dropdown-badge">{room.price.replace('/night', '')}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <a href="#packages" className="nav-link">
                Tour Packages <ChevronDown size={12} className="nav-chevron" />
              </a>
              <div className="dropdown-menu">
                {PACKAGES.map((pkg) => (
                  <button
                    key={pkg.id}
                    className="dropdown-link"
                    onClick={() => onOpenModal('package', pkg)}
                  >
                    <span>{pkg.title}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <a href="#destinations" className="nav-link">
                Destinations <ChevronDown size={12} className="nav-chevron" />
              </a>
              <div className="dropdown-menu">
                {DESTINATIONS.map((dest) => (
                  <button
                    key={dest.name}
                    className="dropdown-link"
                    onClick={() => onOpenModal('destination', dest)}
                  >
                    <span>{dest.name}</span>
                    <span className="dropdown-badge">{dest.subtitle}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <a href="#experiences" className="nav-link">
                Water Activities <ChevronDown size={12} className="nav-chevron" />
              </a>
              <div className="dropdown-menu">
                {ACTIVITIES.map((act) => (
                  <button
                    key={act.id}
                    className="dropdown-link"
                    onClick={() => onOpenModal('activities', ACTIVITIES)}
                  >
                    <span>{act.label}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <button
                type="button"
                className="nav-link"
                onClick={() => onOpenModal('cruises', CRUISES)}
              >
                Cruises <ChevronDown size={12} className="nav-chevron" />
              </button>
              <div className="dropdown-menu">
                {CRUISES.map((cruise) => (
                  <button
                    key={cruise.name}
                    className="dropdown-link"
                    onClick={() => onOpenModal('cruises', CRUISES)}
                  >
                    <span>{cruise.name}</span>
                  </button>
                ))}
              </div>
            </div>

            <div className="nav-item">
              <a href="#reviews" className="nav-link">Reviews</a>
            </div>
            <div className="nav-item">
              <a href="#hotels" className="nav-link">About Us</a>
            </div>
            <div className="nav-item">
              <a href="#contact" className="nav-link">Contact</a>
            </div>
          </nav>

          <div className="header-actions">
            <div className="header-phone">
              <Phone size={15} color="#1E4D2B" />
              <div className="phone-numbers">
                <a href={`tel:${CONTACT.phones[0].replace(/\s+/g, '')}`}>{CONTACT.phones[0]}</a>
                <a href={`tel:+91${CONTACT.phones[1]}`}>{CONTACT.phones[1]}</a>
              </div>
            </div>

            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%20GKM%20Grand%20Andaman%2C%20I%20would%20like%20to%20enquire%20about%20a%20stay%20and%20tour%20package.`}
              target="_blank"
              rel="noreferrer"
              className="whatsapp-circle"
              aria-label="WhatsApp GKM Grand"
              title="Chat on WhatsApp"
            >
              <MessageCircle size={17} fill="currentColor" />
            </a>

            <button className="btn btn--dark btn--sm" onClick={() => onOpenBooking('')}>
              Book Now <ArrowRight size={14} className="btn-arrow" />
            </button>
          </div>

          <button
            className="mobile-toggle"
            aria-label="Toggle Menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="mobile-drawer">
          <div className="mobile-nav-list">
            <a href="#home" onClick={() => setMobileOpen(false)}>Home</a>
            <a href="#hotels" onClick={() => setMobileOpen(false)}>Hotels &amp; About Us</a>
            <a href="#rooms" onClick={() => setMobileOpen(false)}>Rooms</a>
            <a href="#packages" onClick={() => setMobileOpen(false)}>Tour Packages</a>
            <a href="#destinations" onClick={() => setMobileOpen(false)}>Destinations</a>
            <a href="#experiences" onClick={() => setMobileOpen(false)}>Water Activities</a>
            <button
              type="button"
              style={{ textAlign: 'left', padding: '10px 0', fontWeight: 500 }}
              onClick={() => {
                setMobileOpen(false);
                onOpenModal('cruises', CRUISES);
              }}
            >
              Cruises
            </button>
            <a href="#reviews" onClick={() => setMobileOpen(false)}>Guest Reviews</a>
            <a href="#contact" onClick={() => setMobileOpen(false)}>Contact</a>
          </div>
          <button
            className="btn btn--dark"
            style={{ width: '100%' }}
            onClick={() => {
              setMobileOpen(false);
              onOpenBooking('');
            }}
          >
            Book Your Andaman Trip <ArrowRight size={15} />
          </button>
        </div>
      )}
    </>
  );
}
