import { useState, useEffect, useCallback } from 'react';
import type { User } from '../types';

// Event para sincronizar entre abas
const AUTH_CHANGE_EVENT = 'auth_change';

export const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Carregar usuário do localStorage
  const loadUser = useCallback(() => {
    const storedUser = localStorage.getItem('flux_user');
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Erro ao carregar usuário:', error);
        localStorage.removeItem('flux_user');
        setUser(null);
      }
    } else {
      setUser(null);
    }
  }, []);

  // Carregar usuário ao montar e escutar mudanças
  useEffect(() => {
    loadUser();
    setIsLoading(false);

    // Escutar mudanças de autenticação
    const handleAuthChange = () => {
      loadUser();
    };

    window.addEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
    window.addEventListener('storage', handleAuthChange);

    return () => {
      window.removeEventListener(AUTH_CHANGE_EVENT, handleAuthChange);
      window.removeEventListener('storage', handleAuthChange);
    };
  }, [loadUser]);

  // Login
  const login = (email: string, name: string) => {
    const newUser: User = {
      id: Math.random().toString(36).substr(2, 9),
      email,
      name,
      createdAt: new Date().toISOString()
    };
    localStorage.setItem('flux_user', JSON.stringify(newUser));
    setUser(newUser);
    // Disparar evento para sincronizar
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  };

  // Logout
  const logout = () => {
    localStorage.removeItem('flux_user');
    setUser(null);
    // Disparar evento para sincronizar
    window.dispatchEvent(new Event(AUTH_CHANGE_EVENT));
  };

  return {
    user,
    isLoading,
    login,
    logout,
    isAuthenticated: !!user
  };
};
