import React, { useState, useEffect } from 'react';
import { statistics } from '../../data/statistics';

interface CounterProps {
  target: number;
  suffix: string;
  label: string;
}

const Counter: React.FC<CounterProps> = ({ target, suffix, label }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const increment = target / 50;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [target]);

  return (
    <div className="text-center">
      <p className="text-4xl sm:text-5xl font-bold text-primary-600 mb-2">
        {count.toLocaleString()}{suffix}
      </p>
      <p className="text-gray-600 font-semibold">{label}</p>
    </div>
  );
};

export const Statistics: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-primary-600 to-accent-600">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Números que Falam
          </h2>
          <p className="text-xl text-white/80">
            Milhares de profissionais já transformaram suas carreiras com FLUX
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Counter
            target={statistics.professionals}
            suffix="+"
            label="Profissionais Analisados"
          />
          <Counter
            target={statistics.careers}
            suffix="+"
            label="Profissões Mapeadas"
          />
          <Counter
            target={statistics.satisfaction}
            suffix="%"
            label="Taxa de Satisfação"
          />
          <Counter
            target={statistics.countries}
            suffix="+"
            label="Países Atendidos"
          />
        </div>
      </div>
    </section>
  );
};
