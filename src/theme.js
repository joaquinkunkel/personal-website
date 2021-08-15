import { createTheme, responsiveFontSizes } from '@material-ui/core/styles';

const sansSerif = ['ObjectSans', 'system-ui', 'sans-serif'].join(',');
const serif = ['Libre Baskerville', 'ObjectSans', 'sans-serif'].join(',');

export const lightTheme = responsiveFontSizes(createTheme({
    palette: {
      type: 'light',
      text: {
        primary: '#246636',
        secondary: '#DB2768',
        disabled: 'rgba(25, 54, 34, 0.55)',
      },
      primary: {
        main: '#246636',
      },
      secondary: {
        main: '#DB2768',
      },
      background: {
        // default: '#000',
        paper: 'rgba(219, 39, 104, 0.1)',
      },
    },

    shape: {
      borderRadius: 12,
    },

    typography: {
      fontSize: 14,
      fontFamily: sansSerif,
      h6: {
        fontFamily: sansSerif,
      },
      h3: {
        fontWeight: 700,
        fontSize: 60,
      },
      h6: {
        fontFamily: serif,
        fontSize: 24,
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
        text: {
          textTransform: 'none',
          fontWeight: 700,
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
    },
}));

export const darkTheme = responsiveFontSizes(createTheme({
  palette: {
    type: 'dark',
    text: {
      primary: 'rgba(255, 255, 255, 0.8)',
      secondary: '#fff',
      disabled: 'rgba(255, 255, 255, 0.4)',
    },
    primary: {
      main: 'rgba(255, 255, 255, 0.85)',
    },
    secondary: {
      main: '#fff',
    },
    background: {
      default: '#0C1517',
      paper: 'rgba(255, 255, 255, 0.1)',
    },
  },

  shape: {
    borderRadius: 12,
  },

  typography: {
    fontSize: 14,
    fontFamily: sansSerif,
    h6: {
      fontFamily: sansSerif,
    },
    h3: {
      fontWeight: 700,
      fontSize: 60,
    },
    h6: {
      fontFamily: serif,
      fontSize: 22,
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
      text: {
        textTransform: 'none',
        fontWeight: 700,
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
  },
}));

export default lightTheme;
