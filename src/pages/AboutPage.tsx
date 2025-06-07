import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/AboutPage.scss';
import aboutusbackgroundlogo from '../assets/images/aboutusbackgroundlogo.png';
import logo from '../assets/images/logo.png';
import AlmaChopra from '../assets/images/AlmaChopra.png';
import OurMonthbyMonth_1 from '../assets/images/OurMonthbyMonth_1.png';
import OurMonthbyMonth_2 from '../assets/images/OurMonthbyMonth_2.png';
import OurMonthbyMonth_3 from '../assets/images/OurMonthbyMonth_3.png';
import albert_flores from '../assets/images/albert_flores.svg';
import contactlogo from '../assets/images/contactlogo.png';
import Contactus from '../assets/images/Contactus.svg';
import questionMark from '../assets/images/questionMark.svg';

const AboutPage: React.FC = () => {
  // State for dynamic testimonials navigation
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      quote: "People now recognise that having a good performance conversation means that something happens as a result.",
      subQuote: "With Landingfolio, the design team can now build design which identifies employees' career aspirations and goals and from which we approach managers and check to see what is happening.",
      author: "Albert Flores",
      role: "Product Manager at Jomanar",
      image: albert_flores
    },
    {
      quote: "Almawakening transformed my perspective on life. Their community programs gave me hope and direction when I needed it most.",
      subQuote: "The support system and guidance provided helped me overcome my challenges and find new opportunities for growth and personal development.",
      author: "Sarah Johnson",
      role: "Community Member",
      image: AlmaChopra
    },
    {
      quote: "The inclusive approach and genuine care from the Almawakening team helped me find my purpose and connect with amazing people.",
      subQuote: "Through their programs, I discovered my passion for helping others and now contribute actively to community development initiatives.",
      author: "Michael Chen",
      role: "Volunteer Coordinator",
      image: logo
    }
  ];

  // Navigation handlers for testimonials
  const handlePrevTestimonial = () => {
    setCurrentTestimonial(prev => prev === 0 ? testimonials.length - 1 : prev - 1);
  };

  const handleNextTestimonial = () => {
    setCurrentTestimonial(prev => prev === testimonials.length - 1 ? 0 : prev + 1);
  };

  const handleExploreMore = (): void => {
    console.log('Explore more clicked');
  };

  const handleVolunteerNow = (): void => {
    console.log('Volunteer Now clicked');
  };

  const currentTestimonialData = testimonials[currentTestimonial];

  return (
    <>
      <SEO
        title="About Us"
        description="Learn about Almawakening's mission, vision, values, and the team behind our work to create positive social change."
        keywords="almawakening about, non-profit mission, vision, values, team"
        path="/about"
        ogImage="https://www.almawakening.org/og-image-about.jpg"
      />
      
      <Layout>
        <div className="about-page-container">
          {/* First Section - We Are Change Makers */}
          <section className="change-makers-section">
            <div className="change-makers-background">
              <div className="change-makers-content">
                <div className="change-makers-text-content">
                  <h1 className="change-makers-title">We Are Change Makers</h1>
                  <p className="change-makers-description">
                    To transform lives through positivity, empowering individuals to unlock 
                    their full potential and create lasting change through initiatives like life 
                    coaching, motivational speaking, and community engagement
                  </p>
                </div>
                
                <div className="change-makers-image-container">
                  <img 
                    src={logo}
                    alt="Almawakening team group photo"
                    className="change-makers-group-image"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Second Section - About Our Founder */}
          <section className="founder-section">
            <div className="founder-container">
              <div className="founder-card">
                <div className="founder-content">
                  <div className="founder-text">
                    <h2 className="founder-title">About Our Founder</h2>
                    <h3 className="founder-subtitle">Alma Chopra: Redefining Strength, Breaking Barriers</h3>
                    <p className="founder-description">
                      Diagnosed with cerebellar ataxia at 10, she have faced many 
                      challenges, but she have turned them into opportunities for 
                      growth and empowerment. She is passionate about raising 
                      awareness for disabilities and promoting inclusion, believing that 
                      every obstacle is a chance to grow stronger.
                    </p>
                    
                    <button 
                      onClick={handleExploreMore}
                      className="founder-explore-btn"
                    >
                      Explore more
                    </button>
                  </div>
                  
                  <div className="founder-image-container">
                    <img 
                      src={AlmaChopra}
                      alt="Alma Chopra - Founder"
                      className="founder-image"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Third Section - Movement & Volunteer */}
          <section className="movement-section">
            <div className="movement-container">
              <div className="movement-content">
                <div className="movement-images-overlap">
                  <div className="image-container-1">
                    <img 
                      src={OurMonthbyMonth_1}
                      alt="Community event 1"
                      className="movement-image"
                    />
                  </div>
                  <div className="image-container-2">
                    <img 
                      src={OurMonthbyMonth_2}
                      alt="Community event 2"
                      className="movement-image"
                    />
                  </div>
                  <div className="image-container-3">
                    <img 
                      src={OurMonthbyMonth_3}
                      alt="Community event 3"
                      className="movement-image"
                    />
                  </div>
                </div>
                
                <div className="movement-text">
                  <p className="movement-description">
                    Be a part of a movement that transforms lives. Whether you 
                    donate, volunteer, or spread awareness, every action 
                    counts.
                  </p>
                  
                  <button 
                    onClick={handleVolunteerNow}
                    className="movement-volunteer-btn"
                  >
                    Volunteer Now!
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Fourth Section - We Believe In & Our History */}
          <section className="beliefs-history-section">
            <div className="beliefs-history-container">
              {/* We Believe In */}
              <div className="beliefs-section">
                <h2 className="beliefs-title">We Believe In</h2>
                
                <div className="beliefs-grid">
                  <div className="belief-card compassion-card">
                    <div className="belief-icon">❤️</div>
                    <h3 className="belief-name">Compassion</h3>
                    <p className="belief-description">
                      We believe in kindness and empathy, 
                      ensuring that every individual is 
                      treated with respect and care.
                    </p>
                  </div>
                  
                  <div className="belief-card equality-card">
                    <div className="belief-icon">⚖️</div>
                    <h3 className="belief-name">Equality</h3>
                    <p className="belief-description">
                      We stand for fairness, justice, and 
                      equal opportunities for all, regardless 
                      of background.
                    </p>
                  </div>
                  
                  <div className="belief-card collaboration-card">
                    <div className="belief-icon">🤝</div>
                    <h3 className="belief-name">Collaboration</h3>
                    <p className="belief-description">
                      We partner with individuals, 
                      organizations, and communities to 
                      maximize impact.
                    </p>
                  </div>
                  
                  <div className="belief-card sustainability-card">
                    <div className="belief-icon">🌱</div>
                    <h3 className="belief-name">Sustainability</h3>
                    <p className="belief-description">
                      We create long-term solutions that 
                      empower communities and foster 
                      resilience.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Our History */}
              <div className="history-section">
                <div className="history-container">
                  <h2 className="history-title">Our History</h2>
                  
                  <div className="history-timeline">
                    <div className="history-item">
                      <div className="history-year">2010</div>
                      <div className="history-content">
                        <p>Almawakening was founded with the vision of social upliftment.</p>
                      </div>
                    </div>
                    
                    <div className="history-item">
                      <div className="history-year">2015</div>
                      <div className="history-content">
                        <p>Expanded our reach to serve over 1000 community members across regions.</p>
                      </div>
                    </div>
                    
                    <div className="history-item">
                      <div className="history-year">2018</div>
                      <div className="history-content">
                        <p>Launched comprehensive healthcare and education programs.</p>
                      </div>
                    </div>
                    
                    <div className="history-item">
                      <div className="history-year">2024</div>
                      <div className="history-content">
                        <p>Achieved significant milestones in community empowerment and inclusion.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* New Section - Testimonials */}
          <section className="testimonials-section-new">
            <div className="testimonials-container-new">
              <div className="testimonials-content-new">
                <div className="testimonial-text-new">
                  <div className="quote-icon-new">❝</div>
                  <p className="testimonial-quote-main">
                    {currentTestimonialData.quote}
                  </p>
                  <p className="testimonial-quote-sub">
                    {currentTestimonialData.subQuote}
                  </p>
                  <div className="testimonial-author-new">
                    <h4>{currentTestimonialData.author}</h4>
                    <p>{currentTestimonialData.role}</p>
                  </div>
                </div>
                
                <div className="testimonial-image-container-new">
                  <img 
                    src={currentTestimonialData.image}
                    alt={currentTestimonialData.author}
                    className="testimonial-image-new"
                  />
                </div>
              </div>
              
              <div className="testimonials-navigation-new">
                <button className="nav-btn-new prev-btn-new" onClick={handlePrevTestimonial}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="nav-btn-new next-btn-new" onClick={handleNextTestimonial}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </section>

          {/* New Section - Contact Us */}
          <section className="contact-section-new">
            <div className="contact-container-new">
              <div className="contact-card-new">
                <div className="contact-icon-new">
                  <img src={Contactus} alt="Contact Icon" />
                </div>
                
                <h2 className="contact-title-new">Contact Us</h2>
                <p className="contact-description-new">
                  Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.
                </p>
                
                <div className="contact-details-new">
                  <div className="contact-item-new">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M2.5 6.25L10 10.625L17.5 6.25M2.5 6.25V13.125C2.5 13.8154 3.05964 14.375 3.75 14.375H16.25C16.9404 14.375 17.5 13.8154 17.5 13.125V6.25M2.5 6.25C2.5 5.55964 3.05964 5 3.75 5H16.25C16.9404 5 17.5 5.55964 17.5 6.25" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>+012 345 6789</span>
                  </div>
                  
                  <div className="contact-item-new">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                      <path d="M17.5 5L10 10.5L2.5 5M2.5 2.5H17.5C18.1904 2.5 18.75 3.05964 18.75 3.75V15C18.75 15.6904 18.1904 16.25 17.5 16.25H2.5C1.80964 16.25 1.25 15.6904 1.25 15V3.75C1.25 3.05964 1.80964 2.5 2.5 2.5Z" stroke="#2D3748" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <span>Hello@animaapp.com</span>
                  </div>
                </div>
              </div>
              
              <div className="contact-wave-background">
                <img src={contactlogo} alt="Wave Background" className="contact-wave-image" />
              </div>
            </div>
          </section>

          {/* New Section - FAQ */}
          <section className="faq-section-new">
            <div className="faq-container-new">
              <div className="faq-header-new">
                <div className="faq-icon-new">
                  <img src={questionMark} alt="Question Mark" />
                </div>
                <h2>Frequently Asked Questions</h2>
                <p>See what people often asks us?</p>
              </div>
              
              <div className="faq-list-new">
                <div className="faq-item-new active">
                  <div className="faq-question-new">
                    <span>Is my donation secure?</span>
                    <div className="faq-toggle-new">−</div>
                  </div>
                  <div className="faq-answer-new">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                  </div>
                </div>
                
                <div className="faq-item-new">
                  <div className="faq-question-new">
                    <span>Will I receive a receipt?</span>
                    <div className="faq-toggle-new">+</div>
                  </div>
                </div>
                
                <div className="faq-item-new">
                  <div className="faq-question-new">
                    <span>How is the money spent?</span>
                    <div className="faq-toggle-new">+</div>
                  </div>
                </div>
                
                <div className="faq-item-new">
                  <div className="faq-question-new">
                    <span>Can I volunteer instead of donating?</span>
                    <div className="faq-toggle-new">+</div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default AboutPage;