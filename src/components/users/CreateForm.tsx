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
import { toast } from 'react-toastify';
import { postData } from 'services/apiService';
import { useUser } from 'providers/useUser';

const defaultForm = {
  name: '',
  email: '',
  password: '123456',
  status: '',
};

const CreateForm = ({ handleClose }: { handleClose: any }) => {
  const { handleReload } = useUser();

  const [form, setForm] = useState(defaultForm);

  const handleSave = async () => {
    const { status, message } = await postData('/user/add', form);
    if (status) {
      handleReload();
      handleClose();
      setForm(defaultForm);

      toast.success(message);
    }
  };

  const handleCancel = () => {
    setForm(defaultForm);
    handleClose();
  };

  return (
    <Box>
      <Typography variant="h2" component="h3" sx={{ textAlign: 'center' }}>
        Add New User
      </Typography>

      <Box sx={{ position: 'relative', zIndex: 100 }}>
        <TextField
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          id="name"
          label="Name"
          variant="outlined"
          sx={{ mt: 2 }}
          fullWidth
        />
        <TextField
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          id="email"
          label="Email"
          variant="outlined"
          sx={{ mt: 2 }}
          fullWidth
        />
      </Box>

      <FormControl fullWidth sx={{ mt: 2 }}>
        <InputLabel id="status-label">Status</InputLabel>
        <Select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
          labelId="status-label"
          id="status-select"
          label="status"
          sx={{ height: '40px' }}
        >
          <MenuItem value={'active'}>Active</MenuItem>
          <MenuItem value={'pending'}>Pending</MenuItem>
        </Select>
      </FormControl>

      <Stack direction="row" spacing={2} sx={{ mt: 3 }}>
        <Button onClick={handleSave} variant="contained" fullWidth>
          Save
        </Button>
        <Button onClick={handleCancel} variant="outlined" fullWidth>
          Cancel
        </Button>
      </Stack>
    </Box>
  );
};

export default CreateForm;
