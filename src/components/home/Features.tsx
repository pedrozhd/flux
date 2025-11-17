import React from 'react';
import { Zap, BarChart3, Target, Rocket, Globe, Lightbulb } from 'lucide-react';
import { Card } from '../shared/Card';

const features = [
  {
    icon: Zap,
    title: 'Previsão de Profissões',
    description: 'IA analisa tendências globais para prever quais profissões se tornarão mainstream'
  },
  {
    icon: BarChart3,
    title: 'Análise de Skills',
    description: 'Identifica seus gaps de competências e prioriza o que aprender'
  },
  {
    icon: Target,
    title: 'Match Personalizado',
    description: 'Compatibilidade em tempo real entre seu perfil e profissões emergentes'
  },
  {
    icon: Rocket,
    title: 'Trilhas de Aprendizado',
    description: 'Roadmaps personalizados com cursos, certificações e projetos práticos'
  },
  {
    icon: Globe,
    title: 'Mercado Global',
    description: 'Oportunidades internacionais em 30+ países com análise local'
  },
  {
    icon: Lightbulb,
    title: 'Insights Contínuos',
    description: 'Atualizações semanais sobre novas profissões e tendências de mercado'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Por que escolher FLUX?
          </h2>
          <p className="text-xl text-gray-600">
            Recursos poderosos para transformar sua carreira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                hover
                className="animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 flex-1">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
