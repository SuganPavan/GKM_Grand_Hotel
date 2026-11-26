import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MapPin,
  ArrowRight,
  Facebook,
  Instagram,
  Youtube,
  MessageCircle
} from 'lucide-react';
import BrandLogo from './BrandLogo';
import PalmAccent from './PalmAccent';
import { CONTACT, ACTIVITIES, CRUISES } from '../data/homeData';

export default function Footer({ onOpenModal, onOpenBooking, onNotify }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!email.trim()) return;
    setEmail('');
    onNotify('Thank you for subscribing to GKM Grand Andaman updates!');
  };

  return (
    <footer id="contact" className="site-footer section-palm-wrap">
      <PalmAccent position="bottom-left" light />
      <PalmAccent position="bottom-right" light />

      {/* Top Pre-Footer Concierge Callout Ribbon */}
      <div className="container section-inner">
        <div className="footer-cta-banner">
          <div>
            <span className="footer-cta-eyebrow">PLAN YOUR ANDAMAN STAY</span>
            <h3 className="footer-cta-title">
              Ready to Experience <em>Hotel GKM Grand, Port Blair?</em>
            </h3>
          </div>

          <div className="footer-cta-actions">
            <a
              href={`https://wa.me/${CONTACT.whatsapp}?text=Hello%20GKM%20Grand%20Andaman%2C%20I%20would%20like%20to%20plan%20a%20stay%20in%20Port%20Blair.`}
              target="_blank"
              rel="noreferrer"
              className="footer-wa-btn"
            >
              <MessageCircle size={16} />
              <span>WhatsApp Desk</span>
            </a>
            <button
              type="button"
              className="footer-book-btn"
              onClick={() => onOpenBooking && onOpenBooking('Direct Footer Reservation')}
            >
              <span>Book Your Stay</span>
              <ArrowRight size={15} className="btn-arrow" />
            </button>
          </div>
        </div>

        {/* Main 5-Column Luxury Footer Grid */}
        <div className="footer-grid-v2">
          {/* Brand Column */}
          <div className="footer-brand">
            <BrandLogo inverted />
            <p className="footer-brand-desc">
              Trusted Port Blair hotelier &amp; local Andaman Destination Management
              Company since 2018 — operating Hotel GKM Grand &amp; Hotel Guru International.
            </p>
            <div className="social-links">
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Facebook"
              >
                <Facebook size={16} />
              </a>
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="Instagram"
              >
                <Instagram size={16} />
              </a>
              <a
                href={CONTACT.website}
                target="_blank"
                rel="noreferrer"
                className="social-link"
                aria-label="YouTube"
              >
                <Youtube size={16} />
              </a>
            </div>
          </div>

          {/* Hotels & Stays */}
          <div>
            <h4 className="footer-col-title">OUR STAYS</h4>
            <ul className="footer-links">
              <li><a href="#hotels">Hotel GKM Grand</a></li>
              <li><a href="#hotels">Hotel Guru International</a></li>
              <li><a href="#rooms">Rooms &amp; Suites</a></li>
              <li><button type="button" onClick={() => onOpenModal('about', null)}>About GKM Grand</button></li>
              <li><a href="#reviews">Guest Reviews</a></li>
            </ul>
          </div>

          {/* Andaman Travel */}
          <div>
            <h4 className="footer-col-title">EXPLORE ANDAMAN</h4>
            <ul className="footer-links">
              <li><a href="#packages">Holiday Packages</a></li>
              <li><a href="#experiences">Water Activities</a></li>
              <li><a href="#destinations">Nearby Destinations</a></li>
              <li><button type="button" onClick={() => onOpenModal('cruises', CRUISES)}>Private Cruises</button></li>
              <li><button type="button" onClick={() => onOpenModal('activities', ACTIVITIES)}>Marine Sports</button></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="footer-col-title">GUEST SUPPORT</h4>
            <ul className="footer-links">
              <li><button type="button" onClick={() => onOpenModal('policy', 'privacy')}>Privacy Policy</button></li>
              <li><button type="button" onClick={() => onOpenModal('policy', 'terms')}>Terms &amp; Conditions</button></li>
              <li><button type="button" onClick={() => onOpenModal('policy', 'cancellation')}>Payment &amp; Cancellation</button></li>
              <li><a href={`tel:${CONTACT.phones[0].replace(/\s+/g, '')}`}>24/7 Trip Assistance</a></li>
            </ul>
          </div>

          {/* Contact & Newsletter */}
          <div className="footer-contact-col">
            <h4 className="footer-col-title">REACH US</h4>
            <div className="footer-contact-list">
              <div className="footer-contact-item">
                <Phone size={15} color="#E6C987" style={{ marginTop: 2, flexShrink: 0 }} />
                <div>
                  <a href={`tel:${CONTACT.phones[0].replace(/\s+/g, '')}`}>{CONTACT.phones[0]}</a>
                  <br />
                  <a href={`tel:+91${CONTACT.phones[1]}`}>+91 {CONTACT.phones[1]}</a>
                </div>
              </div>
              <div className="footer-contact-item">
                <Mail size={15} color="#E6C987" style={{ marginTop: 2, flexShrink: 0 }} />
                <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
              </div>
              <div className="footer-contact-item">
                <MapPin size={15} color="#E6C987" style={{ marginTop: 2, flexShrink: 0 }} />
                <span>{CONTACT.address}</span>
              </div>
            </div>

            <form className="newsletter-form footer-newsletter" onSubmit={handleSubscribe}>
              <input
                type="email"
                className="newsletter-input"
                placeholder="Email for seasonal offers..."
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button type="submit" className="newsletter-btn" aria-label="Subscribe">
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="footer-bottom section-inner">
        <div className="container footer-bottom-inner">
          <p>© {new Date().getFullYear()} GKM Grand Hotels &amp; Resorts, Port Blair. All rights reserved.</p>
          <div className="footer-bottom-links">
            <button type="button" onClick={() => onOpenModal('policy', 'privacy')}>Privacy Policy</button>
            <span>|</span>
            <button type="button" onClick={() => onOpenModal('policy', 'terms')}>Terms &amp; Conditions</button>
            <span>|</span>
            <button type="button" onClick={() => onOpenModal('policy', 'cancellation')}>Cancellation Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
}
