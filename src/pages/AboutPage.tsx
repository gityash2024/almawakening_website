import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/AboutPage.scss';

const AboutPage: React.FC = () => {
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
        <div className="about-page">
          <section className="about-hero">
            <div className="about-hero-content">
              <h1>We Are Change Makers</h1>
              <p>To transform lives through outreach to empower individuals to think critically about society. We do this through promoting awareness, education, advocacy, and community engagement.</p>
              <img src="/images/team-photo.jpg" alt="Almawakening Team" className="team-photo" />
            </div>
          </section>

          <section className="founder-section">
            <div className="founder-content">
              <h2>About Our Founder</h2>
              <div className="founder-info">
                <div className="founder-text">
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam vitae erat eu quam egestas varius. Maurya lorem rhoncus ligula, a pretium nisi lacinia et.</p>
                  <button className="secondary-button">Learn More</button>
                </div>
                <div className="founder-image">
                  <img src="/images/founder.jpg" alt="Founder" />
                </div>
              </div>
            </div>
          </section>

          <section className="belief-section">
            <h2>We Believe In</h2>
            <p>Our core values and principles that guide our vision for a better world</p>
            <div className="values-grid">
              <div className="value-card">
                <h3>Empathy</h3>
                <p>We approach every individual and situation with understanding and compassion</p>
              </div>
              <div className="value-card">
                <h3>Action</h3>
                <p>We believe in meaningful action that creates tangible impact in communities</p>
              </div>
              <div className="value-card">
                <h3>Inclusivity</h3>
                <p>We welcome and value all voices, experiences, and perspectives</p>
              </div>
              <div className="value-card">
                <h3>Integrity</h3>
                <p>We operate with honesty, transparency, and accountability in all we do</p>
              </div>
            </div>
          </section>

          <section className="history-section">
            <h2>Our History</h2>
            <div className="timeline">
              <div className="timeline-item">
                <span className="year">2018</span>
                <div className="timeline-content">
                  <p>Almawakening was founded with a mission to create social change</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="year">2020</span>
                <div className="timeline-content">
                  <p>Expanded our community outreach programs to 5 new cities</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="year">2022</span>
                <div className="timeline-content">
                  <p>Launched our digital platform to reach global audiences</p>
                </div>
              </div>
              <div className="timeline-item">
                <span className="year">2024</span>
                <div className="timeline-content">
                  <p>Celebrating over 500 community events and workshops</p>
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