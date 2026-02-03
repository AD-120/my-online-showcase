import { useState, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import Sidebar from '@/components/portfolio/Sidebar';
import Hero from '@/components/portfolio/Hero';
import ProjectCard from '@/components/portfolio/ProjectCard';
import Footer from '@/components/portfolio/Footer';
import { PROJECTS } from '@/data/projects';
import { Category } from '@/types/portfolio';

const Index = () => {
  const location = useLocation();
  const initialCategory = (location.state as { category?: Category })?.category || 'All';
  const [activeCategory, setActiveCategory] = useState<Category>(initialCategory);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS;
    return PROJECTS.filter(p => p.categories.includes(activeCategory));
  }, [activeCategory]);

  const handleHomeClick = () => {
    setActiveCategory('All');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        activeCategory={activeCategory} 
        onCategorySelect={(cat) => {
          setActiveCategory(cat);
        }}
        onHomeClick={handleHomeClick}
      />

      <main className="md:ml-64 lg:ml-80 min-h-screen">
        <motion.div
          key="grid"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence mode="wait">
            {activeCategory === 'All' && (
              <Hero key="hero" />
            )}
          </AnimatePresence>

          <section id="works" className="p-6 md:p-12">
            <div className="mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-serif font-black italic uppercase tracking-tighter">
                  {activeCategory === 'All' ? 'Selected Works' : activeCategory}
                </h2>
                <div className="h-1 w-24 bg-primary mt-2"></div>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Showing {filteredProjects.length} Projects
              </div>
            </div>

            <motion.div 
              layout
              className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-12"
            >
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project) => (
                  <ProjectCard 
                    key={project.id} 
                    project={project} 
                  />
                ))}
              </AnimatePresence>
            </motion.div>
          </section>
        </motion.div>

        <Footer />
      </main>
    </div>
  );
};

export default Index;
