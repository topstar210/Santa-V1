import { useEffect, useState } from 'react';
import { Grid, SvgIconProps } from '@mui/material';
import PersonalSettingsIcon from 'components/icons/menu-icons/PersonalSettingsIcon';
import CustomersIcon from 'components/icons/menu-icons/CustomersIcon';
import StatisticsCardItem from './StatisticsCardItem';
import { fetchData } from 'services/apiService';

export interface IStatisticsCard {
  id: number;
  title: string;
  subtitle: string;
  icon: (props: SvgIconProps) => JSX.Element;
}

const ModuleStatisticsCards = () => {
  const [stats, setStats] = useState<any>({
    totalModules: {
      icon: CustomersIcon,
      title: '55',
      subtitle: 'Total Modules',
    },
    completed: {
      icon: PersonalSettingsIcon,
      title: '1000',
      subtitle: 'Total Users',
    },
    uncompleted: {
      icon: PersonalSettingsIcon,
      title: '700',
      subtitle: 'Registered Users',
    },
  });

  useEffect(() => {
    const getData = async () => {
      const { data, status } = await fetchData('/modules');
      if (status) {
        const ttModules = data.length;
        setStats({
          ...stats,
          totalModules: {
            ...stats.totalModules,
            title: ttModules,
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
          <Grid item sm={12} xl={4} key={key}>
            <StatisticsCardItem cardData={stats[key]} index={key} />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default ModuleStatisticsCards;
