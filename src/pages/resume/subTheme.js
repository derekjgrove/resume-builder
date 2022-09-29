import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const primary = {
    light: '#484848',
    main: '#212121',
    dark: '#1b1b1b',
    contrastText: '#fafafa'
};

const secondary = {
    light: '#63ccff',
    main: '#039be5',
    dark: '#006db3',
    contrastText: '#039be5'
};

const warning = {
  light: '#ffff8b',
  main: '#ffee58',
  dark: '#ffee58',
  contrastText: '#ffee58'
}

const theme = 'contrastText'

export default responsiveFontSizes(createMuiTheme({
  palette: {
    primary: primary,
    secondary: secondary,
    warning: warning
  },
  typography: {
    h4: {
      color: primary[theme],
      textTransform: "uppercase"
    },
    h6: {
      color: secondary[theme]
    },
    caption: {
      color: primary['contrastText']
    },
    body2: {
      color: primary['contrastText']
    }
  },
  icons: {
      color: secondary[theme]
  },
  overrides:{
    MuiCardContent: {
      paddingBottom:0
    }
  }
}));