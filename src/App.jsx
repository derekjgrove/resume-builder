import React from 'react';
import styles from './style.css';
import { Container } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import FragmentContainer from './pages/FragmentContainer'
import { ThemeProvider  } from '@material-ui/core/styles';
import theme from './theme';

class App extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <React.Fragment>
        <CssBaseline />
        <ThemeProvider theme={theme}>
          <Container maxWidth={"xl"} disableGutters={true}>
            <FragmentContainer theme={theme}></FragmentContainer>
          </Container>
        </ThemeProvider >
      </React.Fragment>
    )
  }
}
  
export default App;