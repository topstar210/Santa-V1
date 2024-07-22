import { useState } from 'react';
import { Box, Button, Link, Stack, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'providers/useAuth';

const RegisterForm = () => {
  const { loginByCode } = useAuth();
  const navigate = useNavigate();

  const [code, setCode] = useState('');

  const handleLogin = async () => {
    const isLogin = await loginByCode(code);
    if (isLogin !== null) {
      navigate(`/`);
    }
  };
  return (
    <Box
      sx={{
        mt: { sm: 5, xs: 2.5 },
      }}
    >
      <Stack spacing={3}>
        <TextField
          fullWidth
          variant="outlined"
          id="temporarcode"
          type="text"
          label="Enter temporary code"
          value={code}
          onChange={(e) => setCode(e.target.value.toUpperCase())}
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          href="#!"
          type="submit"
          onClick={() => handleLogin()}
        >
          Log in
        </Button>
      </Stack>
    </Box>
  );
};

export default RegisterForm;
