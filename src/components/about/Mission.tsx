import React from 'react';
import { Heart } from 'lucide-react';

export const Mission: React.FC = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="animate-fadeIn">
            <div className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full mb-6">
              <Heart className="w-4 h-4" />
              <span className="text-sm font-semibold">Nossa Missão</span>
            </div>

            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Revolucionando Transições de <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Carreira</span>
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              No mundo em rápida transformação, as profissões emergem e desaparecem mais rápido do que nunca. FLUX foi criado para ajudar profissionais como você a navegar esse cenário complexo com confiança.
            </p>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Nossa missão é democratizar o acesso a insights sobre o futuro do trabalho, permitindo que qualquer pessoa, independentemente de sua origem, possa se preparar para as oportunidades de amanhã.
            </p>

            <p className="text-lg text-gray-600 leading-relaxed">
              Acreditamos que o futuro pertence àqueles que conseguem se adaptar, aprender e evoluir. FLUX é seu companheiro nessa jornada.
            </p>
          </div>

          {/* Visual */}
          <div className="hidden lg:flex items-center justify-center animate-slideInRight">
            <div className="relative w-full h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-400 to-accent-400 rounded-3xl opacity-10 blur-2xl" />
              <div className="absolute inset-0 bg-white rounded-3xl shadow-2xl p-8 flex flex-col justify-center items-center">
                <div className="text-6xl mb-4">🚀</div>
                <p className="text-center text-gray-700 font-semibold">
                  Transformando Carreiras, Construindo Futuros
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
