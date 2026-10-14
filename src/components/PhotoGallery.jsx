import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/ec7dabdbc_TroskyPhotos-1.jpg', caption: 'Trosky Sports Club', span: 'col-span-2 row-span-2' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/b7c15fefb_TroskyPhotos-3.jpg', caption: 'The Facility', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/15a0ef4d1_TroskyPhotos-4.jpg', caption: 'Training Grounds', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/59179329a_TroskyPhotos-5.jpg', caption: 'Open Play', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/2afacb98b_TroskyPhotos-6.jpg', caption: 'Athletes in Action', span: 'col-span-2 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/80b974fab_TroskyPhotos-10.jpg', caption: 'Courts & Fields', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/32ca372af_TroskyPhotos-11.jpg', caption: 'Community', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/3a76a85e8_TroskyPhotos-15.jpg', caption: 'Team Play', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/afe7e4beb_TroskyPhotos-19.jpg', caption: 'Evening Sessions', span: 'col-span-2 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/cacd78485_TroskyPhotos-20.jpg', caption: 'The Experience', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/51914ee03_TroskyPhotos-25.jpg', caption: 'Austin Views', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/d870b8c1e_TroskyPhotos-26.jpg', caption: 'Facility Grounds', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/b7a828ffc_TroskyPhotos-27.jpg', caption: 'Aerial View', span: 'col-span-2 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/d6b572747_TroskyPhotos-28.jpg', caption: 'Drone Shot', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/feeab42a4_Air3DronePhoto-7.jpg', caption: 'From Above', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/597f9bc4b_Air3DronePhoto-8.jpg', caption: 'Drone — Fields', span: 'col-span-1 row-span-1' },
  { url: 'https://media.base44.com/images/public/69f3a4d87763e987202433ad/3803913f6_Air3DronePhoto-9.jpg', caption: 'Drone — Full Property', span: 'col-span-2 row-span-2' },
];

export default function PhotoGallery({ images }) {
  const imgs = images && images.length > 0
    ? images.map((img, i) => ({ ...galleryImages[i % galleryImages.length], ...img }))
    : galleryImages;
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = (i) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () => setLightboxIndex((i) => (i - 1 + imgs.length) % imgs.length);
  const next = () => setLightboxIndex((i) => (i + 1) % imgs.length);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="font-inter text-sm tracking-[0.3em] text-white/40 uppercase mb-4 font-medium">A Look Inside</p>
          <h2 className="font-display text-5xl md:text-7xl text-white tracking-wider">Training Grounds</h2>
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[220px]"
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              onClick={() => openLightbox(i)}
              className={`${img.span} relative overflow-hidden cursor-pointer group`}
            >
              <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-inter text-white text-sm font-semibold tracking-wide">{img.caption}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
            >
              <X className="w-8 h-8" />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-4 md:left-8 text-white/70 hover:text-white transition-colors"
            >
              <ChevronLeft className="w-10 h-10" />
            </button>
            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.25 }}
              className="max-w-5xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={imgs[lightboxIndex].url}
                alt={imgs[lightboxIndex].caption}
                className="w-full max-h-[80vh] object-contain"
              />
              <p className="font-inter text-white/60 text-sm text-center mt-4 tracking-wide">
                {imgs[lightboxIndex].caption}
              </p>
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-4 md:right-8 text-white/70 hover:text-white transition-colors"
            >
              <ChevronRight className="w-10 h-10" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}