import React from "react";
import TopMenu from '../components/TopMenu.js'

export default class Cart extends React.Component {
    render() {
        return(
            <div>
                <TopMenu/>
                <h1>Cart</h1>
            </div>
        )
    }
}