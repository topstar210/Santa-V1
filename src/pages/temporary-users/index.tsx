import { Box, Grid } from '@mui/material';
import PageHeader from 'components/common/PageHeader';
import StatisticsCards from 'components/sections/dashboard/statistics/StatisticCards';
import TemporaryTable from 'components/users/Temporary';
import CreateTemporaryUser from 'components/users/CreateTemporaryUser';

const TemporaryUsers = () => {
  return (
    <Box
      sx={{
        pb: 1,
      }}
    >
      <PageHeader>Dashboard</PageHeader>
      {/* /* ------------- Stats section ---------------- */}
      <Grid container spacing={3} mt={1} mb={3}>
        <Grid item xs={12} lg={12}>
          <StatisticsCards />
        </Grid>
      </Grid>

      <Grid container spacing={3} mb={3}>
        <Grid item xs={12} lg={12}>
          <CreateTemporaryUser />

          <TemporaryTable />
        </Grid>
      </Grid>
    </Box>
  );
};

export default TemporaryUsers;
