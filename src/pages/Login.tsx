import React, { useState } from 'react';
import { LogIn } from 'lucide-react';
import { Button } from '../components/shared/Button';
import { Input } from '../components/shared/Input';
import { useAuth } from '../hooks/useAuth';

interface LoginProps {
  onLoginSuccess: () => void;
}

export const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const { login } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSignUp, setIsSignUp] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!email.trim()) {
      newErrors.email = 'Email é obrigatório';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Email inválido';
    }

    if (!password.trim()) {
      newErrors.password = 'Senha é obrigatória';
    } else if (password.length < 6) {
      newErrors.password = 'Senha deve ter no mínimo 6 caracteres';
    }

    if (isSignUp && !name.trim()) {
      newErrors.name = 'Nome é obrigatório';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsLoading(true);

    try {
      // Simular delay de API
      await new Promise(resolve => setTimeout(resolve, 1000));

      // Fazer login
      login(email, isSignUp ? name : email.split('@')[0]);

      // Limpar formulário
      setEmail('');
      setPassword('');
      setName('');
      setErrors({});

      // Callback de sucesso
      onLoginSuccess();
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      setErrors({ submit: 'Erro ao fazer login. Tente novamente.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen pt-20 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary-50 via-white to-accent-50">
      <div className="max-w-md mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fadeIn">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary-600 to-accent-600 rounded-full mb-4">
            <LogIn className="w-8 h-8 text-white" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-2">
            {isSignUp ? 'Criar Conta' : 'Bem-vindo'}
          </h1>
          <p className="text-gray-600">
            {isSignUp
              ? 'Crie sua conta para começar a explorar carreiras'
              : 'Faça login para acessar sua conta FLUX'}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-2xl shadow-xl p-8 animate-slideIn">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Erro geral */}
            {errors.submit && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-700 text-sm font-semibold">{errors.submit}</p>
              </div>
            )}

            {/* Nome (apenas Sign Up) */}
            {isSignUp && (
              <Input
                label="Nome Completo"
                type="text"
                name="name"
                value={name}
                onChange={(value) => {
                  setName(value);
                  if (errors.name) {
                    setErrors({ ...errors, name: '' });
                  }
                }}
                placeholder="Seu nome"
                error={errors.name}
              />
            )}

            {/* Email */}
            <Input
              label="Email"
              type="email"
              name="email"
              value={email}
              onChange={(value) => {
                setEmail(value);
                if (errors.email) {
                  setErrors({ ...errors, email: '' });
                }
              }}
              placeholder="seu@email.com"
              error={errors.email}
            />

            {/* Senha */}
            <Input
              label="Senha"
              type="password"
              name="password"
              value={password}
              onChange={(value) => {
                setPassword(value);
                if (errors.password) {
                  setErrors({ ...errors, password: '' });
                }
              }}
              placeholder="••••••••"
              error={errors.password}
            />

            {/* Submit Button */}
            <Button
              variant="primary"
              size="lg"
              type="submit"
              loading={isLoading}
              className="w-full"
            >
              {isLoading
                ? 'Carregando...'
                : isSignUp
                ? 'Criar Conta'
                : 'Fazer Login'}
            </Button>

            {/* Toggle Sign Up / Login */}
            <div className="text-center pt-4 border-t border-gray-200">
              <p className="text-gray-600 text-sm mb-2">
                {isSignUp
                  ? 'Já tem uma conta?'
                  : 'Não tem uma conta?'}
              </p>
              <button
                type="button"
                onClick={() => {
                  setIsSignUp(!isSignUp);
                  setErrors({});
                  setEmail('');
                  setPassword('');
                  setName('');
                }}
                className="text-primary-600 font-semibold hover:text-primary-700 transition-colors"
              >
                {isSignUp ? 'Fazer Login' : 'Criar Conta'}
              </button>
            </div>
          </form>

          {/* Demo Info */}
          <div className="mt-8 p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-blue-900 text-xs font-semibold mb-2">Demo:</p>
            <p className="text-blue-800 text-xs">
              Use qualquer email e senha (mín. 6 caracteres) para testar. Os dados são salvos localmente.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
