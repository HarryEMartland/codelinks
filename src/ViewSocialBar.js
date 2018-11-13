import React from "react";
import Grid from "@material-ui/core/Grid/Grid";

const url = "https://LearnTo.Codes";

export default props => <Grid container spacing={16}>
    <Grid item>
        <div className="fb-like" data-href={url}
             data-layout="button_count" data-action="recommend" data-size="small"
             data-show-faces="true" data-share="false"/>
        &nbsp;
        <a className="twitter-share-button"
           href={`https://twitter.com/intent/tweet?text=Found a great website to help you LearnTo.Codes&url=${url}&hashtags=coding,LearnToCodes,learntocode`}>
            Tweet</a>
    </Grid>
</Grid>