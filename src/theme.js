import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import shape from '@material-ui/core/styles/shape';

const sansSerif = ['ObjectSans', 'system-ui', 'sans-serif'].join(',');
const serif = ['Libre Baskerville', 'ObjectSans', 'sans-serif'].join(',');
const globals = {
  breakpoints: {
    values: {
      xs: 450,
      sm: 720,
      md: 900,
      lg: 1200,
      xl: 1800,
    },
  },
  shape: {
    borderRadius: 12,
  },
  typography: {
    fontSize: 14,
    fontFamily: sansSerif,
    h2: {
      fontFamily: sansSerif,
      fontSize: 45,
      fontWeight: 600,
    },
    h3: {
      // fontFamily: ['Agrandir', sansSerif].join(','),
      fontFamily: sansSerif,
      lineHeight: 1.3,
      fontWeight: 700,
      fontSize: 48,
      // textTransform: 'uppercase',
    },
    h5: {
      fontFamily: sansSerif,
      fontWeight: 600,
    },
    h6: {
      fontFamily: serif,
      fontFamily: serif,
      fontSize: 18,
      lineHeight: 2,
    },
    body1: {
      fontFamily: serif,
    },
    body2: {
      lineHeight: 1.6,
      fontFamily: serif,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: sansSerif,
      fontWeight: 600,
      fontSize: 20,
      // letterSpacing: 1.1,
      // textTransform: 'uppercase',
    },
  },

  props: {
    MuiButtonBase: {
      disableRipple: true,
      disableElevation: true,
    },
    MuiTypography: {
      color: 'textPrimary',
    },
    MuiLink: {
      underline: 'never',
    },
  },
};

export const lightTheme = responsiveFontSizes(createTheme({
  ...globals,
  palette: {
    type: 'light',
    text: {
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.5)',
      disabled: 'rgba(0, 0, 0, 0.4)',
    },
    primary: {
      main: 'rgba(0, 0, 0, 0.8)',
    },
    secondary: {
      main: '#9147f2',
    },
    background: {
      default: '#fff',
      paper: 'rgba(255, 255, 255, 0.4)',
    },
    action: {
      hover: 'rgba(0, 0, 0, 0.08)',
      focus: 'rgba(0, 0, 0, 0.12)',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
      },
      outlined: {
        
      },
    }, 
    MuiLink: {
      root: {
        '&:hover': {
          background: 'rgba(145, 71, 242, 0.1)',
        },
        borderRadius: 8,
        padding: 5,
        margin: -5,
        textDecoration: 'none',
        transition: '0.2s all',
      },
    },
  },
}));

export const darkTheme = responsiveFontSizes(createTheme({
  ...globals,
  palette: {
    type: 'dark',
    text: {
      primary: 'rgba(255, 255, 255, 1)',
      secondary: 'rgba(255, 255, 255, 0.6)',
      disabled: 'rgba(255, 255, 255, 0.4)',
    },
    primary: {
      main: 'rgba(255, 255, 255, 0.85)',
    },
    secondary: {
      main: '#c578ff',
    },
    background: {
      default: '#000',
      paper: 'rgba(0, 0, 0, 0.7)',
    },
    action: {
      hover: 'rgba(255, 255, 255, 0.15)',
      focus: 'rgba(255, 255, 255, 0.2)',
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: 'none',
        fontWeight: 600,
      },
      outlined: {
        
      },
    }, 
    MuiLink: {
      root: {
        '&:hover': {
          background: 'rgba(197, 120, 255, 0.4)',
        },
        borderRadius: 8,
        padding: 5,
        margin: -5,
        textDecoration: 'none',
        transition: '0.2s all',
      },
    },
  },
}));

export default lightTheme;
