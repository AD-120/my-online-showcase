import { useParams, useNavigate } from 'react-router-dom';
import { useMemo } from 'react';
import Sidebar from '@/components/portfolio/Sidebar';
import ProjectDetail from '@/components/portfolio/ProjectDetail';
import Footer from '@/components/portfolio/Footer';
import { PROJECTS } from '@/data/projects';
import { Category } from '@/types/portfolio';

const ProjectPage = () => {
  const { projectId } = useParams<{ projectId: string }>();
  const navigate = useNavigate();

  const project = useMemo(() => {
    return PROJECTS.find(p => p.id === projectId);
  }, [projectId]);

  const handleBack = () => {
    navigate('/');
  };

  const handleCategorySelect = (category: Category) => {
    navigate('/', { state: { category } });
  };

  const handleHomeClick = () => {
    navigate('/');
  };

  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-serif font-black mb-4">Project Not Found</h1>
          <button 
            onClick={handleBack}
            className="text-primary hover:underline"
          >
            Return to Portfolio
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Sidebar 
        activeCategory="All"
        onCategorySelect={handleCategorySelect}
        onHomeClick={handleHomeClick}
      />

      <main className="md:ml-64 lg:ml-80 min-h-screen">
        <ProjectDetail 
          project={project} 
          onBack={handleBack} 
        />
        <Footer />
      </main>
    </div>
  );
};

export default ProjectPage;
