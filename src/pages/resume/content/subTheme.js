import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const primary = {
    light: '#484848',
    main: '#212121',
    dark: '#000000',
    contrastText: '#fff'
};

const secondary = {
    light: '#63ccff',
    main: '#039be5',
    dark: '#006db3',
    contrastText: '#000'
};

const warning = {
  light: '#ffff8b',
  main: '#ffee58',
  dark: '#ffee58',
  contrastText: '#ffee58'
}

const theme = 'main'

export default responsiveFontSizes(createMuiTheme({
  palette: {
    primary: primary,
    secondary: secondary,
    warning: warning
  },
  typography: {
    h4: {
      color: primary[theme]
    },
    h6: {
      margin: 0,
      padding: 0
    },
    subtitle1: {
      paddingBottom: '0.35rem',
      lineHeight: '100%',
      fontWeight: 'bold',
      letterSpacing: 0,
      fontSize: '0.9rem'
    },
    subtitle2: {
      lineHeight: '125%'
    }
  },
  overrides:{
    MuiSlider: {
      thumb: {
        color: secondary[theme],
        marginBottom: 0
      },
      rail: {
        display: 'none'
      }
    }
  }
}));