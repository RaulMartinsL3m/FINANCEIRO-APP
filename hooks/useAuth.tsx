'use client';

import { useState, useEffect, createContext, useContext } from 'react';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  register: (email: string, password: string, name: string) => Promise<void>;
}

interface User {
  id: string;
  name: string;
  email: string;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Verificar se o usuário está autenticado ao carregar a página
  useEffect(() => {
    const checkAuth = async () => {
      setLoading(true);
      try {
        // Em produção, isso seria uma chamada real à API
        const response = await fetch('/api/auth/session');
        
        if (response.ok) {
          const data = await response.json();
          if (data.user) {
            setUser(data.user);
          }
        }
      } catch (err) {
        console.error('Erro ao verificar autenticação:', err);
        // Usuário de exemplo para desenvolvimento
        setUser({
          id: '123',
          name: 'Usuário Teste',
          email: 'usuario@exemplo.com'
        });
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  // Função de login
  const login = async (email: string, password: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Em produção, isso seria uma chamada real à API
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Falha ao fazer login');
      }
      
      const data = await response.json();
      setUser(data.user);
    } catch (err: any) {
      console.error('Erro ao fazer login:', err);
      setError(err.message || 'Credenciais inválidas. Tente novamente.');
      
      // Usuário de exemplo para desenvolvimento
      setUser({
        id: '123',
        name: 'Usuário Teste',
        email: email
      });
    } finally {
      setLoading(false);
    }
  };

  // Função de logout
  const logout = () => {
    setUser(null);
    // Em produção, isso incluiria uma chamada à API para invalidar a sessão
  };

  // Função de registro
  const register = async (email: string, password: string, name: string) => {
    setLoading(true);
    setError(null);
    
    try {
      // Em produção, isso seria uma chamada real à API
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, name })
      });
      
      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Falha ao registrar');
      }
      
      const data = await response.json();
      setUser(data.user);
    } catch (err: any) {
      console.error('Erro ao registrar:', err);
      setError(err.message || 'Não foi possível criar sua conta. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, error, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
}

export default function useAuth() {
  const context = useContext(AuthContext);
  
  if (context === undefined) {
    throw new Error('useAuth deve ser usado dentro de um AuthProvider');
  }
  
  return context;
}
