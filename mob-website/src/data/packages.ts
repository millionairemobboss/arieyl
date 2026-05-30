export interface Package {
  price: number
  label: string
  highlight: boolean
  features: string[]
}

export const packages: Package[] = [
  {
    price: 10,
    label: 'Starter',
    highlight: false,
    features: ['Platform access', 'Basic training', 'Affiliate link'],
  },
  {
    price: 25,
    label: 'Builder',
    highlight: false,
    features: ['Everything in Starter', 'Email marketing tools', 'Team chat access'],
  },
  {
    price: 50,
    label: 'Mover',
    highlight: false,
    features: ['Everything in Builder', 'SMS campaigns', 'Funnel templates'],
  },
  {
    price: 100,
    label: 'Operator',
    highlight: false,
    features: ['Everything in Mover', 'CRM & pipeline tools', 'Automation builder'],
  },
  {
    price: 500,
    label: 'Strategist',
    highlight: true,
    features: ['Everything in Operator', 'Booking & calendar suite', 'Community builder'],
  },
  {
    price: 1000,
    label: 'Executive',
    highlight: false,
    features: ['Everything in Strategist', 'Reputation management', 'Priority support'],
  },
  {
    price: 2000,
    label: 'Authority',
    highlight: false,
    features: ['Everything in Executive', 'Full affiliate manager', 'Membership platform'],
  },
  {
    price: 4000,
    label: 'Founding',
    highlight: false,
    features: ['Everything in Authority', 'Maximum earning tier', 'Web3 masterclass access'],
  },
]
