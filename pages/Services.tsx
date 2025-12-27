import React from 'react';
import { MOCK_SERVICES } from '../services/mockData';
import { Dumbbell, User, Thermometer, Utensils } from 'lucide-react';

const iconMap: Record<string, React.ReactNode> = {
  Dumbbell: <Dumbbell size={40} />,
  User: <User size={40} />,
  Thermometer: <Thermometer size={40} />,
  Utensils: <Utensils size={40} />,
};

const Services: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Our Offerings</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Premium Services</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {MOCK_SERVICES.map((service) => (
            <div key={service.id} className="group relative p-8 border border-white/10 hover:border-gold-500/50 bg-zinc-900/50 transition-all duration-300">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                <div className="text-gold-500 transform scale-150">
                   {iconMap[service.icon]}
                </div>
              </div>
              <div className="text-gold-500 mb-6">
                {iconMap[service.icon]}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-400 transition-colors">
                {service.title}
              </h3>
              <p className="text-zinc-400 leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-20 p-12 bg-zinc-900 border border-gold-600/20 text-center">
            <h3 className="text-2xl font-serif text-white mb-4">Equipment & Facilities</h3>
            <p className="text-zinc-400 max-w-2xl mx-auto mb-8">
                Our facility features the latest Technogym Artis line with seamless connectivity, a dedicated Hammer Strength plate-loaded zone, and a functional training turf. 
                We maintain a strict equipment-to-member ratio to ensure you never wait.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gold-500 uppercase tracking-widest">
                <span>Free Weights up to 150lbs</span>
                <span>Olympic Lifting Platforms</span>
                <span>Infrared Sauna</span>
                <span>Cold Plunge</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Services;