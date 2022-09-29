import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Divider, Link } from '@material-ui/core';
import OpenInNewRoundedIcon from '@material-ui/icons/OpenInNewRounded';
import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    bodyContent: {
        paddingTop: '1rem'
    },
    bodyContentExtraSpace: {
        paddingTop: '9rem'
    },
    title: {
        color: theme.palette.secondary.main,
        textTransform: "uppercase"
    },
    body: {
        paddingTop: '0.5rem'
    }
});

class ExpBlock extends React.Component{
    constructor(props) {
        super();
    }

    renderList (list = []) {
        let { fileName = '' } = this.props
        return (
            <ul>
                {list.map((listItem, index) => {
                    return (<li key={`${fileName}-li-${index}`}>{listItem}</li>)
                })}
            </ul>
        )
    }

    iconClick (address) {
        window.open(address)
    }

    render () {
        let {classes, fileName=''} = this.props
        let fileObj = require(`../../assets/${fileName}`)

        return (

                <Box className={fileObj.extraSpace? classes.bodyContentExtraSpace : classes.bodyContent}>
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
                    {fileObj.rightCol.link && 
                        <Grid
                            container
                            direction="row"
                            spacing={1}
                            alignItems="center"
                        >
                            <Grid item><Link href={fileObj.rightCol.link}>{fileObj.rightCol.link}</Link></Grid>
                            <Grid item><OpenInNewRoundedIcon className={classes.icon} color="action" fontSize="small" onClick={() => this.iconClick(fileObj.rightCol.link)}/></Grid>
                        </Grid>
                    }
                    {this.renderList(fileObj.rightCol.list)}
                </Box>
        )
    }
//OpenInNewRounded
}

export default withStyles(styles, { withTheme: true })(ExpBlock)