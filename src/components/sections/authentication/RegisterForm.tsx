import { Box, Button, Link, Stack, TextField } from '@mui/material';

const RegisterForm = () => {
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
        />
        <Button
          color="primary"
          variant="contained"
          size="large"
          fullWidth
          component={Link}
          href="#!"
          type="submit"
        >
          Sign Up
        </Button>
      </Stack>
    </Box>
  );
};

export default RegisterForm;
