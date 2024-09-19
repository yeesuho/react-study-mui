import { createTheme } from '@mui/material';
import { koKR } from '@mui/material/locale';
import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
  NavLink,
  NavLinkProps,
} from 'react-router-dom';
import { LinkProps } from '@mui/material/Link';
import { forwardRef } from 'react';

const LinkBehavior = forwardRef<
  HTMLAnchorElement,
  Omit<RouterLinkProps, 'to'> & { href: RouterLinkProps['to'] }
>((props, ref) => {
  const { href, ...other } = props;
  return <RouterLink ref={ref} to={href} {...other} />;
});

LinkBehavior.displayName = 'LinkBehavior';

const MuiListItemButtonLink = forwardRef<
  HTMLAnchorElement,
  Omit<NavLinkProps, 'to' | 'className'> & {
    href: NavLinkProps['to'];
    className?: string;
  }
>((props, ref) => {
  const { href, className, ...other } = props;
  return (
    <NavLink
      ref={ref}
      to={href}
      className={({ isActive }) =>
        isActive ? className + ' Mui-selected' : className
      }
      {...other}
    />
  );
});

LinkBehavior.displayName = 'LinkBehavior';

const defaultTheme = createTheme(
  {
    typography: {
      button: {
        wordBreak: 'keep-all',
        whiteSpace: 'nowrap',
      },
      subtitle1: {
        fontWeight: 600,
      },
      subtitle2: {
        fontWeight: 600,
      },
    },
    components: {
      MuiLink: {
        defaultProps: {
          component: LinkBehavior,
        } as LinkProps,
      },
      MuiButtonBase: {
        defaultProps: {
          LinkComponent: LinkBehavior,
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            wordBreak: 'keep-all',
            whiteSpace: 'nowrap',
          },
          sizeLarge: {
            fontWeight: 700,
          },
        },
      },
      MuiListItemButton: {
        defaultProps: {
          LinkComponent: MuiListItemButtonLink,
        },
      },
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          '*': {
            margin: 0,
            padding: 0,
            boxSizing: 'border-box',
            wordBreak: 'keep-all',
          },
          a: {
            width: 'initial',
            textDecoration: 'none',
            color: 'initial',
          },
          html: {
            fontSize: '16px',
            [theme.breakpoints.down('md')]: {
              fontSize: '14px',
            },
            minWidth: '320px',
            background: theme.palette.background.default,
          },
        }),
      },
    },
  },
  koKR
);

export default defaultTheme;
