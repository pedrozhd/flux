import React, { useRef } from 'react';
import { Hero } from '../components/home/Hero';
import { CareerPredictor } from '../components/home/CareerPredictor';
import { Features } from '../components/home/Features';
import { Statistics } from '../components/home/Statistics';

interface HomeProps {
  onNavigate?: (page: string) => void;
}

export const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const predictorRef = useRef<HTMLDivElement>(null);

  const handleScrollToPredictor = () => {
    predictorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Hero onScrollToPredictor={handleScrollToPredictor} />
      <div ref={predictorRef}>
        <CareerPredictor onNavigate={onNavigate} />
      </div>
      <Features />
      <Statistics />
    </main>
  );
};
