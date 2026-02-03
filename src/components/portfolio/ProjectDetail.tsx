import { motion } from 'framer-motion';
import { Project } from '@/types/portfolio';
import { ArrowLeft } from 'lucide-react';

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

const ProjectDetail = ({ project, onBack }: ProjectDetailProps) => {
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
        <div className="p-4 md:p-6">
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 px-4 py-2 text-xs font-bold uppercase tracking-widest text-foreground border-2 border-primary bg-card neo-shadow-black transition-all hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_hsl(var(--primary))]"
          >
            <ArrowLeft size={16} />
            Back to Projects
          </button>
        </div>
      </div>

      {/* Hero image */}
      <div className="relative aspect-[21/9] overflow-hidden border-b-2 border-primary">
        <motion.img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
      </div>

      {/* Content */}
      <div className="p-8 md:p-16 max-w-5xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="mb-12"
        >
          {project.subtitle && (
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-muted-foreground mb-4">
              {project.subtitle}
            </p>
          )}
          <h1 className="text-4xl md:text-6xl font-serif font-black italic mb-6">
            {project.title}
          </h1>
          <div className={`h-1.5 w-32 ${getAccentColor(project.highlightColor)}`} />
        </motion.div>

        {/* Meta info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16 p-8 bg-card border-2 border-primary neo-shadow-black"
        >
          {project.client && (
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
                Client
              </p>
              <p className="text-lg font-semibold">{project.client}</p>
            </div>
          )}
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Categories
            </p>
            <p className="text-lg font-semibold">{project.categories.join(', ')}</p>
          </div>
          <div>
            <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-2">
              Tags
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-secondary text-xs font-bold uppercase tracking-wider border border-primary"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-xl md:text-2xl leading-relaxed text-foreground/90">
            {project.description}
          </p>
        </motion.div>

        {/* Details sections */}
        {project.details && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="space-y-12"
          >
            {project.details.challenge && (
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    The Challenge
                  </h3>
                </div>
                <p className="text-lg leading-relaxed">{project.details.challenge}</p>
              </div>
            )}
            
            {project.details.process && (
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    The Process
                  </h3>
                </div>
                <p className="text-lg leading-relaxed">{project.details.process}</p>
              </div>
            )}
            
            {project.details.results && (
              <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                    The Results
                  </h3>
                </div>
                <p className="text-lg leading-relaxed">{project.details.results}</p>
              </div>
            )}

            {/* Gallery */}
            {project.details.galleryImages && project.details.galleryImages.length > 0 && (
              <div className="pt-12 border-t-2 border-primary">
                <h3 className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-8">
                  Project Gallery
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.details.galleryImages.map((img, idx) => (
                    <motion.div 
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 + idx * 0.1, duration: 0.5 }}
                      className="aspect-video overflow-hidden border-2 border-primary neo-shadow-black"
                    >
                      <img 
                        src={img} 
                        alt={`${project.title} gallery ${idx + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

export default ProjectDetail;
