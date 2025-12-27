import React, { useState } from 'react';
import { AuthService } from '../services/authService';
import { MOCK_MEMBERS, MOCK_TRAINERS, MOCK_BLOGS } from '../services/mockData';
import { Users, User, FileText, Image, Settings, LogOut } from 'lucide-react';

const AdminDashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'members' | 'trainers' | 'blog'>('members');
  const user = AuthService.getCurrentUser();

  const handleLogout = () => AuthService.logout();

  // Mock CRUD state (in a real app, this would use API calls)
  const [members, setMembers] = useState(MOCK_MEMBERS);
  const [trainers, setTrainers] = useState(MOCK_TRAINERS);
  const [blogs, setBlogs] = useState(MOCK_BLOGS);

  const deleteItem = (id: string, type: 'member' | 'trainer' | 'blog') => {
    if (confirm('Are you sure you want to delete this record?')) {
      if (type === 'member') setMembers(members.filter(m => m.id !== id));
      if (type === 'trainer') setTrainers(trainers.filter(t => t.id !== id));
      if (type === 'blog') setBlogs(blogs.filter(b => b.id !== id));
    }
  };

  if (!user || user.role !== 'ADMIN') {
    return (
      <div className="min-h-screen bg-zinc-950 text-white flex items-center justify-center p-4 text-center">
         <div>
            <h1 className="text-2xl text-gold-500 mb-4">Access Denied</h1>
            <p>You do not have permission to view the Admin Dashboard.</p>
            <button onClick={handleLogout} className="mt-4 underline text-zinc-400">Logout</button>
         </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-950 text-white flex pt-20">
      {/* Sidebar */}
      <aside className="w-64 bg-black border-r border-white/10 hidden md:block min-h-screen fixed top-20 bottom-0 overflow-y-auto">
        <div className="p-6">
          <h2 className="text-gold-500 text-xs uppercase tracking-widest mb-6">Management</h2>
          <nav className="space-y-2">
            <button 
              onClick={() => setActiveTab('members')}
              className={`w-full flex items-center gap-3 p-3 rounded transition-colors ${activeTab === 'members' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              <Users size={18} /> Members
            </button>
            <button 
              onClick={() => setActiveTab('trainers')}
              className={`w-full flex items-center gap-3 p-3 rounded transition-colors ${activeTab === 'trainers' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              <User size={18} /> Trainers
            </button>
            <button 
              onClick={() => setActiveTab('blog')}
              className={`w-full flex items-center gap-3 p-3 rounded transition-colors ${activeTab === 'blog' ? 'bg-zinc-800 text-white' : 'text-zinc-400 hover:text-white'}`}
            >
              <FileText size={18} /> Blog Posts
            </button>
             <div className="pt-6 border-t border-white/10 mt-6">
                <button onClick={handleLogout} className="w-full flex items-center gap-3 p-3 text-red-400 hover:text-red-300">
                    <LogOut size={18} /> Logout
                </button>
             </div>
          </nav>
        </div>
      </aside>

      {/* Content Area */}
      <main className="flex-1 md:ml-64 p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-serif">
            {activeTab === 'members' && 'Member Directory'}
            {activeTab === 'trainers' && 'Trainer Profiles'}
            {activeTab === 'blog' && 'Blog Content'}
          </h1>
          <button className="bg-gold-600 text-black px-4 py-2 font-bold uppercase text-xs tracking-widest hover:bg-gold-500">
            Add New
          </button>
        </div>

        <div className="bg-zinc-900 border border-white/10 overflow-hidden">
          {/* Members Table */}
          {activeTab === 'members' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-400">
                <thead className="bg-black text-xs uppercase tracking-wider text-gold-500">
                  <tr>
                    <th className="p-4">Name</th>
                    <th className="p-4">Email</th>
                    <th className="p-4">Plan</th>
                    <th className="p-4">Status</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {members.map(member => (
                    <tr key={member.id} className="hover:bg-zinc-800/50">
                      <td className="p-4 font-medium text-white">{member.name}</td>
                      <td className="p-4">{member.email}</td>
                      <td className="p-4"><span className="px-2 py-1 bg-zinc-800 rounded border border-white/10">{member.plan}</span></td>
                      <td className="p-4"><span className="text-green-400">{member.status}</span></td>
                      <td className="p-4">
                        <button onClick={() => deleteItem(member.id, 'member')} className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

           {/* Trainers Table */}
           {activeTab === 'trainers' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-400">
                <thead className="bg-black text-xs uppercase tracking-wider text-gold-500">
                  <tr>
                    <th className="p-4">Trainer</th>
                    <th className="p-4">Specialization</th>
                    <th className="p-4">Experience</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {trainers.map(t => (
                    <tr key={t.id} className="hover:bg-zinc-800/50">
                      <td className="p-4 flex items-center gap-3">
                        <img src={t.image} alt="" className="w-8 h-8 rounded-full object-cover" />
                        <span className="text-white font-medium">{t.name}</span>
                      </td>
                      <td className="p-4">{t.specialization}</td>
                      <td className="p-4">{t.experience}</td>
                      <td className="p-4">
                        <button onClick={() => deleteItem(t.id, 'trainer')} className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}

           {/* Blogs Table */}
           {activeTab === 'blog' && (
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-zinc-400">
                <thead className="bg-black text-xs uppercase tracking-wider text-gold-500">
                  <tr>
                    <th className="p-4">Title</th>
                    <th className="p-4">Author</th>
                    <th className="p-4">Date</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-white/5">
                  {blogs.map(b => (
                    <tr key={b.id} className="hover:bg-zinc-800/50">
                      <td className="p-4 text-white font-medium">{b.title}</td>
                      <td className="p-4">{b.author}</td>
                      <td className="p-4">{b.date}</td>
                      <td className="p-4">
                        <button onClick={() => deleteItem(b.id, 'blog')} className="text-red-400 hover:text-red-300">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;