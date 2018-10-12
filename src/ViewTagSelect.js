import tags from "./data/tags";
import React from "react";
import Chip from "@material-ui/core/Chip/Chip";

export default (props) => <div>
    {Object.keys(tags).map(key => <React.Fragment key={key}>
        <Chip label={tags[key].name}
              onClick={() => props.toggleTagFilter(key)}
              color={props.selected.includes(key) ? 'primary' : 'default'}/>&nbsp;
    </React.Fragment>)}
</div>