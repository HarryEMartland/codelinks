import {hot} from 'react-hot-loader';
import React from "react";
import LinksList from "./LinksList";
import Typography from "@material-ui/core/Typography/Typography";
import Grid from "@material-ui/core/Grid/Grid";
import ReactGA from 'react-ga';
ReactGA.initialize('UA-127494501-1');

const App = () => <Grid container justify="center">
    <Grid item sm={12} lg={8} xs={12}>
        <Typography component="h2" variant="h3" style={{fontFamily:"'VT323', monospace"}}>
            ://LearnTo.Codes
        </Typography>
        <LinksList/>
        <footer style={{paddingTop: '16px', paddingBottom: '4px'}}>
            <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
                Thanks for using <a href="https://LearnTo.Codes">://LearnTo.Codes</a>.
                Help make this site better by adding more links either by raising an <a rel="noopener" target="_blank" href="https://github.com/HarryEMartland/learnto.codes/issues/new">issue</a> or submitting
                a <a href="https://github.com/HarryEMartland/learnto.codes" target="_blank" rel="noopener">PR</a>.
            </Typography>
        </footer>
    </Grid>
</Grid>;

export default hot(module)(App)