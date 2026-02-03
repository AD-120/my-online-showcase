import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const INTRO_WORDS = [
  "Hi,",
  "I'm",
  "Avi",
  ",",
  "a",
  "UX/UI",
  "designer,",
  "lecturer,",
  "and",
  "digital",
  "artist",
  "focused",
  "on",
  "clear,",
  "creative,",
  "and",
  "user-centered",
  "digital",
  "experiences.",
];

const Hero = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  const startHighlightCycle = useCallback(() => {
    // Only start if the animation is currently stopped
    if (intervalRef.current === null) {
      indexRef.current = 0;
      setHighlightedIndex(-1);

      intervalRef.current = setInterval(() => {
        if (indexRef.current >= INTRO_WORDS.length) {
          // Animation complete - clear interval and remove last highlight
          if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
          }
          setHighlightedIndex(-1);
          return;
        }

        setHighlightedIndex(indexRef.current);
        indexRef.current++;
      }, 400);
    }
  }, []);

  useEffect(() => {
    // Initial run on component mount with small delay
    const timeoutId = setTimeout(startHighlightCycle, 50);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startHighlightCycle]);

  const handleClick = () => {
    // Stop current animation if running
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    // Start fresh cycle
    startHighlightCycle();
  };

  return (
    <motion.section
      className="relative min-h-[60vh] flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={handleClick}
    >
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          className="text-[4.5vw] md:text-4xl lg:text-5xl font-serif font-bold leading-[1.4]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {INTRO_WORDS.map((word, index) => (
            <span
              key={index}
              className={`inline-block transition-all duration-200 whitespace-pre ${
                highlightedIndex === index ? "bg-neo-pink text-neo-yellow px-1 rounded-md" : ""
              }`}
            >
              {word}{" "}
            </span>
          ))}
        </motion.h1>
      </div>

      {/* Decorative border line */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-px bg-primary"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
        style={{ originX: 0 }}
      />
    </motion.section>
  );
};

export default Hero;
