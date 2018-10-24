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
import NanoClamp from 'nanoclamp';

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
                <Avatar aria-label="Recipe" style={{backgroundColor: toColor(props.name), fontFamily:"'VT323', monospace", fontSize: '30px'}}>
                    {props.name.split(' ').map(word => word[0]).join('').slice(0, 2).toUpperCase()}
                </Avatar>
            }
            title={<span style={{whiteSpace:'nowrap'}}>{props.name}</span>}
            subheader={<ReactGA.OutboundLink  style={{whiteSpace:'nowrap'}} rel="noopener" target="_blank" eventLabel={props.name}
                                             to={'https://' + props.link}>{props.displayLink}
                <OpenInNewIcon
                    fontSize="inherit"/></ReactGA.OutboundLink>}
        />
        <CardContent style={{paddingTop: '0px'}}>
            <Typography component="p" style={{minHeight: '60px'}}>
                <NanoClamp lines="3" is="p" text={props.description}/>
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
