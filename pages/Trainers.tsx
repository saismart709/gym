import React from 'react';
import { MOCK_TRAINERS } from '../services/mockData';

const Trainers: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Expert Guidance</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">World-Class Coaches</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_TRAINERS.map((trainer) => (
            <div key={trainer.id} className="group bg-zinc-900 border border-white/5 overflow-hidden">
              <div className="relative h-96 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 filter grayscale group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-2xl font-serif text-white">{trainer.name}</h3>
                  <p className="text-gold-500 text-sm uppercase tracking-widest mt-1">{trainer.specialization}</p>
                </div>
              </div>
              <div className="p-6">
                 <div className="flex justify-between items-center mb-4 border-b border-white/10 pb-4">
                    <span className="text-zinc-400 text-sm">Experience</span>
                    <span className="text-white">{trainer.experience}</span>
                 </div>
                 <p className="text-zinc-400 text-sm leading-relaxed">
                    {trainer.bio}
                 </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Trainers;