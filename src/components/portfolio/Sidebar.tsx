import { motion } from 'framer-motion';
import { Category } from '@/types/portfolio';
import { CATEGORIES } from '@/data/projects';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

interface SidebarProps {
  activeCategory: Category;
  onCategorySelect: (category: Category) => void;
  onHomeClick: () => void;
}

const getCategoryColor = (category: Category) => {
  switch (category) {
    case 'UX/UI': return 'hover:bg-neo-pink hover:text-foreground';
    case 'LXD': return 'hover:bg-neo-yellow hover:text-foreground';
    case 'Graphic Design': return 'hover:bg-neo-blue hover:text-foreground';
    case 'Digital Art': return 'hover:bg-neo-pink hover:text-foreground';
    case 'AI': return 'hover:bg-neo-yellow hover:text-foreground';
    default: return 'hover:bg-secondary hover:text-foreground';
  }
};

const getActiveCategoryStyle = (category: Category) => {
  switch (category) {
    case 'UX/UI': return 'bg-neo-pink text-foreground border-primary';
    case 'LXD': return 'bg-neo-yellow text-foreground border-primary';
    case 'Graphic Design': return 'bg-neo-blue text-foreground border-primary';
    case 'Digital Art': return 'bg-neo-pink text-foreground border-primary';
    case 'AI': return 'bg-neo-yellow text-foreground border-primary';
    default: return 'bg-secondary text-foreground border-primary';
  }
};

const Sidebar = ({ activeCategory, onCategorySelect, onHomeClick }: SidebarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 left-4 z-50 md:hidden p-3 bg-card border-2 border-primary neo-shadow-black"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-primary/50 z-40 md:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside 
        className={`
          fixed top-0 left-0 h-full w-64 lg:w-80 bg-sidebar border-r-2 border-primary z-40
          transform transition-transform duration-300 ease-in-out
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}
          md:translate-x-0
        `}
      >
        <div className="flex flex-col h-full p-8">
          {/* Logo / Name */}
          <motion.div 
            className="mb-12 cursor-pointer"
            onClick={onHomeClick}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <h1 className="text-3xl lg:text-4xl font-serif font-black italic text-foreground">
              Avi Milgrom
            </h1>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground mt-2">
              Senior Multidisciplinary Designer
            </p>
          </motion.div>

          {/* Navigation */}
          <nav className="flex-1">
            <ul className="space-y-1">
              <li>
                <button
                  onClick={() => {
                    onHomeClick();
                    setIsOpen(false);
                  }}
                  className={`
                    w-full text-left py-3 px-4 text-sm font-bold uppercase tracking-widest
                    transition-all duration-200 border-l-4
                    ${activeCategory === 'All' 
                      ? 'border-primary bg-secondary text-foreground' 
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-muted hover:bg-secondary'
                    }
                  `}
                >
                  All Work
                </button>
              </li>
              {CATEGORIES.map((category) => (
                <li key={category}>
                  <button
                    onClick={() => {
                      onCategorySelect(category);
                      setIsOpen(false);
                    }}
                    className={`
                      w-full text-left py-3 px-4 text-sm font-bold uppercase tracking-widest
                      transition-all duration-200 border-l-4
                      ${activeCategory === category 
                        ? getActiveCategoryStyle(category)
                        : `border-transparent text-muted-foreground ${getCategoryColor(category)}`
                      }
                    `}
                  >
                    {category}
                  </button>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact / Social */}
          <div className="mt-auto pt-8 border-t-2 border-primary">
            <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-4">
              Get in Touch
            </p>
            <div className="space-y-2">
              <a 
                href="mailto:hello@avimilgrom.com" 
                className="block text-sm text-foreground hover:text-accent transition-colors"
              >
                hello@avimilgrom.com
              </a>
              <div className="flex gap-4 mt-4">
                <a 
                  href="#" 
                  className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  LinkedIn
                </a>
                <a 
                  href="#" 
                  className="text-xs font-bold uppercase tracking-widest text-muted-foreground hover:text-foreground transition-colors"
                >
                  Dribbble
                </a>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
