import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import { Project } from './types';
import { ScrollProgress } from './components/ScrollProgress';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EditorialStatement } from './components/EditorialStatement';
import { SelectedWork } from './components/SelectedWork';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { PricingSection } from './components/PricingSection';
import { WhyAuvyq } from './components/WhyAuvyq';
import { FAQSection } from './components/FAQSection';
import { AboutStudio } from './components/AboutStudio';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { ProjectEnquiryModal } from './components/ProjectEnquiryModal';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { AuvyqChatbot } from './components/AuvyqChatbot';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isEnquiryOpen, setIsEnquiryOpen] = useState(false);
  const [enquiryInitialService, setEnquiryInitialService] = useState<string | undefined>(undefined);
  const [enquiryInitialPackage, setEnquiryInitialPackage] = useState<string | undefined>(undefined);

  // Initialize Lenis 60fps smooth scroll (lerp: 0.08)
  useEffect(() => {
    // Respect prefers-reduced-motion or touch devices for 100% natural mobile swipe
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    if (prefersReducedMotion || isTouchDevice) return;

    const lenis = new Lenis({
      lerp: 0.08,
      wheelMultiplier: 1.0,
      syncTouch: false,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  // Dynamic self-referencing canonical & Open Graph URL synchronization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const currentUrl = window.location.origin + window.location.pathname;
      const canonicalLink = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
      if (canonicalLink) {
        canonicalLink.href = currentUrl;
      }
      const ogUrlMeta = document.querySelector<HTMLMetaElement>("meta[property='og:url']");
      if (ogUrlMeta) {
        ogUrlMeta.content = currentUrl;
      }
    }
  }, []);

  const handleOpenEnquiry = (serviceName?: string, packageName?: string) => {
    setEnquiryInitialService(serviceName);
    setEnquiryInitialPackage(packageName);
    setIsEnquiryOpen(true);
  };

  const handleCloseEnquiry = () => {
    setIsEnquiryOpen(false);
    setEnquiryInitialService(undefined);
    setEnquiryInitialPackage(undefined);
  };

  return (
    <div className="min-h-screen bg-[#11120D] text-[#FFFBF4] font-body selection:bg-[#FFFBF4] selection:text-[#11120D] relative">
      {/* 3% Subtle Film Grain Overlay */}
      <div className="film-grain" aria-hidden="true" />

      {/* Top Scroll Progress Indicator */}
      <ScrollProgress />

      {/* Sticky Navigation */}
      <Navbar onStartProject={() => handleOpenEnquiry()} />

      <main className="relative bg-[#11120D]">
        {/* 1. HERO (Dark: Smoky Black #11120D) */}
        <Hero onStartProject={() => handleOpenEnquiry()} />

        {/* Studio Manifesto / Editorial Statement (Dark: Smoky Black) */}
        <EditorialStatement />

        {/* 2. SELECTED WORK (Light: Bone #D8CFBC, 40px rounded top overlap) */}
        <SelectedWork onSelectProject={(project) => setSelectedProject(project)} />

        {/* 3. CORE SERVICES (Dark: Smoky Black #11120D, 40px rounded top overlap) */}
        <Services onStartProject={(svc) => handleOpenEnquiry(svc)} />

        {/* Workflow Process (Dark: Smoky Black) */}
        <Process />

        {/* 4. PRICING PACKAGES (Light: Bone #D8CFBC, 40px rounded top overlap) */}
        <PricingSection onSelectPackage={(pkg) => handleOpenEnquiry(undefined, pkg)} />

        {/* 5. WHY AUVYQ, FAQ & ABOUT (Dark: Smoky Black #11120D, 40px rounded top overlap) */}
        <div className="relative -mt-10 rounded-t-[40px] bg-[#11120D] z-35 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          <WhyAuvyq />
          <FAQSection />
          <AboutStudio />
        </div>

        {/* 6. DIRECT CONTACT / CTA (Light: Bone #D8CFBC, 40px rounded top overlap) */}
        <ContactSection onStartProject={() => handleOpenEnquiry()} />
      </main>

      {/* 7. FOOTER (Dark: Smoky Black #11120D, 40px rounded top overlap) */}
      <Footer onStartProject={() => handleOpenEnquiry()} />

      {/* Floating Direct Actions */}
      <FloatingWhatsApp />
      <AuvyqChatbot onOpenEnquiry={handleOpenEnquiry} />

      {/* Interactive Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartProject={(svc) => handleOpenEnquiry(svc)}
      />

      {/* Structured Project Enquiry Experience */}
      <ProjectEnquiryModal
        isOpen={isEnquiryOpen}
        onClose={handleCloseEnquiry}
        initialService={enquiryInitialService}
        initialPackage={enquiryInitialPackage}
      />
    </div>
  );
}
