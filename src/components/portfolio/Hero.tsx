import { useState, useEffect, useCallback, useRef } from "react";
import { motion } from "framer-motion";

const INTRO_WORDS = [
  "Hi,",
  "I'm",
  "Avi ",
  "-",
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

// Each flower blooms when its quarter of the word sequence begins
const FLOWER_QUARTERS = [
  { start: 0 },  // Cyan   — words 1–5
  { start: 5 },  // Magenta — words 6–10
  { start: 10 }, // Yellow  — words 11–15
  { start: 15 }, // Black   — words 16–19
];

// ─── Animation prop factories ─────────────────────────────────────────────────

// "Draw" animation for path elements (ink-pen feel)
const pathAnim = (visible: boolean, delay: number, duration = 0.55) => ({
  initial: { pathLength: 0, opacity: 0 },
  animate: { pathLength: visible ? 1 : 0, opacity: visible ? 1 : 0 },
  transition: visible
    ? {
        pathLength: { duration, delay, ease: "easeInOut" as const },
        opacity: { duration: 0.01, delay },
      }
    : { pathLength: { duration: 0.12 }, opacity: { duration: 0.08 } },
});

// Scale-bloom animation for circles/groups (petals opening from center)
const bloomAnim = (visible: boolean, delay: number) => ({
  initial: { scale: 0, opacity: 0 },
  animate: { scale: visible ? 1 : 0, opacity: visible ? 1 : 0 },
  transition: visible
    ? {
        scale: { type: "spring" as const, stiffness: 280, damping: 22, delay },
        opacity: { duration: 0.01, delay },
      }
    : { scale: { duration: 0.1 }, opacity: { duration: 0.08 } },
});

// ─── Flower SVG — faithful to c/m/y/k.svg ────────────────────────────────────
// Stem draws bottom→top. Buds (branch + optional circle) appear as stem passes.
// Petals bloom at the top last.

const sw = 1.41;

type BudConfig = {
  // line from near-stem point outward to bud
  branch: { x1: number; y1: number; x2: number; y2: number };
  // stem y where this bud's branch meets the stem (used to time the delay)
  stemY: number;
  // optional bud circle
  circle?: { cx: number; cy: number };
};

// Stem spans y: 67.55 → 15.94 (total 51.61 units). Duration: 0.65s.
// Delay for a bud = ((67.55 - stemY) / 51.61) * 0.65
const budDelay = (stemY: number) => ((67.55 - stemY) / 51.61) * 0.65;

const FlowerSVG = ({
  fill, visible, height, buds,
}: {
  fill: string; visible: boolean; height: number; buds: BudConfig[];
}) => (
  <svg
    width={height * (29.25 / 68.25)}
    height={height}
    viewBox="0 0 29.25 68.25"
    fill="none"
  >
    {/* Stem — draws from ground (y=67.55) upward to flower head (y=15.94) */}
    <motion.path
      d="M11.24,67.55 L11.24,15.94"
      stroke="#000" strokeWidth={sw} strokeLinecap="round"
      {...pathAnim(visible, 0, 0.65)}
    />

    {/* Buds — timed to when stem passes each branch junction */}
    {buds.map((bud, i) => {
      const bd = budDelay(bud.stemY);
      return (
        <g key={i}>
          <motion.line
            x1={bud.branch.x1} y1={bud.branch.y1}
            x2={bud.branch.x2} y2={bud.branch.y2}
            stroke="#000" strokeWidth={sw} strokeLinecap="round"
            {...pathAnim(visible, bd, 0.18)}
          />
          {bud.circle && (
            <motion.path
              d={`M${bud.circle.cx + 2.72},${bud.circle.cy}a2.72,2.72,0,1,1-5.44,0,2.72,2.72,0,0,1,5.44,0Z`}
              stroke="#000" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
              style={{
                transformOrigin: `${bud.circle.cx}px ${bud.circle.cy}px`,
                transformBox: "view-box",
              }}
              {...bloomAnim(visible, bd + 0.1)}
            />
          )}
        </g>
      );
    })}

    {/* Petals — bloom from stem tip after stem fully drawn */}
    <motion.path
      d="M16.89,5.77c-3.85,3.85-2.62,11.33-2.62,11.33,0,0,7.48,1.23,11.33-2.62,3.85-3.85,4.53-9.08,2.62-11.33-1.91-2.24-7.48-1.23-11.33,2.62Z"
      fill={fill}
      style={{ transformOrigin: "11.24px 15.94px", transformBox: "view-box" }}
      {...bloomAnim(visible, 0.72)}
    />
    <motion.path
      d="M14.36,4.5c-3.85,3.85-2.62,11.33-2.62,11.33,0,0,7.48,1.23,11.33-2.62,3.85-3.85,4.53-9.08,2.62-11.33-1.91-2.24-7.48-1.23-11.33,2.62Z"
      stroke="#000" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{ transformOrigin: "11.24px 15.94px", transformBox: "view-box" }}
      {...bloomAnim(visible, 0.72)}
    />
    <motion.path
      d="M9.44,7.78c2.73,2.73,1.86,8.01,1.86,8.01,0,0-5.29.87-8.01-1.85C.56,11.22.08,7.52,1.43,5.93c1.35-1.59,5.29-.87,8.01,1.86Z"
      stroke="#000" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{ transformOrigin: "11.24px 15.94px", transformBox: "view-box" }}
      {...bloomAnim(visible, 0.80)}
    />
    <motion.path
      d="M14.54,8.6c-1.88,1.88-2.76,6.98-2.76,6.98,0,0,5.12-.86,7-2.74,1.88-1.88,2.21-4.43,1.28-5.52-.93-1.09-3.65-.6-5.52,1.28Z"
      stroke="#000" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round"
      style={{ transformOrigin: "11.24px 15.94px", transformBox: "view-box" }}
      {...bloomAnim(visible, 0.88)}
    />
  </svg>
);

