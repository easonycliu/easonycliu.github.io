import React from "react";
import { Link } from "react-router-dom";

export default class TopMenu extends React.Component {
    render() {
        return(
            <ul className='topmenu'>
                <li><Link className='a' to='/cart'>Cart</Link></li>
                <li><Link className='a' to='/orders'>Orders</Link></li>
            </ul>
        );
    };
};