import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import { getEventSchema } from '../utils/seo';
import '../styles/pages/EventsPage.scss';
import BePartofTheChange from '../assets/images/BePartofTheChange.png';
import image_1 from '../assets/images/image_1.png';
import image_2 from '../assets/images/image_2.png';
import image_3 from '../assets/images/image_3.png';
import WomenEmpowermentTraining from '../assets/images/WomenEmpowermentTraining.png';
import FreeMedicalCamp from '../assets/images/FreeMedicalCamp.png';
import CleanUpDriveWorld from '../assets/images/CleanUpDriveWorld.png';
import questionMark from '../assets/images/questionMark.svg';

const EventsPage: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const galleryImages = [image_1, image_2, image_3];

  const events = [
    {
      id: 1,
      title: "Women Empowerment Training",
      description: "Forem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate.",
      date: "Date: 15 March 2025",
      location: "Location: Jaipur",
      image: WomenEmpowermentTraining,
      color: "purple"
    },
    {
      id: 2,
      title: "Free Medical Camp",
      description: "Providing consultations and medicines to 800+ villagers",
      date: "Date: 5 February 2025",
      location: "Location: Nashik",
      image: FreeMedicalCamp,
      color: "pink"
    },
    {
      id: 3,
      title: "Clean-Up Drive - World Cleanup Day",
      description: "300+ volunteers collecting more than 1,200kg of waste",
      date: "Date: 16 September 2024",
      location: "Location: Mumbai Beaches",
      image: CleanUpDriveWorld,
      color: "yellow"
    }
  ];

  const faqs = [
    {
      question: "Is my donation secure?",
      answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."
    },
    {
      question: "Will I receive a receipt?",
      answer: "Yes, you will receive an email receipt immediately after your donation is processed."
    },
    {
      question: "How is the money spent?",
      answer: "We provide detailed reports on how donations are allocated across our various programs and initiatives."
    },
    {
      question: "Can I volunteer instead of donating?",
      answer: "Absolutely! We welcome volunteers and have various opportunities available throughout the year."
    }
  ];

  const handlePrevImage = () => {
    setCurrentImageIndex(prev => prev === 0 ? galleryImages.length - 1 : prev - 1);
  };

  const handleNextImage = () => {
    setCurrentImageIndex(prev => prev === galleryImages.length - 1 ? 0 : prev + 1);
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? -1 : index);
  };

  return (
    <>
      {/* <SEO
        title="Events"
        description="Join our impactful events and be part of the change in communities worldwide"
        keywords="events, community impact, volunteer, change, almawakening"
        path="/events"
        structuredData={getEventSchema()}
      /> */}
      <Layout>
        <div className="events-page">
          {/* Hero Section - Image 1 */}
          <section className="hero-section">
            <div className="hero-background" style={{ backgroundImage: `url(${BePartofTheChange})` }}>
              <div className="hero-content">
                <div className="hero-image">
                  <img src={galleryImages[currentImageIndex]} alt="Community impact" />
                </div>
              </div>
            </div>
          </section>

          {/* Events Cards Section - Image 2 */}
          <section className="events-section">
            <div className="container">
              <div className="events-grid">
                {events.map((event) => (
                  <div key={event.id} className={`event-card ${event.color}`}>
                    <div className="event-background" style={{ backgroundImage: `url(${event.image})` }}></div>
                    <div className="event-content">
                      <h3>{event.title}</h3>
                      <p className="event-description">{event.description}</p>
                      <p className="event-date">{event.date}</p>
                      <p className="event-location">{event.location}</p>
                      
                      <div className="event-buttons">
                        <button className="volunteer-btn">Volunteer Now</button>
                        <button className="participate-btn">
                          Participate
                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                            <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Gallery Section - Image 3 */}
          <section className="gallery-section">
            <div className="container">
              <div className="gallery-grid">
                <div className="gallery-main">
                  <img src={galleryImages[0]} alt="Main gallery" />
                </div>
                <div className="gallery-side">
                  <div className="gallery-item">
                    <img src={galleryImages[1]} alt="Gallery 1" />
                  </div>
                  <div className="gallery-item">
                    <img src={galleryImages[2]} alt="Gallery 2" />
                  </div>
                </div>
              </div>
              
              <div className="gallery-navigation">
                <button className="nav-btn prev-btn" onClick={handlePrevImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="nav-btn next-btn" onClick={handleNextImage}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* FAQ Section - Image 4 */}
          <section className="faq-section">
            <div className="container">
              <div className="faq-header">
                <div className="faq-icon">
                  <img src={questionMark} alt="FAQ" />
                </div>
                <h2>Frequently Asked Questions</h2>
                <p>See what people often asks us?</p>
              </div>
              
              <div className="faq-list">
                {faqs.map((faq, index) => (
                  <div key={index} className={`faq-item ${openFaq === index ? 'active' : ''}`}>
                    <button 
                      className="faq-question"
                      onClick={() => toggleFaq(index)}
                    >
                      <span>{faq.question}</span>
                      <div className="faq-toggle">
                        {openFaq === index ? (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M8 12h8" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        ) : (
                          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                            <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2"/>
                          </svg>
                        )}
                      </div>
                    </button>
                    <div className={`faq-answer ${openFaq === index ? 'show' : ''}`}>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section - Image 5 */}
          <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <h2>Want to Host or Join an Event?</h2>
                <p>Whether you're an expert or a helping hand, your participation creates real change.</p>
                <div className="cta-buttons">
                  <button className="host-btn">Host An Event!</button>
                  <button className="volunteer-btn">Join As Volunteer</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default EventsPage;