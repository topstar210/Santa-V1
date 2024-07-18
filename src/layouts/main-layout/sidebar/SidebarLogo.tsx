import { Link, Typography } from '@mui/material';
import Logo from 'components/icons/brand/Logo';

const SidebarLogo = () => {
  return (
    <Link
      href="/"
      sx={{
        height: 68,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
      }}
    >
      <Logo />
      <Typography variant="h6">
        Five Minute <br /> Friend
      </Typography>
    </Link>
  );
};

export default SidebarLogo;
