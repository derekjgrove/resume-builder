import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Box, Chip, Grid } from '@material-ui/core';
import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';

const rows = 5

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
    },
    chip: {
        margin:'0.2rem'
    }
});

class SkillsBlock extends React.Component{
    constructor(props) {
        super();
    }

    renderList() {
        let {classes, fileName=''} = this.props
        let fileObj = require(`../../assets/${fileName}`)
        return (
            <Box>
                {fileObj.map((listItem, index) => {
                    return (
                        <Chip 
                            size="small"
                            key={`${fileName}-chip-${index}`} 
                            label={listItem}
                            className={classes.chip}
                        >
                        </Chip>
                    )
                })}
            </Box>
        )
    }

    render () {
        let {classes, icon, title} = this.props
        return (
            <Box
         className={classes.root}>
                {this.renderList()}
            </Box>
        )
    }

}

export default withStyles(styles, { withTheme: true })(SkillsBlock)