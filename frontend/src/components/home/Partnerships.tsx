import React from 'react';
import './Partnerships.css';

import logo1 from '../../assets/alliance logo/1.png';
import logo2 from '../../assets/alliance logo/2.png';
import logo3 from '../../assets/alliance logo/3.png';
import logo4 from '../../assets/alliance logo/4.png';
import logo5 from '../../assets/alliance logo/5.png';
import logo6 from '../../assets/alliance logo/6.png';
import logo7 from '../../assets/alliance logo/7.png';
import logo9 from '../../assets/alliance logo/9.png';
import logo10 from '../../assets/alliance logo/10.png';
import logo11 from '../../assets/alliance logo/11.png';
import logo12 from '../../assets/alliance logo/12.png';
import logo13 from '../../assets/alliance logo/13.png';

const partners = [
  { id: 1, logo: logo1, name: 'Partner 1' },
  { id: 2, logo: logo2, name: 'Partner 2' },
  { id: 3, logo: logo3, name: 'Partner 3' },
  { id: 4, logo: logo4, name: 'Partner 4' },
  { id: 5, logo: logo5, name: 'Partner 5' },
  { id: 6, logo: logo6, name: 'Partner 6' },
  { id: 7, logo: logo7, name: 'Partner 7' },
  { id: 8, logo: logo9, name: 'Partner 8' },
  { id: 9, logo: logo10, name: 'Partner 9' },
  { id: 10, logo: logo11, name: 'Partner 10' },
  { id: 11, logo: logo12, name: 'Partner 11', isZoomed: true },
  { id: 12, logo: logo13, name: 'Partner 12' },
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
            <div 
              key={partner.id} 
              className={`partnerships__card ${partner.isZoomed ? 'partnerships__card--zoomed' : ''}`}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className={`partnerships__logo ${partner.isZoomed ? 'partnerships__logo--zoomed' : ''}`} 
              />
            </div>
          ))}
          {/* Duplicated for mobile marquee */}
          {partners.map(partner => (
            <div 
              key={`dup-${partner.id}`} 
              className={`partnerships__card partnerships__card--dup ${partner.isZoomed ? 'partnerships__card--zoomed' : ''}`}
            >
              <img 
                src={partner.logo} 
                alt={partner.name} 
                className={`partnerships__logo ${partner.isZoomed ? 'partnerships__logo--zoomed' : ''}`} 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
