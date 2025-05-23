import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/ResourcesPage.scss';

const ResourcesPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Resources"
        description="Access resources, articles, and educational materials from Almawakening to help you learn about social issues and create positive change."
        keywords="resources, education, articles, guides, social change, community resources"
        path="/resources"
        ogImage="https://www.almawakening.org/og-image-resources.jpg"
      />
      <Layout>
        <div className="resources-page">
          <section className="resources-hero">
            <div className="container">
              <h1>Stories and Interviews</h1>
              <p className="subtitle">Educational resources and inspirational stories for building awareness</p>
              <div className="featured-resource">
                <img src="/images/resources-hero.jpg" alt="Featured Resource" className="featured-image" />
                <div className="resource-info">
                  <span className="category">Featured</span>
                  <h3>Understanding Social Injustice in Modern Communities</h3>
                  <p>This comprehensive guide explores the root causes of social injustice and provides actionable steps for creating change.</p>
                  <button className="primary-button">Read Now</button>
                </div>
              </div>
            </div>
          </section>

          <section className="stories-section">
            <div className="container">
              <h2 className="section-title">Story of the Month/Day</h2>

              <div className="story-highlight">
                <div className="story-content">
                  <h3>Finding Hope Amid Challenges</h3>
                  <blockquote>
                    "When you work with communities facing hardship, you learn that resilience isn't just about surviving—it's about finding joy and purpose even in difficult circumstances."
                  </blockquote>
                  <p>Meet Sarah, a community organizer who has been working with underserved neighborhoods for over a decade. Her story of persistence and compassion has inspired countless individuals to become advocates for change in their own communities.</p>
                  <button className="secondary-button">Read Full Story</button>
                </div>
                <div className="story-image">
                  <img src="/images/story-highlight.jpg" alt="Community Organizer" />
                </div>
              </div>

              <div className="impact-stories">
                <h3>Impact Stories</h3>
                <p>Real stories of individuals making a difference in their communities</p>
                
                <div className="stories-grid">
                  <div className="story-card">
                    <img src="/images/story1.jpg" alt="Story 1" />
                    <div className="story-details">
                      <h4>A Youth's Journey to Advocacy</h4>
                      <p className="story-excerpt">How a 16-year-old became a powerful voice for environmental justice in her community.</p>
                      <button className="text-button">Read More</button>
                    </div>
                  </div>
                  <div className="story-card">
                    <img src="/images/story2.jpg" alt="Story 2" />
                    <div className="story-details">
                      <h4>Building Bridges Across Divides</h4>
                      <p className="story-excerpt">Two community leaders from opposing backgrounds find common ground and create lasting change.</p>
                      <button className="text-button">Read More</button>
                    </div>
                  </div>
                  <div className="story-card">
                    <img src="/images/story3.jpg" alt="Story 3" />
                    <div className="story-details">
                      <h4>From Volunteer to Change-Maker</h4>
                      <p className="story-excerpt">How a weekend volunteer opportunity transformed into a lifelong mission for social equity.</p>
                      <button className="text-button">Read More</button>
                    </div>
                  </div>
                </div>
                
                <div className="see-more-container">
                  <button className="secondary-button">See All Stories</button>
                </div>
              </div>
            </div>
          </section>

          <section className="resources-section">
            <div className="container">
              <h2 className="section-title">Educational Resources</h2>
              
              <div className="resources-categories">
                <div className="category-tabs">
                  <button className="tab-button active">All</button>
                  <button className="tab-button">Articles</button>
                  <button className="tab-button">Guides</button>
                  <button className="tab-button">Research</button>
                  <button className="tab-button">Videos</button>
                </div>
                
                <div className="resources-grid">
                  <div className="resource-card">
                    <div className="resource-type article">Article</div>
                    <h3>Understanding Systematic Inequality</h3>
                    <p>A deep dive into the structures that perpetuate inequality and how to address them at their roots.</p>
                    <button className="text-button">Read Article</button>
                  </div>
                  <div className="resource-card">
                    <div className="resource-type guide">Guide</div>
                    <h3>Community Organizing Toolkit</h3>
                    <p>Practical steps and strategies for organizing your community around important social issues.</p>
                    <button className="text-button">Download Guide</button>
                  </div>
                  <div className="resource-card">
                    <div className="resource-type research">Research</div>
                    <h3>The Impact of Grassroots Movements</h3>
                    <p>Research findings on how local organizing creates meaningful and sustainable change.</p>
                    <button className="text-button">View Research</button>
                  </div>
                  <div className="resource-card">
                    <div className="resource-type video">Video</div>
                    <h3>Voices of Change: Documentary Series</h3>
                    <p>Video interviews with change-makers who have transformed their communities.</p>
                    <button className="text-button">Watch Videos</button>
                  </div>
                </div>
                
                <div className="pagination">
                  <button className="pagination-button active">1</button>
                  <button className="pagination-button">2</button>
                  <button className="pagination-button">3</button>
                  <span className="pagination-ellipsis">...</span>
                  <button className="pagination-button">8</button>
                  <button className="pagination-button next">Next</button>
                </div>
              </div>
            </div>
          </section>

          <section className="newsletter-section">
            <div className="container">
              <div className="newsletter-container">
                <h2>Stay Informed</h2>
                <p>Subscribe to our monthly newsletter to receive the latest resources, stories, and opportunities.</p>
                <form className="newsletter-form">
                  <input type="email" placeholder="Your email address" />
                  <button type="submit" className="primary-button">Subscribe</button>
                </form>
                <p className="disclaimer">We respect your privacy. Unsubscribe at any time.</p>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ResourcesPage; 