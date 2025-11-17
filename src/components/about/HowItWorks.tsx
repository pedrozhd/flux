import React from 'react';
import timelineProfile from '../../assets/timeline-profile.png';
import timelineMatching from '../../assets/timeline-matching.png';
import timelineRoadmap from '../../assets/timeline-roadmap.png';
import pillarPrediction from '../../assets/pillar-prediction.png';

const steps = [
  {
    image: timelineProfile,
    title: 'Análise de Perfil',
    description: 'Você insere suas skills atuais e informações profissionais'
  },
  {
    image: timelineMatching,
    title: 'Matching Inteligente',
    description: 'Nossa IA analisa seus dados contra milhões de vagas e tendências'
  },
  {
    image: timelineRoadmap,
    title: 'Roadmap Personalizado',
    description: 'Receba um plano de ação customizado para sua transição de carreira'
  },
  {
    image: pillarPrediction,
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
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full max-h-48 object-contain rounded-lg"
                          />
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-center">
                          <img
                            src={step.image}
                            alt={step.title}
                            className="w-full max-h-48 object-contain rounded-lg"
                          />
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
                  <div className="md:hidden flex flex-col gap-6">
                    <div className="w-full">
                      <img
                        src={step.image}
                        alt={step.title}
                        className="w-full max-h-40 object-contain rounded-lg mb-4"
                      />
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
