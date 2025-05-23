import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import { getEventSchema } from '../utils/seo';
import '../styles/pages/EventsPage.scss';

const EventsPage: React.FC = () => {
  // Example event for structured data
  const upcomingEvent = {
    name: "Women's Leadership Summit",
    startDate: "2025-06-15T09:00:00-05:00",
    endDate: "2025-06-15T17:00:00-05:00",
    location: "Community Center, New York",
    description: "Join us for a day of inspiring talks and workshops focused on women's leadership and empowerment.",
    image: "https://www.almawakening.org/images/events/womens-leadership-summit.jpg"
  };

  return (
    <>
      <SEO
        title="Events"
        description="Join Almawakening's events and become part of our movement for positive social change. Workshops, conferences, and community gatherings."
        keywords="almawakening events, nonprofit events, community workshops, social change"
        path="/events"
        ogImage="https://www.almawakening.org/og-image-events.jpg"
        structuredData={getEventSchema(upcomingEvent)}
      />
      <Layout>
        <div className="events-page">
          <section className="events-hero">
            <div className="events-hero-content">
              <h1>Be Part of The Change</h1>
              <p>Join hands with us to create meaningful impact in local communities</p>
              <img src="/images/events-hero.jpg" alt="Community Event" className="events-hero-image" />
            </div>
          </section>

          <section className="upcoming-events">
            <h2 className="section-title">Upcoming Events</h2>
            
            <div className="events-categories">
              <div className="category-card women-empowerment">
                <h3>Women Empowerment Training</h3>
                <p>Workshops focused on skill development and leadership</p>
                <button className="category-button">View Events</button>
              </div>
              <div className="category-card medical-camps">
                <h3>Free Medical Camps</h3>
                <p>Healthcare services for underserved communities</p>
                <button className="category-button">View Events</button>
              </div>
              <div className="category-card cleanup-drives">
                <h3>Clean Up Drive - World Cleanup Day</h3>
                <p>Join our environmental conservation initiatives</p>
                <button className="category-button">View Events</button>
              </div>
            </div>
          </section>

          <section className="join-events">
            <h2 className="section-title">Join Hands With Us</h2>
            <p className="section-description">Register for our upcoming events and make a difference</p>
            
            <form className="event-registration-form">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="fullName">Full Name</label>
                  <input type="text" id="fullName" placeholder="Your name" />
                </div>
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input type="email" id="email" placeholder="Your email" />
                </div>
              </div>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone</label>
                  <input type="tel" id="phone" placeholder="Your phone number" />
                </div>
                <div className="form-group">
                  <label htmlFor="event">Event</label>
                  <select id="event">
                    <option value="">Select an event</option>
                    <option value="women-empowerment">Women Empowerment Workshop</option>
                    <option value="medical-camp">Free Medical Camp</option>
                    <option value="cleanup-drive">World Cleanup Day</option>
                  </select>
                </div>
              </div>
              <div className="form-group full-width">
                <label htmlFor="message">Message (Optional)</label>
                <textarea id="message" rows={4} placeholder="Share any specific requirements or questions"></textarea>
              </div>
              <button type="submit" className="submit-button">Register Now</button>
            </form>
          </section>

          <section className="past-events">
            <h2 className="section-title">Past Events</h2>
            <div className="events-gallery">
              <div className="event-card">
                <img src="/images/event1.jpg" alt="Past Event" />
                <div className="event-details">
                  <span className="event-date">April 2024</span>
                  <h3 className="event-title">Women's Leadership Summit</h3>
                  <button className="view-button">View Details</button>
                </div>
              </div>
              <div className="event-card">
                <img src="/images/event2.jpg" alt="Past Event" />
                <div className="event-details">
                  <span className="event-date">March 2024</span>
                  <h3 className="event-title">Community Health Drive</h3>
                  <button className="view-button">View Details</button>
                </div>
              </div>
              <div className="event-card">
                <img src="/images/event3.jpg" alt="Past Event" />
                <div className="event-details">
                  <span className="event-date">February 2024</span>
                  <h3 className="event-title">Educational Workshop</h3>
                  <button className="view-button">View Details</button>
                </div>
              </div>
              <div className="event-card">
                <img src="/images/event4.jpg" alt="Past Event" />
                <div className="event-details">
                  <span className="event-date">January 2024</span>
                  <h3 className="event-title">Environmental Cleanup</h3>
                  <button className="view-button">View Details</button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default EventsPage; 