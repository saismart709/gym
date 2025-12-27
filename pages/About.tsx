import React from 'react';

const About: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen py-20">
      {/* Intro */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 mb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
                <h2 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Our Story</h2>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">The Pursuit of Perfection</h1>
                <p className="text-zinc-400 leading-relaxed mb-6">
                    Founded in 2020, V Zone was born from a desire to bridge the gap between high-performance athletic training facilities and luxury hospitality. We believe your environment dictates your effort.
                </p>
                <p className="text-zinc-400 leading-relaxed">
                    Every inch of our 25,000 sq ft facility has been meticulously designed to inspire. From acoustic engineering that isolates noise to HEPA-filtered air systems, we have obsessed over the details so you can obsess over your results.
                </p>
            </div>
            <div className="relative h-[500px]">
                <img src="https://images.unsplash.com/photo-1570829460005-c840387bb1ca?auto=format&fit=crop&w=600&q=80" alt="Gym Architecture" className="w-full h-full object-cover" />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 border-2 border-gold-600 hidden md:block"></div>
            </div>
        </div>
      </div>

      {/* Values */}
      <div className="bg-zinc-900 py-20">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-center text-3xl font-serif text-white mb-12">Core Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                <div>
                    <h3 className="text-gold-500 text-lg uppercase tracking-widest mb-4">Excellence</h3>
                    <p className="text-zinc-400">We do not compromise on equipment quality or staff expertise.</p>
                </div>
                <div>
                    <h3 className="text-gold-500 text-lg uppercase tracking-widest mb-4">Privacy</h3>
                    <p className="text-zinc-400">Respecting the sanctuary of your workout with strictly enforced etiquette.</p>
                </div>
                <div>
                    <h3 className="text-gold-500 text-lg uppercase tracking-widest mb-4">Community</h3>
                    <p className="text-zinc-400">Curating a membership base of driven, like-minded individuals.</p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;