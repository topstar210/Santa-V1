import { Grid, SvgIconProps } from '@mui/material';
import ProductsIcon from 'components/icons/menu-icons/ProductsIcon';
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
    subtitle: 'Total Users',
  },

  {
    id: 1,
    icon: PersonalSettingsIcon,
    title: '700',
    subtitle: 'Registered Users',
  },
  {
    id: 2,
    icon: PersonalSettingsIcon,
    title: '300',
    subtitle: 'Temporary Users',
  },
  {
    id: 3,
    icon: ProductsIcon,
    title: '55',
    subtitle: 'Total Modules',
  },
];

const StatisticsCards = () => {
  return (
    <Grid container spacing={0.25}>
      {stats.map((cardItem) => {
        return (
          <Grid item xs={12} sm={6} xl={3} key={cardItem.id}>
            <StatisticsCardItem cardData={cardItem} index={cardItem.id} totalCount={stats.length} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default StatisticsCards;
