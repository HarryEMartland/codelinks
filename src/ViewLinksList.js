import React from "react";
import Grid from "@material-ui/core/Grid/Grid";
import Link from "./Link";

export default (props) => <Grid container spacing={24}>
    {props.links.map((link) => <Link key={link.name} {...link} toggleTagFilter={props.toggleTagFilter}/>)}
</Grid>