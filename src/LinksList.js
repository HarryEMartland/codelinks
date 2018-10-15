import React from "react";
import links from './data/links'
import tags from './data/tags'
import ViewLinksList from "./ViewLinksList";
import Grid from "@material-ui/core/Grid/Grid";
import ViewTagSelect from "./ViewTagSelect";
import Button from "@material-ui/core/Button/Button";
import Paper from "@material-ui/core/Paper/Paper";
import Typography from "@material-ui/core/Typography/Typography";

export default class LinksList extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.toggleTagFilter = this.toggleTagFilter.bind(this);
        this.clearTags = this.clearTags.bind(this);
        this.state = {
            selected: [],
            links: links,
            tagCount: this.countTags(links)
        };
    }

    countTags(selectedLinks) {
        const tagCount = {};
        selectedLinks.forEach(link => {
            link.tags.forEach(tag => {
                if (!tagCount[tag]) {
                    tagCount[tag] = 0;
                }
                tagCount[tag] = tagCount[tag] + 1
            })
        });
        return tagCount;
    }

    handleChange(e) {
        const tags = e.target.value;
        const filteredLinks = links.filter(link => {
            return tags.every(tag => link.tags.indexOf(tag) > -1);
        });

        this.setState({selected: tags, links: filteredLinks});

    }

    toggleTagFilter(tag) {
        let selectetags = this.state.selected;
        if (selectetags.includes(tag)) {
            selectetags = this.state.selected.filter(e => e !== tag)
        } else {
            selectetags = [...this.state.selected, tag];
        }
        const filteredLinks = links.filter(link => {
            return selectetags.every(tag => link.tags.indexOf(tag) > -1);
        });

        this.setState({
            selected: selectetags,
            showSecondary: selectetags.length > 0,
            links: filteredLinks,
            tagCount: this.countTags(filteredLinks)
        });
    }

    clearTags() {
        this.setState({selected: [], links: links, tagCount: this.countTags(links)});
    }

    render() {
        return <div>
            <Grid container spacing={16}>
                <Grid item sm={12}>
                    <ViewTagSelect tags={tags} tagCount={this.state.tagCount}
                                   selected={this.state.selected} showSecondary={this.state.showSecondary}
                                   toggleTagFilter={this.toggleTagFilter}/>
                </Grid>
            </Grid>
            <ViewLinksList links={this.state.links} toggleTagFilter={this.toggleTagFilter}/>

            {this.state.links.length === 0 && <Grid container justify="center">
                <Grid item sm={4}><Paper style={{
                    textAlign: 'center',
                    paddingTop: '8px',
                    paddingBottom: '8px',
                    marginTop: '16px'
                }}><Typography component="p">No Links</Typography></Paper></Grid></Grid>}

            {this.state.selected.length > 0 && <Grid container spacing={24} justify="center">
                <Grid item sm={2} style={{textAlign: 'center'}}>
                    <Button variant="contained" onClick={this.clearTags}>Clear Tags</Button>
                </Grid>
            </Grid>}
        </div>
    }

}