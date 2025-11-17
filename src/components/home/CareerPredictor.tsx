import React, { useState, useRef } from 'react';
import { X, Plus, TrendingUp } from 'lucide-react';
import { Button } from '../shared/Button';
import { Card } from '../shared/Card';
import { Modal } from '../shared/Modal';
import { LoadingSpinner } from '../shared/LoadingSpinner';
import { useCareerMatcher } from '../../hooks/useCareerMatcher';
import type { CareerMatch } from '../../types';

const SUGGESTED_SKILLS = [
  'Python', 'JavaScript', 'React', 'TypeScript', 'Machine Learning',
  'Data Analysis', 'SQL', 'AWS', 'Docker', 'Git',
  'Communication', 'Leadership', 'Problem Solving', 'Creativity',
  'Project Management', 'Agile', 'UI/UX Design', 'Blockchain',
  'Cloud Computing', 'DevOps'
];

export const CareerPredictor: React.FC = () => {
  const [skills, setSkills] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [matches, setMatches] = useState<CareerMatch[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCareer, setSelectedCareer] = useState<CareerMatch | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const { findMatches } = useCareerMatcher();

  const handleAddSkill = (skill: string) => {
    if (!skills.includes(skill) && skills.length < 15) {
      setSkills([...skills, skill]);
      setInputValue('');
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setSkills(skills.filter(s => s !== skill));
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      if (inputValue.trim() && !skills.includes(inputValue.trim())) {
        handleAddSkill(inputValue.trim());
      }
    }
  };

  const handleAnalyze = async () => {
    if (skills.length === 0) return;

    setIsLoading(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    const results = findMatches(skills);
    setMatches(results);
    setIsLoading(false);
  };

  const filteredSuggestions = SUGGESTED_SKILLS.filter(
    skill =>
      !skills.includes(skill) &&
      skill.toLowerCase().includes(inputValue.toLowerCase())
  ).slice(0, 5);

  const handleViewDetails = (career: CareerMatch) => {
    setSelectedCareer(career);
    setIsModalOpen(true);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white" id="career-predictor">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 animate-fadeIn">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Analisador de Carreiras
          </h2>
          <p className="text-xl text-gray-600">
            Insira suas skills atuais e descubra as profissões emergentes mais compatíveis com seu perfil
          </p>
        </div>

        <Card className="max-w-2xl mx-auto">
          {/* Skills Input */}
          <div className="mb-6">
            <label className="block text-sm font-semibold text-gray-700 mb-3">
              Suas Skills
            </label>

            {/* Skills Chips */}
            <div className="flex flex-wrap gap-2 mb-4 min-h-[40px]">
              {skills.map(skill => (
                <div
                  key={skill}
                  className="bg-primary-100 text-primary-700 px-3 py-1.5 rounded-full flex items-center gap-2 animate-scaleIn"
                >
                  <span className="text-sm font-semibold">{skill}</span>
                  <button
                    onClick={() => handleRemoveSkill(skill)}
                    className="hover:bg-primary-200 rounded-full p-0.5 transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))}
            </div>

            {/* Input with suggestions */}
            <div className="relative">
              <div className="flex items-center gap-2 border-2 border-gray-300 rounded-lg px-4 py-2 focus-within:border-primary-600 transition-colors">
                <Plus className="w-5 h-5 text-gray-400" />
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Digite uma skill e pressione Enter..."
                  className="flex-1 outline-none text-gray-700"
                />
              </div>

              {/* Suggestions dropdown */}
              {inputValue && filteredSuggestions.length > 0 && (
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border-2 border-gray-300 rounded-lg shadow-lg z-10 animate-slideIn">
                  {filteredSuggestions.map(skill => (
                    <button
                      key={skill}
                      onClick={() => handleAddSkill(skill)}
                      className="w-full text-left px-4 py-2 hover:bg-primary-50 transition-colors first:rounded-t-lg last:rounded-b-lg"
                    >
                      {skill}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <p className="text-xs text-gray-500 mt-2">
              {skills.length}/15 skills adicionadas
            </p>
          </div>

          {/* Analyze Button */}
          <Button
            variant="primary"
            size="lg"
            onClick={handleAnalyze}
            disabled={skills.length === 0 || isLoading}
            loading={isLoading}
            className="w-full"
          >
            {isLoading ? 'Analisando...' : 'Analisar Meu Perfil'}
          </Button>
        </Card>

        {/* Results */}
        {isLoading && (
          <div className="flex justify-center mt-12">
            <LoadingSpinner size="lg" />
          </div>
        )}

        {matches.length > 0 && !isLoading && (
          <div className="mt-12 animate-fadeIn">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Top 5 Profissões Compatíveis
            </h3>

            <div className="grid gap-6">
              {matches.map((career, index) => (
                <Card key={career.id} hover className="relative">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="text-3xl font-bold text-primary-600">
                          #{index + 1}
                        </span>
                        <h4 className="text-xl font-bold text-gray-900">
                          {career.name}
                        </h4>
                      </div>
                      <p className="text-sm text-gray-600 mb-3">
                        {career.description}
                      </p>
                    </div>
                  </div>

                  {/* Match Score */}
                  <div className="mb-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-semibold text-gray-700">
                        Compatibilidade
                      </span>
                      <span className="text-lg font-bold text-primary-600">
                        {career.matchScore}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-primary-600 to-accent-600 h-2 rounded-full transition-all duration-500"
                        style={{ width: `${career.matchScore}%` }}
                      />
                    </div>
                  </div>

                  {/* Skills */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-2">
                        Skills que você tem ✓
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {career.requiredSkills
                          .filter(skill =>
                            skills.some(userSkill =>
                              userSkill.toLowerCase().includes(skill.toLowerCase()) ||
                              skill.toLowerCase().includes(userSkill.toLowerCase())
                            )
                          )
                          .map(skill => (
                            <span
                              key={skill}
                              className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs font-semibold"
                            >
                              {skill}
                            </span>
                          ))}
                      </div>
                    </div>

                    <div>
                      <p className="text-xs font-semibold text-gray-600 mb-2">
                        Skills a desenvolver
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {career.missingSkills.slice(0, 3).map(skill => (
                          <span
                            key={skill}
                            className="bg-orange-100 text-orange-700 px-2 py-1 rounded text-xs font-semibold"
                          >
                            {skill}
                          </span>
                        ))}
                        {career.missingSkills.length > 3 && (
                          <span className="text-xs text-gray-600">
                            +{career.missingSkills.length - 3} mais
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="grid grid-cols-3 gap-4 mb-4 py-4 border-t border-gray-200">
                    <div>
                      <p className="text-xs text-gray-600">Salário Médio</p>
                      <p className="font-bold text-gray-900">{career.avgSalary}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Taxa de Crescimento</p>
                      <p className="font-bold text-green-600">+{career.growthRate}%</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-600">Emergência</p>
                      <p className="font-bold text-primary-600">{career.emergenceScore}/100</p>
                    </div>
                  </div>

                  {/* CTA Button */}
                  <Button
                    variant="outline"
                    size="md"
                    onClick={() => handleViewDetails(career)}
                    className="w-full"
                  >
                    <TrendingUp className="w-4 h-4" />
                    Ver Detalhes
                  </Button>
                </Card>
              ))}
            </div>
          </div>
        )}

        {matches.length === 0 && !isLoading && skills.length > 0 && (
          <div className="text-center mt-12 p-8 bg-gray-50 rounded-lg">
            <p className="text-gray-600">
              Nenhuma profissão encontrada com essas skills. Tente adicionar mais skills!
            </p>
          </div>
        )}
      </div>

      {/* Career Details Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={selectedCareer?.name || ''}
      >
        {selectedCareer && (
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Descrição</h3>
              <p className="text-gray-700">{selectedCareer.description}</p>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Perspectiva Futura</h3>
              <p className="text-gray-700">{selectedCareer.futureOutlook}</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Salário Médio</p>
                <p className="text-2xl font-bold text-blue-600">{selectedCareer.avgSalary}</p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-sm text-gray-600">Crescimento Anual</p>
                <p className="text-2xl font-bold text-green-600">+{selectedCareer.growthRate}%</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 mb-3">Skills Necessárias</h3>
              <div className="flex flex-wrap gap-2">
                {selectedCareer.requiredSkills.map(skill => (
                  <span
                    key={skill}
                    className="bg-primary-100 text-primary-700 px-3 py-1.5 rounded-full text-sm font-semibold"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <Button variant="primary" size="lg" className="w-full">
              Criar Roadmap de Aprendizado
            </Button>
          </div>
        )}
      </Modal>
    </section>
  );
};
