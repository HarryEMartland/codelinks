import {hot} from 'react-hot-loader';
import React from "react";
import LinksList from "./LinksList";
import Typography from "@material-ui/core/Typography/Typography";

const App = () => <div className="container">
    <Typography component="h2" variant="display3" >
        ://CodeLinks.Exchange
    </Typography>
    <LinksList/>
    <footer style={{paddingTop: '16px', paddingBottom: '4px'}}>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
            Thanks for using <a href="https://codelinks.exchange">://codelinks.exchange</a>. Help make this site better by adding more links either by raising an issue or doing a PR.
        </Typography>
    </footer>
</div>;

export default hot(module)(App)