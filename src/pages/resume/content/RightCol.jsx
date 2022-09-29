import React from 'react';
import { WorkRounded, CodeRounded, SchoolRounded } from '@material-ui/icons';
import { Box } from '@material-ui/core';
import cx from 'classnames';
import withStyles from '@material-ui/core/styles/withStyles';
import HeaderContent from '../../../components/headerContent/HeaderContent';
import ExpBlock from '../../../components/expBlock/ExpBlock';
import SkillsBlock from '../../../components/skillsBlock/SkillsBlock';
import EdBlock from '../../../components/edBlock/EdBlock';


const styles = theme => ({
    rightCol: {
        paddingRight: '1.5rem',
        paddingLeft: '2rem',
        paddingTop: '2rem'
    },
    headerItem: {
        paddingRight: '1rem'
    },
    headerItem2: {
        width: 'calc(100% - 5rem)'
    },
    headerAvatar: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrast
    },
    headerDivider: {
        marginTop: '0.4rem',
        paddingBottom: '0.2rem'
    },
    bodyContent: {
        paddingTop: '1.5rem'
    },
    timeLine: {
        margin: 0,
        padding: 0
    },
    zeroPadding: {
        lineHeight: 0
    },
    icon: {
        width: '16px',
        height: '16px'
    },
    buffer: {
        paddingBottom: '1rem'
    },
    bufferTop: {
        paddingBottom: '1.75rem'
    }
});

class RightCol extends React.Component{
    constructor(props) {
        super();
    }


    render () {
        let {classes, icon, title} = this.props
        return (
            <Box
                variant="div"
                className={classes.rightCol}
            >
                <HeaderContent icon={<WorkRounded className={classes.icon}></WorkRounded>} title={'Professional Experience'}/>
                <ExpBlock
                    fileName={'mongodbExp.json'}
                />
                <ExpBlock
                    fileName={'deloitteExp.json'}
                />
                <ExpBlock
                    fileName={'deloitteExp2.json'}
                />
                <ExpBlock
                    fileName={'pncExp.json'}
                />

                <Box className={classes.bufferTop} />
                <HeaderContent icon={<CodeRounded className={classes.icon}></CodeRounded>} title={'Technical Skills'}/>
                <Box className={classes.buffer} />
                <SkillsBlock fileName={'skills.json'}/>

                <Box className={classes.bufferTop} />
                <HeaderContent icon={<SchoolRounded className={classes.icon}></SchoolRounded>} title={'Education'}/>
                <Box className={classes.buffer} />
                <EdBlock fileName={'education.json'}/>
            </Box>
        )
    }

}

export default withStyles(styles, { withTheme: true })(RightCol)