import React from 'react';
import { MOCK_BLOGS } from '../services/mockData';

const Blog: React.FC = () => {
  return (
    <div className="bg-zinc-950 min-h-screen py-20">
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="text-center mb-16">
          <h2 className="text-gold-500 text-sm uppercase tracking-widest mb-2">Journal</h2>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Fitness & Lifestyle</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {MOCK_BLOGS.map((post) => (
            <article key={post.id} className="flex flex-col group cursor-pointer">
              <div className="overflow-hidden mb-6 h-64 border border-white/5">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
                />
              </div>
              <div className="flex items-center gap-4 text-xs text-gold-500 uppercase tracking-widest mb-3">
                <span>{post.date}</span>
                <span className="w-1 h-1 bg-zinc-600 rounded-full"></span>
                <span>{post.author}</span>
              </div>
              <h2 className="text-2xl font-serif text-white mb-4 group-hover:text-gold-500 transition-colors">
                {post.title}
              </h2>
              <p className="text-zinc-400 leading-relaxed mb-4">
                {post.excerpt}
              </p>
              <span className="text-white border-b border-zinc-700 self-start pb-1 group-hover:border-gold-500 transition-colors text-sm uppercase tracking-wider">
                Read Article
              </span>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;