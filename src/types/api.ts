const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://flux-api-moxp.onrender.com';

export interface LoginRequest {
  email: string;
  senha: string;
}

export interface SignUpRequest {
  email: string;
  senha: string;
  nomeCompleto: string;
}

export interface AuthResponse {
    idUsuario: number;
    email: string;
    senha: string;
    nomeCompleto?: string;
}

export const authApi = {
  // Login
  async login(data: LoginRequest): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/flux/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erro ao fazer login. Tente novamente.');
    }

    return response.json();
  },

  // Cadastro
  async signUp(data: SignUpRequest): Promise<AuthResponse> {
    const response = await fetch(`${API_BASE_URL}/flux/usuarios`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Erro ao criar conta. Tente novamente.');
    }

    return response.json();
  },
};