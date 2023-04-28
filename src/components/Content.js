import React from "react";

import SideMenu from "./SideMenu.js";
import RightContent from "./RightContent.js";

export default class Content extends React.Component {
    
    constructor(props) {
        super(props);
        this.anchorChanged = this.onAnchorChanged.bind(this);
        this.state = {
            anchor: "Intro",
        };
    }

    onAnchorChanged(newAnchor) {
        console.log(`content set anchor to ${newAnchor}`);
        this.setState({
            anchor : newAnchor
        });
    }

    render() {
        return (
            <div className="bigbox">
                <div className="clearfix">
                    <SideMenu callback={this.anchorChanged}/>
                    <div className="column content">
                        <RightContent anchor={this.state.anchor}/>
                    </div>
                </div>
            </div>
        );
    }
}