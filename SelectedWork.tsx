import React, { useState, useRef } from 'react';
import { Project } from '../types';
import { PROJECTS } from '../data/projects';
import { ArrowUpRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { ProjectMockup } from './ProjectMockup';

interface SelectedWorkProps {
  onSelectProject: (project: Project) => void;
}

export const SelectedWork: React.FC<SelectedWorkProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const carouselRef = useRef<HTMLDivElement>(null);

  const filterTabs = [
    'All',
    'Websites',
    'Social Media',
    'Branding',
    'Video',
    'Advertising',
    'WhatsApp',
    'Local Setup',
    'E-commerce',
    'Merchandise',
    'Signage & 3D',
    'AI Automation',
    'Copywriting'
  ];

  const filteredProjects = PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.filterCategory.toLowerCase() === activeFilter.toLowerCase();
  });

  const scrollCarousel = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const scrollAmount = direction === 'left' ? -360 : 360;
      carouselRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="work" 
      className="relative -mt-10 rounded-t-[40px] pt-24 sm:pt-28 pb-28 sm:pb-36 bg-[#D8CFBC] text-[#11120D] z-20 shadow-[0_-20px_50px_rgba(17,18,13,0.25)] overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#FFFBF4] border border-[#11120D]/10 text-xs font-semibold tracking-[0.14em] uppercase text-[#565449] shadow-sm rounded-full">
              <span className="w-1.5 h-1.5 rounded-full bg-[#11120D] shrink-0" />
              <span>Curated Portfolio</span>
            </div>

            <h2 className="font-display font-semibold tracking-[-0.03em] text-[#11120D] text-4xl sm:text-5xl lg:text-6xl leading-[0.95]">
              Our{' '}
              <span className="font-serif-italic font-normal italic text-[#11120D]">
                work
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#565449] font-normal leading-relaxed">
              Concept projects showing what we can build for your business across all 12 core agency disciplines.
            </p>
          </div>

          {/* Mobile Carousel Navigation Arrows */}
          <div className="flex md:hidden items-center gap-2 self-start">
            <button
              onClick={() => scrollCarousel('left')}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-[#FFFBF4] border border-[#11120D]/15 flex items-center justify-center text-[#11120D] shadow-sm active:scale-95 transition-transform"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scrollCarousel('right')}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-[#FFFBF4] border border-[#11120D]/15 flex items-center justify-center text-[#11120D] shadow-sm active:scale-95 transition-transform"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
            <span className="text-xs text-[#565449] font-medium ml-1">Swipe to explore</span>
          </div>
        </div>

        {/* Filter Chips Bar */}
        <div className="mb-10 sm:mb-12 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-2 sm:gap-2.5 min-w-max">
            {filterTabs.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium rounded-full transition-all duration-300 cursor-pointer min-h-[40px] flex items-center gap-1.5 ${
                    isActive
                      ? 'bg-[#11120D] text-[#FFFBF4] font-semibold shadow-md scale-[1.02]'
                      : 'bg-[#FFFBF4] text-[#565449] border border-[#11120D]/10 hover:text-[#11120D] hover:border-[#11120D]/30 shadow-xs'
                  }`}
                >
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4]" />}
                  <span>{cat}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* MOBILE VIEW: Swipeable Horizontal Carousel with Snap (visible on < md) */}
        <div 
          ref={carouselRef}
          className="md:hidden flex overflow-x-auto snap-x snap-mandatory gap-5 pb-6 -mx-4 px-4 scrollbar-none"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="snap-center shrink-0 w-[88vw] max-w-[390px] bg-[#FFFBF4] border border-[#11120D]/10 rounded-[24px] p-5 flex flex-col justify-between shadow-[0_12px_32px_rgba(17,18,13,0.06)] active:scale-[0.99] transition-transform cursor-pointer"
            >
              {/* 16:10 Bright Futuristic Mockup with 20px radius */}
              <div 
                className="mb-5 overflow-hidden rounded-[20px]"
                role="img"
                aria-label={`${project.title} — ${project.category} direct reservation and web architecture mockup`}
              >
                <ProjectMockup project={project} />
              </div>

              {/* Card Metadata & Content */}
              <div className="space-y-3.5">
                {/* Top tags: Category number/name pill on left, CONCEPT on right */}
                <div className="flex items-center justify-between gap-2 border-b border-[#11120D]/10 pb-3">
                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#11120D]/5 border border-[#11120D]/10 text-[11px] font-semibold text-[#11120D]">
                    <span className="font-mono font-bold">[{project.number}]</span>
                    <span>•</span>
                    <span className="uppercase tracking-wider">{project.category}</span>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#11120D]/5 text-[#565449] border border-[#11120D]/10">
                    CONCEPT
                  </span>
                </div>

                {/* Bold title */}
                <h3 className="text-xl sm:text-2xl font-display font-bold text-[#11120D] leading-tight">
                  {project.title}
                </h3>

                {/* Italic/bold metric headline */}
                <p className="text-sm sm:text-base font-serif-italic italic font-bold text-[#11120D] leading-snug">
                  "{project.oneLineResult}"
                </p>

                {/* 2-line feature description */}
                <p className="text-xs text-[#565449] line-clamp-2 leading-relaxed">
                  {project.summary}
                </p>

                {/* Bottom actions: ◉ Dual viewport interactive & View project ↗ */}
                <div className="pt-3 border-t border-[#11120D]/10 flex items-center justify-between text-xs font-semibold text-[#11120D]">
                  <div className="inline-flex items-center gap-1.5 text-xs text-[#565449] font-medium">
                    <span className="text-[#11120D] text-sm leading-none">◉</span>
                    <span>Dual viewport interactive</span>
                  </div>
                  <span className="inline-flex items-center gap-1 font-bold group-hover:underline">
                    View project <ArrowUpRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* DESKTOP VIEW: Staggered Bento 2-Column Grid with Full Aspect Visibility (visible on >= md) */}
        <div className="hidden md:grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group bg-[#FFFBF4] border border-[#11120D]/10 hover:border-[#11120D]/30 rounded-[24px] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 ease-out cursor-pointer relative shadow-[0_12px_32px_rgba(17,18,13,0.06)] hover:shadow-[0_24px_60px_rgba(17,18,13,0.12)] hover:-translate-y-1.5"
            >
              {/* 16:10 Bright Futuristic Mockup with 20px radius */}
              <div 
                className="mb-6 overflow-hidden rounded-[20px] transition-transform duration-700 ease-out"
                role="img"
                aria-label={`${project.title} — ${project.category} direct reservation and web architecture mockup`}
              >
                <ProjectMockup project={project} />
              </div>

              {/* Card Content Below Mockup */}
              <div className="space-y-4">
                {/* Top tags: Category number/name pill on left ([01] • CATEGORY), CONCEPT on right */}
                <div className="flex items-center justify-between gap-3 border-b border-[#11120D]/10 pb-3">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#11120D]/5 border border-[#11120D]/10 text-xs font-semibold text-[#11120D]">
                    <span className="font-mono font-bold">[{project.number}]</span>
                    <span>•</span>
                    <span className="uppercase tracking-wider">{project.category}</span>
                  </div>

                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold tracking-wider uppercase bg-[#11120D]/5 text-[#565449] border border-[#11120D]/10">
                    CONCEPT
                  </span>
                </div>

                {/* Bold title */}
                <h3 className="text-2xl sm:text-3xl font-display font-bold text-[#11120D] group-hover:text-[#565449] transition-colors leading-tight">
                  {project.title}
                </h3>

                {/* Italic/bold metric headline */}
                <p className="text-base sm:text-lg font-serif-italic italic font-bold text-[#11120D] leading-snug">
                  "{project.oneLineResult}"
                </p>

                {/* 2-line feature description */}
                <p className="text-xs sm:text-sm text-[#565449] font-normal leading-relaxed line-clamp-2">
                  {project.summary}
                </p>

                {/* Bottom actions: ◉ Dual viewport interactive (left) & View project ↗ (right) */}
                <div className="pt-4 border-t border-[#11120D]/10 flex items-center justify-between">
                  <div className="inline-flex items-center gap-2 text-xs text-[#565449] font-medium">
                    <span className="text-[#11120D] text-sm leading-none">◉</span>
                    <span>Dual viewport interactive</span>
                  </div>

                  <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-bold text-[#11120D] group-hover:translate-x-1 transition-transform">
                    <span>View project</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
