import { useEffect, useState } from 'react';
import { Grid, SvgIconProps } from '@mui/material';
import ProductsIcon from 'components/icons/menu-icons/ProductsIcon';
import PersonalSettingsIcon from 'components/icons/menu-icons/PersonalSettingsIcon';
import CustomersIcon from 'components/icons/menu-icons/CustomersIcon';
import StatisticsCardItem from './StatisticsCardItem';
import { fetchData } from 'services/apiService';

export interface IStatisticsCard {
  title: string;
  subtitle: string;
  icon: (props: SvgIconProps) => JSX.Element;
}

const StatisticsCards = () => {
  const [stats, setStats] = useState<any>({
    totalUsers: {
      icon: CustomersIcon,
      title: '1000',
      subtitle: 'Total Users',
    },
    registUsers: {
      icon: PersonalSettingsIcon,
      title: '700',
      subtitle: 'Registered Users',
    },
    tempUsers: {
      icon: PersonalSettingsIcon,
      title: '300',
      subtitle: 'Temporary Users',
    },
    totalModules: {
      icon: ProductsIcon,
      title: '55',
      subtitle: 'Total Modules',
    },
  });

  useEffect(() => {
    const getData = async () => {
      const { data, status } = await fetchData('/users');
      if (status) {
        const ttUser = data.length;
        setStats({
          ...stats,
          totalUsers: {
            ...stats.totalUsers,
            title: ttUser,
          },
        });
      }
    };
    getData();
  }, []);

  return (
    <Grid container spacing={0.25}>
      {Object.keys(stats).map((key: string) => {
        return (
          <Grid item xs={12} sm={6} xl={3} key={key}>
            <StatisticsCardItem cardData={stats[key]} index={key} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default StatisticsCards;
