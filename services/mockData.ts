import { BlogPost, GalleryItem, Member, MembershipPlan, Service, Trainer } from "../types";

export const MOCK_TRAINERS: Trainer[] = [
  {
    id: '1',
    name: 'Alexander Vane',
    specialization: 'High-Performance Hypertrophy',
    experience: '12 Years',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?auto=format&fit=crop&w=400&q=80',
    bio: 'Former Olympian specializing in precision body sculpting.'
  },
  {
    id: '2',
    name: 'Elena Silva',
    specialization: 'Functional Movement & Mobility',
    experience: '8 Years',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=400&q=80',
    bio: 'Certified physiotherapist focused on injury prevention and longevity.'
  },
  {
    id: '3',
    name: 'Marcus Thorne',
    specialization: 'Strength & Conditioning',
    experience: '15 Years',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80',
    bio: 'Strength coach for elite athletes and powerlifters.'
  }
];

export const MOCK_SERVICES: Service[] = [
  { id: '1', title: 'Personal Training', description: 'One-on-one coaching tailored to your specific genetic makeup and goals.', icon: 'User' },
  { id: '2', title: 'Cryotherapy', description: 'Advanced recovery chambers to reduce inflammation and boost metabolism.', icon: 'Thermometer' },
  { id: '3', title: 'Elite Equipment', description: 'Technogym Artis line and Hammer Strength plate-loaded machinery.', icon: 'Dumbbell' },
  { id: '4', title: 'Nutrition Concierge', description: 'Customized meal planning and supplement protocols.', icon: 'Utensils' },
];

export const MOCK_PLANS: MembershipPlan[] = [
  {
    id: 'gold',
    name: 'Gold',
    price: '$150',
    period: '/month',
    features: ['Access to Gym Floor', 'Locker Room Access', '1 Personal Training Session', 'Valet Parking'],
    recommended: false
  },
  {
    id: 'platinum',
    name: 'Platinum',
    price: '$250',
    period: '/month',
    features: ['24/7 Access', 'Unlimited Classes', '4 Personal Training Sessions', 'Spa & Sauna Access', 'Nutritional Assessment'],
    recommended: true
  },
  {
    id: 'black',
    name: 'V-Black',
    price: '$500',
    period: '/month',
    features: ['All Platinum Benefits', 'Private VIP Locker', 'Unlimited Personal Training', 'Laundry Service', 'Massage Therapy (2x/mo)'],
    recommended: false
  }
];

export const MOCK_BLOGS: BlogPost[] = [
  {
    id: '1',
    title: 'The Art of Recovery',
    date: 'Oct 12, 2023',
    excerpt: 'Why rest days are more important than training days for elite physique development.',
    content: '...',
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?auto=format&fit=crop&w=800&q=80',
    author: 'Elena Silva'
  },
  {
    id: '2',
    title: 'Precision Nutrition',
    date: 'Sep 28, 2023',
    excerpt: 'Understanding macronutrient timing around your workout window.',
    content: '...',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80',
    author: 'Dr. John Doe'
  }
];

export const MOCK_GALLERY: GalleryItem[] = [
  { id: '1', url: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=600&q=80', caption: 'Main Weight Floor' },
  { id: '2', url: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?auto=format&fit=crop&w=600&q=80', caption: 'Cardio Theater' },
  { id: '3', url: 'https://benchfitness.com/cdn/shop/files/homepage_head_cover.png?v=1725337917&width=3840', caption: 'Bench Fitness' },
  { id: '4', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpfjaAj4P-xUkYmb8HLgy-uA6VOPnog7r9gw&s', caption: 'elliptical machine' },
  { id: '5', url: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&fit=crop&w=600&q=80', caption: 'Functional Area' },
  { id: '6', url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa5fvs9x2lqdTlkI73Zx5zvMXY3XZMM7uGZQ&s', caption: 'treadmill' },
];

export const MOCK_MEMBERS: Member[] = [
  { id: '1', name: 'John Wick', email: 'john@vzone.com', plan: 'V-Black', joinDate: '2023-01-15', status: 'Active' },
  { id: '2', name: 'Sarah Connor', email: 'sarah@vzone.com', plan: 'Platinum', joinDate: '2023-03-22', status: 'Active' },
];