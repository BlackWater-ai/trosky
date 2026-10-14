import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import PhotoGallery from '../components/PhotoGallery';

export default function Gallery() {
  return (
    <div className="font-inter">
      <Navbar />
      <div className="pt-24">
        <PhotoGallery />
      </div>
      <Footer />
    </div>
  );
}