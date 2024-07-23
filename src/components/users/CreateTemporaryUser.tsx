import { useState } from 'react';
import { Card, CardContent, Stack, TextField, Button } from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { useTempUser } from 'providers/useTempUser';
import dayjs, { Dayjs } from 'dayjs';
import { postData } from 'services/apiService';

interface formType {
  name: string;
  login_code: string;
  expired_date: Dayjs | null;
}

const defaultForm: formType = {
  name: '',
  login_code: '',
  expired_date: null,
};

const CreateTemporaryUser = () => {
  const { handleReload } = useTempUser();

  const [form, setForm] = useState(defaultForm);

  const handleGenerate = async () => {
    const { status } = await postData('/user/add-tempuser', {
      ...form,
      expired_date: dayjs(form.expired_date).format('YYYY-MM-DD'),
    });
    if (status) {
      handleReload();
      setForm(defaultForm);
    }
    handleReload();
  };

  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Stack direction={{ sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
          <TextField
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            id="name"
            label="Full Name"
            variant="outlined"
            sx={{ pt: '6px' }}
          />
          <TextField
            value={form.login_code}
            onChange={(e) => setForm({ ...form, login_code: e.target.value.toUpperCase() })}
            id="code"
            label="Code"
            variant="outlined"
            sx={{ pt: '6px' }}
          />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DemoItem label={'Expired Date'}>
                <DatePicker
                  value={dayjs(form.expired_date)}
                  onChange={(newVal) => setForm({ ...form, expired_date: dayjs(newVal) })}
                />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          <Button variant="outlined" onClick={handleGenerate}>
            Generate
          </Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CreateTemporaryUser;
