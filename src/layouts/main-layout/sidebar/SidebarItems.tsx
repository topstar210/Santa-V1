import { Box, List } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { IMenuitems } from './MenuItems';
import NavItemGroup from './NavItemGroup';
import NavMenuItem from './NavMenuItem';

import CustomersIcon from 'components/icons/menu-icons/CustomersIcon';
import PersonalSettingsIcon from 'components/icons/menu-icons/PersonalSettingsIcon';
import CategoriesIcon from 'components/icons/menu-icons/CategoriesIcon';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';

import { uniqueId } from 'lodash';

import { useAuth } from 'providers/useAuth';

const SidebarItems = () => {
  const { user } = useAuth();

  const location = useLocation();
  const { pathname } = location;

  const Menuitems: IMenuitems[] = [
    {
      id: uniqueId(),
      title: 'Dashboard',
      icon: HomeIcon,
      href: '/',
      available: true,
    },
    {
      id: uniqueId(),
      title: 'Registered Users',
      icon: CustomersIcon,
      href: '/users',
      available: user?.is_admin === 111,
    },
    {
      id: uniqueId(),
      title: 'Temporary Users',
      icon: PersonalSettingsIcon,
      href: '/temporary-users',
      available: user?.is_admin === 111,
    },
    {
      id: uniqueId(),
      title: 'Modules',
      icon: CategoriesIcon,
      href: '/modules',
      available: true,
    },
  ];

  return (
    <Box sx={{ p: 2 }}>
      <List sx={{ pt: 0 }}>
        {Menuitems.map((item) => {
          if (item.subheader) {
            return <NavItemGroup subheader={item.subheader} key={item.subheader} />;
          } else {
            return <NavMenuItem pathTo={pathname} item={item} key={item.id} />;
          }
        })}
      </List>
    </Box>
  );
};

export default SidebarItems;
