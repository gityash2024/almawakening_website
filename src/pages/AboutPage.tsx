import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/AboutPage.scss';
import aboutusbackgroundlogo from '../assets/images/aboutusbackgroundlogo.png';
import logo from '../assets/images/logo.png';
import AlmaChopra from '../assets/images/AlmaChopra.png';
import OurMonthbyMonth_1 from '../assets/images/OurMonthbyMonth_1.png';
import OurMonthbyMonth_2 from '../assets/images/OurMonthbyMonth_2.png';
import OurMonthbyMonth_3 from '../assets/images/OurMonthbyMonth_3.png';

const AboutPage: React.FC = () => {
  const handleExploreMore = (): void => {
    // Add navigation logic here
    console.log('Explore more clicked');
  };

  const handleVolunteerNow = (): void => {
    // Add navigation logic here
    console.log('Volunteer Now clicked');
  };

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
            <div 
              className="change-makers-background"
              style={{ backgroundImage: `url(${aboutusbackgroundlogo})` }}
            >
              <div className="change-makers-content">
                {/* <h1 className="change-makers-title">We Are Change Makers</h1> */}
                {/* <p className="change-makers-description">
                  To transform lives through positivity, empowering individuals to unlock<br />
                  their full potential and create lasting change through initiatives like life<br />
                  coaching, motivational speaking, and community engagement
                </p> */}
                
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
                      <div className="history-year">2010</div>
                      <div className="history-content">
                        <p>Almawakening was founded with the vision of social upliftment.</p>
                      </div>
                    </div>
                    
                    <div className="history-item">
                      <div className="history-year">2010</div>
                      <div className="history-content">
                        <p>Almawakening was founded with the vision of social upliftment.</p>
                      </div>
                    </div>
                    
                    <div className="history-item">
                      <div className="history-year">2010</div>
                      <div className="history-content">
                        <p>Almawakening was founded with the vision of social upliftment.</p>
                      </div>
                    </div>
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