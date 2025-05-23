import React from 'react';
import Layout from '../components/layout/Layout';
import HeroBanner from '../components/home/HeroBanner';
import SEO from '../components/common/SEO';
import { getOrganizationSchema } from '../utils/seo';
import '../styles/pages/HomePage.scss';

// Import page components when created
// import HeroBanner from '../components/home/HeroBanner';
// import MissionSection from '../components/home/MissionSection';
// import ImpactSection from '../components/home/ImpactSection';
// import ActionSection from '../components/home/ActionSection';

const HomePage: React.FC = () => {
  return (
    <>
      <SEO 
        path="/"
        structuredData={getOrganizationSchema()}
      />
      <Layout>
        <div className="home-page">
          <HeroBanner 
            title="Reshaping Tomorrow"
            subtitle="Join us in creating a better future through awareness, education, and action"
            buttonText="Get Started"
            onButtonClick={() => window.location.href = '/get-involved'}
          />

          {/* Mission Section */}
          <section className="mission-section">
            <h2 className="section-title">Our Mission</h2>
            <p className="section-description">We believe in empowering individuals and communities with knowledge and resources to create lasting positive change.</p>
            {/* Mission content will go here */}
          </section>

          {/* Impact Section */}
          <section className="impact-section">
            <h2 className="section-title">Nothing Changes If Nothing Changes</h2>
            <div className="impact-grid">
              {/* Impact blocks will go here */}
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="cta-section">
            <h2 className="section-title">Transforming Lives Through Actions</h2>
            <div className="stats-container">
              <div className="stat-item">
                <h3>800+</h3>
                <p>Lives Impacted</p>
              </div>
            </div>
            <button className="primary-button">Learn More</button>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default HomePage; 