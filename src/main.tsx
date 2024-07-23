import { CssBaseline, ThemeProvider } from '@mui/material';
import BreakpointsProvider from 'providers/useBreakPoint';
import React from 'react';
import ReactDOM from 'react-dom/client';
import AppRouter from 'routes/router.tsx';
import { theme } from 'theme/theme.ts';
import { AuthProvider } from 'providers/useAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <BreakpointsProvider>
        <CssBaseline />
        <AuthProvider>
          <AppRouter />
        </AuthProvider>
        <ToastContainer />
      </BreakpointsProvider>
    </ThemeProvider>
  </React.StrictMode>,
);
