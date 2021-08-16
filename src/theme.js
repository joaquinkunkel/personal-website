import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';
import shape from '@material-ui/core/styles/shape';

const sansSerif = ['ObjectSans', 'system-ui', 'sans-serif'].join(',');
const serif = ['Libre Baskerville', 'ObjectSans', 'sans-serif'].join(',');
const globals = {
  breakpoints: {
    values: {
      xs: 450,
      sm: 720,
      md: 960,
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
      fontFamily: serif,
      fontSize: 60,
    },
    h3: {
      fontWeight: 700,
      fontSize: 50,
    },
    h6: {
      fontFamily: serif,
      fontSize: 18,
      lineHeight: 2,
    },
    body1: {
      fontFamily: serif,
    },
    body2: {
      fontFamily: serif,
    },
    subtitle1: {
      fontSize: 14,
      fontWeight: 700,
    },
    subtitle2: {
      fontFamily: serif,
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
      underline: 'always',
    },
  },
};

export const lightTheme = responsiveFontSizes(createTheme({
  ...globals,
  palette: {
    type: 'light',
    text: {
      primary: 'rgba(25, 54, 34, 0.8)',
      secondary: '#DB2768',
      disabled: 'rgba(25, 54, 34, 0.55)',
    },
    primary: {
      main: 'rgba(25, 54, 34, 0.8)',
    },
    secondary: {
      main: '#DB2768',
    },
    background: {
      // default: '#000',
    },
  },
}));

export const darkTheme = responsiveFontSizes(createTheme({
  ...globals,
  palette: {
    type: 'dark',
    text: {
      primary: 'rgba(255, 255, 255, 0.85)',
      secondary: 'rgba(255, 255, 255, 0.95)',
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    primary: {
      main: 'rgba(255, 255, 255, 0.85)',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#0C1517',
    },
  },
}));

export default lightTheme;
