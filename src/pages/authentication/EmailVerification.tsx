import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Container, Typography, CircularProgress, Alert, Button } from '@mui/material';
import { fetchData } from 'services/apiService';

const EmailVerification = () => {
  const { id, hash } = useParams();
  const [status, setStatus] = useState('pending'); // 'pending', 'success', 'error'
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const verifyEmail = async () => {
      try {
        await fetchData(`/email/verify/${id}/${hash}`);
        setStatus('success');
      } catch (error) {
        setStatus('error');
        setErrorMessage(error.response?.data?.message || 'An error occurred');
      }
    };

    verifyEmail();
  }, [id, hash]);

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 5 }}>
      {status === 'pending' && (
        <div>
          <Typography variant="h5" gutterBottom>
            Verifying your email...
          </Typography>
          <CircularProgress />
        </div>
      )}
      {status === 'success' && (
        <div>
          <Typography variant="h5" gutterBottom>
            Your email has been successfully verified!
          </Typography>
          <Button variant="contained" color="primary" href="/">
            Go to Home
          </Button>
        </div>
      )}
      {status === 'error' && (
        <div>
          <Typography variant="h5" gutterBottom>
            Verification Failed
          </Typography>
          <Alert severity="error">{errorMessage}</Alert>
          <Button variant="contained" color="primary" href="/authentication/login">
            Go to Login
          </Button>
        </div>
      )}
    </Container>
  );
};

export default EmailVerification;
