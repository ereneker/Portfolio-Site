import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { siteInfo, navLinks } from '@/data/mock';
import { Menu, X } from 'lucide-react';

const Layout = ({ children }) => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleNavClick = (link) => {
    setMenuOpen(false);
    if (link.path === '/#work') {
      if (location.pathname === '/') {
        const el = document.getElementById('work');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById('work');
          if (el) el.scrollIntoView({ behavior: 'smooth' });
        }, 400);
      }
    } else {
      navigate(link.path);
      window.scrollTo(0, 0);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Fixed Navigation */}
      <header
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          backgroundColor: scrolled ? 'rgba(0,0,0,0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(10px)' : 'none',
          transition: 'background-color 0.5s ease, backdrop-filter 0.5s ease',
        }}
      >
        <nav className="flex items-center justify-between px-6 md:px-12 lg:px-16 py-5 md:py-6">
          <Link
            to="/"
            className="font-display text-sm md:text-base tracking-[0.3em] uppercase hover:opacity-60"
            style={{ transition: 'opacity 0.3s ease' }}
          >
            {siteInfo.name}
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-[12px] tracking-[0.25em] font-light uppercase bg-transparent border-none text-white cursor-pointer hover:opacity-50"
                style={{ transition: 'opacity 0.3s ease' }}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden bg-transparent border-none text-white cursor-pointer p-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        <div
          className="md:hidden overflow-hidden"
          style={{
            maxHeight: menuOpen ? '300px' : '0',
            opacity: menuOpen ? 1 : 0,
            transition: 'max-height 0.4s ease, opacity 0.3s ease',
            backgroundColor: 'rgba(0,0,0,0.96)',
          }}
        >
          <div className="flex flex-col items-center py-8 gap-6">
            {navLinks.map((link) => (
              <button
                key={link.label}
                onClick={() => handleNavClick(link)}
                className="text-[13px] tracking-[0.3em] font-light uppercase bg-transparent border-none text-white cursor-pointer hover:opacity-50"
                style={{ transition: 'opacity 0.3s ease' }}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main>{children}</main>

      {/* Footer */}
      <footer className="border-t border-white/[0.08] px-6 md:px-12 lg:px-16 py-8">
        <div className="flex items-center justify-between">
          <p className="text-[10px] tracking-[0.25em] text-white/30 font-light uppercase">
            {siteInfo.copyright}
          </p>
          <p className="text-[10px] tracking-[0.25em] text-white/20 font-light uppercase">
            Programmer
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
