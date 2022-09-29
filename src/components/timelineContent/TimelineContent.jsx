import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Grid, Box, Slider, Divider } from '@material-ui/core';
import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

const styles = theme => ({
    bodyContent: {
        paddingTop: 0
    },
    timeLine1: {
        width: '0.15rem',
        height: '100%',
        padding:0,
        margin:0
        // marginTop: '1rem'
    },
    timeLine2: {
        width: '0.15rem'
    },
    dot: {
        padding:0,
        margin:0,
        fontSize: '100%',
        color: theme.palette.secondary.main
    },
    outerBox: {
        position: 'relative',
        height: '100%',
        alignItems: 'center',
        marginTop: '0.5rem'
    },
    innerBox1: {
        position: 'absolute',
        display: 'block'
    },
    innerBox2: {
        position: 'absolute',
        height: '100%',
        display: 'block'
    }
});

class TimelineContent extends React.Component{
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

    render () {
        let {classes, fileName=''} = this.props
        let fileObj = require(`../../assets/${fileName}`)

        return (

                <Box className={classes.bodyContent}>
                    <Grid
                        container
                        direction="row"
                    >
                        <Grid item xs={4}>
                            <Typography variant="subtitle1">{fileObj.leftCol.subtitle1}</Typography>
                            <Typography variant="subtitle2">{fileObj.leftCol.subtitle2}</Typography>
                        </Grid>
                        <Grid
                            item 
                            xs={1}
                        >
                            <Box className={classes.outerBox}>
                            <Box className={classes.innerBox1}><FiberManualRecordIcon className={classes.dot}/></Box>
                            <Box className={classes.innerBox2} left="0.35rem" top="0.75rem"><Divider className={classes.timeLine1} orientation="vertical"></Divider></Box>
                            </Box>
                            
                        </Grid>
                        <Grid item xs={7}>
                            <Typography variant="subtitle1">{fileObj.rightCol.subtitle1}</Typography>
                            <Typography variant="body2">{fileObj.rightCol.body}</Typography>
                            {this.renderList(fileObj.rightCol.list)}
                        </Grid>
                    </Grid>
                </Box>
        )
    }

}

export default withStyles(styles, { withTheme: true })(TimelineContent)