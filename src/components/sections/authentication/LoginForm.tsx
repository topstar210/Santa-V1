import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormGroup,
  IconButton,
  InputAdornment,
  Link,
  Stack,
  TextField,
  Typography,
} from '@mui/material';
import IconifyIcon from 'components/base/IconifyIcon';
import { useState } from 'react';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  return (
    <Box
      sx={{
        mt: { sm: 5, xs: 2.5 },
      }}
    >
      <Stack spacing={3}>
        <TextField fullWidth variant="outlined" id="mail" type="text" label="Email" />
        <TextField
          fullWidth
          variant="outlined"
          id="password"
          type={showPassword ? 'text' : 'password'}
          label="Password"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <IconifyIcon icon="el:eye-close" color="action.active" />
                  ) : (
                    <IconifyIcon icon="el:eye-open" color="action.focus" />
                  )}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
      <FormGroup sx={{ my: 2 }}>
        <FormControlLabel
          control={<Checkbox />}
          label="Keep me signed in"
          sx={{
            color: 'text.secondary',
          }}
        />
      </FormGroup>
      <Button
        color="primary"
        variant="contained"
        size="large"
        fullWidth
        component={Link}
        href="#!"
        type="submit"
        onClick={() => (location.href = '/')}
      >
        Sign In
      </Button>
      <Stack
        sx={{
          textAlign: 'center',
          color: 'text.secondary',
          my: 3,
        }}
      >
        <Link href="/authentication/forgot-password">
          <Typography color="primary" variant="subtitle1">
            Forgot Your Password?
          </Typography>
        </Link>
      </Stack>
    </Box>
  );
};

export default LoginForm;
