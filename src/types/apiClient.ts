// Helper para fazer requests autenticadas
export const fetchWithAuth = async (url: string, options: RequestInit = {}) => {
  const authData = localStorage.getItem('flux_auth');
  let token: string | null = null;

  if (authData) {
    try {
      const parsed = JSON.parse(authData);
      token = parsed.token;
    } catch (error) {
      console.error('Erro ao ler token:', error);
    }
  }

  const headers = {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  // Se erro, limpar auth e redirecionar para login
  if (response.status === 401 || response.status === 403) {
    localStorage.removeItem('flux_auth');
    window.location.href = '/login';
    throw new Error('Sessão expirada');
  }

  return response;
};