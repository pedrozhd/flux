import React from 'react';
import { Zap, TrendingUp } from 'lucide-react';
import { Button } from '../shared/Button';
import careerPredictorVisual from '../../assets/career-predictor-visual.png';

interface HeroProps {
  onScrollToPredictor: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onScrollToPredictor }) => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-accent-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Zap className="w-4 h-4" />
              <span className="text-sm font-semibold">Tecnologia de IA Preditiva</span>
            </div>

            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              O Futuro do Trabalho é <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Agora</span>
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Descubra profissões emergentes antes que elas se tornem mainstream. FLUX usa IA para analisar tendências globais e ajudá-lo a navegar transições de carreira com confiança.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                variant="primary"
                size="lg"
                onClick={onScrollToPredictor}
              >
                <TrendingUp className="w-5 h-5" />
                Descobrir Minha Carreira
              </Button>
              <Button
                variant="outline"
                size="lg"
              >
                Saiba Mais
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-12 pt-8 border-t border-gray-200">
              <div>
                <p className="text-3xl font-bold text-primary-600">10K+</p>
                <p className="text-sm text-gray-600">Profissionais</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-accent-600">500+</p>
                <p className="text-sm text-gray-600">Profissões</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary-600">95%</p>
                <p className="text-sm text-gray-600">Satisfação</p>
              </div>
            </div>
          </div>

          {/* Illustration */}
          <div className="hidden lg:flex items-center justify-center animate-slideInRight">
            <img
              src={careerPredictorVisual}
              alt="Career Predictor Visual"
              className="w-full max-h-80 rounded-3xl shadow-2xl object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
