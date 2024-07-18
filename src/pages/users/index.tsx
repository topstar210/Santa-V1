import { useState } from 'react';
import { Box, Grid, Button, Modal } from '@mui/material';
import PageHeader from 'components/common/PageHeader';
import StatisticsCards from 'components/sections/dashboard/statistics/StatisticCards';
import RegisteredTable from 'components/users/Registered';
import CreateForm from 'components/users/CreateForm';

const Modalstyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const RegisteredUsers = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Box
      sx={{
        pb: 1,
      }}
    >
      <PageHeader>Registered Users</PageHeader>
      {/* /* ------------- Stats section ---------------- */}
      <Grid container spacing={3} mt={1} mb={3}>
        <Grid item xs={12} lg={12}>
          <StatisticsCards />
        </Grid>
      </Grid>

      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={12}>
          <Button onClick={handleOpen} variant="outlined" color="primary" size="large">
            Add New User
          </Button>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={Modalstyle}>
              <CreateForm />
            </Box>
          </Modal>

          <RegisteredTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisteredUsers;
