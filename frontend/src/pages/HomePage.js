import React, { useState, useEffect, useRef, useCallback } from 'react';
import { projects, siteInfo } from '@/data/mock';
import { ChevronDown, X } from 'lucide-react';

/* Scroll-triggered visibility hook */
const useInView = () => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return [ref, isVisible];
};

const ProjectItem = ({ project, index, onHover, onLeave, onClick }) => {
  const [ref, isVisible] = useInView();

  return (
    <div
      ref={ref}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: `translateY(${isVisible ? 0 : 24}px)`,
        transition: `opacity 0.7s ease ${index * 0.06}s, transform 0.7s ease ${index * 0.06}s`,
      }}
    >
      <button
        type="button"
        className="group w-full text-left border-t border-white/[0.08] py-5 md:py-7 cursor-pointer bg-transparent"
        onMouseEnter={() => onHover(project)}
        onMouseLeave={onLeave}
        onClick={() => onClick(project)}
      >
        <div className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6">
          {project.year && (
            <span className="text-[11px] tracking-[0.15em] text-white/30 font-light shrink-0 md:w-14">
              {project.year}
            </span>
          )}
          {project.credit && (
            <span className="text-[10px] tracking-[0.15em] text-white/25 font-light shrink-0 md:w-64 uppercase">
              {project.credit}
            </span>
          )}
          <h3 className="font-display text-[1.75rem] md:text-[2.2rem] lg:text-[2.8rem] leading-[1] tracking-[0.02em]">
            <span
              className="inline-block group-hover:opacity-70"
              style={{ transition: 'opacity 0.3s ease' }}
            >
              {project.title}
            </span>
          </h3>
        </div>
      </button>
    </div>
  );
};

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape') onClose();
  };

  document.addEventListener('keydown', handleKeyDown);

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
  };
}, [onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center px-6"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-[#111] border border-white/10 p-6 md:p-10 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 text-white/50 hover:text-white transition-colors"
          aria-label="Close project details"
        >
          <X size={22} strokeWidth={1.5} />
        </button>

        <div className="mb-6">
          {project.year && (
            <p className="text-[11px] tracking-[0.18em] uppercase text-white/35 mb-3">
              {project.year}
            </p>
          )}
          <h2 className="font-display text-3xl md:text-5xl leading-none mb-3">
            {project.title}
          </h2>
          {project.credit && (
            <p className="text-[11px] tracking-[0.18em] uppercase text-white/35">
              {project.credit}
            </p>
          )}
        </div>

        {project.image && (
          <div className="mb-8 overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        {project.description && (
          <p className="text-sm md:text-base text-white/75 leading-7 mb-6 max-w-2xl">
            {project.description}
          </p>
        )}

        {project.details?.length > 0 && (
          <div className="mb-6">
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
              Details
            </h3>
            <ul className="space-y-3 text-sm md:text-base text-white/70">
              {project.details.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {project.tools?.length > 0 && (
          <div>
            <h3 className="text-[10px] tracking-[0.3em] uppercase text-white/30 mb-4">
              Tools
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="border border-white/15 px-3 py-1 text-[11px] tracking-[0.12em] uppercase text-white/65"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const HomePage = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [displayImage, setDisplayImage] = useState(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const workRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 150);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    projects.forEach((project) => {
      if (project.image) {
        const img = new Image();
        img.src = project.image;
      }
    });
  }, []);

  const handleMouseMove = useCallback((e) => {
    setMousePos({ x: e.clientX, y: e.clientY });
  }, []);

  const handleHover = useCallback((project) => {
    setHoveredProject(project);
    setDisplayImage(project.image);
  }, []);

  const handleLeave = useCallback(() => {
    setHoveredProject(null);
  }, []);

  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  const handleCloseModal = useCallback(() => {
    setSelectedProject(null);
  }, []);

  const scrollToWork = () => {
    workRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const imageLeft =
    mousePos.x > (typeof window !== 'undefined' ? window.innerWidth * 0.6 : 800)
      ? mousePos.x - 390
      : mousePos.x + 30;

  const imageTop = Math.max(
    20,
    Math.min(mousePos.y - 130, (typeof window !== 'undefined' ? window.innerHeight : 800) - 280)
  );

  return (
    <div>
      <section className="h-screen flex flex-col justify-center px-6 md:px-12 lg:px-16 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://customer-assets.emergentagent.com/job_portfolio-showcase-920/artifacts/4vuwp2z6_DSCF0057.JPG"
            alt=""
            className="w-full h-full object-cover"
            style={{ filter: 'brightness(0.35) contrast(1.1)' }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20" />
        </div>

        <div
          className="relative z-10"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: `translateY(${isLoaded ? 0 : 40}px)`,
            transition: 'opacity 1.2s ease, transform 1.2s ease',
          }}
        >
          <h1 className="font-display text-[16vw] md:text-[13vw] lg:text-[11vw] leading-[0.88] tracking-[0.01em]">
            {siteInfo.name.split(' ').map((word, i) => (
              <span key={i} className="block">
                {word}
              </span>
            ))}
          </h1>
        </div>

        <div
          className="relative z-10"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: `translateY(${isLoaded ? 0 : 20}px)`,
            transition: 'opacity 1.2s ease 0.4s, transform 1.2s ease 0.4s',
          }}
        >
          <p className="mt-6 md:mt-8 text-[11px] md:text-[13px] tracking-[0.5em] font-light text-white/40 uppercase">
            {siteInfo.title}
          </p>
          {siteInfo.bio && (
            <p className="mt-4 text-sm md:text-base text-white/70 max-w-xl">
              {siteInfo.bio}
            </p>
          )}
        </div>

        <button
          onClick={scrollToWork}
          className="absolute bottom-10 left-1/2 text-white/20 cursor-pointer bg-transparent border-none"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 1s ease 1s',
            animation: 'bounce-subtle 2s ease-in-out infinite',
          }}
          aria-label="Scroll to work"
        >
          <ChevronDown size={20} strokeWidth={1} />
        </button>
      </section>

      <section
        id="work"
        ref={workRef}
        className="px-6 md:px-12 lg:px-16 pb-24"
        onMouseMove={handleMouseMove}
      >
        <div className="pt-20 md:pt-24 mb-10 md:mb-14">
          <span className="text-[10px] tracking-[0.35em] text-white/25 font-light uppercase">
            Selected Work
          </span>
        </div>

        <div>
          {projects.map((project, index) => (
            <ProjectItem
              key={project.id}
              project={project}
              index={index}
              onHover={handleHover}
              onLeave={handleLeave}
              onClick={handleProjectClick}
            />
          ))}
          <div className="border-t border-white/[0.08]" />
        </div>

        <div
          className="fixed pointer-events-none z-30 overflow-hidden hidden md:block"
          style={{
            left: imageLeft,
            top: imageTop,
            width: '360px',
            height: '240px',
            opacity: hoveredProject && !selectedProject ? 1 : 0,
            clipPath: hoveredProject && !selectedProject ? 'inset(0 0 0 0)' : 'inset(40% 0 40% 0)',
            transition: 'opacity 0.3s ease, clip-path 0.35s cubic-bezier(0.77, 0, 0.175, 1)',
            willChange: 'clip-path, opacity',
          }}
        >
          {displayImage && (
            <img
              src={displayImage}
              alt=""
              className="w-full h-full object-cover"
              style={{ filter: 'contrast(1.05) brightness(0.9)' }}
            />
          )}
        </div>
      </section>

      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default HomePage;