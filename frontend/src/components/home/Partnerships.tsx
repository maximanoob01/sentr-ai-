import React from 'react';
import './Partnerships.css';

import logo1 from '../../assets/alliance logo/1.png';
import logo2 from '../../assets/alliance logo/2.png';
import logo3 from '../../assets/alliance logo/3.png';
import logo4 from '../../assets/alliance logo/4.png';
import logo5 from '../../assets/alliance logo/5.png';
import logo6 from '../../assets/alliance logo/6.png';
import logo7 from '../../assets/alliance logo/7.png';
import logo8 from '../../assets/alliance logo/8.png';

const partners = [
  { id: 1, logo: logo1, name: 'Partner 1' },
  { id: 2, logo: logo2, name: 'Partner 2' },
  { id: 3, logo: logo3, name: 'Partner 3' },
  { id: 4, logo: logo4, name: 'Partner 4' },
  { id: 5, logo: logo5, name: 'Partner 5' },
  { id: 6, logo: logo6, name: 'Partner 6' },
  { id: 7, logo: logo7, name: 'Partner 7' },
  { id: 8, logo: logo8, name: 'Partner 8' },
];

export const Partnerships: React.FC = () => {
  return (
    <section className="partnerships-section section-y">
      <div className="partnerships__dots partnerships__dots--tr" aria-hidden="true"></div>
      <div className="partnerships__dots partnerships__dots--bl" aria-hidden="true"></div>
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div className="partnerships__header text-center">
          <span className="section-label text-blue">OUR PARTNERS</span>
          <h2 className="partnerships__heading">We work with the best partners</h2>
        </div>
        
        <div className="partnerships__grid">
          {partners.map(partner => (
            <div key={partner.id} className="partnerships__card">
              <img src={partner.logo} alt={partner.name} className="partnerships__logo" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
