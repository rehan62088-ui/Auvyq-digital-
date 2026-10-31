import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, ArrowUpRight } from 'lucide-react';

interface Message {
  sender: 'assistant' | 'user';
  text: string;
  time: string;
  action?: {
    label: string;
    type: 'enquiry' | 'whatsapp';
  };
}

interface AuvyqChatbotProps {
  onOpenEnquiry: (serviceName?: string, packageName?: string) => void;
}

export const AuvyqChatbot: React.FC<AuvyqChatbotProps> = ({ onOpenEnquiry }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    {
      sender: 'assistant',
      text: "Welcome to Auvyq Digital. I'm your studio assistant. How can we help elevate your business online today?",
      time: 'Just now'
    }
  ]);

  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const promptOptions = [
    'Pricing & packages',
    'Hotel booking systems',
    'Turnaround & timeline',
    'Talk to studio lead'
  ];

  const handleSend = (userText: string) => {
    if (!userText.trim()) return;

    const newMsg: Message = {
      sender: 'user',
      text: userText,
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, newMsg]);
    setInput('');

    setTimeout(() => {
      respondToQuery(userText.toLowerCase());
    }, 400);
  };

  const respondToQuery = (q: string) => {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

    let replyText = '';
    let action: Message['action'] = undefined;

    if (q.includes('price') || q.includes('package') || q.includes('cost') || q.includes('investment') || q.includes('₹') || q.includes('rate')) {
      replyText = "We offer 4 fixed, transparent one-time investment tiers:\n\n• Basic (₹10,000 / 5–7 Days): 5–7 pages, mobile/desktop, WhatsApp & Maps.\n• Professional (₹20,000 / 10–14 Days): 8–12 pages, custom architecture, blog, booking forms.\n• Premium (₹30,000 / 18–24 Days): Full luxury hotel/resort booking systems, payment gateway, 3D accents.\n• Enterprise Transformation Suite (₹50,000 / 25–30 Days): 15–18 pages, complete brand identity, 3D signage blueprints, content engine & 24/7 AI automation.\n\nNo hidden retainers or monthly markups.";
      action = { label: 'Start a Project Enquiry', type: 'enquiry' };
    } else if (q.includes('hotel') || q.includes('booking') || q.includes('resort') || q.includes('villa') || q.includes('room')) {
      replyText = "Our hotel and resort solutions are custom-engineered to eliminate high OTA commission fees (15–25%). We include direct room showcases, instant WhatsApp concierge desks, transparent seasonal rate tables, and lightning-fast booking flows.";
      action = { label: 'Inquire About Hotel System', type: 'enquiry' };
    } else if (q.includes('time') || q.includes('turnaround') || q.includes('how long') || q.includes('duration') || q.includes('days')) {
      replyText = "Our delivery timelines are guaranteed:\n\n• Basic: 5–7 business days\n• Professional: 10–14 business days\n• Premium: 18–24 business days\n• Enterprise Transformation: 25–30 business days\n\nYou receive regular milestone previews directly from the studio.";
    } else if (q.includes('lead') || q.includes('contact') || q.includes('call') || q.includes('phone') || q.includes('whatsapp') || q.includes('talk') || q.includes('human')) {
      replyText = "You can connect directly with our studio lead via WhatsApp at +91 6206242488 or email at rehan62088@gmail.com. We operate with zero middlemen or outsourced sales reps.";
      action = { label: 'Message on WhatsApp', type: 'whatsapp' };
    } else if (q.includes('service') || q.includes('what do you do') || q.includes('offer')) {
      replyText = "AUVYQ Digital provides 12 core disciplines:\n1. Website Development\n2. Social Media Management\n3. Graphic Design & Branding\n4. Video Editing & Content Creation\n5. Digital Advertising (Meta & Google)\n6. WhatsApp Business Solutions\n7. Local Business Digital Setup\n8. E-commerce & Store Architecture\n9. Custom Merchandise Design\n10. Signboard & 3D Architectural Design\n11. AI & Business Automation\n12. Digital Content & Copywriting";
      action = { label: 'Configure Project Scope', type: 'enquiry' };
    } else {
      replyText = "Thank you for asking. Every project at AUVYQ Digital is engineered bespoke with sub-second speeds, tailored typography, and clean code. Would you like to review our packages or connect directly via WhatsApp?";
      action = { label: 'Connect via WhatsApp', type: 'whatsapp' };
    }

    setMessages(prev => [
      ...prev,
      {
        sender: 'assistant',
        text: replyText,
        time: timeStr,
        action
      }
    ]);
  };

  const handleActionClick = (action: NonNullable<Message['action']>) => {
    if (action.type === 'enquiry') {
      setIsOpen(false);
      onOpenEnquiry();
    } else {
      window.open(
        'https://wa.me/916206242488?text=Hi%20Auvyq%20Digital,%20I%E2%80%99m%20contacting%20you%20via%20the%20assistant%20on%20your%20website.',
        '_blank'
      );
    }
  };

  return (
    <>
      {/* Floating Trigger Button in Bottom-Right */}
      <div className="fixed bottom-6 right-6 z-40">
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="group px-4 py-3.5 bg-[#11120D] hover:bg-[#565449]/40 text-[#FFFBF4] border border-[#D8CFBC]/25 hover:border-[#D8CFBC]/50 shadow-[0_12px_32px_rgba(0,0,0,0.6)] transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
            aria-label="Open Auvyq Assistant"
          >
            <div className="w-2 h-2 rounded-full bg-[#FFFBF4] animate-pulse" />
            <span className="text-xs font-semibold tracking-tight text-[#FFFBF4]">
              Auvyq Assistant
            </span>
            <MessageSquare className="w-4 h-4 text-[#D8CFBC]/70 group-hover:text-[#FFFBF4] transition-colors" />
          </button>
        )}
      </div>

      {/* Assistant Modal Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[400px] h-[520px] max-h-[85vh] bg-[#11120D] border border-[#D8CFBC]/20 shadow-[0_24px_70px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="p-4 bg-[#565449]/35 border-b border-[#D8CFBC]/14 flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 bg-[#11120D] border border-[#D8CFBC]/25 flex items-center justify-center">
                <span className="font-display font-semibold text-xs text-[#FFFBF4]">A</span>
              </div>
              <div>
                <h4 className="text-sm font-semibold text-[#FFFBF4] font-display">
                  Auvyq Assistant
                </h4>
                <div className="flex items-center gap-1.5 text-[10px] text-[#D8CFBC]/70">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#FFFBF4]" />
                  <span>Studio Knowledge Base</span>
                </div>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-[#D8CFBC]/70 hover:text-[#FFFBF4] transition-colors cursor-pointer"
              aria-label="Close assistant"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 text-xs">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex flex-col ${
                  msg.sender === 'user' ? 'items-end' : 'items-start'
                }`}
              >
                <div
                  className={`max-w-[85%] p-3.5 leading-relaxed whitespace-pre-line ${
                    msg.sender === 'user'
                      ? 'bg-[#FFFBF4] text-[#11120D] font-medium shadow-sm'
                      : 'bg-[#565449]/30 text-[#FFFBF4] border border-[#D8CFBC]/14'
                  }`}
                >
                  {msg.text}
                </div>

                {msg.action && (
                  <button
                    onClick={() => handleActionClick(msg.action!)}
                    className="mt-2 px-3 py-1.5 bg-[#FFFBF4] hover:bg-[#D8CFBC] text-[#11120D] text-[11px] font-semibold flex items-center gap-1.5 transition-all cursor-pointer shadow-sm"
                  >
                    <span>{msg.action.label}</span>
                    <ArrowUpRight className="w-3 h-3 text-[#11120D]" />
                  </button>
                )}

                <span className="text-[9px] text-[#D8CFBC]/40 mt-1 px-1">
                  {msg.time}
                </span>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Option Pills */}
          <div className="px-4 py-2 border-t border-[#D8CFBC]/10 bg-[#161713] flex flex-wrap gap-1.5">
            {promptOptions.map((opt) => (
              <button
                key={opt}
                onClick={() => handleSend(opt)}
                className="px-2.5 py-1 text-[10px] bg-[#565449]/30 hover:bg-[#FFFBF4] text-[#D8CFBC] hover:text-[#11120D] border border-[#D8CFBC]/15 transition-colors cursor-pointer"
              >
                {opt}
              </button>
            ))}
          </div>

          {/* Input Box */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSend(input);
            }}
            className="p-3 bg-[#1A1B15] border-t border-[#D8CFBC]/14 flex items-center gap-2"
          >
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask about pricing, hotel booking, timeline..."
              className="flex-1 bg-[#11120D] border border-[#D8CFBC]/20 px-3 py-2 text-xs text-[#FFFBF4] placeholder-[#D8CFBC]/40 focus:outline-none focus:border-[#D8CFBC]/50"
            />
            <button
              type="submit"
              disabled={!input.trim()}
              className="p-2 bg-[#FFFBF4] text-[#11120D] disabled:opacity-40 hover:bg-[#D8CFBC] transition-all cursor-pointer"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};
