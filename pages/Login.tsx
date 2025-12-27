import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/authService';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await AuthService.login(email, password);
      navigate('/admin');
    } catch (err) {
      setError('Invalid credentials. Try admin@vzone.com / admin123');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-zinc-950 px-4">
      <div className="max-w-md w-full bg-zinc-900 p-8 border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.5)]">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-serif font-bold text-white mb-2">V ZONE</h1>
          <p className="text-zinc-400 text-sm uppercase tracking-widest">Member Access</p>
        </div>

        {error && <div className="bg-red-900/20 text-red-500 text-center p-3 mb-4 text-sm">{error}</div>}

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Email</label>
            <input 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full bg-black border border-zinc-800 text-white p-3 focus:border-gold-500 outline-none transition-colors"
              placeholder="email@example.com"
            />
          </div>
          <div>
            <label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Password</label>
            <input 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full bg-black border border-zinc-800 text-white p-3 focus:border-gold-500 outline-none transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" className="w-full bg-gold-600 hover:bg-gold-500 text-black font-bold uppercase tracking-widest py-3 transition-colors">
            Sign In
          </button>
        </form>
        
        <div className="mt-6 text-center text-xs text-zinc-500">
          <p>Admin Demo: admin@vzone.com / admin123</p>
          <p>User Demo: user@vzone.com / user123</p>
        </div>
      </div>
    </div>
  );
};

export default Login;