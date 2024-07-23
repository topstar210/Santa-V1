import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'providers/useAuth';

interface AuthGuardProps {
  children: React.ReactNode;
}

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const location = useLocation();
  const { pathname } = location;

  const { isAuthenticated } = useAuth();

  const isAuthenticatedPath = pathname.includes('authentication');

  if (!isAuthenticated && !isAuthenticatedPath) {
    return <Navigate to="/authentication/login" replace />;
  } else if (isAuthenticated && isAuthenticatedPath) {
    return <Navigate to="/" replace />;
  }

  return <>{children}</>;
};

export default AuthGuard;
