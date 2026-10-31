import React, { useState, useEffect } from 'react';
import { Project } from '../types';
import { ProjectMockup } from './ProjectMockup';
import { ArrowLeft, ArrowUpRight, Monitor, Smartphone, X, Layers } from 'lucide-react';

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
  onStartProject: (initialService?: string) => void;
}

export const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({
  project,
  onClose,
  onStartProject
}) => {
  const [activeDeviceView, setActiveDeviceView] = useState<'desktop' | 'mobile'>('desktop');

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md flex justify-center p-2 sm:p-4 md:p-8 animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-[#11120D] border border-[#D8CFBC]/14 shadow-[0_30px_100px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col my-auto max-h-[94vh]">
        {/* Modal Top Bar */}
        <div className="sticky top-0 z-20 flex items-center justify-between px-4 sm:px-6 py-3.5 sm:py-4 bg-[#11120D]/95 backdrop-blur-md border-b border-[#D8CFBC]/14">
          <button
            onClick={onClose}
            className="group flex items-center gap-2 text-xs uppercase tracking-wider text-[#D8CFBC]/70 hover:text-[#FFFBF4] transition-colors cursor-pointer py-1"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1 text-[#FFFBF4] shrink-0" />
            <span className="hidden xs:inline">Return to portfolio</span>
            <span className="xs:hidden">Back</span>
          </button>

          {/* Metadata */}
          <div className="hidden sm:flex items-center gap-2.5 text-xs text-[#D8CFBC]/50">
            <span className="text-[#FFFBF4] font-semibold">[{project.number}]</span>
            <span aria-hidden="true" className="text-[#D8CFBC]/20">/</span>
            <span className="text-[#D8CFBC]/70 truncate max-w-[200px]">{project.category}</span>
            <span aria-hidden="true" className="text-[#D8CFBC]/20">/</span>
            <span className="text-[#D8CFBC]/60">Concept Demonstration</span>
          </div>

          <button
            onClick={onClose}
            aria-label="Close project modal"
            className="w-8 h-8 border border-[#D8CFBC]/20 flex items-center justify-center text-[#D8CFBC]/70 hover:text-[#FFFBF4] hover:border-[#D8CFBC]/50 transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-4 sm:p-6 md:p-10 space-y-8 sm:space-y-10">
          {/* Project Title & Tagline */}
            <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[#565449]/30 border border-[#D8CFBC]/14 text-xs uppercase tracking-[0.14em] text-[#D8CFBC]/70 font-medium">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4] shrink-0" />
              <span>Project Case Study · {project.year}</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-semibold text-[#FFFBF4] tracking-[-0.03em]">
              {project.title}
            </h2>
            <p className="text-base sm:text-xl text-[#FFFBF4] font-medium leading-relaxed">
              {project.oneLineResult}
            </p>
            <p className="text-sm sm:text-base text-[#D8CFBC]/70 max-w-3xl leading-relaxed">
              {project.tagline}
            </p>
          </div>

          {/* Interactive Mockup Presentation */}
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2.5 border-b border-[#D8CFBC]/14 pb-3">
              <span className="text-xs uppercase tracking-[0.14em] text-[#D8CFBC]/70 flex items-center gap-2 font-medium">
                <Layers className="w-3.5 h-3.5 text-[#FFFBF4] shrink-0" />
                Live Architecture Preview ({activeDeviceView === 'desktop' ? 'Desktop Screen' : 'Mobile Viewport'})
              </span>
              {/* Responsive Device View Toggle */}
              <div className="flex items-center border border-[#D8CFBC]/20 bg-[#161713]">
                <button
                  onClick={() => setActiveDeviceView('desktop')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors cursor-pointer ${
                    activeDeviceView === 'desktop'
                      ? 'bg-[#FFFBF4] text-[#11120D] font-semibold'
                      : 'text-[#D8CFBC]/70 hover:text-[#FFFBF4]'
                  }`}
                >
                  <Monitor className="w-3.5 h-3.5 shrink-0" />
                  <span>Desktop</span>
                </button>
                <button
                  onClick={() => setActiveDeviceView('mobile')}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-xs transition-colors border-l border-[#D8CFBC]/20 cursor-pointer ${
                    activeDeviceView === 'mobile'
                      ? 'bg-[#FFFBF4] text-[#11120D] font-semibold'
                      : 'text-[#D8CFBC]/70 hover:text-[#FFFBF4]'
                  }`}
                >
                  <Smartphone className="w-3.5 h-3.5 shrink-0" />
                  <span>Mobile</span>
                </button>
              </div>
            </div>

            <div className="border border-[#D8CFBC]/14 p-3 sm:p-5 bg-[#161713] overflow-x-hidden flex justify-center">
              <div className="w-full max-w-4xl">
                <ProjectMockup project={project} forcedDevice={activeDeviceView} />
              </div>
            </div>
          </div>

          {/* Analysis */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 pt-4 border-t border-[#D8CFBC]/14">
            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-[0.14em] text-[#FFFBF4] font-semibold">
                01 · The Concept & Goal
              </h3>
              <p className="text-sm text-[#D8CFBC]/70 leading-relaxed font-normal">
                {project.theIdea}
              </p>
            </div>

            <div className="space-y-2">
              <h3 className="text-xs uppercase tracking-[0.14em] text-[#FFFBF4] font-semibold">
                02 · Visual Direction
              </h3>
              <p className="text-sm text-[#D8CFBC]/70 leading-relaxed font-normal">
                {project.visualDirection}
              </p>
            </div>
          </div>

          {/* Key Features */}
          <div className="space-y-3 pt-4 border-t border-[#D8CFBC]/14">
            <h3 className="text-xs uppercase tracking-[0.14em] text-[#FFFBF4] font-semibold">
              03 · Deliverables & Capabilities
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {project.keyFeatures.map((feat, idx) => (
                <div key={idx} className="p-3.5 bg-[#565449]/30 border border-[#D8CFBC]/14 flex items-start gap-3">
                  <div className="w-4 h-4 border border-[#D8CFBC]/25 flex items-center justify-center shrink-0 mt-0.5 text-[#FFFBF4] text-xs">
                    ✓
                  </div>
                  <span className="text-xs sm:text-sm text-[#D8CFBC]/80 leading-snug">{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Responsive Experience */}
          <div className="space-y-3 pt-4 border-t border-[#D8CFBC]/14">
            <div className="text-xs uppercase tracking-[0.14em] text-[#FFFBF4] font-semibold">
              04 · Responsive Ergonomics
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="p-4 sm:p-5 bg-[#565449]/30 border border-[#D8CFBC]/14 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase text-[#FFFBF4] font-semibold">
                  <Monitor className="w-4 h-4 text-[#FFFBF4] shrink-0" />
                  <span>Desktop Architecture</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D8CFBC]/70 leading-relaxed font-normal">
                  {project.responsiveExperience.desktopNotes}
                </p>
              </div>

              <div className="p-4 sm:p-5 bg-[#565449]/30 border border-[#D8CFBC]/14 space-y-2">
                <div className="flex items-center gap-2 text-xs uppercase text-[#FFFBF4] font-semibold">
                  <Smartphone className="w-4 h-4 text-[#FFFBF4] shrink-0" />
                  <span>Mobile Ergonomics</span>
                </div>
                <p className="text-xs sm:text-sm text-[#D8CFBC]/70 leading-relaxed font-normal">
                  {project.responsiveExperience.mobileNotes}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Action Footer */}
          <div className="pt-6 border-t border-[#D8CFBC]/14 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="text-xs uppercase tracking-wider text-[#D8CFBC]/70 hover:text-[#FFFBF4] transition-colors cursor-pointer py-1"
            >
              ← Return to portfolio index
            </button>

            <button
              onClick={() => {
                onClose();
                onStartProject(`Custom concept inspired by ${project.title}`);
              }}
              className="w-full sm:w-auto px-7 py-3.5 bg-[#FFFBF4] hover:bg-[#D8CFBC] text-[#11120D] font-semibold text-xs tracking-tight transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer min-h-[44px]"
            >
              <span>Commission an experience like this</span>
              <ArrowUpRight className="w-4 h-4 text-[#11120D] shrink-0" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
