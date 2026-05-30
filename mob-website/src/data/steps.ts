export interface Step {
  number: string
  title: string
  description: string
  detail: string
}

export const steps: Step[] = [
  {
    number: '01',
    title: 'Create Your Free Account',
    description: 'Sign up in minutes.',
    detail:
      'No credit card required. Get instant access to the platform, team training vault, and your personal affiliate link the moment you register.',
  },
  {
    number: '02',
    title: 'Select Your Package',
    description: 'Choose your entry level.',
    detail:
      'Pick a package from $10 up to $4,000 based on where you want to start. Higher packages unlock larger earning potential when your referrals match your level.',
  },
  {
    number: '03',
    title: 'Invite Others And Get Paid',
    description: 'Share your link. Collect Bitcoin.',
    detail:
      'Use your unique referral link. When someone joins and purchases a package equal to or below yours, you earn direct commission paid straight to your Bitcoin wallet.',
  },
]
