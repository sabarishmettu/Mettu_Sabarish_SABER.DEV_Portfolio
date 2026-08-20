import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, User, MessageSquare } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
      onClose();
    }, 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-[#0c0e17] border border-[#ff1a1a]/50 rounded-2xl p-6 sm:p-8 shadow-[0_0_50px_rgba(255,26,26,0.3)]"
        id="connect-modal"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <div className="flex items-center gap-2 text-[#ff1a1a] font-chakra text-xs tracking-widest uppercase font-bold mb-1">
            <span>&lt;TERMINAL_TRANSMISSION&gt;</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-orbitron font-extrabold text-white">
            LET'S WORK TOGETHER
          </h3>
          <p className="text-xs sm:text-sm text-zinc-400 font-space mt-1">
            Initiate a high-performance web engineering collaboration.
          </p>
        </div>

        {submitted ? (
          <div className="py-8 flex flex-col items-center justify-center text-center">
            <CheckCircle2 className="w-12 h-12 text-[#ff1a1a] mb-3 animate-bounce" />
            <h4 className="text-lg font-orbitron font-bold text-white">TRANSMISSION RECEIVED</h4>
            <p className="text-xs text-zinc-400 mt-1 font-space">
              Thank you! I will review your project specs and respond within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-space">
            <div>
              <label className="block text-xs font-chakra font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Your Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full bg-[#141624] border border-zinc-700/80 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff1a1a] focus:ring-1 focus:ring-[#ff1a1a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-chakra font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@nexuscorp.io"
                  className="w-full bg-[#141624] border border-zinc-700/80 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff1a1a] focus:ring-1 focus:ring-[#ff1a1a]"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-chakra font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Project Brief
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-zinc-500 absolute left-3 top-3" />
                <textarea
                  rows={3}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your goals, timeline, and tech stack requirements..."
                  className="w-full bg-[#141624] border border-zinc-700/80 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff1a1a] focus:ring-1 focus:ring-[#ff1a1a]"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff1a1a] hover:bg-[#e00813] text-white font-chakra font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(255,26,26,0.5)] transition-all active:scale-98"
            >
              <span>TRANSMIT BRIEF</span>
              <Send className="w-4 h-4" />
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
