/* eslint-disable @typescript-eslint/no-explicit-any */
import { SvgIconProps } from '@mui/material';

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
