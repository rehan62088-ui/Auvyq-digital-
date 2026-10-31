import React from 'react';
import { 
  Monitor, 
  Share2, 
  Palette, 
  Video, 
  TrendingUp, 
  MessageSquare, 
  MapPin, 
  ShoppingBag, 
  Shirt, 
  Layers, 
  Bot, 
  FileText,
  Building,
  Server
} from 'lucide-react';

export type GlossyIconType = 
  | 'website' 
  | 'social' 
  | 'branding' 
  | 'video' 
  | 'ads' 
  | 'whatsapp' 
  | 'local' 
  | 'ecommerce' 
  | 'merch' 
  | 'signage' 
  | 'ai' 
  | 'copywriting'
  | 'hotel'
  | 'hosting'
  | 'marketing';

interface Glossy3DIconProps {
  type: GlossyIconType;
  className?: string;
}

export const Glossy3DIcon: React.FC<Glossy3DIconProps> = ({ type, className = '' }) => {
  const renderIcon = () => {
    switch (type) {
      case 'website':
        return <Monitor className="w-6 h-6 text-[#FFFBF4]" />;
      case 'social':
        return <Share2 className="w-6 h-6 text-[#FFFBF4]" />;
      case 'branding':
        return <Palette className="w-6 h-6 text-[#FFFBF4]" />;
      case 'video':
        return <Video className="w-6 h-6 text-[#FFFBF4]" />;
      case 'ads':
        return <TrendingUp className="w-6 h-6 text-[#FFFBF4]" />;
      case 'whatsapp':
        return <MessageSquare className="w-6 h-6 text-[#FFFBF4]" />;
      case 'local':
        return <MapPin className="w-6 h-6 text-[#FFFBF4]" />;
      case 'ecommerce':
        return <ShoppingBag className="w-6 h-6 text-[#FFFBF4]" />;
      case 'merch':
        return <Shirt className="w-6 h-6 text-[#FFFBF4]" />;
      case 'signage':
        return <Layers className="w-6 h-6 text-[#FFFBF4]" />;
      case 'ai':
        return <Bot className="w-6 h-6 text-[#FFFBF4]" />;
      case 'copywriting':
        return <FileText className="w-6 h-6 text-[#FFFBF4]" />;
      case 'hotel':
        return <Building className="w-6 h-6 text-[#FFFBF4]" />;
      case 'hosting':
        return <Server className="w-6 h-6 text-[#FFFBF4]" />;
      case 'marketing':
        return <TrendingUp className="w-6 h-6 text-[#FFFBF4]" />;
      default:
        return <Monitor className="w-6 h-6 text-[#FFFBF4]" />;
    }
  };

  return (
    <div className={`relative w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center shrink-0 rounded-xl bg-gradient-to-br from-[#35342C] via-[#1E1F18] to-[#11120D] border border-[#D8CFBC]/25 shadow-[0_8px_24px_rgba(0,0,0,0.6)] ${className}`}>
      {/* Specular sheen on top edge in warm Floral White / Bone tone */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#FFFBF4]/60 to-transparent" />
      <div className="absolute inset-y-0 left-0 w-[1px] bg-gradient-to-b from-[#FFFBF4]/40 via-transparent to-transparent" />
      {renderIcon()}
    </div>
  );
};
