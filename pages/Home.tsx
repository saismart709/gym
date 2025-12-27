import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1920&q=80" 
            alt="Luxury Gym" 
            className="w-full h-full object-cover filter brightness-[0.3]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
        </div>

        <div className="relative z-10 text-center max-w-4xl px-4">
          <h2 className="text-gold-500 text-sm md:text-base uppercase tracking-[0.3em] mb-4 animate-fade-in-up">
            Redefining Fitness
          </h2>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-white mb-8 leading-tight">
            ELEVATE YOUR <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-gold-400 to-gold-600">EXISTENCE</span>
          </h1>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/membership" className="px-8 py-4 bg-gold-600 hover:bg-gold-500 text-black font-bold uppercase tracking-widest transition-all duration-300 min-w-[200px]">
              Join the Elite
            </Link>
            <Link to="/about" className="px-8 py-4 border border-white text-white hover:bg-white hover:text-black font-bold uppercase tracking-widest transition-all duration-300 min-w-[200px]">
              Discover V Zone
            </Link>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-zinc-950 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-gold-500 text-sm uppercase tracking-widest mb-2">The Experience</h3>
            <h2 className="text-4xl font-serif text-white mb-6">Beyond a Gym. A Sanctuary.</h2>
            <p className="text-zinc-400 leading-relaxed mb-6">
              V Zone is not just a place to train; it is a destination designed for those who demand excellence. 
              With Italian-leather upholstered equipment, atmospheric lighting, and a scent-scaped environment, 
              we have created a space where fitness meets luxury lifestyle.
            </p>
            <ul className="space-y-4 text-zinc-300">
              <li className="flex items-center gap-3"><Star size={16} className="text-gold-500" /> Curated Technogym Artis Line</li>
              <li className="flex items-center gap-3"><Star size={16} className="text-gold-500" /> Private Training Suites</li>
              <li className="flex items-center gap-3"><Star size={16} className="text-gold-500" /> Post-Workout Recovery Spa</li>
            </ul>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 border border-gold-600/30"></div>
            <img src="https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?auto=format&fit=crop&w=600&q=80" alt="Interior" className="relative z-10 grayscale hover:grayscale-0 transition-all duration-500 w-full h-[500px] object-cover" />
          </div>
        </div>
      </section>

      {/* Facilities Strip */}
      <section className="py-20 bg-zinc-900 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[].map((item) => (
              <div key={item} className="p-4">
                <h4 className="text-xl font-serif text-white">{item}</h4>
                <div className="h-0.5 w-12 bg-gold-600 mx-auto mt-3"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative bg-zinc-950 text-center px-4">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-8">Ready to Ascend?</h2>
          <p className="text-zinc-400 mb-10">Limited memberships available. Secure your place in the most exclusive fitness community.</p>
          <Link to="/contact" className="inline-flex items-center gap-2 text-gold-500 border-b border-gold-500 pb-1 hover:text-white hover:border-white transition-colors uppercase tracking-widest">
            Schedule a Private Tour <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </>
  );
};

export default Home;