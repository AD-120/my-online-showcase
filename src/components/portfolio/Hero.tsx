import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface HighlightedWord {
  text: string;
  color: 'pink' | 'yellow' | 'blue' | null;
}

const INTRO_WORDS: HighlightedWord[] = [
  { text: 'Avi Milgrom', color: null },
  { text: 'is a', color: null },
  { text: 'Senior', color: 'pink' },
  { text: 'Multidisciplinary', color: 'yellow' },
  { text: 'Designer', color: 'blue' },
  { text: 'who crafts', color: null },
  { text: 'high-impact', color: 'pink' },
  { text: 'digital experiences.', color: null },
];

const getHighlightColor = (color: HighlightedWord['color']) => {
  switch (color) {
    case 'pink': return 'bg-neo-pink';
    case 'yellow': return 'bg-neo-yellow';
    case 'blue': return 'bg-neo-blue';
    default: return '';
  }
};

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isAnimating, setIsAnimating] = useState(true);

  const startAnimation = useCallback(() => {
    setActiveIndex(-1);
    setIsAnimating(true);
  }, []);

  useEffect(() => {
    if (!isAnimating) return;

    const highlightedIndices = INTRO_WORDS
      .map((word, idx) => word.color ? idx : -1)
      .filter(idx => idx !== -1);

    let currentStep = 0;

    const interval = setInterval(() => {
      if (currentStep < highlightedIndices.length) {
        setActiveIndex(highlightedIndices[currentStep]);
        currentStep++;
      } else {
        setIsAnimating(false);
        clearInterval(interval);
      }
    }, 600);

    return () => clearInterval(interval);
  }, [isAnimating]);

  const handleClick = () => {
    startAnimation();
  };

  return (
    <motion.section 
      className="relative min-h-[60vh] flex flex-col items-start justify-center p-8 md:p-16 overflow-hidden cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={handleClick}
    >
      <div className="relative z-10 max-w-4xl">
        <motion.h1 
          className="text-4xl md:text-5xl lg:text-6xl font-serif font-normal leading-[1.2] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {INTRO_WORDS.map((word, index) => {
            const isHighlighted = word.color !== null;
            const isActive = activeIndex >= INTRO_WORDS
              .slice(0, index + 1)
              .filter(w => w.color !== null).length - 1 && 
              INTRO_WORDS.slice(0, index + 1).filter(w => w.color !== null).length > 0 &&
              word.color !== null;
            
            // Calculate if this word should be highlighted based on animation progress
            const highlightedWordsBefore = INTRO_WORDS.slice(0, index).filter(w => w.color !== null).length;
            const shouldHighlight = isHighlighted && activeIndex >= highlightedWordsBefore;

            return (
              <span key={index} className="inline relative">
                {isHighlighted ? (
                  <span className="relative inline-block mx-1">
                    <AnimatePresence>
                      {shouldHighlight && (
                        <motion.span
                          initial={{ scaleX: 0, opacity: 0 }}
                          animate={{ scaleX: 1, opacity: 1 }}
                          exit={{ scaleX: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className={`absolute inset-0 ${getHighlightColor(word.color)} rounded-full -mx-3 -my-1 px-3 py-1`}
                          style={{ 
                            originX: 0,
                            zIndex: 0,
                            left: '-12px',
                            right: '-12px',
                            top: '-4px',
                            bottom: '-4px'
                          }}
                        />
                      )}
                    </AnimatePresence>
                    <span className="relative z-10">{word.text}</span>
                  </span>
                ) : (
                  <span>{word.text} </span>
                )}
              </span>
            );
          })}
        </motion.h1>

        <motion.p 
          className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
        >
          <span className="w-8 h-px bg-muted-foreground"></span>
          Click to restart animation
        </motion.p>
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
