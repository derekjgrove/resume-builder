import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Avatar, Divider } from '@material-ui/core';
import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    root: {
        paddingBottom: 0
    },
    headerItem: {
        paddingRight: '1rem'
    },
    headerItem2: {
        width: 'calc(100% - 3rem)'
    },
    headerAvatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrast,
        height:'32px',
        width:'32px'
    },
    headerDivider: {
        marginTop: 0,
        paddingBottom: '0.15rem'
    }
});

class HeaderContent extends React.Component{
    constructor(props) {
        super();
    }

    render () {
        let {classes, icon, title} = this.props
        return (
            <Box className={classes.root}>
                <Grid
                    container
                    direction="row"
                    justify="flex-start"
                    alignItems="flex-start"
                >
                    <Grid item className={classes.headerItem}>
                        <Avatar className={classes.headerAvatar}>
                            {icon}
                        </Avatar>
                    </Grid>
                    <Grid item className={classes.headerItem2}>
                        <Typography variant="h6">
                            {title}
                        </Typography>
                        <Divider className={classes.headerDivider} orientation='horizontal'></Divider>
                    </Grid>
                </Grid>
            </Box>
        )
    }

}

export default withStyles(styles, { withTheme: true })(HeaderContent)