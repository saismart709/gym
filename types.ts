export interface Trainer {
  id: string;
  name: string;
  specialization: string;
  experience: string;
  image: string;
  bio: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface MembershipPlan {
  id: string;
  name: string;
  price: string;
  period: string;
  features: string[];
  recommended?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
}

export interface GalleryItem {
  id: string;
  url: string;
  caption: string;
}

export interface Member {
  id: string;
  name: string;
  email: string;
  plan: string;
  joinDate: string;
  status: 'Active' | 'Expired';
}

export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
  GUEST = 'GUEST'
}

export interface User {
  id: string;
  email: string;
  role: UserRole;
  name: string;
}