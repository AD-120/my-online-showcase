import { motion } from 'framer-motion';
import { Project } from '@/types/portfolio';
import { ArrowLeft, ExternalLink } from 'lucide-react';
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

// Image component with loading animation
const ProjectImage = ({ src, alt, className = '' }: { src: string; alt: string; className?: string }) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.98 }}
    whileInView={{ opacity: 1, scale: 1 }}
    viewport={{ once: true, margin: '-30px' }}
    transition={{ duration: 0.7, ease: 'easeOut' }}
    className={`overflow-hidden ${className}`}
  >
    <img src={src} alt={alt} className="w-full h-full object-cover" loading="lazy" />
  </motion.div>
);

// Layout patterns for image arrangements
const ImageFullWidth = ({ src, alt }: { src: string; alt: string }) => (
  <div className="my-16">
    <ProjectImage src={src} alt={alt} className="w-full border-2 border-primary neo-shadow-black" />
  </div>
);

const ImageTwoCol = ({ images, alt }: { images: string[]; alt: string }) => (
  <div className="my-16 grid grid-cols-1 md:grid-cols-2 gap-6">
    {images.map((src, i) => (
      <ProjectImage key={i} src={src} alt={`${alt} ${i + 1}`} className="border-2 border-primary neo-shadow-black" />
    ))}
  </div>
);

const ImageAsymmetric = ({ images, alt }: { images: string[]; alt: string }) => (
  <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="md:col-span-2">
      <ProjectImage src={images[0]} alt={`${alt} 1`} className="h-full border-2 border-primary neo-shadow-black" />
    </div>
    <div className="flex flex-col gap-6">
      {images.slice(1, 3).map((src, i) => (
        <ProjectImage key={i} src={src} alt={`${alt} ${i + 2}`} className="flex-1 border-2 border-primary neo-shadow-black" />
      ))}
    </div>
  </div>
);

const ImageAsymmetricReverse = ({ images, alt }: { images: string[]; alt: string }) => (
  <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="flex flex-col gap-6">
      {images.slice(0, 2).map((src, i) => (
        <ProjectImage key={i} src={src} alt={`${alt} ${i + 1}`} className="flex-1 border-2 border-primary neo-shadow-black" />
      ))}
    </div>
    <div className="md:col-span-2">
      <ProjectImage src={images[2]} alt={`${alt} 3`} className="h-full border-2 border-primary neo-shadow-black" />
    </div>
  </div>
);

const ImageThreeCol = ({ images, alt }: { images: string[]; alt: string }) => (
  <div className="my-16 grid grid-cols-1 md:grid-cols-3 gap-6">
    {images.map((src, i) => (
      <ProjectImage key={i} src={src} alt={`${alt} ${i + 1}`} className="border-2 border-primary neo-shadow-black" />
    ))}
  </div>
);

// Interleave images with content sections in an editorial flow
const getImageChunks = (images: string[]) => {
  if (images.length === 0) return [];
  const chunks: { type: string; images: string[] }[] = [];
  let idx = 0;

  // Pattern: full → 2col → asymmetric → 3col → asymmetric-rev → repeat
  const patterns = [
    { type: 'full', count: 1 },
    { type: 'two', count: 2 },
    { type: 'asymmetric', count: 3 },
    { type: 'three', count: 3 },
    { type: 'full', count: 1 },
    { type: 'asymmetric-reverse', count: 3 },
    { type: 'two', count: 2 },
    { type: 'full', count: 1 },
  ];

  let patternIdx = 0;
  while (idx < images.length) {
    const pattern = patterns[patternIdx % patterns.length];
    const available = images.slice(idx, idx + pattern.count);
    if (available.length === 0) break;

    // Adjust type if not enough images for the pattern
    let type = pattern.type;
    if (available.length < 3 && (type === 'asymmetric' || type === 'asymmetric-reverse' || type === 'three')) {
      type = available.length === 2 ? 'two' : 'full';
    }
    if (available.length < 2 && type === 'two') {
      type = 'full';
    }

    chunks.push({ type, images: available });
    idx += available.length;
    patternIdx++;
  }

  return chunks;
};

const renderImageChunk = (chunk: { type: string; images: string[] }, alt: string, key: number) => {
  switch (chunk.type) {
    case 'full':
      return <ImageFullWidth key={key} src={chunk.images[0]} alt={alt} />;
    case 'two':
      return <ImageTwoCol key={key} images={chunk.images} alt={alt} />;
    case 'asymmetric':
      return <ImageAsymmetric key={key} images={chunk.images} alt={alt} />;
    case 'asymmetric-reverse':
      return <ImageAsymmetricReverse key={key} images={chunk.images} alt={alt} />;
    case 'three':
      return <ImageThreeCol key={key} images={chunk.images} alt={alt} />;
    default:
      return <ImageFullWidth key={key} src={chunk.images[0]} alt={alt} />;
  }
};

