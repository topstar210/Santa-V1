import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { postData } from 'services/apiService';

interface AuthContextType {
  isAuthenticated: boolean;
  login: (credentials: { email: string; password: string }) => void;
  logout: () => void;
}

let isMounted = true;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    if (!isMounted) return;

    const getData = async () => {
      try {
        const { data, status } = await postData('/refresh', '');
        const { access_token } = data;
        console.log('token refresh === >>> ', access_token, status);

        localStorage.setItem('token', access_token);
        setIsAuthenticated(status);
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };

    getData();
    isMounted = false;
  }, []);

  const login = async (credentials: { email: string; password: string }) => {
    try {
      const { data, message, status } = await postData('/login', credentials);
      const { access_token, user } = data;
      console.log('data', message, user, access_token);

      // Store the token in local storage
      localStorage.setItem('token', access_token);

      setIsAuthenticated(status);
      return status;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const logout = async () => {
    await postData('/logout', '');

    localStorage.removeItem('token');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
