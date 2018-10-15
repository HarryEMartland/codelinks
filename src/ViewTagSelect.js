import tags from "./data/tags";
import React from "react";
import Chip from "@material-ui/core/Chip/Chip";
import Avatar from "@material-ui/core/Avatar/Avatar";

export default ({tagCount, toggleTagFilter, selected, showSecondary}) => <div>
    {Object.keys(tags).filter(key => tagCount[key]).filter(key => tags[key].primary || showSecondary).sort((k1, k2) => tagCount[k2] - tagCount[k1]).map(key =>
        <React.Fragment key={key}>
            <Chip label={tags[key].name}
                  avatar={<Avatar>{tagCount[key]}</Avatar>}
                  onClick={() => toggleTagFilter(key)}
                  color={selected.includes(key) ? 'primary' : 'default'}/>&nbsp;
        </React.Fragment>)}
</div>