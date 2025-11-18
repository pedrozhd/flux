import React from 'react';
import { Card } from '../shared/Card';
import featurePrediction from '../../assets/feature-prediction.png';
import featureSkills from '../../assets/feature-skills.png';
import featureMatch from '../../assets/feature-match.png';
import featureLearning from '../../assets/feature-learning.png';
import featureGlobal from '../../assets/feature-global.png';
import featureInsights from '../../assets/eature-insights.png';

const features = [
  {
    image: featurePrediction,
    title: 'Previsão de Profissões',
    description: 'IA analisa tendências globais para prever quais profissões se tornarão mainstream'
  },
  {
    image: featureSkills,
    title: 'Análise de Skills',
    description: 'Identifica seus gaps de competências e prioriza o que aprender'
  },
  {
    image: featureMatch,
    title: 'Match Personalizado',
    description: 'Compatibilidade em tempo real entre seu perfil e profissões emergentes'
  },
  {
    image: featureLearning,
    title: 'Trilhas de Aprendizado',
    description: 'Roadmaps personalizados com cursos, certificações e projetos práticos'
  },
  {
    image: featureGlobal,
    title: 'Mercado Global',
    description: 'Oportunidades internacionais em 30+ países com análise local'
  },
  {
    image: featureInsights,
    title: 'Insights Contínuos',
    description: 'Atualizações semanais sobre novas profissões e tendências de mercado'
  }
];

export const Features: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Por que escolher FLUX?
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300">
            Recursos poderosos para transformar sua carreira
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              hover
              className="animate-fadeIn overflow-hidden"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="w-full h-32 mb-4 overflow-hidden rounded-lg">
                  <img
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 flex-1">
                  {feature.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
