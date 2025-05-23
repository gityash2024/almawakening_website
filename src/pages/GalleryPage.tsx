import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/GalleryPage.scss';

const GalleryPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Gallery"
        description="Explore our gallery of images and videos that showcase Almawakening's events, initiatives, and impact in communities."
        keywords="gallery, photos, videos, events, community impact, almawakening"
        path="/gallery"
        ogImage="https://www.almawakening.org/og-image-gallery.jpg"
      />
      <Layout>
        <div className="gallery-page">
          <section className="gallery-hero">
            <div className="container">
              <h1>Our Month-by-Month Journey In Change</h1>
              <p className="subtitle">Join hands, share knowledge, and help communities grow through impactful events</p>
            </div>
            
            <div className="gallery-timeline">
              <div className="timeline-navigation">
                <button className="nav-button active">2025</button>
                <button className="nav-button">2024</button>
                <button className="nav-button">2023</button>
                <button className="nav-button">2022</button>
                <button className="nav-button">All</button>
              </div>

              <div className="month-grid">
                <div className="month-section">
                  <h2>April 2025</h2>
                  <div className="month-gallery">
                    <div className="gallery-item">
                      <img src="/images/gallery/april2025-1.jpg" alt="April 2025 Event" />
                      <div className="gallery-overlay">
                        <h3>Women's Empowerment Summit</h3>
                        <p>New York City</p>
                      </div>
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/april2025-2.jpg" alt="April 2025 Event" />
                      <div className="gallery-overlay">
                        <h3>Community Leadership Workshop</h3>
                        <p>Chicago</p>
                      </div>
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/april2025-3.jpg" alt="April 2025 Event" />
                      <div className="gallery-overlay">
                        <h3>Youth Mentorship Program</h3>
                        <p>Los Angeles</p>
                      </div>
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/april2025-4.jpg" alt="April 2025 Event" />
                      <div className="gallery-overlay">
                        <h3>Environmental Cleanup Drive</h3>
                        <p>Seattle</p>
                      </div>
                    </div>
                  </div>
                  <button className="view-all-button">View All</button>
                </div>

                <div className="month-section">
                  <h2>March 2025</h2>
                  <div className="month-gallery">
                    <div className="gallery-item">
                      <img src="/images/gallery/march2025-1.jpg" alt="March 2025 Event" />
                      <div className="gallery-overlay">
                        <h3>Tech for Change Conference</h3>
                        <p>San Francisco</p>
                      </div>
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/march2025-2.jpg" alt="March 2025 Event" />
                      <div className="gallery-overlay">
                        <h3>Healthcare Access Initiative</h3>
                        <p>Boston</p>
                      </div>
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/march2025-3.jpg" alt="March 2025 Event" />
                      <div className="gallery-overlay">
                        <h3>Education Equity Symposium</h3>
                        <p>Atlanta</p>
                      </div>
                    </div>
                    <div className="gallery-item">
                      <img src="/images/gallery/march2025-4.jpg" alt="March 2025 Event" />
                      <div className="gallery-overlay">
                        <h3>Community Garden Project</h3>
                        <p>Portland</p>
                      </div>
                    </div>
                  </div>
                  <button className="view-all-button">View All</button>
                </div>
              </div>
            </div>
          </section>

          <section className="featured-gallery">
            <div className="container">
              <h2 className="section-title">Featured Collections</h2>

              <div className="collections-grid">
                <div className="collection-card">
                  <img src="/images/gallery/collection1.jpg" alt="Women Empowerment Collection" />
                  <div className="collection-info">
                    <h3>Women Empowerment</h3>
                    <p>Celebrating women's leadership and achievements</p>
                    <button className="secondary-button">View Collection</button>
                  </div>
                </div>

                <div className="collection-card">
                  <img src="/images/gallery/collection2.jpg" alt="Youth Initiatives Collection" />
                  <div className="collection-info">
                    <h3>Youth Initiatives</h3>
                    <p>Building the next generation of change-makers</p>
                    <button className="secondary-button">View Collection</button>
                  </div>
                </div>

                <div className="collection-card">
                  <img src="/images/gallery/collection3.jpg" alt="Community Projects Collection" />
                  <div className="collection-info">
                    <h3>Community Projects</h3>
                    <p>Local actions creating global impact</p>
                    <button className="secondary-button">View Collection</button>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="video-gallery">
            <div className="container">
              <h2 className="section-title">Video Stories</h2>

              <div className="videos-grid">
                <div className="video-item">
                  <div className="video-thumbnail">
                    <img src="/images/gallery/video1.jpg" alt="Video 1" />
                    <div className="play-button"></div>
                  </div>
                  <h3>The Story of Hope</h3>
                  <p>How a small community transformed their neighborhood</p>
                </div>

                <div className="video-item">
                  <div className="video-thumbnail">
                    <img src="/images/gallery/video2.jpg" alt="Video 2" />
                    <div className="play-button"></div>
                  </div>
                  <h3>Voices of Change</h3>
                  <p>Interviews with community leaders</p>
                </div>

                <div className="video-item">
                  <div className="video-thumbnail">
                    <img src="/images/gallery/video3.jpg" alt="Video 3" />
                    <div className="play-button"></div>
                  </div>
                  <h3>Youth in Action</h3>
                  <p>Young activists making a difference</p>
                </div>
              </div>
            </div>
          </section>

          <section className="submit-section">
            <div className="container">
              <div className="submit-content">
                <h2>Share Your Story With Us</h2>
                <p>Have you been part of our events? Share your photos and stories with our community.</p>
                <button className="primary-button">Submit Your Content</button>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default GalleryPage; 