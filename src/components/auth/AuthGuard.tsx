import { Navigate } from 'react-router-dom';
import { useAuth } from 'providers/useAuth'; // Assume you have a custom hook for auth

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  console.log('isAuthenticated ---- >>>> ', isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/authentication/login" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
