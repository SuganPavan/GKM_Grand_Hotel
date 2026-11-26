import React, { useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Star } from 'lucide-react';
import PalmAccent from './PalmAccent';
import { GALLERY_IMAGES, REVIEWS } from '../data/homeData';

export default function GalleryReviewsSection({ onOpenModal }) {
  const [reviewIdx, setReviewIdx] = useState(0);

  const prevReview = () =>
    setReviewIdx((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length);
  const nextReview = () =>
    setReviewIdx((prev) => (prev + 1) % REVIEWS.length);

  const currentReview = REVIEWS[reviewIdx];

  return (
    <section id="gallery" className="gallery-reviews-section section-palm-wrap">
      <PalmAccent position="left" />
      <PalmAccent position="right" />

      <div className="container section-inner">
        <div className="gallery-reviews-grid">
          {/* Left: Our Gallery */}
          <div className="gallery-box">
            <div className="gallery-intro">
              <span className="eyebrow">OUR GALLERY</span>
              <h2 className="section-title">A Visual Journey Through Andaman</h2>
              <p className="section-desc">Explore our photo gallery.</p>
              <button
                className="btn btn--dark btn--sm"
                onClick={() => onOpenModal('gallery', GALLERY_IMAGES[0])}
              >
                View Gallery <ArrowRight size={14} className="btn-arrow" />
              </button>
            </div>

            <div className="gallery-mosaic">
              {GALLERY_IMAGES.map((img) => (
                <div
                  key={img.caption}
                  className="gallery-thumb"
                  onClick={() => onOpenModal('gallery', img)}
                >
                  <img src={img.src} alt={img.caption} loading="lazy" />
                </div>
              ))}
            </div>
          </div>

          {/* Right: Guest Reviews */}
          <div className="reviews-card">
            <img
              className="reviews-bg-img"
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1000&q=80"
              alt="Happy Guests in Andaman"
              loading="lazy"
            />
            <div className="reviews-bg-fade" />

            <div className="reviews-content">
              <span className="eyebrow">GUEST REVIEWS</span>
              <h2 className="section-title">Our Guests, Our Greatest Stories.</h2>

              <div className="reviews-sub-row">
                <p className="section-desc">Trusted by thousands of happy travellers.</p>
                <div className="review-nav-btns">
                  <button
                    type="button"
                    className="review-nav-btn"
                    aria-label="Previous review"
                    onClick={prevReview}
                  >
                    <ChevronLeft size={13} />
                  </button>
                  <button
                    type="button"
                    className="review-nav-btn"
                    aria-label="Next review"
                    onClick={nextReview}
                  >
                    <ChevronRight size={13} />
                  </button>
                </div>
              </div>

              <div className="google-rating-pill">
                <div className="rating-stars" aria-label="4.8 out of 5 stars">
                  <Star size={18} fill="#F5B82E" color="#F5B82E" />
                  <Star size={18} fill="#F5B82E" color="#F5B82E" />
                </div>
                <div className="rating-meta">
                  <span className="rating-score">4.8 Google Rating</span>
                  <span className="rating-count">(160 Reviews)</span>
                </div>
              </div>

              <p className="review-quote-ticker">
                “{currentReview.quote}”{' '}
                <span className="review-quote-author">
                  — {currentReview.author}, {currentReview.city}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
