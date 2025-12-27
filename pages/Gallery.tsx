import React from 'react';
import { MOCK_GALLERY } from '../services/mockData';

const Gallery: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-sm uppercase tracking-widest mb-2">The Space</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Facilities Gallery</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {MOCK_GALLERY.map((item) => (
            <div key={item.id} className="relative group overflow-hidden aspect-[4/3]">
              <img 
                src={item.url} 
                alt={item.caption} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-gold-500 font-serif text-xl border-b border-gold-500 pb-1">
                  {item.caption}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Gallery;