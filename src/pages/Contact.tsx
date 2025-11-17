import React, { useState } from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { Input } from '../components/shared/Input';
import { Modal } from '../components/shared/Modal';
import { useForm } from '../hooks/useForm';
import type { ContactFormData } from '../types';

const validateForm = (values: ContactFormData) => {
  const errors: Record<string, string> = {};

  if (!values.name.trim()) {
    errors.name = 'Nome é obrigatório';
  }

  if (!values.email.trim()) {
    errors.email = 'Email é obrigatório';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    errors.email = 'Email inválido';
  }

  if (!values.subject || !values.subject.trim()) {
    errors.subject = 'Assunto é obrigatório';
  }

  if (!values.message.trim()) {
    errors.message = 'Mensagem é obrigatória';
  } else if (values.message.trim().length < 20) {
    errors.message = 'Mensagem deve ter no mínimo 20 caracteres';
  }

  return errors;
};

export const Contact: React.FC = () => {
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const { values, errors, touched, isSubmitting, handleChange, handleBlur, handleSubmit, resetForm } =
    useForm<ContactFormData>(
      {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      },
      async (values) => {
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        console.log('Form submitted:', values);
        setIsSuccessModalOpen(true);
        resetForm();
      },
      validateForm
    );

  const subjects = [
    'Dúvidas sobre o produto',
    'Parcerias',
    'Suporte técnico',
    'Feedback',
    'Outro'
  ];

  return (
    <main className="pt-20">
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="animate-fadeIn">
              <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
                Entre em Contato
              </h1>
              <p className="text-lg text-gray-600 mb-8">
                Tem dúvidas? Estamos aqui para ajudar. Entre em contato conosco e responderemos o mais rápido possível.
              </p>

              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                    <p className="text-gray-600">contato@flux.com</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Telefone</h3>
                    <p className="text-gray-600">+55 (11) 3000-0000</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">Localização</h3>
                    <p className="text-gray-600">São Paulo, Brasil</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2 animate-slideInRight">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Nome Completo"
                    type="text"
                    name="name"
                    value={values.name}
                    onChange={(value) => handleChange({ target: { name: 'name', value } } as any)}
                    onBlur={() => handleBlur({ target: { name: 'name' } } as any)}
                    error={touched.name ? errors.name : undefined}
                    placeholder="Seu nome"
                    required
                  />

                  <Input
                    label="Email"
                    type="email"
                    name="email"
                    value={values.email}
                    onChange={(value) => handleChange({ target: { name: 'email', value } } as any)}
                    onBlur={() => handleBlur({ target: { name: 'email' } } as any)}
                    error={touched.email ? errors.email : undefined}
                    placeholder="seu@email.com"
                    required
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Input
                    label="Telefone (Opcional)"
                    type="tel"
                    name="phone"
                    value={values.phone || ''}
                    onChange={(value) => handleChange({ target: { name: 'phone', value } } as any)}
                    placeholder="(11) 9999-9999"
                  />

                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-semibold text-gray-700">
                      Assunto <span className="text-red-500">*</span>
                    </label>
                    <select
                      name="subject"
                      value={values.subject || ''}
                      onChange={(e) => handleChange(e as any)}
                      onBlur={() => handleBlur({ target: { name: 'subject' } } as any)}
                      className={`px-4 py-2.5 border-2 rounded-lg transition-colors focus:outline-none ${
                        touched.subject && errors.subject
                          ? 'border-red-500 focus:border-red-600'
                          : 'border-gray-300 focus:border-primary-600'
                      }`}
                    >
                      <option value="">Selecione um assunto</option>
                      {subjects.map(subject => (
                        <option key={subject} value={subject}>
                          {subject}
                        </option>
                      ))}
                    </select>
                    {touched.subject && errors.subject && (
                      <span className="text-sm text-red-500">{errors.subject}</span>
                    )}
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-semibold text-gray-700">
                    Mensagem <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={values.message}
                    onChange={(e) => handleChange(e as any)}
                    onBlur={() => handleBlur({ target: { name: 'message' } } as any)}
                    placeholder="Sua mensagem aqui..."
                    rows={6}
                    className={`px-4 py-2.5 border-2 rounded-lg transition-colors focus:outline-none resize-none ${
                      touched.message && errors.message
                        ? 'border-red-500 focus:border-red-600'
                        : 'border-gray-300 focus:border-primary-600'
                    }`}
                  />
                  {touched.message && errors.message && (
                    <span className="text-sm text-red-500">{errors.message}</span>
                  )}
                  <span className="text-xs text-gray-500">
                    {values.message.length}/500 caracteres
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="newsletter"
                    className="w-4 h-4 rounded border-gray-300 text-primary-600 focus:ring-primary-600 cursor-pointer"
                  />
                  <label htmlFor="newsletter" className="text-sm text-gray-600 cursor-pointer">
                    Aceito receber novidades e atualizações do FLUX
                  </label>
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  loading={isSubmitting}
                  disabled={isSubmitting}
                  className="w-full"
                >
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Success Modal */}
      <Modal
        isOpen={isSuccessModalOpen}
        onClose={() => setIsSuccessModalOpen(false)}
        title="Mensagem Enviada!"
      >
        <div className="text-center py-6">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-2">Obrigado!</h3>
          <p className="text-gray-600 mb-6">
            Sua mensagem foi enviada com sucesso. Responderemos em breve.
          </p>
          <Button
            variant="primary"
            onClick={() => setIsSuccessModalOpen(false)}
          >
            Fechar
          </Button>
        </div>
      </Modal>
    </main>
  );
};
