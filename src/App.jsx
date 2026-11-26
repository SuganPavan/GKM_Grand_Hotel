import React, { Suspense, lazy, useEffect, useRef, useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BookingBar from './components/BookingBar';
import AboutHotelsSection from './components/AboutHotelsSection';
import RoomsSection from './components/RoomsSection';
import PackagesSection from './components/PackagesSection';
import ActivitiesSection from './components/ActivitiesSection';
import DestinationsSection from './components/DestinationsSection';
import ReviewsSection from './components/ReviewsSection';
import Footer from './components/Footer';

const QuickModal = lazy(() => import('./components/QuickModal'));

const SCROLL_REVEAL_SELECTORS = [
  '.booking-bar-card',
  '.pkg-header',
  '.pkg-hero-stage',
  '.guestbook-header',
  '.guestbook-spread',
  '.footer-cta-banner',
  '.footer-grid-v2'
];

export default function App() {
  const [modal, setModal] = useState(null);
  const [toast, setToast] = useState('');
  const progressRef = useRef(null);

  const openModal = (type, data) => setModal({ type, data });
  const openBooking = (payload = '') => setModal({ type: 'booking', data: payload });
  const closeModal = () => setModal(null);

  const notify = (message) => {
    setToast(message);
    setTimeout(() => setToast(''), 3500);
  };

  // Global smooth scroll-reveal observer + top gold scroll progress indicator
  useEffect(() => {
    const targets = Array.from(
      document.querySelectorAll(SCROLL_REVEAL_SELECTORS.join(','))
    );

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let observer;
    if (!prefersReduced && typeof IntersectionObserver !== 'undefined') {
      targets.forEach((el) => el.classList.add('sr-reveal'));

      observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('sr-in');
            } else if (entry.boundingClientRect.top > window.innerHeight * 0.9) {
              entry.target.classList.remove('sr-in');
            }
          });
        },
        { threshold: 0.1, rootMargin: '0px 0px -36px 0px' }
      );

      targets.forEach((el) => observer.observe(el));
    }

    let rafId = 0;
    const updateProgress = () => {
      rafId = 0;
      const bar = progressRef.current;
      if (!bar) return;
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const pct = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      bar.style.transform = `scaleX(${pct})`;
    };

    const onScroll = () => {
      if (!rafId) rafId = requestAnimationFrame(updateProgress);
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    updateProgress();

    return () => {
      observer?.disconnect();
      window.removeEventListener('scroll', onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div className="scroll-progress-track" aria-hidden="true">
        <div ref={progressRef} className="scroll-progress-bar" />
      </div>

      <Navbar onOpenModal={openModal} onOpenBooking={openBooking} />

      <main>
        <HeroSection />
        <BookingBar onBook={openBooking} />
        <AboutHotelsSection onOpenModal={openModal} />
        <RoomsSection onOpenModal={openModal} onOpenBooking={openBooking} />
        <PackagesSection onOpenModal={openModal} onOpenBooking={openBooking} />
        <ActivitiesSection onOpenModal={openModal} onOpenBooking={openBooking} />
        <DestinationsSection onOpenModal={openModal} onOpenBooking={openBooking} />
        <ReviewsSection />
      </main>

      <Footer onOpenModal={openModal} onOpenBooking={openBooking} onNotify={notify} />

      {modal && (
        <Suspense fallback={null}>
          <QuickModal
            modal={modal}
            onClose={closeModal}
            onOpenBooking={openBooking}
            onNotify={notify}
          />
        </Suspense>
      )}

      {toast && <div className="toast">{toast}</div>}
    </>
  );
}
