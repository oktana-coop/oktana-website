export type SupportTier = { amount: number; link: string };

export const supportTiers: SupportTier[] = [
  { amount: 5, link: 'https://donate.stripe.com/00w9AS8dt8UC1ox31jfQI01' },
  { amount: 10, link: 'https://donate.stripe.com/5kQaEWfFV8UC7MV45nfQI02' },
  { amount: 25, link: 'https://donate.stripe.com/eVq4gyfFV3Ai8QZ6dvfQI03' },
];

export const defaultSupportTier = supportTiers[1];
