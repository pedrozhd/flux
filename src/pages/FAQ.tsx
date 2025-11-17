import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';
import { Card } from '../components/shared/Card';
import { AccordionItem } from '../components/faq/AccordionItem';
import { faqs } from '../data/faqs';

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredFaqs = useMemo(() => {
    if (!searchTerm) return faqs;

    return faqs.filter(faq =>
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <main className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 to-accent-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fadeIn">
            <h1 className="text-5xl sm:text-6xl font-bold text-gray-900 mb-4">
              Perguntas Frequentes
            </h1>
            <p className="text-xl text-gray-600">
              Encontre respostas para suas dúvidas sobre FLUX
            </p>
          </div>

          {/* Search Bar */}
          <div className="relative mb-8 animate-slideIn">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Buscar perguntas..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-primary-600 transition-colors"
            />
          </div>

          {/* Accordion */}
          <Card className="animate-fadeIn">
            {filteredFaqs.length > 0 ? (
              <div className="divide-y divide-gray-200">
                {filteredFaqs.map(faq => (
                  <AccordionItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openId === faq.id}
                    onToggle={() =>
                      setOpenId(openId === faq.id ? null : faq.id)
                    }
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <p className="text-gray-600 text-lg">
                  Nenhuma pergunta encontrada. Tente outro termo de busca.
                </p>
              </div>
            )}
          </Card>

          {/* CTA */}
          <div className="mt-12 text-center animate-fadeIn">
            <p className="text-gray-600 mb-4">
              Não encontrou sua pergunta?
            </p>
            <button className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transition-colors">
              Entre em Contato
            </button>
          </div>
        </div>
      </section>
    </main>
  );
};
