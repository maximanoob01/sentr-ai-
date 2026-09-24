import React from 'react';
import './TechStrip.css';

const techItems = [
  'Edge Computing',
  'Real-Time Analytics',
  'Predictive Insights',
  'Cybersecurity',
  'Azure Cloud',
  'Artificial Intelligence'
];

export const TechStrip: React.FC = () => {
  // Duplicate for seamless loop
  const items = [...techItems, ...techItems];

  return (
    <div className="tech-strip" aria-label="Technology capabilities">
      <div className="tech-strip__inner">
        <div className="marquee-track">
          {items.map((item, i) => (
            <div key={i} className="marquee-item">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
