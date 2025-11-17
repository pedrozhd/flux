import React, { useState } from 'react';
import { Card } from '../shared/Card';
import pedroFoto from '../../assets/pedrofoto.jpg';
import olavaFoto from '../../assets/olavofoto.jpg';
import luizFoto from '../../assets/luizfoto.jpg';
import { Mail, Linkedin, Github } from 'lucide-react';

const teamMembers = [
  {
    name: 'Pedro Henrique Dias França',
    rm: 'RM561940',
    role: 'Desenvolvedor Full Stack',
    bio: 'Especialista em React e TypeScript, responsável pela arquitetura frontend',
    image: pedroFoto,
    email: 'pedro.franca@fiap.com.br',
    linkedin: 'linkedin.com/in/pedrofranca',
    github: 'github.com/pedrozhd',
    skills: ['React', 'TypeScript', 'Node.js', 'Tailwind CSS', 'Git'],
    experience: '2 anos em desenvolvimento web',
    hobby: 'Contribuir em projetos open source'
  },
  {
    name: 'Olavo Porto Neves',
    rm: 'RM563558',
    role: 'Desenvolvedor Frontend',
    bio: 'Focado em UI/UX e componentes interativos, garantindo melhor experiência do usuário',
    image: olavaFoto,
    email: 'olavo.neves@fiap.com.br',
    linkedin: 'linkedin.com/in/olavoneves',
    github: 'github.com/olavoneves',
    skills: ['React', 'CSS', 'JavaScript', 'Figma', 'Accessibility'],
    experience: '1.5 anos em design e frontend',
    hobby: 'Design de interfaces modernas'
  },
  {
    name: 'Luiz Gustavo Gonçalves',
    rm: 'RM564495',
    role: 'Desenvolvedor Backend',
    bio: 'Especialista em arquitetura de sistemas e integração de APIs',
    image: luizFoto,
    email: 'luiz.gustavo@fiap.com.br',
    linkedin: 'linkedin.com/in/luizgustavo',
    github: 'github.com/luizgustavo',
    skills: ['Node.js', 'Python', 'SQL', 'Docker', 'AWS'],
    experience: '2.5 anos em desenvolvimento backend',
    hobby: 'Otimização de performance'
  }
];

export const Team: React.FC = () => {
  const [flipped, setFlipped] = useState<{ [key: number]: boolean }>({});

  const toggleFlip = (index: number) => {
    setFlipped(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

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
          <p className="text-sm text-gray-500 mt-2">
            Clique nos cards para saber mais sobre cada integrante
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="h-96 cursor-pointer perspective animate-fadeIn"
              style={{ animationDelay: `${index * 100}ms` }}
              onClick={() => toggleFlip(index)}
            >
              <div
                className="relative w-full h-full transition-transform duration-500"
                style={{
                  transformStyle: 'preserve-3d',
                  transform: flipped[index] ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
              >
                {/* Front */}
                <div
                  className="absolute w-full h-full"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <Card hover className="text-center h-full flex flex-col justify-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden shadow-lg border-4 border-primary-200">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">
                      {member.name}
                    </h3>
                    <p className="text-xs font-semibold text-accent-600 mb-2">
                      {member.rm}
                    </p>
                    <p className="text-sm font-semibold text-primary-600 mb-3">
                      {member.role}
                    </p>
                    <p className="text-sm text-gray-600">
                      {member.bio}
                    </p>
                  </Card>
                </div>

                {/* Back */}
                <div
                  className="absolute w-full h-full"
                  style={{
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <Card className="h-full flex flex-col justify-between bg-gradient-to-br from-primary-50 to-accent-50">
                    <div>
                      <h3 className="text-lg font-bold text-gray-900 mb-4">
                        {member.name}
                      </h3>

                      {/* Contact Info */}
                      <div className="space-y-2 mb-4">
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Mail className="w-4 h-4 text-primary-600" />
                          <span className="truncate">{member.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Linkedin className="w-4 h-4 text-primary-600" />
                          <span className="truncate">{member.linkedin}</span>
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-700">
                          <Github className="w-4 h-4 text-primary-600" />
                          <span className="truncate">{member.github}</span>
                        </div>
                      </div>

                      {/* Experience */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-600 mb-1">Experiência</p>
                        <p className="text-sm text-gray-700">{member.experience}</p>
                      </div>

                      {/* Hobby */}
                      <div className="mb-4">
                        <p className="text-xs font-semibold text-gray-600 mb-1">Paixão</p>
                        <p className="text-sm text-gray-700">{member.hobby}</p>
                      </div>

                      {/* Skills */}
                      <div>
                        <p className="text-xs font-semibold text-gray-600 mb-2">Skills</p>
                        <div className="flex flex-wrap gap-1">
                          {member.skills.map(skill => (
                            <span
                              key={skill}
                              className="bg-primary-200 text-primary-800 px-2 py-1 rounded text-xs font-semibold"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    <p className="text-xs text-gray-500 text-center pt-4 border-t border-gray-200">
                      Clique para voltar
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
