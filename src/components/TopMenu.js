import React from "react";
import { Link } from "react-router-dom";

export default class TopMenu extends React.Component {
    render() {
        return(
            <ul className='topmenu'>
                <li><Link className='a' to='/hello'>hello</Link></li>
                <li><Link className='a' to='/world'>world</Link></li>
            </ul>
        );
    };
};