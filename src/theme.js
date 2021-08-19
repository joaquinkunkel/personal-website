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
      // fontFamily: ['Agrandir', sansSerif].join(','),
      fontFamily: sansSerif,
      fontWeight: 600,
      fontSize: 50,
      // textTransform: 'uppercase',
    },
    h5: {
      fontWeight: 600,
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
      fontFamily: sansSerif,
      fontWeight: 600,
      // letterSpacing: 1.1,
      // textTransform: 'uppercase',
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
      primary: 'rgba(0, 0, 0, 1)',
      secondary: 'rgba(0, 0, 0, 0.5)',
      disabled: 'rgba(0, 0, 0, 0.45)',
    },
    primary: {
      main: 'rgba(0, 0, 0, 0.8)',
    },
    secondary: {
      main: '#7167E2',
    },
    background: {
      default: '#fff',
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
      disabled: 'rgba(255, 255, 255, 0.5)',
    },
    primary: {
      main: 'rgba(255, 255, 255, 0.85)',
    },
    secondary: {
      main: '#c578ff',
    },
    background: {
      default: '#000',
    },
  },
}));

export default lightTheme;
