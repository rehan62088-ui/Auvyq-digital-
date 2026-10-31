import React from 'react';
import { Project } from '../types';
import { 
  Calendar, 
  MapPin, 
  Clock, 
  Flame, 
  Activity, 
  Compass, 
  Sparkles, 
  CheckCircle2, 
  Star,
  Users,
  Share2,
  TrendingUp,
  MessageSquare,
  ShoppingBag,
  Shirt,
  Send,
  Eye
} from 'lucide-react';

interface ProjectMockupProps {
  project: Project;
  forcedDevice?: 'desktop' | 'mobile';
}

export const ProjectMockup: React.FC<ProjectMockupProps> = ({ project, forcedDevice }) => {
  // 1. WEBSITE DEVELOPMENT (Azure Haven & Modern Web Platforms)
  if (project.id === 'website-development' || project.id === 'azure-haven') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#0284c7] via-[#06b6d4] to-[#f97316] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(2,132,199,0.25)] select-none">
        <div className="absolute -top-1/4 -right-1/4 w-96 h-96 rounded-full bg-orange-400/30 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-1/4 -left-1/4 w-96 h-96 rounded-full bg-cyan-300/40 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/40 text-[11px] font-semibold tracking-wider text-white shadow-sm flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            <span>DIRECT BOOKING · ULUWATU RESORT</span>
          </div>
          <div className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/25 backdrop-blur-md border border-white/40 text-[10px] text-white font-medium">
            <Sparkles className="w-3 h-3 text-amber-200" />
            <span>Sunset Villa Guaranteed</span>
          </div>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#0c121e] p-1.5 sm:p-2 border border-white/40 shadow-[0_25px_60px_rgba(0,0,0,0.45)] backdrop-blur-xl">
            <div className="flex items-center justify-between px-2.5 py-1 bg-white/10 rounded-t-[8px] border-b border-white/15 text-[9px] text-white/80">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-400/80" />
                <span className="w-2 h-2 rounded-full bg-amber-400/80" />
                <span className="w-2 h-2 rounded-full bg-emerald-400/80" />
              </div>
              <span className="font-mono text-[9px] text-white/90 truncate max-w-[190px]">
                azurehaven-resort.com/villas
              </span>
              <span className="text-[8px] bg-white/20 px-1.5 py-0.5 rounded text-white font-medium">
                Direct Best Rate
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${project.heroImage})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-sky-900/30" />

              <div className="absolute top-3 left-3 sm:top-5 sm:left-5 max-w-[240px] sm:max-w-[280px] p-3 sm:p-4 rounded-xl bg-white/20 backdrop-blur-xl border border-white/50 text-white shadow-2xl">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-wider text-white/90 font-medium mb-1">
                  <span>Cliffside Horizon Villa</span>
                  <span className="text-amber-300 font-bold">5.0 ★</span>
                </div>
                <h4 className="text-sm sm:text-base font-bold font-display leading-tight text-white drop-shadow">
                  Ocean Panoramic Infinity Pool
                </h4>
                <p className="text-[10px] text-white/90 line-clamp-1 mt-0.5">
                  Private travertine deck with butler & sunset lounge
                </p>

                <div className="mt-2.5 p-2 rounded-lg bg-black/40 backdrop-blur-md border border-white/30 flex items-center justify-between text-[9px]">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-amber-300" />
                    <div>
                      <span className="text-white/60 block text-[7px] uppercase">Dates</span>
                      <span className="font-semibold text-white">24 - 29 Oct</span>
                    </div>
                  </div>
                  <div className="px-2.5 py-1 rounded bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 font-bold shadow-[0_0_15px_rgba(251,191,36,0.7)] text-[9px]">
                    ₹18,500 / night
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 px-3 py-1.5 rounded-full bg-white/25 backdrop-blur-md border border-white/50 text-white text-[10px] font-semibold shadow-lg hidden sm:flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                <span>Zero OTA Commissions</span>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-gradient-to-b from-[#2a303c] to-[#12161f] rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-white/30 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-black p-1.5 border-2 border-white/60 shadow-2xl overflow-hidden backdrop-blur-md">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1 z-30" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-cover bg-center" style={{ backgroundImage: `url(${project.phoneImage || project.heroImage})` }}>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-2.5 left-2 right-2 p-2 rounded-lg bg-white/25 backdrop-blur-md border border-white/40 text-white text-[8px] space-y-1">
                <span className="font-bold text-[9px] block">Reserve 1-Tap</span>
                <span className="text-white/80 block leading-tight">Instant WhatsApp concierge confirmation</span>
                <div className="w-full py-1 bg-amber-400 text-stone-950 font-bold rounded text-center text-[8px]">
                  Confirm Booking
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 2. SOCIAL MEDIA MANAGEMENT (Kroma Growth & Content Engine)
  if (project.id === 'social-media-management') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1e1b4b] via-[#6366f1] to-[#ec4899] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(99,102,241,0.25)] select-none">
        <div className="absolute top-2 left-6 w-80 h-80 rounded-full bg-pink-400/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-2 right-6 w-80 h-80 rounded-full bg-indigo-500/30 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-pink-400 text-[11px] font-semibold tracking-wider text-pink-200 shadow-lg flex items-center gap-2">
            <Share2 className="w-3.5 h-3.5 text-pink-400" />
            <span>KROMA SOCIAL · ORGANIC VIRALITY</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-indigo-950 border border-pink-300 shadow-sm">
            3.4x Reach Lift
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#0f0c29] p-1.5 sm:p-2 border border-pink-400/40 shadow-[0_25px_60px_rgba(15,12,41,0.5)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-[#1a1442] rounded-t-[8px] border-b border-indigo-900 text-[9px] text-pink-200">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-pink-400" />
                <span className="w-2 h-2 rounded-full bg-indigo-400" />
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <span className="font-mono text-[9px] text-indigo-100 truncate max-w-[190px]">
                kroma-social.io · content-calendar
              </span>
              <span className="text-[8px] bg-pink-600 text-white px-1.5 py-0.5 rounded font-bold">
                Auto-Scheduled
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-slate-950 p-3 sm:p-5 flex flex-col justify-between text-white">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-indigo-950/30" />

              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-pink-500/20 border border-pink-400/40 text-[9px] text-pink-300 font-semibold">
                  <span>30-DAY EDITORIAL CONTENT MATRIX</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                  Aesthetic Reels & High-Engagement Copy
                </h4>
                <p className="text-[10px] sm:text-xs text-indigo-200 max-w-[280px] line-clamp-2">
                  Complete social growth system: carousel design, viral hooks, hashtag engines, and audience conversion.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px]">
                <div className="p-2 rounded bg-indigo-950/90 border border-pink-400/30 text-center">
                  <span className="text-[7px] text-pink-300 block uppercase">Weekly Posts</span>
                  <span className="font-bold text-white">7 Scheduled</span>
                </div>
                <div className="p-2 rounded bg-indigo-950/90 border border-pink-400/30 text-center">
                  <span className="text-[7px] text-pink-300 block uppercase">Reels Reach</span>
                  <span className="font-bold text-white">48.2k Views</span>
                </div>
                <div className="p-2 rounded bg-gradient-to-r from-pink-500 to-indigo-600 text-white font-bold flex items-center justify-center cursor-pointer shadow-md">
                  View Queue →
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-indigo-950 rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-pink-400/40 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-slate-950 p-1.5 border-2 border-pink-400 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-slate-900 p-2.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[8px] text-pink-400 font-bold uppercase tracking-widest block">INSTAGRAM GRID</span>
                <span className="text-[10px] font-bold text-white block leading-tight">Visual Harmonizer</span>
              </div>
              <div className="p-2 rounded bg-indigo-950/80 border border-pink-400/30 text-[8px] space-y-1">
                <div className="flex justify-between text-indigo-200">
                  <span>ENGAGEMENT</span>
                  <span className="text-pink-300 font-bold">8.4% LIFT</span>
                </div>
                <div className="w-full py-1 bg-gradient-to-r from-pink-500 to-indigo-500 text-white font-bold text-center rounded text-[8px]">
                  Publish Now
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 3. GRAPHIC DESIGN & BRANDING (Aura Athletics Brand System)
  if (project.id === 'graphic-design-branding' || project.id === 'aura-fitness') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#ecfccb] to-[#a3e635] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(132,204,22,0.25)] select-none">
        <div className="absolute top-2 left-4 w-72 h-72 rounded-full bg-lime-300/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-2 right-4 w-80 h-80 rounded-full bg-emerald-400/30 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-black/85 backdrop-blur-md border border-lime-400 text-[11px] font-bold tracking-widest text-[#a3e635] shadow-lg flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-ping" />
            <span>AURA ATHLETICS · BRAND BOOK</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/80 backdrop-blur-md text-[10px] font-bold text-stone-900 border border-lime-400/40">
            VECTOR IDENTITY SUITE
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#0f172a] p-1.5 sm:p-2 border-2 border-lime-400/60 shadow-[0_25px_60px_rgba(15,23,42,0.5)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-stone-900 rounded-t-[8px] border-b border-lime-500/20 text-[9px] text-lime-400">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-lime-400" />
                <span className="w-2 h-2 rounded-full bg-stone-700" />
                <span className="w-2 h-2 rounded-full bg-stone-700" />
              </div>
              <span className="font-mono text-[9px] text-lime-300 font-semibold truncate max-w-[190px]">
                aura-brand.guide · vector-rules
              </span>
              <span className="text-[8px] bg-lime-400 text-stone-950 px-1.5 py-0.5 rounded font-black">
                HIGH CONTRAST
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-stone-950 p-3 sm:p-5 flex flex-col justify-between text-white border-t border-lime-400/30">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center grayscale mix-blend-screen"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-stone-950 via-stone-950/70 to-transparent" />

              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-1.5 text-[9px] font-black uppercase tracking-[0.2em] text-lime-400">
                  <Activity className="w-3 h-3 text-lime-400 animate-pulse" />
                  <span>TYPOGRAPHY & VECTOR HIERARCHY</span>
                </div>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-display font-black tracking-tight leading-none text-white uppercase">
                  ARCHITECTURAL <span className="text-lime-400 underline decoration-lime-400 decoration-2">CLARITY</span>
                </h4>
                <p className="text-[10px] sm:text-xs text-stone-300 max-w-[260px] line-clamp-2">
                  Complete brand guidelines: logo marks, printed menus, stationery, and tactile pitch decks.
                </p>
              </div>

              <div className="relative z-10 flex items-center gap-3 pt-2">
                <div className="relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0">
                  <svg className="w-full h-full -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-stone-800"
                      strokeWidth="3.5"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                    <path
                      className="text-lime-400 animate-pulse"
                      strokeDasharray="94, 100"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      stroke="currentColor"
                      fill="none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                    />
                  </svg>
                  <span className="absolute text-[10px] font-black text-lime-300">94%</span>
                </div>

                <div className="space-y-0.5 text-[9px]">
                  <span className="font-bold text-white block">VECTOR ASSETS TRANSFERRED</span>
                  <span className="text-lime-400 block font-mono">SVG · PDF · PNG MASTER</span>
                  <div className="flex gap-1 pt-0.5">
                    <span className="px-1.5 py-0.5 rounded bg-lime-400 text-black text-[8px] font-black">100% OWNERSHIP</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-stone-900 rounded-b-[10px] shadow-md mx-6 flex justify-center border-t border-lime-400/30">
            <div className="w-16 h-1 bg-lime-400/60 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-stone-950 p-1.5 border-2 border-lime-400 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-stone-900 p-2.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[8px] text-lime-400 font-black uppercase tracking-widest block">BRAND SYSTEM</span>
                <span className="text-[11px] font-black text-white block leading-tight">Typography Matrix</span>
              </div>
              <div className="p-2 rounded bg-black border border-lime-400/40 text-[8px] space-y-1">
                <div className="flex justify-between text-stone-300">
                  <span>COLOR CODE</span>
                  <span className="text-lime-300 font-bold">#A3E635</span>
                </div>
                <div className="w-full py-1 bg-lime-400 text-black font-black text-center rounded text-[8px]">
                  View Brand Book
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 4. VIDEO EDITING & CONTENT CREATION (Ember & Oak Cinematic Reel Lab)
  if (project.id === 'video-editing-creation' || project.id === 'ember-oak') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#fffdfa] via-[#fed7aa] to-[#ea580c] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(234,88,12,0.22)] select-none">
        <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-orange-400/35 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-amber-200/50 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-stone-900/90 backdrop-blur-md border border-orange-400/50 text-[11px] font-medium tracking-widest text-[#fed7aa] shadow-lg flex items-center gap-2">
            <Flame className="w-3.5 h-3.5 text-orange-400" />
            <span>CINEMATIC REEL LAB · MOTION CUTS</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-serif-italic italic text-stone-900 border border-orange-200 shadow-sm">
            92% Watch Retention
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#1c140e] p-1.5 sm:p-2 border border-orange-400/30 shadow-[0_25px_60px_rgba(67,20,7,0.4)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-[#2b1f17] rounded-t-[8px] border-b border-orange-950 text-[9px] text-amber-200">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500" />
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-stone-700" />
              </div>
              <span className="font-mono text-[9px] text-[#fefae0] font-normal truncate max-w-[190px]">
                cinematic-reels.pro · timeline-cut
              </span>
              <span className="text-[8px] bg-orange-600 text-white px-1.5 py-0.5 rounded font-medium">
                Color Graded
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-stone-950">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-black/20" />

              <div className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 right-3 sm:right-auto sm:max-w-[320px] p-3 sm:p-4 rounded-xl bg-stone-900/85 backdrop-blur-md border border-orange-400/30 text-white shadow-2xl">
                <div className="flex items-center justify-between text-[8px] tracking-[0.18em] uppercase text-orange-300 font-semibold mb-1">
                  <span>VERTICAL 4K REEL PRODUCTION</span>
                  <span>60 FPS MASTER</span>
                </div>
                <h4 className="text-base sm:text-lg font-serif-italic italic text-[#FFFBF4] leading-tight">
                  Kinetic Titles & Dynamic Sound Design
                </h4>
                <p className="text-[10px] text-stone-300 line-clamp-1 mt-0.5">
                  Synchronized sound effects, motion tracking, and photo-to-video animations
                </p>
                <div className="mt-2.5 flex items-center justify-between border-t border-orange-400/20 pt-2 text-[9px]">
                  <span className="text-stone-300">Format: 9:16 Shorts/Reels</span>
                  <span className="font-bold text-orange-300 font-display">Viral Retention</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-stone-900 rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-orange-400/40 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-stone-950 p-1.5 border-2 border-orange-300 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-stone-900">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.phoneImage || project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/50 to-transparent" />
              <div className="absolute bottom-2.5 left-2 right-2 p-2 rounded bg-stone-900/90 border border-orange-400/40 text-white text-[8px] space-y-1">
                <span className="font-serif-italic italic text-[10px] text-amber-200 block">Short-Form Master</span>
                <span className="text-stone-300 block text-[7px]">Exported for IG & YouTube</span>
                <div className="w-full py-1 bg-orange-600 text-white font-bold rounded text-center text-[8px]">
                  Play Reel
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 5. DIGITAL ADVERTISING (Vortex Paid Media & Funnels)
  if (project.id === 'digital-advertising') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#030712] via-[#1e3a8a] to-[#0284c7] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(2,132,199,0.25)] select-none">
        <div className="absolute top-2 left-6 w-80 h-80 rounded-full bg-blue-400/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-2 right-6 w-80 h-80 rounded-full bg-cyan-400/30 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-sky-400 text-[11px] font-semibold tracking-wider text-sky-200 shadow-lg flex items-center gap-2">
            <TrendingUp className="w-3.5 h-3.5 text-sky-400" />
            <span>VORTEX ADS · META & GOOGLE FUNNEL</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-slate-900 border border-sky-300 shadow-sm">
            4.2x ROAS
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#0b132b] p-1.5 sm:p-2 border border-sky-400/40 shadow-[0_25px_60px_rgba(11,19,43,0.5)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-[#1c2541] rounded-t-[8px] border-b border-sky-900 text-[9px] text-sky-200">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-sky-400" />
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
                <span className="w-2 h-2 rounded-full bg-stone-600" />
              </div>
              <span className="font-mono text-[9px] text-sky-100 truncate max-w-[190px]">
                vortex-ads.analytics · roas-dashboard
              </span>
              <span className="text-[8px] bg-sky-500 text-stone-950 px-1.5 py-0.5 rounded font-bold">
                Pixel Synced
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-slate-950 p-3 sm:p-5 flex flex-col justify-between text-white">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-blue-950/30" />

              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-sky-500/20 border border-sky-400/40 text-[9px] text-sky-300 font-semibold">
                  <span>SERVER-SIDE CONVERSION API ACTIVE</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                  High-Converting Paid Lead Acquisition
                </h4>
                <p className="text-[10px] sm:text-xs text-sky-100/80 max-w-[280px] line-clamp-2">
                  Targeted ad creative direction, custom audience cohorts, and transparent weekly cost-per-lead optimization.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px]">
                <div className="p-2 rounded bg-blue-950/90 border border-sky-400/30 text-center">
                  <span className="text-[7px] text-sky-300 block uppercase">ROAS</span>
                  <span className="font-bold text-white">4.2x Verified</span>
                </div>
                <div className="p-2 rounded bg-blue-950/90 border border-sky-400/30 text-center">
                  <span className="text-[7px] text-sky-300 block uppercase">Cost/Lead</span>
                  <span className="font-bold text-white">-38% Lower</span>
                </div>
                <div className="p-2 rounded bg-sky-500 text-stone-950 font-bold flex items-center justify-center cursor-pointer shadow-md">
                  View Metrics →
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-blue-950 rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-sky-400/40 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-slate-950 p-1.5 border-2 border-sky-400 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-slate-900 p-2.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[8px] text-sky-400 font-bold uppercase tracking-widest block">CAMPAIGN SNAPSHOT</span>
                <span className="text-[10px] font-bold text-white block leading-tight">Meta Lead Funnel</span>
              </div>
              <div className="p-2 rounded bg-blue-950/80 border border-sky-400/30 text-[8px] space-y-1">
                <div className="flex justify-between text-sky-200">
                  <span>CONVERSIONS</span>
                  <span className="text-sky-300 font-bold">142 LEADS</span>
                </div>
                <div className="w-full py-1 bg-sky-400 text-stone-950 font-bold text-center rounded text-[8px]">
                  Inspect Ads
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 6. WHATSAPP BUSINESS SOLUTIONS (DirectDesk WhatsApp Catalog & CRM)
  if (project.id === 'whatsapp-business-solutions') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#064e3b] via-[#059669] to-[#10b981] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.25)] select-none">
        <div className="absolute top-2 left-6 w-80 h-80 rounded-full bg-emerald-400/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-2 right-6 w-80 h-80 rounded-full bg-teal-300/30 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-emerald-400 text-[11px] font-semibold tracking-wider text-emerald-200 shadow-lg flex items-center gap-2">
            <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
            <span>DIRECTDESK · VERIFIED WHATSAPP</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-emerald-950 border border-emerald-300 shadow-sm">
            98% Open Rate
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#022c22] p-1.5 sm:p-2 border border-emerald-400/40 shadow-[0_25px_60px_rgba(2,44,34,0.5)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-[#064e3b] rounded-t-[8px] border-b border-emerald-900 text-[9px] text-emerald-200">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="w-2 h-2 rounded-full bg-teal-400" />
                <span className="w-2 h-2 rounded-full bg-stone-600" />
              </div>
              <span className="font-mono text-[9px] text-emerald-100 truncate max-w-[190px]">
                directdesk.wa · interactive-catalog
              </span>
              <span className="text-[8px] bg-emerald-500 text-stone-950 px-1.5 py-0.5 rounded font-bold">
                24/7 Bot Active
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-slate-950 p-3 sm:p-5 flex flex-col justify-between text-white">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-emerald-950/30" />

              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/20 border border-emerald-400/40 text-[9px] text-emerald-300 font-semibold">
                  <span>AUTOMATED ROUND-THE-CLOCK SALES COUNTER</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                  Instant WhatsApp Product Catalog & Checkout
                </h4>
                <p className="text-[10px] sm:text-xs text-emerald-100/80 max-w-[280px] line-clamp-2">
                  Verified business profile, dynamic items menu, quick replies, and automated lead routing right to your team.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px]">
                <div className="p-2 rounded bg-emerald-950/90 border border-emerald-400/30 text-center">
                  <span className="text-[7px] text-emerald-300 block uppercase">Reply Time</span>
                  <span className="font-bold text-white">&lt; 5 Seconds</span>
                </div>
                <div className="p-2 rounded bg-emerald-950/90 border border-emerald-400/30 text-center">
                  <span className="text-[7px] text-emerald-300 block uppercase">Catalog</span>
                  <span className="font-bold text-white">1-Tap View</span>
                </div>
                <div className="p-2 rounded bg-emerald-400 text-stone-950 font-bold flex items-center justify-center cursor-pointer shadow-md">
                  Test Flow →
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-emerald-950 rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-emerald-400/40 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-slate-950 p-1.5 border-2 border-emerald-400 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-slate-900 p-2.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-widest block">WHATSAPP CHAT</span>
                <span className="text-[10px] font-bold text-white block leading-tight">Instant Assistant</span>
              </div>
              <div className="p-2 rounded bg-emerald-950/80 border border-emerald-400/30 text-[8px] space-y-1">
                <div className="flex justify-between text-emerald-200">
                  <span>ORDER STATUS</span>
                  <span className="text-emerald-300 font-bold">CONFIRMED</span>
                </div>
                <div className="w-full py-1 bg-emerald-400 text-stone-950 font-bold text-center rounded text-[8px]">
                  Send Message
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 7. LOCAL BUSINESS DIGITAL SETUP (LocalRank Maps & Google Dominance)
  if (project.id === 'local-business-setup' || project.id === 'horizon-estates') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#94a3b8] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(2,132,199,0.20)] select-none">
        <div className="absolute top-2 right-6 w-80 h-80 rounded-full bg-sky-200/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-2 left-6 w-80 h-80 rounded-full bg-slate-300/50 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-sky-300 text-[11px] font-semibold tracking-wider text-white shadow-lg flex items-center gap-2">
            <Compass className="w-3.5 h-3.5 text-sky-400" />
            <span>LOCALRANK · GOOGLE MAPS DOMINANCE</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-slate-800 border border-slate-300 shadow-sm">
            #1 Map Pack Rank
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#0f172a] p-1.5 sm:p-2 border border-slate-300 shadow-[0_25px_60px_rgba(15,23,42,0.45)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-slate-900 rounded-t-[8px] border-b border-slate-800 text-[9px] text-slate-300">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-slate-400" />
                <span className="w-2 h-2 rounded-full bg-slate-600" />
                <span className="w-2 h-2 rounded-full bg-slate-600" />
              </div>
              <span className="font-mono text-[9px] text-slate-200 truncate max-w-[190px]">
                localrank.maps · google-business-audit
              </span>
              <span className="text-[8px] bg-sky-600 text-white px-1.5 py-0.5 rounded font-medium">
                100% Verified
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-slate-900">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/30 to-black/20" />

              <div className="absolute top-3 left-3 sm:top-4 sm:left-4 max-w-[220px] sm:max-w-[260px] p-3 sm:p-3.5 rounded-xl bg-white/85 backdrop-blur-md border border-white/60 text-slate-900 shadow-2xl">
                <div className="flex items-center justify-between text-[8px] font-bold text-sky-700 uppercase tracking-wider mb-1">
                  <span>MAP VISIBILITY</span>
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    Top 3 Guaranteed
                  </span>
                </div>
                <h4 className="text-sm sm:text-base font-bold font-display leading-tight text-slate-950">
                  Google Business Profile Optimization
                </h4>
                <div className="grid grid-cols-2 gap-1.5 mt-2 text-[9px] text-slate-700">
                  <div className="bg-slate-100 p-1.5 rounded">
                    <span className="text-slate-400 block text-[7px] uppercase">5-Star Reviews</span>
                    <span className="font-bold">+180% Lift</span>
                  </div>
                  <div className="bg-slate-100 p-1.5 rounded">
                    <span className="text-slate-400 block text-[7px] uppercase">Direct Calls</span>
                    <span className="font-bold">+65% Monthly</span>
                  </div>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 p-2 sm:p-2.5 rounded-xl bg-slate-900/90 backdrop-blur-md border border-sky-400/40 text-white text-[9px] flex items-center gap-2 shadow-xl">
                <div className="w-5 h-5 rounded-full bg-sky-500/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-3.5 h-3.5 text-sky-400 animate-bounce" />
                </div>
                <div>
                  <span className="font-bold block text-white">NFC Tap Card Enabled</span>
                  <span className="text-slate-400 text-[8px]">Tap-to-Review in 3s</span>
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-slate-800 rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-slate-400/50 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-slate-950 p-1.5 border-2 border-slate-300 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-slate-900">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.phoneImage || project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              <div className="absolute bottom-2.5 left-2 right-2 p-2 rounded bg-slate-900/90 border border-slate-700 text-white text-[8px] space-y-1">
                <span className="font-bold text-sky-300 block">NFC Review Card Demo</span>
                <span className="text-slate-300 block text-[7px]">Instant Google Rating</span>
                <div className="w-full py-1 bg-sky-500 text-white font-bold rounded text-center text-[8px]">
                  Leave Review
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 8. E-COMMERCE & STORE ARCHITECTURE (Velour Atelier Luxury Storefront)
  if (project.id === 'ecommerce-architecture' || project.id === 'velour-atelier') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#fff1f2] via-[#fbcfe8] to-[#f43f5e] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(244,63,94,0.22)] select-none">
        <div className="absolute top-2 left-6 w-80 h-80 rounded-full bg-rose-400/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-2 right-6 w-80 h-80 rounded-full bg-pink-300/40 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-stone-950/90 backdrop-blur-md border border-rose-300 text-[11px] font-semibold tracking-wider text-rose-200 shadow-lg flex items-center gap-2">
            <ShoppingBag className="w-3.5 h-3.5 text-rose-300" />
            <span>VELOUR ATELIER · 1-TAP COMMERCE</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-rose-950 border border-rose-200 shadow-sm">
            +54% Conversion
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#181114] p-1.5 sm:p-2 border border-rose-300/40 shadow-[0_25px_60px_rgba(0,0,0,0.45)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-[#281c22] rounded-t-[8px] border-b border-rose-950 text-[9px] text-rose-200">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-rose-400" />
                <span className="w-2 h-2 rounded-full bg-pink-400" />
                <span className="w-2 h-2 rounded-full bg-stone-600" />
              </div>
              <span className="font-mono text-[9px] text-rose-100 truncate max-w-[190px]">
                velour-atelier.com · autumn-capsule
              </span>
              <span className="text-[8px] bg-rose-600 text-white px-1.5 py-0.5 rounded font-bold">
                1-Tap UPI Ready
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-stone-950 p-3 sm:p-5 flex flex-col justify-between text-white">
              <div 
                className="absolute inset-0 opacity-45 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/60 to-rose-950/30" />

              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-rose-500/20 border border-rose-400/40 text-[9px] text-rose-300 font-semibold">
                  <span>SUB-SECOND CHECKOUT SPEED</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                  Architectural Silk & Cashmere Capsule
                </h4>
                <p className="text-[10px] sm:text-xs text-rose-100/90 max-w-[280px] line-clamp-2">
                  Fluid multi-variant swatch selector, automated WhatsApp dispatch alerts, and instant multi-currency checkout.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[9px]">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded bg-rose-950 border border-rose-400/40 flex items-center justify-center font-bold text-rose-200">
                    ₹8.4k
                  </div>
                  <div>
                    <span className="font-bold text-white block">Silk Trench Coat</span>
                    <span className="text-rose-300 block text-[8px]">In Stock · Dispatch in 24h</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded bg-rose-600 text-white font-bold text-[9px] shadow-lg cursor-pointer">
                  Instant Buy
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-stone-900 rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-rose-400/40 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-stone-950 p-1.5 border-2 border-rose-300 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-stone-900">
              <div 
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.phoneImage || project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/40 to-transparent" />
              <div className="absolute bottom-2.5 left-2 right-2 p-2 rounded bg-stone-950/90 border border-rose-400/40 text-white text-[8px] space-y-1">
                <span className="font-bold text-rose-300 block">1-Tap Fast Checkout</span>
                <span className="text-stone-300 block text-[7px]">Free Worldwide Express Shipping</span>
                <div className="w-full py-1 bg-rose-600 text-white font-bold text-center rounded text-[8px]">
                  Pay with UPI
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 9. CUSTOM MERCHANDISE DESIGN (Apex Apparel & Streetwear Vectors)
  if (project.id === 'custom-merchandise-design') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1c1917] via-[#78350f] to-[#fbbf24] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(251,191,36,0.22)] select-none">
        <div className="absolute top-2 left-6 w-80 h-80 rounded-full bg-amber-400/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-2 right-6 w-80 h-80 rounded-full bg-yellow-500/30 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-amber-400 text-[11px] font-semibold tracking-wider text-amber-200 shadow-lg flex items-center gap-2">
            <Shirt className="w-3.5 h-3.5 text-amber-300" />
            <span>APEX MERCH · STREETWEAR VECTORS</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-stone-900 border border-amber-300 shadow-sm">
            100% Vector Print
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#1c1917] p-1.5 sm:p-2 border border-amber-400/40 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-[#292524] rounded-t-[8px] border-b border-amber-950 text-[9px] text-amber-200">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="w-2 h-2 rounded-full bg-yellow-400" />
                <span className="w-2 h-2 rounded-full bg-stone-600" />
              </div>
              <span className="font-mono text-[9px] text-amber-100 truncate max-w-[190px]">
                apex-apparel.studio · color-separation
              </span>
              <span className="text-[8px] bg-amber-400 text-stone-950 px-1.5 py-0.5 rounded font-bold">
                DTF & Screen Ready
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-stone-950 p-3 sm:p-5 flex flex-col justify-between text-white">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-amber-950/30" />

              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-[9px] text-amber-300 font-semibold">
                  <span>BESPOKE APPAREL GRAPHICS & HOODIES</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                  Premium Streetwear Vector Separations
                </h4>
                <p className="text-[10px] sm:text-xs text-stone-300 max-w-[280px] line-clamp-2">
                  Complete print files for screen printing, direct-to-film, fabric GSM curation, and 3D mockups.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px]">
                <div className="p-2 rounded bg-stone-900/90 border border-amber-400/30 text-center">
                  <span className="text-[7px] text-amber-300 block uppercase">Fabric</span>
                  <span className="font-bold text-white">280 GSM Cotton</span>
                </div>
                <div className="p-2 rounded bg-stone-900/90 border border-amber-400/30 text-center">
                  <span className="text-[7px] text-amber-300 block uppercase">Separations</span>
                  <span className="font-bold text-white">4 Pantone Layers</span>
                </div>
                <div className="p-2 rounded bg-amber-400 text-stone-950 font-bold flex items-center justify-center cursor-pointer shadow-md">
                  View Vectors →
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-stone-900 rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-amber-400/40 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-stone-950 p-1.5 border-2 border-amber-400 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-stone-900 p-2.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[8px] text-amber-400 font-bold uppercase tracking-widest block">LOOKBOOK PREVIEW</span>
                <span className="text-[10px] font-bold text-white block leading-tight">Batch Sizing</span>
              </div>
              <div className="p-2 rounded bg-black/80 border border-amber-400/30 text-[8px] space-y-1">
                <div className="flex justify-between text-stone-300">
                  <span>PRINT METHOD</span>
                  <span className="text-amber-300 font-bold">PUFF INK 3D</span>
                </div>
                <div className="w-full py-1 bg-amber-400 text-stone-950 font-bold text-center rounded text-[8px]">
                  Order Batch
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 10. SIGNBOARD & 3D ARCHITECTURAL DESIGN (Monolith 3D Acrylic & LED Signboards)
  if (project.id === 'signboard-3d-architectural' || project.id === 'monolith-signage') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#1c1917] via-[#b45309] to-[#f59e0b] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(245,158,11,0.22)] select-none">
        <div className="absolute top-2 left-6 w-80 h-80 rounded-full bg-amber-400/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-2 right-6 w-80 h-80 rounded-full bg-orange-500/30 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-black/90 backdrop-blur-md border border-amber-400 text-[11px] font-semibold tracking-wider text-amber-300 shadow-lg flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-300" />
            <span>MONOLITH LABS · 3D ARCHITECTURAL</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-stone-900 border border-amber-300 shadow-sm">
            100% CAD Precision
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#1c1917] p-1.5 sm:p-2 border border-amber-400/40 shadow-[0_25px_60px_rgba(0,0,0,0.5)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-[#292524] rounded-t-[8px] border-b border-amber-950 text-[9px] text-amber-200">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-amber-500" />
                <span className="w-2 h-2 rounded-full bg-stone-600" />
                <span className="w-2 h-2 rounded-full bg-stone-600" />
              </div>
              <span className="font-mono text-[9px] text-amber-200 truncate max-w-[190px]">
                monolithlabs.studio · 3d-signage-cad
              </span>
              <span className="text-[8px] bg-amber-400 text-stone-950 px-1.5 py-0.5 rounded font-bold">
                LED Halo Blueprint
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-stone-950 p-3 sm:p-5 flex flex-col justify-between text-white">
              <div 
                className="absolute inset-0 opacity-40 bg-cover bg-center"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/70 to-amber-950/30" />

              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-amber-500/20 border border-amber-400/40 text-[9px] text-amber-300 font-semibold">
                  <span>DAY / NIGHT ARCHITECTURAL SIMULATION</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                  Backlit 3D Acrylic & Brushed Brass
                </h4>
                <p className="text-[10px] sm:text-xs text-stone-300 max-w-[280px] line-clamp-2">
                  Precision laser-cut channel letter blueprints with LED lumen calculations and vector merchandise separations.
                </p>
              </div>

              <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px]">
                <div className="p-2 rounded bg-stone-900/90 border border-amber-400/30 text-center">
                  <span className="text-[7px] text-amber-300 block uppercase">Material</span>
                  <span className="font-bold text-white">Brushed Brass</span>
                </div>
                <div className="p-2 rounded bg-stone-900/90 border border-amber-400/30 text-center">
                  <span className="text-[7px] text-amber-300 block uppercase">Lighting</span>
                  <span className="font-bold text-white">3000K Halo LED</span>
                </div>
                <div className="p-2 rounded bg-gradient-to-r from-amber-400 to-orange-500 text-stone-950 font-bold flex items-center justify-center cursor-pointer shadow-md">
                  View Blueprint →
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-stone-900 rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-amber-400/40 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-stone-950 p-1.5 border-2 border-amber-400 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-stone-900 p-2.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[8px] text-amber-400 font-bold uppercase tracking-widest block">FABRICATOR SPEC</span>
                <span className="text-[10px] font-bold text-white block leading-tight">Laser Vector 1:1</span>
              </div>
              <div className="p-2 rounded bg-black/80 border border-amber-400/30 text-[8px] space-y-1">
                <div className="flex justify-between text-stone-300">
                  <span>SCALE</span>
                  <span className="text-amber-300 font-bold">ACCURATE</span>
                </div>
                <div className="w-full py-1 bg-amber-400 text-stone-950 font-bold text-center rounded text-[8px]">
                  Send to WhatsApp
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 11. AI & BUSINESS AUTOMATION (Synthetix 24/7 AI Lead & CRM Engine)
  if (project.id === 'ai-business-automation' || project.id === 'nexa-academy') {
    return (
      <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#faf5ff] via-[#e0e7ff] to-[#fbcfe8] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(139,92,246,0.22)] select-none">
        <div className="absolute top-2 left-6 w-80 h-80 rounded-full bg-violet-400/40 blur-3xl pointer-events-none" />
        <div className="absolute bottom-2 right-6 w-80 h-80 rounded-full bg-cyan-300/40 blur-3xl pointer-events-none" />

        <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
          <div className="px-3.5 py-1.5 rounded-full bg-slate-900/90 backdrop-blur-md border border-violet-400/50 text-[11px] font-semibold tracking-wider text-violet-200 shadow-lg flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-cyan-300" />
            <span>SYNTHETIX AI · 24/7 LEAD ENGINE</span>
          </div>
          <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-violet-900 border border-violet-200 shadow-sm">
            Sub-Second Response
          </span>
        </div>

        <div className={`relative transition-all duration-700 ease-out z-10 ${
          forcedDevice === 'mobile' 
            ? 'hidden' 
            : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
        }`}>
          <div className="rounded-t-[14px] bg-[#1e1b4b] p-1.5 sm:p-2 border border-violet-400/40 shadow-[0_25px_60px_rgba(79,70,229,0.35)]">
            <div className="flex items-center justify-between px-2.5 py-1 bg-[#312e81] rounded-t-[8px] border-b border-indigo-950 text-[9px] text-violet-200">
              <div className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-pink-400" />
                <span className="w-2 h-2 rounded-full bg-violet-400" />
                <span className="w-2 h-2 rounded-full bg-cyan-400" />
              </div>
              <span className="font-mono text-[9px] text-indigo-100 truncate max-w-[190px]">
                synthetix-ai.crm · lead-webhook-pipeline
              </span>
              <span className="text-[8px] bg-gradient-to-r from-violet-600 to-pink-500 text-white px-1.5 py-0.5 rounded font-bold">
                Google Sheets Live
              </span>
            </div>

            <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-slate-950 p-3 sm:p-5 flex flex-col justify-between text-white">
              <div 
                className="absolute inset-0 opacity-45 bg-cover bg-center mix-blend-screen"
                style={{ backgroundImage: `url(${project.heroImage})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-indigo-950/40" />

              <div className="relative z-10 space-y-1">
                <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-violet-500/20 border border-violet-400/40 text-[9px] text-violet-300 font-semibold">
                  <span>CONVERSATIONAL INQUIRY AGENT</span>
                </div>
                <h4 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                  Automated Lead Qualification & Sync
                </h4>
                <p className="text-[10px] sm:text-xs text-indigo-200 max-w-[280px] line-clamp-2">
                  Custom AI chatbot trained on your business offerings, immediate email webhooks, and zero missed leads.
                </p>
              </div>

              <div className="relative z-10 flex items-center justify-between p-2.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-[9px]">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-gradient-to-tr from-violet-500 to-pink-500 flex items-center justify-center font-bold text-white shadow-md">
                    AI
                  </div>
                  <div>
                    <span className="font-bold text-white block">Lead Formatted</span>
                    <span className="text-cyan-300 block text-[8px]">Synced to WhatsApp & Sheets</span>
                  </div>
                </div>
                <div className="px-3 py-1 rounded bg-gradient-to-r from-violet-500 via-pink-500 to-cyan-400 text-white font-bold text-[9px] shadow-lg">
                  Test Agent
                </div>
              </div>
            </div>
          </div>
          <div className="h-2.5 sm:h-3 bg-indigo-950 rounded-b-[10px] shadow-md mx-6 flex justify-center">
            <div className="w-16 h-1 bg-violet-400/40 rounded-b" />
          </div>
        </div>

        <div className={`transition-all duration-700 ease-out z-20 ${
          forcedDevice === 'desktop'
            ? 'hidden'
            : forcedDevice === 'mobile'
            ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
            : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
        }`}>
          <div className="rounded-[20px] bg-slate-950 p-1.5 border-2 border-pink-400 shadow-2xl overflow-hidden">
            <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
            <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-slate-900 p-2.5 flex flex-col justify-between">
              <div className="space-y-1">
                <span className="text-[8px] text-pink-400 font-bold uppercase tracking-widest block">AI ASSISTANT</span>
                <span className="text-[10px] font-bold text-white block leading-tight">Live Qualification</span>
              </div>
              <div className="p-2 rounded bg-indigo-950/80 border border-violet-400/30 text-[8px] space-y-1">
                <div className="flex items-center gap-1 text-cyan-300">
                  <Send className="w-3 h-3" />
                  <span>Lead Captured</span>
                </div>
                <div className="w-full py-1 bg-gradient-to-r from-violet-500 to-pink-500 text-white font-bold text-center rounded text-[8px]">
                  View Brief
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // 12. DIGITAL CONTENT & COPYWRITING (Veritas High-Conversion Copy & Voice)
  return (
    <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden bg-gradient-to-br from-[#ffffff] via-[#ecfdf5] to-[#a7f3d0] p-3 sm:p-5 flex items-center justify-center shadow-[0_20px_50px_rgba(16,185,129,0.22)] select-none">
      <div className="absolute top-2 left-6 w-80 h-80 rounded-full bg-emerald-300/40 blur-3xl pointer-events-none" />
      <div className="absolute bottom-2 right-6 w-80 h-80 rounded-full bg-teal-200/50 blur-3xl pointer-events-none" />

      <div className="absolute top-4 left-5 right-5 z-20 flex items-center justify-between pointer-events-none">
        <div className="px-3.5 py-1.5 rounded-full bg-emerald-950/90 backdrop-blur-md border border-emerald-400/50 text-[11px] font-semibold tracking-wider text-emerald-200 shadow-lg flex items-center gap-2">
          <Activity className="w-3.5 h-3.5 text-emerald-400" />
          <span>VERITAS COPY · CONVERSION VOICE</span>
        </div>
        <span className="hidden sm:inline-block px-3 py-1 rounded-full bg-white/90 backdrop-blur-md text-[10px] font-semibold text-emerald-900 border border-emerald-200 shadow-sm">
          3.2x Action Lift
        </span>
      </div>

      <div className={`relative transition-all duration-700 ease-out z-10 ${
        forcedDevice === 'mobile' 
          ? 'hidden' 
          : 'w-[86%] sm:w-[82%] max-w-[580px] -translate-x-3 sm:-translate-x-5 group-hover:scale-[1.02]'
      }`}>
        <div className="rounded-t-[14px] bg-[#064e3b] p-1.5 sm:p-2 border border-emerald-300/40 shadow-[0_25px_60px_rgba(6,78,59,0.35)]">
          <div className="flex items-center justify-between px-2.5 py-1 bg-[#022c22] rounded-t-[8px] border-b border-emerald-950 text-[9px] text-emerald-200">
            <div className="flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              <span className="w-2 h-2 rounded-full bg-teal-400" />
              <span className="w-2 h-2 rounded-full bg-stone-600" />
            </div>
            <span className="font-mono text-[9px] text-emerald-100 truncate max-w-[190px]">
              veritas-copy.pro · value-propositions
            </span>
            <span className="text-[8px] bg-emerald-500 text-stone-950 px-1.5 py-0.5 rounded font-bold">
              Clarity 98/100
            </span>
          </div>

          <div className="relative h-44 sm:h-56 md:h-64 rounded-b-[8px] overflow-hidden bg-slate-950 p-3 sm:p-5 flex flex-col justify-between text-white">
            <div 
              className="absolute inset-0 opacity-40 bg-cover bg-center"
              style={{ backgroundImage: `url(${project.heroImage})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-emerald-950/30" />

            <div className="relative z-10 space-y-1">
              <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-400/20 border border-emerald-400/40 text-[9px] text-emerald-300 font-semibold">
                <Clock className="w-3 h-3 text-emerald-400" />
                <span>MAGNETIC BRAND MESSAGING</span>
              </div>
              <h4 className="text-lg sm:text-2xl font-bold font-display tracking-tight text-white leading-tight">
                Conversion-Focused Headlines & Ad Hooks
              </h4>
              <p className="text-[10px] sm:text-xs text-emerald-100/80 max-w-[280px] line-clamp-2">
                Clear, confident English that explains your business value without corporate jargon, compelling visitors to act.
              </p>
            </div>

            <div className="relative z-10 grid grid-cols-3 gap-2 text-[9px]">
              <div className="p-2 rounded-lg bg-emerald-500/20 border border-emerald-400 text-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
                <span className="text-[7px] text-emerald-300 block uppercase font-bold">Action Rate</span>
                <span className="font-bold text-white">3.2x</span>
                <span className="text-[7px] text-emerald-300 block">Verified Lift</span>
              </div>
              <div className="p-2 rounded-lg bg-white/10 border border-white/20 text-center">
                <span className="text-[7px] text-stone-300 block uppercase font-bold">Tone</span>
                <span className="font-bold text-white">Editorial</span>
                <span className="text-[7px] text-stone-300 block">Uncompromising</span>
              </div>
              <div className="p-2 rounded-lg bg-emerald-400 text-stone-950 font-bold flex items-center justify-center cursor-pointer shadow-md">
                Read Copy →
              </div>
            </div>
          </div>
        </div>
        <div className="h-2.5 sm:h-3 bg-emerald-950 rounded-b-[10px] shadow-md mx-6 flex justify-center">
          <div className="w-16 h-1 bg-emerald-400/40 rounded-b" />
        </div>
      </div>

      <div className={`transition-all duration-700 ease-out z-20 ${
        forcedDevice === 'desktop'
          ? 'hidden'
          : forcedDevice === 'mobile'
          ? 'w-[240px] sm:w-[270px] group-hover:scale-[1.03]'
          : 'absolute bottom-3 sm:bottom-4 right-3 sm:right-6 w-[120px] sm:w-[150px] md:w-[165px] animate-float-slow shadow-[0_30px_70px_rgba(0,0,0,0.6)]'
      }`}>
        <div className="rounded-[20px] bg-emerald-950 p-1.5 border-2 border-emerald-400 shadow-2xl overflow-hidden">
          <div className="w-12 h-2.5 bg-black rounded-full mx-auto mb-1" />
          <div className="relative h-44 sm:h-56 rounded-[14px] overflow-hidden bg-slate-900 p-2.5 flex flex-col justify-between">
            <div className="space-y-1">
              <span className="text-[8px] text-emerald-400 font-bold uppercase tracking-widest block">STRATEGIC HOOK</span>
              <span className="text-[10px] font-bold text-white block leading-tight">Headline A/B Test</span>
            </div>
            <div className="p-2 rounded bg-emerald-950/80 border border-emerald-400/30 text-[8px] space-y-1">
              <div className="flex items-center gap-1 text-emerald-300">
                <Star className="w-3 h-3 fill-emerald-300" />
                <span>+45% Inquiries</span>
              </div>
              <div className="w-full py-1 bg-emerald-400 text-stone-950 font-bold text-center rounded text-[8px]">
                Inspect Voice
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
