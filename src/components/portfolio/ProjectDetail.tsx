import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useRef } from 'react';
import { Project } from '@/types/portfolio';
import { ArrowLeft, ExternalLink, X } from 'lucide-react';
import { getProjectDetailedData } from '@/data/projectsData';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
}

const getAccentColor = (color: Project['highlightColor']) => {
  switch (color) {
    case 'pink': return 'bg-neo-pink';
    case 'yellow': return 'bg-neo-yellow';
    case 'blue': return 'bg-neo-blue';
    default: return 'bg-primary';
  }
};

const getAccentBorder = (color: Project['highlightColor']) => {
  switch (color) {
    case 'pink': return 'border-neo-pink';
    case 'yellow': return 'border-neo-yellow';
    case 'blue': return 'border-neo-blue';
    default: return 'border-primary';
  }
};

// Lightbox modal
const Lightbox = ({ src, onClose }: { src: string; onClose: () => void }) => {
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => { if (e.key === 'Escape') onClose(); };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKey);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', handleKey); };
  }, [onClose]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-background/80 backdrop-blur-md" />
      <motion.img
        src={src}
        alt=""
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="relative z-10 max-w-[90vw] max-h-[85vh] object-contain"
        onClick={(e) => e.stopPropagation()}
      />
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-20 w-10 h-10 flex items-center justify-center bg-card border-2 border-primary neo-shadow-black text-foreground hover:bg-secondary transition-colors"
      >
        <X size={20} />
      </button>
    </motion.div>
  );
};

// Fade-in animation wrapper
const FadeIn = ({ children, delay = 0, className = '' }: { children: React.ReactNode; delay?: number; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: '-50px' }}
    transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    className={className}
  >
    {children}
  </motion.div>
);

// Square image component - clickable
const SquareImage = ({ src, alt, className = '', onClick }: { src: string; alt: string; className?: string; onClick?: () => void }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className={`overflow-hidden cursor-pointer ${className}`}
    onClick={onClick}
  >
    <div className="aspect-square w-full">
      <img src={src} alt={alt} className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" loading="lazy" />
    </div>
  </motion.div>
);

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
    {children}
  </h3>
);

