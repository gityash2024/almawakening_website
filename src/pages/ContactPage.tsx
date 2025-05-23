import React from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import ContactForm from '../components/common/ContactForm';
import '../styles/pages/ContactPage.scss';

const ContactPage: React.FC = () => {
  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with the Almawakening team. We're here to answer your questions and connect with you."
        keywords="contact, reach out, message, email, phone, location"
        path="/contact"
        ogImage="https://www.almawakening.org/og-image-contact.jpg"
      />
      <Layout>
        <div className="contact-page">
          <section className="contact-hero">
            <div className="container">
              <h1>Get In Touch</h1>
              <p className="subtitle">Have questions? Want to collaborate? We'd love to hear from you!</p>
            </div>
          </section>

          <section className="contact-content">
            <div className="container">
              <div className="contact-grid">
                <div className="contact-form-container">
                  <h2>Send Us a Message</h2>
                  <p>We aim to respond to all inquiries within 48 hours during business days.</p>
                  <ContactForm />
                </div>

                <div className="contact-info">
                  <div className="contact-card">
                    <div className="info-item">
                      <div className="icon">
                        <span className="material-icons">location_on</span>
                      </div>
                      <div className="text">
                        <h3>Our Office</h3>
                        <p>123 Change Avenue<br />New York, NY 10001<br />United States</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="icon">
                        <span className="material-icons">phone</span>
                      </div>
                      <div className="text">
                        <h3>Phone</h3>
                        <p>+1 (555) 123-4567<br />Monday - Friday: 9am - 5pm EST</p>
                      </div>
                    </div>

                    <div className="info-item">
                      <div className="icon">
                        <span className="material-icons">email</span>
                      </div>
                      <div className="text">
                        <h3>Email</h3>
                        <p>info@almawakening.org<br />support@almawakening.org</p>
                      </div>
                    </div>

                    <div className="social-links">
                      <h3>Connect With Us</h3>
                      <div className="social-icons">
                        <a href="https://facebook.com/almawakening" target="_blank" rel="noreferrer" className="social-icon facebook">
                          <span className="sr-only">Facebook</span>
                        </a>
                        <a href="https://twitter.com/almawakening" target="_blank" rel="noreferrer" className="social-icon twitter">
                          <span className="sr-only">Twitter</span>
                        </a>
                        <a href="https://instagram.com/almawakening" target="_blank" rel="noreferrer" className="social-icon instagram">
                          <span className="sr-only">Instagram</span>
                        </a>
                        <a href="https://linkedin.com/company/almawakening" target="_blank" rel="noreferrer" className="social-icon linkedin">
                          <span className="sr-only">LinkedIn</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="map-section">
            <div className="container-fluid">
              <div className="map-container">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.15830869428!2d-74.11976397304903!3d40.697663774727154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1621538874221!5m2!1sen!2s"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen={true}
                  loading="lazy"
                  title="Almawakening Location Map"
                ></iframe>
              </div>
            </div>
          </section>

          <section className="faq-section">
            <div className="container">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <div className="faq-grid">
                <div className="faq-item">
                  <h3>How quickly will I receive a response?</h3>
                  <p>We strive to respond to all inquiries within 48 hours during business days (Monday to Friday).</p>
                </div>

                <div className="faq-item">
                  <h3>I'd like to volunteer. Who should I contact?</h3>
                  <p>Please use our contact form and select "Volunteer Inquiry" in the subject dropdown, or email volunteer@almawakening.org directly.</p>
                </div>

                <div className="faq-item">
                  <h3>How can I schedule a meeting with your team?</h3>
                  <p>Please fill out our contact form with your meeting request, including potential dates and times, and our team will get back to you to coordinate.</p>
                </div>

                <div className="faq-item">
                  <h3>I'm having technical issues with your website. What should I do?</h3>
                  <p>We're sorry for any inconvenience! Please contact support@almawakening.org with details about the issue you're experiencing, and our tech team will assist you.</p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Layout>
    </>
  );
};

export default ContactPage; 