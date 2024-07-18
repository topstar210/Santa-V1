import { Card, CardContent, Stack, TextField, Button } from '@mui/material';
import { DemoContainer, DemoItem } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const CreateTemporaryUser = () => {
  return (
    <Card sx={{ mb: 2 }}>
      <CardContent>
        <Stack direction={{ sm: 'column', md: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }}>
          <TextField id="name" label="Full Name" variant="outlined" sx={{ pt: '6px' }} />
          <TextField id="name" label="Code" variant="outlined" sx={{ pt: '6px' }} />
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DatePicker']}>
              <DemoItem label={'Expired Date'}>
                <DatePicker />
              </DemoItem>
            </DemoContainer>
          </LocalizationProvider>
          <Button variant="outlined">Generate</Button>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CreateTemporaryUser;
