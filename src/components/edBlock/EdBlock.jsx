import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Divider, Link, CircularProgress } from '@material-ui/core';
import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    title: {
        color: theme.palette.secondary.main,
        textTransform: "uppercase"
    },
    body: {
        paddingTop: '0.5rem'
    }
});

class EdBlock extends React.Component{
    constructor(props) {
        super();
    }

    render () {
        let {classes, fileName=''} = this.props
        let fileObj = require(`../../assets/${fileName}`)

        return (

                <Box>
                    <Grid
                        container
                        direction="row"
                        justify="space-between"
                        alignItems="center"
                    >
                        <Grid item><Typography variant="subtitle1">{fileObj.leftCol.subtitle1}</Typography></Grid>
                        <Grid item><Typography variant="subtitle2">{fileObj.leftCol.subtitle2}</Typography></Grid>
                    </Grid>
                    <Typography variant="subtitle2" className={classes.title}>{fileObj.rightCol.subtitle1}</Typography>
                    <Typography variant="body2" className={classes.body}>{fileObj.rightCol.body}</Typography>
                    <Typography variant="body2">{fileObj.rightCol.body1}</Typography>
                </Box>
        )
    }

}

export default withStyles(styles, { withTheme: true })(EdBlock)