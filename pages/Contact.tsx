import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Contact Info */}
          <div>
            <h2 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Get in Touch</h2>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-8">Visit V Zone</h1>
            <p className="text-zinc-400 mb-12">
              We invite you to experience V Zone firsthand. Schedule a tour or contact our concierge for membership inquiries.
            </p>

            <div className="space-y-8">
              <div className="flex items-start">
                <MapPin className="text-gold-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Location</h3>
                  <p className="text-zinc-400">100 Wilshire Blvd, Suite 700<br/>Santa Monica, CA 90401</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Phone className="text-gold-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Phone</h3>
                  <p className="text-zinc-400">+1 (310) 555-0123</p>
                </div>
              </div>

              <div className="flex items-start">
                <Mail className="text-gold-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Email</h3>
                  <p className="text-zinc-400">concierge@vzone.com</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="text-gold-500 mt-1 mr-4" />
                <div>
                  <h3 className="text-white font-serif text-lg mb-1">Hours</h3>
                  <p className="text-zinc-400">Mon-Fri: 5am - 11pm<br/>Sat-Sun: 6am - 10pm</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-zinc-900 p-8 border border-white/10">
            <h3 className="text-2xl font-serif text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">First Name</label>
                  <input type="text" className="w-full bg-black border border-zinc-800 text-white p-3 focus:border-gold-500 outline-none transition-colors" />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Last Name</label>
                  <input type="text" className="w-full bg-black border border-zinc-800 text-white p-3 focus:border-gold-500 outline-none transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
                <input type="email" className="w-full bg-black border border-zinc-800 text-white p-3 focus:border-gold-500 outline-none transition-colors" />
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Subject</label>
                <select className="w-full bg-black border border-zinc-800 text-white p-3 focus:border-gold-500 outline-none transition-colors">
                  <option>Membership Inquiry</option>
                  <option>Personal Training</option>
                  <option>Press / Media</option>
                  <option>Other</option>
                </select>
              </div>
              <div>
                <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Message</label>
                <textarea rows={4} className="w-full bg-black border border-zinc-800 text-white p-3 focus:border-gold-500 outline-none transition-colors"></textarea>
              </div>
              <button className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold uppercase tracking-widest py-4 transition-colors">
                Submit Inquiry
              </button>
            </form>
          </div>
        </div>

        {/* Map Placeholder */}
        <div className="mt-20 h-96 w-full bg-zinc-900 border border-white/5 relative flex items-center justify-center">
            <div className="absolute inset-0 bg-zinc-800">
               {/* Embed placeholder logic or use a static image if no API Key */}
               <iframe 
                 src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.715220364966!2d-118.49751668478494!3d34.01955998061486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2a4d1ac706243%3A0x6b402830a6b72d2!2s100%20Wilshire%20Blvd%2C%20Santa%20Monica%2C%20CA%2090401!5e0!3m2!1sen!2sus!4v1679090000000!5m2!1sen!2sus" 
                 width="100%" 
                 height="100%" 
                 style={{border:0, filter: 'grayscale(100%) invert(90%)'}} 
                 loading="lazy" 
                 referrerPolicy="no-referrer-when-downgrade"
                 title="Gym Location"
               ></iframe>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;