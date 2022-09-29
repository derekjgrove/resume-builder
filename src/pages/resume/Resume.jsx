import React from 'react';
import { Grid } from '@material-ui/core';
import LeftCol from './content/LeftCol'
import { ThemeProvider  } from '@material-ui/core/styles';
import subTheme from './subTheme';
import RightCol from './content/RightCol';

class Resume extends React.Component{
    constructor(props) {
        super();
    }

    render() {
        return (
            <Grid
                container
                direction="row"
                justify="space-between"
                spacing={0}
            >
                <ThemeProvider theme={subTheme}>
                    <Grid item xs={4}><LeftCol></LeftCol></Grid>
                </ThemeProvider>
                <Grid item xs={8}>
                    <RightCol></RightCol>
                </Grid>
            </Grid>
        )
    }
}

export default Resume