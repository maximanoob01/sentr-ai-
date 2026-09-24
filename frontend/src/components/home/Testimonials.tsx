import React, { useState, useEffect } from 'react';
import './Testimonials.css';
import manImg from '../../assets/blogs/man.png';

const testimonials = [
  {
    id: 1,
    quote: "“Sentr AI understood our operational requirements and helped us build a technology environment that is more reliable, secure, and easier to manage. Their team has been responsive throughout the engagement.”",
    name: "Rahul Mehta",
    title: "Head of Operations · Manufacturing"
  },
  {
    id: 2,
    quote: "“What stood out was their proactive approach. Instead of simply responding to issues, the team worked with us to identify potential gaps and improve our overall IT infrastructure.”",
    name: "Ankit Sharma",
    title: "IT Director · Enterprise Services"
  },
  {
    id: 3,
    quote: "“Sentr AI brought together infrastructure, security, and managed services under one team. This made it much easier for us to manage our technology requirements.”",
    name: "Priya Nair",
    title: "Technology & Digital Transformation Lead · Logistics"
  }
];

export const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  return (
    <section className="testimonials-section section-y">
      <div className="container">
        <div className="testimonials__header">
          <h2 className="testimonials__heading">WHAT OUR CLIENTS SAY</h2>
          <p className="testimonials__sub">Real technology. Real business impact.</p>
        </div>

        <div className="testimonials__content">
          {/* Left Column: Image */}
          <div className="testimonials__image-col">
            <div className="testimonials__image-wrap">
              <img src={manImg} alt="Client" className="testimonials__image" />
              <div className="testimonials__floating-tag">
                Secure, reliable & expertly<br />managed technology operations.
              </div>
            </div>
          </div>

          {/* Right Column: Quote */}
          <div className="testimonials__quote-col">
            <div className="testimonials__quote-card">
              <p className="testimonials__quote-text">
                {testimonials[activeIndex].quote}
              </p>
              
              <div className="testimonials__quote-author">
                <strong>{testimonials[activeIndex].name}</strong>
                <span>{testimonials[activeIndex].title}</span>
              </div>

              <div className="testimonials__controls">
                <button className="testimonials__btn" onClick={prevTestimonial} aria-label="Previous">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                </button>
                <button className="testimonials__btn" onClick={nextTestimonial} aria-label="Next">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
              </div>
            </div>
            
            {/* Thumbnails placeholder for future if needed */}
            <div className="testimonials__thumbnails">
              {testimonials.map((t, index) => (
                <div 
                  key={t.id} 
                  className={`testimonials__thumb ${index === activeIndex ? 'active' : ''}`}
                  onClick={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
