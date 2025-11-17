import React from 'react';
import { User, Brain, Map, TrendingUp } from 'lucide-react';

const steps = [
  {
    icon: User,
    title: 'Análise de Perfil',
    description: 'Você insere suas skills atuais e informações profissionais'
  },
  {
    icon: Brain,
    title: 'Matching Inteligente',
    description: 'Nossa IA analisa seus dados contra milhões de vagas e tendências'
  },
  {
    icon: Map,
    title: 'Roadmap Personalizado',
    description: 'Receba um plano de ação customizado para sua transição de carreira'
  },
  {
    icon: TrendingUp,
    title: 'Acompanhamento Contínuo',
    description: 'Atualizações semanais sobre novas oportunidades e tendências'
  }
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Como Funciona
          </h2>
          <p className="text-xl text-gray-600">
            4 passos simples para transformar sua carreira
          </p>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 to-accent-600" />

          <div className="space-y-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;

              return (
                <div key={index} className="relative animate-fadeIn" style={{ animationDelay: `${index * 150}ms` }}>
                  {/* Desktop layout */}
                  <div className="hidden md:grid grid-cols-2 gap-8 items-center">
                    {isEven ? (
                      <>
                        <div className="text-right pr-12">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">
                            {step.description}
                          </p>
                        </div>
                        <div className="flex justify-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center z-10 relative">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-center">
                          <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center z-10 relative">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                        </div>
                        <div className="pl-12">
                          <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            {step.title}
                          </h3>
                          <p className="text-gray-600">
                            {step.description}
                          </p>
                        </div>
                      </>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="md:hidden flex gap-6">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full flex items-center justify-center z-10 relative">
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      {index < steps.length - 1 && (
                        <div className="w-1 h-12 bg-gradient-to-b from-primary-600 to-accent-600 mt-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
