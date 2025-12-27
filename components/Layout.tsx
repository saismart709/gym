import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, User as UserIcon } from 'lucide-react';
import { AuthService } from '../services/authService';

const NAV_LINKS = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services' },
  { name: 'Membership', path: '/membership' },
  { name: 'Trainers', path: '/trainers' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Blog', path: '/blog' },
  { name: 'Contact', path: '/contact' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const user = AuthService.getCurrentUser();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col bg-zinc-950 text-white font-sans selection:bg-gold-500 selection:text-black">
      {/* Navbar */}
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled || isOpen ? 'bg-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link to="/" className="text-3xl font-serif font-bold tracking-widest text-white">
                V <span className="text-gold-500">ZONE</span>
              </Link>
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden lg:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.path}
                    className={`text-sm uppercase tracking-widest transition-colors hover:text-gold-500 ${
                      location.pathname === link.path ? 'text-gold-500' : 'text-zinc-300'
                    }`}
                  >
                    {link.name}
                  </Link>
                ))}
                {user ? (
                   <Link to="/admin" className="text-gold-500 hover:text-white flex items-center gap-2">
                     <UserIcon size={16} /> {user.name}
                   </Link>
                ) : (
                  <Link to="/login" className="px-6 py-2 border border-gold-500 text-gold-500 hover:bg-gold-500 hover:text-black transition-all uppercase text-xs tracking-widest">
                    Login
                  </Link>
                )}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white hover:text-gold-500 focus:outline-none"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-black border-b border-zinc-800">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="block px-3 py-2 text-base font-medium text-zinc-300 hover:text-gold-500 uppercase tracking-widest"
                >
                  {link.name}
                </Link>
              ))}
               <Link
                  to={user ? "/admin" : "/login"}
                  className="block px-3 py-2 text-base font-medium text-gold-500 uppercase tracking-widest"
                >
                  {user ? "Dashboard" : "Login"}
                </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-0">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-white/10 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <h3 className="text-2xl font-serif font-bold text-white mb-4">V <span className="text-gold-500">ZONE</span></h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Where luxury meets performance. Experience the pinnacle of fitness technology and aesthetic design.
              </p>
            </div>
            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Explore</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li><Link to="/services" className="hover:text-white transition">Services</Link></li>
                <li><Link to="/membership" className="hover:text-white transition">Membership</Link></li>
                <li><Link to="/trainers" className="hover:text-white transition">Trainers</Link></li>
                <li><Link to="/blog" className="hover:text-white transition">Journal</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Contact</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li>100 Wilshire Blvd, Suite 700</li>
                <li>Santa Monica, CA 90401</li>
                <li>+1 (310) 555-0123</li>
                <li>concierge@vzone.com</li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold-500 font-bold uppercase tracking-widest text-sm mb-6">Hours</h4>
              <ul className="space-y-3 text-sm text-zinc-400">
                <li className="flex justify-between"><span>Mon - Fri</span> <span>5:00 AM - 11:00 PM</span></li>
                <li className="flex justify-between"><span>Sat - Sun</span> <span>6:00 AM - 10:00 PM</span></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/5 pt-8 text-center text-zinc-600 text-xs uppercase tracking-widest">
            &copy; {new Date().getFullYear()} V Zone Fitness. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;