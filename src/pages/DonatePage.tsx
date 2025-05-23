import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/DonatePage.scss';

const DonatePage: React.FC = () => {
  return (
    <>
      <SEO
        title="Donate"
        description="Support our mission by donating to Almawakening. Your contribution helps us create positive change in communities."
        keywords="donate, support, contribution, charity, nonprofit, almawakening"
        path="/donate"
        ogImage="https://www.almawakening.org/og-image-donate.jpg"
      />
      <Layout>
        <div className="donate-page">
          <section className="donate-hero">
            <div className="container">
              <h1>Be an Ally</h1>
              <p className="subtitle">Your support drives our mission to create lasting positive change</p>
              
              <div className="donation-options">
                <div className="monthly-donation">
                  <h2>Monthly Donation</h2>
                  <p>Join our community of monthly donors</p>
                  <div className="donation-amounts">
                    <button className="amount-button">$10</button>
                    <button className="amount-button active">$25</button>
                    <button className="amount-button">$50</button>
                    <button className="amount-button">$100</button>
                    <button className="amount-button custom">Custom</button>
                  </div>
                  <button className="primary-button">Donate Monthly</button>
                </div>
                
                <div className="one-time-donation">
                  <h2>One-time Donation</h2>
                  <p>Make a one-time contribution</p>
                  <div className="donation-amounts">
                    <button className="amount-button">$50</button>
                    <button className="amount-button active">$100</button>
                    <button className="amount-button">$250</button>
                    <button className="amount-button">$500</button>
                    <button className="amount-button custom">Custom</button>
                  </div>
                  <button className="primary-button">Donate Now</button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="impact-section">
            <div className="container">
              <h2 className="section-title">Your Impact</h2>
              <div className="impact-cards">
                <div className="impact-card">
                  <div className="impact-icon education"></div>
                  <h3>Education</h3>
                  <p>$25 provides educational materials for a child for one month</p>
                </div>
                <div className="impact-card">
                  <div className="impact-icon health"></div>
                  <h3>Healthcare</h3>
                  <p>$50 provides basic medical services for a family in need</p>
                </div>
                <div className="impact-card">
                  <div className="impact-icon community"></div>
                  <h3>Community</h3>
                  <p>$100 supports community development projects for a week</p>
                </div>
              </div>
            </div>
          </section>
          
          <section className="other-ways-section">
            <div className="container">
              <h2 className="section-title">Other Ways to Give</h2>
              <div className="ways-grid">
                <div className="way-card">
                  <h3>Corporate Partnerships</h3>
                  <p>Partner with us to create meaningful social impact</p>
                  <button className="secondary-button">Learn More</button>
                </div>
                <div className="way-card">
                  <h3>Legacy Giving</h3>
                  <p>Leave a lasting legacy through planned giving</p>
                  <button className="secondary-button">Learn More</button>
                </div>
                <div className="way-card">
                  <h3>Fundraise</h3>
                  <p>Start your own fundraising campaign</p>
                  <button className="secondary-button">Learn More</button>
                </div>
              </div>
            </div>
          </section>
          
          <section className="faq-section">
            <div className="container">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-container">
                <div className="faq-item">
                  <h3>Is my donation tax-deductible?</h3>
                  <p>Yes, Almawakening is a registered 501(c)(3) nonprofit organization. Your donations are tax-deductible to the extent allowed by law.</p>
                </div>
                <div className="faq-item">
                  <h3>How is my donation used?</h3>
                  <p>Your donation directly supports our programs in education, community development, and advocacy. Approximately 85% of all donations go directly to our programs.</p>
                </div>
                <div className="faq-item">
                  <h3>Can I make a recurring donation?</h3>
                  <p>Yes, you can set up monthly, quarterly, or annual recurring donations through our secure payment system.</p>
                </div>
                <div className="faq-item">
                  <h3>How do I get a receipt for my donation?</h3>
                  <p>A receipt will be automatically emailed to you after your donation is processed. If you need another copy, please contact our donor support team.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default DonatePage; 