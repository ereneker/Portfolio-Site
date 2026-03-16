import React, { useEffect, useState } from 'react';
import { cvData } from '@/data/mock';

const CVPage = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className="pt-28 md:pt-36 px-6 md:px-12 lg:px-16 pb-24 min-h-screen"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      {/* Experience */}
      <section className="mb-20">
        <h2 className="text-[10px] tracking-[0.35em] text-white/25 font-light uppercase mb-10">
          Experience
        </h2>
        <div>
          {cvData.selectedWork.map((work, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 border-t border-white/[0.06] py-4"
              style={{
                opacity: isLoaded ? 1 : 0,
                transform: `translateY(${isLoaded ? 0 : 12}px)`,
                transition: `opacity 0.6s ease ${i * 0.05}s, transform 0.6s ease ${i * 0.05}s`,
              }}
            >
              {work.year && (
                <span className="text-[11px] text-white/30 font-light shrink-0 w-12">
                  {work.year}
                </span>
              )}
              <span className="font-display text-lg md:text-xl tracking-[0.02em] shrink-0 md:w-64">
                {work.title}
              </span>
              <span className="text-[11px] text-white/20 font-light hidden md:block ml-auto">
                {work.role}
              </span>
              {work.director && (
                <span className="text-[11px] text-white/20 font-light hidden md:block shrink-0 w-44 text-right">
                  {work.director}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Personal Projects */}
      <section className="mb-20">
        <h2 className="text-[10px] tracking-[0.35em] text-white/25 font-light uppercase mb-10">
          Personal Projects
        </h2>
        <div>
          {cvData.personalProjects.map((project, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 border-t border-white/[0.06] py-4"
            >
              {project.year && (
                <span className="text-[11px] text-white/30 font-light shrink-0 w-12">
                  {project.year}
                </span>
              )}
              <span className="font-display text-lg md:text-xl tracking-[0.02em]">
                {project.title}
              </span>
              {project.role && (
                <span className="text-[11px] text-white/20 font-light hidden md:block ml-auto">
                  {project.role}
                </span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section>
        <h2 className="text-[10px] tracking-[0.35em] text-white/25 font-light uppercase mb-10">
          Education
        </h2>
        <div>
          {cvData.education.map((edu, i) => (
            <div
              key={i}
              className="flex flex-col md:flex-row md:items-baseline gap-1 md:gap-6 border-t border-white/[0.06] py-4"
            >
              <span className="text-[11px] text-white/30 font-light shrink-0 w-12">
                {edu.year}
              </span>
              <div>
                <p className="text-[13px] font-light">{edu.institution}</p>
                <p className="text-[11px] text-white/25 font-light mt-1">{edu.degree}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default CVPage;
