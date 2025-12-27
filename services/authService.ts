import { User, UserRole } from "../types";

// Simulating a backend session
const SESSION_KEY = 'vzone_user_session';

export const AuthService = {
  login: async (email: string, password: string): Promise<User> => {
    // Simulate API delay
    await new Promise(resolve => setTimeout(resolve, 800));

    if (email === 'admin@vzone.com' && password === 'admin123') {
      const user: User = { id: 'admin1', email, name: 'Admin User', role: UserRole.ADMIN };
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
      return user;
    }
    
    if (email === 'user@vzone.com' && password === 'user123') {
       const user: User = { id: 'user1', email, name: 'Standard Member', role: UserRole.USER };
       localStorage.setItem(SESSION_KEY, JSON.stringify(user));
       return user;
    }

    throw new Error('Invalid credentials');
  },

  logout: () => {
    localStorage.removeItem(SESSION_KEY);
    window.location.reload();
  },

  getCurrentUser: (): User | null => {
    const stored = localStorage.getItem(SESSION_KEY);
    return stored ? JSON.parse(stored) : null;
  }
};