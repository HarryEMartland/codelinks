import React from "react";
import ViewLink from "./ViewLink";

export default class Link extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {

        let slashLocaion = this.props.link.indexOf('/');
        let displayLink = this.props.link;
        if(slashLocaion>0) {
            displayLink = this.props.link.substring(0, slashLocaion);
        }

        return <ViewLink{...this.props} {...this.state}
                        displayLink={displayLink}/>
    }
}