const SectionLabel = ({ children }: { children: React.ReactNode }) => (
  <h3 className="text-[11px] font-bold uppercase tracking-[0.3em] text-muted-foreground mb-6">
    {children}
  </h3>
);

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
  const detailedData = getProjectDetailedData(project.id);
  const galleryImages = project.details?.galleryImages || [];
  const imageChunks = getImageChunks(galleryImages);

  // Split image chunks to interleave with content sections
  const heroImages = imageChunks.slice(0, 1);
  const midImages = imageChunks.slice(1, 3);
  const lateImages = imageChunks.slice(3, 5);
  const endImages = imageChunks.slice(5);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="min-h-screen"
    >
      {/* Back button */}
      <div className="sticky top-0 z-30 bg-background/95 backdrop-blur-sm border-b-2 border-primary">
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

      {/* Hero Section */}
      <div className="relative overflow-hidden border-b-2 border-primary">
        <motion.img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-[50vh] md:h-[65vh] object-cover"
          initial={{ scale: 1.05 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
      </div>

      {/* Content container */}
      <div className="px-6 md:px-12 lg:px-20 max-w-6xl mx-auto">

        {/* Title & Overview */}
        <FadeIn className="pt-16 pb-8">
          {project.subtitle && (
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {project.subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-black italic mb-6 leading-[1.1]">
            {detailedData?.title || project.title}
          </h1>
          <div className={`h-1.5 w-32 ${getAccentColor(project.highlightColor)}`} />
        </FadeIn>

        {/* Meta bar */}
        <FadeIn delay={0.1} className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-8 bg-card border-2 border-primary neo-shadow-black">
            {(detailedData?.client || project.client) && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Client</p>
                <p className="text-lg font-semibold">{detailedData?.client || project.client}</p>
              </div>
            )}
            {detailedData?.role && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Role</p>
                {Array.isArray(detailedData.role) ? (
                  <ul className="space-y-1">
                    {detailedData.role.map((r, idx) => (
                      <li key={idx} className="text-sm font-medium">{r}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-lg font-semibold">{detailedData.role}</p>
                )}
              </div>
            )}
            {detailedData?.tools && detailedData.tools.length > 0 && (
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">Tools</p>
                <div className="flex flex-wrap gap-2">
                  {detailedData.tools.map((tool) => (
                    <span key={tool} className="px-3 py-1 bg-secondary text-xs font-bold uppercase tracking-wider border border-primary">
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </FadeIn>

        {/* Description / Overview */}
        <FadeIn className="mb-12">
          <SectionLabel>Overview</SectionLabel>
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90 whitespace-pre-line max-w-4xl">
            {detailedData?.description || project.description}
          </p>
        </FadeIn>

        {/* External Link */}
        {detailedData?.externalLink && (
          <FadeIn className="mb-12">
            <a
              href={detailedData.externalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-bold uppercase tracking-widest text-foreground border-2 border-primary bg-card neo-shadow-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))]"
            >
              <ExternalLink size={16} />
              View Live Project
            </a>
          </FadeIn>
        )}

        {/* First image group — after overview */}
        {heroImages.map((chunk, i) => renderImageChunk(chunk, project.title, i))}

        {/* Challenges */}
        {detailedData?.challenges && detailedData.challenges.length > 0 && (
          <FadeIn className="my-20">
            <SectionLabel>Key Challenges</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailedData.challenges.map((challenge, idx) => (
                <div
                  key={idx}
                  className={`p-6 border-l-4 ${getAccentBorder(project.highlightColor)} bg-card border border-primary/20`}
                >
                  <p className="text-lg leading-relaxed">{challenge}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Mid image group — after challenges */}
        {midImages.map((chunk, i) => renderImageChunk(chunk, project.title, 10 + i))}

        {/* Process */}
        {detailedData?.process && (
          <FadeIn className="my-20">
            <SectionLabel>The Process</SectionLabel>
            <div className="max-w-4xl">
              <p className="text-lg md:text-xl leading-relaxed whitespace-pre-line text-foreground/85">
                {detailedData.process}
              </p>
            </div>
          </FadeIn>
        )}

        {/* Late image group — after process */}
        {lateImages.map((chunk, i) => renderImageChunk(chunk, project.title, 20 + i))}

        {/* Deliverables */}
        {detailedData?.deliverables && detailedData.deliverables.length > 0 && (
          <FadeIn className="my-20">
            <SectionLabel>What Was Delivered</SectionLabel>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {detailedData.deliverables.map((deliverable, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="p-8 bg-card border-2 border-primary neo-shadow-black"
                >
                  <span className={`inline-block w-8 h-1 ${getAccentColor(project.highlightColor)} mb-4`} />
                  <h4 className="text-xl font-serif font-bold italic mb-3">{deliverable.title}</h4>
                  <p className="text-base text-foreground/80 leading-relaxed">{deliverable.description}</p>
                </motion.div>
              ))}
            </div>
          </FadeIn>
        )}

        {/* Remaining images — after deliverables */}
        {endImages.map((chunk, i) => renderImageChunk(chunk, project.title, 30 + i))}

        {/* Bottom spacing */}
        <div className="pb-20" />
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
