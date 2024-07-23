import { Box, Card, Grid, Stack, Typography } from '@mui/material';
import { IStatisticsCard } from './StatisticCards';

interface StatisticsCardProps {
  cardData: IStatisticsCard;
  index: string;
}

const StatisticsCardItem = ({ cardData }: StatisticsCardProps) => {
  const { title, subtitle, icon: IconComponent } = cardData || {};
  return (
    <>
      <Card
        sx={{
          borderRadius: 4,
        }}
      >
        <Box
          sx={{
            p: 4,
            flexGrow: 1,
          }}
        >
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs={8}>
              <Box ml={0} lineHeight={1}>
                <Typography variant="h5" textTransform="uppercase" color="text.primary">
                  {parseFloat(title)}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" mb={1}>
                  {subtitle}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={4}>
              <Stack direction="row" justifyContent="flex-end" alignItems="center" ml="auto">
                <Box
                  sx={{
                    display: 'grid',
                    width: 56,
                    height: 56,
                    borderRadius: '50%',
                    placeItems: 'center',
                    bgcolor: 'primary.lighter',
                  }}
                >
                  <IconComponent color="primary" />
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Card>
    </>
  );
};

export default StatisticsCardItem;
