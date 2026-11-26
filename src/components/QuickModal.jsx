import React, { useEffect, useState } from 'react';
import { X, ArrowRight } from 'lucide-react';
import { CONTACT } from '../data/homeData';

const POLICIES = {
  privacy: {
    title: 'Privacy Policy',
    body: 'GKM Grand Andaman (Hotel GKM Grand & Hotel Guru International) respects your privacy. Personal details shared during room bookings, tour enquiries, ferry ticketing, or newsletter signups are used strictly to fulfill your travel reservations and statutory Andaman permit requirements.'
  },
  terms: {
    title: 'Terms & Conditions',
    body: 'Standard check-in is 12:00 PM and check-out is 10:00 AM. Valid government-issued photo ID is required at check-in. Private cruise schedules (Makruzz, Nautika, Green Ocean) and island boat excursions are subject to Andaman weather and harbour authority clearances.'
  },
  cancellation: {
    title: 'Payment & Cancellation Policy',
    body: 'A 30%–50% advance confirms hotel stays, private ferries, and tour packages, with balance payable upon arrival in Port Blair. Cancellations 15+ days prior to arrival are eligible for refund/credit per seasonal hotel and ferry operator terms. Reach us at +91 9434262082 or gkmgrand@gmail.com.'
  }
};

export default function QuickModal({ modal, onClose, onOpenBooking, onNotify }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    checkin: '',
    checkout: '',
    guests: '1 Room • 2 Adults',
    notes: ''
  });

  useEffect(() => {
    if (modal?.type === 'booking' && modal.data && typeof modal.data === 'object') {
      setForm((prev) => ({
        ...prev,
        checkin: modal.data.checkIn || prev.checkin,
        checkout: modal.data.checkOut || prev.checkout,
        guests: modal.data.guests || prev.guests
      }));
    }
  }, [modal]);

  if (!modal) return null;

  const { type, data } = modal;
  const bookingSubject =
    typeof data === 'object' && data !== null ? data.subject : data;

  const handleBookingSubmit = (e) => {
    e.preventDefault();
    const msg = encodeURIComponent(
      `Hello GKM Grand Andaman!\nEnquiry: ${bookingSubject || 'Hotel / Tour Booking'}\nName: ${form.name}\nPhone: ${form.phone}\nCheck-in: ${form.checkin || 'Flexible'}\nCheck-out: ${form.checkout || 'Flexible'}\nGuests: ${form.guests}\nNotes: ${form.notes}`
    );
    window.open(`https://wa.me/${CONTACT.whatsapp}?text=${msg}`, '_blank');
    onNotify('Enquiry ready! Redirecting to GKM Grand WhatsApp desk.');
    onClose();
  };

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-dialog" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Close modal">
          <X size={18} />
        </button>

        {/* Hotel Detail */}
        {type === 'hotel' && data && (
          <>
            <img src={data.image} alt={data.name} className="modal-hero-img" />
            <div className="modal-body">
              <span className="eyebrow">OUR PROPERTY</span>
              <h3 className="modal-title">{data.name}</h3>
              <div className="modal-meta-row">
                <span className="modal-pill">{data.fullLocation}</span>
                <span className="modal-pill">{data.owner}</span>
              </div>
              <p className="section-desc">{data.description}</p>
              <ul className="modal-list">
                {data.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <button className="btn btn--dark" onClick={() => onOpenBooking(data.name)}>
                Book Stay at {data.name} <ArrowRight size={15} />
              </button>
            </div>
          </>
        )}

        {/* Room Detail */}
        {type === 'room' && data && (
          <>
            <img src={data.image} alt={data.name} className="modal-hero-img" />
            <div className="modal-body">
              <span className="eyebrow">ROOM CATEGORY</span>
              <h3 className="modal-title">{data.name}</h3>
              <div className="modal-meta-row">
                <span className="modal-pill">{data.price}</span>
                <span className="modal-pill">{data.size}</span>
                <span className="modal-pill">{data.occupancy}</span>
              </div>
              <p className="section-desc">{data.description}</p>
              <ul className="modal-list">
                {data.amenities.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
              <button className="btn btn--dark" onClick={() => onOpenBooking(`${data.name} (${data.price})`)}>
                Reserve {data.name} <ArrowRight size={15} />
              </button>
            </div>
          </>
        )}

        {/* Package Detail */}
        {type === 'package' && data && (
          <>
            <img src={data.image} alt={data.title} className="modal-hero-img" />
            <div className="modal-body">
              <span className="eyebrow">{data.category}</span>
              <h3 className="modal-title">{data.title}</h3>
              <div className="modal-meta-row">
                <span className="modal-pill">{data.duration}</span>
                <span className="modal-pill">{data.places}</span>
              </div>
              <p className="section-desc">{data.summary}</p>
              <ul className="modal-list">
                {data.inclusions.map((inc) => (
                  <li key={inc}>{inc}</li>
                ))}
              </ul>
              <div style={{ marginBottom: 20 }}>
                {data.itinerary.map((step) => (
                  <div key={step.day} className="itinerary-day">
                    <h4>{step.day}</h4>
                    <p>{step.desc}</p>
                  </div>
                ))}
              </div>
              <button className="btn btn--dark" onClick={() => onOpenBooking(`${data.title} ${data.duration}`)}>
                Enquire This Package <ArrowRight size={15} />
              </button>
            </div>
          </>
        )}

        {/* Destination Detail */}
        {type === 'destination' && data && (
          <>
            <img src={data.image} alt={data.name} className="modal-hero-img" />
            <div className="modal-body">
              <span className="eyebrow">ANDAMAN DESTINATION</span>
              <h3 className="modal-title">{data.name} — {data.subtitle}</h3>
              <p className="section-desc">{data.description}</p>
              <button className="btn btn--dark" onClick={() => onOpenBooking(`Tour to ${data.name}`)}>
                Plan a Trip to {data.name} <ArrowRight size={15} />
              </button>
            </div>
          </>
        )}

        {/* Water Activities */}
        {type === 'activities' && Array.isArray(data) && (
          <div className="modal-body" style={{ paddingTop: 34 }}>
            <span className="eyebrow">OUR EXPERIENCES</span>
            <h3 className="modal-title">Andaman Water Sports &amp; Island Activities</h3>
            <p className="section-desc">
              GKM Grand coordinates safe, certified water sports across Havelock, North Bay, Elephant Beach, and Neil Island.
            </p>
            <div style={{ display: 'grid', gap: 12, marginBottom: 22 }}>
              {data.map((act) => (
                <div
                  key={act.id}
                  style={{
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: '#F5F8F5',
                    border: '1px solid #E2EAE3'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.9rem', color: '#173B23' }}>
                    {act.label} <span style={{ fontWeight: 500, fontSize: '0.76rem', color: '#2C643B' }}>• {act.locations}</span>
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#4A5A4E', marginTop: 4 }}>{act.desc}</p>
                </div>
              ))}
            </div>
            <button className="btn btn--dark" onClick={() => onOpenBooking('Andaman Water Activities')}>
              Book Water Activities <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* Cruises */}
        {type === 'cruises' && Array.isArray(data) && (
          <div className="modal-body" style={{ paddingTop: 34 }}>
            <span className="eyebrow">CRUISE SERVICES</span>
            <h3 className="modal-title">Private High-Speed Cruises in Andaman</h3>
            <p className="section-desc">
              Seamless ferry ticketing between Port Blair, Havelock (Swaraj Dweep), and Neil Island (Shaheed Dweep).
            </p>
            <div style={{ display: 'grid', gap: 12, marginBottom: 22 }}>
              {data.map((c) => (
                <div
                  key={c.name}
                  style={{
                    padding: '14px 16px',
                    borderRadius: 12,
                    background: '#F5F8F5',
                    border: '1px solid #E2EAE3'
                  }}
                >
                  <div style={{ fontWeight: 700, fontSize: '0.92rem', color: '#173B23' }}>{c.name}</div>
                  <div style={{ fontSize: '0.75rem', color: '#2C643B', fontWeight: 600, margin: '3px 0 5px' }}>
                    {c.route} • {c.duration} • {c.classes}
                  </div>
                  <p style={{ fontSize: '0.8rem', color: '#4A5A4E' }}>{c.desc}</p>
                </div>
              ))}
            </div>
            <button className="btn btn--dark" onClick={() => onOpenBooking('Private Cruise / Ferry Tickets')}>
              Book Cruise Tickets <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* Gallery Lightbox */}
        {type === 'gallery' && data && (
          <>
            <img src={data.src} alt={data.caption} style={{ width: '100%', maxHeight: '65vh', objectFit: 'cover', marginTop: -50 }} />
            <div className="modal-body" style={{ padding: '18px 26px' }}>
              <h3 className="modal-title" style={{ fontSize: '1.25rem', marginBottom: 4 }}>{data.caption}</h3>
              <p className="section-desc" style={{ marginBottom: 0 }}>GKM Grand Hotels &amp; Andaman Tours</p>
            </div>
          </>
        )}

        {/* About GKM Grand */}
        {type === 'about' && (
          <div className="modal-body" style={{ paddingTop: 34 }}>
            <span className="eyebrow">ABOUT GKM GRAND ANDAMAN</span>
            <h3 className="modal-title">Your Trusted Hotelier &amp; Local DMC Since 2018</h3>
            <p className="section-desc">
              GKM Grand Andaman operates both as a hotelier and a local Destination Management Company (DMC) in the Andaman &amp; Nicobar Islands, with over 3,000 happy customers and a 4.8 Google Rating.
            </p>
            <ul className="modal-list">
              <li>Hotel GKM Grand — Owned by Mr. A. Guru Swamy</li>
              <li>Hotel Guru International — Owned by Mr. G. Prabhakaran</li>
              <li>Located at Jogger’s Park, AHW Colony, Nayagaon, Port Blair</li>
              <li>Own fleet of AC Tempo Travellers, Xylo cabs &amp; two-wheelers</li>
              <li>Honeymoon, Family, Group, Best Seller &amp; Andaman LTC Packages</li>
              <li>24/7 Local Expert Team &amp; On-Ground Trip Assistance</li>
            </ul>
            <button className="btn btn--dark" onClick={() => onOpenBooking('General Enquiry')}>
              Contact Our Team <ArrowRight size={15} />
            </button>
          </div>
        )}

        {/* Policy Modal */}
        {type === 'policy' && POLICIES[data] && (
          <div className="modal-body" style={{ paddingTop: 34 }}>
            <span className="eyebrow">GKM GRAND SUPPORT</span>
            <h3 className="modal-title">{POLICIES[data].title}</h3>
            <p className="section-desc" style={{ marginBottom: 0 }}>{POLICIES[data].body}</p>
          </div>
        )}

        {/* Booking Form Modal */}
        {type === 'booking' && (
          <div className="modal-body" style={{ paddingTop: 34 }}>
            <span className="eyebrow">INSTANT BOOKING ENQUIRY</span>
            <h3 className="modal-title">Plan Your Andaman Stay &amp; Tour</h3>
            <p className="section-desc" style={{ marginBottom: 8 }}>
              {bookingSubject
                ? `Selected: ${bookingSubject}`
                : 'Fill in your travel details and our Port Blair team will respond promptly.'}
            </p>
            <form onSubmit={handleBookingSubmit}>
              <div className="booking-form-grid">
                <div className="form-group">
                  <label className="form-label">Full Name *</label>
                  <input
                    className="form-control"
                    required
                    placeholder="Your Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Phone / WhatsApp *</label>
                  <input
                    className="form-control"
                    required
                    placeholder="+91 98765 43210"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Check-In Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={form.checkin}
                    onChange={(e) => setForm({ ...form, checkin: e.target.value })}
                  />
                </div>
                <div className="form-group">
                  <label className="form-label">Check-Out Date</label>
                  <input
                    type="date"
                    className="form-control"
                    value={form.checkout}
                    onChange={(e) => setForm({ ...form, checkout: e.target.value })}
                  />
                </div>
                <div className="form-group full">
                  <label className="form-label">Rooms &amp; Guests</label>
                  <select
                    className="form-control"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                  >
                    <option>1 Room • 2 Adults</option>
                    <option>1 Room • 3 Adults</option>
                    <option>2 Rooms • 4 Adults</option>
                    <option>Family / Group (5+ Guests)</option>
                  </select>
                </div>
                <div className="form-group full">
                  <label className="form-label">Preferences / Notes</label>
                  <textarea
                    rows="3"
                    className="form-control"
                    placeholder="Room preference, Havelock/Neil cruise, candlelight dinner, LTC bill..."
                    value={form.notes}
                    onChange={(e) => setForm({ ...form, notes: e.target.value })}
                  />
                </div>
              </div>
              <div style={{ marginTop: 18, display: 'flex', gap: 12, flexWrap: 'wrap' }}>
                <button type="submit" className="btn btn--dark">
                  Send Enquiry on WhatsApp <ArrowRight size={15} />
                </button>
                <a href={`tel:${CONTACT.phones[0].replace(/\s+/g, '')}`} className="btn btn--sage">
                  Call {CONTACT.phones[0]}
                </a>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
