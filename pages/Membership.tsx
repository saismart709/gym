import React from 'react';
import { MOCK_PLANS } from '../services/mockData';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const Membership: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Join the Elite</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Membership Plans</h1>
          <p className="text-zinc-400 mt-4 max-w-2xl mx-auto">Choose the tier that fits your lifestyle. No hidden fees. No contracts on Gold and Platinum tiers.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {MOCK_PLANS.map((plan) => (
            <div 
              key={plan.id} 
              className={`relative p-8 flex flex-col ${
                plan.recommended 
                  ? 'bg-zinc-900 border-2 border-gold-600 transform md:-translate-y-4 shadow-[0_0_30px_rgba(212,175,55,0.1)]' 
                  : 'bg-zinc-900/50 border border-white/10'
              }`}
            >
              {plan.recommended && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold-600 text-black text-xs font-bold uppercase tracking-widest py-1 px-4">
                  Most Popular
                </div>
              )}
              
              <h3 className="text-2xl font-serif text-white mb-2">{plan.name}</h3>
              <div className="mb-6 flex items-baseline">
                <span className="text-4xl font-bold text-gold-500">{plan.price}</span>
                <span className="text-zinc-500 ml-2">{plan.period}</span>
              </div>

              <ul className="flex-1 space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check size={18} className="text-gold-500 mr-3 mt-1 flex-shrink-0" />
                    <span className="text-zinc-300 text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link 
                to="/contact" 
                className={`w-full py-4 text-center text-sm font-bold uppercase tracking-widest transition-all ${
                  plan.recommended
                    ? 'bg-gold-600 text-black hover:bg-gold-500'
                    : 'border border-white text-white hover:bg-white hover:text-black'
                }`}
              >
                Select Plan
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Membership;