import React from 'react';
import { PhoneRounded, LocationOnRounded, EmailRounded, LinkRounded, StarRateRounded } from '@material-ui/icons';
import Typography from '@material-ui/core/Typography';
import { Box, Card, CardContent, Link} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import cx from 'classnames';
import headShot from '../../../../src/assets/headshot.jpg'
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
    leftCol: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrast,
        padding: '1rem',
        height: '2400px'
    },
    listItem: {
        padding: 0,
        margin: 0
    },
    listItemText: {
        lineHeight: '100%',
        marginLeft: '-1.75rem',
        marginBottom: '0rem',
        padding: 0
    },
    contentBody: {
        color: theme.palette.primary.contrast
    },
    awardIcon: {
        color: theme.palette.warning.main
    },
    card: {
        backgroundColor: theme.palette.primary.light,
        color: theme.palette.primary.contrastText,
        margin: '-1rem',
        boxShadow: 'none',
        borderRadius: 0,
        padding: 0,
        textAlign: 'center',
        align:'center',
        backgroundColor:theme.palette.secondary.dark
    },
    cardContent: {
        borderRadius: 0,
        paddingBottom: 0
    },
    media: {
        height: 300,
        align: 'center',
        left: '-50'
    },
    icon: {
        height: 16,
        width: 16
    },
    whiteText: {
        color: theme.palette.primary.contrastText,
        paddingBottom: 0
    }
});

class LeftCol extends React.Component{
    constructor(props) {
        super();
    }

    renderContactBlock() {
        let {classes} = this.props
        return (
            <List dense={true}>
                <ListItem className={classes.listItem}>
                    <ListItemIcon>
                        <LocationOnRounded className={classes.icon} color='secondary' fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary={
                        <Typography variant="caption">
                            7753 Skyline Dr.
                            <br></br>
                            Harrisburg PA, 17112
                        </Typography>
                    }/>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemIcon>
                        <PhoneRounded className={classes.icon} color='secondary' fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary={
                        <Typography variant="caption">
                            <Link href={'tel:+14125003600'} className={classes.whiteText}>
                                (412) 500 - 3600
                            </Link>
                        </Typography>
                    }/>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemIcon>
                        <EmailRounded className={classes.icon} color='secondary' fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary={
                        <Typography variant="caption">
                            <Link href={'mailto:derekjgrove@gmail.com'} className={classes.whiteText}>
                                derekjgrove@gmail.com
                            </Link>
                        </Typography>
                    }/>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemIcon>
                        <LinkRounded className={classes.icon} color='secondary' fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary={
                        <Typography variant="caption">
                            <Link href={`https://www.linkedin.com/in/derekjgrove`} className={classes.whiteText}>
                                www.linkedin.com/in/derekjgrove
                            </Link>
                        </Typography>
                    }/>
                </ListItem>
            </List>
        )
    }

    renderAwardBlock() {
        let {classes} = this.props
        return (
            <List dense={true}>
                <ListItem className={classes.listItem}>
                    <ListItemIcon>
                        <StarRateRounded className={classes.icon} className={classes.awardIcon} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary={
                        <Typography variant="caption">
                            Multiple Deloitte cash Applause Awards
                        </Typography>
                    }/>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemIcon>
                        <StarRateRounded className={classes.icon} className={classes.awardIcon} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary={
                        <Typography variant="caption">
                            2nd place PNC API Fest 2.2 Hackathon
                        </Typography>
                    }/>
                </ListItem>
                <ListItem className={classes.listItem}>
                    <ListItemIcon>
                        <StarRateRounded className={classes.icon} className={classes.awardIcon} fontSize="small"/>
                    </ListItemIcon>
                    <ListItemText className={classes.listItemText} primary={
                        <Typography variant="caption">
                            PHEAA Ready to Succeed Scholarship Recipient
                        </Typography>
                    }/>
                </ListItem>
            </List>
        )
    }

    render () {
        let {classes} = this.props

        return (
            <Box
                variant="div"
                className={classes.leftCol}
            >
                <Card
                    className={classes.card}
                >
                    <img
                        className={classes.media}
                        src={headShot}
                    >
                    </img>
                    <CardContent className={classes.cardContent}>
                        <Typography variant="h4">
                            Derek Grove
                        </Typography>
                        <Typography className={classes.whiteText} variant="h6">
                            Full-Stack Developer
                        </Typography>
                    </CardContent>
                </Card>
                <Box marginBottom="2rem" variant="div">

                </Box>
                <Box marginBottom="2rem" variant="div">
                    <Typography variant="h6">
                        Summary
                    </Typography>
                    <Typography variant="body2">
                        Consulting Engineer for MongoDB, Inc. I have 7 years of experience with a strong back-ground within all layers of application development, notably MERN and Oracle/J2EE stacks. I strive to be minimalistic and you'll find me in the great outdoors or in the garage turning wrenches if I'm not behind a desk. 
                    </Typography>
                </Box>
                <Box marginBottom="2rem" variant="div">
                    <Typography variant="h6">
                        Contact
                    </Typography>
                    {this.renderContactBlock()}
                </Box>
                <Box marginBottom="2rem" variant="div">
                    <Typography variant="h6">
                        Awards
                    </Typography>
                    {this.renderAwardBlock()}
                </Box>
            </Box>
        )
    }

}

export default withStyles(styles, { withTheme: true })(LeftCol)