import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import About from '../components/About';
import StatsSection from '../components/StatsSection';
import ResearchSection from '../components/ResearchSection';
import PublicationsSection from '../components/PublicationsSection';
import ProjectsSection from '../components/ProjectsSection';
import AwardsSection from '../components/AwardsSection';
import ContactSection from '../components/ContactSection';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.slice(1);
      const el = document.getElementById(id);
      if (el) {
        const t = setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
        return () => clearTimeout(t);
      }
    }  
  }, [location.pathname, location.hash]);

  return (
    <>
      <Hero />
      <About />
      <StatsSection />
      <ResearchSection />
      <PublicationsSection />
      <ProjectsSection />
      <AwardsSection />
      <ContactSection />
    </>
  );
}
