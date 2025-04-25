"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";

const Loader = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [hasShown, setHasShown] = useState(false);

  useEffect(() => {
    // Check if user has seen the loader before in this session
    const hasSeenLoader = sessionStorage.getItem('hasSeenLoader');
    
    if (hasSeenLoader) {
      // Skip loader if already seen
      setIsVisible(false);
      return;
    }
    
    // Set flag in sessionStorage
    setHasShown(true);
    
    // Show loader only if needed
    const timer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem('hasSeenLoader', 'true');
    }, 1500);
    
    return () => clearTimeout(timer);
  }, []);

  // Skip rendering completely if not visible
  if (!isVisible && !hasShown) return null;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="loader-container fixed top-0 left-0 w-full h-full bg-white flex items-center justify-center z-[100]"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative h-32 w-32">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <Image
                src="/images/icon.webp"
                alt="Hokage Creative Labs Logo"
                fill
                sizes="128px"
                priority
                className="object-contain"
              />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

// Add display name for better debugging
Loader.displayName = 'Loader';

export default Loader;