// Text + Image side-by-side section
const TextWithImage = ({ 
  label, text, imageSrc, imageAlt, accentColor, reverse = false, onImageClick 
}: { 
  label: string; text: string; imageSrc?: string; imageAlt: string; accentColor: string; reverse?: boolean; onImageClick?: (src: string) => void 
}) => (
  <FadeIn className="my-16">
    <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-start ${reverse ? 'md:[direction:rtl]' : ''}`}>
      <div className={reverse ? 'md:[direction:ltr]' : ''}>
        <SectionLabel>{label}</SectionLabel>
        <p className="text-sm md:text-base leading-relaxed text-foreground/85 whitespace-pre-line">
          {text}
        </p>
      </div>
      {imageSrc && (
        <div className={reverse ? 'md:[direction:ltr]' : ''}>
          <SquareImage src={imageSrc} alt={imageAlt} className="border-2 border-primary neo-shadow-black" onClick={() => onImageClick?.(imageSrc)} />
        </div>
      )}
    </div>
  </FadeIn>
);

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  const detailedData = getProjectDetailedData(project.id);
  const galleryImages = project.details?.galleryImages || [];
  const [showHeader, setShowHeader] = useState(true);
  const [lightboxSrc, setLightboxSrc] = useState<string | null>(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > lastScrollY.current && currentY > 80) {
        setShowHeader(false);
      } else {
        setShowHeader(true);
      }
      lastScrollY.current = currentY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openLightbox = (src: string) => setLightboxSrc(src);
  const closeLightbox = () => setLightboxSrc(null);

  const img = (index: number) => galleryImages[index] || undefined;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      {/* Lightbox */}
      <AnimatePresence>
        {lightboxSrc && <Lightbox src={lightboxSrc} onClose={closeLightbox} />}
      </AnimatePresence>

      {/* Sticky header */}
      <div className={`sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b-2 border-primary transition-transform duration-200 ${showHeader ? 'translate-y-0' : '-translate-y-full'}`}>
        <div className="p-4 pl-16 md:pl-6 md:p-6 flex justify-end">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 text-xs font-bold uppercase tracking-widest text-foreground border-2 border-primary bg-card neo-shadow-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))] text-center py-[6px]"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
        </div>
      </div>

      {/* Hero banner */}
      <div className="relative overflow-hidden border-b-2 border-primary">
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-[25vh] md:h-[32vh] object-cover"
          style={{ objectPosition: project.thumbnailFocus ?? 'center' }}
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">

        {/* Title */}
        <FadeIn className="pt-12 pb-6">
          {project.subtitle && (
            <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-3">
              {project.subtitle}
            </p>
          )}
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-black italic mb-4 leading-[1.1]">
            {detailedData?.title || project.title}
          </h1>
          <div className={`h-1 w-24 ${getAccentColor(project.highlightColor)}`} />
        </FadeIn>

        {/* Meta bar */}
        <FadeIn delay={0.1} className="mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6 bg-card border-2 border-primary neo-shadow-black">
            {(detailedData?.client || project.client) && (
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Client</p>
                <p className="text-sm font-semibold">{detailedData?.client || project.client}</p>
              </div>
            )}
            {detailedData?.role && (
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Role</p>
                {Array.isArray(detailedData.role) ? (
                  <ul className="space-y-0.5">
                    {detailedData.role.map((r, idx) => (
                      <li key={idx} className="text-xs font-medium">{r}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-sm font-semibold">{detailedData.role}</p>
                )}
              </div>
            )}
            {detailedData?.tools && detailedData.tools.length > 0 && (
              <div>
                <p className="text-[9px] font-bold uppercase tracking-widest text-muted-foreground mb-1.5">Tools</p>
                <div className="flex flex-wrap gap-1.5">
                  {detailedData.tools.map((tool) => (
                    <span key={tool} className="px-2 py-0.5 bg-secondary text-[10px] font-bold uppercase tracking-wider border border-primary">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Overview */}
        <TextWithImage
          label="Overview"
          text={detailedData?.description || project.description}
          imageSrc={img(0)}
          imageAlt={project.title}
          accentColor={getAccentColor(project.highlightColor)}
          onImageClick={openLightbox}
        />

        {/* External Link */}
        {detailedData?.externalLink && (
          <FadeIn className="mb-8">
            <a
              href={detailedData.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-foreground border-2 border-primary bg-card neo-shadow-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))]"
            >
              <ExternalLink size={14} />
              View Live Project
            </a>
          </FadeIn>
        )}

        {/* Image row — 2 squares */}
        {galleryImages.length > 2 && (
          <FadeIn className="my-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[img(1), img(2)].filter(Boolean).map((src, i) => (
                <SquareImage key={i} src={src!} alt={`${project.title} ${i + 2}`} className="border-2 border-primary neo-shadow-black" onClick={() => openLightbox(src!)} />
              ))}
            </div>
          </FadeIn>
        )}

        {/* Challenges */}
        {detailedData?.challenges && detailedData.challenges.length > 0 && (
          <FadeIn className="my-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {img(3) && (
                <SquareImage src={img(3)!} alt={`${project.title} challenge`} className="border-2 border-primary neo-shadow-black" onClick={() => openLightbox(img(3)!)} />
              )}
              <div>
                <SectionLabel>Key Challenges</SectionLabel>
                <div className="space-y-3">
                  {detailedData.challenges.map((challenge, idx) => (
                    <div key={idx} className={`p-4 border-l-4 ${getAccentBorder(project.highlightColor)} bg-card border border-primary/20`}>
                      <p className="text-sm leading-relaxed">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Image row — 3 squares */}
        {galleryImages.length > 6 && (
          <FadeIn className="my-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[img(4), img(5), img(6)].filter(Boolean).map((src, i) => (
                <SquareImage key={i} src={src!} alt={`${project.title} ${i + 5}`} className="border-2 border-primary neo-shadow-black" onClick={() => openLightbox(src!)} />
              ))}
            </div>
          </FadeIn>
        )}

        {/* Process */}
        {detailedData?.process && (
          <TextWithImage
            label="The Process"
            text={detailedData.process}
            imageSrc={img(7)}
            imageAlt={`${project.title} process`}
            accentColor={getAccentColor(project.highlightColor)}
            reverse
            onImageClick={openLightbox}
          />
        )}

        {/* Image row — 2 squares */}
        {galleryImages.length > 9 && (
          <FadeIn className="my-14">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[img(8), img(9)].filter(Boolean).map((src, i) => (
                <SquareImage key={i} src={src!} alt={`${project.title} ${i + 9}`} className="border-2 border-primary neo-shadow-black" onClick={() => openLightbox(src!)} />
              ))}
            </div>
          </FadeIn>
        )}

        {/* Deliverables */}
        {detailedData?.deliverables && detailedData.deliverables.length > 0 && (
          <FadeIn className="my-16">
            <SectionLabel>What Was Delivered</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {detailedData.deliverables.map((deliverable, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-6 bg-card border-2 border-primary neo-shadow-black"
                >
                  <span className={`inline-block w-6 h-0.5 ${getAccentColor(project.highlightColor)} mb-3`} />
                  <h4 className="text-base font-serif font-bold italic mb-2">{deliverable.title}</h4>
                  <p className="text-sm text-foreground/80 leading-relaxed">{deliverable.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Remaining images */}
        {galleryImages.length > 10 && (
          <FadeIn className="my-14">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {galleryImages.slice(10).map((src, i) => (
                <SquareImage key={i} src={src} alt={`${project.title} ${i + 11}`} className="border-2 border-primary neo-shadow-black" onClick={() => openLightbox(src)} />
              ))}
            </div>
          </FadeIn>
        )}

        <div className="pb-16" />
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
