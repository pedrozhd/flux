import React from 'react';
import { Mission } from '../components/about/Mission';
import { HowItWorks } from '../components/about/HowItWorks';
import { Team } from '../components/about/Team';

export const About: React.FC = () => {
  return (
    <main>
      <div className="pt-20" />
      <Mission />
      <HowItWorks />
      <Team />
    </main>
  );
};
