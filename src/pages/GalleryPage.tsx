import React, { useState } from 'react';
import Layout from '../components/layout/Layout';
import SEO from '../components/common/SEO';
import '../styles/pages/GalleryPage.scss';
import OurMonthbyMonth_1 from '../assets/images/OurMonthbyMonth_1.png';
import OurMonthbyMonth_2 from '../assets/images/OurMonthbyMonth_2.png';
import OurMonthbyMonth_3 from '../assets/images/OurMonthbyMonth_3.png';
import OurMonthbyMonth_4 from '../assets/images/OurMonthbyMonth_4.png';
import OurMonthbyMonth_5 from '../assets/images/OurMonthbyMonth_5.png';
import OurMonthbyMonth_6 from '../assets/images/OurMonthbyMonth_6.png';
import Contactus from '../assets/images/Contactus.svg';
import contactlogo from '../assets/images/contactlogo.png';
import OurMonthbyMonth from '../assets/images/OurMonthbyMonth.png'

const GalleryPage: React.FC = () => {
  const [expandedAlbums, setExpandedAlbums] = useState<number[]>([]);

  // All photos array for dynamic expansion
  const allPhotos = [
    OurMonthbyMonth_1, OurMonthbyMonth_2, OurMonthbyMonth_3, 
    OurMonthbyMonth_4, OurMonthbyMonth_5, OurMonthbyMonth_6,
    OurMonthbyMonth_1, OurMonthbyMonth_2, OurMonthbyMonth_3, // Additional photos
    OurMonthbyMonth_4, OurMonthbyMonth_5, OurMonthbyMonth_6,
  ];

  const albumData = [
    {
      id: 1,
      month: "April 2025",
      photoCount: "34 photos",
      previewImages: [OurMonthbyMonth_1, OurMonthbyMonth_2, OurMonthbyMonth_3]
    },
    {
      id: 2,
      month: "April 2025", 
      photoCount: "34 photos",
      previewImages: [OurMonthbyMonth_4, OurMonthbyMonth_5, OurMonthbyMonth_6]
    },
    {
      id: 3,
      month: "April 2025",
      photoCount: "34 photos", 
      previewImages: [OurMonthbyMonth_1, OurMonthbyMonth_3, OurMonthbyMonth_5]
    },
    {
      id: 4,
      month: "April 2025",
      photoCount: "34 photos",
      previewImages: [OurMonthbyMonth_2, OurMonthbyMonth_4, OurMonthbyMonth_6]
    }
  ];

  const handleViewAlbum = (albumId: number) => {
    setExpandedAlbums(prev => 
      prev.includes(albumId) 
        ? prev.filter(id => id !== albumId)
        : [...prev, albumId]
    );
  };

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
          <div className="gallery-container">
            {/* Header Section with Background Image Only */}
            <section className="gallery-header-new">
              <div className="header-background" style={{ backgroundImage: `url(${OurMonthbyMonth})` }}>
                {/* Just the background image, no content */}
              </div>
            </section>

            {/* Gallery Albums Section */}
            <section className="gallery-albums">
              <div className="albums-grid">
                {albumData.map((album) => (
                  <div key={album.id} className="album-card">
                    <div className="album-images">
                      <div className="main-image">
                        <img src={album.previewImages[0]} alt={`${album.month} main`} />
                      </div>
                      <div className="side-images">
                        <div className="small-image">
                          <img src={album.previewImages[1]} alt={`${album.month} 2`} />
                        </div>
                        <div className="small-image">
                          <img src={album.previewImages[2]} alt={`${album.month} 3`} />
                        </div>
                      </div>
                    </div>
                    <div className="album-info">
                      <h3>{album.month}</h3>
                      <p>{album.photoCount}</p>
                      <button 
                        className="view-album-btn" 
                        onClick={() => handleViewAlbum(album.id)}
                      >
                        {expandedAlbums.includes(album.id) ? 'Hide Album' : 'View Album'}
                      </button>
                    </div>
                    
                    {/* Expanded Photos */}
                    {expandedAlbums.includes(album.id) && (
                      <div className="expanded-photos">
                        <div className="photos-grid">
                          {allPhotos.map((photo, index) => (
                            <div key={index} className="photo-item">
                              <img src={photo} alt={`Photo ${index + 1}`} />
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {/* Contact Section */}
            <section className="gallery-contact" style={{ backgroundImage: `url(${contactlogo})` }}>
              <div className="contact-card">
                <div className="contact-icon">
                  <img src={Contactus} alt="Contact Us" />
                </div>
                <div className="contact-content">
                  <h2>Contact Us</h2>
                  <p>Got questions about the Landing Page UI Kit? Our team is here to help. Contact us for quick and friendly support.</p>
                  <div className="contact-details">
                    <div className="contact-item">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2 3C2 2.44772 2.44772 2 3 2H5.15287C5.64171 2 6.0589 2.35341 6.13927 2.8356L6.87858 7.27147C6.95075 7.70451 6.73206 8.13397 6.3394 8.3616L4.79126 9.13616C5.90756 11.8616 8.13844 14.0924 10.8638 15.2087L11.6384 13.6606C11.866 13.2679 12.2955 13.0493 12.7285 13.1214L17.1644 13.8607C17.6466 13.9411 18 14.3583 18 14.8471V17C18 17.5523 17.5523 18 17 18H15C7.8203 18 2 12.1797 2 5V3Z" fill="currentColor"/>
                      </svg>
                      <span>+012 345 6789</span>
                    </div>
                    <div className="contact-item">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M2.5 6.5L9.5 11.5C9.77614 11.6913 10.2239 11.6913 10.5 11.5L17.5 6.5M4 4H16C17.1046 4 18 4.89543 18 6V14C18 15.1046 17.1046 16 16 16H4C2.89543 16 2 15.1046 2 14V6C2 4.89543 2.89543 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Hello@animaapp.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default GalleryPage;