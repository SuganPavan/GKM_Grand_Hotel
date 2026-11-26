import React, { useState } from 'react';
import { Building2, CalendarDays, Users, ArrowRight } from 'lucide-react';

function formatDateInput(offsetDays = 0) {
  const date = new Date();
  date.setDate(date.getDate() + offsetDays);
  return date.toISOString().split('T')[0];
}

export default function BookingBar({ onBook }) {
  const today = formatDateInput(0);
  const [hotel, setHotel] = useState('Hotel GKM Grand, Port Blair');
  const [checkIn, setCheckIn] = useState(formatDateInput(1));
  const [checkOut, setCheckOut] = useState(formatDateInput(3));
  const [guests, setGuests] = useState('1 Room • 2 Adults');

  const handleCheckInChange = (value) => {
    setCheckIn(value);
    if (checkOut && value >= checkOut) {
      const nextDay = new Date(value);
      nextDay.setDate(nextDay.getDate() + 1);
      setCheckOut(nextDay.toISOString().split('T')[0]);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const nights = Math.max(
      1,
      Math.round((new Date(checkOut) - new Date(checkIn)) / (1000 * 60 * 60 * 24))
    );
    onBook({
      subject: `${hotel} (${nights} Night${nights > 1 ? 's' : ''})`,
      hotel,
      checkIn,
      checkOut,
      guests
    });
  };

  return (
    <section className="booking-bar-section" aria-label="Quick Room Reservation">
      <div className="container">
        <form className="booking-bar-card" onSubmit={handleSubmit}>
          {/* Property */}
          <div className="booking-field">
            <label htmlFor="bk-hotel" className="booking-field-label">
              <Building2 size={14} color="#2C643B" />
              <span>Select Hotel</span>
            </label>
            <select
              id="bk-hotel"
              className="booking-field-input"
              value={hotel}
              onChange={(e) => setHotel(e.target.value)}
            >
              <option value="Hotel GKM Grand, Port Blair">Hotel GKM Grand, Port Blair</option>
              <option value="Hotel Guru International, Port Blair">Hotel Guru International, Port Blair</option>
            </select>
          </div>

          <div className="booking-field-divider" aria-hidden="true" />

          {/* Check-In */}
          <div className="booking-field">
            <label htmlFor="bk-checkin" className="booking-field-label">
              <CalendarDays size={14} color="#2C643B" />
              <span>Check-In</span>
            </label>
            <input
              id="bk-checkin"
              type="date"
              min={today}
              className="booking-field-input"
              value={checkIn}
              onChange={(e) => handleCheckInChange(e.target.value)}
              required
            />
          </div>

          <div className="booking-field-divider" aria-hidden="true" />

          {/* Check-Out */}
          <div className="booking-field">
            <label htmlFor="bk-checkout" className="booking-field-label">
              <CalendarDays size={14} color="#2C643B" />
              <span>Check-Out</span>
            </label>
            <input
              id="bk-checkout"
              type="date"
              min={checkIn || today}
              className="booking-field-input"
              value={checkOut}
              onChange={(e) => setCheckOut(e.target.value)}
              required
            />
          </div>

          <div className="booking-field-divider" aria-hidden="true" />

          {/* Guests */}
          <div className="booking-field">
            <label htmlFor="bk-guests" className="booking-field-label">
              <Users size={14} color="#2C643B" />
              <span>Rooms &amp; Guests</span>
            </label>
            <select
              id="bk-guests"
              className="booking-field-input"
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
            >
              <option value="1 Room • 2 Adults">1 Room • 2 Adults</option>
              <option value="1 Room • 3 Adults">1 Room • 3 Adults</option>
              <option value="2 Rooms • 4 Adults">2 Rooms • 4 Adults</option>
              <option value="Family / Group (5+ Guests)">Family / Group (5+ Guests)</option>
            </select>
          </div>

          {/* Book Now CTA */}
          <button type="submit" className="booking-submit-btn">
            <span>Book Now</span>
            <ArrowRight size={16} className="btn-arrow" />
          </button>
        </form>
      </div>
    </section>
  );
}
