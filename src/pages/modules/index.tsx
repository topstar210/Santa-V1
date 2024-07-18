import { Box, Grid } from '@mui/material';
import PageHeader from 'components/common/PageHeader';
import ModuleStatisticsCards from 'components/sections/dashboard/statistics/ModuleStatisticsCards';
import ModuleStatusCards from 'components/sections/dashboard/modulestatus/ModuleStatusCards';

const Modules = () => {
  return (
    <Box
      sx={{
        pb: 1,
      }}
    >
      <PageHeader>Modules</PageHeader>
      {/* /* ------------- Stats section ---------------- */}
      <Grid container spacing={3} mt={1} mb={3}>
        <Grid item xs={12} lg={12}>
          <ModuleStatisticsCards />
        </Grid>
      </Grid>

      <Grid container spacing={3} mb={3}>
        <ModuleStatusCards />
      </Grid>
    </Box>
  );
};

export default Modules;
