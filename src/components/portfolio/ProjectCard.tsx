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
      layout
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20, scale: 0.95 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ 
        y: -4, 
        x: -2,
        ...getHoverShadowStyle(project.highlightColor)
      }}
      onClick={handleClick}
      className={`
        group cursor-pointer bg-card border-2 border-primary overflow-hidden
        ${getShadowClass(project.highlightColor)}
        transition-all duration-300
      `}
    >
      {/* Thumbnail */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img 
          src={project.thumbnail} 
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 transition-colors duration-300" />
        
        {/* Tags overlay */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          {project.tags.slice(0, 3).map((tag) => (
            <span 
              key={tag}
              className="px-2 py-1 bg-card text-[10px] font-bold uppercase tracking-wider border border-primary"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {project.subtitle && (
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mb-2">
            {project.subtitle}
          </p>
        )}
        <h3 className="text-xl md:text-2xl font-serif font-bold italic mb-3 leading-tight">
          {project.title}
        </h3>
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {project.description}
        </p>
        
        {project.client && (
          <p className="mt-4 pt-4 border-t border-muted text-xs font-semibold text-muted-foreground">
            Client: {project.client}
          </p>
        )}
      </div>
    </motion.article>
  );
};

export default ProjectCard;
