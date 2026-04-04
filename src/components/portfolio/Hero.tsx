import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

interface WordConfig {
  text: string;
  highlight?: "yellow" | "cyan" | "magenta";
}

const INTRO_WORDS: WordConfig[] = [
  { text: "Hi," },
  { text: "I'm" },
  { text: "Avi" },
  { text: "-" },
  { text: "a" },
  { text: "UX/UI", highlight: "cyan" },
  { text: "designer,", highlight: "cyan" },
  { text: "lecturer,", highlight: "magenta" },
  { text: "and" },
  { text: "digital", highlight: "yellow" },
  { text: "artist", highlight: "yellow" },
  { text: "focused" },
  { text: "on" },
  { text: "clear," },
  { text: "creative," },
  { text: "and" },
  { text: "user-centered" },
  { text: "digital" },
  { text: "experiences." },
];

const HIGHLIGHT_COLORS = {
  yellow: "hsla(48, 97%, 53%, 0.45)",
  cyan: "hsla(199, 89%, 60%, 0.45)",
  magenta: "hsla(348, 100%, 78%, 0.45)",
};

// Only highlighted words get flowers
const HIGHLIGHTED_INDICES = INTRO_WORDS
  .map((w, i) => (w.highlight ? i : -1))
  .filter((i) => i !== -1);

// Simple SVG flower component
const Flower = ({
  color,
  active,
  delay,
}: {
  color: string;
  active: boolean;
  delay: number;
}) => {
  const petalColor =
    color === "yellow"
      ? "hsl(48, 97%, 53%)"
      : color === "cyan"
      ? "hsl(199, 89%, 60%)"
      : "hsl(348, 100%, 78%)";

  const stemHeight = 30 + Math.random() * 20;

  return (
    <motion.svg
      width="40"
      height="80"
      viewBox="0 0 40 80"
      className="inline-block"
      initial={{ opacity: 0, scale: 0, y: 20 }}
      animate={
        active
          ? { opacity: 1, scale: 1, y: 0 }
          : { opacity: 0, scale: 0, y: 20 }
      }
      transition={{
        duration: 0.5,
        delay: delay * 0.05,
        ease: [0.34, 1.56, 0.64, 1],
      }}
    >
      {/* Stem */}
      <motion.line
        x1="20"
        y1="40"
        x2="20"
        y2={40 + stemHeight}
        stroke="hsl(120, 40%, 45%)"
        strokeWidth="2"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        animate={active ? { pathLength: 1 } : { pathLength: 0 }}
        transition={{ duration: 0.4, delay: delay * 0.05 }}
      />
      {/* Leaf */}
      <motion.ellipse
        cx="24"
        cy={50 + stemHeight * 0.3}
        rx="5"
        ry="3"
        fill="hsl(120, 40%, 50%)"
        transform={`rotate(30, 24, ${50 + stemHeight * 0.3})`}
        initial={{ scale: 0 }}
        animate={active ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.3, delay: delay * 0.05 + 0.2 }}
      />
      {/* Petals */}
      {[0, 60, 120, 180, 240, 300].map((angle) => (
        <motion.ellipse
          key={angle}
          cx="20"
          cy="30"
          rx="6"
          ry="10"
          fill={petalColor}
          opacity={0.85}
          transform={`rotate(${angle}, 20, 40)`}
          initial={{ scale: 0 }}
          animate={active ? { scale: 1 } : { scale: 0 }}
          transition={{
            duration: 0.4,
            delay: delay * 0.05 + 0.1 + angle * 0.001,
            ease: [0.34, 1.56, 0.64, 1],
          }}
        />
      ))}
      {/* Center */}
      <motion.circle
        cx="20"
        cy="40"
        r="4"
        fill="hsl(48, 90%, 65%)"
        initial={{ scale: 0 }}
        animate={active ? { scale: 1 } : { scale: 0 }}
        transition={{
          duration: 0.3,
          delay: delay * 0.05 + 0.3,
          ease: "easeOut",
        }}
      />
    </motion.svg>
  );
};

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(-1);
  const [completedIndices, setCompletedIndices] = useState<Set<number>>(
    new Set()
  );
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);

  const startAnimation = useCallback(() => {
    if (intervalRef.current !== null) return;

    indexRef.current = 0;
    setCurrentIndex(-1);
    setCompletedIndices(new Set());

    intervalRef.current = setInterval(() => {
      if (indexRef.current >= INTRO_WORDS.length) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
          intervalRef.current = null;
        }
        setCurrentIndex(-1);
        return;
      }

      const idx = indexRef.current;
      setCurrentIndex(idx);

      if (INTRO_WORDS[idx].highlight) {
        setCompletedIndices((prev) => new Set(prev).add(idx));
      }

      indexRef.current++;
    }, 350);
  }, []);

  useEffect(() => {
    const timeout = setTimeout(startAnimation, 600);
    return () => {
      clearTimeout(timeout);
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAnimation]);

  const handleClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    startAnimation();
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
      {/* Text area */}
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          className="text-[4.5vw] md:text-4xl lg:text-5xl font-serif font-bold leading-[1.4]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          {INTRO_WORDS.map((word, index) => {
            const isActive = currentIndex === index;
            const isCompleted = completedIndices.has(index);
            const hasHighlight = !!word.highlight;
            const showHighlight = hasHighlight && (isActive || isCompleted);

            return (
              <span
                key={index}
                className="inline-block relative whitespace-pre"
              >
                {/* Marker highlight background */}
                {hasHighlight && (
                  <span
                    className="absolute inset-0 -mx-1 rounded-sm transition-none"
                    style={{
                      background: HIGHLIGHT_COLORS[word.highlight!],
                      transform: `scaleX(${showHighlight ? 1 : 0})`,
                      transformOrigin: "left",
                      transition: showHighlight
                        ? "transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)"
                        : "none",
                    }}
                  />
                )}
                <span className="relative z-10">{word.text}</span>{" "}
              </span>
            );
          })}
        </motion.h1>
      </div>

      {/* Floral bloom area */}
      <motion.div
        className="mt-8 flex items-end justify-center gap-2 h-24"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        {HIGHLIGHTED_INDICES.map((wordIdx, flowerIdx) => {
          const word = INTRO_WORDS[wordIdx];
          const isActive = completedIndices.has(wordIdx);

          return (
            <Flower
              key={wordIdx}
              color={word.highlight!}
              active={isActive}
              delay={flowerIdx}
            />
          );
        })}
      </motion.div>

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
