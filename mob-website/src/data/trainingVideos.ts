export interface TrainingVideo {
  id: string
  title: string
  duration: string
  category: string
  thumbnail: string
}

export const trainingVideos: TrainingVideo[] = [
  {
    id: 'v1',
    title: 'Welcome to MOB: Your First 24 Hours',
    duration: '12:30',
    category: 'Getting Started',
    thumbnail: '#1a0a2e',
  },
  {
    id: 'v2',
    title: 'Understanding the Bitcoin Payment System',
    duration: '18:45',
    category: 'Bitcoin Basics',
    thumbnail: '#0a1a2e',
  },
  {
    id: 'v3',
    title: 'Setting Up Your Funnel in 30 Minutes',
    duration: '28:10',
    category: 'Marketing Tools',
    thumbnail: '#0a2e1a',
  },
  {
    id: 'v4',
    title: 'The Matrix Explained: How Commissions Flow',
    duration: '22:05',
    category: 'Compensation',
    thumbnail: '#2e1a0a',
  },
  {
    id: 'v5',
    title: 'Inviting Your First 3 People',
    duration: '15:20',
    category: 'Recruiting',
    thumbnail: '#1a2e0a',
  },
  {
    id: 'v6',
    title: 'Email & SMS Marketing Fundamentals',
    duration: '31:00',
    category: 'Marketing Tools',
    thumbnail: '#0a2e2e',
  },
]
