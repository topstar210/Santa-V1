import { useState } from 'react';
import {
  Box,
  FormControl,
  TextField,
  InputLabel,
  Select,
  MenuItem,
  Typography,
  Button,
  Stack,
} from '@mui/material';
import { SelectChangeEvent } from '@mui/material/Select';

const CreateForm = () => {
  const [status, setStatus] = useState('active');
  const handleChange = (event: SelectChangeEvent) => {
    setStatus(event.target.value as string);
  };

  return (
    <Box>
      <Typography variant="h2" component="h3" sx={{ textAlign: 'center' }}>
        Add New User
      </Typography>

      <Box sx={{ position: 'relative', zIndex: 100 }}>
        <TextField id="name" label="Name" variant="outlined" sx={{ mt: 2 }} fullWidth />
        <TextField id="email" label="Email" variant="outlined" sx={{ mt: 2 }} fullWidth />
      </Box>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          labelId="status-label"
          id="status-select"
          value={status}
          label="status"
          onChange={handleChange}
          sx={{ height: '40px' }}
        >
          <MenuItem value={'active'}>Active</MenuItem>
          <MenuItem value={'pending'}>Pending</MenuItem>
        </Select>
      </FormControl>

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button variant="contained" fullWidth>
          Save
        </Button>
        <Button variant="outlined" fullWidth>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateForm;
