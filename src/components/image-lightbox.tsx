
'use client';
import { createContext, useState, useContext, ReactNode } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { X } from 'lucide-react';
import Image from 'next/image';

interface ImageLightboxContextType {
  isOpen: boolean;
  imageUrl: string | null;
  openLightbox: (url: string) => void;
  closeLightbox: () => void;
}

const ImageLightboxContext = createContext<ImageLightboxContextType | undefined>(undefined);

export function ImageLightboxProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [imageUrl, setImageUrl] = useState<string | null>(null);

  const openLightbox = (url: string) => {
    setImageUrl(url);
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
    // Delay clearing image to allow for exit animation
    setTimeout(() => setImageUrl(null), 300);
  };

  return (
    <ImageLightboxContext.Provider value={{ isOpen, imageUrl, openLightbox, closeLightbox }}>
      {children}
    </ImageLightboxContext.Provider>
  );
}

export function useImageLightbox() {
  const context = useContext(ImageLightboxContext);
  if (context === undefined) {
    throw new Error('useImageLightbox must be used within a ImageLightboxProvider');
  }
  return context;
}

export function ImageLightbox() {
  const { isOpen, imageUrl, closeLightbox } = useImageLightbox();

  return (
    <AnimatePresence>
      {isOpen && imageUrl && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeLightbox}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={imageUrl}
              alt="Enlarged view"
              width={1920}
              height={1080}
              className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg shadow-2xl"
            />
          </motion.div>
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { delay: 0.2 } }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-[110] text-white bg-black/50 rounded-full p-2"
            aria-label="Close image lightbox"
          >
            <X className="h-6 w-6" />
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
