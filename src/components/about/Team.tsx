import React from 'react';
import { Card } from '../shared/Card';

const teamMembers = [
  {
    name: 'Dr. Carlos Silva',
    role: 'Fundador & CEO',
    bio: 'PhD em Machine Learning com 15 anos de experiência em IA'
  },
  {
    name: 'Ana Costa',
    role: 'CTO',
    bio: 'Engenheira de software sênior com expertise em sistemas distribuídos'
  },
  {
    name: 'João Santos',
    role: 'Head of Data',
    bio: 'Cientista de dados com background em economia e mercado de trabalho'
  },
  {
    name: 'Maria Oliveira',
    role: 'Head of Product',
    bio: 'Product manager com experiência em startups de impacto social'
  }
];

export const Team: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Nosso Time
          </h2>
          <p className="text-xl text-gray-600">
            Especialistas apaixonados por transformar carreiras
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card
              key={index}
              hover
              className="text-center animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-20 h-20 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-2xl">
                  {member.name.charAt(0)}
                </span>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">
                {member.name}
              </h3>
              <p className="text-sm font-semibold text-primary-600 mb-3">
                {member.role}
              </p>
              <p className="text-sm text-gray-600">
                {member.bio}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
