import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Project } from '@/types/portfolio';

interface ProjectCardProps {
  project: Project;
  onClick?: (project: Project) => void;
}

const getShadowClass = (color: Project['highlightColor']) => {
  switch (color) {
    case 'pink': return 'neo-shadow-pink';
    case 'yellow': return 'neo-shadow-yellow';
    case 'blue': return 'neo-shadow-blue';
    default: return 'neo-shadow-black';
  }
};

const getHoverShadowStyle = (color: Project['highlightColor']) => {
  switch (color) {
    case 'pink': return { boxShadow: '6px 6px 0px 0px hsl(var(--neo-pink))' };
    case 'yellow': return { boxShadow: '6px 6px 0px 0px hsl(var(--neo-yellow))' };
    case 'blue': return { boxShadow: '6px 6px 0px 0px hsl(var(--neo-blue))' };
    default: return { boxShadow: '6px 6px 0px 0px hsl(var(--primary))' };
  }
};

const ProjectCard = ({ project, onClick }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick(project);
    } else {
      navigate(`/project/${project.id}`);
    }
  };

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      whileHover={{
        y: -4,
        x: -2,
        ...getHoverShadowStyle(project.highlightColor)
      }}
      onClick={handleClick}
      className={`
        group cursor-pointer bg-card border-2 border-primary overflow-hidden
        aspect-square flex flex-col
        ${getShadowClass(project.highlightColor)}
        transition-all duration-300
      `}
    >
      {/* Image — 72% of card height */}
      <div className="relative overflow-hidden flex-[3]">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />

        {/* Tags overlay */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
          {project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="px-2 py-0.5 text-[9px] font-bold uppercase tracking-wider border border-primary/40 shadow-[2px_2px_0px_0px_rgba(0,0,0,0.15)]"
              style={{ backgroundColor: `hsl(var(--tag-${tag.toLowerCase().replace(/[\s\/]+/g, '-')}))` }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Text — 28% of card height */}
      <div className="flex-[1] flex flex-col justify-center px-4 overflow-hidden">
        {project.subtitle && (
          <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-1 truncate">
            {project.subtitle}
          </p>
        )}
        <h3 className="text-base font-serif font-bold italic leading-tight truncate">
          {project.title}
        </h3>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
