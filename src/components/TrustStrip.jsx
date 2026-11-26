import React from 'react';
import { Building2, Users, Star, Gem, Headphones, ShieldCheck } from 'lucide-react';

const HIGHLIGHTS = [
  { icon: Building2, line1: 'Local Tour Operator', line2: 'Since 2018' },
  { icon: Users, line1: 'More Than 3,000', line2: 'Happy Customers' },
  { icon: Star, line1: '4.8 Google Rating', line2: '' },
  { icon: Gem, line1: 'Customized', line2: 'Tour Packages' },
  { icon: Headphones, line1: '24/7 Trip Assistance', line2: '' },
  { icon: ShieldCheck, line1: 'Local Expert Team', line2: '' }
];

export default function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="GKM Grand Highlights">
      <div className="container">
        <div className="trust-grid">
          {HIGHLIGHTS.map(({ icon: Icon, line1, line2 }) => (
            <div key={line1} className="trust-item">
              <Icon size={25} strokeWidth={1.7} color="#1E4D2B" />
              <div className="trust-label">
                {line1}
                {line2 && (
                  <>
                    <br />
                    {line2}
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
