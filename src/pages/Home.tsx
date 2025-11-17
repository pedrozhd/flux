import React, { useRef } from 'react';
import { Hero } from '../components/home/Hero';
import { CareerPredictor } from '../components/home/CareerPredictor';
import { Features } from '../components/home/Features';
import { Statistics } from '../components/home/Statistics';

export const Home: React.FC = () => {
  const predictorRef = useRef<HTMLDivElement>(null);

  const handleScrollToPredictor = () => {
    predictorRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <main>
      <Hero onScrollToPredictor={handleScrollToPredictor} />
      <div ref={predictorRef}>
        <CareerPredictor />
      </div>
      <Features />
      <Statistics />
    </main>
  );
};
