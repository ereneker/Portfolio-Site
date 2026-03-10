import React, { useState, useEffect } from 'react';
import { contactInfo } from '@/data/mock';
import { ArrowUpRight, Copy, Check } from 'lucide-react';

const ContactsPage = () => {
  const [copied, setCopied] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(contactInfo.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  return (
    <div
      className="pt-28 md:pt-36 px-6 md:px-12 lg:px-16 pb-24 min-h-screen"
      style={{
        opacity: isLoaded ? 1 : 0,
        transition: 'opacity 0.8s ease',
      }}
    >
      <h2 className="text-[10px] tracking-[0.35em] text-white/25 font-light uppercase mb-16">
        Contacts
      </h2>

      {/* Email */}
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.25em] text-white/25 font-light uppercase mb-4">
          Email
        </p>
        <div className="flex items-center gap-4">
          <a
            href={`mailto:${contactInfo.email}`}
            className="font-display text-xl md:text-3xl lg:text-4xl tracking-[0.02em] hover:opacity-60"
            style={{ transition: 'opacity 0.3s ease' }}
          >
            {contactInfo.email}
          </a>
          <button
            onClick={copyEmail}
            className="text-white/30 bg-transparent border-none cursor-pointer p-2 hover:text-white/80"
            style={{ transition: 'color 0.3s ease' }}
            aria-label="Copy email"
          >
            {copied ? <Check size={15} /> : <Copy size={15} />}
          </button>
        </div>
      </div>

      {/* Representation */}
      <div className="mb-16">
        <p className="text-[10px] tracking-[0.25em] text-white/25 font-light uppercase mb-6">
          Representation
        </p>
        <div className="space-y-6">
          {contactInfo.representation.map((rep, i) => (
            <div key={i}>
              <p className="text-[15px] font-light tracking-wide">{rep.name}</p>
              <p className="text-[12px] text-white/30 font-light mt-1">{rep.contact}</p>
              <p className="text-[12px] text-white/20 font-light mt-0.5">{rep.location}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Social */}
      <div>
        <p className="text-[10px] tracking-[0.25em] text-white/25 font-light uppercase mb-6">
          Social
        </p>
        <div className="space-y-4">
          {contactInfo.social.map((s, i) => (
            <a
              key={i}
              href={s.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[15px] font-light tracking-wide text-white hover:opacity-50"
              style={{ transition: 'opacity 0.3s ease' }}
            >
              {s.platform}
              <ArrowUpRight size={13} className="text-white/30" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactsPage;
