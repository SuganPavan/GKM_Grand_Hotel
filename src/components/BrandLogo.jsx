import React from 'react';

export default function BrandLogo({ inverted = false }) {
  const primary = inverted ? '#FFFFFF' : '#173B23';
  const accent = inverted ? '#A5D892' : '#7AB365';

  return (
    <a href="#home" className="brand-logo" aria-label="GKM Grand Hotels & Resorts">
      <svg className="brand-mark" viewBox="0 0 48 48" fill="none">
        <path
          d="M8 28C12 16 20 11 24 11C28 11 36 16 40 28"
          stroke={primary}
          strokeWidth="2.4"
          strokeLinecap="round"
        />
        <path
          d="M14 27C17 19 21 16 24 16C27 16 31 19 34 27"
          stroke={accent}
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <circle cx="24" cy="22" r="2.8" fill={accent} />
        <path
          d="M6 31C11 28.5 16 28.5 24 31C32 33.5 37 33.5 42 31"
          stroke={primary}
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <path
          d="M11 36C15.5 34.2 19.5 34.2 24 36C28.5 37.8 32.5 37.8 37 36"
          stroke={accent}
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
      <div className="brand-text">
        <span className="brand-name">GKM GRAND</span>
        <span className="brand-sub">HOTELS &amp; RESORTS</span>
      </div>
    </a>
  );
}
