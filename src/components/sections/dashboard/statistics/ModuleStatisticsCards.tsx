import { Grid, SvgIconProps } from '@mui/material';
import PersonalSettingsIcon from 'components/icons/menu-icons/PersonalSettingsIcon';
import CustomersIcon from 'components/icons/menu-icons/CustomersIcon';
import StatisticsCardItem from './StatisticsCardItem';

export interface IStatisticsCard {
  id: number;
  title: string;
  subtitle: string;
  icon: (props: SvgIconProps) => JSX.Element;
}

export const stats: IStatisticsCard[] = [
  {
    id: 0,
    icon: CustomersIcon,
    title: '1000',
    subtitle: 'Total Modules',
  },

  {
    id: 1,
    icon: PersonalSettingsIcon,
    title: '700',
    subtitle: 'Completed',
  },
  {
    id: 2,
    icon: PersonalSettingsIcon,
    title: '300',
    subtitle: 'uncompleted',
  },
];

const ModuleStatisticsCards = () => {
  return (
    <Grid container spacing={0.25}>
      {stats.map((cardItem) => {
        return (
          <Grid item sm={12} xl={4} key={cardItem.id}>
            <StatisticsCardItem cardData={cardItem} index={cardItem.id} totalCount={stats.length} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ModuleStatisticsCards;
