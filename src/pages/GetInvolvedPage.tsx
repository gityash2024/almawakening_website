import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/GetInvolvedPage.scss';

const GetInvolvedPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Get Involved"
        description="Join Almawakening and make a difference. Discover ways to volunteer, partner with us, or support our initiatives to create positive change."
        keywords="volunteer, get involved, community service, social impact, donate, partner"
        path="/get-involved"
        ogImage="https://www.almawakening.org/og-image-get-involved.jpg"
      />
      <Layout>
        <div className="get-involved-page">
          <section className="hero-section">
            <div className="container">
              <h1>Join Our Mission</h1>
              <p className="subtitle">Together, we can create lasting change in communities around the world</p>
            </div>
          </section>

          <section className="involvement-options">
            <div className="container">
              <div className="options-grid">
                <div className="option-card volunteer">
                  <div className="option-content">
                    <h2>Volunteer</h2>
                    <p>Share your time and skills to support our programs and make a direct impact in communities.</p>
                    <ul className="benefits-list">
                      <li>Flexible time commitments</li>
                      <li>Remote and in-person opportunities</li>
                      <li>Skills-based volunteering</li>
                      <li>Group volunteering for teams</li>
                    </ul>
                    <button className="primary-button">Become a Volunteer</button>
                  </div>
                </div>

                <div className="option-card partner">
                  <div className="option-content">
                    <h2>Partner With Us</h2>
                    <p>Organizations and businesses can collaborate with us to amplify social impact.</p>
                    <ul className="benefits-list">
                      <li>Corporate social responsibility programs</li>
                      <li>Joint initiatives and campaigns</li>
                      <li>Resource sharing and capacity building</li>
                      <li>Long-term partnership opportunities</li>
                    </ul>
                    <button className="primary-button">Explore Partnerships</button>
                  </div>
                </div>

                <div className="option-card fundraise">
                  <div className="option-content">
                    <h2>Fundraise</h2>
                    <p>Start your own fundraising campaign to support our initiatives and mobilize your network.</p>
                    <ul className="benefits-list">
                      <li>Personalized fundraising pages</li>
                      <li>Event-based fundraising support</li>
                      <li>Peer-to-peer fundraising tools</li>
                      <li>Campaign materials and resources</li>
                    </ul>
                    <button className="primary-button">Start Fundraising</button>
                  </div>
                </div>

                <div className="option-card advocate">
                  <div className="option-content">
                    <h2>Advocate</h2>
                    <p>Raise awareness about important causes and help amplify our message to create change.</p>
                    <ul className="benefits-list">
                      <li>Social media advocacy toolkits</li>
                      <li>Community awareness campaigns</li>
                      <li>Policy advocacy opportunities</li>
                      <li>Spokesperson training</li>
                    </ul>
                    <button className="primary-button">Become an Advocate</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="current-opportunities">
            <div className="container">
              <h2 className="section-title">Current Opportunities</h2>
              <div className="opportunities-list">
                <div className="opportunity-item">
                  <div className="opportunity-content">
                    <span className="badge">Remote</span>
                    <h3>Digital Marketing Assistant</h3>
                    <p>Help manage our social media presence and digital campaigns to raise awareness about our causes.</p>
                    <div className="opportunity-meta">
                      <span className="time">5-10 hours/week</span>
                      <span className="location">Remote</span>
                    </div>
                    <button className="secondary-button">Learn More</button>
                  </div>
                </div>

                <div className="opportunity-item">
                  <div className="opportunity-content">
                    <span className="badge">In-Person</span>
                    <h3>Community Workshop Facilitator</h3>
                    <p>Lead educational workshops in underserved communities to share knowledge and skills.</p>
                    <div className="opportunity-meta">
                      <span className="time">Weekend events</span>
                      <span className="location">New York City</span>
                    </div>
                    <button className="secondary-button">Learn More</button>
                  </div>
                </div>

                <div className="opportunity-item">
                  <div className="opportunity-content">
                    <span className="badge">Partnership</span>
                    <h3>Corporate Giving Program</h3>
                    <p>Join our network of business partners who contribute to community development initiatives.</p>
                    <div className="opportunity-meta">
                      <span className="time">Ongoing</span>
                      <span className="location">Nationwide</span>
                    </div>
                    <button className="secondary-button">Learn More</button>
                  </div>
                </div>

                <div className="opportunity-item">
                  <div className="opportunity-content">
                    <span className="badge">Advocacy</span>
                    <h3>Youth Education Campaign</h3>
                    <p>Help promote equal access to educational opportunities for underprivileged youth.</p>
                    <div className="opportunity-meta">
                      <span className="time">3-month campaign</span>
                      <span className="location">Virtual</span>
                    </div>
                    <button className="secondary-button">Learn More</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="impact-stories">
            <div className="container">
              <h2 className="section-title">Impact Stories</h2>
              <div className="stories-grid">
                <div className="story-card">
                  <img src="/images/get-involved/volunteer-story.jpg" alt="Volunteer Story" />
                  <div className="story-content">
                    <h3>Sarah's Volunteer Journey</h3>
                    <p>"Volunteering with Almawakening has been life-changing. I've developed new skills and connected with amazing people while making a real difference."</p>
                    <button className="text-button">Read Full Story</button>
                  </div>
                </div>

                <div className="story-card">
                  <img src="/images/get-involved/partner-story.jpg" alt="Partner Story" />
                  <div className="story-content">
                    <h3>Tech Company Partnership</h3>
                    <p>"Our partnership allowed us to leverage technology to improve educational access for over 500 students in underserved communities."</p>
                    <button className="text-button">Read Full Story</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="faq-section">
            <div className="container">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-grid">
                <div className="faq-item">
                  <h3>What skills do I need to volunteer?</h3>
                  <p>We welcome volunteers with diverse skills and backgrounds. Whether you have expertise in marketing, education, technology, or simply a passion to help, we have opportunities for everyone.</p>
                </div>

                <div className="faq-item">
                  <h3>How much time do I need to commit?</h3>
                  <p>We offer flexible volunteering opportunities ranging from one-time events to ongoing weekly commitments. You can choose what works best for your schedule.</p>
                </div>

                <div className="faq-item">
                  <h3>Can I volunteer remotely?</h3>
                  <p>Yes! Many of our volunteer opportunities can be done remotely, allowing you to contribute from anywhere in the world.</p>
                </div>

                <div className="faq-item">
                  <h3>How do partnerships work?</h3>
                  <p>We collaborate with organizations that share our values and mission. Partnerships can include financial support, joint programs, skill-sharing, or resource donation.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="cta-section">
            <div className="container">
              <div className="cta-content">
                <h2>Ready to Make a Difference?</h2>
                <p>Join our community of changemakers today and help create lasting impact.</p>
                <div className="cta-buttons">
                  <button className="primary-button">Get Started</button>
                  <button className="secondary-button">Contact Us</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default GetInvolvedPage; 