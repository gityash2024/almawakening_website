import React, { useState, useRef } from 'react';
import Layout from '../components/layout/Layout';
import HeroBanner from '../components/home/HeroBanner';
import SEO from '../components/common/SEO';
import { getOrganizationSchema } from '../utils/seo';
import '../styles/pages/HomePage.scss';
import Donate_1 from '../assets/images/Donate_1.png';
import Donate_2 from '../assets/images/Donate_2.png';
import ourmission from '../assets/images/ourmission.png';


import discover_1 from '../assets/images/discover_1.png';
import image_1 from '../assets/images/image_1.png';
import image_2 from '../assets/images/image_2.png';
import image_3 from '../assets/images/image_3.png';
import TrustedPartners_1 from '../assets/images/TrustedPartners_1.svg';
import TrustedPartners_2 from '../assets/images/TrustedPartners_2.svg';
import TrustedPartners_3 from '../assets/images/TrustedPartners_3.svg';
import TrustedPartners_4 from '../assets/images/TrustedPartners_4.svg';
import TrustedPartners_5 from '../assets/images/TrustedPartners_5.svg';
import TrustedPartners_6 from '../assets/images/TrustedPartners_6.svg';
import TrustedPartners_7 from '../assets/images/TrustedPartners_7.svg';
import TrustedPartners_8 from '../assets/images/TrustedPartners_8.svg';
import TrustedPartners_9 from '../assets/images/TrustedPartners_9.svg';
import TrustedPartners_10 from '../assets/images/TrustedPartners_10.svg';
import TrustedPartners_11 from '../assets/images/TrustedPartners_11.svg';
import TrustedPartners_12 from '../assets/images/TrustedPartners_12.svg';
import albert_flores from '../assets/images/albert_flores.svg';
import questionMark from '../assets/images/questionMark.svg';

const HomePage: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Display 3 videos at once in grid layout
  const videos = [
    { id: 1, url: 'https://www.youtube.com/watch?v=EUVY8hnK07g' },
    { id: 2, url: 'https://www.youtube.com/watch?v=3_YtB44p_ts' },
    { id: 3, url: 'https://www.youtube.com/watch?v=rwxRoYzwkyM' }
  ];
  
  // Additional sets of videos for pagination
  const videoSets = [
    [
      { id: 1, url: 'https://www.youtube.com/watch?v=EUVY8hnK07g' },
      { id: 2, url: 'https://www.youtube.com/watch?v=3_YtB44p_ts' },
      { id: 3, url: 'https://www.youtube.com/watch?v=rwxRoYzwkyM' }
    ],
    [
      { id: 4, url: 'https://www.youtube.com/watch?v=rwxRoYzwkyM' },
      { id: 5, url: 'https://www.youtube.com/watch?v=EUVY8hnK07g' },
      { id: 6, url: 'https://www.youtube.com/watch?v=3_YtB44p_ts' }
    ]
  ];
  
  const getYoutubeEmbedUrl = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://www.youtube.com/embed/${videoId}`;
  };
  
  const getYoutubeThumbnail = (url: string) => {
    const videoId = url.split('v=')[1]?.split('&')[0];
    return `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  };
  
  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? videoSets.length - 1 : prev - 1));
  };
  
  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev === videoSets.length - 1 ? 0 : prev + 1));
  };

  return (
    <>
      <SEO
        path="/"
        structuredData={getOrganizationSchema()}
      />
      <Layout>
        <div className="home-page">
          {/* Reshaping Tomorrow Section */}
          <section className="reshaping-section">
            <div className="reshaping-header">
              <h1>Reshaping Tomorrow</h1>
              <p>Great futures are built with a small change.</p>
              <div className="donate-button-container">
                <button className="donate-button">Donate Now</button>
              </div>
            </div>
            
            <div className="cards-container">
              <div className="card purple-card">
                <h2>65%</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>
                <button className="card-button">Donate Now <span>→</span></button>
              </div>
              
              <div className="card image-card">
                <img src={Donate_1} alt="Person with prosthetic leg" />
                <div className="card-overlay">
                  <h3>Let Them Be Heard.</h3>
                </div>
              </div>
              
              <div className="card pink-card">
                <h3>Join 5000+ People Donate.</h3>
                <button className="card-button">Explore Events <span>→</span></button>
              </div>
              
              <div className="card image-card-second">
                <img src={Donate_2} alt="Person blowing dandelion" />
              </div>
              
              <div className="card yellow-card">
                <p>At Almawakening Foundation, we help people build better lives through education, healthcare, and strong communities.</p>
                <button className="card-button">Explore more <span>→</span></button>
              </div>
              
              <div className="card dark-card">
                <h3>Your Home For Charity.</h3>
              </div>
            </div>
          </section>

          {/* Our Mission Section */}
          <section className="mission-section">
            <div className="mission-header">
              <div className="mission-icon">
                <span className="icon-target">🎯</span>
              </div>
              <h2>Our Mission</h2>
              <p className="mission-description">
                At Almawakening Foundation, we believe in transforming lives through education, 
                healthcare, and community empowerment. Our goal is to create sustainable 
                change by providing support where it's needed the most.
              </p>
            </div>

            <div className="video-slider" ref={sliderRef}>
              <div className="slider-container">
                {videoSets[currentSlide].map((video, index) => (
                  <div key={video.id} className="slide">
                    <div className="video-wrapper">
                      <div 
                        className="video-thumbnail"
                        style={{
                          backgroundImage: `url(${getYoutubeThumbnail(video.url)})`,
                          backgroundSize: 'cover',
                          backgroundPosition: 'center'
                        }}
                      >
                        <div className="play-button">
                          <span>▶</span>
                        </div>
                        <iframe 
                          src={getYoutubeEmbedUrl(video.url)} 
                          title={`Video ${video.id}`}
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          loading="lazy"
                          style={{ display: 'none' }}
                        ></iframe>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="slider-controls">
                <button className="prev-button" onClick={handlePrevSlide}>
                  <span>←</span>
                </button>
                <button className="next-button" onClick={handleNextSlide}>
                  <span>→</span>
                </button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default HomePage;