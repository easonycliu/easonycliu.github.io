import React from "react";
import { Link, NavLink } from "react-router-dom";

var noteStyle = {
    fontSize: 12,
    fontWeight: 700,
    color: '#888'
}

const classifications = [
    "magazine",
    "textbook",
    "primer",
    "instruction",
    "autobiography",
    "fairy",
    "fable",
    "dictionary",
    "reference",
    "historical",
    "documentary",
    "realistic",
    "romantic",
    "political",
    "detective"
]

export default class SideMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputValue: '',
        };
    }

    render() {
        return (
            <div className='column sidemenu'>
                <div>
                    <h1><Link style={{ textDecoration:'none', color:'black'}} to="/">My Bookstore</Link></h1>
                    <input onChange={this.inputOnChange}></input>
                    {/* <button onClick={this.buttonOnClick}>search</button> */}
                    <NavLink className="search" to={`/home/${"search"}/${this.state.inputValue}`}>search</NavLink>
                    <p style={noteStyle}>
                        all classifications
                    </p>
                </div>
                <ul>
                    {
                        classifications.map((element, index) => {
                            return (
                                <li key={index}><NavLink to={`/home/${"classification"}/${element}`}>{element}</NavLink></li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    };

    inputOnChange = (e) => {
        this.setState({
            inputValue: e.target.value
        });
    }
};