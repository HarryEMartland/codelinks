import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardHeader from "@material-ui/core/CardHeader/CardHeader";
import Avatar from "@material-ui/core/Avatar/Avatar";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import ReactGA from 'react-ga';

const colors = [
    '#f6685e',
    '#ed4b82',
    '#af52bf',
    '#8561c5',
    '#6573c3',
    '#4dabf5',
    '#35baf6',
    '#33c9dc',
    '#33ab9f',
    '#6fbf73',
    '#a2cf6e',
    '#d7e360',
    '#ffac33',
    '#ff784e'
];

function hashCode(str) { // java String#hashCode
    var hash = 0;
    for (var i = 0; i < str.length; i++) {
        hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    return hash;
}

function toColor(string) {
    return colors[(Math.abs(hashCode(string)) % colors.length)]
}

export default (props) => <Grid item xl={3} lg={4} md={6} sm={12} xs={12}>
    <Card>
        <CardHeader
            avatar={
                <Avatar aria-label="Recipe" style={{backgroundColor: toColor(props.name)}}>
                    {props.name.split(' ').map(word => word[0]).join('').slice(0, 2)}
                </Avatar>
            }
            title={props.name}
            subheader={<ReactGA.OutboundLink rel="noopener" target="_blank" eventLabel={props.name}
                                             to={'https://' + props.link}>{props.displayLink}
                <OpenInNewIcon
                    fontSize="inherit"/></ReactGA.OutboundLink>}
        />
        <CardContent style={{paddingTop: '0px', minHeight: '60px'}}>
            <Typography component="p">
                {props.description}{props.descriptionOverFlow &&
            <a onClick={props.showFullDescription}>...</a>}
            </Typography>
        </CardContent>
        <CardActions>
            {props.tags.map(tag => <Button key={tag} style={{color: toColor(tag)}}
                                           onClick={() => {
                                               props.toggleTagFilter(tag)
                                           }}
                                           variant="contained" size="small">{tag}</Button>)}
        </CardActions>
    </Card>
</Grid>
