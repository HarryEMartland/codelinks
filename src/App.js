import {hot} from 'react-hot-loader';
import React from "react";
import LinksList from "./LinksList";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";

const App = () => <Grid container justify="center">
    <Grid item sm={12} lg={8} xs={12}>
        <Typography component="h2" variant="display2">
            ://LearnTo.Codes
        </Typography>
        <LinksList/>
        <footer style={{paddingTop: '16px', paddingBottom: '4px'}}>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Thanks for using <a href="https://codelinks.exchange">://codelinks.exchange</a>.
                Help make this site better by adding more links either by raising an issue or doing
                a PR.
            </Typography>
        </footer>
    </Grid>
</Grid>;

export default hot(module)(App)