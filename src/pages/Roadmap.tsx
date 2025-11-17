import React, { useState } from 'react';
import { CheckCircle, Circle, BookOpen, Code, Award, Calendar } from 'lucide-react';
import { Card } from '../components/shared/Card';

interface RoadmapPhase {
  id: string;
  title: string;
  duration: string;
  skills: string[];
  resources: string[];
  completed: boolean;
}

interface RoadmapProps {
  careerName?: string;
}

export const Roadmap: React.FC<RoadmapProps> = ({ careerName = 'Profissão Emergente' }) => {
  const [phases, setPhases] = useState<RoadmapPhase[]>([
    {
      id: '1',
      title: 'Fundamentos',
      duration: '1-2 meses',
      skills: ['Conceitos Básicos', 'Ferramentas Essenciais', 'Boas Práticas'],
      resources: ['Cursos Online', 'Documentação', 'Tutoriais'],
      completed: false
    },
    {
      id: '2',
      title: 'Desenvolvimento Intermediário',
      duration: '2-3 meses',
      skills: ['Projetos Práticos', 'Colaboração', 'Versionamento'],
      resources: ['Projetos Reais', 'Comunidade', 'Mentoria'],
      completed: false
    },
    {
      id: '3',
      title: 'Especialização',
      duration: '2-4 meses',
      skills: ['Técnicas Avançadas', 'Otimização', 'Liderança'],
      resources: ['Certificações', 'Workshops', 'Conferências'],
      completed: false
    },
    {
      id: '4',
      title: 'Consolidação',
      duration: '1-2 meses',
      skills: ['Portfolio', 'Networking', 'Oportunidades'],
      resources: ['Portfólio', 'Entrevistas', 'Networking'],
      completed: false
    }
  ]);

  const togglePhase = (id: string) => {
    setPhases(phases.map(phase =>
      phase.id === id ? { ...phase, completed: !phase.completed } : phase
    ));
  };

  const completedPhases = phases.filter(p => p.completed).length;
  const progress = (completedPhases / phases.length) * 100;

  return (
    <main className="pt-20 pb-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Roadmap de Aprendizado
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              Seu caminho personalizado para {careerName}
            </p>

            {/* Progress Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-semibold text-gray-700">Progresso</span>
                <span className="text-sm font-bold text-primary-600">{Math.round(progress)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-3">
                <div
                  className="bg-gradient-to-r from-primary-600 to-accent-600 h-3 rounded-full transition-all duration-500"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-sm text-gray-600 mt-2">
                {completedPhases} de {phases.length} fases concluídas
              </p>
            </div>
          </div>

          {/* Timeline */}
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Card
                key={phase.id}
                hover
                onClick={() => togglePhase(phase.id)}
              >
                <div className="flex items-start gap-6">
                  {/* Timeline Indicator */}
                  <div className="flex flex-col items-center">
                    {phase.completed ? (
                      <CheckCircle className="w-8 h-8 text-green-600 flex-shrink-0" />
                    ) : (
                      <Circle className="w-8 h-8 text-gray-400 flex-shrink-0" />
                    )}
                    {index < phases.length - 1 && (
                      <div className="w-1 h-16 bg-gray-200 my-2" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className={`text-2xl font-bold mb-2 ${
                          phase.completed ? 'text-gray-500 line-through' : 'text-gray-900'
                        }`}>
                          {phase.title}
                        </h3>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-semibold">{phase.duration}</span>
                        </div>
                      </div>
                      <span className={`px-4 py-2 rounded-full font-semibold text-sm ${
                        phase.completed
                          ? 'bg-green-100 text-green-700'
                          : 'bg-primary-100 text-primary-700'
                      }`}>
                        {phase.completed ? 'Concluído' : 'Em Progresso'}
                      </span>
                    </div>

                    {/* Skills */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <Code className="w-5 h-5 text-primary-600" />
                          <h4 className="font-bold text-gray-900">Skills a Desenvolver</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {phase.skills.map(skill => (
                            <span
                              key={skill}
                              className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                                phase.completed
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-blue-100 text-blue-700'
                              }`}
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div>
                        <div className="flex items-center gap-2 mb-3">
                          <BookOpen className="w-5 h-5 text-accent-600" />
                          <h4 className="font-bold text-gray-900">Recursos</h4>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {phase.resources.map(resource => (
                            <span
                              key={resource}
                              className={`px-3 py-1.5 rounded-full text-sm font-semibold ${
                                phase.completed
                                  ? 'bg-green-100 text-green-700'
                                  : 'bg-purple-100 text-purple-700'
                              }`}
                            >
                              {resource}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Summary */}
          <Card className="mt-12 bg-gradient-to-r from-primary-50 to-accent-50 border-2 border-primary-200">
            <div className="flex items-start gap-6">
              <Award className="w-12 h-12 text-primary-600 flex-shrink-0" />
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Próximos Passos
                </h3>
                <p className="text-gray-700 mb-4">
                  Comece pela primeira fase e marque cada etapa conforme completar. Este roadmap é personalizado para sua jornada em {careerName}.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full" />
                    Dedique 1-2 horas por dia aos estudos
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full" />
                    Pratique com projetos reais
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full" />
                    Conecte-se com a comunidade
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-primary-600 rounded-full" />
                    Revise e adapte conforme necessário
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </div>
      </section>
    </main>
  );
};
