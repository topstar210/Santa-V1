import { ReactNode, createContext, useContext, useState, useEffect } from 'react';
import { postData } from 'services/apiService';
import { toast } from 'react-toastify';

interface userType {
  name: string;
  email: string;
  status: string;
  id: number;
  is_admin: number;
}

interface AuthContextType {
  isAuthenticated: boolean;
  user: userType | null;
  login: (credentials: { email: string; password: string }) => void;
  loginByCode: (code: string) => void;
  logout: () => void;
}

let isMounted = true;

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    if (!isMounted) return;

    const getData = async () => {
      try {
        const { data, status } = await postData('/refresh', '');
        const { access_token, user } = data;
        console.log('token refresh === >>> ', access_token, status);

        localStorage.setItem('token', access_token);

        setUser(user);
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

      setUser(user);
      setIsAuthenticated(status);

      if (status) {
        toast.success(message, {
          position: 'top-right',
        });
      }
      return status;
    } catch (error) {
      console.error('Login failed:', error);
      throw error;
    }
  };

  const loginByCode = async (code: string) => {
    try {
      const { data, message, status } = await postData('/login-by-code', { code });
      const { access_token, user } = data;
      console.log('data', message, user, access_token);

      // Store the token in local storage
      localStorage.setItem('token', access_token);

      setUser(user);
      setIsAuthenticated(status);

      if (status) {
        toast.success(message, {
          position: 'top-right',
        });
      } else {
        toast.info(message);
      }
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
    <AuthContext.Provider value={{ isAuthenticated, user, login, loginByCode, logout }}>
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