// ─── Flower layout config — per-SVG bud data ──────────────────────────────────

const flowerConfig = [
  // c.svg — Cyan: 1 bud left at y≈29
  {
    fill: "#00aeef",
    pos: { left: "8%", rotate: -12 },
    buds: [
      {
        branch: { x1: 6.4, y1: 31.54, x2: 11.09, y2: 36.39 },
        stemY: 36.39,
        circle: { cx: 4.17, cy: 29.12 },
      },
    ] as BudConfig[],
  },
  // m.svg — Magenta: 1 bud right at y≈27
  {
    fill: "#ec008c",
    pos: { left: "28%", rotate: 8 },
    buds: [
      {
        branch: { x1: 15.83, y1: 29, x2: 11.48, y2: 33.47 },
        stemY: 33.47,
        circle: { cx: 17.94, cy: 27.01 },
      },
    ] as BudConfig[],
  },
  // y.svg — Yellow: branch only (no circle)
  {
    fill: "#fff200",
    pos: { left: "55%", rotate: -6 },
    buds: [
      {
        branch: { x1: 15.83, y1: 32.99, x2: 11.48, y2: 37.46 },
        stemY: 37.46,
      },
    ] as BudConfig[],
  },
  // k.svg — Black: 2 buds, left + right
  {
    fill: "#211e15",
    pos: { left: "74%", rotate: 13 },
    buds: [
      {
        branch: { x1: 6.4, y1: 31.54, x2: 11.09, y2: 36.39 },
        stemY: 36.39,
        circle: { cx: 4.17, cy: 29.12 },
      },
      {
        branch: { x1: 15.83, y1: 26.76, x2: 11.48, y2: 31.24 },
        stemY: 31.24,
        circle: { cx: 17.94, cy: 24.29 },
      },
    ] as BudConfig[],
  },
];

// ─── Hero ─────────────────────────────────────────────────────────────────────

const Hero = () => {
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const [bloomedFlowers, setBloomedFlowers] = useState([false, false, false, false]);
  const [flowerHeight, setFlowerHeight] = useState(60);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const indexRef = useRef(0);
  const sectionRef = useRef<HTMLElement | null>(null);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);

  const startHighlightCycle = useCallback(() => {
    if (intervalRef.current === null) {
      indexRef.current = 0;
      setHighlightedIndex(-1);

      intervalRef.current = setInterval(() => {
        if (indexRef.current >= INTRO_WORDS.length) {
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
    const timeoutId = setTimeout(startHighlightCycle, 50);

    return () => {
      clearTimeout(timeoutId);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [startHighlightCycle]);

  // Trigger each flower bloom when its quarter of the text sequence begins
  useEffect(() => {
    if (highlightedIndex < 0) return;
    setBloomedFlowers(prev => {
      let changed = false;
      const next = prev.map((bloomed, i) => {
        if (!bloomed && highlightedIndex >= FLOWER_QUARTERS[i].start) {
          changed = true;
          return true;
        }
        return bloomed;
      });
      return changed ? next : prev;
    });
  }, [highlightedIndex]);

  // Measure section bottom vs h1 bottom → flower height = gap / 2
  useEffect(() => {
    const measure = () => {
      if (!sectionRef.current || !h1Ref.current) return;
      const sectionBottom = sectionRef.current.getBoundingClientRect().bottom;
      const h1Bottom = h1Ref.current.getBoundingClientRect().bottom;
      const gap = sectionBottom - h1Bottom;
      if (gap > 0) setFlowerHeight(gap / 2);
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (sectionRef.current) ro.observe(sectionRef.current);
    return () => ro.disconnect();
  }, []);

  const handleClick = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
    setBloomedFlowers([false, false, false, false]);
    startHighlightCycle();
  };

  return (
    <motion.section
      ref={sectionRef}
      className="relative min-h-[60vh] flex flex-col items-center justify-center p-8 md:p-16 overflow-hidden cursor-pointer"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      onClick={handleClick}
    >
      <div className="relative z-10 max-w-4xl text-center">
        <motion.h1
          ref={h1Ref}
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

      {/* Floral bloom cluster — centered as a group on the bottom border line */}
      <div
        className="absolute pointer-events-none"
        style={{ bottom: 0, left: "50%", transform: "translateX(-50%)", zIndex: 5, display: "flex", alignItems: "flex-end", gap: "1.5rem" }}
      >
        {flowerConfig.map(({ fill, pos, buds }, i) => (
          <div
            key={i}
            style={{
              transform: `rotate(${pos.rotate}deg)`,
              transformOrigin: "bottom center",
            }}
          >
            <FlowerSVG fill={fill} visible={bloomedFlowers[i]} height={flowerHeight} buds={buds} />
          </div>
        ))}
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
