import { Navigate } from 'react-router-dom';
import { useAuth } from 'providers/useAuth';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/authentication/login" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
