import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/DonatePage.scss';
import donateBackground from '../assets/images/donateBackground.png';
import donatelogo from '../assets/images/donatelogo.png';
import IgniteImpact from '../assets/images/IgniteImpact.png';
import DriveChange from '../assets/images/DriveChange.png';
import EveryRupeeCounts from '../assets/images/EveryRupeeCounts.png';
import albert_flores from '../assets/images/albert_flores.svg';
import Contactus from '../assets/images/Contactus.svg'; 
import contactlogo from '../assets/images/contactlogo.png';
import questionMark from '../assets/images/questionMark.svg';
import BeAnAlly from '../assets/images/BeAnAlly.png';

const DonatePage: React.FC = () => {
  const [donationAmount, setDonationAmount] = useState(100);
  const [selectedAmount, setSelectedAmount] = useState<number | null>(null);
  const [otherAmount, setOtherAmount] = useState<string>('');

  const donationOptions = [
    [30, 40, 50, 100],
    [150, 300, 450, 500],
    [1000, 1500, 3000, 4000]
  ];

  const handleSliderChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDonationAmount(parseInt(event.target.value));
  };

  const handleAmountSelect = (amount: number) => {
    setSelectedAmount(amount);
    setOtherAmount('');
  };

  const handleOtherAmountChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOtherAmount(event.target.value);
    setSelectedAmount(null);
  };

  const handleContribute = () => {
    const finalAmount = selectedAmount || parseInt(otherAmount) || 0;
    console.log('Contributing amount:', finalAmount);
    // Add your contribution logic here
  };

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
          {/* Hero Section */}
          <section className="hero-section">
            <div 
              className="hero-background"
              style={{ backgroundImage: `url(${BeAnAlly})` }}
            >
              <div className="hero-content">
                <div className="hero-image-container">
                  <img src={donatelogo} alt="Community support" className="hero-image" />
                </div>
              </div>
            </div>
          </section>

          {/* Cards Section */}
          <section className="cards-section">
            <div className="cards-container">
              <div className="card card-purple">
                <div className="card-icon">♥</div>
                <h3 className="card-title">Ignite Impact</h3>
                <p className="card-description">
                  Spark joy by sharing your cause and positive impact it brings. 
                  Clearly express how contribution will make meaningful difference.
                </p>
              </div>
              
              <div className="card card-coral">
                <div className="card-icon">✦</div>
                <h3 className="card-title">Drive Change</h3>
                <p className="card-description">
                  Every contribution helps uplift real people and communities 
                  through sustainable, grassroots initiatives.
                </p>
              </div>
              
              <div className="card card-yellow">
                <div className="card-icon">⚡</div>
                <h3 className="card-title">Every Rupee Counts</h3>
                <p className="card-description">
                  No matter the amount, your support brings hope, healing, 
                  and opportunity to someone who truly needs it.
                </p>
              </div>
            </div>
          </section>

          {/* Interactive Donation Section */}
          <section className="donation-section">
            <div className="donation-container">
              <h2 className="donation-title">Learn How Your Gift Helps</h2>
              <p className="donation-subtitle">Even the smallest contribution can make a difference.</p>
              
              <div className="slider-container">
                <div className="slider-labels">
                  <span className="slider-min">₹1</span>
                  <span className="slider-max">₹1000</span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="1000"
                  value={donationAmount}
                  onChange={handleSliderChange}
                  className="donation-slider"
                />
              </div>
              
              <div className="amount-display">
                <span className="amount-label">Total Rupees</span>
                <div className="amount-value">₹ {donationAmount}</div>
              </div>
              
              <div className="donation-cards">
                <div className="donation-card">
                  <h4>Ignite Impact</h4>
                  <p>Spark joy by sharing your cause and positive impact it brings. 
                     Clearly express how contribution will make meaningful difference.</p>
                </div>
                
                <div className="donation-card">
                  <h4>Drive Change</h4>
                  <p>Every contribution helps uplift real people and communities 
                     through sustainable, grassroots initiatives.</p>
                </div>
                
                <div className="donation-card">
                  <h4>Every Rupee Counts</h4>
                  <p>No matter the amount, your support brings hope, healing, 
                     and opportunity to someone who truly needs it.</p>
                </div>
              </div>
              
              <button className="support-button">Be a Support</button>
            </div>
          </section>

          {/* Testimonial Section */}
          <section className="testimonial-section">
            <div className="testimonial-container">
              <blockquote className="testimonial-quote">
                "When you give to Almawakening, you're investing in real stories, 
                real change, and real futures"
              </blockquote>
              
              <button className="circle-button">Join our Circle of Hope!</button>
              
              <p className="consistent-support">Consistent support means consistent impact!</p>
              
              <div className="testimonial-content">
                <div className="testimonial-text">
                  <h3>"People now recognise that having a good performance conversation 
                      means that something happens as a result."</h3>
                  
                  <p>"With Landingfolio, the design team can now build design which 
                     identifies employees' career aspirations and goals and from which 
                     we approach managers and check to see what is happening."</p>
                </div>
                
                <div className="testimonial-image">
                  <img src={albert_flores} alt="Albert Flores" />
                </div>
              </div>
              
              <div className="testimonial-navigation">
                <button className="nav-button nav-prev">←</button>
                <button className="nav-button nav-next">→</button>
              </div>
            </div>
          </section>

          {/* Amount Selection Section */}
          <section className="amount-selection-section">
            <div className="amount-selection-container">
              <div className="amount-selection-content">
                <div className="amount-title-section">
                  <h2 className="amount-title">
                    Be a Helping Hand for<br />
                    Better Cause
                  </h2>
                </div>
                
                <div className="amount-options-section">
                  <div className="amount-grid">
                    {donationOptions.map((row, rowIndex) => (
                      <div key={rowIndex} className="amount-row">
                        {row.map((amount) => (
                          <button
                            key={amount}
                            className={`amount-button ${selectedAmount === amount ? 'active' : ''}`}
                            onClick={() => handleAmountSelect(amount)}
                          >
                            ₹{amount}
                          </button>
                        ))}
                      </div>
                    ))}
                  </div>
                  
                  <div className="amount-actions">
                    <input
                      type="number"
                      placeholder="Other Amount"
                      value={otherAmount}
                      onChange={handleOtherAmountChange}
                      className="other-amount-input"
                    />
                    <button 
                      className="contribute-button"
                      onClick={handleContribute}
                    >
                      Contribute
                    </button>
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

export default DonatePage;