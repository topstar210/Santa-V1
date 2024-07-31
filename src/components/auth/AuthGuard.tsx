import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from 'providers/useAuth';

interface AuthGuardProps {
  children: React.ReactNode;
}

const locationHistory: any = [];

const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
  const location = useLocation();
  locationHistory.push(location);

  const { pathname } = location;

  const { isAuthenticated } = useAuth();

  const isAuthenticatedPath = pathname.includes('authentication');

  if (!pathname.includes('email/verify')) {
    if (!isAuthenticated && !isAuthenticatedPath) {
      return <Navigate to="/authentication/login" replace />;
    } else if (isAuthenticated && isAuthenticatedPath) {
      return <Navigate to={`${locationHistory[0].pathname}${locationHistory[0].search}`} replace />;
    }
  }

  return <>{children}</>;
};

export default AuthGuard;
