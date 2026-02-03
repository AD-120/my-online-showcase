import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <motion.section 
      className="relative min-h-[60vh] flex items-center justify-center p-8 md:p-16 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Decorative elements */}
      <div className="absolute top-8 right-8 w-32 h-32 border-4 border-neo-pink opacity-30" />
      <div className="absolute bottom-16 left-16 w-24 h-24 bg-neo-yellow opacity-20" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-neo-blue opacity-20" />

      <div className="relative z-10 max-w-4xl text-center">
        <motion.p 
          className="text-xs font-bold uppercase tracking-[0.4em] text-muted-foreground mb-6"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
        >
          Welcome to my Portfolio
        </motion.p>
        
        <motion.h1 
          className="text-5xl md:text-7xl lg:text-8xl font-serif font-black italic leading-[0.9] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Designing{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Experiences</span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-neo-pink opacity-60 -z-0" />
          </span>
          <br />
          That{' '}
          <span className="relative inline-block">
            <span className="relative z-10">Matter</span>
            <span className="absolute bottom-2 left-0 w-full h-4 bg-neo-yellow opacity-60 -z-0" />
          </span>
        </motion.h1>

        <motion.p 
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          I'm a Senior Multidisciplinary Designer specializing in UX/UI, Learning Experience Design, 
          and Visual Design. I create human-centered solutions that bridge technology and emotion.
        </motion.p>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <a 
            href="#works" 
            className="inline-block px-8 py-4 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-widest neo-shadow-pink transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_hsl(var(--neo-pink))]"
          >
            View My Work
          </a>
          <a 
            href="mailto:hello@avimilgrom.com" 
            className="inline-block px-8 py-4 border-2 border-primary text-foreground text-xs font-bold uppercase tracking-widest bg-card neo-shadow-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))]"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
