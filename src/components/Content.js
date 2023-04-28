import React from "react";
import { Outlet } from "react-router-dom";

import SideMenu from "./SideMenu.js";

export default class Content extends React.Component {
    constructor() {
        super();
        this.state = {
            search: '',
        };
    }

    callback = (inputValue) => {
        this.setState({
            search: inputValue
        });
    }

    render() {
        return (
            <div className='bigbox'>
                <div className='clearfix'>
                    <SideMenu callback={this.callback}/>
                    <div className='column content'>
                        <Outlet/> 
                    </div>
                </div>
            </div>
        );
    }
}