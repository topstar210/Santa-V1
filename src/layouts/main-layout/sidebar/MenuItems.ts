/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvgIconProps } from '@mui/material';
import CustomersIcon from 'components/icons/menu-icons/CustomersIcon';
import PersonalSettingsIcon from 'components/icons/menu-icons/PersonalSettingsIcon';
import CategoriesIcon from 'components/icons/menu-icons/CategoriesIcon';
import HomeIcon from 'components/icons/menu-icons/HomeIcon';

import { uniqueId } from 'lodash';

export interface IMenuitems {
  [x: string]: any;
  id?: string;
  navlabel?: boolean;
  subheader?: string;
  title?: string;
  icon?: (props: SvgIconProps) => JSX.Element;
  href?: string;
  children?: IMenuitems[];
  chip?: string;
  chipColor?: string | any;
  variant?: string | any;
  available?: boolean;
  level?: number;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
}

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
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Temporary Users',
    icon: PersonalSettingsIcon,
    href: '/temporary-users',
    available: true,
  },
  {
    id: uniqueId(),
    title: 'Modules',
    icon: CategoriesIcon,
    href: '/modules',
    available: true,
  },
];

export default Menuitems;
