import { useState, useEffect, useCallback } from 'react';
import { authApi } from '../types/api';

const AUTH_CHANGE_EVENT = 'auth_change';

interface StoredAuth {
  idUsuario?: number;
  id?: number;
  email: string;
  senha: string;
  nomeCompleto?: string;
}

export const useAuth = () => {
  const [auth, setAuth] = useState<StoredAuth | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  const loadAuth = useCallback(() => {
    const stored = localStorage.getItem('flux_auth');
    if (stored) {
      try {
        const parsed: StoredAuth = JSON.parse(stored);
        setAuth(parsed);
      } catch (error) {
        console.error('Erro ao carregar auth:', error);
        localStorage.removeItem('flux_auth');
        setAuth(null);
      }
    } else {
      setAuth(null);
    }
  }, []);

  useEffect(() => {
    loadAuth();
    setIsLoading(false);

    const handler = () => loadAuth();
    window.addEventListener(AUTH_CHANGE_EVENT, handler);
    window.addEventListener('storage', handler);

    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, handler);
      window.removeEventListener('storage', handler);
    };
  }, [loadAuth]);

  // LOGIN
  const login = async (email: string, senha: string) => {
    const response = await authApi.login({ email, senha });

    const authData: StoredAuth = {
      idUsuario: response.idUsuario,
      email: response.email,
      senha: response.senha,
      nomeCompleto: response.nomeCompleto,
    };

    localStorage.setItem('flux_auth', JSON.stringify(authData));
    setAuth(authData);

    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  };

  // CADASTRO
  const signUp = async (email: string, senha: string, nomeCompleto: string) => {
    const response = await authApi.signUp({ email, senha, nomeCompleto });

    const authData: StoredAuth = {
      id: response.idUsuario,
      email: response.email,
      senha: response.senha,
      nomeCompleto: response.nomeCompleto,
    };

    localStorage.setItem('flux_auth', JSON.stringify(authData));
    setAuth(authData);

    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  };

  const logout = () => {
    localStorage.removeItem('flux_auth');
    setAuth(null);
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  };

  return {
    auth,
    isLoading,
    isAuthenticated: !!auth,
    login,
    signUp,
    logout,
  };
};
