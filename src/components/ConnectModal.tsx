import React, { useState } from 'react';
import { X, Send, CheckCircle2, Mail, User, MessageSquare, AlertCircle, Loader2 } from 'lucide-react';

interface ConnectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConnectModal: React.FC<ConnectModalProps> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage(null);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'b0182db0-953b-4758-afaa-bece9e4c9c4d',
          name: formData.name,
          email: formData.email,
          message: formData.message,
          from_name: 'Mettu Sabarish Portfolio Transmission',
          subject: `⚡ New Portfolio Lead from ${formData.name}`,
        }),
      });

      const result = await response.json();

      if (result.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', message: '' });
          onClose();
        }, 3500);
      } else {
        setErrorMessage(result.message || 'Transmission failed. Please try again.');
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please verify connection and retry.');
    } finally {
      setIsSubmitting(false);
    }
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
          className="absolute top-4 right-4 text-zinc-400 hover:text-white p-1 rounded-full hover:bg-zinc-800 transition-colors cursor-pointer"
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
            Directly transmitted to <span className="text-[#ff1a1a] font-mono font-bold">mettusabarish96@gmail.com</span>
          </p>
        </div>

        {submitted ? (
          <div className="py-8 flex flex-col items-center justify-center text-center space-y-2">
            <div className="p-3 rounded-full bg-[#ff1a1a]/15 border border-[#ff1a1a]/40">
              <CheckCircle2 className="w-10 h-10 text-[#ff1a1a]" />
            </div>
            <h4 className="text-lg font-orbitron font-bold text-white tracking-wide">TRANSMISSION DELIVERED</h4>
            <p className="text-xs text-zinc-300 max-w-xs font-space leading-relaxed">
              Your message has landed in Sabarish's inbox. Expect a response within 24 hours.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 font-space">
            {errorMessage && (
              <div className="p-3 rounded-lg bg-red-950/50 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 shrink-0 text-[#ff1a1a]" />
                <span>{errorMessage}</span>
              </div>
            )}

            <div>
              <label className="block text-xs font-chakra font-bold uppercase tracking-wider text-zinc-300 mb-1">
                Your Name
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  disabled={isSubmitting}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Alex Mercer"
                  className="w-full bg-[#141624] border border-zinc-700/80 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff1a1a] focus:ring-1 focus:ring-[#ff1a1a] disabled:opacity-60"
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
                  disabled={isSubmitting}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="alex@nexuscorp.io"
                  className="w-full bg-[#141624] border border-zinc-700/80 rounded-lg pl-9 pr-3 py-2.5 text-sm text-white focus:outline-none focus:border-[#ff1a1a] focus:ring-1 focus:ring-[#ff1a1a] disabled:opacity-60"
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
                  disabled={isSubmitting}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Briefly describe your goals, timeline, and tech stack requirements..."
                  className="w-full bg-[#141624] border border-zinc-700/80 rounded-lg pl-9 pr-3 py-2 text-sm text-white focus:outline-none focus:border-[#ff1a1a] focus:ring-1 focus:ring-[#ff1a1a] disabled:opacity-60"
                />
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-[#ff1a1a] hover:bg-[#e00813] text-white font-chakra font-bold text-sm tracking-wider uppercase shadow-[0_0_20px_rgba(255,26,26,0.5)] transition-all active:scale-98 disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  <span>TRANSMITTING...</span>
                </>
              ) : (
                <>
                  <span>TRANSMIT BRIEF</span>
                  <Send className="w-4 h-4" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
